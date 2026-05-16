"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Users, X } from 'lucide-react'
import { CIFAP_EDITIONS } from '@/data/cifap/index'

/* ── Type édition ── */
type CifapEdition = (typeof CIFAP_EDITIONS)[number]

/* ── Modal info par édition ── */
function EditionModal({ ed, locale, onClose }: { ed: CifapEdition; locale: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]
    const trap  = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    el.addEventListener('keydown', trap)
    return () => el.removeEventListener('keydown', trap)
  }, [])

  return (
    <motion.div
      className="cf-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cf-modal-title"
        aria-describedby="cf-modal-body"
        className="cf-modal"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="cf-modal-hd">
          <div className="cf-modal-hd-top">
            <span className={`cf-modal-badge cf-modal-badge--${ed.status}`}>
              {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
            </span>
            <button className="cf-modal-close" onClick={onClose} aria-label="Fermer">
              <X size={16} />
            </button>
          </div>
          <p className="cf-modal-edition-num">{ed.label}</p>
          <h2 id="cf-modal-title" className="cf-modal-theme">{ed.theme}</h2>
          <div className="cf-modal-hd-sep" aria-hidden="true" />
        </div>

        {/* ── Body ── */}
        <div id="cf-modal-body" className="cf-modal-body">

          {/* Détails grid */}
          <div className="cf-modal-details">
            <div className="cf-modal-detail-item">
              <span className="cf-modal-detail-icon"><Calendar size={13} /></span>
              <div>
                <span className="cf-modal-detail-lbl">Dates</span>
                <span className="cf-modal-detail-val">{ed.dates}</span>
              </div>
            </div>
            <div className="cf-modal-detail-item">
              <span className="cf-modal-detail-icon"><MapPin size={13} /></span>
              <div>
                <span className="cf-modal-detail-lbl">Lieu</span>
                <span className="cf-modal-detail-val">Niaguis, Ziguinchor — Sénégal</span>
              </div>
            </div>
            <div className="cf-modal-detail-item">
              <span className="cf-modal-detail-icon"><Users size={13} /></span>
              <div>
                <span className="cf-modal-detail-lbl">Participantes</span>
                <span className="cf-modal-detail-val">{ed.participants ?? 'À définir'}</span>
              </div>
            </div>
            <div className="cf-modal-detail-item">
              <span className="cf-modal-detail-icon">🌍</span>
              <div>
                <span className="cf-modal-detail-lbl">Pays</span>
                <span className="cf-modal-detail-val">8 pays d&apos;Afrique de l&apos;Ouest</span>
              </div>
            </div>
          </div>

          {/* Objectifs */}
          <div className="cf-modal-section">
            <p className="cf-modal-section-lbl">🎯 Objectifs</p>
            <ul className="cf-modal-list" aria-label="Objectifs de l'édition">
              {ed.objectives.map((obj) => (
                <li key={obj} className="cf-modal-list-item">{obj}</li>
              ))}
            </ul>
          </div>

          {/* Thèmes abordés */}
          <div className="cf-modal-section">
            <p className="cf-modal-section-lbl">🌱 Thèmes abordés</p>
            <ul className="cf-modal-list" aria-label="Thèmes abordés">
              {ed.themes.map((t) => (
                <li key={t} className="cf-modal-list-item">{t}</li>
              ))}
            </ul>
          </div>

          {/* Citation */}
          <blockquote className="cf-modal-quote">
            <p className="cf-modal-quote-text">&laquo;&nbsp;{ed.quote}&nbsp;&raquo;</p>
            <footer className="cf-modal-quote-footer">
              <strong className="cf-modal-quote-name">{ed.quoteName}</strong>
              <span className="cf-modal-quote-role">{ed.quoteRole}</span>
            </footer>
          </blockquote>
        </div>

        {/* ── Footer ── */}
        <div className="cf-modal-foot">
          {ed.href ? (
            <Link href={`/${locale}${ed.href}`} className="cf-modal-cta">
              Voir l&apos;édition complète →
            </Link>
          ) : (
            <Link href={`/${locale}/contact`} className="cf-modal-cta">
              Exprimer vos priorités →
            </Link>
          )}
          <button className="cf-modal-close-btn" onClick={onClose}>Fermer</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Variants ── */
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

/* ── StaggerGrid ── */
function StaggerGrid({ className, stagger = 0.09, children }: { className?: string; stagger?: number; children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

/* ── CountUp ── */
function CountUp({ value }: { value: string }) {
  const match   = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  const prefix  = match?.[1] ?? ''
  const numeric = match ? parseInt(match[2], 10) : NaN
  const suffix  = match?.[3] ?? ''
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || isNaN(numeric)) return
    let frame = 0
    const frames = 52
    const id = setInterval(() => {
      frame++
      setCount(Math.round((frame / frames) * numeric))
      if (frame >= frames) clearInterval(id)
    }, 18)
    return () => clearInterval(id)
  }, [inView, numeric])

  return <span ref={ref}>{isNaN(numeric) ? value : `${prefix}${count}${suffix}`}</span>
}

/* ── SVG Icons par édition ── */
const EditionIcons: Record<string, React.ReactNode> = {
  '2022': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12M12 12C12 12 7 9 4 4c4 0 8 3 8 8zM12 12c0 0 5-3 8-8-4 0-8 3-8 8z"/>
    </svg>
  ),
  '2023': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"/>
    </svg>
  ),
  '2024': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22c4.97 0 9-6.268 9-12A9 9 0 0 0 3 10c0 5.732 4.03 12 9 12z"/><path d="M12 22V10"/>
    </svg>
  ),
  '2025': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  '2026': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
}

