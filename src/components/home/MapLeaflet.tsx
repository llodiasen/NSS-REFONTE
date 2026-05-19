'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

type Assoc = { acronym: string; name: string }

const PAYS: Array<{
  name: string
  lat: number
  lng: number
  siege?: true
  assoc?: Assoc[]
}> = [
  {
    name: 'Sénégal', lat: 14.6937, lng: -17.4441, siege: true,
    assoc: [
      { acronym: 'AJAC',  name: 'Association des Jeunes Agriculteurs de Casamance' },
      { acronym: 'UGPM',  name: 'Union des Groupements Paysans de Mékhé' },
    ],
  },
  {
    name: 'Gambie', lat: 13.4549, lng: -16.5790,
    assoc: [
      { acronym: 'CGF', name: 'Catalunya Gambia Foundation' },
    ],
  },
  {
    name: 'Guinée-Bissau', lat: 11.8617, lng: -15.5977,
    assoc: [
      { acronym: 'KAFO', name: 'Fédération Paysanne de Kafo' },
    ],
  },
  {
    name: 'Guinée', lat: 9.5370, lng: -13.6773,
    assoc: [
      { acronym: 'AGUISSA', name: 'Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires' },
      { acronym: 'AGAFEM',  name: "Association Guinéenne pour l'Allègement des Charges Féminines" },
    ],
  },
  { name: 'Sierra Leone', lat: 8.4897,  lng: -13.2344 },
  { name: 'Liberia',      lat: 6.3106,  lng: -10.8047 },
  { name: "Côte d'Ivoire", lat: 6.8276, lng: -5.2893  },
  {
    name: 'Mali', lat: 12.6392, lng: -8.0029,
    assoc: [
      { acronym: 'AMASSA', name: 'Association Malienne pour la Sécurité et la Souveraineté Alimentaire' },
      { acronym: 'AOPP',   name: 'Associations des Organisations Professionnelles Paysannes' },
      { acronym: 'CAFO',   name: 'Coordination des Associations et ONG Féminines du Mali' },
    ],
  },
  {
    name: 'Burkina Faso', lat: 12.3647, lng: -1.5333,
    assoc: [
      { acronym: 'FENOP',       name: 'Fédération Nationale des Organisations Paysannes' },
      { acronym: 'RESACIFROAT', name: "Réseau d'Appui à la Citoyenneté des Femmes Rurales Ouest-Africaines et du Tchad" },
    ],
  },
  {
    name: 'Ghana', lat: 5.5600, lng: -0.2057,
    assoc: [
      { acronym: 'RUWFAG', name: 'Rural Women Farmers Association of Ghana' },
      { acronym: 'ABOFAP', name: 'Assono Organic Farming Project' },
    ],
  },
  { name: 'Togo',    lat: 6.1375,  lng: 1.2123 },
  { name: 'Bénin',   lat: 6.3703,  lng: 2.3912 },
  { name: 'Niger',   lat: 13.5137, lng: 2.1098 },
  { name: 'Nigeria', lat: 9.0579,  lng: 7.4951 },
]

function buildPopup(name: string, siege: boolean | undefined, assoc?: Assoc[]): string {
  const header = `
    <div class="nss-lf-ph">
      ${siege ? '<span class="nss-lf-star">★</span>' : ''}
      <span class="nss-lf-country">${name}</span>
      ${siege ? '<span class="nss-lf-badge">Siège NSS</span>' : ''}
    </div>`

  if (assoc && assoc.length > 0) {
    const items = assoc
      .map(a => `<li class="nss-lf-ai"><span class="nss-lf-acr">${a.acronym}</span><span class="nss-lf-an">${a.name}</span></li>`)
      .join('')
    return `<div class="nss-lf-popup">${header}<ul class="nss-lf-al">${items}</ul></div>`
  }

  return `<div class="nss-lf-popup">${header}<p class="nss-lf-dev">Réseau en développement</p></div>`
}

export default function MapLeaflet() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<{ remove: () => void } | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    let cancelled = false

    ;(async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current || mapRef.current) return

      const isMobile = 'ontouchstart' in window

      const map = L.map(containerRef.current!, {
        center: [12, -4],
        zoom: 4,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: !isMobile,
        // tap removed — not in Leaflet MapOptions types
        attributionControl: true,
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://carto.com/" target="_blank" rel="noopener">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 9,
        minZoom: 3,
      }).addTo(map)

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      PAYS.forEach(({ name, lat, lng, siege, assoc }) => {
        const icon = L.divIcon({
          className: 'nss-lf-marker',
          iconSize: siege ? [22, 22] : [14, 14],
          iconAnchor: siege ? [11, 11] : [7, 7],
          popupAnchor: [0, siege ? -14 : -9],
          html: siege
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" style="display:block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25))">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill="#E8A838" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
               </svg>`
            : `<span style="display:block;width:14px;height:14px;border-radius:50%;background:#045627;border:2.5px solid #fff;box-shadow:0 2px 5px rgba(4,86,39,0.45)"></span>`,
        })

        L.marker([lat, lng], { icon })
          .bindPopup(buildPopup(name, siege, assoc), {
            className: 'nss-lf-popup-wrap',
            closeButton: false,
            maxWidth: 280,
            minWidth: 160,
          })
          .addTo(map)
      })

      mapRef.current = map
      setTimeout(() => map.invalidateSize(), 0)
    })()

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div className="nss-lf-container">
      <div ref={containerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
