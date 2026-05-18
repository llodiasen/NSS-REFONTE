"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Users, X } from 'lucide-react'
import { CIFAP_EDITIONS } from '@/data/cifap/index'

/* ── Type ── */
type CifapEdition = (typeof CIFAP_EDITIONS)[number]

/* ── Modal édition ── */
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

        <div id="cf-modal-body" className="cf-modal-body">
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

          <div className="cf-modal-section">
            <p className="cf-modal-section-lbl">🎯 Objectifs</p>
            <ul className="cf-modal-list" aria-label="Objectifs de l'édition">
              {ed.objectives.map((obj) => (
                <li key={obj} className="cf-modal-list-item">{obj}</li>
              ))}
            </ul>
          </div>

          <div className="cf-modal-section">
            <p className="cf-modal-section-lbl">🌱 Thèmes abordés</p>
            <ul className="cf-modal-list" aria-label="Thèmes abordés">
              {ed.themes.map((t) => (
                <li key={t} className="cf-modal-list-item">{t}</li>
              ))}
            </ul>
          </div>

          <blockquote className="cf-modal-quote">
            <p className="cf-modal-quote-text">&laquo;&nbsp;{ed.quote}&nbsp;&raquo;</p>
            <footer className="cf-modal-quote-footer">
              <strong className="cf-modal-quote-name">{ed.quoteName}</strong>
              <span className="cf-modal-quote-role">{ed.quoteRole}</span>
            </footer>
          </blockquote>
        </div>

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

/* ── Variants animation ── */
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

/* ── StaggerGrid ── */
function StaggerGrid({ className, stagger = 0.09, children }: {
  className?: string
  stagger?: number
  children: React.ReactNode
}) {
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

/* ── SVG Icons éditions (placeholders sans photo) ── */
const EditionIcons: Record<string, React.ReactNode> = {
  '2022': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12M12 12C12 12 7 9 4 4c4 0 8 3 8 8zM12 12c0 0 5-3 8-8-4 0-8 3-8 8z"/>
    </svg>
  ),
  '2023': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      <path d="M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"/>
    </svg>
  ),
  '2024': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22c4.97 0 9-6.268 9-12A9 9 0 0 0 3 10c0 5.732 4.03 12 9 12z"/><path d="M12 22V10"/>
    </svg>
  ),
  '2025': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AD4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
}

/* ── Objectifs — données train slider ── */
const OBJ_ITEMS = [
  {
    num: '01', kicker: 'Former',
    title: <>Former des leaders qui changent <em>leurs territoires.</em></>,
    body: "Renforcer les capacités des leaders paysans, techniciens et animateurs en techniques agroécologiques appliquées — des compétences immédiatement transférables sur le terrain.",
    foot: 'Former',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M3 21v-1a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v1"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-1a6 6 0 0 0-4-5.66"/></svg>,
  },
  {
    num: '02', kicker: 'Améliorer',
    title: <>Améliorer rendements <em>&amp; autonomie.</em></>,
    body: "Augmenter les rendements agricoles et la viabilité économique des exploitations — santé des sols, réduction des intrants chimiques, revenus préservés.",
    foot: 'Améliorer',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16"/><path d="M4 15l4-6 4 2 4-7 4 5"/></svg>,
  },
  {
    num: '03', kicker: 'Relier',
    title: <>Construire un <em>réseau continental.</em></>,
    body: "Tisser un réseau de femmes rurales organisées capables d'essaimer l'agroécologie paysanne dans leurs territoires, d'un pays à l'autre, d'une génération à l'autre.",
    foot: 'Relier',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/></svg>,
  },
  {
    num: '04', kicker: 'Diffuser',
    title: <>Diffuser <em>l&apos;agroécologie paysanne.</em></>,
    body: "Disséminer des pratiques agricoles respectueuses de l'environnement et reproductibles dans chaque pays membre du réseau NSS.",
    foot: 'Diffuser',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a3 3 0 0 1 0 6"/><path d="M10 8v8a2 2 0 0 0 4 0v-1"/><path d="M14 8H6a3 3 0 0 0 0 6h8l4 4V4l-4 4z"/></svg>,
  },
  {
    num: '05', kicker: 'Consolider',
    title: <>Consolider la <em>souveraineté alimentaire.</em></>,
    body: "Ancrer la souveraineté alimentaire en Afrique de l'Ouest à travers des pratiques agroécologiques paysannes durables maîtrisées par les communautés.",
    foot: 'Consolider',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z"/></svg>,
  },
]

