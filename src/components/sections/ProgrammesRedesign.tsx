'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface MetaItem {
  icon:    string
  label:   string
  value:   string
  detail?: string
}

interface Evenement {
  id:           string
  titre:        string
  sousTitre:    string
  gradientFrom: string
  gradientTo:   string
  image?:       string
  imageAlt?:    string
  status:       'upcoming' | 'live'
  meta:         [MetaItem, MetaItem]
  description:  string
  ctaLabel:     string
  href:         string
}

// ─── Données ─────────────────────────────────────────────────────────────────
const EVENEMENTS: Evenement[] = [
  {
    id:           'cifap',
    titre:        'CIFAP',
    sousTitre:    'Camp International de Formation en Agroécologie Paysanne',
    gradientFrom: '#045627',
    gradientTo:   '#00AD4C',
    image:        '/images/programmes/Cifap/Cifap 2025 à Niaguis (67).jpg',
    imageAlt:     'CIFAP 2025 — formation agroécologique à Niaguis, Sénégal',
    status:       'upcoming',
    meta: [
      { icon: '📅', label: 'DATES', value: 'Sept. 2026' },
      { icon: '📍', label: 'LIEU',  value: 'Niaguis',    detail: 'Sénégal'               },
    ],
    description:  "Un espace d'apprentissage collectif où les paysannes agroécologistes se forment, échangent et construisent ensemble des solutions pour la souveraineté alimentaire.",
    ctaLabel:     'Voir les éditions',
    href:         '/programmes/cifap',
  },
  {
    id:           'rencontre',
    titre:        'Rencontre NSS',
    sousTitre:    'Congrès Continentaux Biennaux',
    gradientFrom: '#1a4a0a',
    gradientTo:   '#A5CE46',
    image:        '/images/programmes/Cifap/foire-du-benin-1.webp',
    imageAlt:     'Rencontre NSS — congrès continental des leaders paysannes',
    status:       'upcoming',
    meta: [
      { icon: '📅', label: 'DATES', value: '2027 (Prév.)' },
      { icon: '📍', label: 'LIEU',  value: "Afr. de l'Ouest"                     },
    ],
    description:  "Une plateforme continentale réunissant les leaders et actrices de la souveraineté alimentaire pour débattre, co-construire et amplifier les mouvements agroécologiques panafricains.",
    ctaLabel:     'En savoir plus',
    href:         '/programmes/rencontre',
  },
  {
    id:           'foire',
    titre:        'Foire NSS',
    sousTitre:    'Foire Annuelle de la Souveraineté Alimentaire',
    gradientFrom: '#2a5c10',
    gradientTo:   '#E8A838',
    image:        '/images/programmes/Cifap/Foire-Djimini-2024-4-770x415.webp',
    imageAlt:     'Foire NSS — Foire de Djimini 2024, souveraineté alimentaire',
    status:       'upcoming',
    meta: [
      { icon: '📅', label: 'DATES', value: 'Sept. 2026' },
      { icon: '📍', label: 'LIEU',  value: "Afr. de l'Ouest"                    },
    ],
    description:  "Un festival d'agroécologie où paysannes, organisations et visiteurs célèbrent, découvrent et échangent les pratiques et innovations pour nourrir l'Afrique par elle-même.",
    ctaLabel:     'En savoir plus',
    href:         '/programmes/foire',
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
  initial:     { opacity: 0, y: 32, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.80, delay, ease },
})

