"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ARTICLES, type Article } from "@/data/articles";

/* ─── 3 articles les plus récents ────────────────────────── */
function getLatest(): Article[] {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
}

/* ─── Catégorie → couleur pill ───────────────────────────── */
const CAT_CONFIG: Record<string, { bg: string; color: string }> = {
  Formation:  { bg: "rgba(0,173,76,0.12)",  color: "#045627" },
  Mouvement:  { bg: "rgba(0,173,76,0.12)",  color: "#045627" },
  Plaidoyer:  { bg: "rgba(165,206,70,0.20)", color: "#2a4a10" },
  Presse:     { bg: "rgba(232,168,56,0.15)", color: "#7a5200" },
  Agroécologie: { bg: "rgba(0,173,76,0.12)", color: "#045627" },
};
const DEFAULT_CAT = { bg: "rgba(0,173,76,0.10)", color: "#045627" };

/* ─── Formatage date ─────────────────────────────────────── */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ─── Carte article ──────────────────────────────────────── */
function NewsCard({ article, index }: { article: Article; index: number }) {
  const cat = CAT_CONFIG[article.category] ?? DEFAULT_CAT;
  const dateStr = formatDate(article.publishedAt);

  return (
    <article
      className="nsc"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="nsc__bar" aria-hidden="true" />

      {/* Image */}
      <Link
        href={`/fr/ressources/actualites/${article.slug}`}
        className="nsc__img-wrap"
        tabIndex={-1}
        aria-hidden="true"
      >
        {article.coverUrl ? (
          <Image
            src={article.coverUrl}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="nsc__img-fallback" aria-hidden="true">
            <span>NSS</span>
          </div>
        )}
        <div className="nsc__img-overlay" aria-hidden="true" />
      </Link>

      {/* Corps */}
      <div className="nsc__body">
        {/* Catégorie + date */}
        <div className="nsc__meta">
          <span
            className="nsc__cat"
            style={{ background: cat.bg, color: cat.color }}
          >
            {article.category}
          </span>
          <time
            className="nsc__date"
            dateTime={article.publishedAt}
          >
            {dateStr}
          </time>
        </div>

        {/* Titre */}
        <h3 className="nsc__titre">
          <Link href={`/fr/ressources/actualites/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Extrait */}
        <p className="nsc__excerpt">{article.excerpt}</p>

        {/* Séparateur + CTA */}
        <div className="nsc__sep" aria-hidden="true" />
        <Link
          href={`/fr/ressources/actualites/${article.slug}`}
          className="nsc__cta"
          aria-label={`Lire l'article : ${article.title}`}
        >
          Lire l&apos;article →
        </Link>
      </div>
    </article>
  );
}

/* ─── Section principale ─────────────────────────────────── */
export default function NewsSectionRedesign() {
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLLIElement>(".nsg__item");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const latest = getLatest();

  return (
    <section className="nss-actu" aria-labelledby="nss-actu-heading">
      <div className="nss-actu__pattern" aria-hidden="true" />

      <div className="nss-actu__wrap">
        {/* ── Header ── */}
        <header className="nss-actu__header">
          <div className="nss-actu__eyebrow" role="presentation">
            <span className="nss-actu__line" />
            <span className="nss-actu__eyebrow-txt">Dernières nouvelles</span>
            <span className="nss-actu__line nss-actu__line--rev" />
          </div>

          <h2 id="nss-actu-heading" className="nss-actu__h2">
            Dernières nouvelles{" "}
            <em>du mouvement.</em>
          </h2>

          <p className="nss-actu__sub">
            Rencontres, formations, plaidoyer et victoires — suivez l&apos;actualité
            des 175&nbsp;000 femmes rurales du réseau NSS.
          </p>
        </header>

        {/* ── Grille ── */}
        <ul className="nsg__grid" role="list" ref={gridRef}>
          {latest.map((article, i) => (
            <li
              key={article.id}
              className="nsg__item"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <NewsCard article={article} index={i} />
            </li>
          ))}
        </ul>

        {/* ── Footer CTA ── */}
        <div className="nss-actu__foot">
          <Link
            href="/fr/ressources/actualites"
            className="nss-actu__foot-btn"
            aria-label="Voir toutes les actualités du mouvement NSS"
          >
            Toutes les actualités →
          </Link>
        </div>
      </div>

      <style>{`
        /* ════ Section ════════════════════════════════════════ */
        .nss-actu {
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .nss-actu__pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 30px,
            rgba(0,173,76,0.028) 30px,
            rgba(0,173,76,0.028) 32px
          );
        }
        .nss-actu__wrap {
          position: relative;
          z-index: 1;
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 96px var(--container-pad, 24px);
        }

        /* ════ Header ═════════════════════════════════════════ */
        .nss-actu__header {
          text-align: center;
          margin-bottom: 56px;
        }
        .nss-actu__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 22px;
        }
        .nss-actu__line {
          display: block;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00AD4C);
        }
        .nss-actu__line--rev {
          background: linear-gradient(90deg, #00AD4C, transparent);
        }
        .nss-actu__eyebrow-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .nss-actu__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(22px, 2.8vw, 38px);
          font-weight: 600;
          line-height: 1.1;
          color: #045627;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .nss-actu__h2 em {
          font-style: italic;
          color: #00AD4C;
        }
        .nss-actu__sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 1.75;
          color: #3a5040;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ════ Grille ═════════════════════════════════════════ */
        .nsg__grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        /* ════ Animation reveal ═══════════════════════════════ */
        .nsg__item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .nsg__item[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ════ Card ═══════════════════════════════════════════ */
        .nsc {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: box-shadow 0.28s ease, transform 0.28s ease;
        }
        .nsc:hover {
          box-shadow: 0 16px 44px rgba(4,86,39,0.10);
          transform: translateY(-4px);
        }
        /* Barre gauche vert vif au hover */
        .nsc__bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #00AD4C;
          border-radius: 10px 0 0 10px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.28s ease;
          z-index: 3;
        }
        .nsc:hover .nsc__bar { transform: scaleY(1); }

        /* ── Image ── */
        .nsc__img-wrap {
          position: relative;
          display: block;
          height: 196px;
          overflow: hidden;
          background: #c8dfc8;
          flex-shrink: 0;
        }
        .nsc__img-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #021f0e 0%, #045627 60%, #007a37 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nsc__img-fallback span {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 2.2rem;
          font-weight: 600;
          color: rgba(165,206,70,0.45);
          letter-spacing: 0.15em;
        }
        .nsc__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.02) 0%,
            rgba(0,0,0,0.32) 100%
          );
          z-index: 1;
          transition: opacity 0.28s ease;
        }
        .nsc:hover .nsc__img-overlay { opacity: 0.7; }

        /* ── Corps ── */
        .nsc__body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 9px;
        }
        .nsc__meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .nsc__cat {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 2px;
        }
        .nsc__date {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          color: #7a8a7a;
          white-space: nowrap;
        }
        .nsc__titre {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 600;
          line-height: 1.22;
          color: #045627;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .nsc__titre a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s ease;
        }
        .nsc__titre a:hover { color: #00AD4C; }
        .nsc__excerpt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14.5px;
          line-height: 1.70;
          color: #3a5040;
          margin: 0;
          text-align: justify;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .nsc__sep {
          height: 1px;
          background: rgba(0,0,0,0.07);
          margin: 4px 0 2px;
        }
        .nsc__cta {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #00AD4C;
          text-decoration: none;
          align-self: flex-start;
          transition: color 0.2s ease, letter-spacing 0.2s ease;
        }
        .nsc__cta:hover {
          color: #008f3e;
          letter-spacing: 0.07em;
        }

        /* ════ Footer ═════════════════════════════════════════ */
        .nss-actu__foot {
          text-align: center;
          margin-top: 52px;
        }
        .nss-actu__foot-btn {
          display: inline-block;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #045627;
          border: 1.5px solid #045627;
          padding: 14px 36px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .nss-actu__foot-btn:hover {
          background: #045627;
          color: #F5EDD6;
        }

        /* ════ Responsive ═════════════════════════════════════ */
        @media (max-width: 1024px) {
          .nsg__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .nss-actu__wrap { padding: 72px 20px; }
          .nsg__grid { grid-template-columns: 1fr; }
          .nss-actu__header { margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
}
