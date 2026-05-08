import Image from "next/image";
import Link from "next/link";

const LEADERS = [
  {
    nom: "Esther Y. Boake",
    organisation: "ABOFAB",
    pays: "Ghana",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg",
  },
  {
    nom: "Sia Anne Marie Kamano",
    organisation: "AGUISSA",
    pays: "Guinée",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg",
  },
  {
    nom: "Yah Diakité",
    organisation: "AMASSA",
    pays: "Mali",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg",
  },
  {
    nom: "Cadia Fernandes",
    organisation: "KAFO",
    pays: "Mali",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg",
  },
  {
    nom: "Catherie Soulama",
    organisation: "FENOP",
    pays: "Burkina Faso",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg",
  },
  {
    nom: "Fanta Diamoutene",
    organisation: "AOPP",
    pays: "Mali",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg",
  },
  {
    nom: "Fanta Conde",
    organisation: "AGACFEM",
    pays: "Guinée",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Conde-AGACFEM-1.jpg",
  },
  {
    nom: "Fatou B. Diop",
    organisation: "UGPM",
    pays: "Sénégal",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg",
  },
];

export default function MouvementLeaders() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
            Nos leaders
          </span>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginLeft: "12px", flexShrink: 0 }} />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#071A10",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Les leaders du mouvement.
        </h2>

        {/* Grille 4 colonnes */}
        <div className="leaders-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "44px" }}>
          {LEADERS.map(({ nom, organisation, pays, photo }) => (
            <div
              key={nom}
              className="leader-card"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1.15", overflow: "hidden" }}>
                <Image
                  src={photo}
                  alt={nom}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                />
              </div>

              {/* Texte */}
              <div style={{
                padding: "14px 16px 16px",
                borderTop: "3px solid #eaf3de",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#071A10",
                  margin: "0 0 4px",
                  lineHeight: 1.3,
                }}>
                  {nom}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "#9ca3af",
                  margin: "0 0 8px",
                }}>
                  {organisation}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green-600)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#6b7280" }}>
                    {pays}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton centré */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/fr/mouvement/leaders"
            className="leaders-btn"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#071A10",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "24px",
              padding: "11px 28px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            }}
          >
            Voir toutes les leaders →
          </Link>
        </div>
      </div>

      <style>{`
        .leader-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.10) !important; }
        .leaders-btn:hover { background: #071A10 !important; color: #ffffff !important; border-color: #071A10 !important; }
        @media (max-width: 1024px) { .leaders-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px)  { .leaders-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
