'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface Detail {
  icon:  React.ReactNode
  label: string
  value: string
}

interface Programme {
  id:      string
  label:   string
  acronym: string
  nom:     string
  desc:    string
  details: Detail[]
  image:   string
  alt:     string
  href:    string
  tag:     string
}

// ─── Données (source : NSS-Contenu-Site.md) ──────────────────────────────────
const PROGRAMMES: Programme[] = [
  {
    id:      'cifap',
    label:   'CIFAP',
    acronym: 'CIFAP',
    nom:     "Camp International de Formation sur l'Agroécologie Paysanne",
    desc:
      "Le CIFAP réunit chaque année des femmes agricultrices membres des Associations " +
      "de Femmes Rurales (AFR) de toute l'Afrique de l'Ouest. Pendant une semaine, " +
      "elles échangent leurs savoirs endogènes, renforcent leurs pratiques agroécologiques " +
      "et tissent les liens du réseau NSS. Un espace de formation, de transmission " +
      "et de solidarité continentale.",
    details: [
      { icon: <MapPin    size={14} strokeWidth={1.6} />, label: 'Lieu',       value: 'Centre Karonghen Wati Naning — Niaguis, Casamance, Sénégal' },
      { icon: <Calendar  size={14} strokeWidth={1.6} />, label: 'Fréquence',  value: 'Camp annuel' },
      { icon: <Users     size={14} strokeWidth={1.6} />, label: 'Public',     value: 'Femmes agricultrices membres des AFR — 7 pays' },
    ],
    image: '/images/galerie/formation-1.jpg',
    alt:   'Camp de formation agroécologique CIFAP NSS — Niaguis, Casamance',
    href:  '/fr/programmes/cifap',
    tag:   'Agroécologie',
  },
  {
    id:      'emmap',
    label:   'EMMAP',
    acronym: 'EMMAP',
    nom:     "Engagement des Médias pour les Minorités, l'Agriculture et la Paix",
    desc:
      "EMMAP forme les membres NSS à produire et diffuser leurs propres contenus " +
      "sur l'agroécologie, la souveraineté alimentaire et les droits des femmes rurales. " +
      "Le programme donne aux paysannes les outils pour devenir actrices — et non sujettes — " +
      "de l'information, en langues locales et sur les médias communautaires de la région.",
    details: [
      { icon: <MapPin    size={14} strokeWidth={1.6} />, label: 'Zone',       value: 'Afrique de l\'Ouest — 7 pays membres' },
      { icon: <Calendar  size={14} strokeWidth={1.6} />, label: 'Format',     value: 'Formations terrain continues' },
      { icon: <Users     size={14} strokeWidth={1.6} />, label: 'Objectif',   value: 'Médias communautaires & communication paysanne' },
    ],
    image: '/images/galerie/agro-1.jpg',
    alt:   'Formation médias pour agricultrices NSS — programme EMMAP',
    href:  '/fr/programmes/emmap',
    tag:   'Médias & Plaidoyer',
  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.75, delay, ease },
})

const inViewScale = (delay = 0) => ({
  initial:     { opacity: 0, y: 36, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.82, delay, ease },
})

