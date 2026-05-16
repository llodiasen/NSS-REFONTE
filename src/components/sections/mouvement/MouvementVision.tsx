'use client'

import { useState, useEffect } from 'react'

const YOUTUBE_ID = '_2AqLsFeSV8'
const THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`

const OBJECTIFS = [
  {
    num:   '01',
    titre: 'Promouvoir les savoirs agricoles transmis pendant des générations.',
    desc:  'Promouvoir les savoirs agricoles transmis pendant des générations et qui ont longtemps préservé la souveraineté alimentaire sur le continent africain.',
  },
  {
    num:   '02',
    titre: "Promouvoir l'agriculture familiale via l'agro-écologie.",
    desc:  "Encourager les pratiques d'agriculture familiale et les méthodes agroécologiques comme alternative durable aux systèmes industriels.",
  },
  {
    num:   '03',
    titre: 'Influencer les décideurs pour une meilleure gouvernance.',
    desc:  'Peser sur les instances locales, nationales et continentales pour une politique agricole juste et favorable aux femmes rurales.',
  },
]

export default function MouvementVision() {
  const [open, setOpen] = useState<string>('01')
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
    <section className="mv" aria-labelledby="mv-titre">

      <div className="mv-container">

        {/* ══ GRID ══ */}
        <div className="mv-body">

          {/* ── Colonne gauche : header + accordéon ── */}
          <div className="mv-left">

            <header className="mv-header">
              <div className="mv-eyebrow">
                <span className="mv-ey-line" aria-hidden />
                <span>NOUS SOMMES LA SOLUTION</span>
                <span className="mv-ey-line" aria-hidden />
              </div>
              <h2 id="mv-titre" className="mv-h2">
                Notre vision, <em>nos engagements</em>
              </h2>
              <p className="mv-intro">
                Nous Sommes la Solution œuvre pour une Afrique où les femmes rurales,
                impliquées dans la prise de décision, cultivent, transforment et consomment
                les produits de l&apos;agriculture familiale tout en préservant
                l&apos;environnement pour un développement durable.
              </p>
            </header>

            <p className="mv-obj-label">OBJECTIFS — CE QUE NOUS VISONS</p>

            {OBJECTIFS.map(({ num, titre, desc }) => {
              const isOpen = open === num
              return (
                <div key={num} className="mv-item">
                  <button
                    className="mv-item-hd"
                    onClick={() => setOpen(isOpen ? '' : num)}
                    aria-expanded={isOpen}
                  >
                    <span className="mv-num">{num}</span>
                    <span className="mv-titre">{titre}</span>
                    <svg
                      className={`mv-chevron${isOpen ? ' is-open' : ''}`}
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`mv-desc-wrap${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
                    <p className="mv-desc">{desc}</p>
                  </div>
                </div>
              )
            })}

            <blockquote className="mv-quote">
              <p>
                NSS vise à s&apos;élargir vers d&apos;autres régions du continent,
                en relation avec d&apos;autres initiatives similaires, afin de se
                donner un cachet continental.
              </p>
            </blockquote>

          </div>

          {/* ── Colonne droite : vidéo ── */}
          <div className="mv-right">

            <div
              className="mv-vid"
              style={{ backgroundImage: `url(${THUMB})` }}
            >
              <div className="mv-vid-overlay" aria-hidden="true" />
              <button
                className="mv-play"
                onClick={() => setModal(true)}
                aria-label="Regarder le documentaire NSS"
              >
                <svg
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="#ffffff" aria-hidden
                  style={{ paddingLeft: '3px' }}
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
              <p className="mv-play-label">REGARDER LE FILM</p>
            </div>

            <div className="mv-caption">
              <span className="mv-cap-tag">NSS — DOCUMENTAIRE</span>
              <p className="mv-cap-titre">Les femmes rurales, actrices du changement</p>
              <span className="mv-cap-meta">Afrique de l&apos;Ouest · 2024</span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Modal vidéo ── */}
      {modal && (
        <div
          className="mv-modal-ov"
          onClick={() => setModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Documentaire NSS"
        >
          <button
            className="mv-modal-close"
            onClick={() => setModal(false)}
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="mv-modal-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="mv-modal-frame"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="NSS — Mouvement Nous Sommes la Solution"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        /* ── Section ── */
        .mv {
          background: #ffffff;
          width: 100%;
          padding: clamp(3rem, 6vw, 4.5rem) 24px;
          box-sizing: border-box;
        }
        .mv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* ══ Header (dans colonne gauche) ══ */
        .mv-header {
          text-align: left;
          margin-bottom: 1.5rem;
        }
        .mv-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
          margin-bottom: 0.75rem;
        }
        .mv-ey-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .mv-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 45px;
          font-weight: 500;
          line-height: 1.1;
          color: #2A2A2A;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
        }
        .mv-h2 em {
          font-style: italic;
          color: #00AD4C;
          font-weight: 500;
        }
        .mv-intro {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: #4A4A4A;
          margin: 0;
          text-align: justify;
          text-align-last: left;
        }

        /* ══ Grid ══ */
        .mv-body {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 40px;
          align-items: stretch;
        }

        /* ── Colonne gauche ── */
        .mv-left {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .mv-obj-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding-bottom: 10px;
        }

        /* Items accordéon */
        .mv-item {
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .mv-item-hd {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 10px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: 0.25s ease;
        }
        .mv-num {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #00AD4C;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .mv-titre {
          flex: 1;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: #2A2A2A;
          line-height: 1.3;
          text-align: left;
        }
        .mv-chevron {
          color: #888;
          flex-shrink: 0;
          margin-left: 8px;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .mv-chevron.is-open {
          transform: rotate(180deg);
          color: #00AD4C;
        }

        /* Contenu expandable */
        .mv-desc-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        text-align:justify;
        }
        .mv-desc-wrap.is-open {
          max-height: 200px;
        }
        .mv-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.72;
          color: #2A2A2A;
          margin: 0;
          padding: 12px 0 4px 28px;
        }

        /* Citation */
        .mv-quote {
          border-left: 3px solid #E8A838;
          padding-left: 20px;
          margin: 1.25rem 0 0;
        }
        .mv-quote p {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px;
          font-style: italic;
          font-weight: 400;
          line-height: 1.7;
          color: #2A2A2A;
          opacity: 0.75;
          margin: 0;
        }

        /* ── Colonne droite ── */
        .mv-right {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .mv-vid {
          flex: 1;
          background: #045627 center / cover no-repeat;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .mv-vid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 86, 39, 0.62);
          border-radius: 12px;
        }
        .mv-play {
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
        .mv-play:hover {
          transform: scale(1.08);
        }
        .mv-play-label {
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

        /* Modal */
        .mv-modal-ov {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(2, 22, 10, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(8px);
          animation: mv-fadein 0.18s ease;
        }
        @keyframes mv-fadein { from { opacity: 0 } to { opacity: 1 } }
        .mv-modal-close {
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
          transition: background 0.2s;
        }
        .mv-modal-close:hover { background: rgba(255,255,255,0.16); }
        .mv-modal-box {
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
        }
        .mv-modal-frame {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Caption vidéo */
        .mv-caption {
          padding-top: 20px;
        }
        .mv-cap-tag {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00AD4C;
          margin-bottom: 8px;
        }
        .mv-cap-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0;
        }
        .mv-cap-meta {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #888;
          margin-top: 6px;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .mv {
            padding: 80px 32px;
          }
          .mv-body {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mv-right {
            order: -1;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .mv {
            padding: 60px 20px;
          }
          .mv-h2 {
            font-size: 36px;
          }
          .mv-intro {
            font-size: 15px;
          }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .mv-chevron,
          .mv-play,
          .mv-desc-wrap { transition: none; }
        }
      `}</style>
    </section>
  )
}