/* ── Objectifs — composant train slider ── */
function ObjectifsTrain() {
  const [idx, setIdx]   = useState(0)
  const [vc, setVc]     = useState(3)
  const [cardW, setCardW] = useState(0)
  const trackRef    = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const TOTAL = OBJ_ITEMS.length

  const calcVc = () =>
    typeof window === 'undefined' ? 3
    : window.innerWidth <= 600 ? 1
    : window.innerWidth <= 980 ? 2
    : 3

  /* Calcul des dimensions + resize */
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return
      const newVc = calcVc()
      const vw    = viewportRef.current.clientWidth
      const gap   = 24
      const w     = (vw - gap * (newVc - 1)) / newVc
      setVc(newVc)
      setCardW(w)
      setIdx(p => Math.min(p, Math.max(0, TOTAL - newVc)))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [TOTAL])

  /* Appliquer le translateX */
  useEffect(() => {
    if (!trackRef.current || cardW === 0) return
    trackRef.current.style.transform = `translateX(${-idx * (cardW + 24)}px)`
  }, [idx, cardW])

  const go = (i: number) => setIdx(Math.min(Math.max(i, 0), Math.max(0, TOTAL - vc)))

  const step      = 100 / TOTAL
  const progLeft  = idx * step
  const progWidth = vc * step

  return (
    <div className="cf-obj-train">
      {/* Tête : titre gauche + contrôles droite */}
      <div className="cf-obj-train-head">
        <div className="cf-obj-train-hd-left">
          <p className="cf-eyebrow">Objectifs</p>
          <h2 className="cf-sec-h2">
            Renforcer les capacités <em>des leaders paysans.</em>
          </h2>
          <div className="cf-sec-underline" aria-hidden="true" />
          <p className="cf-sec-sub" style={{ textAlign: 'left', marginLeft: 0, marginTop: 16 }}>
            Cinq objectifs articulés — faites-les défiler pour parcourir l&apos;ensemble du programme.
          </p>
        </div>
        <div className="cf-obj-ctrls">
          <button className="cf-obj-ctrl" onClick={() => go(idx - 1)} disabled={idx === 0} aria-label="Objectif précédent">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="cf-obj-ctrl-progress">
            <strong>{String(idx + 1).padStart(2, '0')}</strong>
            {' / '}
            {String(TOTAL).padStart(2, '0')}
          </div>
          <button className="cf-obj-ctrl" onClick={() => go(idx + 1)} disabled={idx >= TOTAL - vc} aria-label="Objectif suivant">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>

      {/* Viewport glissant */}
      <div
        ref={viewportRef}
        className="cf-obj-viewport"
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1))
        }}
      >
        <div ref={trackRef} className="cf-obj-track">
          {OBJ_ITEMS.map((obj, i) => (
            <article
              key={i}
              className={`cf-obj-card${i === idx ? ' is-current' : ''}`}
              style={{ width: cardW > 0 ? `${cardW}px` : undefined }}
              onClick={() => go(i)}
            >
              <div className="cf-obj-card-head">
                <div className="cf-obj-card-num">{obj.num}</div>
                <span className="cf-obj-card-icon">{obj.icon}</span>
              </div>
              <div className="cf-obj-card-kicker">{obj.kicker}</div>
              <h3 className="cf-obj-card-h3">{obj.title}</h3>
              <p className="cf-obj-card-body">{obj.body}</p>
              <div className="cf-obj-card-foot">
                <span className="cf-obj-card-foot-lab">Objectif {obj.num}</span>
                <span>{obj.foot}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Barre de progression */}
      <div className="cf-obj-progress">
        <span style={{ left: `${progLeft}%`, width: `${progWidth}%` }} />
      </div>
    </div>
  )
}

