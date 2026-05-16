'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

interface Card {
  type:     string
  titre:    string
  sous:     string
  dates:    string
  lieu:     string
  image:    string
  imageAlt: string
  desc:     string
  cta:      string
  href:     string
}

const CARDS: Card[] = [
  {
    type:     'Formation',
    titre:    'CIFAP',
    sous:     'Camp International de Formation en Agroécologie Paysanne',
    dates:    'Sept. 2026',
    lieu:     'Niaguis, Sénégal',
    image:    '/images/programmes/Cifap/Cifap 2025 à Niaguis (67).jpg',
    imageAlt: 'CIFAP 2025 — formation agroécologique à Niaguis, Sénégal',
    desc:     "Un espace d'apprentissage collectif où les paysannes agroécologistes se forment, échangent et construisent ensemble des solutions pour la souveraineté alimentaire.",
    cta:      'Voir les éditions',
    href:     '/programmes/cifap',
  },
  {
    type:     'Congrès',
    titre:    'Rencontre NSS',
    sous:     'Congrès Continentaux Biennaux',
    dates:    '2027 (Prév.)',
    lieu:     "Afr. de l'Ouest",
    image:    '/images/programmes/Cifap/foire-du-benin-1.webp',
    imageAlt: 'Rencontre NSS — congrès continental des leaders paysannes',
    desc:     "Une plateforme continentale réunissant les leaders et actrices de la souveraineté alimentaire pour débattre, co-construire et amplifier les mouvements paysans.",
    cta:      'En savoir plus',
    href:     '/programmes/rencontre',
  },
  {
    type:     'Foire',
    titre:    'Foire NSS',
    sous:     'Foire Annuelle de la Souveraineté Alimentaire',
    dates:    'Sept. 2026',
    lieu:     "Afr. de l'Ouest",
    image:    '/images/programmes/Cifap/Foire-Djimini-2024-4-770x415.webp',
    imageAlt: 'Foire NSS — Foire de Djimini 2024, souveraineté alimentaire',
    desc:     "Un festival d'agroécologie où paysannes, organisations et visiteurs célèbrent, découvrent et échangent les pratiques et innovations pour nourrir l'Afrique.",
    cta:      'En savoir plus',
    href:     '/programmes/foire',
  },
]

