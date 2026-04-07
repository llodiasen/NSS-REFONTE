import Image from "next/image";

const PARTENAIRES = [
  { nom: "Grassroots International", logo: "/images/partenaires/Grassroots-international.jpg" },
  { nom: "Thousand Currents",        logo: "/images/partenaires/thoussands-current-1.jpg" },
  { nom: "Fonds pour l'Égalité",     logo: "/images/partenaires/Fond-egalite.png" },
  { nom: "Fahamu Africa",            logo: "/images/partenaires/logofahamu1.png" },
];

export default function Partenaires() {
  return (
    <section style={{
      background: "#fff",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      padding: "48px 40px",
    }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Label centré */}
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: "28px",
        }}>
          Ils nous font confiance
        </p>

        {/* Logos */}
        <div className="part2-row">
          {PARTENAIRES.map(({ nom, logo }) => (
            <div key={nom} className="part2-logo">
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={logo}
                  alt={nom}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .part2-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 48px;
        }
        .part2-logo {
          position: relative;
          height: 36px;
          width: 120px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 6px;
          padding: 0 12px;
          box-sizing: content-box;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }
        .part2-logo:hover { opacity: 1; }
        @media (max-width: 768px) {
          .part2-row { gap: 24px; }
          .part2-logo { width: 90px; }
        }
      `}</style>
    </section>
  );
}