/* ── Déroulé — données ── */
const DEROULER_DAYS = [
  {
    kicker: 'Jour 1',
    title: "Arrivée & cérémonie d'ouverture",
    body: "Accueil des délégations africaines, présentation des AFR participantes et ancrage culturel dans la tradition sénégalaise.",
    moments: [
      { time: '10h00', label: 'Accueil et installation au Centre Karonghen' },
      { time: '14h00', label: 'Présentation des délégations et des AFR' },
      { time: '17h30', label: "Cérémonie d'ouverture officielle" },
    ],
    badge: 'Ouverture',
  },
  {
    kicker: 'Jour 2',
    title: 'Cadrage théorique du thème',
    body: "Le thème de l'édition posé par les leaders et techniciennes du réseau NSS, ancré dans les réalités paysannes de chaque pays.",
    moments: [
      { time: '08h30', label: 'Exposé introductif par les experts NSS' },
      { time: '10h30', label: 'Débat ouvert — pratiques par pays' },
      { time: '14h00', label: 'Cartographie collective des enjeux' },
    ],
    badge: 'Théorie',
  },
  {
    kicker: 'Jours 3–4',
    title: 'Démonstrations au champ',
    body: "Techniques de production, transformation et conservation sur les parcelles agroécologiques du Centre Karonghen Wati Naning.",
    moments: [
      { time: '07h00', label: 'Sortie terrain — parcelles Karonghen' },
      { time: '10h00', label: 'Démonstration de techniques agroécologiques' },
      { time: '15h00', label: 'Transformation et conservation des produits' },
    ],
    badge: 'Terrain',
  },
  {
    kicker: 'Jour 5',
    title: 'Échanges inter-pays',
    body: "Restitution des pratiques propres à chaque AFR, adaptation aux contextes locaux et construction de synergies continentales.",
    moments: [
      { time: '09h00', label: 'Restitutions par délégation nationale' },
      { time: '11h30', label: 'Ateliers croisés — adaptation inter-pays' },
      { time: '16h00', label: 'Fiches pratiques partagées' },
    ],
    badge: 'Échanges',
  },
  {
    kicker: 'Jour 6',
    title: 'Atelier de capitalisation',
    body: "Construction collective des supports IEC pour les territoires. Chaque délégation repart avec des outils concrets et adaptés.",
    moments: [
      { time: '08h30', label: 'Groupes de travail par thématique' },
      { time: '11h00', label: 'Co-production des supports IEC' },
      { time: '15h00', label: 'Présentation et validation collective' },
    ],
    badge: 'Capitalisation',
  },
  {
    kicker: 'Jour 7',
    title: "Engagements & clôture",
    body: "Feuille de route par pays, plaidoyer pour la souveraineté alimentaire et cérémonie de clôture du camp CIFAP.",
    moments: [
      { time: '09h00', label: 'Feuilles de route par pays' },
      { time: '11h00', label: 'Session plaidoyer — souveraineté alimentaire' },
      { time: '15h00', label: 'Cérémonie de clôture et attestations' },
    ],
    badge: 'Clôture',
  },
]

