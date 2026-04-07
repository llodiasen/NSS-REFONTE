import Image from "next/image";
import Link from "next/link";
import { type Article } from "@/data/articles";

interface CategoryCount {
  name: string;
  count: number;
}

interface Props {
  related: Article[];
  locale: string;
  categories: CategoryCount[];
  activeCategory?: string;
  /** Base path for article links — defaults to "blog" */
  basePath?: string;
}

const BADGE: Record<string, { bg: string; color: string }> = {
  Presse:               { bg: "#fef3c7", color: "#92400e" },
  Partenariat:          { bg: "#d1fae5", color: "#065f46" },
  Formation:            { bg: "#dbeafe", color: "#1e40af" },
  Plaidoyer:            { bg: "#fce7f3", color: "#9d174d" },
  Mouvement:            { bg: "#e0f5ea", color: "#155c3e" },
  "Agroécologie":       { bg: "#d1fae5", color: "#064e3b" },
  "Atelier de formation": { bg: "#ede9fe", color: "#4c1d95" },
  "Rencontres":         { bg: "#fff7ed", color: "#9a3412" },
  "Leadership":         { bg: "#fdf2f8", color: "#831843" },
  "Programmes":         { bg: "#f0fdf4", color: "#14532d" },
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

export default function BlogArticleSidebar({ related, locale, categories, activeCategory, basePath = "blog" }: Props) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

      {/* Catégories */}
      <div style={{ border: "1px solid rgba(0,0,0,0.07)", borderRadius: "16px", padding: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <span aria-hidden="true" style={{ width: "20px", height: "1px", background: "var(--green-600)", marginRight: "10px", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
            Catégories
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Link
            href={`/${locale}/${basePath}`}
            style={{
              display: "block",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: !activeCategory ? 600 : 400,
              color: !activeCategory ? "var(--green-600)" : "var(--text-body)",
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              background: !activeCategory ? "var(--green-50)" : "transparent",
              transition: "background 0.15s ease",
            }}
          >
            Tous les articles
          </Link>
          {categories.map(({ name }) => {
            const b = BADGE[name] ?? { bg: "#e0f5ea", color: "#155c3e" };
            const isActive = activeCategory === name;
            return (
              <Link
                key={name}
                href={`/${locale}/${basePath}?categorie=${encodeURIComponent(name)}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? b.color : "var(--text-body)",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: isActive ? b.bg : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: b.color, flexShrink: 0, opacity: 0.7 }} />
                {name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Articles récents */}
      {related.length > 0 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ width: "20px", height: "1px", background: "var(--green-600)", marginRight: "10px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
              À lire aussi
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {related.map((a) => {
              const b = BADGE[a.category] ?? { bg: "#e0f5ea", color: "#155c3e" };
              return (
                <Link
                  key={a.id}
                  href={`/${locale}/${basePath}/${a.slug}`}
                  style={{ display: "flex", gap: "14px", textDecoration: "none", alignItems: "flex-start" }}
                >
                  <div style={{ width: "100px", height: "76px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                    <Image src={articleImage(a)} alt={a.title} fill style={{ objectFit: "cover" }} sizes="100px" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "inline-block", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", background: b.bg, color: b.color, borderRadius: "12px", padding: "2px 8px", marginBottom: "8px" }}>
                      {a.category}
                    </span>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.45 }}>
                      {a.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA Agir */}
      <div style={{ background: "var(--green-900)", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: "12px" }}>
          Rejoignez le mouvement.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: "20px" }}>
          175 000 femmes rurales qui construisent la souveraineté alimentaire.
        </p>
        <Link
          href={`/${locale}/agir/rejoindre`}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--green-900)",
            textDecoration: "none",
            background: "var(--green-300)",
            borderRadius: "20px",
            padding: "10px 22px",
          }}
        >
          Agir avec NSS
        </Link>
      </div>

    </aside>
  );
}
