import Image from "next/image";

const OBJECTIVES = [
  {
    num: "01",
    title: "Préserver les savoirs agricoles",
    text: "Promouvoir les bonnes pratiques et les savoirs agricoles transmis pendant des générations en Afrique, qui ont longtemps préservé la souveraineté alimentaire sur le continent.",
    image: "/images/galerie/agro-1.jpg",
    band: "#0F3D28",
  },
  {
    num: "02",
    title: "Soutenir l'agriculture familiale",
    text: "Promouvoir l'agriculture familiale à travers l'agro-écologie pour une production durable et souveraine.",
    image: "/images/galerie/formation-1.jpg",
    band: "#155233",
  },
  {
    num: "03",
    title: "Influencer les décideurs",
    text: "Influencer les décideurs et promouvoir une meilleure gouvernance agricole. NSS vise à s'élargir vers d'autres régions du continent pour un impact continental.",
    image: "/images/galerie/plaidoyer-1.jpg",
    band: "#1D9E75",
  },
];

export default function ObjectifsSection() {
  return (
    <section style={{ background: "#fff" }}>
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "100px 32px" }}
        className="obj-wrap"
      >

        {/* Header centré */}
        <div
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}
          className="obj-header"
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1D9E75",
              marginBottom: "12px",
            }}
          >
            Nos objectifs
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#1A1A18",
              margin: "0 0 16px",
            }}
          >
            Trois axes, une vision.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#1A1A18",
              margin: 0,
            }}
          >
            Trois axes fondateurs qui guident l&apos;action du mouvement depuis 2011
            pour une souveraineté alimentaire réelle et durable en Afrique.
          </p>
        </div>

        {/* Grid 3 cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}
          className="obj-grid"
        >
          {OBJECTIVES.map(({ num, title, text, image, band }) => (
            <article
              key={num}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                height: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Partie haute — photo */}
              <div style={{ position: "relative", flex: "1 1 0", minHeight: 0 }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay léger */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(5,18,10,0.35)",
                  }}
                />
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "#1D9E75",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  Objectif {num}
                </div>
              </div>

              {/* Partie basse — bande colorée */}
              <div
                style={{
                  background: band,
                  padding: "20px 24px 24px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "6px",
                  }}
                >
                  {num} / 03
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .obj-wrap { padding: 72px 24px !important; }
          .obj-header { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 32px !important; }
          .obj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
