'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Megaphone, Globe } from 'lucide-react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Piliers NSS (officiel NSS-Mouvement.md) ─────────────────────────────────
interface Pilier {
  num:    string
  icon:   React.ReactNode
  titre:  string
  desc:   string
}

const PILIERS: Pilier[] = [
  {
    num:   '01',
    icon:  <Leaf   size={20} strokeWidth={1.5} />,
    titre: "Promouvoir l'agroécologie",
    desc:  'Savoirs paysans, semences traditionnelles et biodiversité au cœur de chaque pratique agricole.',
  },
  {
    num:   '02',
    icon:  <Megaphone size={20} strokeWidth={1.5} />,
    titre: "Amplifier la voix des paysannes",
    desc:  'Plaidoyer local, national et continental pour que les femmes rurales décident de leur avenir.',
  },
  {
    num:   '03',
    icon:  <Globe  size={20} strokeWidth={1.5} />,
    titre: "Bâtir un mouvement continental",
    desc:  'Réseau de solidarité actif dans 7 pays, uni autour d\'une vision commune et souveraine.',
  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.75, delay, ease },
})

const inViewScale = (delay = 0) => ({
  initial:    { opacity: 0, y: 36, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.80, delay, ease },
})

// ─── Props ────────────────────────────────────────────────────────────────────
interface MissionProps {
  locale: string
}

// ─── Component ────────────────────────────────────────────────────────────────
import type React from 'react'

