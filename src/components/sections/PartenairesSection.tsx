import Image from "next/image";

const PARTENAIRES = [
  { nom: "Grassroots International", logo: "/images/partenaires/Grassroots-international.jpg" },
  { nom: "Thousand Currents",        logo: "/images/partenaires/thoussands-current-1.jpg" },
  { nom: "Fonds pour l\u2019\u00c9galit\u00e9",  logo: "/images/partenaires/Fond-egalite.png" },
  { nom: "Fahamu Africa",            logo: "/images/partenaires/logofahamu1.png" },
];

export default function PartenairesSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        padding: "72px var(--container-pad)",
      }}
    >
      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
        <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)", whiteSpace: "nowrap" }}>
          Ils nous soutiennent
        </span>
        <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
      </div>

      {/* Logos */}
      <div
        className="partenaires-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {PARTENAIRES.map(({ nom, logo }) => (
          <div
            key={nom}
            className="partenaire-logo"
            style={{
              position: "relative",
              height: "44px",
              width: "140px",
              padding: "0 24px",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "8px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.2s ease, border-color 0.2s ease",
              opacity: 0.65,
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "36px" }}>
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

      <style>{`
        .partenaire-logo:hover { opacity: 1 !important; border-color: rgba(0,0,0,0.15) !important; }
        @media (max-width: 768px) {
          .partenaires-row { gap: 24px !important; }
          .partenaire-logo { width: 110px !important; }
        }
      `}</style>
    </section>
  );
}
