'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

function fadeUp(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.80, delay, ease },
  }
}

function fadeScale(delay: number) {
  return {
    initial:    { opacity: 0, y: 32, scale: 0.96 as number },
    animate:    { opacity: 1, y: 0,  scale: 1    as number },
    transition: { duration: 0.90, delay, ease },
  }
}


function IconPlay() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: '2px' }}>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function HeroHome() {
  return (
    <section className="nh" aria-label="Bannière principale NSS">

      {/* ── Image cover ── */}
      <div className="nh-bg" aria-hidden="true" />

      {/* ── Overlay gradient ── */}
      <div className="nh-overlay" aria-hidden="true" />

      {/* ── Scroll hint ── */}
      <div className="nh-scroll" aria-hidden="true">
        <span className="nh-scroll-txt">DÉFILER</span>
        <span className="nh-scroll-line" />
      </div>

      {/* ── Contenu principal ── */}
      <div className="nh-body">

        <motion.div className="nh-over" aria-hidden="true" {...fadeUp(0.10)}>
          <span className="nh-over-line" />
          <span className="nh-over-txt">MOUVEMENT DE FEMMES RURALES AFRICAINES</span>
        </motion.div>

        <motion.h1 className="nh-h1" {...fadeScale(0.22)}>
          Par nous-mêmes,
          <em>nous nourrissons l&apos;Afrique.</em>
        </motion.h1>

        <motion.p className="nh-desc" {...fadeUp(0.38)}>
          Depuis 2011, 175&nbsp;000 femmes rurales organisées en 500 associations
          dans 14 pays défendent leur souveraineté alimentaire — du village aux
          instances continentales.
        </motion.p>

        <motion.div className="nh-ctas" {...fadeUp(0.52)}>
          <Link href="/fr/agir/rejoindre" className="nh-btn-fill">
            REJOINDRE LE MOUVEMENT
          </Link>
          <button className="nh-btn-play" type="button" aria-label="Regarder le film NSS">
            <span className="nh-play-circle" aria-hidden="true"><IconPlay /></span>
            REGARDER LE FILM
          </button>
        </motion.div>

      </div>


      <style>{`
        /* ── Section ── */
        .nh {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #0d1a0d;
        }

        /* ── Image cover ── */
        .nh-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url('/images/hero/hero-nss-femmes-rurales.jpg');
          background-size: cover;
          background-position: center 30%;
          width: 100%;
          height: 100%;
        }

        /* ── Overlay ── */
        .nh-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(5,12,5,0.30)  0%,
            rgba(5,12,5,0.75) 60%,
            rgba(5,12,5,0.95) 100%
          );
        }

        /* ── Scroll hint ── */
        .nh-scroll {
          position: absolute;
          right: 72px;
          bottom: 120px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .nh-scroll-txt {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          writing-mode: vertical-rl;
        }
        .nh-scroll-line {
          display: block;
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
        }

        /* ── Corps ── */
        .nh-body {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 72px 48px;
        }

        /* ── Overtitle ── */
        .nh-over {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .nh-over-line {
          display: block;
          width: 32px;
          height: 1.5px;
          background: #A5CE46;
          flex-shrink: 0;
        }
        .nh-over-txt {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #A5CE46;
        }

        /* ── H1 ── */
        .nh-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2.8rem, 6vw, 4rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.05;
          margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .nh-h1 em {
          display: block;
          color: #A5CE46;
          font-style: italic;
        }

        /* ── Description ── */
        .nh-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 0 36px;
        }

        /* ── CTAs ── */
        .nh-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .nh-btn-fill {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #00AD4C;
          color: #ffffff;
          padding: 13px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.22s ease;
        }
        .nh-btn-fill:hover { background: #009940; }

        .nh-btn-play {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.06em;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          padding: 0;
        }
        .nh-play-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }


        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .nh-body  { padding: 0 48px 40px; }
          .nh-scroll { right: 40px; }
        }

        /* ── Mobile 375px ── */
        @media (max-width: 640px) {
          .nh-scroll { display: none; }
          .nh-body   { padding: 0 24px 36px; }
          .nh-h1     { font-size: clamp(2rem, 8vw, 2.8rem); }
          .nh-desc   { font-size: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .nh-btn-fill { transition: none; }
        }
      `}</style>

    </section>
  )
}
