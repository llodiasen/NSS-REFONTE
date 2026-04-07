import SectionHeader from "@/components/ui/SectionHeader";

interface Card {
  icon: string;
  category: string;
  title: string;
  description: string;
  accentColor: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  dark?: boolean;
}

const CARDS: Card[] = [
  {
    icon: "🌾",
    category: "Alimentation",
    title: "Souveraineté alimentaire",
    description: "Le droit de chaque communauté de décider librement de son système de production et d'alimentation.",
    accentColor: "#1a6b3c",
    iconBg: "#dcfce7", iconColor: "#1a6b3c",
    badgeBg: "#dcfce7", badgeColor: "#1a6b3c",
  },
  {
    icon: "🏡",
    category: "Économie rurale",
    title: "Agriculture familiale",
    description: "La famille comme première force de travail, cadre d'éducation et de création d'emplois en harmonie avec la nature.",
    accentColor: "#d97706",
    iconBg: "#fef3c7", iconColor: "#92400e",
    badgeBg: "#fef3c7", badgeColor: "#92400e",
  },
  {
    icon: "♀",
    category: "Droits",
    title: "Droits des femmes",
    description: "Accès équitable à la terre, au financement et aux espaces de décision pour toutes les agricultrices du réseau.",
    accentColor: "#7c3aed",
    iconBg: "#ede9fe", iconColor: "#7c3aed",
    badgeBg: "#ede9fe", badgeColor: "#7c3aed",
  },
  {
    icon: "🌱",
    category: "Environnement",
    title: "Agroécologie & Biodiversité",
    description: "Semences paysannes résilientes, cycles naturels sans intrants chimiques et préservation de la diversité du vivant.",
    accentColor: "#1a6b3c",
    iconBg: "rgba(255,255,255,0.12)", iconColor: "#74c69d",
    badgeBg: "rgba(255,255,255,0.14)", badgeColor: "#74c69d",
    dark: true,
  },
  {
    icon: "⚖️",
    category: "Équité",
    title: "Accès équitable aux ressources",
    description: "Ressources agricoles accessibles à toutes selon les besoins, avec une pleine prise en compte du genre.",
    accentColor: "#c0392b",
    iconBg: "#fee2e2", iconColor: "#b91c1c",
    badgeBg: "#fee2e2", badgeColor: "#b91c1c",
  },
  {
    icon: "🤝",
    category: "Gouvernance",
    title: "Gouvernance participative",
    description: "Les familles paysannes au cœur de la définition, du suivi et de l'évaluation des politiques agricoles.",
    accentColor: "#0d9488",
    iconBg: "#ccfbf1", iconColor: "#0d9488",
    badgeBg: "#ccfbf1", badgeColor: "#0d9488",
  },
];

export default function EngagementsSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="eng-wrap" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 56px" }}>

        <SectionHeader
          label="Nos engagements"
          title="Ce qui nous guide chaque jour."
        />

        {/* Grille 3 × 2 */}
        <div className="eng-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                background: card.dark ? "#0f2b1a" : "#ffffff",
                borderRadius: "16px",
                border: "0.5px solid #eaeae8",
                padding: "32px 26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                boxShadow: card.dark ? "none" : "0 1px 4px rgba(0,0,0,0.04)",
                borderBottom: `3px solid ${card.accentColor}`,
              }}
            >
              {/* Icône */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: card.iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", flexShrink: 0,
              }}>
                {card.icon}
              </div>

              {/* Badge catégorie */}
              <span style={{
                display: "inline-block",
                alignSelf: "flex-start",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                background: card.badgeBg,
                color: card.badgeColor,
                borderRadius: "20px",
                padding: "3px 10px",
              }}>
                {card.category}
              </span>

              {/* Titre */}
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: 1.3,
                color: card.dark ? "#ffffff" : "#0f1f0f",
                margin: 0,
              }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.75,
                color: card.dark ? "rgba(255,255,255,0.65)" : "#6a6a6a",
                textAlign: "justify",
                margin: 0,
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .eng-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .eng-wrap { padding: 52px 20px !important; }
          .eng-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
