"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
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
    kicker: 'Jour 1 — Lundi',
    title: "Cérémonie d'ouverture officielle",
    body: "Accueil des 70 participants venus de 8 pays, en présence des autorités administratives locales de Niaguis. Installation dans les parcelles pédagogiques du Centre Karonghen Wati Naaning.",
    moments: [
      { time: '10h00', label: 'Accueil et installation au Centre Karonghen Wati Naaning' },
      { time: '14h00', label: 'Présentation du thème annuel et des objectifs du camp' },
      { time: '17h30', label: "Cérémonie d'ouverture avec autorités locales · repas d'accueil collectif" },
    ],
    badge: 'Ouverture',
    photo: '/images/actualites/organisations-femmes-rurales-nss.jpg',
    photoAlt: 'Cérémonie d\'ouverture CIFAP — femmes rurales NSS',
  },
  {
    kicker: 'Jour 2 — Mardi',
    title: 'Cadrage théorique et pratiques par pays',
    body: "Le thème de l'édition est posé par les leaders et techniciennes du réseau NSS, ancré dans les réalités paysannes de chaque pays. Dès l'aube, le village s'anime.",
    moments: [
      { time: '08h00', label: 'Atelier théorique · principes agroécologiques du thème' },
      { time: '12h00', label: 'Pause déjeuner collectif' },
      { time: '14h00', label: 'Sortie terrain · premiers travaux sur parcelles pédagogiques' },
    ],
    badge: 'Théorie',
    photo: '/images/actualites/mariama-sonko-agroecologie-afrique.jpg',
    photoAlt: 'Formation agroécologie CIFAP — session théorique',
  },
  {
    kicker: 'Jours 3–5',
    title: 'Formation intensive : théorie et terrain',
    body: "\"Le sol travaillé à la main, l'odeur du compost et le vert éclatant des cultures créent une atmosphère à la fois studieuse et conviviale.\" Modules techniques et pratique alternent chaque jour.",
    moments: [
      { time: '08h00–12h00', label: 'Ateliers théoriques · techniques agroécologiques spécifiques' },
      { time: '14h00–17h00', label: 'Pratique sur parcelles · rotation, compostage, bio-protecteurs' },
      { time: '17h00–20h00', label: 'Échanges d\'expériences · réseautage · repas collectifs' },
    ],
    badge: 'Terrain',
    photo: '/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg',
    photoAlt: 'Parcelles pédagogiques CIFAP Niaguis — formation terrain',
  },
  {
    kicker: 'Jour 6 — Samedi',
    title: 'Échanges inter-pays & capitalisation',
    body: "Restitution des pratiques propres à chaque AFR, adaptation aux contextes locaux et construction de synergies continentales. Chaque délégation repart avec des outils concrets.",
    moments: [
      { time: '08h00', label: 'Restitutions par délégation nationale · pratiques par pays' },
      { time: '11h00', label: 'Ateliers croisés · adaptation et fiches pratiques partagées' },
      { time: '15h00', label: 'Co-production des supports pour les AFR · validation collective' },
    ],
    badge: 'Échanges',
    photo: '/images/actualites/nss-cifap-2025.jpg',
    photoAlt: 'Échanges inter-pays CIFAP 2025 — Niaguis Sénégal',
  },
  {
    kicker: 'Jour 7 — Dimanche',
    title: 'Évaluations, certificats & clôture',
    body: "La semaine se conclut par une cérémonie officielle. Chaque participante repart avec un certificat, un plan d'action concret et un réseau continental renforcé.",
    moments: [
      { time: '09h00', label: 'Évaluations des apprentissages · partage des plans d\'action individuels' },
      { time: '11h00', label: 'Remise de certificats de formation' },
      { time: '15h00', label: 'Cérémonie de clôture officielle · engagements pour les AFR' },
    ],
    badge: 'Clôture',
    photo: '/images/actualites/thousand-currents-karonghen-wati-naning-niaguiss.jpg',
    photoAlt: 'Cérémonie de clôture CIFAP — Centre Karonghen Wati Naaning',
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
            <div className="cf-dr-day__visual">
              {day.photo && (
                <Image
                  src={day.photo}
                  alt={day.photoAlt}
                  fill
                  className="cf-dr-day__img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="cf-dr-day__img-overlay" aria-hidden="true" />
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
              7 jours — lundi au dimanche
            </span>
            <span className="cf-meta-pill">
              <span className="cf-meta-pill__label">Lieu</span>
              Niaguis, Casamance, Sénégal
            </span>
            <span className="cf-meta-pill">
              <span className="cf-meta-pill__label">Participantes</span>
              ~70 leaders · 8 pays
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
          { num: '4',    label: 'Éditions · 2022–2025' },
          { num: '8',    label: 'Pays d\'Afrique de l\'Ouest' },
          { num: '~70',  label: 'Participants · édition 2025' },
          { num: '7',    label: 'Jours de formation intensive' },
        ].map((stat) => (
          <div key={stat.label} className="cf-stat">
            <div className="cf-stat__num">{stat.num}</div>
            <span className="cf-stat__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          QU'EST-CE QUE LE CIFAP ?
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-what-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-what-h2"
            eyebrow="PRÉSENTATION"
            title={<>Qu&apos;est-ce que <em>le CIFAP ?</em></>}
          />
          <div className="cf-what-grid">
            <div className="cf-what-text">
              <p className="cf-what-lead">
                Le Camp International de Formation en Agroécologie Paysanne (CIFAP) est un
                programme phare du mouvement panafricain «&nbsp;Nous Sommes la Solution&nbsp;» (NSS),
                actif dans 8 pays d&apos;Afrique de l&apos;Ouest depuis 2011.
              </p>
              <p className="cf-what-body">
                Créé en 2022, le CIFAP est bien plus qu&apos;une formation agricole : c&apos;est un
                <strong> espace de convergence panafricain</strong> où se rencontrent pratiques
                ancestrales et innovations agroécologiques, où se tissent des solidarités entre
                femmes rurales de huit pays.
              </p>
              <p className="cf-what-body">
                Chaque année en septembre, le village de Niaguis en Casamance devient
                le <strong>carrefour d&apos;une agriculture en transformation</strong>. Le Centre
                Karonghen Wati Naaning accueille près de 70 participantes qui viennent
                partager savoirs et expériences.
              </p>
              <blockquote className="cf-what-quote">
                <p className="cf-what-quote__text">
                  &laquo;&nbsp;Chaque technique apprise ici peut transformer nos exploitations.&nbsp;&raquo;
                </p>
                <footer className="cf-what-quote__foot">
                  — Aissatou, maraîchère participante 2025
                </footer>
              </blockquote>
            </div>
            <div className="cf-what-points">
              {[
                { icon: '🎯', title: 'Formation intensive', desc: '7 jours d\'ateliers théoriques et pratiques sur parcelles pédagogiques.' },
                { icon: '🤝', title: 'Réseau panafricain', desc: 'Échanges entre leaders AFR de 8 pays d\'Afrique de l\'Ouest.' },
                { icon: '🌱', title: 'Savoir-faire concrets', desc: 'Techniques immédiatement applicables dans les exploitations locales.' },
                { icon: '⚡', title: 'Autonomisation', desc: 'Renforcement du leadership et de l\'indépendance des femmes rurales.' },
              ].map((pt) => (
                <div key={pt.title} className="cf-what-point">
                  <span className="cf-what-point__icon" aria-hidden="true">{pt.icon}</span>
                  <div>
                    <h3 className="cf-what-point__title">{pt.title}</h3>
                    <p className="cf-what-point__desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
              <div className="cf-what-recognition">
                <p>
                  <strong>Reconnaissance institutionnelle :</strong> La présence systématique
                  des autorités administratives locales aux cérémonies d&apos;ouverture marque la
                  légitimité d&apos;un modèle agricole alternatif qui fait ses preuves sur le terrain.
                </p>
              </div>
            </div>
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
          MODULES TECHNIQUES — 8 modules en grille
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-mod-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-mod-h2"
            eyebrow="MODULES TECHNIQUES"
            title={<>Des savoir-faire concrets <em>et reproductibles.</em></>}
            sub="Le CIFAP transmet des techniques éprouvées, adaptées aux réalités locales d'Afrique de l'Ouest — applicables dès le retour dans les exploitations."
          />
          <div className="cf-mod-grid">
            {[
              { icon: '🌱', title: 'Rotation des cultures', desc: 'Planification des rotations horticoles adaptées aux légumes-feuilles, légumes-fruits et légumes-racines. Maintien de la fertilité des sols naturellement.' },
              { icon: '🛡️', title: 'Bio-protecteurs', desc: 'Fabrication de préparations naturelles à base de plantes locales pour protéger les cultures contre ravageurs et maladies — sans pesticides chimiques.' },
              { icon: '🌍', title: 'Gestion écologique des sols', desc: 'Travail manuel du sol, amélioration de la structure sans labour intensif. Maintien de l\'activité biologique et de la santé du sol vivant.' },
              { icon: '♻️', title: 'Compostage et fertilisation', desc: '"L\'odeur du compost et le vert éclatant des cultures" — fabrication, maturation et utilisation du compost selon les ressources disponibles localement.' },
              { icon: '🌾', title: 'Autonomie semencière', desc: 'Production, sélection et conservation de semences paysannes. Indépendance vis-à-vis des multinationales et préservation de la biodiversité cultivée.', highlight: true },
              { icon: '💧', title: 'Gestion de l\'eau', desc: 'Irrigation économe, collecte d\'eau de pluie et aménagements adaptés. Face aux défis du changement climatique, économiser l\'eau devient crucial.' },
              { icon: '🌿', title: 'Techniques horticoles', desc: 'Conduite des cultures maraîchères adaptée chaque année au thème. En 2025 : maraîchage intensif sur petites surfaces, diversification et calendrier.' },
              { icon: '🔄', title: 'Résilience climatique', desc: 'Développer une agriculture capable de s\'adapter aux crises : sécheresses, inondations, variabilité des saisons. Variétés résistantes et stratégies d\'adaptation.' },
            ].map((mod) => (
              <article key={mod.title} className={`cf-mod-card${mod.highlight ? ' cf-mod-card--hl' : ''}`}>
                <span className="cf-mod-card__icon" aria-hidden="true">{mod.icon}</span>
                <h3 className="cf-mod-card__title">{mod.title}</h3>
                <div className="cf-mod-card__accent" aria-hidden="true" />
                <p className="cf-mod-card__desc">{mod.desc}</p>
                {mod.highlight && (
                  <p className="cf-mod-card__note">
                    Enjeu stratégique : au cœur de la souveraineté alimentaire NSS
                  </p>
                )}
              </article>
            ))}
          </div>
          <p className="cf-mod-pedagogy">
            Les ateliers pratiques mettent en avant des <strong>techniques simples mais efficaces</strong>.
            Pas de discours déconnectés du terrain : les mains travaillent la terre, les savoirs circulent
            entre générations, et chaque technique peut être immédiatement appliquée dans les exploitations.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OBJECTIFS — train slider 3 cartes
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-obj-h2">
        <div className="cf-sec__inner">
          <ObjectifsTrain />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          QUI PEUT PARTICIPER ?
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--white" aria-labelledby="cf-qui-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-qui-h2"
            eyebrow="PARTICIPANTS"
            title={<>Qui participe <em>au CIFAP ?</em></>}
            sub="Le CIFAP s'adresse aux membres des Associations de Femmes Rurales (AFR) du réseau NSS présent dans 8 pays d'Afrique de l'Ouest."
          />
          <div className="cf-qui-grid">
            {[
              { icon: '👩‍🌾', title: 'Leaders d\'AFR', desc: 'Présidentes, secrétaires générales ou responsables d\'Associations de Femmes Rurales. En première ligne pour diffuser l\'agroécologie et former d\'autres femmes.' },
              { icon: '🎓', title: 'Agents techniques', desc: 'Techniciens agricoles, animateurs et formateurs travaillant avec les AFR. Ils accompagnent les productrices et démultiplient les formations.' },
              { icon: '🌱', title: 'Maraîchères aguerries', desc: 'Productrices expérimentées pratiquant déjà l\'agroécologie ou souhaitant opérer une transition. Elles approfondissent et échangent avec d\'autres paysannes.' },
              { icon: '✨', title: 'Jeunes en installation', desc: 'Jeunes femmes et hommes qui souhaitent s\'installer en agriculture et cherchent des modèles viables, respectueux de l\'environnement et économiquement rentables.' },
            ].map((prof) => (
              <article key={prof.title} className="cf-qui-card">
                <span className="cf-qui-card__icon" aria-hidden="true">{prof.icon}</span>
                <h3 className="cf-qui-card__title">{prof.title}</h3>
                <p className="cf-qui-card__desc">{prof.desc}</p>
              </article>
            ))}
          </div>

          <div className="cf-pays-block">
            <h3 className="cf-pays-block__title">8 pays représentés</h3>
            <div className="cf-pays-grid" aria-label="Pays participants">
              {[
                { flag: '🇲🇱', name: 'Mali' },
                { flag: '🇧🇫', name: 'Burkina Faso' },
                { flag: '🇬🇭', name: 'Ghana' },
                { flag: '🇨🇮', name: 'Côte d\'Ivoire' },
                { flag: '🇬🇼', name: 'Guinée-Bissau' },
                { flag: '🇬🇳', name: 'Guinée' },
                { flag: '🇬🇲', name: 'Gambie' },
                { flag: '🇸🇳', name: 'Sénégal' },
              ].map((pays) => (
                <div key={pays.name} className="cf-pays-badge">
                  <span aria-hidden="true">{pays.flag}</span>
                  <span>{pays.name}</span>
                </div>
              ))}
            </div>
            <blockquote className="cf-pays-quote">
              &laquo;&nbsp;La diversité des participants dit beaucoup sur la portée réelle du CIFAP.
              Ce n&apos;est pas une formation de spécialistes entre eux — c&apos;est un espace où se croisent
              les générations, les genres et les expériences.&nbsp;&raquo;
            </blockquote>
          </div>
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
          PARTENAIRES
      ══════════════════════════════════════════════ */}
      <section className="cf-sec cf-sec--alt" aria-labelledby="cf-part-h2">
        <div className="cf-sec__inner">
          <SectionHeader
            titleId="cf-part-h2"
            eyebrow="PARTENAIRES"
            title={<>Un programme porté <em>collectivement.</em></>}
          />
          <div className="cf-part-block">
            <p className="cf-part-intro">
              Le CIFAP est organisé par le mouvement NSS avec le soutien de partenaires techniques
              et de bailleurs engagés pour la souveraineté alimentaire en Afrique de l&apos;Ouest.
            </p>
            <div className="cf-part-row">
              <div className="cf-part-group">
                <p className="cf-part-group__label">Partenaires techniques</p>
                <div className="cf-part-logos">
                  {[
                    { name: 'Fahamu Africa', logo: '/images/partenaires/logofahamu1.png' },
                    { name: 'FENOP', logo: '/images/partenaires/FENOP.jpg' },
                    { name: 'AJAC Lukaal', logo: '/images/partenaires/AJAC-Lukaal_Tiburce-MANGA.png' },
                  ].map((p) => (
                    <div key={p.name} className="cf-part-logo-wrap">
                      <img src={p.logo} alt={p.name} loading="lazy" className="cf-part-logo" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="cf-part-group">
                <p className="cf-part-group__label">Bailleurs de fonds</p>
                <div className="cf-part-logos">
                  {[
                    { name: 'Grassroots International', logo: '/images/partenaires/Grassroots-international.jpg' },
                    { name: 'Thousand Currents', logo: '/images/partenaires/thoussands-current-1.jpg' },
                    { name: 'Agroecology Fund', logo: '/images/partenaires/Agroecology-Fund.jpg' },
                    { name: 'Fonds Égalité', logo: '/images/partenaires/Fond-egalite.png' },
                  ].map((p) => (
                    <div key={p.name} className="cf-part-logo-wrap">
                      <img src={p.logo} alt={p.name} loading="lazy" className="cf-part-logo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
