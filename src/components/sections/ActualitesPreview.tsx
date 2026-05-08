import Link from "next/link";
import Image from "next/image";

interface Article {
  slug: string;
  titre: string;
  extrait: string;
  date: string;
  badge: "Presse" | "Partenariat";
  imageUrl: string;
  imageBg: string;
}

const ARTICLES: Article[] = [
  {
    slug: "rencontre-annuelle-2025-kolda",
    titre: "Rencontre Annuelle NSS 2025 : Kolda, Guinée Bissau",
    extrait:
      "La Rencontre Annuelle 2025 du mouvement NSS a réuni des déléguées venues de 12 pays. Un moment de bilan, de solidarité et de planification stratégique pour l'agroécologie.",
    date: "16 nov. 2024",
    badge: "Presse",
    imageUrl: "/images/actualites/rencontre-2025.jpg",
    imageBg: "#0F3D28",
  },
  {
    slug: "ctap-2024-bignona",
    titre: "CTAP 2024 : 30 femmes formées à l'Agroécologie à Bignona",
    extrait:
      "Le camp de formation sur l'agroécologie paysanne a réuni 30 femmes agricultrices à Bignona. Semences paysannes, compostage et pratiques durables au programme.",
    date: "15 septembre 2024",
    badge: "Partenariat",
    imageUrl: "/images/actualites/cifap-2024.jpg",
    imageBg: "#155233",
  },
  {
    slug: "journee-mondiale-eau-pescara",
    titre: "NSS à la Journée Mondiale de l'Eau à Pescara",
    extrait:
      "Le mouvement NSS a représenté les femmes rurales africaines à la Journée Mondiale de l'Eau à Pescara, Italie. Un plaidoyer fort pour l'accès souverain à l'eau.",
    date: "20 octobre 2024",
    badge: "Presse",
    imageUrl: "/images/actualites/pescara-2024.jpg",
    imageBg: "#1D9E75",
  },
];

const BADGE_STYLES = {
  Presse:      { bg: "#fef3c7", color: "#92400e" },
  Partenariat: { bg: "#d1fae5", color: "#065f46" },
};

export default function ActualitesPreview({ locale }: { locale: string }) {
  return (
    <section style={{ background: "#fff", padding: "72px 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Tag "Actualités" centré avec traits */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "20px",
        }}>
          <span style={{ flex: 1, maxWidth: "48px", height: "1px", background: "#2d7a4f" }} />
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#2d7a4f",
          }}>
            Actualités
          </span>
          <span style={{ flex: 1, maxWidth: "48px", height: "1px", background: "#2d7a4f" }} />
        </div>

        {/* Titre centré */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px",
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          lineHeight: 1.3,
          marginBottom: "36px",
        }}>
          Dernières nouvelles du mouvement.
        </h2>

        {/* Grille 3 cards */}
        <div className="ac4-grid">
          {ARTICLES.map((article) => {
            const badgeStyle = BADGE_STYLES[article.badge];
            return (
              <article key={article.slug} className="ac4-card">

                {/* Image + badge absolu */}
                <div style={{
                  position: "relative",
                  height: "160px",
                  background: article.imageBg,
                  flexShrink: 0,
                  overflow: "hidden",
                }}>
                  <Image
                    src={article.imageUrl}
                    alt={article.titre}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: badgeStyle.bg,
                    color: badgeStyle.color,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "3px",
                    zIndex: 1,
                  }}>
                    {article.badge}
                  </span>
                </div>

                {/* Corps */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Date */}
                  <p style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "8px",
                  }}>
                    {article.date}
                  </p>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                  }}>
                    {article.titre}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: "16px",
                  }}>
                    {article.extrait}
                  </p>

                  {/* Lien */}
                  <Link
                    href={`/${locale}/ressources/actualites/${article.slug}`}
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#2d7a4f",
                      textDecoration: "none",
                    }}
                    className="ac4-link"
                  >
                    Lire l&apos;article →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA centré */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link
            href={`/${locale}/ressources/actualites`}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#2d7a4f",
              textDecoration: "none",
              border: "1px solid rgba(45,122,79,0.25)",
              borderRadius: "6px",
              padding: "14px 28px",
              display: "inline-block",
              transition: "background 0.2s ease",
            }}
            className="ac4-cta"
          >
            Toutes les actualités →
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .ac4-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .ac4-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease;
        }
        .ac4-card:hover { transform: translateY(-2px); }
        .ac4-link:hover { opacity: 0.75; }
        .ac4-cta:hover  { background: rgba(45,122,79,0.06) !important; }
        @media (max-width: 768px) {
          .ac4-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