export default function ProgrammesRedesign() {
  return (
    <section className="prg" aria-labelledby="prg-titre">

      {/* ── HEADER ── */}
      <header className="prg-header">

        <motion.div
          className="prg-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="prg-ey-line" aria-hidden="true" />
          <span>PROGRAMMES &amp; ÉVÉNEMENTS</span>
          <span className="prg-ey-line" aria-hidden="true" />
        </motion.div>

        <motion.h2
          id="prg-titre"
          className="prg-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, delay: 0.1, ease }}
        >
          Nos rendez-vous pour la <em>souveraineté alimentaire.</em>
        </motion.h2>

        <motion.span
          className="prg-underline"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52, delay: 0.22, ease }}
          style={{ transformOrigin: 'center' }}
        />

        <motion.p
          className="prg-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.28, ease }}
        >
          Formation, congrès, foire — trois rendez-vous qui rassemblent les femmes
          rurales d&apos;Afrique de l&apos;Ouest autour de la souveraineté alimentaire.
        </motion.p>

      </header>

      {/* ── GRILLE ── */}
      <div className="prg-grid">
        {CARDS.map((card, i) => (
          <motion.article
            key={card.titre}
            className="prg-card"
            aria-label={`${card.type} : ${card.titre}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.68, delay: 0.1 + i * 0.12, ease }}
          >

            {/* Image */}
            <div className="prg-img-wrap">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="prg-img"
                loading="lazy"
              />
              <span className="prg-badge" aria-label="Événement à venir">À VENIR</span>
            </div>

            {/* Corps */}
            <div className="prg-body">

              <span className="prg-type">{card.type}</span>

              <h3 className="prg-titre">{card.titre}</h3>

              <p className="prg-sous">{card.sous}</p>

              {/* Barre méta */}
              <div className="prg-meta" aria-label={`Infos ${card.titre}`}>
                <div className="prg-meta-item">
                  <span className="prg-meta-label">DATES</span>
                  <span className="prg-meta-val">{card.dates}</span>
                </div>
                <span className="prg-meta-sep" aria-hidden="true" />
                <div className="prg-meta-item">
                  <span className="prg-meta-label">LIEU</span>
                  <span className="prg-meta-val">{card.lieu}</span>
                </div>
              </div>

              <p className="prg-text">{card.desc}</p>

              <Link href={card.href} className="prg-cta">
                {card.cta} →
              </Link>

            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        /* ── SECTION ── */
        .prg {
          background: #ffffff;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1rem, 3vw, 2rem);
        }

        /* ── HEADER ── */
        .prg-header {
          max-width: 640px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .prg-eyebrow {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #00AD4C;
        }
        .prg-ey-line {
          display: block; width: 28px; height: 1.5px;
          background: #00AD4C; flex-shrink: 0;
        }
        .prg-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 500; letter-spacing: -0.01em; line-height: 1.2;
          color: #2A2A2A; margin: 0;
        }
        .prg-h2 em { color: #00AD4C; font-style: italic; }
        .prg-underline {
          display: block; width: 60px; height: 3px;
          background: #00AD4C; border-radius: 2px;
          margin: 0.75rem auto 1.25rem;
        }
        .prg-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px; font-weight: 300; color: #4A4A4A;
          line-height: 1.8; text-align: center; margin: 0;
        }

        /* ── GRILLE ── */
        .prg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: stretch;
        }

        /* ── CARD ── */
        .prg-card {
          border-radius: 14px;
          overflow: hidden;
          display: flex; flex-direction: column;
          border: 0.5px solid #e5e7eb;
          position: relative;
          background: #ffffff;
          transition: box-shadow 0.2s ease;
        }
        .prg-card:hover {
          box-shadow: 0 8px 32px rgba(4,86,39,0.12);
        }

        /* ── IMAGE ── */
        .prg-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          flex-shrink: 0;
        }
        .prg-img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        .prg-card:hover .prg-img { transform: scale(1.04); }

        /* ── BADGE ── */
        .prg-badge {
          position: absolute;
          top: 14px; right: 14px;
          background: #045627;
          color: #A5CE46;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 99px;
          z-index: 1;
        }

        /* ── CORPS ── */
        .prg-body {
          padding: 22px 20px;
          display: flex; flex-direction: column; flex: 1;
          background: #ffffff;
        }

        /* Type */
        .prg-type {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #00AD4C; margin-bottom: 6px;
          display: block;
        }

        /* Titre H3 */
        .prg-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 22px; font-weight: 600;
          color: #2A2A2A; line-height: 1.2; margin: 0 0 4px;
        }

        /* Sous-titre */
        .prg-sous {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; color: #6b7280;
          line-height: 1.5; margin: 0 0 14px;
        }

        /* ── META BAR ── */
        .prg-meta {
          display: flex; align-items: center; gap: 16px;
          padding: 12px 0;
          border-top: 0.5px solid #f3f4f6;
          border-bottom: 0.5px solid #f3f4f6;
          margin-bottom: 14px;
        }
        .prg-meta-item {
          display: flex; align-items: center; gap: 5px;
        }
        .prg-meta-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: #9ca3af;
        }
        .prg-meta-val {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px; font-weight: 500;
          color: #2A2A2A;
        }
        .prg-meta-sep {
          display: block; width: 1px; height: 16px;
          background: #e5e7eb; flex-shrink: 0;
        }

        /* ── TEXTE ── */
        .prg-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px; font-weight: 300;
          color: #4A4A4A; line-height: 1.7;
          text-align: justify; text-align-last: left;
          flex: 1; margin: 0 0 16px;
        }

        /* ── BOUTON ── */
        .prg-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #00AD4C;
          border: 1.5px solid #00AD4C;
          border-radius: 6px; padding: 9px 16px;
          background: transparent;
          width: fit-content;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
          margin-top: auto;
        }
        .prg-cta:hover {
          background: #00AD4C;
          color: #ffffff;
        }

        /* ── MOBILE ≤ 640px ── */
        @media (max-width: 640px) {
          .prg-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .prg-card { transition: none; }
          .prg-img  { transition: none; }
          .prg-cta  { transition: none; }
        }
      `}</style>

    </section>
  )
}
