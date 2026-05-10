'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface Temoignage {
  citation: string
  nom:      string
  role:     string
  orga:     string
  pays:     string
  photo:    string
}

// ─── Données (source : NSS-Associations.md) ───────────────────────────────────
const TEMOIGNAGES: Temoignage[] = [
  {
    citation: 'Avec leurs bras et leurs valeurs, les femmes rurales sont aptes à nourrir le monde.',
    nom:    'Mariama Sonko',
    role:   'Présidente, NSS',
    orga:   'AJAC — Association des Jeunes Agriculteurs de Casamance',
    pays:   'Sénégal',
    photo:  'https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg',
  },
  {
    citation: 'La souveraineté alimentaire, c\'est notre droit. Nous le défendons chaque jour, sur chaque parcelle de terre.',
    nom:    'Yah Diakité',
    role:   'Déléguée CA Mali',
    orga:   'AMASSA — Association Malienne pour la Sécurité et la Souveraineté Alimentaire',
    pays:   'Mali',
    photo:  'https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg',
  },
  {
    citation: 'NSS, c\'est un espace où les femmes rurales ne sont plus seules. Ensemble, nous portons la voix de toute l\'Afrique.',
    nom:    'Fatou Binetou Diop',
    role:   'Déléguée CA Sénégal',
    orga:   'UGPM — Union des Groupements Paysans de Mékhé',
    pays:   'Sénégal',
    photo:  'https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg',
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
export default function TemoignagesRedesign() {
  return (
    <section className="tem-section" aria-labelledby="tem-titre">

      {/* ════════ En-tête ════════ */}
      <div className="tem-header">

        <motion.div className="tem-eyebrow" {...inView(0.06)}>
          <span className="tem-eyebrow-line" aria-hidden="true" />
          <span className="tem-eyebrow-text">TÉMOIGNAGES</span>
          <span className="tem-eyebrow-line" aria-hidden="true" />
        </motion.div>

        <motion.h2 id="tem-titre" className="tem-h2" {...inViewScale(0.16)}>
          Leurs voix <em>portent le monde.</em>
        </motion.h2>
      </div>

      {/* ════════ Grille 3 cartes ════════ */}
      <div className="tem-grid">
        {TEMOIGNAGES.map(({ citation, nom, role, orga, pays, photo }, i) => (
          <motion.article
            key={nom}
            className="tem-card"
            aria-label={`Témoignage de ${nom}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.10 + i * 0.14, ease }}
          >
            {/* Guillemet décoratif */}
            <span className="tem-card-quote" aria-hidden="true">&ldquo;</span>

            {/* Citation */}
            <blockquote className="tem-card-cite">
              <p className="tem-card-text">{citation}</p>
            </blockquote>

            {/* Séparateur or */}
            <div className="tem-card-sep" aria-hidden="true" />

            {/* Attribution */}
            <div className="tem-card-attribution">
              <div className="tem-card-photo-wrap">
                <Image
                  src={photo}
                  alt={nom}
                  fill
                  className="tem-card-photo"
                  sizes="60px"
                />
              </div>
              <div className="tem-card-meta">
                <p className="tem-card-nom">{nom}</p>
                <p className="tem-card-role">{role}</p>
                <p className="tem-card-pays">
                  <span className="tem-card-pays-dot" aria-hidden="true" />
                  {pays}
                </p>
              </div>
            </div>

            {/* Organisation */}
            <p className="tem-card-orga">{orga}</p>

            {/* Accent bas */}
            <div className="tem-card-accent" aria-hidden="true" />
          </motion.article>
        ))}
      </div>

      {/* ════════ CTA global ════════ */}
      <motion.div
        className="tem-cta-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, delay: 0.20, ease }}
      >
        <Link href="/fr/mouvement/associations" className="tem-cta">
          Voir toutes nos associations
          <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
            <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .tem-section {
          background: ${NSS.vertFonce};
          position: relative;
          overflow: hidden;
          padding: 96px 0 80px;
        }

        /* Grain subtil */
        .tem-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* ── Header ── */
        .tem-header {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0 32px 64px;
        }

        /* ── Eyebrow centré ── */
        .tem-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .tem-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 56px;
          height: 1px;
          background: rgba(165,206,70,0.38);
        }
        .tem-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .tem-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 600;
          line-height: 1.0;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tem-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Grille ── */
        .tem-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(165,206,70,0.10);
          border-top: 1px solid rgba(165,206,70,0.10);
          border-bottom: 1px solid rgba(165,206,70,0.10);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── Carte ── */
        .tem-card {
          position: relative;
          background: ${NSS.vertFonce};
          padding: 52px 40px 44px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          transition: background 0.30s ease;
        }
        .tem-card:hover {
          background: rgba(0,173,76,0.08);
        }

        /* Guillemet décoratif */
        .tem-card-quote {
          font-family: var(--font-display), Georgia, serif;
          font-size: 72px;
          font-weight: 600;
          color: ${NSS.vertClair};
          line-height: 0.8;
          opacity: 0.22;
          display: block;
          margin-bottom: 16px;
          user-select: none;
        }

        /* Citation */
        .tem-card-cite { margin: 0 0 28px; }
        .tem-card-text {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(17px, 1.5vw, 21px);
          font-style: italic;
          font-weight: 400;
          line-height: 1.52;
          color: #ffffff;
          margin: 0;
        }

        /* Séparateur or */
        .tem-card-sep {
          width: 32px;
          height: 1px;
          background: ${NSS.or};
          margin-bottom: 24px;
          opacity: 0.70;
          flex-shrink: 0;
        }

        /* Attribution */
        .tem-card-attribution {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 10px;
        }
        .tem-card-photo-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid ${NSS.or};
          flex-shrink: 0;
        }
        .tem-card-photo {
          object-fit: cover;
          object-position: top center;
        }
        .tem-card-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .tem-card-nom {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #F5EDD6;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tem-card-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          margin: 0;
        }
        .tem-card-pays {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #F5EDD6;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.65;
        }
        .tem-card-pays-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${NSS.vertPrimaire};
          flex-shrink: 0;
        }

        /* Organisation */
        .tem-card-orga {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #F5EDD6;
          opacity: 0.42;
          letter-spacing: 0.03em;
          margin: 0;
          line-height: 1.55;
        }

        /* Accent bas */
        .tem-card-accent {
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
        .tem-card:hover .tem-card-accent {
          transform: scaleX(1);
        }

        /* ── CTA ── */
        .tem-cta-wrap {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 56px;
          padding: 0 32px;
        }
        .tem-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #F5EDD6;
          text-decoration: none;
          border-bottom: 1px solid rgba(165,206,70,0.40);
          padding-bottom: 4px;
          transition: color 0.22s ease, border-color 0.22s ease, gap 0.20s ease;
        }
        .tem-cta:hover {
          color: ${NSS.vertClair};
          border-color: ${NSS.vertClair};
          gap: 16px;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .tem-card { padding: 44px 32px 40px; }
          .tem-h2 { font-size: clamp(36px, 5vw, 56px); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .tem-section { padding: 72px 0 64px; }
          .tem-grid { grid-template-columns: 1fr; }
          .tem-h2 { font-size: clamp(34px, 9vw, 52px); }
          .tem-card { padding: 40px 24px 36px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .tem-section { padding: 60px 0 52px; }
          .tem-header { padding: 0 16px 44px; }
          .tem-h2 { font-size: clamp(30px, 10vw, 44px); }
          .tem-card { padding: 32px 20px 28px; }
          .tem-card-text { font-size: clamp(16px, 4.5vw, 19px); }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .tem-card { transition: none; }
          .tem-card-accent { transition: none; }
        }
      `}</style>
    </section>
  )
}
