'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
  or:           '#E8A838',
} as const

const ease = [0.22, 1, 0.36, 1] as const

const ETAPES = [
  {
    annee:      '2011',
    badge:      'NAISSANCE',
    badgeColor: NSS.vertPrimaire,
    badgeBg:    'rgba(0,173,76,0.10)',
    titre:      'Campagne fondatrice',
    texte:      "NSS naît comme expression des droits des femmes rurales, lançant une campagne globale pour la souveraineté alimentaire en Afrique de l'Ouest avec l'appui de 12 organisations fondatrices.",
  },
  {
    annee:      '2011–14',
    badge:      'TRANSITION',
    badgeColor: '#6B7280',
    badgeBg:    'rgba(107,114,128,0.08)',
    titre:      'De campagne à mouvement',
    texte:      "NSS s'affirme comme mouvement paysan autonome, ancré dans chaque pays membre d'Afrique de l'Ouest. Les premières associations de femmes rurales rejoignent massivement.",
  },
  {
    annee:      '2017',
    badge:      'GOUVERNANCE',
    badgeColor: NSS.or,
    badgeBg:    'rgba(232,168,56,0.10)',
    titre:      '1ère Assemblée Générale',
    texte:      "Instances dirigeantes constituées à 100 % de femmes rurales. Chaque pays représenté au Conseil d'Administration qui élit le bureau.",
  },
  {
    annee:      'Auj.',
    badge:      'LEADERSHIP',
    badgeColor: NSS.vertClair,
    badgeBg:    'rgba(165,206,70,0.10)',
    titre:      'Autonomie totale',
    texte:      "175 000 femmes rurales organisées en 500+ associations pilotent elles-mêmes le mouvement à travers 14 pays d'Afrique de l'Ouest.",
  },
]

function dotStyle(i: number, selected: number): 'active' | 'past' | 'future' {
  if (i === selected) return 'active'
  if (i === ETAPES.length - 1) return 'future'
  return 'past'
}

