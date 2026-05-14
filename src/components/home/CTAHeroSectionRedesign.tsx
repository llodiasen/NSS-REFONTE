'use client'

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

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.72, delay, ease },
})

const inViewScale = (delay = 0) => ({
  initial:     { opacity: 0, y: 32, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.82, delay, ease },
})

// ─── Component ────────────────────────────────────────────────────────────────
export default function CTAHeroSectionRedesign() {
  return (
    <section className="cth-section" aria-labelledby="cth-titre">

      {/* Image de fond */}
      <div className="cth-bg" aria-hidden="true" />

      {/* Overlay dégradé */}
      <div className="cth-overlay" aria-hidden="true" />

      {/* Grain texture */}
      <div className="cth-grain" aria-hidden="true" />

      <div className="cth-wrap">

        {/* Eyebrow — or sur fond sombre */}
        <motion.div className="cth-eyebrow" {...inView(0.08)}>
          <span className="cth-eyebrow-line" aria-hidden="true" />
          <span className="cth-eyebrow-text">REJOINDRE LE MOUVEMENT</span>
          <span className="cth-eyebrow-line" aria-hidden="true" />
        </motion.div>

        {/* H2 */}
        <motion.h2 id="cth-titre" className="cth-h2" {...inViewScale(0.18)}>
          Rejoignez le mouvement et{' '}
          <em>agissons pour la souveraineté alimentaire.</em>
        </motion.h2>

        {/* Boutons */}
        <motion.div className="cth-btns" {...inView(0.38)}>
          <Link
            href="/fr/agir/rejoindre"
            className="cth-btn cth-btn--primary"
            aria-label="Adhérer au mouvement NSS"
          >
            ADHÉRER AU MOUVEMENT
          </Link>
          <Link
            href="/fr/contact"
            className="cth-btn cth-btn--ghost"
            aria-label="Nous contacter"
          >
            NOUS CONTACTER
            <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
              <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Tagline bas */}
        <motion.p
          className="cth-tagline"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.60, ease }}
        >
          En nous-mêmes.
        </motion.p>

      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .cth-section {
          position: relative;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Image de fond */
        .cth-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/NSS.webp');
          background-size: cover;
          background-position: center 30%;
          z-index: 0;
        }

        /* Overlay dégradé vert foncé */
        .cth-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            114deg,
            rgba(2,20,10,0.96) 0%,
            rgba(4,86,39,0.88) 45%,
            rgba(0,100,45,0.78) 100%
          );
          z-index: 1;
        }

        /* Grain */
        .cth-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 2;
        }

        /* ── Wrap ── */
        .cth-wrap {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem);
          text-align: center;
        }

        /* ── Eyebrow ── */
        .cth-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 1rem;
        }
        .cth-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 56px;
          height: 1px;
          background: rgba(232,168,56,0.45);
        }
        .cth-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${NSS.or};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .cth-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 600;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 2rem;
          letter-spacing: -0.01em;
        }
        .cth-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        /* ── Sous-titre ── */
        .cth-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.78;
          color: #ffffff;
          max-width: 560px;
          margin: 0 auto 52px;
        }

        /* ── Boutons ── */
        .cth-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cth-btn {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 36px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.25s ease, color 0.25s ease,
                      border-color 0.25s ease, transform 0.22s ease, gap 0.20s ease;
        }
        .cth-btn--primary {
          background: ${NSS.vertPrimaire};
          color: #ffffff;
          border: 1.5px solid ${NSS.vertPrimaire};
        }
        .cth-btn--primary:hover {
          background: #008f3e;
          border-color: #008f3e;
          transform: translateY(-3px);
        }
        .cth-btn--ghost {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.50);
        }
        .cth-btn--ghost:hover {
          background: rgba(245,237,214,0.08);
          border-color: rgba(245,237,214,0.75);
          transform: translateY(-3px);
          gap: 16px;
        }

        /* ── Tagline ── */
        .cth-tagline {
          font-family: var(--font-display), Georgia, serif;
          font-size: 15px;
          font-style: italic;
          color: ${NSS.creme};
          margin: 36px 0 0;
          letter-spacing: 0.08em;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .cth-sub { font-size: 15px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .cth-btns { flex-direction: column; align-items: stretch; }
          .cth-btn { text-align: center; justify-content: center; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .cth-btn { transition: background 0.2s ease, color 0.2s ease; }
        }
      `}</style>
    </section>
  )
}
