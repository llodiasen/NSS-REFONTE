const VALEURS = [
  {
    icon: "🌾",
    title: "Souveraineté alimentaire",
    desc: "Le droit des peuples à définir leurs propres politiques alimentaires et agricoles.",
  },
  {
    icon: "🤝",
    title: "Agriculture familiale",
    desc: "Valorisation des exploitations familiales comme pilier de la sécurité alimentaire.",
  },
  {
    icon: "♀",
    title: "Droits des femmes",
    desc: "Accès à la terre, au financement et aux espaces de décision pour toutes les femmes.",
  },
  {
    icon: "🌱",
    title: "Agroécologie",
    desc: "Pratiques agricoles durables qui préservent les ressources naturelles et les semences.",
  },
  {
    icon: "⚖",
    title: "Accès équitable",
    desc: "Ressources, formations et marchés accessibles à toutes les agricultrices du réseau.",
  },
  {
    icon: "🏛",
    title: "Gouvernance inclusive",
    desc: "Des structures décisionnelles transparentes, collectives et représentatives.",
  },
];

export default function AboutValeurs() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        {/* Tag centré */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
            Nos valeurs
          </span>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginLeft: "12px", flexShrink: 0 }} />
        </div>

        {/* H2 centré */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "34px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          Ce qui nous guide chaque jour.
        </h2>

        {/* Grid 3 cols */}
        <div
          className="valeurs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {VALEURS.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "14px",
                padding: "32px",
              }}
            >
              {/* Icône */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--green-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                {icon}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px", lineHeight: 1.3 }}>
                {title}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .valeurs-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .valeurs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
