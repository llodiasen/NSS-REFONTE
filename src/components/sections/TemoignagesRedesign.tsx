'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  citation:  string
  nom:       string
  role:      string
  orga:      string
  pays:      string
  photo:     string
}

// ─── Données (citations officielles — source : NSS-Associations.md) ───────────
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
  {
    citation: 'Chaque graine que nous préservons est un acte de résistance. Un futur que nous cultivons pour nos enfants.',
    nom:    'Catherine Soulama',
    role:   'Déléguée CA Burkina Faso',
    orga:   'FENOP — Fédération Nationale des Organisations Paysannes',
    pays:   'Burkina Faso',
    photo:  'https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg',
  },
  {
    citation: 'Le mouvement NSS nous a donné la force de nous organiser, de parler et d\'agir pour notre terre et nos droits.',
    nom:    'Sia Anne Marie Kamano',
    role:   'Déléguée CA Guinée',
    orga:   'AGUISSA — Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires',
    pays:   'Guinée',
    photo:  'https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg',
  },
]

const TOTAL = TEMOIGNAGES.length

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease     = [0.22, 1, 0.36, 1] as const
const DURATION = 0.50

function slideVariants(dir: number) {
  return {
    enter: {
      x:       dir > 0 ? 60 : -60,
      opacity: 0,
    },
    center: {
      x:       0,
      opacity: 1,
      transition: { duration: DURATION, ease },
    },
    exit: {
      x:       dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: DURATION * 0.7, ease },
    },
  }
}