export default function TimelineZigzagRedesign() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="tl" aria-labelledby="tl-heading">
      <div className="tl-wrap">

        {/* ══ En-tête ══ */}
        <header className="tl-header">
          <motion.div
            className="tl-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.60, ease }}
          >
            <span className="tl-ey-line" aria-hidden />
            <span>NOTRE HISTOIRE</span>
            <span className="tl-ey-line" aria-hidden />
          </motion.div>

          <motion.h2
            id="tl-heading"
            className="tl-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, delay: 0.10, ease }}
          >
            L&apos;évolution du mouvement <em>NSS.</em>
          </motion.h2>

          <motion.span
            className="tl-underline" aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.50, delay: 0.20, ease }}
            style={{ transformOrigin: 'center' }}
          />

          <motion.p
            className="tl-desc"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.60, delay: 0.26, ease }}
          >
            D&apos;une campagne de 5 pays en 2011 à un réseau panafricain de 14 nations —
            l&apos;histoire d&apos;un mouvement construit par et pour les femmes rurales.
          </motion.p>
        </header>

        {/* ══ Timeline nodes ══ */}
        <motion.div
          className="tl-timeline"
          role="tablist"
          aria-label="Étapes du parcours"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.20, ease }}
        >
          {ETAPES.map((e, i) => (
            <div key={e.annee} className="tl-col">
              <button
                type="button"
                role="tab"
                aria-selected={i === selected}
                className={`tl-dot tl-dot--${dotStyle(i, selected)}`}
                onClick={() => setSelected(i)}
              >
                {e.annee}
              </button>
            </div>
          ))}
        </motion.div>

        {/* ══ Grille 4 cartes ══ */}
        <ul className="tl-grid" role="list" aria-label="Étapes du parcours NSS">
          {ETAPES.map((e, i) => (
            <motion.li
              key={e.annee}
              role="listitem"
              className={`tl-card${i === selected ? ' tl-card--actif' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08 + i * 0.10, ease }}
              onClick={() => setSelected(i)}
            >
              <span className="tl-ghost" aria-hidden="true">{e.annee}</span>

              <span
                className="tl-badge"
                style={{ color: e.badgeColor, backgroundColor: e.badgeBg }}
              >
                {e.badge}
              </span>

              <strong className="tl-titre">{e.titre}</strong>
              <p className="tl-texte">{e.texte}</p>
            </motion.li>
          ))}
        </ul>


      </div>

      <style>{`
        .tl { background: #ffffff; overflow: hidden; }

        .tl-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 64px;
          box-sizing: border-box;
        }

        /* ── En-tête ── */
        .tl-header { margin-bottom: 52px; text-align: center; }

        .tl-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          margin: 0 0 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #00AD4C;
        }
        .tl-ey-line {
          display: block; width: 28px; height: 1.5px;
          background: #00AD4C; flex-shrink: 0;
        }

        .tl-h2 {
          margin: 0 0 0;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px); font-weight: 600; line-height: 1.2;
          color: #2A2A2A; letter-spacing: -0.015em;
        }
        .tl-h2 em { font-style: italic; color: #A5CE46; }

        .tl-underline {
          display: block; height: 3px; width: 60px;
          background: #00AD4C; border-radius: 2px;
          margin: 0.75rem auto 0;
        }
        .tl-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; font-weight: 400; line-height: 1.7;
          color: #5a5a5a; margin: 1.25rem auto 0;
          max-width: 580px; text-align: center;
        }

        /* ── Timeline nodes ── */
        .tl-timeline {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .tl-timeline::before {
          content: '';
          position: absolute;
          top: 50%; left: 0; right: 0;
          height: 1.5px;
          background: #dedad3;
          transform: translateY(-50%);
          z-index: 0;
        }

        .tl-col {
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 1;
          padding: 8px 0;
        }

        .tl-dot {
          display: flex; align-items: center; justify-content: center;
          width: 58px; height: 58px;
          border-radius: 50%;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: -0.01em;
          flex-shrink: 0;
          cursor: pointer;
          border: none;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, color 0.22s ease;
        }

        .tl-dot:focus-visible {
          outline: 2px solid ${NSS.vertPrimaire};
          outline-offset: 3px;
        }

        .tl-dot--active {
          width: 66px; height: 66px;
          background: ${NSS.vertPrimaire};
          color: #ffffff;
          box-shadow: 0 0 0 5px rgba(0,173,76,0.16);
          transform: scale(1.05);
        }

        .tl-dot--past {
          background: ${NSS.vertFonce};
          color: #ffffff;
        }
        .tl-dot--past:hover {
          background: ${NSS.vertPrimaire};
          transform: scale(1.06);
        }

        .tl-dot--future {
          background: #ffffff;
          color: #2A2A2A;
          border: 1.5px solid #2A2A2A;
        }
        .tl-dot--future:hover {
          border-color: ${NSS.vertPrimaire};
          color: ${NSS.vertPrimaire};
          transform: scale(1.06);
        }

        /* ── Grille ── */
        .tl-grid {
          list-style: none; margin: 0; padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 16px; width: 100%;
        }

        /* ── Carte ── */
        .tl-card {
          position: relative; overflow: hidden;
          background: #ffffff;
          border: 1px solid #e8e6e0;
          border-radius: 4px;
          padding: 28px 12px 32px;
          display: flex; flex-direction: column;
          cursor: pointer;
          transition: background 0.30s ease, border-color 0.30s ease,
                      box-shadow 0.24s ease, transform 0.24s ease;
        }

        .tl-card:not(.tl-card--actif):hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transform: translateY(-2px);
          border-color: ${NSS.vertClair};
        }

        .tl-card--actif {
          background: ${NSS.vertFonce};
          border-color: ${NSS.vertFonce};
          box-shadow: 0 8px 28px rgba(4,86,39,0.20);
          transform: translateY(-3px);
        }

        /* ── Ghost year ── */
        .tl-ghost {
          position: absolute;
          right: -2px; top: 4px;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 82px; font-weight: 900;
          line-height: 1; letter-spacing: -0.03em;
          color: rgba(0,0,0,0.042);
          pointer-events: none; user-select: none;
        }
        .tl-card--actif .tl-ghost { color: rgba(165,206,70,0.10); }

        /* ── Badge ── */
        .tl-badge {
          display: inline-block; width: fit-content;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.10em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
          margin-bottom: 20px;
          position: relative; z-index: 1;
          transition: color 0.30s ease, background 0.30s ease;
        }
        .tl-card--actif .tl-badge {
          color: ${NSS.vertClair} !important;
          background: rgba(165,206,70,0.15) !important;
        }

        /* ── Titre ── */
        .tl-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 20px; font-weight: 400;
          line-height: 1.1; display: block;
          margin-bottom: 8px;
          color: #0A0A0A;
          position: relative; z-index: 1;
          transition: color 0.30s ease;
        }
        .tl-card--actif .tl-titre { color: #ffffff; }

        /* ── Texte ── */
        .tl-texte {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; line-height: 1.78;
          color: #000000; margin: 0;
          text-align: justify; hyphens: auto;
          position: relative; z-index: 1;
          transition: color 0.30s ease;
        }
        .tl-card--actif .tl-texte { color: WHITE; }


        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .tl-wrap { padding: 80px 40px; }
          .tl-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .tl-timeline { grid-template-columns: 1fr 1fr; }
          .tl-titre { white-space: normal; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .tl-wrap { padding: 64px 24px; }
          .tl-grid { grid-template-columns: 1fr; gap: 14px; }
          .tl-card { padding: 24px; }
          .tl-titre { font-size: 20px; }
          .tl-timeline { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tl-card, .tl-dot { transition: none; }
        }
      `}</style>
    </section>
  )
}

