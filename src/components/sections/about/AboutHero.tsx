'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
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

      <div className="ah-bg" aria-hidden />
      <div className="ah-overlay" aria-hidden />
      <div className="ah-grain" aria-hidden />

      <div className="ah-body">

        <motion.nav
          className="ah-bc" aria-label="Fil d'Ariane"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <Link href="/fr" className="ah-bc-a">Accueil</Link>
          <span className="ah-bc-sep" aria-hidden>/</span>
          <span>À propos</span>
        </motion.nav>

        <motion.div
          className="ah-eyebrow"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease }}
        >
          <span className="ah-ey-line" aria-hidden />
          <span>NOTRE HISTOIRE</span>
          <span className="ah-ey-line" aria-hidden />
        </motion.div>

        <motion.h1
          id="ah-titre" className="ah-h1"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.30, ease }}
        >
          Un mouvement né des champs,{' '}
          <em>conduit par les femmes.</em>
        </motion.h1>

        <motion.p
          className="ah-lead"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.46, ease }}
        >
          Depuis 2011, NSS fédère les femmes rurales d&apos;Afrique de l&apos;Ouest
          autour d&apos;une conviction&nbsp;: elles sont, elles-mêmes, la solution
          à la crise alimentaire du continent.
        </motion.p>

      </div>

      <motion.div
        className="ah-statsbar"
        role="list" aria-label="Chiffres clés"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.62, ease }}
      >
        <div className="ah-statsbar-inner">
          {STATS.map(({ value, label }) => (
            <div key={label} className="ah-statitem" role="listitem">
              <span className="ah-stat-v">{value}</span>
              <span className="ah-stat-l">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .ah {
          position: relative; overflow: hidden;
          min-height: 560px; display: flex; flex-direction: column;
        }
        .ah-bg {
          position: absolute; inset: 0;
          background:
            url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')
            center 30% / cover no-repeat;
          z-index: 0;
        }
        .ah-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(108deg,
            rgba(2,18,8,0.97) 0%,
            rgba(4,86,39,0.92) 38%,
            rgba(3,58,22,0.82) 65%,
            rgba(0,0,0,0.70) 100%
          );
          z-index: 1;
        }
        .ah-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 2;
        }
        .ah-body {
          position: relative; z-index: 3; flex: 1;
          max-width: 1400px; margin: 0 auto; width: 100%;
          padding: 64px clamp(1rem, 2.5vw, 24px) 56px;
        }
        .ah-bc {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 44px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.80);
        }
        .ah-bc-a { color: rgba(255,255,255,0.48); text-decoration: none; transition: color .2s; }
        .ah-bc-a:hover { color: #fff; }
        .ah-bc-sep { color: rgba(255,255,255,0.26); }
        .ah-eyebrow {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 30px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: ${NSS.or};
        }
        .ah-ey-line {
          display: block; width: 40px; height: 1px;
          background: rgba(232,168,56,0.44); flex-shrink: 0;
        }
        .ah-h1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(30px, 4vw, 58px);
          font-weight: 600; line-height: 1.07;
          color: #ffffff; margin: 0 0 26px;
          letter-spacing: -0.02em; max-width: 800px;
        }
        .ah-h1 em { font-style: italic; color: ${NSS.vertClair}; }
        .ah-lead {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 17px; font-weight: 300; line-height: 1.78;
          color: rgba(255,255,255,0.74); max-width: 520px; margin: 0;
        }
        /* Stats bar */
        .ah-statsbar {
          position: relative; z-index: 3;
          background: rgba(4,86,39,0.90);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(165,206,70,0.16);
        }
        .ah-statsbar-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 0 clamp(1rem, 2.5vw, 24px);
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .ah-statitem {
          display: flex; flex-direction: column; align-items: center;
          padding: 22px 16px; gap: 5px;
          border-left: 1px solid rgba(165,206,70,0.16);
        }
        .ah-statitem:first-child { border-left: none; }
        .ah-stat-v {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 600; color: #ffffff;
          line-height: 1; letter-spacing: -0.02em;
        }
        .ah-stat-l {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: ${NSS.vertClair};
        }
        /* Responsive */
        @media (max-width: 768px) {
          .ah { min-height: 460px; }
          .ah-body { padding: 48px 20px 44px; }
          .ah-statsbar-inner { grid-template-columns: repeat(2, 1fr); }
          .ah-statitem:nth-child(1) { border-left: none; }
          .ah-statitem:nth-child(2) { border-left: 1px solid rgba(165,206,70,0.16); }
          .ah-statitem:nth-child(3) { border-left: none; border-top: 1px solid rgba(165,206,70,0.16); }
          .ah-statitem:nth-child(4) { border-left: 1px solid rgba(165,206,70,0.16); border-top: 1px solid rgba(165,206,70,0.16); }
        }
        @media (max-width: 480px) {
          .ah-h1 { font-size: clamp(24px, 7.5vw, 38px); }
          .ah-lead { font-size: 15px; }
          .ah-stat-v { font-size: 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ah-stat-v, .ah-stat-l { transition: none; }
        }
      `}</style>
    </section>
  )
}
