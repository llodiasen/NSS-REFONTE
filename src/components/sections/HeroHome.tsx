'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS: { number: string; label: string }[] = [
  { number: '14',      label: 'Pays membres' },
  { number: '175 000', label: 'Membres & sympathisant·es' },
  { number: '500+',    label: 'Associations de Femmes Rurales' },
  { number: '14 ans',  label: "D'engagement continu" },
]

// ─── Animation helpers ───────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

function fadeUp(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
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

// ─── Sub-component ───────────────────────────────────────────────────────────
interface StatItemProps {
  number: string
  label:  string
  delay:  number
}

function StatItem({ number, label, delay }: StatItemProps) {
  return (
    <motion.div
      className="nss-stat"
      role="listitem"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.60, delay, ease }}
    >
      <span className="nss-stat-num">{number}</span>
      <span className="nss-stat-lbl">{label}</span>
    </motion.div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function HeroHome() {
  return (
    <section className="nss-hero" aria-label="Bannière principale NSS">

      {/* Photo de fond */}
      <div className="nss-hero-bg" aria-hidden="true" />

      {/* Overlay dégradé vert foncé */}
      <div className="nss-hero-overlay" aria-hidden="true" />

      {/* ── Contenu principal ── */}
      <div className="nss-hero-body">

        {/* Eyebrow */}
        <motion.div
          className="nss-eyebrow"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.70, delay: 0.10, ease }}
          aria-hidden="true"
        >
          <span className="nss-eyebrow-line" />
          <span className="nss-eyebrow-text">
            FEMMES · TERRE · SOUVERAINETÉ
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 className="nss-h1" {...fadeScale(0.22)}>
          Par nous-mêmes,<br />
          <em>nous nourrissons l&apos;Afrique.</em>
        </motion.h1>

        <motion.p className="nss-desc" {...fadeUp(0.38)}>
          175&nbsp;000 femmes rurales. 14 pays. Une seule conviction&nbsp;:
          l&apos;Afrique se nourrit par ses propres mains. Depuis 2011, nous
          cultivons, transformons et transmettons — parce que la souveraineté
          alimentaire commence par nous.
        </motion.p>

        {/* CTAs */}
        <motion.div className="nss-ctas" {...fadeUp(0.52)}>
          <Link href="/fr/agir/rejoindre" className="nss-btn-primary">
            REJOINDRE
          </Link>
          <Link href="/fr/mouvement" className="nss-btn-ghost">
            NOTRE HISTOIRE
          </Link>
        </motion.div>
      </div>

      {/* ── Barre statistiques ── */}
      <motion.div
        className="nss-statsbar"
        role="list"
        aria-label="Chiffres clés NSS"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.70, delay: 0.68, ease }}
      >
        {STATS.map(({ number, label }, i) => (
          <StatItem
            key={label}
            number={number}
            label={label}
            delay={0.70 + i * 0.10}
          />
        ))}
      </motion.div>

      {/* ── Styles ── */}
      <style>{`
        /* ── Section ── */
        .nss-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── Background ── */
        .nss-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/hero/hero-nss-femmes-rurales.jpg');
          background-size: cover;
          background-position: center 30%;
          filter: saturate(0.75) brightness(0.85);
          z-index: 0;
        }

        /* ── Overlay ── */
        .nss-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            114deg,
            rgba(4,86,39,0.82)   0%,
            rgba(4,86,39,0.68)  45%,
            rgba(0,173,76,0.20) 72%,
            rgba(4,86,39,0.02) 100%
          );
          z-index: 1;
        }

        /* ── Corps ── */
        .nss-hero-body {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 148px 96px 88px;
          max-width: 1100px;
        }

        /* ── Eyebrow ── */
        .nss-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 44px;
        }
        .nss-eyebrow-line {
          display: block;
          width: 56px;
          height: 1px;
          background: ${NSS.vertClair};
          flex-shrink: 0;
        }
        .nss-eyebrow-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── H1 ── */
        .nss-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 700;
          line-height: 1.0;
          color: #ffffff;
          margin: 0 0 34px;
          letter-spacing: -0.01em;
        }
        .nss-h1 em {
          font-style: italic;
          color: ${NSS.or};
        }

        /* ── Description ── */
        .nss-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: clamp(15px, 1.15vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: #ffffff;
          max-width: 500px;
          margin: 0 0 54px;
          text-align: justify;
        }

        /* ── CTAs ── */
        .nss-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .nss-btn-primary {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          background: ${NSS.vertPrimaire};
          color: #ffffff;
          padding: 16px 38px;
          border-radius: 1px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.22s ease, transform 0.15s ease;
        }
        .nss-btn-primary:hover {
          background: ${NSS.vertFonce};
          transform: translateY(-2px);
        }
        .nss-btn-ghost {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          background: transparent;
          color: rgba(255, 255, 255, 0.78);
          padding: 15px 38px;
          border-radius: 1px;
          text-decoration: none;
          display: inline-block;
          border: 1px solid rgba(255, 255, 255, 0.28);
          transition: border-color 0.22s ease, color 0.22s ease;
        }
        .nss-btn-ghost:hover {
          border-color: ${NSS.vertClair};
          color: ${NSS.vertClair};
        }

        /* ── Barre stats ── */
        .nss-statsbar {
          position: relative;
          z-index: 3;
          background: rgba(2, 22, 9, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid rgba(165, 206, 70, 0.16);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }
        .nss-stat {
          padding: 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .nss-stat:not(:last-child) {
          border-right: 1px solid rgba(165, 206, 70, 0.12);
        }
        .nss-stat-num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(36px, 3.2vw, 50px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
          white-space: nowrap;
          display: block;
        }
        .nss-stat-lbl {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(165, 206, 70, 0.62);
          display: block;
          text-align: center;
          line-height: 1.4;
        }

        /* ── Tablet ── */
        @media (max-width: 1280px) {
          .nss-hero-body { padding: 128px 72px 80px; }
        }
        @media (max-width: 1024px) {
          .nss-hero-body { padding: 108px 48px 64px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .nss-hero { min-height: auto; }
          .nss-hero-body { padding: 96px 24px 52px; max-width: 100%; }
          .nss-h1 { line-height: 1.0; }
          .nss-desc { font-size: 15px; max-width: 100%; }
          .nss-statsbar { grid-template-columns: repeat(2, 1fr); }
          .nss-stat {
            padding: 24px 14px;
            border-right: none !important;
            border-bottom: 1px solid rgba(165,206,70,0.10);
          }
          .nss-stat:nth-child(odd)  { border-right: 1px solid rgba(165,206,70,0.10) !important; }
          .nss-stat:nth-child(3),
          .nss-stat:nth-child(4)    { border-bottom: none; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .nss-hero-body { padding: 84px 16px 40px; }
          /* h1 size handled by base clamp */
          .nss-desc      { font-size: 14px; line-height: 1.74; }
          .nss-eyebrow-text { font-size: 8px; letter-spacing: 0.16em; }
          .nss-btn-primary,
          .nss-btn-ghost { font-size: 10px; padding: 14px 28px; }
          .nss-stat-num  { font-size: clamp(28px, 7vw, 38px); }
        }

        /* ── Accessibilité : réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .nss-hero-bg { filter: saturate(0.60) brightness(0.72); }
        }
      `}</style>
    </section>
  )
}

