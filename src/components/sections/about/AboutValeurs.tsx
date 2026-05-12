'use client'

import { motion } from 'framer-motion'
import { Sprout, Wheat, Users } from 'lucide-react'
import type React from 'react'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
} as const

interface Valeur {
  num:      string
  icon:     React.ReactNode
  titre:    string
  accroche: string
  desc:     string
}

const VALEURS: Valeur[] = [
  {
    num:      '01',
    icon:     <Sprout size={22} strokeWidth={1.4} />,
    titre:    'Préserver',
    accroche: 'Les savoirs comme héritage vivant',
    desc:
      "Chaque graine semée, chaque pratique transmise porte une mémoire que ni " +
      "les marchés ni les brevets ne peuvent posséder. NSS préserve les semences " +
      "paysannes, les savoirs agroécologiques et le droit des femmes à les " +
      "transmettre de génération en génération.",
  },
  {
    num:      '02',
    icon:     <Wheat size={22} strokeWidth={1.4} />,
    titre:    'Cultiver',
    accroche: "L'agriculture familiale comme acte souverain",
    desc:
      "Cultiver, c'est nourrir — mais aussi décider. NSS reconnaît l'agriculture " +
      "familiale comme le socle d'une souveraineté alimentaire réelle, produite par " +
      "celles qui connaissent leur terre, leur climat et leur communauté depuis " +
      "des générations.",
  },
  {
    num:      '03',
    icon:     <Users size={22} strokeWidth={1.4} />,
    titre:    'Décider',
    accroche: 'La gouvernance paysanne comme terrain de lutte',
    desc:
      "Aucune politique agricole ne devrait se faire sans les femmes qui cultivent. " +
      "NSS porte la voix paysanne dans les instances régionales et continentales — " +
      "parce que décider de ce qu'on cultive, c'est décider de ce qu'on est.",
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutValeurs() {
  return (
    <section className="val-section" aria-labelledby="val-titre">

      <div className="val-wrap">

        <header className="val-header">

          <motion.div
            className="val-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, delay: 0.06, ease }}
          >
            <span className="val-ey-line" aria-hidden />
            <span>NOS VALEURS</span>
            <span className="val-ey-line" aria-hidden />
          </motion.div>

          <motion.h2
            id="val-titre" className="val-h2"
            initial={{ opacity: 0, y: 28, scale: 0.97 as number }}
            whileInView={{ opacity: 1, y: 0, scale: 1 as number }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.80, delay: 0.16, ease }}
          >
            Ce qui nous guide, <em>chaque jour.</em>
          </motion.h2>

          <motion.span
            className="val-underline" aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />

        </header>

        <div className="val-grid">
          {VALEURS.map(({ num, icon, titre, accroche, desc }, i) => (
            <motion.article
              key={num}
              className="val-card"
              aria-label={`${num} — ${titre}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.10 + i * 0.13, ease }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <span className="val-num" aria-hidden>{num}</span>
              <div className="val-icon" aria-hidden>{icon}</div>
              <h3 className="val-card-titre">{titre}</h3>
              <p className="val-card-accroche">{accroche}</p>
              <div className="val-card-sep" aria-hidden />
              <p className="val-card-desc">{desc}</p>
              <div className="val-card-accent" aria-hidden />
            </motion.article>
          ))}
        </div>

      </div>

      <style>{`
        .val-section {
          background: #FAFAF8;
          border-top: 1px solid rgba(0,0,0,0.06);
          overflow: hidden; position: relative;
        }
        .val-wrap {
          max-width: 1400px; margin: 0 auto;
          padding: 0 clamp(1rem, 2.5vw, 24px) 80px;
        }
        /* Header */
        .val-header {
          text-align: center;
          padding: 72px 0 52px;
          max-width: 640px; margin: 0 auto;
        }
        .val-eyebrow {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; margin-bottom: 32px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: ${NSS.vertClair};
        }
        .val-ey-line {
          display: block; flex: 1; max-width: 56px; height: 1px;
          background: rgba(165,206,70,0.40);
        }
        .val-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 700; line-height: 1.2;
          color: #2A2A2A; margin: 0 0 14px; letter-spacing: -0.015em;
        }
        .val-h2 em { font-style: italic; color: ${NSS.vertPrimaire}; }
        .val-underline {
          display: block; height: 2px; width: 72px;
          background: ${NSS.vertClair}; border-radius: 2px; margin: 0 auto;
        }
        /* Grid */
        .val-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        /* Card */
        .val-card {
          position: relative; background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07); border-radius: 2px;
          padding: 52px 36px 44px;
          display: flex; flex-direction: column;
          overflow: hidden; cursor: default;
          transition: box-shadow .30s ease, border-color .30s ease;
        }
        .val-card:hover {
          box-shadow: 0 16px 48px rgba(4,86,39,0.10);
          border-color: rgba(0,173,76,0.22);
        }
        /* Watermark */
        .val-num {
          font-family: var(--font-display), Georgia, serif;
          font-size: 96px; font-weight: 600;
          color: rgba(0,173,76,0.06); line-height: 1;
          position: absolute; top: 8px; right: 24px;
          pointer-events: none; user-select: none; letter-spacing: -0.04em;
        }
        /* Icon */
        .val-icon { color: ${NSS.vertPrimaire}; margin-bottom: 26px; }
        /* Title */
        .val-card-titre {
          font-family: var(--font-display), Georgia, serif;
          font-size: 20px; font-weight: 700;
          color: #0A0A0A; margin: 0 0 8px; line-height: 1.1;
        }
        /* Accroche */
        .val-card-accroche {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.10em; text-transform: uppercase;
          color: ${NSS.vertClair}; margin: 0 0 20px;
        }
        /* Separator */
        .val-card-sep {
          width: 32px; height: 2px;
          background: ${NSS.vertPrimaire}; border-radius: 1px;
          margin-bottom: 20px; flex-shrink: 0;
        }
        /* Description */
        .val-card-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px; line-height: 1.78; color: #4A4A4A; margin: 0;
          text-align: justify; hyphens: auto; flex: 1;
        }
        /* Bottom accent */
        .val-card-accent {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: ${NSS.vertClair};
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s ease;
        }
        .val-card:hover .val-card-accent { transform: scaleX(1); }
        /* Responsive */
        @media (max-width: 1024px) {
          .val-grid { grid-template-columns: 1fr; gap: 16px; }
          .val-card { padding: 44px 32px 40px; }
          .val-num { font-size: 80px; }
        }
        @media (max-width: 768px) {
          .val-header { padding: 56px 0 40px; }
          .val-grid { gap: 14px; }
          .val-card { padding: 36px 24px 32px; }
        }
        @media (max-width: 480px) {
          .val-header { padding: 44px 0 28px; }
          .val-card { padding: 28px 18px 26px; }
          .val-card-titre { font-size: 20px; }
          .val-card-desc { font-size: 13.5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .val-card { transition: none; }
          .val-card-accent { transition: none; }
        }
      `}</style>
    </section>
  )
}