export default function Mission({ locale }: MissionProps) {
  return (
    <section className="qui-section" aria-labelledby="qui-titre">

      {/* ════════ ZONE HAUTE — 2 colonnes ════════ */}
      <div className="qui-top-grid">

        {/* ── Col gauche : Titre + tagline + lien ── */}
        <div className="qui-col-left">

          <motion.div className="qui-eyebrow" {...inView(0.08)}>
            <span className="qui-eyebrow-line" aria-hidden="true" />
            <span className="qui-eyebrow-text">QUI SOMMES-NOUS</span>
          </motion.div>

          <motion.h2
            id="qui-titre"
            className="qui-h2"
            {...inViewScale(0.18)}
          >
            La solution<br />vient{' '}
            <em>d&apos;elles.</em>
          </motion.h2>

          <motion.p className="qui-tagline" {...inView(0.28)}>
            &ldquo;Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.&rdquo;
          </motion.p>

          <motion.div {...inView(0.36)}>
            <Link
              href={`/${locale}/mouvement`}
              className="qui-link"
              aria-label="Découvrir l'histoire du mouvement NSS"
            >
              Découvrir notre histoire
              <span className="qui-link-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* ── Col droite : Vision officielle ── */}
        <div className="qui-col-right">

          <motion.p className="qui-prose" lang="fr" {...inView(0.22)}>
            Nous Sommes la Solution (NSS) est un mouvement panafricain fondé en 2011
            par 12 organisations de femmes rurales dans 5 pays. Aujourd&apos;hui,
            175&nbsp;000 membres et sympathisant·es, réunis dans 7 pays d&apos;Afrique
            de l&apos;Ouest, cultivent, transforment et défendent une agriculture
            familiale souveraine — de la semence à la table.
          </motion.p>

          <motion.p className="qui-prose" lang="fr" {...inView(0.30)}>
            NSS œuvre pour une Afrique où, dans la solidarité, les femmes rurales
            impliquées dans la prise de décision cultivent et consomment les produits
            de l&apos;agriculture familiale, tout en préservant l&apos;environnement
            pour les générations futures.
          </motion.p>

          {/* 3 messages fondateurs */}
          <motion.div className="qui-messages" {...inView(0.40)}>
            {[
              'Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.',
              'Produisons ce que nous consommons, consommons ce que nous produisons.',
              'Préservons la semence paysanne et développons la biodiversité.',
            ].map((msg) => (
              <p key={msg} className="qui-message">
                <span className="qui-message-mark" aria-hidden="true">—</span>
                {msg}
              </p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════ SÉPARATEUR ════════ */}
      <motion.div
        className="qui-sep"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease }}
        style={{ transformOrigin: 'left' }}
      />

      {/* ════════ PILIERS — 3 colonnes ════════ */}
      <div className="qui-piliers">
        {PILIERS.map(({ num, icon, titre, desc }, i) => (
          <motion.div
            key={num}
            className="qui-pilier"
            {...inView(0.10 + i * 0.12)}
          >
            <div className="qui-pilier-header">
              <span className="qui-pilier-num">{num}</span>
              <span className="qui-pilier-icon">{icon}</span>
            </div>
            <h3 className="qui-pilier-titre">{titre}</h3>
            <p className="qui-pilier-desc">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .qui-section {
          background: #ffffff;
          overflow: hidden;
        }

        /* ── Top grid ── */
        .qui-top-grid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 104px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Col gauche ── */
        .qui-col-left {
          position: sticky;
          top: 80px;
        }

        /* ── Eyebrow ── */
        .qui-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .qui-eyebrow-line {
          display: block;
          width: 44px;
          height: 1px;
          background: ${NSS.vertClair};
          flex-shrink: 0;
        }
        .qui-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── H2 ── */
        .qui-h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(48px, 5.5vw, 80px);
          font-weight: 600;
          line-height: 0.92;
          color: #0A0A0A;
          margin: 0 0 36px;
          letter-spacing: -0.01em;
        }
        .qui-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }

        /* ── Tagline ── */
        .qui-tagline {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 16px;
          font-style: italic;
          font-weight: 400;
          color: #5A5A5A;
          line-height: 1.6;
          margin: 0 0 40px;
          border-left: 2px solid ${NSS.vertClair};
          padding-left: 18px;
        }

        /* ── Lien ── */
        .qui-link {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: ${NSS.vertPrimaire};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .qui-link-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .qui-link:hover { color: ${NSS.vertFonce}; gap: 16px; }
        .qui-link:hover .qui-link-arrow { transform: translateX(4px); }

        /* ── Col droite ── */
        .qui-col-right {
          padding-top: 10px;
        }

        /* ── Prose ── */
        .qui-prose {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.82;
          color: #2A2A2A;
          text-align: justify;
          hyphens: auto;
          margin: 0 0 24px;
        }

        /* ── Messages fondateurs ── */
        .qui-messages {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 32px;
          border-top: 1px solid #E8E8E8;
        }
        .qui-message {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          color: #444;
          line-height: 1.6;
          margin: 0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .qui-message-mark {
          color: ${NSS.vertClair};
          flex-shrink: 0;
          font-style: normal;
          margin-top: 1px;
        }

        /* ── Séparateur ── */
        .qui-sep {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 80px;
          height: 1px;
          background: #E2E2E2;
        }

        /* ── Piliers ── */
        .qui-piliers {
          max-width: 1400px;
          margin: 0 auto;
          padding: 64px 80px 96px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .qui-pilier {
          padding: 40px 48px 40px 0;
        }
        .qui-pilier:not(:first-child) {
          padding-left: 48px;
          border-left: 1px solid #E8E8E8;
        }
        .qui-pilier-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .qui-pilier-num {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 40px;
          font-weight: 600;
          color: #EBEBEB;
          line-height: 1;
        }
        .qui-pilier-icon {
          color: ${NSS.vertPrimaire};
          opacity: 0.85;
        }
        .qui-pilier-titre {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0A0A0A;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .qui-pilier-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: #5A5A5A;
          line-height: 1.74;
          margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .qui-top-grid {
            padding: 80px 48px 60px;
            gap: 56px;
          }
          .qui-sep,
          .qui-piliers {
            padding-left: 48px;
            padding-right: 48px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .qui-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 72px 24px 48px;
          }
          .qui-col-left { position: static; }
          .qui-h2 { font-size: clamp(42px, 9vw, 62px); }
          .qui-sep { padding: 0 24px; }
          .qui-piliers {
            grid-template-columns: 1fr;
            padding: 48px 24px 72px;
            gap: 0;
          }
          .qui-pilier {
            padding: 32px 0;
            border-left: none !important;
            border-bottom: 1px solid #E8E8E8;
          }
          .qui-pilier:last-child { border-bottom: none; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .qui-top-grid { padding: 64px 16px 40px; }
          .qui-h2 { font-size: clamp(38px, 10vw, 52px); }
          .qui-tagline { font-size: 14px; }
          .qui-prose { font-size: 14px; }
          .qui-sep { padding: 0 16px; }
          .qui-piliers { padding: 40px 16px 60px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .qui-section * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  )
}
