'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface MetaLine {
  icon:   'calendar' | 'pin' | 'people'
  text:   string
  green?: boolean
}

interface Programme {
  id:         string
  label:      string
  pill:       string
  pillBorder: string
  pillText:   string
  titre:      string
  sousTitre:  string
  image:      string
  imageAlt:   string
  meta:       MetaLine[]
  ctaLabel:   string
  href:       string
}

// ─── Données ─────────────────────────────────────────────────────────────────
const PROGRAMMES: Programme[] = [
  {
    id:         'cifap',
    label:      'PROGRAMME 01',
    pill:       'AGROÉCOLOGIE',
    pillBorder: NSS.vertPrimaire,
    pillText:   NSS.vertPrimaire,
    titre:      'CIFAP',
    sousTitre:  "Camp International de Formation en Agroécologie Paysanne",
    image:      '/images/actualites/nss-cifap-2025.jpg',
    imageAlt:   'CIFAP 2025 — femmes agricultrices en formation agroécologique à Niaguis',
    meta: [
      { icon: 'calendar', text: 'Annuel · 4 éditions depuis 2022' },
      { icon: 'pin',      text: 'Niaguis, Sénégal'               },
      { icon: 'people',   text: '~200 participantes · 8 pays', green: true },
    ],
    ctaLabel: 'Voir les éditions',
    href:     '/fr/programmes/cifap',
  },
  {
    id:         'rencontre',
    label:      'PROGRAMME 02',
    pill:       'RENCONTRES',
    pillBorder: NSS.vertClair,
    pillText:   '#3a6b00',
    titre:      'Rencontre NSS',
    sousTitre:  'Congrès Continentaux Biennaux',
    image:      '/images/actualites/rencontre-2025.jpg',
    imageAlt:   'Rencontre NSS — leaders paysannes en congrès continental',
    meta: [
      { icon: 'calendar', text: 'Biennal · 5–7 jours'    },
      { icon: 'pin',      text: "Afrique de l'Ouest"     },
      { icon: 'people',   text: '500+ leaders · 14 pays', green: true },
    ],
    ctaLabel: 'En savoir plus',
    href:     '/fr/programmes',
  },
  {
    id:         'foire',
    label:      'PROGRAMME 03',
    pill:       'FOIRE',
    pillBorder: NSS.or,
    pillText:   '#7a5200',
    titre:      'Foire NSS',
    sousTitre:  'Foire Annuelle de la Souveraineté Alimentaire',
    image:      '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
    imageAlt:   'Foire NSS — exposition semences paysannes et produits du terroir',
    meta: [
      { icon: 'calendar', text: 'Annuelle · 3 jours'           },
      { icon: 'pin',      text: "Afrique de l'Ouest"           },
      { icon: 'people',   text: '1 000+ visiteurs · 50+ orgs', green: true },
    ],
    ctaLabel: 'En savoir plus',
    href:     '/fr/programmes',
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

// ─── Icône meta ───────────────────────────────────────────────────────────────
function MetaIcon({ type }: { type: MetaLine['icon'] }) {
  if (type === 'calendar') return <Calendar size={13} strokeWidth={1.6} className="prg3-meta-icon" aria-hidden="true" />
  if (type === 'pin')      return <MapPin   size={13} strokeWidth={1.6} className="prg3-meta-icon" aria-hidden="true" />
  return                          <Users    size={13} strokeWidth={1.6} className="prg3-meta-icon" aria-hidden="true" />
}

// ─── Carte programme ─────────────────────────────────────────────────────────
function ProgrammeCard({ p, index }: { p: Programme; index: number }) {
  return (
    <motion.article
      className="prg3-card"
      aria-label={p.titre}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: 0.10 + index * 0.14, ease }}
      whileHover={{ y: -5, transition: { duration: 0.28, ease: 'easeOut' } }}
    >
      {/* ── Image ── */}
      <div className="prg3-img-wrap">
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="prg3-img"
          loading="lazy"
        />
        <div className="prg3-img-ov" aria-hidden="true" />
      </div>

      {/* ── Contenu ── */}
      <div className="prg3-body">

        {/* Label + pill */}
        <div className="prg3-row-top">
          <span className="prg3-label">{p.label}</span>
          <span
            className="prg3-pill"
            style={{ borderColor: p.pillBorder, color: p.pillText }}
          >
            {p.pill}
          </span>
        </div>

        {/* Titre + sous-titre */}
        <div className="prg3-titles">
          <h3 className="prg3-titre">{p.titre}</h3>
          <p className="prg3-sous">{p.sousTitre}</p>
        </div>

        {/* Meta */}
        <ul className="prg3-meta" aria-label={`Infos ${p.titre}`}>
          {p.meta.map(({ icon, text, green }) => (
            <li key={text} className={`prg3-meta-item${green ? ' prg3-meta-green' : ''}`}>
              <MetaIcon type={icon} />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href={p.href} className="prg3-cta" aria-label={`${p.ctaLabel} — ${p.titre}`}>
          {p.ctaLabel} →
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
            <span className="prg3-eyebrow-text">NOS PROGRAMMES</span>
            <span className="prg3-eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h2 id="prg3-titre" className="prg3-h2" {...inViewScale(0.16)}>
            Programmes <em>nés du terrain.</em>
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
            Trois programmes phares qui incarnent la mission NSS — formation
            agroécologique, gouvernance continentale et valorisation des savoirs paysans.
          </motion.p>

        </header>

        {/* ════ Grille 3 cartes ════ */}
        <ul className="prg3-grid" role="list" aria-label="Programmes du mouvement NSS">
          {PROGRAMMES.map((p, i) => (
            <li key={p.id} role="listitem">
              <ProgrammeCard p={p} index={i} />
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
            Tous nos programmes
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
          overflow: hidden;
        }

        .prg3-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 72px;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        /* ── Carte ── */
        .prg3-card {
          background: #ffffff;
          border: 1px solid #E4E0DB;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
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

        /* ── Image ── */
        .prg3-img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          flex-shrink: 0;
          overflow: hidden;
          background: #0a1a0e;
        }
        .prg3-img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.55s ease;
        }
        .prg3-card:hover .prg3-img { transform: scale(1.04); }
        .prg3-img-ov {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0)    55%,
            rgba(4,86,39,0.35) 100%
          );
          z-index: 1;
        }

        /* ── Corps ── */
        .prg3-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }

        /* Label + pill */
        .prg3-row-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .prg3-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ABABAB;
        }
        .prg3-pill {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 10px;
          border: 1px solid;
          border-radius: 20px;
          flex-shrink: 0;
        }

        /* Titres */
        .prg3-titles { display: flex; flex-direction: column; gap: 5px; }
        .prg3-titre {
          font-family: var(--font-display), Georgia, serif;
          font-size: 26px;
          font-weight: 700;
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

        /* Meta */
        .prg3-meta {
          list-style: none;
          padding: 14px 0 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
          border-top: 1px solid #F0EDE8;
        }
        .prg3-meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          color: ${NSS.vertFonce};
          line-height: 1.4;
        }
        .prg3-meta-green {
          color: ${NSS.vertPrimaire};
          font-weight: 600;
        }
        .prg3-meta-icon {
          color: ${NSS.vertPrimaire};
          flex-shrink: 0;
        }

        /* CTA */
        .prg3-cta {
          display: inline-block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: ${NSS.vertPrimaire};
          text-decoration: none;
          margin-top: auto;
          padding-top: 4px;
          transition: color 0.22s ease;
        }
        .prg3-cta:hover { color: ${NSS.vertFonce}; }

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
