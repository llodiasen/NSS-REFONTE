"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import {
  CIFAP_EDITIONS,
  CIFAP_PAYS,
  CIFAP_PARTENAIRES_NSS,
  CIFAP_PARTENAIRES_BAILLEURS,
} from '@/data/cifap/index'

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
export default function CIFAPMainPage({ locale }: { locale: string }) {
  const tlRef    = useRef(null)
  const tlInView = useInView(tlRef, { once: true, margin: '-40px' })
  const ctaRef   = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  const [selectedEdition, setSelectedEdition] = useState<CifapEdition | null>(null)
  const progSwiperRef = useRef<SwiperType | null>(null)
  const [progIdx, setProgIdx] = useState(0)

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
                <div className="cf-pv-video-wrap">
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID_CIFAP_2025"
                    title="CIFAP 4e édition 2025 — Agroécologie Paysanne NSS"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
          2. PROGRESSION — fond alt #FAFAF8
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-proc-h2">
        {/* Header centré */}
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-proc-h2"
            eyebrow="PROGRESSION"
            title="Quatre ans de formation cumulative."
            sub="Chaque édition approfondit un thème agroécologique précis, construisant progressivement l'expertise du mouvement NSS."
          />
        </div>

        {/* Corps full-width */}
        <div className="cf-prog-body" ref={tlRef}>

          {/* ── Timeline visuelle (desktop) — 3 nœuds dynamiques ── */}
          <div className="cf-prog-vis" aria-hidden="true">
            {CIFAP_EDITIONS.slice(progIdx, progIdx + 3).map((ed, i) => (
              <div key={`vis-pos-${i}`} className={`cf-prog-vis-col${ed.status === 'upcoming' ? ' cf-prog-vis-col--upcoming' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ed.year}
                    className="cf-prog-vis-year"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.18 }}
                  >
                    {ed.year}
                  </motion.span>
                </AnimatePresence>
                <div className="cf-prog-vis-row">
                  <motion.div
                    className={`cf-rd-dot${ed.status === 'upcoming' ? ' cf-rd-dot--upcoming' : ''}`}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={tlInView ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.35, ease: 'backOut' }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.85 }}
                  />
                  {i < 2 && (
                    <div className="cf-rd-conn">
                      <motion.div
                        className="cf-rd-conn-fill"
                        initial={{ scaleX: 0 }}
                        animate={tlInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Swiper cards ── */}
          <div className="cf-prog-swiper-wrap">
            <button
              className="cf-prog-nav cf-prog-nav--prev"
              onClick={() => progSwiperRef.current?.slidePrev()}
              disabled={progIdx === 0}
              aria-label="Édition précédente"
            >
              <ChevronLeft size={20} />
            </button>

            <SwiperReact
              modules={[Pagination]}
              onSwiper={(s) => { progSwiperRef.current = s }}
              onSlideChange={(s) => setProgIdx(s.activeIndex)}
              grabCursor
              slidesPerView={3}
              spaceBetween={20}
              pagination={{ clickable: true, el: '.cf-prog-dots' }}
              breakpoints={{
                0:    { slidesPerView: 1.25, spaceBetween: 14 },
                640:  { slidesPerView: 2,    spaceBetween: 16 },
                768:  { slidesPerView: 2.4,  spaceBetween: 18 },
                1024: { slidesPerView: 3,    spaceBetween: 20 },
              }}
              className="cf-prog-swiper"
              aria-label="Éditions CIFAP"
            >
              {CIFAP_EDITIONS.map((ed) => (
                <SwiperSlide key={ed.year}>
                  <article
                    role="button"
                    tabIndex={0}
                    aria-label={`Édition CIFAP ${ed.year} — ${ed.themeShort}. Cliquer pour le détail.`}
                    className={`cf-prog-card${ed.status === 'upcoming' ? ' cf-prog-card--upcoming' : ''}`}
                    onClick={() => setSelectedEdition(ed)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedEdition(ed) }
                    }}
                  >
                    <span className={`cf-prog-card__badge cf-prog-card__badge--${ed.status}`}>
                      {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
                    </span>
                    <h3 className="cf-prog-card__theme">{ed.themeShort}</h3>
                    <p className="cf-prog-card__subtitle"><span style={{ fontStyle: 'normal', fontWeight: 700, color: '#045627' }}>Thème :</span> {ed.themeSubtitle}</p>
                    <div className="cf-prog-card__info-group">
                      <div className="cf-prog-card__info">📅 {ed.dates}</div>
                      <div className="cf-prog-card__info">📍 Niaguis, Sénégal</div>
                      <div className="cf-prog-card__info">👥 {ed.participants ?? 'À définir · 8 pays'}</div>
                    </div>
                    <span className="cf-prog-card__cta">
                      {ed.status === 'upcoming' ? 'Bientôt →' : 'Voir le détail →'}
                    </span>
                  </article>
                </SwiperSlide>
              ))}
            </SwiperReact>

            <button
              className="cf-prog-nav cf-prog-nav--next"
              onClick={() => progSwiperRef.current?.slideNext()}
              disabled={progIdx >= CIFAP_EDITIONS.length - 3}
              aria-label="Édition suivante"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots pagination */}
          <div className="cf-prog-dots" aria-label="Navigation éditions" />

        </div>

        {/* ── Pays participants ── */}
        <div className="cf-sec__inner">
          <div className="cf-pays-block">
            <p className="cf-eyebrow" style={{ marginBottom: '20px', textTransform: 'none' }}>Notre réseau</p>
            <StaggerGrid className="cf-pays-grid" stagger={0.06}>
              {CIFAP_PAYS.map((p) => (
                <motion.span key={p.name} className="cf-pays-badge" role="listitem" variants={fadeUp}>
                  <span className="cf-pays-flag" aria-hidden="true">{p.flag}</span>
                  <span className="cf-pays-name">{p.name}</span>
                </motion.span>
              ))}
            </StaggerGrid>
          </div>
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
        <div className="cf-sec__inner">

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
          9. PARTENAIRES — fond alt #FAFAF8
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-pt-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-pt-h2"
            eyebrow="ALLIANCE"
            title="Des organisations qui construisent l'agroécologie."
            sub="Organisateurs et bailleurs de fonds du mouvement NSS."
          />
          <StaggerGrid className="cf-pt-grid" stagger={0.07}>
            {[...CIFAP_PARTENAIRES_NSS, ...CIFAP_PARTENAIRES_BAILLEURS].map((p) => (
              <motion.div key={p.name} className="cf-pt-logo-cell" variants={fadeUp}>
                <div className="cf-pt-logo-wrap">
                  <img src={p.logo} alt={p.name} className="cf-pt-logo-img" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
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

      {/* ══════════════════════════════════════════════
          STYLES
      ══════════════════════════════════════════════ */}
      <style>{`

        /* ── HERO ── */
        .cf-hero {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
          background-image: url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg');
          background-size: cover;
          background-position: center 40%;
          color: #fff;
        }
        .cf-hero__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(2,6,3,0.91) 40%, rgba(4,12,6,0.76) 65%, rgba(0,0,0,0.38) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, rgba(0,0,0,0.15) 100%);
        }
        .cf-hero__body {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px clamp(1.5rem, 5vw, 40px) 76px;
        }
        .cf-hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 26px;
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #A5CE46;
        }
        .cf-hero__eyebrow-line {
          display: block;
          width: 30px;
          height: 1px;
          background: rgba(165,206,70,0.5);
          flex-shrink: 0;
        }
        .cf-hero__eyebrow-sep {
          color: rgba(165,206,70,0.45);
          font-size: 10px;
          letter-spacing: 0;
        }
        .cf-hero__h1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(26px, 3.6vw, 50px);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
          max-width: 720px;
        }
        .cf-hero__cifap {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(18px, 2.2vw, 28px);
          font-weight: 300;
          font-style: italic;
          color: #A5CE46;
          margin: 0 0 1.6rem;
          letter-spacing: 0.1em;
        }
        .cf-hero__sub {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.82;
          color: #ffffff;
          text-align: justify;
          margin: 0 0 2rem;
          max-width: 640px;
        }
        .cf-hero__stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-body), sans-serif;
        }
        .cf-hero__stat {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .cf-hero__stat-val {
          font-family: var(--font-display), Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #A5CE46;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .cf-hero__stat-lbl {
          font-size: 11px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.04em;
          max-width: 80px;
          line-height: 1.3;
        }
        .cf-hero__sep {
          display: block;
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
        .cf-hero__loc {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #ffffff;
          margin-left: 4px;
        }

        /* ══════════════════════════════════════════════
           SYSTÈME DE SECTIONS PLEINE LARGEUR
        ══════════════════════════════════════════════ */
        .cf-sec {
          width: 100%;
          padding: 72px 0;
        }
        .cf-sec--white { background: #ffffff; }
        .cf-sec--alt   { background: #FAFAF8; }
        .cf-sec--cite  { background: #F9F7F3; padding: 56px 0; }

        .cf-sec__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 4vw, 40px);
        }
        .cf-sec__inner--narrow {
          max-width: 760px;
        }

        /* ── SECTION HEADER ── */
        .cf-shd {
          text-align: center;
          margin-bottom: 52px;
        }
        .cf-eyebrow {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
          display: block;
        }
        .cf-sec-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.015em;
          text-align: center;
        }
        .cf-sec-underline {
          height: 2px;
          background: #A5CE46;
          width: 72px;
          border-radius: 2px;
          margin: 14px auto 0;
          display: block;
        }
        .cf-sec-sub {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          color: #2C2C28;
          line-height: 1.72;
          max-width: 65ch;
          margin: 20px auto 0;
          text-align: center;
        }

        /* ── Présentation body text — centré 100% width ── */
        .cf-pres-text {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          max-width: 75ch;
          margin: 0 auto 32px;
          text-align: center;
        }
        .cf-pres-quote {
          display: inline;
          font-style: italic;
          color: #00AD4C;
          font-family: var(--font-display), Georgia, serif;
        }

        /* ── Présentation + Vidéo 2-col ── */
        .cf-pv-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: stretch;
        }
        .cf-pv-left .cf-pres-text {
          text-align: justify;
          margin: 0 0 28px;
          max-width: 55ch;
        }
        .cf-pv-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .cf-pv-cta__btn--primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #00AD4C;
          color: #ffffff;
          font-family: var(--font-body), sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 11px 22px;
          border-radius: 6px;
          transition: background 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .cf-pv-cta__btn--primary:hover {
          background: #009940;
          box-shadow: 0 4px 16px rgba(0,173,76,0.28);
        }
        .cf-pv-cta__btn--outline {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-body), sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: #045627;
          border: 1.5px solid rgba(0,173,76,0.4);
          padding: 10px 20px;
          border-radius: 6px;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .cf-pv-cta__btn--outline:hover {
          border-color: #00AD4C;
          color: #00AD4C;
        }
        .cf-pv-sticky {
          position: sticky;
          top: 88px;
        }
        .cf-pv-video-wrap {
          position: relative;
          padding-bottom: 72%;
          height: 0;
          overflow: hidden;
          border-radius: 10px;
          background: #000;
        }
        .cf-pv-video-wrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 10px;
        }
        .cf-pv-testimonial {
          margin: 14px 0 0;
          padding: 10px 14px;
          border-left: 2px solid #00AD4C;
        }
        .cf-pv-testimonial p {
          font-family: var(--font-body), sans-serif;
          font-size: 14.5px;
          font-style: italic;
          color: #555;
          line-height: 1.55;
          text-align: justify;
          margin: 0 0 6px;
        }
        .cf-pv-testimonial footer {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: #888;
        }
        .cf-pv-testimonial footer strong { color: #444; }

        /* ── 2-col layout Présentation ── */
        .cf-pres-layout {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 52px;
          align-items: start;
        }

        /* ── Colonne décorative droite ── */
        .cf-pres-deco {
          position: relative;
          background: linear-gradient(145deg, #045627 0%, #00AD4C 100%);
          border-radius: 12px;
          overflow: hidden;
          padding: 32px 28px;
        }
        .cf-pres-deco__pattern {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.04) 0,
            rgba(255,255,255,0.04) 1px,
            transparent 0,
            transparent 50%
          );
          background-size: 12px 12px;
          pointer-events: none;
        }
        .cf-pres-deco__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cf-pres-deco__label {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0;
        }
        .cf-pres-deco__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 12px;
        }
        .cf-pres-deco__stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .cf-pres-deco__stat-val {
          font-family: var(--font-display), Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #F5EDD6;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .cf-pres-deco__stat-lbl {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: rgba(245,237,214,0.65);
          letter-spacing: 0.03em;
        }
        .cf-pres-deco__loc {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-family: var(--font-body), sans-serif;
          font-size: 12.5px;
          color: rgba(245,237,214,0.72);
          margin: 0;
          line-height: 1.65;
        }
        .cf-pres-deco__loc svg { flex-shrink: 0; margin-top: 2px; color: #A5CE46; }

        /* ── SectionHeader left variant ── */
        .cf-shd--left { text-align: left; margin-bottom: 28px; }
        .cf-shd--left .cf-sec-h2 { text-align: left; }
        .cf-shd--left .cf-sec-underline { margin-left: 0; margin-right: auto; }
        .cf-shd--left .cf-sec-sub { text-align: justify; margin-left: 0; max-width: 55ch; }

        /* ── Hint roadmap interactive ── */
        .cf-rd-hint {
          font-family: var(--font-body), sans-serif;
          font-size: 11.5px;
          color: #A5CE46;
          font-style: italic;
          margin: 0 auto 18px;
          text-align: center;
        }

        /* ── Roadmap colonnes interactives ── */
        .cf-rd-col--interactive {
          cursor: pointer;
          border-radius: 6px;
          transition: transform 0.2s ease-out;
          padding: 6px 4px 4px 0;
          user-select: none;
        }
        .cf-rd-col--interactive:hover { transform: translateY(-3px); }
        .cf-rd-col--interactive:focus-visible {
          outline: 2px solid #00AD4C;
          outline-offset: 4px;
          border-radius: 6px;
        }
        .cf-rd-col--interactive:hover .cf-rd-dot {
          box-shadow: 0 0 0 2px #00AD4C, 0 0 14px rgba(0,173,76,0.45);
        }
        .cf-rd-col--interactive.cf-rd-col--upcoming:hover .cf-rd-dot {
          box-shadow: 0 0 0 2px #E8A838, 0 0 14px rgba(232,168,56,0.45);
        }
        .cf-rd-mob-item--interactive {
          cursor: pointer;
          border-radius: 6px;
          padding: 4px 8px 4px 2px;
          transition: background 0.18s;
          user-select: none;
        }
        .cf-rd-mob-item--interactive:hover { background: rgba(0,173,76,0.05); }
        .cf-rd-mob-item--interactive:focus-visible {
          outline: 2px solid #00AD4C;
          outline-offset: 2px;
          border-radius: 6px;
        }

        /* ══════════════════════════════════════════════
           MODAL ÉDITION
        ══════════════════════════════════════════════ */
        .cf-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(4,86,39,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          backdrop-filter: blur(3px);
        }
        .cf-modal {
          background: #ffffff;
          border-radius: 14px;
          max-width: 620px;
          width: 100%;
          box-shadow: 0 24px 60px rgba(0,0,0,0.22);
          outline: none;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .cf-modal-hd {
          padding: 28px 28px 20px;
          border-bottom: 2px solid #A5CE46;
        }
        .cf-modal-hd-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .cf-modal-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
        }
        .cf-modal-badge--past     { background: #E2E2E2; color: #666; }
        .cf-modal-badge--upcoming { background: #E8A838; color: #ffffff; }
        .cf-modal-close {
          width: 30px;
          height: 30px;
          border: none;
          background: rgba(0,0,0,0.06);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: background 0.18s, color 0.18s;
        }
        .cf-modal-close:hover { background: rgba(0,0,0,0.12); color: #2A2A2A; }
        .cf-modal-close:focus-visible { outline: 2px solid #00AD4C; outline-offset: 2px; }
        .cf-modal-edition-num {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00AD4C;
          margin: 0 0 6px;
        }
        .cf-modal-theme {
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 4px;
          line-height: 1.22;
        }
        .cf-modal-hd-sep {
          width: 48px;
          height: 2px;
          background: #00AD4C;
          border-radius: 2px;
          margin-top: 14px;
        }

        /* Body */
        .cf-modal-body {
          padding: 24px 28px;
          flex: 1;
        }
        .cf-modal-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px;
          background: #F9F9F7;
          border-radius: 8px;
          border: 1px solid #f0efeb;
        }
        .cf-modal-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .cf-modal-detail-icon {
          color: #00AD4C;
          margin-top: 1px;
          flex-shrink: 0;
          display: flex;
        }
        .cf-modal-detail-lbl {
          display: block;
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 2px;
        }
        .cf-modal-detail-val {
          display: block;
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #2C2C28;
          line-height: 1.4;
        }
        .cf-modal-section { margin-bottom: 20px; }
        .cf-modal-section-lbl {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #045627;
          margin: 0 0 10px;
        }
        .cf-modal-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cf-modal-list-item {
          font-family: var(--font-body), sans-serif;
          font-size: 13.5px;
          color: #2C2C28;
          line-height: 1.55;
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }
        .cf-modal-list-item::before {
          content: '•';
          color: #00AD4C;
          font-size: 16px;
          line-height: 1.2;
          flex-shrink: 0;
        }
        .cf-modal-quote {
          background: #F9F7F0;
          border-left: 3px solid #E8A838;
          border-radius: 0 6px 6px 0;
          padding: 16px 18px;
          margin: 0;
        }
        .cf-modal-quote-text {
          font-family: var(--font-display), Georgia, serif;
          font-size: 14.5px;
          font-style: italic;
          color: #2C2C28;
          line-height: 1.65;
          margin: 0 0 10px;
        }
        .cf-modal-quote-footer {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cf-modal-quote-name {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #2A2A2A;
        }
        .cf-modal-quote-role {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: #A5CE46;
        }

        /* Footer */
        .cf-modal-foot {
          padding: 18px 28px;
          border-top: 1px solid #f0efeb;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
        }
        .cf-modal-cta {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          background: #00AD4C;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.18s, box-shadow 0.18s;
        }
        .cf-modal-cta:hover { background: #009940; box-shadow: 0 4px 14px rgba(0,173,76,0.28); }
        .cf-modal-close-btn {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #555;
          background: none;
          border: 1.5px solid #ddd;
          padding: 9px 18px;
          border-radius: 6px;
          cursor: pointer;
          transition: border-color 0.18s, color 0.18s;
        }
        .cf-modal-close-btn:hover { border-color: #A5CE46; color: #2A2A2A; }

        /* ── PROGRESSION full-width body ── */
        .cf-prog-body {
          padding: 0 clamp(20px, 4vw, 60px);
        }

        /* ── Timeline visuelle (desktop) ── */
        .cf-prog-vis {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 880px;
          margin: 40px auto 56px;
        }
        .cf-prog-vis-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        .cf-prog-vis-year {
          font-family: var(--font-body), sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #E8A838;
          margin-bottom: 12px;
          line-height: 1;
        }
        .cf-prog-vis-col--upcoming .cf-prog-vis-year { color: #b8871a; }
        .cf-prog-vis-row {
          display: flex;
          align-items: center;
          width: 100%;
        }

        /* ── Swiper wrapper ── */
        .cf-prog-swiper-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .cf-prog-swiper {
          flex: 1;
          min-width: 0;
          padding-bottom: 4px !important;
        }
        .cf-prog-nav {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(165,206,70,0.5);
          background: #fff;
          color: #00AD4C;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .cf-prog-nav:hover:not(:disabled) {
          background: #00AD4C;
          border-color: #00AD4C;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,173,76,0.28);
        }
        .cf-prog-nav:disabled { opacity: 0.28; cursor: default; }
        .cf-prog-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 20px;
        }
        .cf-prog-dots .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: #A5CE46;
          opacity: 0.5;
          border-radius: 50%;
          transition: all 0.25s;
          margin: 0 !important;
        }
        .cf-prog-dots .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 4px;
          background: #00AD4C;
          opacity: 1;
        }
        .cf-prog-card {
          background: #ffffff;
          border: 2px solid rgba(165,206,70,0.45);
          border-radius: 12px;
          padding: 20px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: border-color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out;
          text-align: left;
          height: 100%;
          box-sizing: border-box;
        }
        .cf-prog-card:hover {
          border-color: #00AD4C;
          box-shadow: 0 12px 32px rgba(0,173,76,0.20);
          transform: translateY(-6px);
        }
        .cf-prog-card--upcoming {
          border-color: rgba(232,168,56,0.40);
          background: #FFFDF7;
        }
        .cf-prog-card--upcoming:hover {
          border-color: #E8A838;
          box-shadow: 0 12px 32px rgba(232,168,56,0.18);
        }
        .cf-prog-card__badge {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
          align-self: flex-start;
        }
        .cf-prog-card__badge--past     { background: #D0D0D0; color: #666; }
        .cf-prog-card__badge--upcoming { background: #E8A838; color: #fff; }
        .cf-prog-card__theme {
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0;
          line-height: 1.2;
        }
        .cf-prog-card__subtitle {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-style: italic;
          font-weight: 600;
          color: #00AD4C;
          margin: 0;
          line-height: 1.4;
        }
        .cf-prog-card__info-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .cf-prog-card__info {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #2C2C28;
          line-height: 1.4;
        }
        .cf-prog-card__cta {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #00AD4C;
          margin-top: auto;
          transition: color 0.2s;
        }
        .cf-prog-card:hover .cf-prog-card__cta { color: #045627; }
        .cf-prog-card--upcoming .cf-prog-card__cta { color: #b8871a; }

        /* ── Roadmap (legacy, plus utilisé desktop) ── */
        .cf-rd-year {
          font-family: var(--font-body), sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #E8A838;
          letter-spacing: 0.02em;
          display: block;
          margin-bottom: 10px;
          line-height: 1;
        }
        .cf-rd-node-row {
          display: flex;
          align-items: center;
          height: 22px;
          margin-bottom: 12px;
          width: 100%;
          align-self: stretch;
        }
        .cf-rd-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00AD4C;
          border: 2.5px solid #ffffff;
          box-shadow: 0 0 0 2px #00AD4C;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .cf-rd-dot--upcoming { background: #E8A838; box-shadow: 0 0 0 2px #E8A838; }
        .cf-rd-conn {
          flex: 1;
          height: 2px;
          background: #ddd;
          position: relative;
          overflow: hidden;
        }
        .cf-rd-conn-fill {
          position: absolute;
          inset: 0;
          background: #A5CE46;
        }
        .cf-rd-theme {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #2A2A2A;
          line-height: 1.45;
          display: block;
          margin-bottom: 8px;
          padding-right: 0;
        }
        .cf-rd-col--upcoming .cf-rd-theme { color: #aaa; }
        .cf-rd-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 7px;
          border-radius: 3px;
          display: inline-block;
          width: fit-content;
        }
        .cf-rd-badge--past     { background: #E2E2E2; color: #666; }
        .cf-rd-badge--upcoming { background: #E8A838; color: #ffffff; }

        /* ── Caption bas de section roadmap ── */
        .cf-rd-caption {
          text-align: center;
          margin-top: 52px;
          padding-top: 36px;
          border-top: 1px solid rgba(165,206,70,0.28);
        }
        .cf-rd-caption__title {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(19px, 2vw, 26px);
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 12px;
          letter-spacing: -0.015em;
          line-height: 1.25;
        }
        .cf-rd-caption__desc {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          margin: 0 auto;
          max-width: 62ch;
        }

        /* Tablet (768–1023px) : 3-col, wrap 3+2 */
        @media (min-width: 768px) and (max-width: 1023px) {
          .cf-rd-grid { grid-template-columns: repeat(3, 1fr); }
          .cf-rd-year { font-size: 16px; }
          .cf-rd-theme { font-size: 13px; }
          .cf-rd-col:nth-child(3) .cf-rd-conn { display: none; }
        }

        /* Mobile (<768px) : stack vertical */
        .cf-rd-mob { display: none; }
        .cf-rd-mob-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .cf-rd-mob-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 14px;
          flex-shrink: 0;
          padding-top: 1px;
        }
        .cf-rd-vline {
          width: 2px;
          min-height: 30px;
          background: #A5CE46;
          margin-top: 5px;
          flex: 1;
        }
        .cf-rd-mob-right {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 22px;
        }
        .cf-rd-mob-item:last-child .cf-rd-mob-right { padding-bottom: 0; }
        .cf-rd-mob-item .cf-rd-year { font-size: 16px; }
        .cf-rd-mob-item .cf-rd-theme { font-size: 13px; padding-right: 0; margin-bottom: 0; }

        /* ── Triple Vocation (texte pur, sans cards) ── */
        .cf-tv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .cf-tv-item {
          background: #ffffff;
          border: 1px solid #f0efeb;
          border-radius: 8px;
          box-shadow: none;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.22s ease-out, box-shadow 0.22s ease-out, transform 0.22s ease-out;
          cursor: default;
        }
        .cf-tv-item:hover {
          border-color: #A5CE46;
          box-shadow: 0 4px 18px rgba(165,206,70,0.14);
          transform: translateY(-2px);
        }
        .cf-tv-icon {
          width: 24px;
          height: 24px;
          color: #00AD4C;
          margin-bottom: 14px;
          flex-shrink: 0;
          transition: transform 0.2s ease-out, filter 0.2s ease-out;
        }
        .cf-tv-item:hover .cf-tv-icon {
          transform: scale(1.18);
          filter: drop-shadow(0 0 8px rgba(0,173,76,0.35));
        }
        .cf-tv-title {
          font-family: var(--font-display), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .cf-tv-text {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #2C2C28;
          line-height: 1.6;
          text-align: justify;
          margin: 0;
          max-width: 45ch;
        }

        /* ── Piliers 3-col ── */
        .cf-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .cf-pillar {
          background: rgba(165,206,70,0.04);
          border: 1px solid rgba(165,206,70,0.22);
          border-radius: 8px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: background 0.22s, border-color 0.22s;
        }
        .cf-pillar:hover {
          background: rgba(165,206,70,0.09);
          border-color: #A5CE46;
        }
        .cf-pillar__icon {
          width: 54px;
          height: 54px;
          background: rgba(0,173,76,0.07);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cf-pillar__title {
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #2A2A2A;
        }
        .cf-pillar__desc {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #555;
          margin: 0;
        }

        /* ── Citation ── */
        .cf-quote {
          background: transparent;
          border-left: 3px solid #E8A838;
          padding: 28px 28px 28px 32px;
          margin: 0 auto;
          border-radius: 0 6px 6px 0;
          max-width: 72ch;
        }
        .cf-quote__text {
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-style: italic;
          line-height: 1.82;
          color: #2A2A2A;
          margin: 0 0 14px;
        }
        .cf-quote__foot {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #2C2C28;
          margin: 0;
        }
        .cf-quote__foot strong { font-weight: 700; color: #2A2A2A; }

        /* ── Objectifs 2-col ── */
        .cf-obj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 28px;
        }
        .cf-obj-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px;
          background: #ffffff;
          border: 1px solid #f0efeb;
          border-radius: 6px;
          transition: border-color 0.2s, box-shadow 0.2s;
          text-align: left;
        }
        .cf-obj-item:hover {
          border-color: #A5CE46;
          box-shadow: 0 2px 14px rgba(165,206,70,0.12);
        }
        .cf-obj-icon { font-size: 20px; flex-shrink: 0; line-height: 1.3; margin-top: 2px; }
        .cf-obj-title {
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #2A2A2A;
          display: block;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .cf-obj-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.72;
          color: #2A2A2A;
          text-align: justify;
          margin: 0;
        }

        /* ── Lieu — Carte interactive ── */
        .cf-lieu-map-wrap {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        }
        .cf-lieu-map {
          width: 100%;
          height: 360px;
          display: block;
        }
        .cf-lieu-card {
          background: #ffffff;
          border: 1px solid #A5CE46;
          border-radius: 12px;
          padding: 24px;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 16px;
          align-items: start;
        }
        .cf-lieu-card__icon { padding-top: 3px; flex-shrink: 0; }
        .cf-lieu-card__body { text-align: left; }
        .cf-lieu-card__name {
          font-family: var(--font-display), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 4px;
          line-height: 1.2;
        }
        .cf-lieu-card__addr {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #2C2C28;
          margin: 0 0 12px;
        }
        .cf-lieu-card__desc {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          color: #2C2C28;
          font-style: italic;
          line-height: 1.65;
          margin: 0 0 18px;
        }
        .cf-lieu-card__details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 28px;
          padding-top: 16px;
          border-top: 1px solid #E8A838;
        }
        .cf-lieu-card__col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cf-lieu-card__detail {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #2C2C28;
          line-height: 1.4;
        }
        .cf-lieu-card__detail strong { color: #045627; font-weight: 600; }

        /* ── Pays block (dans section slider) ── */
        .cf-pays-block {
          text-align: center;
          padding-top: 52px;
          margin-top: 52px;
          border-top: 1px solid rgba(165,206,70,0.22);
        }

        /* ── Pays badges ── */
        .cf-pays-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .cf-pays-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #045627;
          color: #F5EDD6;
          border-radius: 999px;
          padding: 8px 18px;
          transition: background 0.18s, transform 0.18s;
        }
        .cf-pays-badge:hover { background: #00AD4C; transform: translateY(-1px); }
        .cf-pays-flag { font-size: 20px; line-height: 1; flex-shrink: 0; }
        .cf-pays-name {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #F5EDD6;
          white-space: nowrap;
        }

        /* ══════════════════════════════════════════════
           SLIDER ÉDITIONS — NAVIGATION PREMIUM
        ══════════════════════════════════════════════ */

        /* Outer : position relative, padding pour chevrons desktop */
        .cf-slider-outer {
          position: relative;
          padding: 0 60px;
        }

        /* Track */
        .cf-slider {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 4px 2px 16px;
          outline: none;
        }
        .cf-slider::-webkit-scrollbar { display: none; }

        /* Chevrons desktop/tablet — absolus sur cf-slider-outer */
        .cf-sld-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AD4C;
          padding: 10px;
          transition: color 0.2s ease-out, transform 0.2s ease-out;
          border-radius: 50%;
          margin-top: -8px; /* offset from padding-bottom of track */
        }
        .cf-sld-prev { left: 0; }
        .cf-sld-next { right: 0; }
        .cf-sld-btn:hover:not(:disabled) {
          color: #045627;
          transform: translateY(-50%) scale(1.12);
        }
        .cf-sld-btn:disabled {
          opacity: 0.28;
          cursor: not-allowed;
        }
        .cf-sld-btn:focus-visible {
          outline: 2px solid #00AD4C;
          outline-offset: 2px;
        }

        /* Mobile chevrons — sous les dots, cachés sur desktop */
        .cf-sld-mob-nav { display: none; }
        .cf-sld-mob-btn {
          width: 44px;
          height: 44px;
          border: none;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #00AD4C;
          padding: 10px;
          transition: all 0.2s;
          border: 1.5px solid rgba(0,173,76,0.2);
        }
        .cf-sld-mob-btn:hover:not(:disabled) {
          background: #00AD4C;
          color: #ffffff;
          transform: scale(1.08);
        }
        .cf-sld-mob-btn:disabled { opacity: 0.28; cursor: not-allowed; }

        /* Dots */
        .cf-slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        .cf-slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #A5CE46;
          border: none;
          cursor: pointer;
          padding: 0;
          opacity: 0.55;
          transition: all 0.3s ease-out;
        }
        .cf-slider-dot:hover { opacity: 1; transform: scale(1.2); }
        .cf-slider-dot--active {
          background: #00AD4C;
          width: 22px;
          border-radius: 4px;
          opacity: 1;
        }
        .cf-slider-dot:focus-visible { outline: 2px solid #00AD4C; outline-offset: 2px; }

        /* ── Card (slider item) ── */
        .cf-card {
          scroll-snap-align: start;
          flex: 0 0 calc((100% - 32px) / 3);
          background: #ffffff;
          border: 1px solid #e8e6e0;
          border-radius: 10px;
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: box-shadow 0.25s ease-out, transform 0.22s ease-out;
        }
        .cf-card:not(.cf-card--upcoming):hover {
          box-shadow: 0 10px 32px rgba(0,0,0,0.12);
        }
        .cf-card--upcoming { background: #FBFAF7; }

        /* Photo zone */
        .cf-card__photo {
          position: relative;
          height: 172px;
          flex-shrink: 0;
          background: linear-gradient(145deg, #045627 0%, var(--card-accent) 100%);
          overflow: hidden;
        }
        .cf-card__photo-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* Gradient placeholder when no photo */
        .cf-card__photo-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cf-card__photo-icon {
          opacity: 0.35;
          transform: scale(2.2);
        }
        .cf-card__photo-icon svg {
          width: 28px;
          height: 28px;
          stroke: #ffffff;
        }
        /* Diagonal stripe texture on placeholder */
        .cf-card__photo-pattern {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.04) 0,
            rgba(255,255,255,0.04) 1px,
            transparent 0,
            transparent 50%
          );
          background-size: 10px 10px;
        }
        /* Bottom scrim for badge readability */
        .cf-card__photo-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.42) 100%);
        }
        /* Badge absolute on photo */
        .cf-card__badge {
          position: absolute;
          top: 10px;
          left: 12px;
          z-index: 2;
          font-family: var(--font-body), sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 3px;
        }
        .cf-card__badge--past     { background: rgba(255,255,255,0.92); color: #666; }
        .cf-card__badge--upcoming { background: #E8A838; color: #ffffff; }
        /* Year chip bottom-right */
        /* Content below photo */
        .cf-card__content {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .cf-card__body { display: flex; flex-direction: column; gap: 6px; }
        .cf-card__num-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .cf-card__year-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #045627;
          background: rgba(0,173,76,0.10);
          border: 1px solid rgba(0,173,76,0.25);
          border-radius: 4px;
          padding: 3px 8px;
          line-height: 1;
          white-space: nowrap;
        }
        .cf-card__num {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #bbb;
        }
        .cf-card__theme {
          font-family: var(--font-display), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.28;
          margin: 0;
        }
        .cf-card--upcoming .cf-card__theme { color: #aaa; }
        .cf-card__meta { display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .cf-card__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #666;
        }
        .cf-card__meta-item--participants { color: #5a8020; font-weight: 600; font-size: 13px; }
        .cf-card--upcoming .cf-card__meta-item--participants { color: #bbb; }
        .cf-card__foot { padding-top: 14px; border-top: 1px solid #f0efeb; }
        .cf-card__cta {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #00AD4C;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.18s;
          position: relative;
        }
        .cf-card__cta::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #00AD4C;
          transition: width 0.25s ease-out;
        }
        .cf-card__cta:hover::after { width: 100%; }
        .cf-card__cta:hover { color: #045627; }
        .cf-card__cta--disabled {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #ccc;
          cursor: default;
        }

        /* ══════════════════════════════════════════════
           PARTENAIRES — GRILLE LOGOS
        ══════════════════════════════════════════════ */
        .cf-pt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
        }
        .cf-pt-logo-wrap {
          width: 100%;
          height: 100px;
          background: #ffffff;
          border: 1px solid #e8e6e0;
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease-out, box-shadow 0.3s ease-out;
          overflow: hidden;
        }
        .cf-pt-logo-wrap:hover {
          border-color: #00AD4C;
          box-shadow: 0 4px 12px rgba(0,0,0,0.09);
        }
        .cf-pt-logo-img {
          max-height: 68px;
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s ease-out, transform 0.3s ease-out;
          display: block;
        }
        .cf-pt-logo-wrap:hover .cf-pt-logo-img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        /* ── CTA FINAL ── */
        .cf-cta {
          background: #045627;
          padding: 5.5rem 1.5rem;
        }
        .cf-cta__body {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        .cf-cta__eyebrow {
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0;
        }
        .cf-cta__h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(26px, 3.8vw, 44px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.015em;
          line-height: 1.1;
        }
        .cf-cta__sub {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #ffffff;
          margin: 0;
          max-width: 540px;
          line-height: 1.78;
        }
        .cf-cta__btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 4px;
        }
        .cf-cta__btn {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 38px;
          border-radius: 4px;
          transition: all 0.22s ease;
          display: inline-block;
          white-space: nowrap;
          min-height: 44px;
          min-width: 44px;
        }
        .cf-cta__btn--primary { background: #00AD4C; color: #ffffff; border: 1.5px solid #00AD4C; }
        .cf-cta__btn--primary:hover { background: #A5CE46; border-color: #A5CE46; color: #2A2A2A; transform: translateY(-2px); }
        .cf-cta__btn--outline { background: transparent; color: #ffffff; border: 1.5px solid rgba(255,255,255,0.4); }
        .cf-cta__btn--outline:hover { border-color: #A5CE46; color: #A5CE46; transform: translateY(-2px); }
        .cf-cta__btn:focus-visible { outline: 2px solid #A5CE46; outline-offset: 3px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          /* 2-col → 1 col */
          .cf-pres-layout { grid-template-columns: 1fr; gap: 0; }
          .cf-pres-right  { display: none; }
          .cf-pv-layout   { grid-template-columns: 1fr; gap: 32px; }
          .cf-pv-sticky   { position: static; }
          .cf-lieu-map    { height: 300px; }
          /* Chevrons : inside, overlaid */
          .cf-slider-outer { padding: 0; }
          .cf-sld-btn {
            background: rgba(255,255,255,0.88);
            box-shadow: 0 2px 10px rgba(0,0,0,0.14);
          }
          .cf-sld-prev { left: 8px; }
          .cf-sld-next { right: 8px; }
          /* Tablet: 2 visible */
          .cf-card { flex: 0 0 calc((100% - 16px) / 2); }
          /* Grids */
          .cf-tv-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cf-tv-title { font-size: 18px; }
          .cf-tv-text { font-size: 14px; max-width: 40ch; }
          .cf-pillars-grid { grid-template-columns: 1fr 1fr; }
          .cf-obj-grid { grid-template-columns: 1fr; }
          .cf-rd-grid { grid-template-columns: repeat(3, 1fr); }
          .cf-rd-col:nth-child(3) .cf-rd-conn { display: none; }
        }

        @media (max-width: 767px) {
          .cf-sec { padding: 52px 0; }
          .cf-shd { margin-bottom: 36px; }
          .cf-pv-right { display: none; }
          .cf-sec-h2 { font-size: 22px; }
          .cf-sec-sub { font-size: 14px; }
          .cf-pres-text { font-size: 15px; margin-bottom: 28px; }
          .cf-modal { padding: 24px 20px; }
          .cf-modal-theme { font-size: 18px; }
          /* Hero */
          .cf-hero { min-height: 400px; }
          .cf-hero__body { padding: 60px 1.25rem 52px; }
          .cf-hero__h1 { font-size: clamp(22px, 5.5vw, 34px); }
          .cf-hero__sub { font-size: 14px; }
          .cf-hero__stat-val { font-size: 22px; }
          /* Grids */
          .cf-tv-grid { grid-template-columns: 1fr; gap: 24px; }
          .cf-tv-text { text-align: left; font-size: 14px; max-width: 100%; }
          .cf-pillars-grid { grid-template-columns: 1fr; }
          .cf-lieu-map { height: 260px; }
          /* Roadmap */
          .cf-rd-grid { display: none; }
          .cf-prog-nav { display: none; }
          .cf-rd-mob  { display: none; }
          /* Slider : hide abs buttons, show mob nav */
          .cf-slider-outer { padding: 0; }
          .cf-sld-btn { display: none; }
          .cf-sld-mob-nav {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-top: 16px;
          }
          /* Mobile: 1 card + peek of next */
          .cf-card { flex: 0 0 calc(100% - 32px); min-height: 260px; }
        }

        @media (max-width: 640px) {
          .cf-hero__sep { display: none; }
          .cf-hero__stats { gap: 10px 16px; }
          .cf-cta__btns { flex-direction: column; align-items: stretch; }
          .cf-cta__btn { text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cf-rd-conn-fill,
          .cf-rd-vline,
          .cf-voc-card,
          .cf-pillar,
          .cf-pays-badge { transition: none !important; animation: none !important; }
          .cf-slider { scroll-behavior: auto; }
        }
      `}</style>
    </>
  )
}
