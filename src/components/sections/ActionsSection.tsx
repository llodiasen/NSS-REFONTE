import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

interface ActionCard {
  num: string;
  title: string;
  description: string;
  meta: string[];
  image: string;
  href: string;
}

const ACTIONS: ActionCard[] = [
  {
    num: "01",
    title: "Camp international de formation sur l\u2019Agroécologie Paysanne",
    description:
      "Formation dans les fermes agricoles de base et l\u2019utilisation pour protéger les systèmes de production agroécologiques.",
    meta: ["1 an", "5 pays", "Souveraineté familiale"],
    image: "/images/galerie/agro-1.jpg",
    href: "/fr/programmes/cifap",
  },
  {
    num: "02",
    title: "Engagement des Médias pour les Nouvelles, l\u2019Agriculture et le Foncier",
    description:
      "Aider les médias à produire et diffuser les savoirs traditionnels et culturels qui guident notre communication.",
    meta: ["Médias", "Sénégal", "Formation terrain"],
    image: "/images/galerie/plaidoyer-1.jpg",
    href: "/fr/programmes/emmap",
  },
  {
    num: "03",
    title: "Voix des Femmes Rurales",
    description:
      "Donner des outils de communication et de plaidoyer aux femmes rurales sur l\u2019alimentation et la santé de leurs enfants.",
    meta: ["Sénégal", "3 pays d\u2019extension"],
    image: "/images/galerie/leader-1.jpg",
    href: "/fr/mouvement",
  },
];

export default function ActionsSection() {
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
          label="Nos actions"
          title="Former, informer, transformer."
          subtitle="Des actions concrètes portées par les femmes rurales pour bâtir une agriculture durable, équitable et souveraine en Afrique de l'Ouest."
        />

        {/* Grid 3 colonnes */}
        <div
          className="actions-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {ACTIONS.map((action) => (
            <div
              key={action.num}
              className="action-card"
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <Image
                  src={action.image}
                  alt={action.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,38,24,0.7) 0%, transparent 60%)",
                  }}
                />
                {/* Badge numéroté */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {action.num}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  {action.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    textAlign: "justify",
                  }}
                >
                  {action.description}
                </p>
                {/* Meta */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                  {action.meta.map((tag, i) => (
                    <span key={tag} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {i > 0 && (
                        <span aria-hidden="true" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--green-400)", flexShrink: 0 }} />
                      )}
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 400, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>
                {/* Bouton */}
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={action.href}
                    className="action-card-btn"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                      color: "#ffffff",
                      background: "var(--green-600)",
                      padding: "10px 22px",
                      borderRadius: 0,
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .action-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .action-card-btn:hover { background: var(--green-700) !important; }
        @media (max-width: 768px) {
          .actions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
