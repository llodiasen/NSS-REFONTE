'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import type { Article } from "@/data/articles";

// ── Tag config ────────────────────────────────────────────────────────────────

const TAG_CONFIG: Record<string, { bg: string; color: string }> = {
  Formation:    { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Mouvement:    { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Plaidoyer:    { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Presse:       { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Partenariat:  { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Événement:    { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Entretien:    { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Agroécologie: { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Portrait:     { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Alimentation: { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  Gastronomie:  { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
  NSS:          { bg: "rgba(29,158,117,0.10)", color: "#1D9E75" },
};

const FILTER_CONFIG: Record<string, { active: string; label: string }> = {
  Tous:         { active: "#1a3520", label: "Tous" },
  Agroécologie: { active: "#3b6d11", label: "Agroécologie" },
  Événement:    { active: "#6b21a8", label: "Événement" },
  Presse:       { active: "#92400e", label: "Presse" },
  Portrait:     { active: "#185fa5", label: "Portrait" },
  Entretien:    { active: "#065f46", label: "Entretien" },
  Formation:    { active: "#854f0b", label: "Formation" },
  Alimentation: { active: "#b45309", label: "Alimentation" },
};

// ── Reading-time helper ───────────────────────────────────────────────────────

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// ── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const [imgError, setImgError] = useState(false);
  const tag = TAG_CONFIG[article.category];
  const mins = readingTime(article.content ?? "");
  const dateStr = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Cloudinary public ID : ni URL externe (http/https) ni chemin local (/)
  const isCloudinaryId =
    article.coverUrl &&
    !article.coverUrl.startsWith("http") &&
    !article.coverUrl.startsWith("/");

  const showFallback = !article.coverUrl || imgError;

  return (
    <article
      style={{
        background: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e8e2d9",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      className="actualite-card"
    >
      {/* Image */}
      <div
        style={{
          height: "200px",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {showFallback ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #1a3520 0%, #3b6d11 50%, #0d2015 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "serif",
                fontSize: "2rem",
                fontWeight: 700,
                color: "rgba(143,190,107,0.5)",
                letterSpacing: "0.1em",
                userSelect: "none",
              }}
            >
              NSS
            </span>
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
      </div>

      {/* Body */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Tag + date */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          {tag && (
            <span
              style={{
                backgroundColor: tag.bg,
                color: tag.color,
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "100px",
                letterSpacing: "0.03em",
              }}
            >
              {article.category}
            </span>
          )}
          <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#999", whiteSpace: "nowrap" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#999" strokeWidth="1.8" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="#999" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            {dateStr}
          </span>
        </div>

        {/* Title */}
        <h2 style={{ marginBottom: "10px" }}>
          <Link
            href={`/fr/ressources/actualites/${article.slug}`}
            style={{
              fontFamily: "serif",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.4,
              textDecoration: "none",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="act-title-link"
          >
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p
          className="act-excerpt"
          style={{
            fontSize: "15px",
            color: "#1a1a1a",
            lineHeight: 1.6,
            textAlign: "justify",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {article.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #e8e2d9",
            paddingTop: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href={`/fr/ressources/actualites/${article.slug}`}
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#3b6d11",
              textDecoration: "none",
            }}
          >
            Lire l&apos;article →
          </Link>
          <span style={{ fontSize: "12px", color: "#aaa" }}>{mins} min</span>
        </div>
      </div>
    </article>
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
      {/* ── Filters bar ── */}
      <div
        className="act-section"
        style={{
          background: "#F6F3EE",
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
          {/* Title + pills */}
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
                    onClick={() => {
                      setActiveFilter(key);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    style={{
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "13px",
                      fontWeight: isActive ? 600 : 500,
                      border: isActive ? `1px solid #0f2b1a` : "1px solid #dde8de",
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

          {/* Counter */}
          <span
            style={{
              fontSize: "13px",
              color: "#888",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <section
        className="act-section"
        style={{
          background: "#F6F3EE",
          padding: "40px var(--container-pad)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div
            className="act-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {visible.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* ── Load more ── */}
          {hasMore && (
            <div
              style={{
                marginTop: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
              }}
            >
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

      {/* Hover effect via global style injection */}
      <style>{`
        .actualite-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
        }
        .act-title-link:hover { color: #1a6b3c !important; }
        .act-section { overflow-x: hidden; }
        @media (max-width: 768px) {
          .act-grid { grid-template-columns: 1fr !important; }
          .act-filters-row { flex-direction: column !important; align-items: flex-start !important; }
          .act-excerpt { text-align: justify !important; }
        }
        @media (max-width: 768px) {
          .act-pills { flex-wrap: wrap !important; gap: 6px !important; }
          .act-pill-btn { font-size: 12px !important; padding: 5px 11px !important; }
        }
      `}</style>
    </>
  );
}
