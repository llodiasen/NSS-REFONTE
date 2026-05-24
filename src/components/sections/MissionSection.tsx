'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const YOUTUBE_ID = '_2AqLsFeSV8'
const THUMB      = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`
const VIDEO_TTL  = 'NSS — Mouvement Nous Sommes la Solution'

const ease = [0.22, 1, 0.36, 1] as const

function IconBulb() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7.7M18.4 5.6l-.7.7"/>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3"/>
      <path d="M9.7 17h4.6"/>
    </svg>
  )
}

function IconPlay() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true"
      style={{ marginLeft: '3px' }}>
      <path d="M8 5v14l11-7z"/>
    </svg>
  )
}

export default function MissionSection() {
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
    <section className="msn" aria-labelledby="msn-titre">
      <div className="msn-inner">

        {/* ══ COLONNE GAUCHE ══ */}
        <motion.div
          className="msn-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, ease }}
        >
          <div className="msn-eyebrow" aria-hidden="true">
            <span className="msn-ey-line" />
            <span>NOTRE MISSION</span>
          </div>

          <h2 id="msn-titre" className="msn-h2">
            Les femmes rurales nourrissent l&apos;Afrique.
            <em>Elles sont la solution.</em>
          </h2>

          <p className="msn-body">
            En Afrique de l&apos;Ouest, l&apos;agriculture familiale nourrit
            70&nbsp;% des populations. Ce sont les femmes rurales qui en
            assurent l&apos;essentiel — semailles, récoltes, transformation,
            conservation.
          </p>

          <p className="msn-body msn-body--last">
            Pourtant, elles ont un accès limité à la terre, aux ressources et
            aux décisions qui gouvernent leur travail.
          </p>

          {/* Highlight box */}
          <div className="msn-hl">
            <span className="msn-hl-icon" aria-hidden="true">
              <IconBulb />
            </span>
            <p className="msn-hl-text">
              NSS est né pour affirmer que les femmes rurales africaines sont,{' '}
              <span className="msn-hl-accent">elles-mêmes, la solution</span>{' '}
              à la crise alimentaire du continent.
            </p>
          </div>

          <a href="/fr/mouvement" className="msn-btn">
            DÉCOUVRIR NOTRE HISTOIRE →
          </a>
        </motion.div>

        {/* ══ COLONNE DROITE ══ */}
        <motion.div
          className="msn-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, delay: 0.12, ease }}
        >
          {/* Floating badge 70% */}
          <div className="msn-badge" aria-hidden="true">
            <span className="msn-badge-num">70%</span>
            <span className="msn-badge-lbl">de l&apos;alimentation assurée par elles</span>
          </div>

          {/* Vidéo */}
          <div
            className="msn-vid"
            style={{ backgroundImage: `url(${THUMB})` }}
          >
            <div className="msn-vid-overlay" aria-hidden="true" />

            {/* Bouton play */}
            <div className="msn-play-wrap">
              <button
                className="msn-play"
                onClick={() => setModal(true)}
                aria-label={`Regarder : ${VIDEO_TTL}`}
              >
                <IconPlay />
              </button>
              <p className="msn-play-lbl">REGARDER LA VIDÉO</p>
            </div>

            {/* Footer vidéo */}
            <div className="msn-vid-footer">
              <span className="msn-vf-tag">MARIAMA SONKO — PRÉSIDENTE NSS</span>
              <p className="msn-vf-titre">Au Sénégal : Le Combat des Agricultrices</p>
              <span className="msn-vf-sub">Afrique de l&apos;Ouest · 2024</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal YouTube */}
      {modal && (
        <div
          className="msn-modal-ov"
          onClick={() => setModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={VIDEO_TTL}
        >
          <button
            className="msn-modal-close"
            onClick={() => setModal(false)}
            aria-label="Fermer la vidéo"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="msn-modal-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="msn-modal-frame"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title={VIDEO_TTL}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        /* ── SECTION ── */
        .msn {
          background: #ffffff;
          padding: 80px 72px;
          overflow: hidden;
        }

        /* ── INNER ── */
        .msn-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        /* ── EYEBROW ── */
        .msn-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .msn-ey-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }

        /* ── H2 ── */
        .msn-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1.62rem, 3.15vw, 1.98rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.15;
          color: #2A2A2A;
          margin: 0 0 20px;
        }
        .msn-h2 em {
          display: block;
          color: #00AD4C;
          font-style: italic;
        }

        /* ── PARAGRAPHES ── */
        .msn-body {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          text-align: justify;
          text-align-last: left;
          margin: 0 0 16px;
        }
        .msn-body--last { margin-bottom: 0; }

        /* ── HIGHLIGHT BOX ── */
        .msn-hl {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f9f8f5;
          border-radius: 10px;
          padding: 14px 18px;
          margin: 24px 0 28px;
        }
        .msn-hl-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #eaf3de;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #00AD4C;
        }
        .msn-hl-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.6;
          margin: 0;
        }
        .msn-hl-accent {
          font-weight: 500;
          color: #00AD4C;
        }

        /* ── BOUTON ── */
        .msn-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #00AD4C;
          color: #ffffff;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.22s ease;
        }
        .msn-btn:hover { background: #009940; }

        /* ── COLONNE DROITE ── */
        .msn-right {
          position: relative;
        }

        /* ── FLOATING BADGE ── */
        .msn-badge {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 4;
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px 18px;
        }
        .msn-badge-num {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #00AD4C;
          display: block;
          line-height: 1;
        }
        .msn-badge-lbl {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 3px;
          display: block;
        }

        /* ── VIDÉO ── */
        .msn-vid {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/5;
          background: #1a2e1a center / cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .msn-vid-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4,86,39,0.9) 0%, transparent 50%);
        }

        /* ── PLAY WRAP ── */
        .msn-play-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 60px;
        }
        .msn-play {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .msn-play:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.06);
        }
        .msn-play-lbl {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin: 0;
          white-space: nowrap;
        }

        /* ── VIDEO FOOTER ── */
        .msn-vid-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 24px 20px;
          z-index: 1;
        }
        .msn-vf-tag {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A5CE46;
          display: block;
          margin-bottom: 4px;
        }
        .msn-vf-titre {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
          margin: 0 0 3px;
        }
        .msn-vf-sub {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          display: block;
        }

        /* ── MODAL ── */
        .msn-modal-ov {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(2,22,10,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(8px);
          animation: msn-fadein 0.18s ease;
        }
        @keyframes msn-fadein { from { opacity: 0 } to { opacity: 1 } }
        .msn-modal-close {
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
        .msn-modal-box {
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16/9;
          border-radius: 10px;
          overflow: hidden;
        }
        .msn-modal-frame {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── MOBILE 375px ── */
        @media (max-width: 768px) {
          .msn { padding: 56px 24px; }
          .msn-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .msn-badge { top: -12px; right: 12px; }
          .msn-vid   { aspect-ratio: 4/3; }
        }

        @media (prefers-reduced-motion: reduce) {
          .msn-play { transition: none; }
          .msn-btn  { transition: none; }
        }
      `}</style>
    </section>
  )
}
