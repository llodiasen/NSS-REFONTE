import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

interface Article {
  slug: string;
  titre: string;
  extrait: string;
  date: string;
  badge: "Presse" | "Partenariat";
  imageUrl: string;
}

const ARTICLES: Article[] = [
  {
    slug: "rencontre-annuelle-2025-kolda",
    titre: "Rencontre Annuelle NSS 2025\u00a0: Kolda, Guin\u00e9e Bissau",
    extrait:
      "Le mouvement a r\u00e9uni des d\u00e9l\u00e9gu\u00e9es venues de 12 pays pour un moment de bilan, de solidarit\u00e9 et de planification strat\u00e9gique.",
    date: "16 nov. 2024",
    badge: "Presse",
    imageUrl: "/images/actualites/rencontre-2025.jpg",
  },
  {
    slug: "ctap-2024-bignona",
    titre: "CTAP 2024\u00a0: 30 femmes form\u00e9es \u00e0 l\u2019Agro\u00e9cologie \u00e0 Bignona",
    extrait:
      "Le Camp International d\u2019Agriculture et d\u2019Agro\u00e9cologie Paysanne. Formations paysannes et compostage.",
    date: "15 septembre 2024",
    badge: "Partenariat",
    imageUrl: "/images/actualites/cifap-2024.jpg",
  },
  {
    slug: "journee-mondiale-eau-pescara",
    titre: "NSS \u00e0 la Journ\u00e9e Mondiale de l\u2019Eau \u00e0 Pescara",
    extrait:
      "Pr\u00e9sence historique pour porter la voix des femmes rurales sur la sc\u00e8ne internationale de l\u2019eau.",
    date: "20 octobre 2024",
    badge: "Presse",
    imageUrl: "/images/actualites/pescara-2024.jpg",
  },
];

const BADGE_STYLES = {
  Presse:      { background: "#fef3c7", color: "#92400e" },
  Partenariat: { background: "#d1fae5", color: "#065f46" },
};

export default function ActualitesSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        <SectionHeader
          label="Actualités"
          title="Dernières nouvelles du mouvement."
          subtitle="Rencontres, formations, plaidoyer et victoires — suivez l'actualité des 175 000 femmes rurales du réseau NSS."
        />

        {/* Grid 3 colonnes */}
        <div
          className="actu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {ARTICLES.map((article) => {
            const badge = BADGE_STYLES[article.badge];
            return (
              <article
                key={article.slug}
                className="actu-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Image + badge */}
                <div style={{ position: "relative", height: "220px", flexShrink: 0 }}>
                  <Image
                    src={article.imageUrl}
                    alt={article.titre}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: badge.background,
                      color: badge.color,
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      zIndex: 1,
                    }}
                  >
                    {article.badge}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 400, color: "var(--text-muted)", marginBottom: "10px" }}>
                    {article.date}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                    }}
                  >
                    {article.titre}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.7, flex: 1, marginBottom: "20px", textAlign: "justify" }}>
                    {article.extrait}
                  </p>
                  <Link
                    href={`/fr/ressources/actualites/${article.slug}`}
                    className="actu-link"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--green-600)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                  >
                    Lire l&apos;article →
                  </Link>
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
              fontFamily: "var(--font-body)",
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
        .actu-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.08); }
        .actu-link:hover { color: var(--green-700) !important; }
        .actu-cta:hover  { background: #fff !important; color: var(--green-600) !important; }
        @media (max-width: 768px) {
          .actu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
