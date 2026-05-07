'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Cloudinary assets ───────────────────────────────────────────────────────
const VIDEO_URL =
  'https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775741043/Mariama_Sonko_-_Chairwoman_of_the_Nous_sommes_la_SOLUTION_movement_S%C3%A9negal_--_SeedIsLife_ak3z9z.mp4'
const THUMB_URL =
  'https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg'

// ─── Stats ───────────────────────────────────────────────────────────────────
const STATS: { value: string; label: string }[] = [
  { value: '2011',  label: 'Fondation' },
  { value: '12',    label: 'Organisations fondatrices' },
  { value: '500+',  label: 'Associations de Femmes Rurales' },
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
  initial:     { opacity: 0, y: 32, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.80, delay, ease },
})

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSectionRedesign() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="qs-section" aria-labelledby="qs-titre">
      <div className="qs-inner">

        {/* ════════ COL GAUCHE ════════ */}
        <div className="qs-left">

          {/* Eyebrow */}
          <motion.div className="qs-eyebrow" {...inView(0.08)}>
            <span className="qs-eyebrow-line" aria-hidden="true" />
            <span className="qs-eyebrow-text">QUI SOMMES-NOUS</span>
          </motion.div>

          {/* H2 — ≤5 mots */}
          <motion.h2 id="qs-titre" className="qs-h2" {...inViewScale(0.18)}>
            La solution<br />vient{' '}
            <em>d&apos;elles.</em>
          </motion.h2>

          {/* Description */}
          <motion.p className="qs-body" lang="fr" {...inView(0.28)}>
            Créé au sein d&apos;une campagne mondiale pour la souveraineté alimentaire,
            NSS s&apos;est imposé comme l&apos;alternative paysanne durable, économiquement
            rentable et écologiquement viable. Aujourd&apos;hui, 175&nbsp;000 membres
            et sympathisant·es unis dans 7 pays défendent une agriculture
            familiale souveraine — de la semence à la table.
          </motion.p>

          {/* Citation */}
          <motion.blockquote className="qs-quote" {...inView(0.36)}>
            <p className="qs-quote-text">
              &ldquo;Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.&rdquo;
            </p>
          </motion.blockquote>

          {/* Stats */}
          <motion.div className="qs-stats" role="list" {...inView(0.44)}>
            {STATS.map(({ value, label }) => (
              <div key={label} className="qs-stat" role="listitem">
                <span className="qs-stat-value">{value}</span>
                <span className="qs-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div {...inView(0.52)}>
            <Link href="/fr/mouvement" className="qs-cta">
              Découvrir le mouvement
              <svg
                width="16" height="9" viewBox="0 0 16 9"
                fill="none" aria-hidden="true"
                className="qs-cta-arrow"
              >
                <path
                  d="M1 4.5h13M10 1l4 3.5-4 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ════════ COL DROITE — vidéo Mariama Sonko ════════ */}
        <motion.div
          className="qs-right"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.20, ease }}
        >
          <div className="qs-video-outer">
            <div
              className="qs-video"
              onClick={() => !playing && setPlaying(true)}
              style={{ cursor: playing ? 'default' : 'pointer' }}
            >
              {playing ? (
                <video
                  src={VIDEO_URL}
                  controls
                  autoPlay
                  playsInline
                  className="qs-video-el"
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={THUMB_URL}
                    alt="Mariama Sonko — Présidente Nous Sommes la Solution"
                    className="qs-video-el"
                  />
                  <div className="qs-video-veil" />

                  {/* Bouton play */}
                  <button
                    className="qs-play"
                    aria-label="Regarder la vidéo de Mariama Sonko"
                    onClick={(e) => { e.stopPropagation(); setPlaying(true) }}
                  >
                    <span className="qs-play-ring" aria-hidden="true" />
                    <svg
                      width="22" height="22" viewBox="0 0 24 24"
                      fill="none" aria-hidden="true"
                      className="qs-play-icon"
                    >
                      <path d="M6 4.75L19.25 12 6 19.25V4.75Z" fill="currentColor" />
                    </svg>
                  </button>

                  {/* Badge */}
                  <div className="qs-badge">
                    <span className="qs-badge-dot" aria-hidden="true" />
                    Regarder la vidéo
                  </div>
                </>
              )}
            </div>

            {/* Légende */}
            <p className="qs-legend">
              Mariama Sonko — Présidente, Nous Sommes la Solution
            </p>
          </div>
        </motion.div>

      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .qs-section {
          background: #ffffff;
          border-top: 1px solid rgba(165,206,70,0.20);
          overflow: hidden;
        }
        .qs-inner {
          max-width: 100%;
          padding: 72px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          box-sizing: border-box;
        }

        /* ── Eyebrow ── */
        .qs-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .qs-eyebrow-line {
          display: block;
          width: 44px;
          height: 1px;
          background: ${NSS.vertClair};
          flex-shrink: 0;
        }
        .qs-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── H2 ── */
        .qs-h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(44px, 5vw, 72px);
          font-weight: 600;
          line-height: 0.92;
          color: #0A0A0A;
          margin: 0 0 32px;
          letter-spacing: -0.01em;
        }
        .qs-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }

        /* ── Body ── */
        .qs-body {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.82;
          color: #2A2A2A;
          text-align: justify;
          hyphens: auto;
          margin: 0 0 24px;
        }

        /* ── Citation ── */
        .qs-quote {
          border-left: 2px solid ${NSS.or};
          padding: 2px 0 2px 18px;
          margin: 0 0 32px;
        }
        .qs-quote-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 18px;
          font-style: italic;
          line-height: 1.60;
          color: #111;
          margin: 0;
        }

        /* ── Stats ── */
        .qs-stats {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin: 0 0 32px;
          border-top: 1px solid #E8E8E8;
          border-bottom: 1px solid #E8E8E8;
          padding: 16px 0;
        }
        .qs-stat {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
          padding: 0 20px 0 0;
          border-right: 1px solid #E8E8E8;
          margin-right: 20px;
        }
        .qs-stat:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }
        .qs-stat-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 34px;
          font-weight: 600;
          color: ${NSS.vertFonce};
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .qs-stat-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #555;
          line-height: 1.4;
        }

        /* ── CTA ── */
        .qs-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${NSS.vertFonce};
          text-decoration: none;
          border-bottom: 1.5px solid ${NSS.vertPrimaire};
          padding-bottom: 3px;
          transition: color 0.2s, gap 0.2s;
        }
        .qs-cta-arrow {
          transition: transform 0.2s ease;
        }
        .qs-cta:hover { color: ${NSS.vertPrimaire}; gap: 16px; }
        .qs-cta:hover .qs-cta-arrow { transform: translateX(4px); }

        /* ── Droite — vidéo ── */
        .qs-right {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .qs-video-outer {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
        }
        .qs-video {
          position: relative;
          width: 100%;
          min-height: 420px;
          flex: 1;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          background: #061409;
          box-shadow:
            0 0 0 1px rgba(232,168,56,0.18),
            0 2px 0 0 ${NSS.or},
            0 24px 64px rgba(4,86,39,0.18),
            0 4px 16px rgba(0,0,0,0.12);
        }
        .qs-video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .qs-video-veil {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top,   rgba(4,86,39,0.72) 0%, transparent 45%),
            linear-gradient(to bottom, rgba(0,0,0,0.18)  0%, transparent 25%);
        }

        /* ── Bouton play ── */
        .qs-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: ${NSS.or};
          color: ${NSS.vertFonce};
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow:
            0 0 0 8px rgba(232,168,56,0.15),
            0 6px 28px rgba(232,168,56,0.60);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s;
        }
        .qs-play:hover {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow:
            0 0 0 12px rgba(232,168,56,0.12),
            0 10px 40px rgba(232,168,56,0.75);
        }
        .qs-play-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px solid rgba(232,168,56,0.40);
          animation: qs-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes qs-pulse {
          0%   { transform: scale(1);    opacity: 1; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        .qs-play-icon { position: relative; z-index: 1; margin-left: 3px; }

        /* ── Badge ── */
        .qs-badge {
          position: absolute;
          bottom: 18px;
          left: 20px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,237,214,0.85);
        }
        .qs-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${NSS.vertPrimaire};
          flex-shrink: 0;
          animation: qs-blink 1.8s ease-in-out infinite;
        }
        @keyframes qs-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }

        /* ── Légende ── */
        .qs-legend {
          background: ${NSS.vertFonce};
          color: rgba(245,237,214,0.90);
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          text-align: center;
          padding: 13px 20px;
          margin: 0;
          border-radius: 0 0 12px 12px;
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .qs-inner { padding: 60px 48px; gap: 52px; }
        }
        @media (max-width: 1024px) {
          .qs-inner { padding: 52px 40px; gap: 40px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .qs-inner {
            grid-template-columns: 1fr;
            padding: 56px 24px;
            gap: 40px;
          }
          .qs-h2 { font-size: clamp(40px, 9vw, 60px); }
          .qs-video { min-height: 300px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .qs-inner { padding: 44px 16px; gap: 32px; }
          .qs-h2 { font-size: clamp(36px, 10vw, 50px); }
          .qs-body { font-size: 14px; }
          .qs-video { min-height: 250px; }
          .qs-stat-value { font-size: 28px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .qs-play-ring, .qs-badge-dot { animation: none; }
        }
      `}</style>
    </section>
  )
}
