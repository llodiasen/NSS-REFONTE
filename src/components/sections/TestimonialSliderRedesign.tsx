'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const NSS = {
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
} as const

const ease = [0.22, 1, 0.36, 1] as const

type Leader = {
  eyebrow: string
  nom:     string
  orga:    string
  pays:    string
  photo:   string
  href:    string
}

const LEADERS_VISIBLES: Leader[] = [
  {
    eyebrow: 'Présidente',
    nom:     'Mariama Sonko',
    orga:    'NSS — Nous Sommes la Solution',
    pays:    'Sénégal',
    photo:   'https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Ghana',
    nom:     'Esther Y. Boake',
    orga:    'ABOFAB — Organic Farming Project',
    pays:    'Ghana',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Guinée',
    nom:     'Sia A.M. Kamano',
    orga:    'AGUISSA — Sécurité Alimentaire',
    pays:    'Guinée',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Mali',
    nom:     'Yah Diakité',
    orga:    'AMASSA — Souveraineté Alimentaire',
    pays:    'Mali',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg',
    href:    '/fr/mouvement/associations',
  },
]

const LEADERS_SUPPLEMENTAIRES: Leader[] = [
  {
    eyebrow: 'CA Guinée-Bissau',
    nom:     'Cadia Fernandes',
    orga:    'KAFO — Femmes Rurales',
    pays:    'Guinée-Bissau',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Burkina Faso',
    nom:     'Catherine Soulama',
    orga:    'FENOP — Organisations Paysannes',
    pays:    'Burkina Faso',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Mali',
    nom:     'Fanta Diamoutene',
    orga:    'AOPP — Organisations Paysannes',
    pays:    'Mali',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg',
    href:    '/fr/mouvement/associations',
  },
  {
    eyebrow: 'CA Sénégal',
    nom:     'Fatou B. Diop',
    orga:    'UGPM — Groupements Paysans',
    pays:    'Sénégal',
    photo:   'https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg',
    href:    '/fr/mouvement/associations',
  },
]

function LeaderCard({ l, delay = 0 }: { l: Leader; delay?: number }) {
  return (
    <motion.li
      role="listitem"
      className="ldr-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease }}
    >
      <div className="ldr-photo">
        <Image
          src={l.photo}
          alt={l.nom}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>

      <div className="ldr-body">
        <p className="ldr-role">{l.eyebrow}</p>
        <p className="ldr-nom">{l.nom}</p>
        <p className="ldr-orga">{l.orga}</p>
        <div className="ldr-divider" aria-hidden="true" />
        <p className="ldr-pays">
          <span className="ldr-dot" aria-hidden="true" />
          {l.pays}
        </p>
        <Link href={l.href} className="ldr-cta" aria-label={`En savoir plus sur ${l.nom}`}>
          EN SAVOIR PLUS →
        </Link>
      </div>
    </motion.li>
  )
}

