'use client'

import { motion } from 'framer-motion'
import { Leaf, Megaphone, Globe } from 'lucide-react'
import type React from 'react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Données objectifs (source : NSS-Mouvement.md — piliers officiels) ───────
interface Objectif {
  num:   string
  icon:  React.ReactNode
  titre: string
  desc:  string
  stat:  { value: string; label: string }
}

const OBJECTIFS: Objectif[] = [
  {
    num:   '01',
    icon:  <Leaf size={22} strokeWidth={1.4} />,
    titre: "La terre comme héritage vivant",
    desc:
      "Nos mères nous ont transmis des savoirs que ni les marchés ni les " +
      "semenciers ne peuvent remplacer. NSS protège et diffuse ces pratiques " +
      "agroécologiques endogènes qui nourrissent l'Afrique depuis des générations.",
    stat: { value: '500+', label: 'Associations de femmes rurales' },
  },
  {
    num:   '02',
    icon:  <Megaphone size={22} strokeWidth={1.4} />,
    titre: "La famille comme premier champ",
    desc:
      "NSS promeut l'agriculture familiale comme modèle viable, durable et " +
      "souverain. Nos paysannes portent cette conviction du village aux instances " +
      "continentales — parce que décider de ce qu'on cultive, c'est décider de ce qu'on est.",
    stat: { value: '14', label: 'Pays représentés' },
  },
  {
    num:   '03',
    icon:  <Globe size={22} strokeWidth={1.4} />,
    titre: "La gouvernance comme terrain de lutte",
    desc:
      "175 000 femmes, 14 pays, un seul mouvement. NSS s'étend vers d'autres " +
      "régions du continent — parce que la souveraineté alimentaire ne connaît " +
      "pas de frontières.",
    stat: { value: '14 ans', label: "D'engagement sans rupture" },
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

// ─── Component ────────────────────────────────────────────────────────────────
export default function ObjectifsRedesign() {
  return (
    <section className="obj-section" aria-labelledby="obj-titre">

      {/* ════════ En-tête centré ════════ */}
      <div className="obj-header">

        <motion.div className="obj-eyebrow" {...inView(0.06)}>
          <span className="obj-eyebrow-line" aria-hidden="true" />
          <span className="obj-eyebrow-text">NOS OBJECTIFS</span>
          <span className="obj-eyebrow-line" aria-hidden="true" />
        </motion.div>

        <motion.h2 id="obj-titre" className="obj-h2" {...inViewScale(0.16)}>
          Cultiver, transmettre, <em>décider ensemble.</em>
        </motion.h2>
        <motion.span
          className="obj-underline"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        <motion.p className="obj-intro" {...inView(0.26)}>
          Depuis 2011, NSS œuvre sur trois fronts : promouvoir les savoirs
          paysans, développer l&apos;agriculture familiale et peser sur la
          gouvernance agricole — du village aux instances continentales.
        </motion.p>
      </div>

      {/* ════════ Grille 3 cartes full-width ════════ */}
      <div className="obj-grid">
        {OBJECTIFS.map(({ num, icon, titre, desc, stat }, i) => (
          <motion.article
            key={num}
            className="obj-card"
            aria-label={`Objectif ${num} : ${titre}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.10 + i * 0.14, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
          >
            {/* Numéro décoratif */}
            <span className="obj-num" aria-hidden="true">{num}</span>

            {/* Icône */}
            <div className="obj-icon" aria-hidden="true">{icon}</div>

            {/* Titre */}
            <h3 className="obj-card-titre">{titre}</h3>

            {/* Séparateur */}
            <div className="obj-card-sep" aria-hidden="true" />

            {/* Description */}
            <p className="obj-card-desc">{desc}</p>

            {/* Stat */}
            <div className="obj-card-stat">
              <span className="obj-stat-value">{stat.value}</span>
              <span className="obj-stat-label">{stat.label}</span>
            </div>

            {/* Accent bas de carte */}
            <div className="obj-card-accent" aria-hidden="true" />
          </motion.article>
        ))}
      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .obj-section {
          background: #FAFAF8;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        /* ── En-tête ── */
        .obj-header {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem) 3rem;
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── Eyebrow centré avec lignes ── */
        .obj-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 1rem;
        }
        .obj-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: rgba(165,206,70,0.40);
        }
        .obj-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .obj-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 600;
          line-height: 1.2;
          color: #2A2A2A;
          margin: 0 0 0.75rem;
          letter-spacing: -0.015em;
        }
        .obj-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }
        .obj-underline {
          display: block;
          height: 2px;
          width: 72px;
          background: ${NSS.vertClair};
          border-radius: 2px;
          margin: 0 auto 1.5rem;
        }

        /* ── Intro ── */
        .obj-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.7;
          color: #2C2C28;
          margin: 0;
          text-align: center;
        }

        /* ── Grille ── */
        .obj-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0 clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 4.5rem);
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ── Carte ── */
        .obj-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 2px;
          padding: 52px 36px 44px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          cursor: default;
          transition: box-shadow 0.30s ease, border-color 0.30s ease, transform 0.30s ease;
        }
        .obj-card:hover {
          box-shadow: 0 16px 48px rgba(4,86,39,0.10);
          border-color: rgba(0,173,76,0.22);
          transform: translateY(-6px);
        }

        /* Numéro décoratif — watermark */
        .obj-num {
          font-family: var(--font-display), Georgia, serif;
          font-size: 88px;
          font-weight: 600;
          color: rgba(0,173,76,0.07);
          line-height: 1;
          position: absolute;
          top: 12px;
          right: 28px;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        /* Icône */
        .obj-icon {
          color: ${NSS.vertPrimaire};
          margin-bottom: 24px;
        }

        /* Titre carte */
        .obj-card-titre {
          font-family: var(--font-display), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #0A0A0A;
          margin: 0 0 20px;
          line-height: 1.22;
        }

        /* Séparateur */
        .obj-card-sep {
          width: 32px;
          height: 2px;
          background: ${NSS.vertPrimaire};
          margin-bottom: 20px;
          flex-shrink: 0;
          border-radius: 1px;
        }

        /* Description */
        .obj-card-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.78;
          color: #4A4A4A;
          margin: 0 0 32px;
          text-align: justify;
          hyphens: auto;
          flex: 1;
        }

        /* Stat */
        .obj-card-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .obj-stat-value {
          font-family: var(--font-display), Georgia, serif;
          font-size: 38px;
          font-weight: 600;
          color: ${NSS.vertPrimaire};
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .obj-stat-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888;
        }

        /* Accent bas de carte — bande colorée */
        .obj-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${NSS.vertPrimaire};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .obj-card:hover .obj-card-accent {
          transform: scaleX(1);
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .obj-grid { grid-template-columns: 1fr; gap: 16px; }
          .obj-card { padding: 44px 32px 40px; }
          .obj-num { font-size: 72px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .obj-h2 { line-height: 1.2; }
          .obj-grid { gap: 14px; }
          .obj-card { padding: 36px 24px 32px; }
          .obj-num { font-size: 64px; top: 10px; right: 18px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .obj-h2 { line-height: 1.2; }
          .obj-intro { font-size: 14px; }
          .obj-grid { gap: 12px; }
          .obj-card { padding: 28px 18px 26px; }
          .obj-card-titre { font-size: 19px; }
          .obj-card-desc { font-size: 13.5px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .obj-card { transition: none; }
          .obj-card-accent { transition: none; }
        }
      `}</style>
    </section>
  )
}