// ─── Carte événement ─────────────────────────────────────────────────────────
function EvenementCard({ ev, index }: { ev: Evenement; index: number }) {
  return (
    <motion.article
      className="prg3-card"
      aria-label={ev.titre}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: 0.10 + index * 0.14, ease }}
      whileHover={{ y: -5, transition: { duration: 0.28, ease: 'easeOut' } }}
    >
      {/* ── Image ou gradient placeholder ── */}
      <div className="prg3-img-wrap">
        {ev.image ? (
          <Image
            src={ev.image}
            alt={ev.imageAlt ?? ev.titre}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="prg3-img"
            loading="lazy"
          />
        ) : (
          <div
            className="prg3-gradient"
            style={{ background: `linear-gradient(135deg, ${ev.gradientFrom} 0%, ${ev.gradientTo} 100%)` }}
            aria-hidden="true"
          />
        )}
        {ev.status === 'upcoming' && (
          <span className="prg3-badge" aria-label="Événement à venir">À VENIR</span>
        )}
      </div>

      {/* ── Contenu ── */}
      <div className="prg3-body">

        {/* Titre + sous-titre */}
        <div className="prg3-titles">
          <h3 className="prg3-titre">{ev.titre}</h3>
          <p className="prg3-sous">{ev.sousTitre}</p>
        </div>

        {/* Meta — horizontale */}
        <div className="prg3-meta-row" aria-label={`Infos ${ev.titre}`}>
          {ev.meta.map((item, i) => (
            <>
              {i > 0 && <span key={`sep-${i}`} className="prg3-meta-sep" aria-hidden="true" />}
              <div key={item.label} className="prg3-meta-item">
                <span className="prg3-meta-label">{item.icon} {item.label}</span>
                <span className="prg3-meta-value">{item.value}</span>
                {item.detail && <span className="prg3-meta-detail">{item.detail}</span>}
              </div>
            </>
          ))}
        </div>

        {/* Description */}
        <p className="prg3-desc">{ev.description}</p>

        {/* CTA */}
        <Link href={ev.href} className="prg3-cta" aria-label={`${ev.ctaLabel} — ${ev.titre}`}>
          {ev.ctaLabel} →
        </Link>

      </div>
    </motion.article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ProgrammesRedesign() {
  return (
    <section className="prg3-section" aria-labelledby="prg3-titre">

      <div className="prg3-wrap">

        {/* ════ En-tête ════ */}
        <header className="prg3-header">

          <motion.div className="prg3-eyebrow" {...inView(0.06)}>
            <span className="prg3-eyebrow-line" aria-hidden="true" />
            <span className="prg3-eyebrow-text">PROCHAINS ÉVÉNEMENTS</span>
            <span className="prg3-eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h2 id="prg3-titre" className="prg3-h2" {...inViewScale(0.16)}>
            Prochains <em>événements.</em>
          </motion.h2>
          <motion.span
            className="prg3-underline"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />

          <motion.p className="prg3-intro" {...inView(0.26)}>
            Formation, congrès, foire — trois rendez-vous qui rassemblent
            les femmes rurales d&apos;Afrique de l&apos;Ouest autour de la souveraineté alimentaire.
          </motion.p>

        </header>

        {/* ════ Grille 3 cartes ════ */}
        <ul className="prg3-grid" role="list" aria-label="Prochains événements NSS">
          {EVENEMENTS.map((ev, i) => (
            <li key={ev.id} role="listitem">
              <EvenementCard ev={ev} index={i} />
            </li>
          ))}
        </ul>

        {/* ════ Footer CTA global ════ */}
        <motion.div className="prg3-footer" {...inView(0.18)}>
          <motion.div
            className="prg3-sep"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.90, ease }}
            style={{ transformOrigin: 'center' }}
          />
          <Link href="/fr/programmes" className="prg3-all">
            Voir tous nos programmes
            <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
              <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* ════ Styles ════ */}
      <style>{`
        /* ── Section ── */
        .prg3-section {
          background: #ffffff;
          border-top: 1px solid rgba(0,173,76,0.08);
        }

        .prg3-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 72px;
          box-sizing: border-box;
        }

        /* ── En-tête ── */
        .prg3-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .prg3-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .prg3-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 56px;
          height: 1px;
          background: rgba(165,206,70,0.40);
        }
        .prg3-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }
        .prg3-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          margin: 0 0 14px;
          letter-spacing: -0.015em;
        }
        .prg3-h2 em { font-style: italic; color: ${NSS.vertClair}; }
        .prg3-underline {
          display: block;
          height: 2px;
          width: 72px;
          background: ${NSS.vertClair};
          border-radius: 2px;
          margin: 12px auto 24px;
        }
        .prg3-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.78;
          color: #2C2C28;
          max-width: 62ch;
          margin: 0 auto;
        }

        /* ── Grille ── */
        .prg3-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: start;
        }
        .prg3-grid > li {
          min-width: 0;
        }

        /* ── Carte ── */
        .prg3-card {
          background: #ffffff;
          border: 1px solid #E4E0DB;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
          width: 100%;
          box-shadow: 0 1px 6px rgba(0,0,0,0.05);
          transition:
            box-shadow   0.28s ease,
            border-color 0.28s ease;
          cursor: default;
        }
        .prg3-card:hover {
          box-shadow: 0 10px 36px rgba(4,86,39,0.11);
          border-color: rgba(0,173,76,0.28);
        }

        /* ── Image / Gradient ── */
        .prg3-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .prg3-img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.55s ease;
        }
        .prg3-card:hover .prg3-img { transform: scale(1.04); }
        .prg3-gradient {
          width: 100%;
          height: 100%;
        }
        .prg3-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          background: #045627;
          color: #F5EDD6;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 2px;
        }

        /* ── Corps ── */
        .prg3-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }

        /* Titres */
        .prg3-titles { display: flex; flex-direction: column; gap: 5px; }
        .prg3-titre {
          font-family: var(--font-display), Georgia, serif;
          font-size: 26px;
          font-weight: 500;
          color: #111111;
          margin: 0;
          line-height: 1.12;
          letter-spacing: -0.01em;
        }
        .prg3-sous {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #999;
          margin: 0;
          line-height: 1.5;
          font-weight: 400;
        }

        /* Meta — horizontale */
        .prg3-meta-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
          border-top: 1px solid #F0EDE8;
          padding-top: 14px;
        }
        .prg3-meta-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .prg3-meta-sep {
          display: block;
          width: 1px;
          height: 16px;
          background: #E4E0DB;
          flex-shrink: 0;
          align-self: center;
          margin: 0 10px;
        }
        .prg3-meta-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9CA3AF;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .prg3-meta-value {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: ${NSS.vertFonce};
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }
        .prg3-meta-detail {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #9CA3AF;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Description */
        .prg3-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #2C2C28;
          line-height: 1.6;
          margin: 0;
          text-align: justify;
          hyphens: auto;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* CTA */
        .prg3-cta {
          display: inline-block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${NSS.vertFonce};
          text-decoration: none;
          margin-top: auto;
          padding: 8px 16px;
          border: 1px solid ${NSS.vertClair};
          border-radius: 4px;
          align-self: flex-start;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .prg3-cta:hover {
          background: ${NSS.vertPrimaire};
          color: #fff;
          border-color: ${NSS.vertPrimaire};
        }

        /* ── Footer ── */
        .prg3-footer {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .prg3-sep {
          width: 100%;
          max-width: 640px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D0D0D0 30%, #D0D0D0 70%, transparent);
        }
        .prg3-all {
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
        .prg3-all:hover { color: ${NSS.vertPrimaire}; gap: 16px; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .prg3-wrap { padding: 72px 20px 64px; }
        }
        @media (max-width: 1024px) {
          .prg3-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .prg3-wrap { padding: 64px 20px 56px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .prg3-wrap { padding: 56px 20px 48px; }
          .prg3-header { margin-bottom: 40px; }
          .prg3-img-wrap { height: 200px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 640px) {
          .prg3-grid { grid-template-columns: 1fr; gap: 18px; }
          .prg3-wrap { padding: 48px 16px 40px; }
          .prg3-img-wrap { height: 190px; }
          .prg3-titre { font-size: 22px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .prg3-card { transition: border-color 0.2s ease; }
          .prg3-img  { transition: none; }
        }
      `}</style>
    </section>
  )
}
