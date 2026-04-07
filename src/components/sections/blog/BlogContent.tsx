"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES, type Article } from "@/data/articles";

const FILTERS = ["Tous", "Formation", "Plaidoyer", "Mouvement", "Presse", "Partenariat"];
const PER_PAGE = 6;

const BADGE: Record<string, { bg: string; color: string }> = {
  Presse:      { bg: "#fef3c7", color: "#92400e" },
  Partenariat: { bg: "#d1fae5", color: "#065f46" },
  Formation:   { bg: "#dbeafe", color: "#1e40af" },
  Plaidoyer:   { bg: "#fce7f3", color: "#9d174d" },
  Mouvement:   { bg: "#e0f5ea", color: "#155c3e" },
};

function articleImage(a: Article): string {
  if (a.coverUrl) return a.coverUrl;
  const map: Record<string, string> = {
    Formation:   "/images/actualites/cifap-2024.jpg",
    Plaidoyer:   "/images/galerie/plaidoyer-1.jpg",
    Mouvement:   "/images/actualites/rencontre-2025.jpg",
    Presse:      "/images/actualites/pescara-2024.jpg",
    Partenariat: "/images/galerie/leader-1.jpg",
  };
  return map[a.category] ?? "/images/galerie/rencontre-1.jpg";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

const FEATURED = ARTICLES[0];

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchCat = activeFilter === "Tous" || a.category === activeFilter;
      const q = search.toLowerCase();
      const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeFilter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (f: string) => { setActiveFilter(f); setPage(1); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  const badge = BADGE[FEATURED.category] ?? { bg: "#e0f5ea", color: "#155c3e" };

  return (
    <div style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>

        {/* ── Filtres ── */}
        <div
          className="blog-filters"
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            padding: "24px 0",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                padding: "10px 22px",
                borderRadius: "20px",
                border: activeFilter === f ? "1px solid var(--green-600)" : "1px solid rgba(0,0,0,0.08)",
                background: activeFilter === f ? "var(--green-600)" : "transparent",
                color: activeFilter === f ? "#ffffff" : "var(--text-body)",
                cursor: "pointer",
                transition: "all 0.18s ease",
              }}
            >
              {f}
            </button>
          ))}
          <input
            type="search"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              marginLeft: "auto",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              padding: "10px 18px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "8px",
              background: "#fff",
              outline: "none",
              width: "200px",
            }}
          />
        </div>

        {/* ── Article à la une ── */}
        <div style={{ padding: "48px 0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
            <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
              Article à la une
            </span>
          </div>

          <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "center" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", minHeight: "320px", position: "relative" }}>
              <Image
                src={articleImage(FEATURED)}
                alt={FEATURED.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
              <span style={{ display: "inline-block", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", background: badge.bg, color: badge.color, borderRadius: "20px", padding: "4px 12px", alignSelf: "flex-start" }}>
                {FEATURED.category}
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)" }}>{formatDate(FEATURED.publishedAt)}</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, lineHeight: 1.3, color: "var(--text-primary)" }}>
                {FEATURED.title}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>{FEATURED.excerpt}</p>
              <Link href={`/fr/ressources/actualites/${FEATURED.slug}`} style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--green-600)", textDecoration: "none" }}>
                Lire l&apos;article →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Grille articles ── */}
        <div style={{ padding: "8px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
            <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
              Tous les articles
            </span>
          </div>

          {visible.length === 0 ? (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)", textAlign: "center", padding: "60px 0" }}>
              Aucun article trouvé.
            </p>
          ) : (
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
              {visible.map((a) => {
                const b = BADGE[a.category] ?? { bg: "#e0f5ea", color: "#155c3e" };
                return (
                  <article
                    key={a.id}
                    className="blog-card"
                    style={{ borderRadius: "14px", border: "1px solid rgba(0,0,0,0.05)", overflow: "hidden", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                  >
                    <div style={{ position: "relative", height: "200px" }}>
                      <Image src={articleImage(a)} alt={a.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                      <span style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", background: b.bg, color: b.color, borderRadius: "20px", padding: "4px 12px" }}>
                        {a.category}
                      </span>
                    </div>
                    <div style={{ padding: "24px" }}>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)", marginBottom: "8px" }}>{formatDate(a.publishedAt)}</p>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 400, lineHeight: 1.35, color: "var(--text-primary)", marginBottom: "10px" }}>{a.title}</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.excerpt}</p>
                      <Link href={`/fr/ressources/actualites/${a.slug}`} style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, color: "var(--green-600)", textDecoration: "none" }}>
                        Lire l&apos;article →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "40px 0" }}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{ width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)", background: "transparent", cursor: page === 1 ? "default" : "pointer", opacity: page === 1 ? 0.35 : 1, fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)" }}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                style={{ width: "36px", height: "36px", borderRadius: "8px", border: n === page ? "1px solid var(--green-600)" : "1px solid rgba(0,0,0,0.08)", background: n === page ? "var(--green-600)" : "transparent", color: n === page ? "#fff" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: n === page ? 600 : 400 }}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              style={{ width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)", background: "transparent", cursor: page === totalPages ? "default" : "pointer", opacity: page === totalPages ? 0.35 : 1, fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)" }}
            >
              →
            </button>
          </div>
        )}
      </div>

      <style>{`
        .blog-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .blog-filters input { margin-left: 0 !important; width: 100% !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
