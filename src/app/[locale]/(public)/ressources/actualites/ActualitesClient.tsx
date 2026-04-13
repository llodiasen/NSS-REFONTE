'use client';

import { useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import type { Article } from "@/data/articles";

// ── Tag config ────────────────────────────────────────────────────────────────

const TAG_CONFIG: Record<string, { bg: string; color: string }> = {
  Formation:   { bg: "#e8f2df", color: "#3b6d11" },
  Mouvement:   { bg: "#dff0f8", color: "#185fa5" },
  Plaidoyer:   { bg: "#fef3e2", color: "#854f0b" },
  Presse:      { bg: "#fef3c7", color: "#92400e" },
  Partenariat: { bg: "#d1fae5", color: "#065f46" },
  Événement:   { bg: "#f3e8ff", color: "#6b21a8" },
};

const FILTER_CONFIG: Record<string, { active: string; label: string }> = {
  Tous:        { active: "#1a3520", label: "Tous" },
  Formation:   { active: "#3b6d11", label: "Formation" },
  Mouvement:   { active: "#185fa5", label: "Mouvement" },
  Plaidoyer:   { active: "#854f0b", label: "Plaidoyer" },
  Presse:      { active: "#92400e", label: "Presse" },
  Partenariat: { active: "#065f46", label: "Partenariat" },
  Événement:   { active: "#6b21a8", label: "Événement" },
};

// ── Reading-time helper ───────────────────────────────────────────────────────

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// ── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const tag = TAG_CONFIG[article.category];
  const mins = readingTime(article.content ?? "");
  const dateStr = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Cloudinary public ID vs full URL
  const isCloudinaryId =
    article.coverUrl && !article.coverUrl.startsWith("http");

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
        {isCloudinaryId && article.coverUrl ? (
          <CldImage
            src={article.coverUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : article.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverUrl}
            alt={article.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, #1a3520 0%, #3b6d11 50%, #0d2015 100%)",
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
          <span style={{ fontSize: "12px", color: "#999", whiteSpace: "nowrap" }}>
            {dateStr}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "serif",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.4,
            marginBottom: "10px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.title}
        </h2>

        {/* Excerpt */}
        <p
          style={{
            fontSize: "13px",
            color: "#1a1a1a",
            lineHeight: 1.6,
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

const PAGE_SIZE = 9;

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
          padding: "24px var(--container-pad)",
          borderBottom: "1px solid #e8e2d9",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Label + pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#555",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Filtrer
            </span>
            {Object.entries(FILTER_CONFIG).map(([key, cfg]) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveFilter(key);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  style={{
                    borderRadius: "100px",
                    padding: "6px 18px",
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    border: isActive ? "none" : "1px solid #ccc",
                    background: isActive ? cfg.active : "transparent",
                    color: isActive ? "#fff" : "#555",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cfg.label}
                </button>
              );
            })}
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
        .act-section { padding-left: var(--container-pad); padding-right: var(--container-pad); }
        @media (max-width: 768px) {
          .act-section { padding-left: 16px !important; padding-right: 16px !important; }
          .act-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
