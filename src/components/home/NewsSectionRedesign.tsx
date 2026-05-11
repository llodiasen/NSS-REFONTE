'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { ARTICLES, type Article } from '@/data/articles'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── 3 articles les plus récents ─────────────────────────────────────────────
function getLatest(): Article[] {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
}

// ─── Catégorie → couleur pill ─────────────────────────────────────────────────
const CAT_CONFIG: Record<string, { bg: string; color: string }> = {
  Formation:    { bg: 'rgba(0,173,76,0.10)',   color: NSS.vertFonce },
  Mouvement:    { bg: 'rgba(0,173,76,0.10)',   color: NSS.vertFonce },
  Plaidoyer:    { bg: 'rgba(165,206,70,0.18)', color: '#2a4a10'     },
  Presse:       { bg: 'rgba(232,168,56,0.14)', color: '#7a5200'     },
  Agroécologie: { bg: 'rgba(0,173,76,0.10)',   color: NSS.vertFonce },
}
const DEFAULT_CAT = { bg: 'rgba(0,173,76,0.08)', color: NSS.vertFonce }

// ─── Formatage date ───────────────────────────────────────────────────────────
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

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

// ─── Carte article ────────────────────────────────────────────────────────────
function NewsCard({ article, index }: { article: Article; index: number }) {
  const cat = CAT_CONFIG[article.category] ?? DEFAULT_CAT

  return (
    <motion.article
      className="nws-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: 0.10 + index * 0.12, ease }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Accent gauche */}
      <span className="nws-card__bar" aria-hidden="true" />

      {/* Image */}
      <Link
        href={`/fr/ressources/actualites/${article.slug}`}
        className="nws-card__img-wrap"
        tabIndex={-1}
        aria-hidden="true"
      >
        {article.coverUrl ? (
          <Image
            src={article.coverUrl}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="nws-card__fallback" aria-hidden="true">
            <span>NSS</span>
          </div>
        )}
        <div className="nws-card__img-overlay" aria-hidden="true" />
      </Link>

      {/* Corps */}
      <div className="nws-card__body">
        <div className="nws-card__meta">
          <span
            className="nws-card__cat"
            style={{ background: cat.bg, color: cat.color }}
          >
            {article.category}
          </span>
          <time className="nws-card__date" dateTime={article.publishedAt}>
            <Calendar size={11} strokeWidth={1.8} className="nws-card__date-icon" aria-hidden="true" />
            {formatDate(article.publishedAt)}
          </time>
        </div>

        <h3 className="nws-card__titre">
          <Link href={`/fr/ressources/actualites/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="nws-card__excerpt">{article.excerpt}</p>

        <div className="nws-card__sep" aria-hidden="true" />
        <Link
          href={`/fr/ressources/actualites/${article.slug}`}
          className="nws-card__cta"
          aria-label={`Lire l'article : ${article.title}`}
        >
          Lire l&apos;article
          <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
            <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

// ─── Section principale ───────────────────────────────────────────────────────
export default function NewsSectionRedesign() {
  const latest = getLatest()

  return (
    <section className="nws-section" aria-labelledby="nws-titre">

      {/* Grille de fond subtile */}
      <div className="nws-pattern" aria-hidden="true" />

      <div className="nws-wrap">

        {/* ════════ En-tête ════════ */}
        <header className="nws-header">

          <motion.div className="nws-eyebrow" {...inView(0.06)}>
            <span className="nws-eyebrow-line" aria-hidden="true" />
            <span className="nws-eyebrow-text">ACTUALITÉS</span>
            <span className="nws-eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h2 id="nws-titre" className="nws-h2" {...inViewScale(0.16)}>
            Le terrain <em>parle.</em>
          </motion.h2>
          <motion.span
            className="nws-underline"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />

          <motion.p className="nws-intro" {...inView(0.26)}>
            Semences défendues, terres préservées, voix amplifiées — les femmes
            rurales de NSS écrivent chaque jour un nouveau chapitre.
          </motion.p>
        </header>

        {/* ════════ Grille 3 cartes ════════ */}
        <ul
          className="nws-grid"
          role="list"
          aria-label="Dernières actualités NSS"
        >
          {latest.map((article, i) => (
            <li key={article.id} role="listitem">
              <NewsCard article={article} index={i} />
            </li>
          ))}
        </ul>

        {/* ════════ Séparateur + CTA ════════ */}
        <motion.div className="nws-footer" {...inView(0.20)}>
          <motion.div
            className="nws-sep"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.90, ease }}
            style={{ transformOrigin: 'center' }}
          />
          <Link href="/fr/ressources/actualites" className="nws-cta">
            Toutes les actualités
            <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
              <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Section ── */
        .nws-section {
          position: relative;
          background: #FAFAF8;
          border-top: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
        }

        /* Grille de fond */
        .nws-pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(-55deg, transparent, transparent 30px, rgba(0,0,0,0.015) 30px, rgba(0,0,0,0.015) 32px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Wrap ── */
        .nws-wrap {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 82px 24px;
        }

        /* ── En-tête ── */
        .nws-header {
          text-align: center;
          margin-bottom: 54px;
        }

        /* ── Eyebrow centré ── */
        .nws-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .nws-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 56px;
          height: 1px;
          background: rgba(165,206,70,0.40);
        }
        .nws-eyebrow-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${NSS.vertClair};
          white-space: nowrap;
        }

        /* ── H2 ── */
        .nws-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          margin: 0 0 14px;
          letter-spacing: -0.015em;
        }
        .nws-h2 em {
          font-style: italic;
          color: ${NSS.vertPrimaire};
        }
        .nws-underline {
          display: block;
          height: 2px;
          width: 72px;
          background: ${NSS.vertClair};
          border-radius: 2px;
          margin: 12px auto 24px;
        }

        /* ── Intro ── */
        .nws-intro {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.78;
          color: #2C2C28;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── Grille ── */
        .nws-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        /* ── Carte ── */
        .nws-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 2px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition:
            box-shadow 0.28s ease,
            border-color 0.28s ease;
          cursor: pointer;
        }
        .nws-card:hover {
          box-shadow: 0 16px 44px rgba(4,86,39,0.10);
          border-color: rgba(0,173,76,0.20);
        }

        /* Accent gauche */
        .nws-card__bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: ${NSS.vertPrimaire};
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.28s ease;
          z-index: 3;
        }
        .nws-card:hover .nws-card__bar { transform: scaleY(1); }

        /* Image */
        .nws-card__img-wrap {
          position: relative;
          display: block;
          height: 200px;
          overflow: hidden;
          background: #c8dfc8;
          flex-shrink: 0;
        }
        .nws-card__img-wrap img {
          transition: transform 0.55s ease;
        }
        .nws-card:hover .nws-card__img-wrap img {
          transform: scale(1.04);
        }
        .nws-card__fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #021f0e 0%, ${NSS.vertFonce} 60%, #007a37 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nws-card__fallback span {
          font-family: var(--font-display), Georgia, serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: rgba(165,206,70,0.45);
          letter-spacing: 0.15em;
        }
        .nws-card__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.28) 100%);
          z-index: 1;
          transition: opacity 0.28s ease;
        }
        .nws-card:hover .nws-card__img-overlay { opacity: 0.7; }

        /* Corps */
        .nws-card__body {
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .nws-card__meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .nws-card__cat {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 2px;
        }
        .nws-card__date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #999;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .nws-card__date-icon {
          color: ${NSS.vertPrimaire};
          flex-shrink: 0;
        }
        .nws-card__titre {
          margin: 0;
        }
        .nws-card__titre a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.22;
          color: #0A0A0A;
          text-decoration: none;
          transition: color 0.22s ease;
        }
        .nws-card__titre a:hover { color: ${NSS.vertFonce}; }
        .nws-card__excerpt {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.72;
          color: #4A4A4A;
          text-align: justify;
          hyphens: auto;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .nws-card__sep {
          height: 1px;
          background: rgba(0,0,0,0.07);
          margin: 2px 0;
        }
        .nws-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: ${NSS.vertFonce};
          text-decoration: none;
          border-bottom: 1.5px solid ${NSS.vertClair};
          padding-bottom: 2px;
          transition: color 0.22s ease, gap 0.20s ease;
          align-self: flex-start;
        }
        .nws-card__cta:hover { color: ${NSS.vertPrimaire}; gap: 14px; }

        /* ── Séparateur + footer ── */
        .nws-footer {
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .nws-sep {
          width: 100%;
          max-width: 640px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D0D0D0 30%, #D0D0D0 70%, transparent);
        }
        .nws-cta {
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
        .nws-cta:hover { color: ${NSS.vertPrimaire}; gap: 16px; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .nws-wrap { padding: 70px 24px; }
        }
        @media (max-width: 1024px) {
          .nws-wrap { padding: 64px 20px; }
          .nws-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .nws-wrap { padding: 56px 20px; }
          .nws-h2 { line-height: 1.2; }
          .nws-header { margin-bottom: 40px; }
          .nws-card__titre a { font-size: 17px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 640px) {
          .nws-grid { grid-template-columns: 1fr; }
          .nws-wrap { padding: 48px 16px; }
          .nws-h2 { line-height: 1.2; }
          .nws-intro { font-size: 14px; }
          .nws-card__titre a { font-size: 17px; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .nws-card { transition: box-shadow 0.2s ease; }
          .nws-card__bar { transition: none; }
          .nws-card__img-wrap img { transition: none; }
        }
      `}</style>
    </section>
  )
}