export default function TestimonialSliderRedesign() {
  const [ouvert, setOuvert] = useState(false)

  return (
    <section className="ldr" aria-labelledby="ldr-heading">
      <div className="ldr-wrap">

        {/* ══ En-tête ══ */}
        <header className="ldr-header">
          <motion.p
            className="ldr-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.60, ease }}
          >
            NOS LEADERS
          </motion.p>

          <motion.h2
            id="ldr-heading"
            className="ldr-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, delay: 0.10, ease }}
          >
            Les voix qui portent <em>le mouvement.</em>
          </motion.h2>

          <motion.p
            className="ldr-sub"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.18, ease }}
          >
            Des femmes de terrain qui incarnent NSS par leur engagement,
            leur vision et leur détermination.
          </motion.p>
        </header>

        {/* ══ Grille visible ══ */}
        <ul className="ldr-grid" role="list" aria-label="Leaders NSS">
          {LEADERS_VISIBLES.map((l, i) => (
            <LeaderCard key={l.nom} l={l} delay={0.08 + i * 0.09} />
          ))}
        </ul>

        {/* ══ Grille supplémentaire ══ */}
        <AnimatePresence>
          {ouvert && (
            <motion.ul
              className="ldr-grid ldr-grid--extra"
              role="list"
              aria-label="Membres supplémentaires NSS"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              {LEADERS_SUPPLEMENTAIRES.map((l, i) => (
                <LeaderCard key={l.nom} l={l} delay={0.06 + i * 0.08} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* ══ Bouton toggle ══ */}
        <div className="ldr-toggle-wrap">
          <button
            type="button"
            className="ldr-toggle"
            onClick={() => setOuvert(v => !v)}
            aria-expanded={ouvert}
          >
            {ouvert ? 'VOIR MOINS ↑' : 'VOIR PLUS ↓'}
          </button>
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .ldr {
          background: #F5F3EE;
          overflow: hidden;
        }

        .ldr-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 64px;
          box-sizing: border-box;
        }

        /* ── En-tête ── */
        .ldr-header {
          margin-bottom: 48px;
        }

        .ldr-eyebrow {
          margin: 0 0 16px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        .ldr-h2 {
          margin: 0 0 20px;
          font-family: var(--font-display), Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          letter-spacing: -0.01em;
        }

        .ldr-h2 em {
          font-style: italic;
          color: ${NSS.vertClair};
        }

        .ldr-sub {
          margin: 0;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          max-width: 600px;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Grilles ── */
        .ldr-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ldr-grid--extra {
          margin-top: 20px;
        }

        /* ── Carte ── */
        .ldr-card {
          border: 1px solid #e0ddd6;
          border-radius: 0;
          overflow: hidden;
          cursor: pointer;
          transition:
            transform    0.30s ease,
            box-shadow   0.30s ease,
            border-color 0.30s ease;
        }

        .ldr-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          border-color: ${NSS.vertPrimaire};
        }

        /* ── Photo ── */
        .ldr-photo {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #2c2c28;
        }

        /* ── Corps ── */
        .ldr-body {
          background: #ffffff;
          border-top: 3px solid ${NSS.vertPrimaire};
          padding: 24px 24px 28px;
          display: flex;
          flex-direction: column;
        }

        .ldr-role {
          margin: 0 0 8px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        .ldr-nom {
          margin: 0 0 4px;
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
        }

        .ldr-orga {
          margin: 0 0 14px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }

        .ldr-divider {
          height: 1px;
          background: #e8e6e0;
          margin-bottom: 14px;
          flex-shrink: 0;
        }

        .ldr-pays {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 18px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #2C2C28;
        }

        .ldr-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${NSS.vertPrimaire};
          flex-shrink: 0;
        }

        .ldr-cta {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          text-decoration: none;
          transition: color 0.20s ease;
          width: fit-content;
        }

        .ldr-card:hover .ldr-cta {
          color: ${NSS.vertPrimaire};
        }

        /* ── Bouton toggle ── */
        .ldr-toggle-wrap {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .ldr-toggle {
          background: transparent;
          border: 2px solid ${NSS.vertPrimaire};
          color: ${NSS.vertPrimaire};
          padding: 16px 48px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-radius: 0;
          cursor: pointer;
          transition:
            background  0.20s ease,
            color       0.20s ease,
            box-shadow  0.20s ease;
        }

        .ldr-toggle:hover {
          background: ${NSS.vertPrimaire};
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 173, 76, 0.20);
        }

        /* ── Tablet (<1024px) : 2 colonnes ── */
        @media (max-width: 1024px) {
          .ldr-wrap { padding: 80px 40px; }
          .ldr-grid { grid-template-columns: 1fr 1fr; gap: 18px; }
          .ldr-h2   { font-size: 30px; }
        }

        /* ── Mobile (<640px) : 1 colonne ── */
        @media (max-width: 640px) {
          .ldr-wrap   { padding: 64px 32px; }
          .ldr-grid   { grid-template-columns: 1fr; gap: 16px; }
          .ldr-h2     { font-size: 26px; }
          .ldr-photo  { height: 240px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .ldr-card   { transition: none; }
          .ldr-toggle { transition: none; }
        }
      `}</style>
    </section>
  )
}