/* ── SectionHeader — eyebrow + animated h2 + underline draw + subtitle ── */
function SectionHeader({ eyebrow, title, sub, titleId, left }: {
  eyebrow: string
  title?: string
  sub?: string
  titleId?: string
  left?: boolean
}) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className={`cf-shd${left ? ' cf-shd--left' : ''}`}>
      <motion.p
        className="cf-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {eyebrow}
      </motion.p>
      {title && (
        <>
          <motion.h2
            id={titleId}
            className="cf-sec-h2"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="cf-sec-underline"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.22 }}
            style={{ transformOrigin: 'center' }}
            aria-hidden="true"
          />
        </>
      )}
      {sub && (
        <motion.p
          className="cf-sec-sub"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.14 }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}

/* ── Carte Leaflet (client-only via useEffect) ── */
function LeafletMap() {
  const mapRef         = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Inject Leaflet CSS once
    if (!document.getElementById('leaflet-css')) {
      const link    = document.createElement('link')
      link.id       = 'leaflet-css'
      link.rel      = 'stylesheet'
      link.href     = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    import('leaflet').then((mod) => {
      const L = mod.default ?? mod
      if (!mapRef.current || mapInstanceRef.current) return

      const map = L.map(mapRef.current, {
        center:          [13.852, -14.9483],
        zoom:            15,
        scrollWheelZoom: true,
        zoomControl:     true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      const pinIcon = L.divIcon({
        className: '',
        html: `<svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 0C7.611 0 0 7.611 0 17c0 12.375 17 25 17 25S34 29.375 34 17C34 7.611 26.389 0 17 0z" fill="#00AD4C"/>
          <circle cx="17" cy="17" r="7" fill="#fff"/>
          <circle cx="17" cy="17" r="4" fill="#00AD4C"/>
        </svg>`,
        iconSize:    [34, 42],
        iconAnchor:  [17, 42],
        popupAnchor: [0, -46],
      })

      L.marker([13.852, -14.9483], { icon: pinIcon })
        .bindPopup(`
          <div style="font-family:sans-serif;padding:6px 2px;min-width:210px;">
            <strong style="font-size:14px;color:#2A2A2A;">Centre Karonghen Wati Naning</strong><br/>
            <span style="font-size:12px;color:#666;">Niaguis, Ziguinchor — Sénégal</span><br/><br/>
            <span style="font-size:12px;color:#555;font-style:italic;">
              Centre de démonstration des bonnes pratiques agroécologiques paysannes — modèle pilote du mouvement NSS
            </span>
          </div>
        `)
        .addTo(map)

      mapInstanceRef.current = map
    })

    return () => {
      mapInstanceRef.current?.remove()
      mapInstanceRef.current = null
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="cf-lieu-map"
      role="application"
      aria-label="Carte du Centre Karonghen Wati Naning à Niaguis, Sénégal"
    />
  )
}

/* ════════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
════════════════════════════════════════════════════ */
const CIFAP_VIDEO_ID = 'VIDEO_ID_CIFAP_2025'
const CIFAP_THUMB = `https://img.youtube.com/vi/${CIFAP_VIDEO_ID}/maxresdefault.jpg`

export default function CIFAPMainPage({ locale }: { locale: string }) {
  const ctaRef   = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  const [selectedEdition, setSelectedEdition] = useState<CifapEdition | null>(null)
  const [videoModal, setVideoModal] = useState(false)

  useEffect(() => {
    if (!videoModal) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoModal(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [videoModal])

  /* ── Slider éditions ── */
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const onScroll = () => {
      let closest = 0, minDist = Infinity
      for (let i = 0; i < el.children.length; i++) {
        const child = el.children[i] as HTMLElement
        const dist = Math.abs(child.offsetLeft - el.scrollLeft)
        if (dist < minDist) { minDist = dist; closest = i }
      }
      setActiveIdx(closest)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToCard = (idx: number) => {
    const el = sliderRef.current
    if (!el) return
    const card = el.children[idx] as HTMLElement
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }
  const handlePrev = () => scrollToCard(Math.max(activeIdx - 1, 0))
  const handleNext = () => scrollToCard(Math.min(activeIdx + 1, CIFAP_EDITIONS.length - 1))

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <motion.section
        className="cf-hero"
        aria-labelledby="cf-h1"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="cf-hero__overlay" aria-hidden="true" />
        <div className="cf-hero__body">

          <motion.div
            className="cf-hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
          >
            <span className="cf-hero__eyebrow-line" aria-hidden="true" />
            <span>NOS PROGRAMMES</span>
            <span className="cf-hero__eyebrow-sep" aria-hidden="true">·</span>
            <span>CIFAP</span>
            <span className="cf-hero__eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h1
            id="cf-h1"
            className="cf-hero__h1"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.62 }}
          >
            Camp International de Formation<br />en Agroécologie Paysanne
          </motion.h1>

          <motion.p
            className="cf-hero__sub"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.52 }}
          >
            Cultiver, transformer, vendre — maîtriser l&apos;agroécologie paysanne.
            Depuis 2022, NSS réunit chaque année des leaders et techniciens
            des Associations de Femmes Rurales d&apos;Afrique de l&apos;Ouest
            autour d&apos;un thème précis, dans une logique de progression cumulative.
          </motion.p>

          <motion.div
            className="cf-hero__stats"
            role="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.5 }}
          >
            {[
              { val: '4',    lbl: 'Éditions' },
              { val: '8',    lbl: 'Pays' },
              { val: '200+', lbl: 'Participantes formées' },
            ].map((s, i) => (
              <span key={s.lbl} role="listitem" className="cf-hero__stat">
                <span className="cf-hero__stat-val"><CountUp value={s.val} /></span>
                <span className="cf-hero__stat-lbl">{s.lbl}</span>
                {i < 2 && <span className="cf-hero__sep" aria-hidden="true" />}
              </span>
            ))}
            <span role="listitem" className="cf-hero__loc">
              <MapPin size={11} aria-hidden="true" />
              <span>Niaguis, Sénégal · Depuis 2022</span>
            </span>
          </motion.div>

        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════
          1. PRÉSENTATION + VIDÉO — fond blanc
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-pres-h2">
        <div className="cf-sec__inner">
          <div className="cf-pv-layout">
            <div className="cf-pv-left">
              <SectionHeader
                titleId="cf-pres-h2"
                eyebrow="LE CIFAP"
                title="Un camp continental pour l'agroécologie paysanne."
                sub="Former les leaders, relier les territoires, construire la durabilité — depuis 2022 à Niaguis, Sénégal."
                left
              />
              <motion.p
                className="cf-pres-text"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                Le CIFAP est bien plus qu&apos;une formation : c&apos;est une voix continentale
                pour la souveraineté alimentaire. Comme l&apos;affirme Mariama Sonko, présidente NSS :{' '}
                <em className="cf-pres-quote">
                  &laquo;&nbsp;Dans l&apos;agroécologie, nous recherchons la souveraineté alimentaire.
                  Et pour être souverain, il faut arriver à avoir le droit de produire ce que vous
                  voulez manger.&nbsp;&raquo;
                </em>{' '}
                Organisée chaque année par le mouvement panafricain NSS au Centre Karonghen Wati Naning
                de Niaguis, chaque édition réunit femmes rurales, techniciens agricoles et leaders
                communautaires d&apos;Afrique de l&apos;Ouest autour d&apos;un thème agroécologique précis.
              </motion.p>
              <motion.div
                className="cf-pv-cta"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <Link href={`/${locale}/agir/rejoindre`} className="cf-pv-cta__btn cf-pv-cta__btn--primary">
                  Rejoindre le CIFAP 2026
                </Link>
              </motion.div>
            </div>
            <div className="cf-pv-right">
              <div className="cf-pv-sticky">
                <div
                  className="cf-pv-video-wrap"
                  style={{ backgroundImage: `url(${CIFAP_THUMB})` }}
                >
                  <div className="cf-pv-vid-overlay" aria-hidden="true" />
                  <button
                    className="cf-pv-play"
                    onClick={() => setVideoModal(true)}
                    aria-label="Regarder la vidéo CIFAP"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" aria-hidden style={{ paddingLeft: '3px' }}>
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </button>
                  <p className="cf-pv-play-label">REGARDER LE FILM</p>
                </div>
                <blockquote className="cf-pv-testimonial">
                  <p>&laquo;&nbsp;Grâce au CIFAP, j&apos;ai appris des techniques que j&apos;applique directement dans mon groupement. Nos récoltes ont augmenté et nous n&apos;avons plus besoin de produits chimiques.&nbsp;&raquo;</p>
                  <footer>— <strong>Mme Tabara Diatta</strong>, participante CIFAP 2024 · Sénégal</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════
          3. TRIPLE VOCATION — fond blanc, texte pur
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-voc-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-voc-h2"
            eyebrow="FONDATIONS"
            title="Trois principes pour transformer l'agroécologie."
            sub="Former des experts, relier les territoires, construire la durabilité — trois leviers d'un même mouvement."
          />
          <StaggerGrid className="cf-tv-grid" stagger={0.1}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-label="Principe de formation">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                ),
                title: 'Former',
                desc: "Outils concrets pour une agriculture autonome et durable — techniques agroécologiques ancrées dans les réalités locales, transmises par des experts et praticiens issus du mouvement paysan. Chaque édition CIFAP renforce les capacités techniques des leaders et techniciens agricoles.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-label="Principe de mise en réseau">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Relier',
                desc: "Une voix continentale pour la souveraineté alimentaire — créer un réseau de femmes rurales qui échangent, comparent et adaptent leurs pratiques d'un pays à l'autre. Le CIFAP réunit chaque année 8 pays d'Afrique de l'Ouest autour d'une vision commune : l'autonomie alimentaire des peuples.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-label="Principe de durabilité">
                    <path d="M12 22V12M12 12C12 12 7 9 4 4c4 0 8 3 8 8zM12 12c0 0 5-3 8-8-4 0-8 3-8 8z"/>
                  </svg>
                ),
                title: 'Durer',
                desc: "Inscrire les savoirs paysans dans les territoires d'une édition à l'autre, en enrichissant les savoirs endogènes sans les remplacer — une mémoire vivante au service des générations. La logique cumulative du CIFAP garantit que chaque année construit sur les acquis de la précédente.",
              },
            ].map((v) => (
              <motion.article key={v.title} className="cf-tv-item" variants={fadeUp}>
                <div className="cf-tv-icon">{v.icon}</div>
                <h3 className="cf-tv-title">{v.title}</h3>
                <p className="cf-tv-text">{v.desc}</p>
              </motion.article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. OBJECTIFS — fond alt #FAFAF8
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-obj-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-obj-h2"
            eyebrow="MISSION"
            title="Renforcer les capacités des leaders paysans."
            sub="Former, relier, durer — la triple vocation du CIFAP au service de la souveraineté alimentaire."
          />
          <StaggerGrid className="cf-obj-grid" stagger={0.08}>
            {[
              {
                icon: '📚',
                title: 'Former des leaders qui changent leurs territoires',
                desc: 'Renforcer les capacités des leaders paysans, techniciens et animateurs en techniques agroécologiques appliquées — des compétences immédiatement transférables sur le terrain.',
              },
              {
                icon: '🌾',
                title: "Diffuser l'agroécologie paysanne",
                desc: "Disséminer des pratiques agricoles respectueuses de l'environnement et reproductibles dans chaque pays membre du réseau NSS.",
              },
              {
                icon: '📈',
                title: 'Améliorer rendements & autonomie',
                desc: "Augmenter les rendements agricoles et la viabilité économique des exploitations — santé des sols, réduction des intrants chimiques, revenus préservés.",
              },
              {
                icon: '🤝',
                title: 'Consolider la souveraineté alimentaire',
                desc: "Ancrer la souveraineté alimentaire en Afrique de l'Ouest à travers des pratiques agroécologiques paysannes durables maîtrisées par les communautés.",
              },
              {
                icon: '🌍',
                title: 'Construire un réseau continental',
                desc: "Tisser un réseau de femmes rurales organisées capables d'essaimer l'agroécologie paysanne dans leurs territoires, d'un pays à l'autre, d'une génération à l'autre.",
              },
            ].map((o) => (
              <motion.div key={o.title} className="cf-obj-item" variants={fadeUp}>
                <span className="cf-obj-icon" aria-hidden="true">{o.icon}</span>
                <div>
                  <strong className="cf-obj-title">{o.title}</strong>
                  <p className="cf-obj-desc">{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. PILIERS — fond alt #FAFAF8
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-pil-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-pil-h2"
            eyebrow="ARCHITECTURE"
            title="Trois piliers pour la souveraineté alimentaire."
            sub="Terre, semences, eau — les fondations de l'agroécologie paysanne portée par le mouvement NSS."
          />
          <StaggerGrid className="cf-pillars-grid" stagger={0.1}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                  </svg>
                ),
                title: 'La Terre',
                desc: 'Fertilité, régénération des sols, conduite agroécologique — redonner vie à la terre pour des rendements durables et des exploitations autonomes.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4.97 0 9-6.268 9-12A9 9 0 0 0 3 10c0 5.732 4.03 12 9 12z"/><path d="M12 22V10"/>
                  </svg>
                ),
                title: 'Les Semences',
                desc: "Autonomie semencière paysanne — conservation, reproduction et diffusion des variétés locales pour s'affranchir de la dépendance aux semences commerciales.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                ),
                title: "L'Eau",
                desc: "Gestion écologique des ressources hydriques, irrigation paysanne durable — préserver l'eau comme bien commun pour les générations futures.",
              },
            ].map((p) => (
              <motion.div key={p.title} className="cf-pillar" variants={fadeUp}>
                <div className="cf-pillar__icon">{p.icon}</div>
                <strong className="cf-pillar__title">{p.title}</strong>
                <p className="cf-pillar__desc">{p.desc}</p>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. SLIDER ÉDITIONS — fond blanc
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-ed-h2">
        <div className="cf-sec__inner cf-sec__inner--slider">

          <SectionHeader
            titleId="cf-ed-h2"
            eyebrow="PARCOURIR"
            title="Parcourez les éditions du CIFAP."
            sub="Chaque édition approfondit un thème précis, dans une logique pédagogique cumulative portée par le mouvement NSS."
          />

          {/* Slider outer — position:relative pour chevrons absolus */}
          <div className="cf-slider-outer">

            {/* Chevrons desktop/tablet — position absolue */}
            <button
              className="cf-sld-btn cf-sld-prev"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Édition précédente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="cf-slider"
              role="region"
              aria-label="Éditions CIFAP carousel"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') handleNext()
                if (e.key === 'ArrowLeft')  handlePrev()
              }}
            >
              {CIFAP_EDITIONS.map((ed, i) => (
                <motion.article
                  key={ed.year}
                  className={`cf-card${ed.status === 'upcoming' ? ' cf-card--upcoming' : ''}`}
                  style={{ '--card-accent': ed.accent } as React.CSSProperties}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: i * 0.08, duration: 0.42, ease: 'easeOut' }}
                  whileHover={ed.status !== 'upcoming' ? { y: -4, scale: 1.015, transition: { duration: 0.2 } } : {}}
                >
                  {/* ── Photo zone ── */}
                  <div className="cf-card__photo">
                    {ed.photo
                      ? <img className="cf-card__photo-img" src={ed.photo} alt="" loading="lazy" />
                      : (
                        <div className="cf-card__photo-placeholder" aria-hidden="true">
                          <div className="cf-card__photo-icon">{EditionIcons[ed.year]}</div>
                          <div className="cf-card__photo-pattern" />
                        </div>
                      )
                    }
                    <div className="cf-card__photo-scrim" aria-hidden="true" />
                    <span className={`cf-card__badge cf-card__badge--${ed.status}`}>
                      {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
                    </span>
                  </div>

                  {/* ── Contenu ── */}
                  <div className="cf-card__content">
                    <div className="cf-card__body">
                      <div className="cf-card__num-row">
                        <p className="cf-card__num">{ed.num} ÉDITION</p>
                        <span className="cf-card__year-badge">{ed.year}</span>
                      </div>
                      <h3 className="cf-card__theme">{ed.theme}</h3>
                    </div>

                    <div className="cf-card__meta">
                      <span className="cf-card__meta-item">
                        <Calendar size={11} aria-hidden="true" />
                        {ed.dates}
                      </span>
                      <span className="cf-card__meta-item">
                        <MapPin size={11} aria-hidden="true" />
                        Niaguis, Sénégal
                      </span>
                      {ed.participants ? (
                        <span className="cf-card__meta-item cf-card__meta-item--participants">
                          <Users size={11} aria-hidden="true" />
                          {ed.participants}
                        </span>
                      ) : (
                        <span className="cf-card__meta-item cf-card__meta-item--participants">
                          <Users size={11} aria-hidden="true" />
                          — · 8 pays
                        </span>
                      )}
                    </div>

                    <div className="cf-card__foot">
                      {ed.href ? (
                        <Link href={`/${locale}${ed.href}`} className="cf-card__cta" aria-label={`Voir ${ed.label}`}>
                          Voir l&apos;édition →
                        </Link>
                      ) : (
                        <span className="cf-card__cta cf-card__cta--disabled">
                          Bientôt disponible
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <button
              className="cf-sld-btn cf-sld-next"
              onClick={handleNext}
              disabled={activeIdx === CIFAP_EDITIONS.length - 1}
              aria-label="Édition suivante"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="cf-slider-dots" role="tablist" aria-label="Navigation éditions">
            {CIFAP_EDITIONS.map((ed, i) => (
              <button
                key={ed.year}
                role="tab"
                aria-selected={i === activeIdx}
                aria-label={`Aller à ${ed.label}`}
                className={`cf-slider-dot${i === activeIdx ? ' cf-slider-dot--active' : ''}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>

          {/* Chevrons mobile — sous les dots */}
          <div className="cf-sld-mob-nav" aria-hidden="true">
            <button
              className="cf-sld-mob-btn"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Édition précédente"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              className="cf-sld-mob-btn"
              onClick={handleNext}
              disabled={activeIdx === CIFAP_EDITIONS.length - 1}
              aria-label="Édition suivante"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

        </div>
      </section>



      {/* ══════════════════════════════════════════════
          11. CTA FINAL — fond vert foncé #045627
      ══════════════════════════════════════════════ */}
      <motion.section
        ref={ctaRef}
        className="cf-cta"
        aria-labelledby="cf-cta-h2"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="cf-cta__body">
          <motion.p
            className="cf-cta__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            5ÈME ÉDITION — SEPTEMBRE 2026
          </motion.p>
          <motion.h2
            id="cf-cta-h2"
            className="cf-cta__h2"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.22, duration: 0.52 }}
          >
            Rejoindre le prochain CIFAP
          </motion.h2>
          <motion.p
            className="cf-cta__sub"
            initial={{ opacity: 0, y: 12 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.32, duration: 0.48 }}
          >
            La 5ème édition se tiendra à Niaguis en septembre 2026. Rejoignez
            le mouvement pour la souveraineté alimentaire en Afrique de l&apos;Ouest.
          </motion.p>
          <motion.div
            className="cf-cta__btns"
            initial={{ opacity: 0, y: 10 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.42, duration: 0.48 }}
          >
            <Link href={`/${locale}/agir/rejoindre`} className="cf-cta__btn cf-cta__btn--primary" aria-label="S'inscrire au CIFAP 2026">
              S&apos;inscrire
            </Link>
            <Link href={`/${locale}/agir/soutenir`} className="cf-cta__btn cf-cta__btn--outline" aria-label="Soutenir le programme CIFAP">
              Soutenir le programme
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════
          12. LIEU DE RÉFÉRENCE — carte interactive
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-lieu-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-lieu-h2"
            eyebrow="OÙ"
            title="Centre Karonghen Wati Naning — Niaguis."
            sub="Un modèle de formation agroécologique à dupliquer dans chaque pays membre NSS."
          />

          {/* Carte Leaflet */}
          <motion.div
            className="cf-lieu-map-wrap"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <LeafletMap />
          </motion.div>

        </div>
      </section>

      {/* ── Modal édition ── */}
      <AnimatePresence>
        {selectedEdition && (
          <EditionModal
            ed={selectedEdition}
            locale={locale}
            onClose={() => setSelectedEdition(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Modal vidéo CIFAP ── */}
      {videoModal && (
        <div
          style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(2,22,10,0.92)', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px', backdropFilter:'blur(8px)', animation:'cfVidIn 0.18s ease' }}
          onClick={() => setVideoModal(false)}
          role="dialog" aria-modal="true" aria-label="Vidéo CIFAP"
        >
          <button
            onClick={() => setVideoModal(false)}
            aria-label="Fermer"
            style={{ position:'fixed', top:'20px', right:'24px', width:'40px', height:'40px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.18)', borderRadius:'50%', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ width:'100%', maxWidth:'900px', aspectRatio:'16/9', borderRadius:'8px', overflow:'hidden', background:'#000' }}>
            <iframe
              style={{ width:'100%', height:'100%', border:'none' }}
              src={`https://www.youtube-nocookie.com/embed/${CIFAP_VIDEO_ID}?autoplay=1&rel=0`}
              title="CIFAP — Agroécologie Paysanne NSS"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <style>{`@keyframes cfVidIn { from { opacity:0 } to { opacity:1 } }`}</style>

    </>
  )
}
