'use client'

import { motion } from 'framer-motion'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
} as const

const ease = [0.22, 1, 0.36, 1] as const

const ETAPES = [
  {
    annee: '2011',
    titre: 'La naissance',
    texte: "12 organisations d'Afrique de l'Ouest lancent NSS pour la souveraineté alimentaire des femmes rurales.",
  },
  {
    annee: '2011–14',
    titre: 'La campagne',
    texte: "Déploiement terrain. Séances d'éducation. Les premières associations de femmes rurales rejoignent.",
  },
  {
    annee: '2014',
    titre: 'Le mouvement',
    texte: "500+ Associations de Femmes Rurales rejoignent NSS. Force paysanne autonome reconnue à l'échelle continentale.",
  },
  {
    annee: '2017',
    titre: '1ère Assemblée Générale',
    texte: "Gouvernance 100 % féminine. Chaque pays représenté au Conseil d'Administration.",
  },
] as const

export default function TimelineZigzagRedesign() {
  return (
    <section className="tl" aria-labelledby="tl-heading">
      <div className="tl-wrap">

        {/* ══ En-tête ══ */}
        <header className="tl-header">
          <motion.p
            className="tl-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.60, ease }}
          >
            NOTRE PARCOURS
          </motion.p>

          <motion.h2
            id="tl-heading"
            className="tl-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, delay: 0.10, ease }}
          >
            De campagne à mouvement <em>continental.</em>
          </motion.h2>
        </header>

        {/* ══ Grille 4 cartes ══ */}
        <ul className="tl-grid" role="list" aria-label="Étapes du parcours NSS">
          {ETAPES.map((e, i) => (
            <motion.li
              key={e.annee}
              role="listitem"
              className="tl-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08 + i * 0.10, ease }}
            >
              <span className="tl-annee">{e.annee}</span>
              <span className="tl-sep" aria-hidden="true" />
              <strong className="tl-titre">{e.titre}</strong>
              <p className="tl-texte">{e.texte}</p>
            </motion.li>
          ))}
        </ul>

      </div>

      <style>{`
        /* ── Section ── */
        .tl {
          background: #ffffff;
          overflow: hidden;
        }

        .tl-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 64px;
          box-sizing: border-box;
        }

        /* ── En-tête ── */
        .tl-header {
          margin-bottom: 48px;
          text-align: center;
        }

        .tl-eyebrow {
          margin: 0 0 16px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        .tl-h2 {
          margin: 0;
          font-family: var(--font-display), Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          letter-spacing: -0.01em;
        }

        .tl-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Grille ── */
        .tl-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 32px;
          width: 100%;
        }

        /* ── Carte ── */
        .tl-card {
          background: #ffffff;
          border-radius: 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          box-shadow:
            inset 0 0 0 1px ${NSS.vertClair},
            0 2px 8px rgba(0, 0, 0, 0.08);
          transition:
            box-shadow 0.24s ease,
            transform   0.24s ease;
        }

        .tl-card:hover {
          box-shadow:
            inset 0 0 0 2px ${NSS.vertPrimaire},
            0 4px 16px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        /* ── Année ── */
        .tl-annee {
          font-family: var(--font-display), Georgia, serif;
          font-size: 16px;
          font-weight: 700;
          color: ${NSS.vertFonce};
          display: block;
          margin-bottom: 0;
        }

        /* ── Underline sous l'année ── */
        .tl-sep {
          display: block;
          width: 36px;
          height: 2px;
          background: ${NSS.vertClair};
          margin-top: 8px;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        /* ── Titre carte ── */
        .tl-titre {
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #2A2A2A;
          display: block;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        /* ── Texte ── */
        .tl-texte {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #2C2C28;
          margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Tablet (<1024px) : 2 colonnes ── */
        @media (max-width: 1024px) {
          .tl-wrap { padding: 80px 40px; }
          .tl-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .tl-h2   { font-size: 30px; }
        }

        /* ── Mobile (<640px) : 1 colonne ── */
        @media (max-width: 640px) {
          .tl-wrap { padding: 64px 24px; }
          .tl-grid { grid-template-columns: 1fr; gap: 24px; }
          .tl-card { padding: 24px; }
          .tl-h2   { font-size: 26px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .tl-card { transition: none; }
        }
      `}</style>
    </section>
  )
}
