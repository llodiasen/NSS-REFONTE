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
    titre: "Promouvoir l'agroécologie",
    desc:
      "Valoriser les savoirs paysans, les semences traditionnelles et la biodiversité. " +
      "L'agroécologie comme réponse souveraine et durable aux défis alimentaires " +
      "de l'Afrique de l'Ouest.",
    stat: { value: '500+', label: 'Associations AFR engagées' },
  },
  {
    num:   '02',
    icon:  <Megaphone size={22} strokeWidth={1.4} />,
    titre: "Amplifier la voix des paysannes",
    desc:
      "Plaidoyer local, national et continental pour que les femmes rurales " +
      "participent pleinement aux décisions sur l'agriculture, l'environnement " +
      "et la souveraineté alimentaire.",
    stat: { value: '7', label: 'Pays en mouvement' },
  },
  {
    num:   '03',
    icon:  <Globe size={22} strokeWidth={1.4} />,
    titre: "Bâtir un mouvement continental",
    desc:
      "Réseau de solidarité actif dans 7 pays, uni autour d'une vision commune : " +
      "une Afrique où les femmes rurales décident, cultivent et transmettent " +
      "leur souveraineté alimentaire.",
    stat: { value: '14 ans', label: "D'engagement continu" },
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
          Trois piliers <em>pour bâtir ensemble.</em>
        </motion.h2>

        <motion.p className="obj-intro" {...inView(0.26)}>
          Trois piliers fondateurs qui guident l&apos;action du mouvement depuis 2011
          pour une souveraineté alimentaire réelle en Afrique de l&apos;Ouest.
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
          background: ${NSS.vertFonce};
          overflow: hidden;
          position: relative;
        }

        /* Texture grain subtile sur fond vert */
        .obj-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* ── En-tête ── */
        .obj-header {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 60px 24px 40px;
          max-width: 700px;
          margin: 0 auto;
        }

        /* ── Eyebrow centré avec lignes ── */
        .obj-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 36px;
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
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .obj-h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 46px;
          font-weight: 600;
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .obj-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Intro ── */
        .obj-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #ffffff;
          margin: 0;
          text-align: center;
        }

        /* ── Grille ── */
        .obj-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(165,206,70,0.10);
          border-top: 1px solid rgba(165,206,70,0.10);
          padding-bottom: 1px;
        }

        /* ── Carte ── */
        .obj-card {
          position: relative;
          background: ${NSS.vertFonce};
          padding: 56px 40px 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          cursor: default;
          transition: background 0.30s ease;
        }
        .obj-card:hover {
          background: rgba(0,173,76,0.08);
        }

        /* Numéro décoratif — watermark */
        .obj-num {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 88px;
          font-weight: 600;
          color: rgba(165,206,70,0.10);
          line-height: 1;
          position: absolute;
          top: 16px;
          right: 32px;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        /* Icône */
        .obj-icon {
          color: ${NSS.vertClair};
          margin-bottom: 24px;
          opacity: 0.85;
        }

        /* Titre carte */
        .obj-card-titre {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        /* Séparateur */
        .obj-card-sep {
          width: 32px;
          height: 1px;
          background: ${NSS.vertClair};
          margin-bottom: 20px;
          opacity: 0.60;
          flex-shrink: 0;
        }

        /* Description */
        .obj-card-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.72;
          color: #ffffff;
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
        }
        .obj-stat-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 32px;
          font-weight: 600;
          color: ${NSS.or};
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .obj-stat-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ffffff;
        }

        /* Accent bas de carte */
        .obj-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: ${NSS.vertClair};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .obj-card:hover .obj-card-accent {
          transform: scaleX(1);
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .obj-header { padding: 52px 24px 36px; }
          .obj-card { padding: 44px 36px 40px; }
          .obj-num { font-size: 72px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .obj-header { padding: 44px 24px 32px; }
          .obj-h2 { font-size: 36px; line-height: 1.08; }
          .obj-grid {
            grid-template-columns: 1fr;
            gap: 1px;
          }
          .obj-card { padding: 40px 24px 36px; }
          .obj-num { font-size: 64px; top: 12px; right: 20px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .obj-header { padding: 36px 16px 28px; }
          .obj-h2 { font-size: 28px; line-height: 1.10; }
          .obj-intro { font-size: 14px; }
          .obj-card { padding: 32px 20px 28px; }
          .obj-card-titre { font-size: 17px; }
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
