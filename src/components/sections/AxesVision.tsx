const AXES = [
  {
    num: "1",
    title: "Préserver les savoirs agricoles",
    description:
      "Défendre et documenter les pratiques agroécologiques ancestrales, les variétés locales de semences, et les traditions alimentaires.",
  },
  {
    num: "2",
    title: "Transformer l'agriculture familiale",
    description:
      "Renforcer l'accès des femmes aux terres agricoles et aux ressources pour une agriculture familiale durable et rentable.",
  },
  {
    num: "3",
    title: "Influencer les décideurs",
    description:
      "Représenter les agricultrices dans les espaces de décision : CEDEAO, UEMOA, COP, FAO agroenvironnement — pour des politiques justes.",
  },
];

interface AxesVisionProps {
  locale: string;
}

export default function AxesVision({ locale: _locale }: AxesVisionProps) {
  return (
    <section style={{ background: "#fafaf8", padding: "72px 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Tag "Notre vision" */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <span style={{ width: "32px", height: "1px", background: "#2d7a4f", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#2d7a4f",
          }}>
            Notre vision
          </span>
        </div>

        {/* Grille 2 colonnes */}
        <div className="ax2-grid">

          {/* Colonne gauche */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#1a1a1a",
              marginBottom: "16px",
            }}>
              Trois axes, une vision.
            </h2>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: 1.7,
            }}>
              Un mouvement ancré dans la réalité des femmes rurales d&apos;Afrique de l&apos;Ouest,
              porté par des convictions fortes et des actions concrètes sur le terrain.
            </p>
          </div>

          {/* Colonne droite — items */}
          <div>
            {AXES.map(({ num, title, description }) => (
              <div key={num} className="ax2-item">
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#2d7a4f",
                    minWidth: "28px",
                    lineHeight: 1.2,
                    flexShrink: 0,
                  }}>
                    {num}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      lineHeight: 1.4,
                      marginBottom: "6px",
                    }}>
                      {title}
                    </p>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "13px",
                      color: "#6b7280",
                      lineHeight: 1.65,
                    }}>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .ax2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .ax2-item {
          padding: 24px 20px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background 0.2s ease;
        }
        .ax2-item:first-child {
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .ax2-item:hover {
          background: rgba(45,122,79,0.03);
        }
        @media (max-width: 768px) {
          .ax2-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