import type React from 'react'

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProgrammesRedesign() {
  const [activeId, setActiveId] = useState<string>('cifap')

  const active = PROGRAMMES.find((p) => p.id === activeId) ?? PROGRAMMES[0]

  return (
    <section className="prg-section" aria-labelledby="prg-titre">

      {/* ════════ En-tête ════════ */}
      <div className="prg-header">

        <motion.div className="prg-eyebrow" {...inView(0.06)}>
          <span className="prg-eyebrow-line" aria-hidden="true" />
          <span className="prg-eyebrow-text">NOS PROGRAMMES</span>
        </motion.div>

        <motion.h2 id="prg-titre" className="prg-h2" {...inViewScale(0.16)}>
          Programmes nés<br />
          <em>du terrain.</em>
        </motion.h2>

        <motion.p className="prg-intro" {...inView(0.26)}>
          Deux programmes phares qui incarnent la mission NSS sur le terrain,
          de la formation agroécologique au plaidoyer médiatique.
        </motion.p>

        {/* ── Tabs ── */}
        <motion.div
          className="prg-tabs"
          role="tablist"
          aria-label="Sélectionner un programme"
          {...inView(0.34)}
        >
          {PROGRAMMES.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activeId === p.id}
              aria-controls={`prg-panel-${p.id}`}
              id={`prg-tab-${p.id}`}
              className={`prg-tab${activeId === p.id ? ' prg-tab--active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.label}
              {activeId === p.id && (
                <motion.span
                  className="prg-tab-indicator"
                  layoutId="prg-tab-indicator"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ════════ Panel animé ════════ */}
      <div className="prg-panels">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            id={`prg-panel-${active.id}`}
            aria-labelledby={`prg-tab-${active.id}`}
            className="prg-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease }}
          >
            {/* Grille 2 colonnes */}
            <div className="prg-card">

              {/* Image */}
              <div className="prg-img-wrap">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  className="prg-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={active.id === 'cifap'}
                />
                <div className="prg-img-overlay" aria-hidden="true" />

                {/* Tag flottant */}
                <span className="prg-img-tag">{active.tag}</span>

                {/* Acronyme flottant */}
                <span className="prg-img-acronym" aria-hidden="true">
                  {active.acronym}
                </span>
              </div>

              {/* Contenu */}
              <div className="prg-content">

                {/* Nom complet */}
                <p className="prg-nom">{active.nom}</p>

                {/* Description */}
                <p className="prg-desc">{active.desc}</p>

                {/* Séparateur */}
                <div className="prg-sep" aria-hidden="true" />

                {/* Détails */}
                <dl className="prg-details">
                  {active.details.map(({ icon, label, value }) => (
                    <div key={label} className="prg-detail">
                      <dt className="prg-detail-label">
                        <span className="prg-detail-icon" aria-hidden="true">{icon}</span>
                        {label}
                      </dt>
                      <dd className="prg-detail-value">{value}</dd>
                    </div>
                  ))}
                </dl>

                {/* CTA */}
                <Link href={active.href} className="prg-cta">
                  Découvrir le programme
                  <ArrowRight size={14} strokeWidth={2} className="prg-cta-icon" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lien tous programmes */}
      <motion.div className="prg-footer" {...inView(0.10)}>
        <Link href="/fr/programmes" className="prg-all">
          Tous nos programmes
        </Link>
      </motion.div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .prg-section {
          background: #ffffff;
          overflow: hidden;
        }

        /* ── En-tête ── */
        .prg-header {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 80px 48px;
        }

        /* ── Eyebrow ── */
        .prg-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .prg-eyebrow-line {
          display: block;
          width: 44px;
          height: 1px;
          background: ${NSS.vertClair};
          flex-shrink: 0;
        }
        .prg-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── H2 ── */
        .prg-h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(44px, 5vw, 72px);
          font-weight: 600;
          line-height: 0.92;
          color: #0A0A0A;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .prg-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }

        /* ── Intro ── */
        .prg-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.78;
          color: #4A4A4A;
          max-width: 520px;
          margin: 0 0 48px;
        }

        /* ── Tabs ── */
        .prg-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .prg-tab {
          position: relative;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4A4A4A;
          background: transparent;
          border: 1.5px solid #E2E2E2;
          padding: 12px 28px;
          border-radius: 1px;
          cursor: pointer;
          transition: border-color 0.22s ease, color 0.22s ease, background 0.22s ease;
          overflow: hidden;
        }
        .prg-tab:hover:not(.prg-tab--active) {
          border-color: ${NSS.vertPrimaire};
          color: ${NSS.vertPrimaire};
        }
        .prg-tab--active {
          color: #ffffff;
          border-color: ${NSS.vertPrimaire};
          background: ${NSS.vertPrimaire};
        }
        .prg-tab-indicator {
          position: absolute;
          inset: 0;
          background: ${NSS.vertPrimaire};
          z-index: -1;
          border-radius: 1px;
        }

        /* ── Panels ── */
        .prg-panels {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 80px 48px;
        }
        .prg-panel { width: 100%; }

        /* ── Card ── */
        .prg-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 480px;
          border: 1px solid #E8E8E8;
          border-radius: 2px;
          overflow: hidden;
        }

        /* ── Image ── */
        .prg-img-wrap {
          position: relative;
          overflow: hidden;
          background: #0A1A0E;
        }
        .prg-img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.60s ease;
        }
        .prg-card:hover .prg-img {
          transform: scale(1.04);
        }
        .prg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(4,86,39,0.50) 0%,
            rgba(4,86,39,0.20) 50%,
            rgba(0,0,0,0.10) 100%
          );
        }
        .prg-img-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffffff;
          background: ${NSS.vertPrimaire};
          padding: 5px 12px;
          border-radius: 1px;
        }
        .prg-img-acronym {
          position: absolute;
          bottom: 24px;
          left: 24px;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 52px;
          font-weight: 600;
          color: rgba(255,255,255,0.12);
          line-height: 1;
          letter-spacing: -0.02em;
          pointer-events: none;
          user-select: none;
        }

        /* ── Contenu ── */
        .prg-content {
          padding: 52px 56px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }
        .prg-nom {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          margin: 0 0 20px;
        }
        .prg-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.82;
          color: #2A2A2A;
          text-align: justify;
          hyphens: auto;
          margin: 0 0 32px;
          flex: 1;
        }

        /* ── Séparateur ── */
        .prg-sep {
          width: 40px;
          height: 1px;
          background: ${NSS.vertClair};
          margin-bottom: 28px;
          opacity: 0.60;
        }

        /* ── Détails ── */
        .prg-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 0 0 36px;
        }
        .prg-detail {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 12px;
          align-items: baseline;
        }
        .prg-detail-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: #888;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .prg-detail-icon { color: ${NSS.vertPrimaire}; flex-shrink: 0; }
        .prg-detail-value {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #1A1A1A;
          line-height: 1.5;
          margin: 0;
        }

        /* ── CTA ── */
        .prg-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          background: ${NSS.vertFonce};
          color: #ffffff;
          padding: 15px 32px;
          border-radius: 1px;
          text-decoration: none;
          align-self: flex-start;
          transition: background 0.22s ease, gap 0.20s ease;
        }
        .prg-cta-icon { transition: transform 0.20s ease; }
        .prg-cta:hover { background: ${NSS.vertPrimaire}; gap: 16px; }
        .prg-cta:hover .prg-cta-icon { transform: translateX(3px); }

        /* ── Footer ── */
        .prg-footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 80px 96px;
          text-align: center;
        }
        .prg-all {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.vertFonce};
          text-decoration: none;
          border-bottom: 1.5px solid ${NSS.vertClair};
          padding-bottom: 3px;
          transition: color 0.20s ease;
        }
        .prg-all:hover { color: ${NSS.vertPrimaire}; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .prg-header,
          .prg-panels,
          .prg-footer { padding-left: 48px; padding-right: 48px; }
          .prg-content { padding: 44px 44px; }
        }
        @media (max-width: 1024px) {
          .prg-card { grid-template-columns: 1fr; min-height: auto; }
          .prg-img-wrap { min-height: 320px; }
          .prg-header,
          .prg-panels,
          .prg-footer { padding-left: 40px; padding-right: 40px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .prg-header { padding: 72px 24px 40px; }
          .prg-panels { padding: 0 24px 40px; }
          .prg-footer { padding: 0 24px 72px; }
          .prg-h2 { font-size: clamp(38px, 9vw, 56px); }
          .prg-img-wrap { min-height: 260px; }
          .prg-content { padding: 36px 28px; }
          .prg-detail { grid-template-columns: 100px 1fr; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .prg-header { padding: 60px 16px 36px; }
          .prg-panels { padding: 0 16px 36px; }
          .prg-footer { padding: 0 16px 60px; }
          .prg-h2 { font-size: clamp(34px, 10vw, 48px); }
          .prg-content { padding: 28px 20px; }
          .prg-detail { grid-template-columns: 1fr; gap: 4px; }
          .prg-detail-label { margin-bottom: 2px; }
          .prg-img-wrap { min-height: 220px; }
          .prg-cta { font-size: 10px; padding: 13px 24px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .prg-img { transition: none; }
          .prg-cta-icon { transition: none; }
        }
      `}</style>
    </section>
  )
}
