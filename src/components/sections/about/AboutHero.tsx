'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const NSS = {
  vertClair: '#A5CE46',
  or:        '#E8A838',
} as const

const ease = [0.22, 1, 0.36, 1] as const

const STATS = [
  { value: '2011',    label: 'Fondation' },
  { value: '175 000', label: 'Membres actives' },
  { value: '14',      label: 'Pays' },
  { value: '500+',    label: 'Associations' },
]

export default function AboutHero() {
  return (
    <section className="ah" aria-labelledby="ah-titre">

      {/* Fond photo */}
      <div className="ah-bg" aria-hidden />
      {/* Overlay sombre */}
      <div className="ah-overlay" aria-hidden />

      <div className="ah-body">

        {/* Fil d'Ariane */}
        <motion.nav
          className="ah-bc" aria-label="Fil d'Ariane"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.06 }}
        >
          <Link href="/fr" className="ah-bc-a">Accueil</Link>
          <span className="ah-bc-sep" aria-hidden>/</span>
          <span>À propos</span>
        </motion.nav>

        {/* Eyebrow */}
        <motion.div
          className="ah-eyebrow"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease }}
        >
          <span className="ah-ey-line" aria-hidden />
          <span>NOTRE HISTOIRE</span>
          <span className="ah-ey-line" aria-hidden />
        </motion.div>

        {/* H1 */}
        <motion.h1
          id="ah-titre" className="ah-h1"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease }}
        >
          Un mouvement né des champs,{' '}
          <em>conduit par les femmes.</em>
        </motion.h1>

        {/* Lead */}
        <motion.p
          className="ah-lead"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease }}
        >
          Depuis 2011, NSS fédère les femmes rurales d&apos;Afrique de l&apos;Ouest
          autour d&apos;une conviction&nbsp;: elles sont, elles-mêmes, la solution
          à la crise alimentaire du continent.
        </motion.p>

        {/* Stats inline */}
        <motion.div
          className="ah-stats"
          role="list" aria-label="Chiffres clés"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, delay: 0.58, ease }}
        >
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="ah-stat" role="listitem">
              {i > 0 && <span className="ah-stat-sep" aria-hidden>|</span>}
              <span className="ah-stat-v">{value}</span>
              <span className="ah-stat-l">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        /* ── Hero ── */
        .ah {
          position: relative;
          overflow: hidden;
          min-height: 580px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        /* ── Photo background ── */
        .ah-bg {
          position: absolute;
          inset: 0;
          background:
            url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')
            center 30% / cover no-repeat;
          z-index: 0;
        }

        /* ── Overlay très sombre (style CIFAP) ── */
        .ah-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(2, 20, 8, 0.82) 40%,
            rgba(4, 40, 16, 0.65) 70%,
            rgba(0, 0, 0, 0.50) 100%
          );
          z-index: 1;
        }

        /* ── Corps ── */
        .ah-body {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 72px clamp(1.5rem, 4vw, 64px) 64px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* ── Fil d'Ariane ── */
        .ah-bc {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 40px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
        }
        .ah-bc-a {
          color: rgba(255, 255, 255, 0.44);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ah-bc-a:hover { color: #fff; }
        .ah-bc-sep { color: rgba(255, 255, 255, 0.24); }

        /* ── Eyebrow ── */
        .ah-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: ${NSS.or};
        }
        .ah-ey-line {
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(232, 168, 56, 0.45);
          flex-shrink: 0;
        }

        /* ── H1 ── */
        .ah-h1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(32px, 4.2vw, 62px);
          font-weight: 700;
          line-height: 1.08;
          color: #ffffff;
          margin: 0 0 28px;
          letter-spacing: -0.02em;
          max-width: 820px;
        }
        .ah-h1 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Lead ── */
        .ah-lead {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.72);
          max-width: 540px;
          margin: 0 0 48px;
        }

        /* ── Stats inline (style CIFAP) ── */
        .ah-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          row-gap: 12px;
        }

        .ah-stat {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ah-stat-sep {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.20);
          margin: 0 20px;
          font-weight: 300;
        }

        .ah-stat-v {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          color: ${NSS.vertClair};
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .ah-stat-l {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .ah { min-height: 500px; }
          .ah-body { padding: 56px 24px 48px; }
          .ah-stat-sep { margin: 0 12px; }
        }

        @media (max-width: 480px) {
          .ah-h1 { font-size: clamp(26px, 8vw, 38px); }
          .ah-lead { font-size: 15px; }
          .ah-stats { gap: 8px; row-gap: 16px; }
          .ah-stat-sep { margin: 0 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ah-h1, .ah-lead { transition: none; }
        }
      `}</style>
    </section>
  )
}
