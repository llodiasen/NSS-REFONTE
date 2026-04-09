import Image from "next/image";

const PROGRAMMES = [
  {
    titre: "Camp international de formation sur l'Agroécologie Paysanne",
    description:
      "Rassemble chaque année des femmes agricultrices de plusieurs pays pour partager savoirs endogènes, semences paysannes et pratiques agroécologiques.",
    meta: "7 jours • 6 pays | Casamance, Sénégal",
    image: "/images/galerie/formation-1.jpg",
    alt: "Camp de formation agroécologique NSS",
  },
  {
    titre: "Engagement des Médias pour les Nouvelles, l'Agriculture et le Foncier",
    description:
      "Forme les femmes rurales à produire et diffuser leurs propres contenus médias pour devenir actrices — et non sujettes — de l'information.",
    meta: "Médias • Sénégal | Formation terrain",
    image: "/images/galerie/agro-1.jpg",
    alt: "Formation médias pour agricultrices NSS",
  },
  {
    titre: "Voix des Femmes Rurales",
    description:
      "Réseau de radios communautaires animées par des femmes rurales. Diffuse en langues locales des contenus sur l'agroécologie, la santé et les droits.",
    meta: "Collecte | 7 pays impliqués",
    image: "/images/galerie/rencontre-1.jpg",
    alt: "Voix des femmes rurales NSS",
  },
];

interface ProgrammesPreviewProps {
  locale: string;
}

export default function ProgrammesPreview({ locale: _locale }: ProgrammesPreviewProps) {
  return (
    <section style={{ background: "#fff", padding: "72px 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Tag "Nos actions" */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ width: "32px", height: "1px", background: "#2d7a4f", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#2d7a4f",
          }}>
            Nos actions
          </span>
        </div>

        {/* Titre */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px",
          fontWeight: 700,
          color: "#1a1a1a",
          lineHeight: 1.3,
          marginBottom: "32px",
        }}>
          Former, informer,{" "}
          <em style={{ color: "#2d7a4f", fontStyle: "italic" }}>transformer.</em>
        </h2>

        {/* Grille 3 cards */}
        <div className="pp2-grid">
          {PROGRAMMES.map(({ titre, description, meta, image, alt }) => (
            <article key={titre} className="pp2-card">

              {/* Image */}
              <div style={{
                position: "relative",
                height: "160px",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Corps */}
              <div style={{ padding: "20px" }}>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  lineHeight: 1.4,
                  marginBottom: "8px",
                }}>
                  {titre}
                </p>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "13px",
                  color: "#6b7280",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}>
                  {description}
                </p>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  lineHeight: 1.4,
                }}>
                  {meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .pp2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .pp2-card {
          background: #f7f7f5;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease;
        }
        .pp2-card:hover {
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .pp2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
