'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const VIDEO_URL =
  'https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775741043/Mariama_Sonko_-_Chairwoman_of_the_Nous_sommes_la_SOLUTION_movement_S%C3%A9negal_--_SeedIsLife_ak3z9z.mp4'
const THUMB_URL =
  'https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg'

const ease = [0.22, 1, 0.36, 1] as const

const STATS = [
  { num: '2011', lbl: 'Fondation'           },
  { num: '175k', lbl: 'Membres actives'     },
  { num: '500+', lbl: 'Associations rurales' },
] as const

function IconPlay() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function HeroSectionRedesign() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="hsr" aria-labelledby="hsr-titre">

      {/* Fond blanc uniforme */}

      <div className="hsr-wrap">

        {/* ══ COLONNE GAUCHE ══ */}
        <motion.div
          className="hsr-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, ease }}
        >
          {/* Surtitle — ligne gauche uniquement */}
          <div className="hsr-eyebrow" aria-hidden="true">
            <span className="hsr-ey-line" />
            <span>QUI SOMMES-NOUS</span>
          </div>

          <h2 id="hsr-titre" className="hsr-h2">
            Le mouvement des femmes rurales,{' '}
            <em>pour la souveraineté alimentaire.</em>
          </h2>

          <blockquote className="hsr-quote">
            <div className="hsr-quote-bar" aria-hidden="true" />
            <p className="hsr-quote-text">
              Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.
            </p>
          </blockquote>

          <p className="hsr-body">
            NSS est né d&apos;une conviction simple&nbsp;: personne ne connaît mieux
            la terre que celles qui la cultivent. Depuis 2011, 175&nbsp;000 femmes
            rurales — organisées en 500 associations dans 14 pays — protègent les
            semences paysannes, transmettent les savoirs agroécologiques et portent
            leur souveraineté alimentaire devant les instances continentales.
          </p>

          {/* Stats 3 colonnes bordées */}
          <div className="hsr-stats" role="list" aria-label="Chiffres clés">
            {STATS.map(({ num, lbl }) => (
              <div key={lbl} className="hsr-stat" role="listitem">
                <span className="hsr-stat-num">{num}</span>
                <span className="hsr-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>

          {/* CTA souligné */}
          <Link href="/fr/mouvement" className="hsr-cta">
            DÉCOUVRIR LE MOUVEMENT →
            <span className="hsr-cta-line" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* ══ COLONNE DROITE ══ */}
        <motion.div
          className="hsr-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, delay: 0.12, ease }}
        >
          {/* Vidéo */}
          <div
            className="hsr-vid"
            style={{ backgroundImage: !playing ? `url(${THUMB_URL})` : undefined }}
          >
            {playing ? (
              /* eslint-disable-next-line jsx-a11y/media-has-caption */
              <video
                src={VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="hsr-vid-el"
              />
            ) : (
              <>
                <div className="hsr-vid-overlay" aria-hidden="true" />

                {/* Bouton play centré */}
                <div className="hsr-play-wrap">
                  <button
                    className="hsr-play"
                    onClick={() => setPlaying(true)}
                    aria-label="Regarder la vidéo de Mariama Sonko"
                  >
                    <IconPlay />
                  </button>
                  <p className="hsr-play-lbl">REGARDER LA VIDÉO</p>
                </div>

                {/* Footer gradient */}
                <div className="hsr-vid-footer">
                  <span className="hsr-vf-tag">MARIAMA SONKO — PRÉSIDENTE NSS</span>
                  <p className="hsr-vf-titre">Au Sénégal : Le Combat des Agricultrices</p>
                </div>
              </>
            )}
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ── SECTION ── */
        .hsr {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 5rem);
        }

        /* ── GRID ── */
        .hsr-wrap {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── EYEBROW (ligne gauche uniquement) ── */
        .hsr-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #00AD4C;
        }
        .hsr-ey-line {
          display: block; width: 28px; height: 1.5px;
          background: #00AD4C; flex-shrink: 0;
        }

        /* ── H2 ── */
        .hsr-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.54rem, 2.99vw, 2.22rem);
          font-weight: 500; letter-spacing: -0.01em; line-height: 1.1;
          color: #2A2A2A; margin: 0 0 20px;
        }
        .hsr-h2 em { color: #00AD4C; font-style: italic; }

        /* ── BLOCKQUOTE ── */
        .hsr-quote {
          display: flex; align-items: stretch; gap: 0;
          margin: 0 0 24px; padding: 0;
        }
        .hsr-quote-bar {
          width: 3px; background: #00AD4C;
          border-radius: 2px; margin-right: 16px; flex-shrink: 0;
        }
        .hsr-quote-text {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 16px; font-style: italic;
          color: #2A2A2A; line-height: 1.7; margin: 0;
        }

        /* ── PARAGRAPHE ── */
        .hsr-body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px; font-weight: 300;
          color: #4A4A4A; line-height: 1.8;
          text-align: justify; text-align-last: left;
          margin: 0 0 32px;
        }

        /* ── STATS ── */
        .hsr-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 0.5px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 32px;
        }
        .hsr-stat {
          padding: 16px 14px;
          border-right: 0.5px solid #e5e7eb;
          text-align: center;
          display: flex; flex-direction: column; gap: 4px;
        }
        .hsr-stat:last-child { border-right: none; }
        .hsr-stat-num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 28px; font-weight: 600;
          color: #00AD4C; line-height: 1;
        }
        .hsr-stat-lbl {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 400;
          color: #6b7280; letter-spacing: 0.06em;
        }

        /* ── CTA SOULIGNÉ ── */
        .hsr-cta {
          display: inline-flex;
          flex-direction: column;
          gap: 3px;
          background: transparent;
          border: none;
          color: #00AD4C;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; text-decoration: none; padding: 0;
          transition: opacity 0.2s;
        }
        .hsr-cta:hover { opacity: 0.75; }
        .hsr-cta-line {
          display: block; width: 100%;
          height: 1.5px; background: #00AD4C;
        }

        /* ── COLONNE DROITE ── */
        .hsr-right {
          position: relative;
          padding-top: 28px;
        }

        /* ── VIDÉO ── */
        .hsr-vid {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3/2;
          position: relative;
          background: #1a2e1a center / cover no-repeat;
        }
        .hsr-vid-overlay {
          position: absolute; inset: 0;
          background: rgba(4,86,39,0.42);
          z-index: 0;
        }
        .hsr-vid-el {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        /* ── PLAY WRAP ── */
        .hsr-play-wrap {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          z-index: 1;
        }
        .hsr-play {
          width: 56px; height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #ffffff;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .hsr-play:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.06);
        }
        .hsr-play-lbl {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.12em;
          margin: 0; white-space: nowrap;
        }

        /* ── VIDEO FOOTER ── */
        .hsr-vid-footer {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 20px 16px;
          background: linear-gradient(to top, rgba(4,86,39,0.95) 0%, transparent 100%);
          z-index: 1;
        }
        .hsr-vf-tag {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; text-transform: uppercase;
          letter-spacing: 0.1em; color: #A5CE46;
          margin-bottom: 4px;
        }
        .hsr-vf-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 16px; font-weight: 600;
          color: #ffffff; margin: 0; line-height: 1.3;
        }

        /* ── MOBILE ≤ 640px ── */
        @media (max-width: 640px) {
          .hsr-bg-right { display: none; }
          .hsr-wrap { grid-template-columns: 1fr; gap: 48px; }
          .hsr-right { padding-top: 20px; }
          .hsr-vid { aspect-ratio: 4/3; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hsr-play { transition: none; }
          .hsr-cta  { transition: none; }
        }
      `}</style>

    </section>
  )
}
