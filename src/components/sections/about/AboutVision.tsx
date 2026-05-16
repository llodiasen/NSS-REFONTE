import Image from "next/image";

const STATS = [
  { number: "175 000", label: "Femmes rurales membres du mouvement" },
  { number: "500+",    label: "Associations de Femmes Rurales (AFR)" },
  { number: "5",       label: "Pays fondateurs en 2011" },
];

export default function AboutVision() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="vision-wrap"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 56px",
        }}
      >
        <div
          className="vision-flex"
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "64px",
          }}
        >
          {/* ── Colonne gauche ── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <span
                aria-hidden="true"
                style={{ width: "28px", height: "2px", background: "#1a6b3c", flexShrink: 0 }}
              />
              <span style={{
                fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                color: "#1a6b3c",
              }}>
                Notre vision
              </span>
            </div>

            {/* Titre */}
            <h2 style={{
              fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
              fontSize: "clamp(21px, 3vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#0f1f0f",
              marginBottom: "28px",
            }}>
              Ce vers quoi nous marchons.
            </h2>

            {/* Texte vision avec filet vert */}
            <p style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "#4a4a4a",
              borderLeft: "3px solid #1a6b3c",
              paddingLeft: "18px",
              marginBottom: "36px",
            }}>
              Nous Sommes la Solution œuvre pour une Afrique où, dans la solidarité,
              les femmes rurales, impliquées dans la prise de décision, cultivent,
              transforment, vendent et consomment les produits de l&apos;agriculture
              familiale tout en préservant l&apos;environnement pour un développement
              harmonieux et durable.
            </p>

            {/* Séparateur */}
            <div style={{ height: "1px", background: "#e5e5e3", marginBottom: "0" }} />

            {/* Stats empilées */}
            <div style={{ flex: 1 }}>
              {STATS.map(({ number, label }) => (
                <div
                  key={number}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px 0",
                    borderBottom: "1px solid #e5e5e3",
                  }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
                    fontSize: "34px",
                    fontWeight: 400,
                    color: "#1a6b3c",
                    lineHeight: 1,
                    minWidth: "110px",
                    flexShrink: 0,
                  }}>
                    {number}
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#7a7a7a",
                    lineHeight: 1.5,
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Colonne droite — Image pleine hauteur ── */}
          <div style={{
            flex: "1.05",
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            minHeight: "400px",
          }}>
            <Image
              src="/images/galerie/formation-1.jpg"
              alt="Formation agroécologique — Nous Sommes la Solution"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 52vw"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vision-wrap { padding: 56px 24px !important; }
          .vision-flex  {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .vision-flex > div:last-child {
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