/* ── Déroulé — composant interactif ── */
function DeroulerTimeline() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)
  const TOTAL = DEROULER_DAYS.length

  /* Autoplay 6 s */
  useEffect(() => {
    if (!isPlaying) return
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % TOTAL)
    }, 6000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isPlaying, TOTAL])

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if      (e.key === 'ArrowRight') setActiveIdx(p => Math.min(TOTAL - 1, p + 1))
      else if (e.key === 'ArrowLeft')  setActiveIdx(p => Math.max(0, p - 1))
      else if (e.key === ' ')          { e.preventDefault(); setIsPlaying(p => !p) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [TOTAL])

  /* Scrubber geometry */
  const offset  = 100 / TOTAL / 2
  const span    = 100 - 2 * offset
  const fillPct = TOTAL > 1 ? offset + (activeIdx / (TOTAL - 1)) * span : 50
  const dotLeft = (i: number) => TOTAL > 1 ? offset + (i / (TOTAL - 1)) * span : 50

  return (
    <div className="cf-dr">
      {/* Tête : titre + contrôles */}
      <div className="cf-dr-head">
        <p className="cf-dr-head__title">Programme de la semaine</p>
        <div className="cf-dr-controls">
          <button
            className="cf-dr-nav-btn"
            onClick={() => setActiveIdx(p => Math.max(0, p - 1))}
            disabled={activeIdx === 0}
            aria-label="Jour précédent"
          >
            ←
          </button>
          <span className="cf-dr-counter">
            {String(activeIdx + 1).padStart(2, '0')}
            <span className="cf-dr-counter__sep"> / </span>
            {String(TOTAL).padStart(2, '0')}
          </span>
          <button
            className="cf-dr-nav-btn"
            onClick={() => setActiveIdx(p => Math.min(TOTAL - 1, p + 1))}
            disabled={activeIdx === TOTAL - 1}
            aria-label="Jour suivant"
          >
            →
          </button>
        </div>
      </div>

      {/* Stage — panneaux empilés */}
      <div
        className="cf-dr-stage"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(dx) > 40) setActiveIdx(p =>
            dx < 0 ? Math.min(TOTAL - 1, p + 1) : Math.max(0, p - 1)
          )
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {DEROULER_DAYS.map((day, i) => (
          <article
            key={i}
            className={`cf-dr-day${i === activeIdx ? ' is-active' : ''}`}
            aria-hidden={i !== activeIdx}
          >
            <div className="cf-dr-day__copy">
              <span className="cf-dr-day__kicker">{day.kicker}</span>
              <div className="cf-dr-day__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="cf-dr-day__title">{day.title}</h3>
              <p className="cf-dr-day__body">{day.body}</p>
              <ul className="cf-dr-day__moments" aria-label={`Programme du ${day.kicker}`}>
                {day.moments.map((m, j) => (
                  <li key={j} className="cf-dr-moment">
                    <span className="cf-dr-moment__time">{m.time}</span>
                    <span className="cf-dr-moment__label">{m.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cf-dr-day__visual" aria-hidden="true">
              <div className="cf-dr-day__img-ph" />
              <span className="cf-dr-day__corner">{day.badge}</span>
              <p className="cf-dr-day__caption">{day.kicker}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Scrubber */}
      <div className="cf-dr-scrubber" role="group" aria-label="Navigation par jour">
        <div className="cf-dr-rail">
          <div className="cf-dr-fill" style={{ width: `${fillPct}%` }} aria-hidden="true" />
          <div className="cf-dr-dots" aria-hidden="true">
            {DEROULER_DAYS.map((day, i) => (
              <button
                key={i}
                className={[
                  'cf-dr-dot',
                  i < activeIdx   ? 'is-passed' : '',
                  i === activeIdx ? 'is-active' : '',
                ].filter(Boolean).join(' ')}
                style={{ left: `${dotLeft(i)}%` }}
                onClick={() => setActiveIdx(i)}
                tabIndex={-1}
              >
                <span className="cf-dr-dot__mark" />
                <span className={`cf-dr-dot__label cf-dr-dot__label--${i % 2 === 0 ? 'top' : 'bot'}`}>
                  {day.kicker}
                </span>
                {i === activeIdx && isPlaying && (
                  <span className="cf-dr-dot__progress" key={activeIdx} />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="cf-dr-foot">
          <button
            className={`cf-dr-play${isPlaying ? ' is-playing' : ''}`}
            onClick={() => setIsPlaying(p => !p)}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lecture automatique'}
          >
            <span className="cf-dr-play__icon">{isPlaying ? '⏸' : '▶'}</span>
          </button>
          <span className="cf-dr-footnote">
            {isPlaying
              ? 'Lecture automatique — 6 s / jour'
              : 'Navigation manuelle — ←→ ou clic sur un point'}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── SectionHeader ── */
function SectionHeader({ eyebrow, title, sub, titleId, left }: {
  eyebrow: string
  title?: React.ReactNode
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

/* ════════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
════════════════════════════════════════════════════ */
export default function CIFAPMainPage({ locale }: { locale: string }) {
  const ctaRef    = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })
  const [selectedEdition, setSelectedEdition] = useState<CifapEdition | null>(null)

  const pastEditions = CIFAP_EDITIONS.filter(ed => ed.status === 'past')

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — gradient vert foncé, contenu bas
      ══════════════════════════════════════════════ */}
      <section className="cf-hero" aria-labelledby="cf-hero-h1">
        <div className="cf-hero__bg" aria-hidden="true" />
        <div className="cf-hero__body">
          <nav className="cf-breadcrumb" aria-label="Fil d'Ariane">
            <span>Accueil</span>
            <span className="cf-breadcrumb__sep" aria-hidden="true">·</span>
            <span>Nos programmes</span>
            <span className="cf-breadcrumb__sep" aria-hidden="true">·</span>
            <span className="cf-breadcrumb__current">CIFAP</span>
          </nav>
          <div className="cf-hero__surtitle">Programme phare · depuis 2022</div>
          <h1 id="cf-hero-h1" className="cf-hero__h1">
            Camp International de Formation
            <em>en Agroécologie Paysanne</em>
          </h1>
          <p className="cf-hero__lead">
            Cultiver, transformer, vendre — maîtriser l&apos;agroécologie paysanne.
            Depuis 2022, NSS réunit chaque année les leaders des Associations de
            Femmes Rurales d&apos;Afrique de l&apos;Ouest autour d&apos;un thème précis.
          </p>
          <div className="cf-hero__meta">
            <span className="cf-meta-pill">
              <span className="cf-meta-pill__label">Durée</span>
              5 à 7 jours
            </span>
            <span className="cf-meta-pill">
              <span className="cf-meta-pill__label">Lieu</span>
              Niaguis, Sénégal
            </span>
            <span className="cf-meta-pill">
              <span className="cf-meta-pill__label">Participantes</span>
              40 à 50 · 8 pays
            </span>
          </div>
          <div className="cf-hero__cta-row">
            <Link href={`/${locale}/agir/rejoindre`} className="cf-hero__btn cf-hero__btn--primary">
              Rejoindre le CIFAP 2026 →
            </Link>
            <a href="#cf-programme" className="cf-hero__btn cf-hero__btn--ghost">
              Voir le programme
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAND — bande chiffres clés sous hero
      ══════════════════════════════════════════════ */}
      <div className="cf-stats-band" aria-label="Chiffres clés CIFAP">
        {[
          { num: '4',    label: 'Éditions tenues' },
          { num: '8',    label: 'Pays représentés' },
          { num: '~180', label: 'Leaders formées' },
          { num: '1',    label: 'Centre dédié — Niaguis' },
        ].map((stat) => (
          <div key={stat.label} className="cf-stat">
            <div className="cf-stat__num">{stat.num}</div>
            <span className="cf-stat__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          FONDATIONS — grille bordée, cartes numérotées
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-fond-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-fond-h2"
            eyebrow="FONDATIONS"
            title={<>Trois principes pour transformer <em>l&apos;agroécologie.</em></>}
            sub="Former des experts, relier les territoires, construire la durabilité — trois leviers d'un même mouvement."
          />
          <div className="cf-principes">
            {[
              {
                num: '01',
                icon: (
                  <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 9l-10-4-10 4 10 4 10-4z"/>
                    <path d="M6 10.6V16c3 3 9 3 12 0v-5.4"/>
                    <path d="M22 9v6"/>
                  </svg>
                ),
                title: 'Former',
                text: "Outils concrets pour une agriculture autonome et durable — techniques agroécologiques ancrées dans les réalités locales, transmises par des experts et praticiens issus du mouvement paysan. Chaque édition CIFAP renforce les capacités techniques des leaders et techniciens agricoles.",
              },
              {
                num: '02',
                icon: (
                  <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/>
                    <circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M6.5 6.5L10.5 10.5M17.5 6.5L13.5 10.5M6.5 17.5L10.5 13.5M17.5 17.5L13.5 13.5"/>
                  </svg>
                ),
                title: 'Relier',
                text: "Une voix continentale pour la souveraineté alimentaire — créer un réseau de femmes rurales qui échangent, comparent et adaptent leurs pratiques d'un pays à l'autre. Le CIFAP réunit chaque année 8 pays d'Afrique de l'Ouest autour d'une vision commune.",
              },
              {
                num: '03',
                icon: (
                  <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.83 9.17a4 4 0 1 0 0 5.66a10 10 0 0 0 4.34-5.66a4 4 0 1 1 0 5.66a10 10 0 0 1-4.34-5.66"/>
                  </svg>
                ),
                title: 'Durer',
                text: "Inscrire les savoirs paysans dans les territoires d'une édition à l'autre, en enrichissant les savoirs endogènes sans les remplacer — une mémoire vivante au service des générations. La logique cumulative du CIFAP garantit que chaque année construit sur les acquis de la précédente.",
              },
            ].map((p) => (
              <article key={p.title} className="cf-principe">
                <span className="cf-principe__num" aria-hidden="true">{p.num}</span>
                <span className="cf-principe__icon">{p.icon}</span>
                <h3 className="cf-principe__title">{p.title}</h3>
                <div className="cf-principe__accent" aria-hidden="true" />
                <p className="cf-principe__text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DÉROULÉ — timeline horizontale interactive
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" id="cf-programme" aria-labelledby="cf-tl-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-tl-h2"
            eyebrow="DÉROULÉ"
            title={<>Une semaine type <em>au camp.</em></>}
            sub="5 à 7 journées articulant théorie, démonstrations au champ et restitution collective."
          />
          <DeroulerTimeline />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OBJECTIFS — train slider 3 cartes
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-obj-h2">
        <div className="cf-sec__inner">
          <ObjectifsTrain />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PILIERS + STATS BAND
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-pil-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-pil-h2"
            eyebrow="ARCHITECTURE"
            title={<>Trois piliers pour <em>la souveraineté alimentaire.</em></>}
            sub="Terre, semences, eau — les fondations de l'agroécologie paysanne portée par le mouvement NSS."
          />
          <StaggerGrid className="cf-pillars-grid" stagger={0.1}>
            {[
              {
                icon: <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 20h10"/><path d="M10 20c0-7-5-9-5-11 3-1 7 1 7 5-1-5 4-7 8-5-2 3-7 4-7 11"/></svg>,
                title: 'La Terre',
                desc: 'Fertilité, régénération des sols, conduite agroécologique — redonner vie à la terre pour des rendements durables et des exploitations autonomes.',
              },
              {
                icon: <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20v-9"/><path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7"/><path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5"/></svg>,
                title: 'Les Semences',
                desc: "Autonomie semencière paysanne — conservation, reproduction et diffusion des variétés locales pour s'affranchir de la dépendance aux semences commerciales.",
              },
              {
                icon: <svg className="cf-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12z"/></svg>,
                title: "L'Eau",
                desc: "Gestion écologique des ressources hydriques, irrigation paysanne durable — préserver l'eau comme bien commun pour les générations futures.",
              },
            ].map((p) => (
              <motion.div key={p.title} className="cf-pillar" variants={fadeUp}>
                <div className="cf-pillar__icon">{p.icon}</div>
                <h3 className="cf-pillar__title">{p.title}</h3>
                <div className="cf-pillar__accent" aria-hidden="true" />
                <p className="cf-pillar__desc">{p.desc}</p>
              </motion.div>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ÉDITIONS — grille 4-col
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-ed-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-ed-h2"
            eyebrow="PARCOURS"
            title={<>Parcourez les éditions <em>du CIFAP.</em></>}
            sub="Chaque édition approfondit un thème précis, dans une logique pédagogique cumulative portée par le mouvement NSS."
          />
          <div className="cf-editions-grid">
            {pastEditions.map((ed, i) => (
              <motion.article
                key={ed.year}
                className="cf-ed-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.08, duration: 0.42, ease: 'easeOut' }}
              >
                <div className="cf-ed-card__photo">
                  {ed.photo ? (
                    <img className="cf-ed-card__img" src={ed.photo} alt="" loading="lazy" />
                  ) : (
                    <div className="cf-ed-card__ph-icon" aria-hidden="true">
                      {EditionIcons[ed.year]}
                    </div>
                  )}
                  <span className="cf-ed-card__badge">{ed.num} ÉDITION</span>
                </div>
                <div className="cf-ed-card__body">
                  <div className="cf-ed-card__meta">Édition · {ed.year}</div>
                  <h3 className="cf-ed-card__title">{ed.theme}</h3>
                  <div className="cf-ed-card__date">{ed.dates}</div>
                  {ed.href ? (
                    <Link href={`/${locale}${ed.href}`} className="cf-ed-card__link">
                      Voir l&apos;édition →
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="cf-ed-card__link"
                      onClick={() => setSelectedEdition(ed)}
                    >
                      En savoir plus →
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA FINAL — fond vert foncé #045627
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
            <Link href={`/${locale}/agir/rejoindre`} className="cf-cta__btn cf-cta__btn--primary">
              S&apos;inscrire
            </Link>
            <Link href={`/${locale}/agir/soutenir`} className="cf-cta__btn cf-cta__btn--outline">
              Soutenir le programme
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════
          LIEU — OpenStreetMap + info overlay
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-lieu-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-lieu-h2"
            eyebrow="LIEU"
            title={<>Centre Karonghen Wati Naning <em>— Niaguis</em></>}
            sub="Un modèle de formation agroécologique à dupliquer dans chaque pays membre NSS."
          />
          <motion.div
            className="cf-map-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <iframe
              title="Carte — Centre Karonghen Wati Naning, Niaguis, Sénégal"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-16.34%2C12.49%2C-16.18%2C12.60&layer=mapnik&marker=12.5499%2C-16.2667"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="cf-map-info">
              <div className="cf-map-info__label">Centre de formation</div>
              <h3 className="cf-map-info__name">Centre Karonghen Wati Naning</h3>
              <p className="cf-map-info__addr">Niaguis · Casamance · Sénégal</p>
            </div>
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
    </>
  )
}