// ─── Progress bar animée ──────────────────────────────────────────────────────
function ProgressBar({ active, paused }: { active: boolean; paused: boolean }) {
  return (
    <div className="tem-bar-track" aria-hidden="true">
      {active && !paused && (
        <motion.div
          className="tem-bar-fill"
          key="bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 7, ease: 'linear' }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TemoignagesRedesign() {
  const [index,  setIndex]  = useState(0)
  const [dir,    setDir]    = useState(1)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number, direction: number) => {
    setDir(direction)
    setIndex(((next % TOTAL) + TOTAL) % TOTAL)
  }, [])

  const prev = () => go(index - 1, -1)
  const next = useCallback(() => go(index + 1, 1), [go, index])

  // Autoplay
  useEffect(() => {
    if (paused) { if (intervalRef.current) clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(next, 7000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, next])

  const t = TEMOIGNAGES[index]

  return (
    <section
      className="tem-section"
      aria-label="Témoignages des leaders NSS"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ════════ En-tête ════════ */}
      <div className="tem-header">
        <motion.div
          className="tem-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.70, ease }}
        >
          <span className="tem-eyebrow-line" aria-hidden="true" />
          <span className="tem-eyebrow-text">TÉMOIGNAGES</span>
          <span className="tem-eyebrow-line" aria-hidden="true" />
        </motion.div>

        <motion.h2
          className="tem-h2"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.80, delay: 0.12, ease }}
        >
          Leurs voix<br /><em>portent le monde.</em>
        </motion.h2>
      </div>

      {/* ════════ Carousel ════════ */}
      <div className="tem-stage">

        {/* Guillemet décoratif */}
        <span className="tem-guillemet" aria-hidden="true">&ldquo;</span>

        {/* Slide animée */}
        <div className="tem-slide-wrap" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              className="tem-slide"
              custom={dir}
              variants={slideVariants(dir)}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Citation */}
              <blockquote className="tem-cite">
                <p className="tem-cite-text">{t.citation}</p>
              </blockquote>

              {/* Attribution */}
              <div className="tem-attribution">
                <div className="tem-photo-wrap">
                  <Image
                    src={t.photo}
                    alt={t.nom}
                    fill
                    className="tem-photo"
                    sizes="80px"
                  />
                </div>
                <div className="tem-meta">
                  <p className="tem-nom">{t.nom}</p>
                  <p className="tem-role">{t.role}</p>
                  <p className="tem-pays">
                    <span className="tem-pays-dot" aria-hidden="true" />
                    {t.pays}
                  </p>
                </div>
              </div>

              {/* Organisation */}
              <p className="tem-orga">{t.orga}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flèches */}
        <button
          className="tem-arrow tem-arrow--prev"
          onClick={prev}
          aria-label="Témoignage précédent"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="tem-arrow tem-arrow--next"
          onClick={next}
          aria-label="Témoignage suivant"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ════════ Navigation ════════ */}
      <div className="tem-nav" role="tablist" aria-label="Naviguer entre les témoignages">
        {TEMOIGNAGES.map((item, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Témoignage de ${item.nom}`}
            className={`tem-dot${i === index ? ' tem-dot--on' : ''}`}
            onClick={() => go(i, i > index ? 1 : -1)}
          >
            <ProgressBar active={i === index} paused={paused} />
          </button>
        ))}
      </div>

      {/* CTA global */}
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
          padding: 0 32px 56px;
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
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 600;
          line-height: 0.92;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tem-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Stage ── */
        .tem-stage {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Guillemet ── */
        .tem-guillemet {
          display: block;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 140px;
          font-weight: 600;
          color: ${NSS.vertClair};
          line-height: 0.7;
          opacity: 0.22;
          text-align: center;
          margin-bottom: -20px;
          pointer-events: none;
          user-select: none;
        }

        /* ── Slide ── */
        .tem-slide-wrap {
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tem-slide {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-align: center;
        }

        /* ── Citation ── */
        .tem-cite { margin: 0 0 40px; }
        .tem-cite-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(22px, 3vw, 34px);
          font-style: italic;
          font-weight: 400;
          line-height: 1.42;
          color: #ffffff;
          letter-spacing: -0.005em;
        }

        /* ── Attribution ── */
        .tem-attribution {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 12px;
          justify-content: center;
        }
        .tem-photo-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid ${NSS.or};
          flex-shrink: 0;
        }
        .tem-photo {
          object-fit: cover;
          object-position: top center;
        }
        .tem-meta {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .tem-nom {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tem-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          margin: 0;
        }
        .tem-pays {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(245,237,214,0.55);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tem-pays-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${NSS.vertPrimaire};
          flex-shrink: 0;
        }

        /* ── Organisation ── */
        .tem-orga {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: rgba(245,237,214,0.38);
          letter-spacing: 0.04em;
          margin: 0;
          max-width: 480px;
          text-align: center;
        }

        /* ── Flèches ── */
        .tem-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(165,206,70,0.28);
          background: transparent;
          color: rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.22s ease, color 0.22s ease, background 0.22s ease;
          z-index: 2;
        }
        .tem-arrow:hover {
          border-color: ${NSS.vertClair};
          color: ${NSS.vertClair};
          background: rgba(165,206,70,0.08);
        }
        .tem-arrow--prev { left: 0; }
        .tem-arrow--next { right: 0; }

        /* ── Navigation dots ── */
        .tem-nav {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
          padding: 0 32px;
        }
        .tem-dot {
          width: 48px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.12);
          border: none;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.22s ease, width 0.22s ease;
        }
        .tem-dot--on {
          background: rgba(165,206,70,0.22);
          width: 64px;
        }

        /* ── Progress bar ── */
        .tem-bar-track {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 2px;
        }
        .tem-bar-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${NSS.vertClair};
          border-radius: 2px;
          transform-origin: left;
        }

        /* ── CTA ── */
        .tem-cta-wrap {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 48px;
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
          color: rgba(255,255,255,0.75);
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
          .tem-stage { padding: 0 64px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .tem-section { padding: 72px 0 64px; }
          .tem-stage { padding: 0 48px; }
          .tem-guillemet { font-size: 100px; }
          .tem-cite-text { font-size: clamp(18px, 5vw, 26px); }
          .tem-slide-wrap { min-height: 280px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .tem-section { padding: 60px 0 52px; }
          .tem-header { padding: 0 16px 44px; }
          .tem-stage { padding: 0 32px; }
          .tem-guillemet { font-size: 80px; }
          .tem-cite-text { font-size: clamp(16px, 5.5vw, 22px); }
          .tem-arrow { width: 40px; height: 40px; }
          .tem-arrow--prev { left: -6px; }
          .tem-arrow--next { right: -6px; }
          .tem-attribution { flex-direction: column; align-items: center; }
          .tem-meta { text-align: center; align-items: center; }
          .tem-slide-wrap { min-height: 340px; }
          .tem-dot { width: 32px; }
          .tem-dot--on { width: 48px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .tem-bar-fill { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
