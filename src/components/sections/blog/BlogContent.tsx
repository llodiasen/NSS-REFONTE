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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.25rem,4vw,2.5rem)" }}>

        {/* ── Filtres + recherche ── */}
        <div className="bc-filters">
          <div className="bc-pills">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                className={`bc-pill${activeFilter === f ? " bc-pill--active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="bc-search-wrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bc-search-icon" aria-hidden>
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="search"
              placeholder="Rechercher un article…"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="bc-search"
              aria-label="Rechercher un article"
            />
          </div>
        </div>

        {/* ── Article à la une ── */}
        <div className="bc-featured">
          <div className="bc-featured-label">
            <span className="bc-ey-line" aria-hidden />
            <span>Article à la une</span>
          </div>

          <div className="bc-featured-grid">
            <div className="bc-featured-img-wrap">
              <Image
                src={articleImage(FEATURED)}
                alt={FEATURED.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <span className="bc-featured-badge" style={{ background: badge.bg, color: badge.color }}>
                {FEATURED.category}
              </span>
            </div>

            <div className="bc-featured-body">
              <p className="bc-featured-date">{formatDate(FEATURED.publishedAt)}</p>
              <h2 className="bc-featured-h2">{FEATURED.title}</h2>
              <p className="bc-featured-excerpt">{FEATURED.excerpt}</p>
              <Link href={`/fr/ressources/actualites/${FEATURED.slug}`} className="bc-featured-cta">
                Lire l&apos;article complet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Grille articles ── */}
        <div className="bc-grid-section">
          <div className="bc-featured-label">
            <span className="bc-ey-line" aria-hidden />
            <span>Tous les articles</span>
          </div>

          {visible.length === 0 ? (
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: "#9ca3af", textAlign: "center", padding: "60px 0" }}>
              Aucun article trouvé.
            </p>
          ) : (
            <div className="bc-grid">
              {visible.map((a) => {
                const b = BADGE[a.category] ?? { bg: "#e0f5ea", color: "#155c3e" };
                return (
                  <article key={a.id} className="bc-card">
                    <div className="bc-card-img">
                      <Image src={articleImage(a)} alt={a.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                      <span className="bc-card-badge" style={{ background: b.bg, color: b.color }}>{a.category}</span>
                    </div>
                    <div className="bc-card-body">
                      <p className="bc-card-date">{formatDate(a.publishedAt)}</p>
                      <h3 className="bc-card-h3">{a.title}</h3>
                      <p className="bc-card-excerpt">{a.excerpt}</p>
                      <Link href={`/fr/ressources/actualites/${a.slug}`} className="bc-card-link">
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
          <div className="bc-pagination">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="bc-page-btn">←</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => setPage(n)} className={`bc-page-btn${n === page ? " bc-page-btn--active" : ""}`}>{n}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="bc-page-btn">→</button>
          </div>
        )}
      </div>

      {/* ── CTA Section ── */}
      <div className="bc-cta">
        <div className="bc-cta-inner">
          <div className="bc-cta-ey">
            <span className="bc-cta-line" aria-hidden />
            <span>NOUS SOMMES LA SOLUTION</span>
            <span className="bc-cta-line" aria-hidden />
          </div>
          <h2 className="bc-cta-h2">
            Rejoignez 175&nbsp;000 femmes qui <em>nourrissent l&apos;Afrique.</em>
          </h2>
          <p className="bc-cta-desc">
            NSS rassemble des associations de femmes rurales dans 14 pays d&apos;Afrique de l&apos;Ouest.
            Adhérez au mouvement et transformez l&apos;agriculture familiale avec nous.
          </p>
          <div className="bc-cta-btns">
            <Link href="/fr/agir/rejoindre" className="bc-cta-btn bc-cta-btn--primary">
              Adhérer au mouvement
            </Link>
            <Link href="/fr/agir/soutenir" className="bc-cta-btn bc-cta-btn--outline">
              Soutenir NSS
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Filtres ── */
        .bc-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 28px 0;
          border-bottom: 1px solid #f3f4f6;
          flex-wrap: wrap;
        }
        .bc-pills { display: flex; gap: 6px; flex-wrap: wrap; }
        .bc-pill {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          font-weight: 500;
          padding: 7px 18px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          background: transparent;
          color: #4b5563;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .bc-pill:hover { border-color: #00AD4C; color: #00AD4C; }
        .bc-pill--active { border-color: #00AD4C; background: #00AD4C; color: #ffffff; }
        .bc-search-wrap {
          margin-left: auto;
          position: relative;
          display: flex;
          align-items: center;
        }
        .bc-search-icon { position: absolute; left: 12px; pointer-events: none; }
        .bc-search {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          padding: 8px 16px 8px 36px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          outline: none;
          width: 210px;
          transition: border-color 0.15s;
          color: #374151;
        }
        .bc-search:focus { border-color: #00AD4C; }

        /* ── Featured ── */
        .bc-featured { padding: 48px 0 40px; }
        .bc-featured-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #00AD4C;
        }
        .bc-ey-line { display: block; width: 28px; height: 1px; background: #00AD4C; flex-shrink: 0; }
        .bc-featured-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .bc-featured-img-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 16/10;
          background: #f3f4f6;
        }
        .bc-featured-badge {
          position: absolute;
          top: 16px; left: 16px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 20px;
          padding: 4px 12px;
        }
        .bc-featured-body { display: flex; flex-direction: column; gap: 14px; }
        .bc-featured-date {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 0.04em;
        }
        .bc-featured-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 500;
          line-height: 1.25;
          color: #1a2a1a;
          margin: 0;
        }
        .bc-featured-excerpt {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #4b5563;
          margin: 0;
        }
        .bc-featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          background: #00AD4C;
          padding: 11px 22px;
          border-radius: 6px;
          text-decoration: none;
          align-self: flex-start;
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .bc-featured-cta:hover { background: #009940; transform: translateY(-1px); }

        /* ── Grille ── */
        .bc-grid-section { padding: 8px 0 0; }
        .bc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 28px;
        }
        .bc-card {
          border-radius: 12px;
          border: 0.5px solid #e5e7eb;
          overflow: hidden;
          background: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .bc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .bc-card-img {
          position: relative;
          aspect-ratio: 16/9;
          background: #f3f4f6;
          overflow: hidden;
        }
        .bc-card-badge {
          position: absolute;
          top: 12px; left: 12px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 20px;
          padding: 3px 10px;
        }
        .bc-card-body { padding: 20px; display: flex; flex-direction: column; flex: 1; gap: 8px; }
        .bc-card-date {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          color: #9ca3af;
        }
        .bc-card-h3 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
          color: #1a2a1a;
          margin: 0;
        }
        .bc-card-excerpt {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.65;
          color: #6b7280;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .bc-card-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          font-weight: 600;
          color: #00AD4C;
          text-decoration: none;
          margin-top: 4px;
          align-self: flex-start;
          transition: color 0.15s;
        }
        .bc-card-link:hover { color: #045627; }

        /* ── Pagination ── */
        .bc-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 40px 0 48px;
        }
        .bc-page-btn {
          width: 36px; height: 36px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          color: #6b7280;
          transition: all 0.15s;
        }
        .bc-page-btn:disabled { opacity: 0.35; cursor: default; }
        .bc-page-btn:not(:disabled):hover { border-color: #00AD4C; color: #00AD4C; }
        .bc-page-btn--active { border-color: #00AD4C; background: #00AD4C; color: #ffffff; font-weight: 600; }

        /* ── CTA ── */
        .bc-cta {
          background: #045627;
          margin-top: 0;
          padding: clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem);
        }
        .bc-cta-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .bc-cta-ey {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #F5EDD6;
        }
        .bc-cta-line { display: block; width: 28px; height: 1.5px; background: #F5EDD6; flex-shrink: 0; }
        .bc-cta-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.25rem);
          font-weight: 600;
          line-height: 1.2;
          color: #F5EDD6;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .bc-cta-h2 em { font-style: italic; color: #E8A838; }
        .bc-cta-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(245, 237, 214, 0.80);
          margin: 0 0 32px;
        }
        .bc-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .bc-cta-btn {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          padding: 11px 26px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.18s ease;
          display: inline-block;
        }
        .bc-cta-btn--primary { background: #E8A838; color: #045627; border: 1.5px solid #E8A838; }
        .bc-cta-btn--primary:hover { background: #d4952a; border-color: #d4952a; transform: translateY(-1px); }
        .bc-cta-btn--outline { background: transparent; color: #F5EDD6; border: 1.5px solid rgba(245,237,214,0.35); }
        .bc-cta-btn--outline:hover { border-color: #F5EDD6; color: #F5EDD6; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .bc-grid { grid-template-columns: repeat(2, 1fr); }
          .bc-featured-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .bc-grid { grid-template-columns: 1fr; }
          .bc-search-wrap { width: 100%; }
          .bc-search { width: 100%; }
          .bc-filters { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
