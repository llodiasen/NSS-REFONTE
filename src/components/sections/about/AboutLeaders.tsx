const INSTANCES = [
  {
    icon: "🏛️",
    titre: "Conseil d'Administration",
    desc: "Chaque pays membre est représenté par une déléguée élue. Le CA définit les orientations stratégiques et élit le Bureau exécutif en son sein.",
    detail: "14 déléguées — 1 par pays",
  },
  {
    icon: "⚡",
    titre: "Bureau exécutif",
    desc: "Composé de femmes rurales élues, il coordonne les actions du mouvement, assure la représentation internationale et pilote les programmes.",
    detail: "100% femmes rurales",
  },
  {
    icon: "🤝",
    titre: "Appui technique",
    desc: "L'ONG Fahamu Africa accompagne le mouvement depuis 2011. Son rôle se réduit progressivement — signe du leadership affirmé des femmes leaders.",
    detail: "Fahamu Africa · depuis 2011",
  },
];

export default function AboutLeaders() {
  return (
    <section style={{ background: "var(--green-50, #f0f7f2)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        {/* Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)", whiteSpace: "nowrap" }}>
            Gouvernance
          </span>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
        </div>

        {/* Titre + sous-titre */}
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.18, color: "var(--text-primary)", marginBottom: "12px" }}>
          Un mouvement dirigé par ses membres.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--text-muted)", marginBottom: "52px", maxWidth: "560px" }}>
          Depuis la 1ère Assemblée Générale en 2017, toutes les instances de NSS sont constituées à 100% de femmes rurales.
        </p>

        {/* 3 cartes gouvernance */}
        <div
          className="leaders-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {INSTANCES.map(({ icon, titre, desc, detail }) => (
            <div
              key={titre}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px 28px",
                border: "0.5px solid #e0ede6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Icône */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                flexShrink: 0,
              }}>
                {icon}
              </div>

              {/* Titre */}
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.25, margin: 0 }}>
                {titre}
              </h3>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)", margin: 0, textAlign: "justify", flex: 1 }}>
                {desc}
              </p>

              {/* Détail */}
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#1a6b3c",
                borderTop: "1px solid #e8ede8",
                paddingTop: "14px",
              }}>
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .leaders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
