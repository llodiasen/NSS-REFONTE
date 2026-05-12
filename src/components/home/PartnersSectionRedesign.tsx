'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface Partenaire {
  nom:  string
  role: string
  pays: string
  logo: string
  href: string
}

// ─── Données (source : NSS-Partenaires.md — 5 partenaires officiels) ─────────
const PARTENAIRES: Partenaire[] = [
  {
    nom:  'Grassroots International',
    role: 'Partenaire historique & financement des mouvements sociaux',
    pays: 'États-Unis',
    logo: '/images/partenaires/Grassroots-international.jpg',
    href: 'https://www.grassrootsonline.org',
  },
  {
    nom:  'AgroEcology Fund',
    role: 'Fonds dédié à l\'agroécologie paysanne mondiale',
    pays: 'États-Unis',
    logo: '/images/partenaires/Agroecology-Fund.jpg',
    href: 'https://agroecologyfund.org',
  },
  {
    nom:  'Thousand Currents',
    role: 'Finance les alternatives économiques durables du Sud global',
    pays: 'États-Unis',
    logo: '/images/partenaires/thoussands-current-1.jpg',
    href: 'https://thousandcurrents.org',
  },
  {
    nom:  'MATCH International Women\'s Fund',
    role: 'Finance les mouvements de femmes dans les pays du Sud',
    pays: 'Canada',
    logo: '/images/partenaires/Fond-egalite.png',
    href: 'https://matchinternational.org',
  },
  {
    nom:  'Fahamu Africa',
    role: 'ONG panafricaine — appui technique depuis 2011',
    pays: 'Sénégal',
    logo: '/images/partenaires/logofahamu1.png',
    href: 'https://fahamu.org',
  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.72, delay, ease },
})

const inViewScale = (delay = 0) => ({
  initial:     { opacity: 0, y: 30, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.80, delay, ease },
})

