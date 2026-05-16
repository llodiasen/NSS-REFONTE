'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const VIDEO_ID  = 'FothaoeQsQ8'
const VIDEO_TTL = "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété"
const THUMB     = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutDeclaration() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!modal) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modal])

  return (
    <section className="adc" aria-labelledby="adc-titre">
      <div className="adc-wrap">

        {/* ══ COLONNE GAUCHE 50% ══ */}
        <motion.div
          className="adc-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, ease }}
        >
          <div className="adc-eyebrow">
            <span className="adc-ey-line" aria-hidden />
            <span>NOTRE MISSION</span>
            <span className="adc-ey-line" aria-hidden />
          </div>

          <h2 id="adc-titre" className="adc-h2">
            <span className="adc-h2-l1">Les femmes rurales nourrissent l&apos;Afrique.</span>
            <em className="adc-h2-l2">Elles sont la solution.</em>
          </h2>

          <span className="adc-underline" aria-hidden />

          <p className="adc-body">
            En Afrique de l&apos;Ouest, l&apos;agriculture familiale nourrit{' '}
            <strong>70&nbsp;%</strong> des populations. Ce sont les femmes rurales
            qui en assurent l&apos;essentiel — semailles, récoltes, transformation,
            conservation. Pourtant, elles ont un accès limité à la terre, aux
            ressources et aux décisions qui gouvernent leur travail.
          </p>
          <p className="adc-body">
            NSS est né pour changer cela. Non pas pour demander de l&apos;aide,
            mais pour affirmer que les femmes rurales africaines sont,
            elles-mêmes, la solution à la crise alimentaire du continent.
          </p>

          <a href="/fr/mouvement" className="adc-btn">
            LE MOUVEMENT →
          </a>
        </motion.div>

        {/* ══ COLONNE DROITE 50% ══ */}
        <motion.div
          className="adc-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, delay: 0.12, ease }}
        >
          {/* Vidéo — thumbnail + play */}
          <div
            className="adc-vid"
            style={{ backgroundImage: `url(${THUMB})` }}
          >
            <div className="adc-vid-overlay" aria-hidden="true" />
            <button
              className="adc-play"
              onClick={() => setModal(true)}
              aria-label={`Regarder : ${VIDEO_TTL}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" aria-hidden style={{ paddingLeft: '3px' }}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
            <p className="adc-play-label">REGARDER LA VIDÉO</p>
          </div>

          <div className="adc-caption">
            <span className="adc-cap-tag">MARIAMA SONKO — PRÉSIDENTE NSS</span>
            <p className="adc-cap-titre">Au Sénégal : Le Combat des Agricultrices</p>
            <span className="adc-cap-meta">Afrique de l&apos;Ouest · 2024</span>
          </div>

        </motion.div>

      </div>

      {/* Modal vidéo */}
      {modal && (
        <div
          className="adc-modal-ov"
          onClick={() => setModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={VIDEO_TTL}
        >
          <button className="adc-modal-close" onClick={() => setModal(false)} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="adc-modal-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="adc-modal-frame"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title={VIDEO_TTL}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        /* ── Section ── */
        .adc {
          background: #ffffff;
          overflow: hidden;
        }

        /* ── Grid 50/50 ── */
        .adc-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 64px 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: stretch;
          box-sizing: border-box;
        }

        /* Pas de débordement hors colonne */
        .adc-left,
        .adc-right {
          min-width: 0;
        }

        /* ── Eyebrow ── */
        .adc-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin: 0 0 18px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .adc-ey-line {
          display: block; width: 28px; height: 1.5px;
          background: #00AD4C; flex-shrink: 0;
        }

        /* ── H2 ── */
        .adc-h2 {
          margin: 0 0 1rem;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2rem);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .adc-h2-l1 {
          color: rgb(42, 42, 42);
          font-style: normal;
        }
        .adc-h2-l2 {
          color: #00AD4C;
          font-style: italic;
        }

        /* ── Underline ── */
        .adc-underline {
          display: block;
          width: 60px;
          height: 3px;
          background: #00AD4C;
          border-radius: 2px;
          margin-bottom: 32px;
          flex-shrink: 0;
        }

        /* ── Corps ── */
        .adc-body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: #4A4A4A;
          margin: 0 0 16px;
          text-align: justify;
          text-align-last: left;
        }
        .adc-body:last-child { margin-bottom: 0; }
        .adc-body strong { font-weight: 600; color: #00AD4C; }

        /* ── Bouton ── */
        .adc-btn {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #045627;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 9px 18px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
        }
        .adc-btn:hover { background: #033d1a; transform: translateY(-2px); }
        .adc-btn:active { transform: translateY(0); }

        /* ── Colonne droite ── */
        .adc-right {
          display: flex;
          flex-direction: column;
        }

        /* ── Vidéo thumbnail ── */
        .adc-vid {
          flex: 1;
          min-height: 280px;
          background: #045627 center / cover no-repeat;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .adc-vid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 86, 39, 0.55);
          border-radius: 12px;
        }
        .adc-play {
          position: relative;
          z-index: 1;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #E8A838;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 0 8px rgba(232, 168, 56, 0.2);
          transition: transform 0.25s ease;
        }
        .adc-play:hover { transform: scale(1.08); }
        .adc-play-label {
          position: relative;
          z-index: 1;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245, 237, 214, 0.75);
          margin: 12px 0 0;
        }

        /* Caption */
        .adc-caption {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .adc-cap-tag {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .adc-cap-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 16px;
          font-weight: 300;
          color: #2A2A2A;
          margin: 0;
          line-height: 1.3;
        }
        .adc-cap-meta {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #9ca3af;
        }

        /* Modal */
        .adc-modal-ov {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(2, 22, 10, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(8px);
          animation: adc-fadein 0.18s ease;
        }
        @keyframes adc-fadein { from { opacity: 0 } to { opacity: 1 } }
        .adc-modal-close {
          position: fixed;
          top: 20px;
          right: 24px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .adc-modal-box {
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16/9;
          border-radius: 10px;
          overflow: hidden;
        }
        .adc-modal-frame {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── Tablet ── */
        @media (max-width: 1200px) {
          .adc-wrap { padding: 96px 40px; gap: 48px; }
        }

        /* ── Mobile <768px ── */
        @media (max-width: 768px) {
          .adc-wrap {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 32px;
          }
        }

        /* ── Mobile <480px ── */
        @media (max-width: 480px) {
          .adc-wrap { padding: 56px 20px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .adc-stat { transition: none; }
        }
      `}</style>
    </section>
  )
}

