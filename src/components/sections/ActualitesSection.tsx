import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ARTICLES } from "@/data/articles";

const TAG_CONFIG: Record<string, { bg: string; color: string }> = {
  Formation: { bg: "#e8f2df", color: "#3b6d11" },
  Mouvement: { bg: "#dff0f8", color: "#185fa5" },
  Plaidoyer: { bg: "#fef3e2", color: "#854f0b" },
};

export default function ActualitesSection() {
  const latest = [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="actu-inner"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 20px",
        }}
      >
        <SectionHeader
          label="Actualités"
          title="Dernières nouvelles du mouvement."
          subtitle="Rencontres, formations, plaidoyer et victoires — suivez l'actualité des 175 000 femmes rurales du réseau NSS."
        />

        <div
          className="actu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {latest.map((article) => {
            const tag = TAG_CONFIG[article.category];
            const dateStr = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <article
                key={article.id}
                className="actu-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "8px",
                  border: "1px solid #e8e2d9",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "200px", flexShrink: 0 }}>
                  {article.coverUrl ? (
                    <Image
                      src={article.coverUrl}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  ) : (
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
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-primary)",
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
                    }}
                  >
                    <Link
                      href={`/fr/ressources/actualites/${article.slug}`}
                      className="actu-link"
                      style={{
                        fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#3b6d11",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/fr/ressources/actualites"
            className="actu-cta"
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
              background: "var(--green-600)",
              padding: "10px 22px",
              display: "inline-block",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            Toutes les actualités →
          </Link>
        </div>
      </div>

      <style>{`
        .actu-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.10); }
        .actu-link:hover { color: var(--green-700) !important; }
        .actu-cta:hover  { background: #fff !important; color: var(--green-600) !important; }
        @media (max-width: 768px) {
          .actu-inner { padding: 60px 24px !important; }
          .actu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