// ─── Component ────────────────────────────────────────────────────────────────
export default function PartnersSectionRedesign() {
  return (
    <section className="pts-section" aria-labelledby="pts-titre">

      {/* Grille de fond subtile */}
      <div className="pts-pattern" aria-hidden="true" />

      <div className="pts-wrap">

        {/* ════════ En-tête ════════ */}
        <header className="pts-header">

          <motion.div className="pts-eyebrow" {...inView(0.06)}>
            <span className="pts-eyebrow-line" aria-hidden="true" />
            <span className="pts-eyebrow-text">NOS PARTENAIRES</span>
            <span className="pts-eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h2 id="pts-titre" className="pts-h2" {...inViewScale(0.16)}>
            Ils nous font <em>confiance.</em>
          </motion.h2>
          <motion.span
            className="pts-underline"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />

        </header>

        {/* ════════ Logos — grille ════════ */}
        <ul
          className="pts-grid"
          role="list"
          aria-label="Partenaires du mouvement NSS"
        >
          {PARTENAIRES.map((p, i) => (
            <motion.li
              key={p.nom}
              role="listitem"
              className="pts-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08 + i * 0.10, ease }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pts-logo-card"
                aria-label={`${p.nom} — ${p.pays} (ouvre dans un nouvel onglet)`}
              >
                {/* Logo */}
                <div className="pts-img-box">
                  <Image
                    src={p.logo}
                    alt={p.nom}
                    fill
                    sizes="(max-width: 480px) 50vw, 180px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                {/* Info au survol */}
                <div className="pts-overlay" aria-hidden="true">
                  <span className="pts-overlay-nom">{p.nom}</span>
                  <span className="pts-overlay-pays">{p.pays}</span>
                </div>
              </a>

              {/* Rôle en-dessous */}
              <p className="pts-role">{p.role}</p>
            </motion.li>
          ))}
        </ul>


      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .pts-section {
          position: relative;
          background: #F5F3EE;
          border-top: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
        }

        /* Grille de fond */
        .pts-pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg,   transparent, transparent 48px, rgba(0,0,0,0.015) 48px, rgba(0,0,0,0.015) 49px),
            repeating-linear-gradient(90deg,  transparent, transparent 48px, rgba(0,0,0,0.015) 48px, rgba(0,0,0,0.015) 49px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Wrap ── */
        .pts-wrap {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        /* ── En-tête ── */
        .pts-header {
          text-align: center;
          margin-bottom: 64px;
        }

        /* ── Eyebrow centré ── */
        .pts-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .pts-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 56px;
          height: 1px;
          background: rgba(165,206,70,0.40);
        }
        .pts-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .pts-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          margin: 0 0 14px;
          letter-spacing: -0.015em;
        }
        .pts-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }
        .pts-underline {
          display: block;
          height: 2px;
          width: 72px;
          background: ${NSS.vertClair};
          border-radius: 2px;
          margin: 12px auto 24px;
        }

        /* ── Intro ── */
        .pts-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.78;
          color: #2C2C28;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Grille logos ── */
        .pts-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px 16px;
        }
        .pts-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 0 0 auto;
          width: 200px;
        }

        /* ── Card logo ── */
        .pts-logo-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 88px;
          padding: 16px 20px;
          background: #FAFAF9;
          border: 1px solid #EBEBEB;
          border-radius: 2px;
          text-decoration: none;
          overflow: hidden;
          filter: grayscale(0.70) opacity(0.75);
          transition:
            filter   0.32s ease,
            border-color 0.32s ease,
            background   0.32s ease,
            transform    0.28s ease,
            box-shadow   0.28s ease;
        }
        .pts-logo-card:hover {
          filter: grayscale(0) opacity(1);
          border-color: rgba(0,173,76,0.30);
          background: rgba(165,206,70,0.05);
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0,173,76,0.10);
        }

        /* ── Image ── */
        .pts-img-box {
          position: relative;
          width: 100%;
          height: 52px;
        }

        /* ── Overlay info au hover ── */
        .pts-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4,86,39,0.92);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 8px;
          opacity: 0;
          transition: opacity 0.26s ease;
        }
        .pts-logo-card:hover .pts-overlay { opacity: 1; }
        .pts-overlay-nom {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0;
        }
        .pts-overlay-pays {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── Rôle ── */
        .pts-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.55;
          color: #888;
          text-align: center;
          margin: 0;
          max-width: 180px;
        }

        /* ── Séparateur + footer ── */
        .pts-footer {
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .pts-sep {
          width: 100%;
          max-width: 640px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D0D0D0 30%, #D0D0D0 70%, transparent);
        }
        .pts-footer-text {
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.60;
          color: #5A5A5A;
          text-align: center;
          max-width: 520px;
          margin: 0;
        }
        .pts-footer-text em {
          font-style: italic;
          color: ${NSS.vertFonce};
        }
        .pts-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: ${NSS.vertFonce};
          text-decoration: none;
          border-bottom: 1.5px solid ${NSS.vertClair};
          padding-bottom: 3px;
          transition: color 0.22s ease, gap 0.20s ease;
        }
        .pts-cta:hover { color: ${NSS.vertPrimaire}; gap: 16px; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .pts-wrap { padding: 80px 24px; }
        }
        @media (max-width: 1024px) {
          .pts-wrap { padding: 72px 24px; }
          .pts-item  { width: 176px; }
          .pts-logo-card { width: 176px; height: 80px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .pts-wrap { padding: 64px 24px; }
          .pts-h2 { line-height: 1.2; }
          .pts-item  { width: 152px; }
          .pts-logo-card { width: 152px; height: 72px; padding: 12px 16px; }
          .pts-grid { gap: 18px 12px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .pts-wrap { padding: 52px 16px; }
          .pts-h2 { line-height: 1.2; }
          .pts-item  { width: 140px; }
          .pts-logo-card { width: 140px; height: 66px; }
          .pts-grid { gap: 14px 10px; }
          .pts-role { font-size: 10px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .pts-logo-card { transition: filter 0.2s ease; }
          .pts-overlay   { transition: opacity 0.2s ease; }
        }
      `}</style>
    </section>
  )
}
