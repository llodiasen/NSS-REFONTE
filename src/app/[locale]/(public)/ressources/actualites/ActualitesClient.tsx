'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { Calendar } from "lucide-react";
import type { Article } from "@/data/articles";

// ── Badge couleurs par catégorie (palette NSS stricte) ────────────────────────
const TAG_CONFIG: Record<string, { bg: string; color: string }> = {
  Agroécologie: { bg: "#045627", color: "#ffffff" },
  Événement:    { bg: "#00AD4C", color: "#ffffff" },
  Formation:    { bg: "#A5CE46", color: "#045627" },
  Presse:       { bg: "#E8A838", color: "#045627" },
  Portrait:     { bg: "#F5EDD6", color: "#045627" },
  Entretien:    { bg: "#045627", color: "#ffffff" },
  Alimentation: { bg: "#A5CE46", color: "#045627" },
  Mouvement:    { bg: "#00AD4C", color: "#ffffff" },
  Plaidoyer:    { bg: "#045627", color: "#ffffff" },
  Partenariat:  { bg: "#E8A838", color: "#045627" },
  Gastronomie:  { bg: "#A5CE46", color: "#045627" },
  NSS:          { bg: "#045627", color: "#ffffff" },
};

const FILTER_CONFIG: Record<string, { active: string; label: string }> = {
  Tous:         { active: "#1a3520", label: "Tous"         },
  Agroécologie: { active: "#3b6d11", label: "Agroécologie" },
  Événement:    { active: "#6b21a8", label: "Événement"    },
  Presse:       { active: "#92400e", label: "Presse"       },
  Portrait:     { active: "#185fa5", label: "Portrait"     },
  Entretien:    { active: "#065f46", label: "Entretien"    },
  Formation:    { active: "#854f0b", label: "Formation"    },
  Alimentation: { active: "#b45309", label: "Alimentation" },
};

// ── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const [imgError, setImgError] = useState(false);
  const tag = TAG_CONFIG[article.category];

  const dateStr = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

  const isCloudinaryId =
    article.coverUrl &&
    !article.coverUrl.startsWith("http") &&
    !article.coverUrl.startsWith("/");

  const showFallback = !article.coverUrl || imgError;

  return (
    <motion.article
      className="act-card"
      whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
    >
      {/* ── Image 16:9 ── */}
      <Link
        href={`/fr/ressources/actualites/${article.slug}`}
        className="act-card__img-wrap"
        tabIndex={-1}
        aria-hidden="true"
      >
        {showFallback ? (
          <div className="act-card__fallback" aria-hidden="true">
            <span>NSS</span>
          </div>
        ) : isCloudinaryId && article.coverUrl ? (
          <CldImage
            src={article.coverUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <Image
            src={article.coverUrl!}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            onError={() => setImgError(true)}
          />
        )}

        {/* Badge catégorie en overlay */}
        {tag && (
          <span
            className="act-card__badge"
            style={{ background: tag.bg, color: tag.color }}
          >
            {article.category}
          </span>
        )}
      </Link>

      {/* ── Corps ── */}
      <div className="act-card__body">
        {/* Date en haut avec icône vert */}
        <time className="act-card__date" dateTime={article.publishedAt}>
          <Calendar size={11} strokeWidth={1.8} className="act-card__date-icon" aria-hidden="true" />
          {dateStr}
        </time>

        <h2 className="act-card__titre">
          <Link href={`/fr/ressources/actualites/${article.slug}`} className="act-card__titre-link">
            {article.title}
          </Link>
        </h2>

        <p className="act-card__desc">{article.excerpt}</p>

        <div className="act-card__footer">
          <Link
            href={`/fr/ressources/actualites/${article.slug}`}
            className="act-card__cta"
          >
            Lire l&apos;article →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ── Main client component ─────────────────────────────────────────────────────

const PAGE_SIZE = 18;

export default function ActualitesClient({ articles }: { articles: Article[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    activeFilter === "Tous"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      {/* ── Section NOTRE ACTION ── */}
      <div className="act-section" style={{ background: "#ffffff", padding: "0 var(--container-pad)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <section className="notre-action" aria-label="Notre action">
            <div className="na-left">
              <p className="na-surtitre">NOTRE ACTION</p>
              <h2 className="na-titre">
                Nourrir <em>sans dégrader.</em>
              </h2>
            </div>
            <div className="na-right">
              <p className="na-desc">
                L&apos;agroécologie paysanne est au cœur de l&apos;action NSS.
                En valorisant les savoirs traditionnels, les semences locales
                et la biodiversité, nous accompagnons les femmes rurales vers
                une agriculture durable, souveraine et résistante au changement
                climatique. Formations pratiques, camps d&apos;échange et
                démonstrations en champ-école paysans permettent à des milliers
                de femmes de s&apos;approprier des techniques accessibles et
                reproductibles dans leurs communautés.
              </p>
              <div className="na-stats">
                <div className="na-stat">
                  <span className="na-stat-val">500+</span>
                  <span className="na-stat-label">Associations engagées en agroécologie paysanne</span>
                </div>
                <div className="na-stat">
                  <span className="na-stat-val">14</span>
                  <span className="na-stat-label">Pays couverts par le réseau NSS</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── Barre de filtres ── */}
      <div
        className="act-section"
        style={{
          background: "#ffffff",
          padding: "28px var(--container-pad)",
          borderBottom: "1px solid #e8e2d9",
        }}
      >
        <div
          className="act-filters-row"
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div className="act-pills-wrap" style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#6b8c72", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              Parcourir par thème
            </p>
            <div className="act-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {Object.entries(FILTER_CONFIG).map(([key, cfg]) => {
                const isActive = activeFilter === key;
                return (
                  <button
                    key={key}
                    className="act-pill-btn"
                    onClick={() => { setActiveFilter(key); setVisibleCount(PAGE_SIZE); }}
                    style={{
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "13px",
                      fontWeight: isActive ? 600 : 500,
                      border: isActive ? "1px solid #0f2b1a" : "1px solid #dde8de",
                      background: isActive ? "#0f2b1a" : "#fff",
                      color: isActive ? "#e8f5eb" : "#2a2a2a",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#1a6b3c";
                        (e.currentTarget as HTMLButtonElement).style.color = "#1a6b3c";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#dde8de";
                        (e.currentTarget as HTMLButtonElement).style.color = "#2a2a2a";
                      }
                    }}
                  >
                    {cfg.label}
                  </button>
                );
              })}
            </div>
          </div>
          <span style={{ fontSize: "13px", color: "#888", fontVariantNumeric: "tabular-nums" }}>
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grille articles ── */}
      <section
        className="act-section"
        style={{ background: "#ffffff", padding: "40px var(--container-pad) 64px" }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div className="act-grid">
            {visible.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* ── Charger plus (intact) ── */}
          {hasMore && (
            <div style={{ marginTop: "56px", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
              <div style={{ flex: 1, height: "1px", background: "#d4cfc9" }} />
              <button
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                style={{
                  padding: "12px 32px",
                  borderRadius: "100px",
                  border: "1.5px solid #1a3520",
                  background: "transparent",
                  color: "#1a3520",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#1a3520";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1a3520";
                }}
              >
                Charger plus
              </button>
              <div style={{ flex: 1, height: "1px", background: "#d4cfc9" }} />
            </div>
          )}
        </div>
      </section>

      {/* ── Styles ── */}
      <style>{`
        /* ── Carte ── */
        .act-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          border: 0.5px solid #E4E2DC;
          border-left: 2px solid #E4E2DC;
          border-radius: 8px;
          overflow: hidden;
          transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
        }
        .act-card:hover {
          border-left-color: #00AD4C;
          box-shadow: 0 8px 24px rgba(0,173,76,0.10);
        }

        .act-card__img-wrap {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          flex-shrink: 0;
        }

        .act-card__fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a3520 0%, #3b6d11 50%, #0d2015 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .act-card__fallback span {
          font-family: serif;
          font-size: 2rem;
          font-weight: 700;
          color: rgba(143,190,107,0.5);
          letter-spacing: 0.1em;
          user-select: none;
        }

        .act-card__badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 3px;
          pointer-events: none;
        }

        .act-card__body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .act-card__titre { margin: 0 0 10px; }
        .act-card__titre-link {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.22;
          text-decoration: none;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
        }
        .act-card__titre-link:hover { color: #00AD4C; }

        .act-card__desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #2C2C28;
          line-height: 1.8;
          text-align: justify;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: auto;
        }

        .act-card__footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #F0EEE8;
        }

        .act-card__date {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #888780;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
        }
        .act-card__date-icon { color: #00AD4C; flex-shrink: 0; }

        .act-card__cta {
          font-size: 13px;
          font-weight: 600;
          color: #00AD4C;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .act-card__cta:hover { color: #045627; }

        /* ── Grille 3 colonnes ── */
        .act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem 2rem;
        }

        /* ── Section NOTRE ACTION ── */
        .notre-action {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          padding: 3rem 0 2.5rem;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 2.5rem;
        }
        .na-surtitre {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #00AD4C;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .na-titre {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.15;
          color: #111;
          margin: 0;
        }
        .na-titre em {
          font-style: italic;
          font-weight: 400;
        }
        .na-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          text-align: justify;
          margin-bottom: 2rem;
        }
        .na-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .na-stat-val {
          display: block;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 40px;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
          margin-bottom: 6px;
        }
        .na-stat-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #777;
          line-height: 1.4;
        }

        /* ── Responsive ── */
        .act-section { overflow-x: hidden; }

        @media (max-width: 900px) {
          .act-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .notre-action { grid-template-columns: 1fr; gap: 1.5rem; }
          .na-titre { font-size: 28px; }
        }
        @media (max-width: 600px) {
          .act-grid { grid-template-columns: 1fr !important; }
          .act-filters-row { flex-direction: column !important; align-items: flex-start !important; }
          .act-pills { flex-wrap: wrap !important; gap: 6px !important; }
          .act-pill-btn { font-size: 12px !important; padding: 5px 11px !important; }
          .na-stats { grid-template-columns: 1fr; }
          .na-titre { font-size: 24px; }
        }
      `}</style>
    </>
  );
}
