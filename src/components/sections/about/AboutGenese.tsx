import Image from "next/image";

export default function AboutGenese() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="genese-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "start",
        }}
      >
        {/* ── Colonne gauche ── */}
        <div>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
              Notre genèse
            </span>
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: "32px",
            }}
          >
            Née des champs, portée par des milliers de voix.
          </h2>

          {/* Paragraphe 1 — drop cap */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", fontWeight: 400, lineHeight: 1.8, color: "var(--text-body)", marginBottom: "24px" }}>
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "58px",
                fontWeight: 400,
                lineHeight: 0.75,
                color: "var(--green-700)",
                float: "left",
                marginRight: "8px",
                marginTop: "8px",
              }}
            >
              C
            </span>
            réé en 2011 par douze organisations de femmes rurales du Burkina Faso,
            du Ghana, de la Guinée, du Mali et du Sénégal, le mouvement Nous
            Sommes la Solution (NSS) est né d&apos;une conviction simple&nbsp;: les
            femmes rurales nourrissent l&apos;Afrique, mais leurs voix restent
            inaudibles dans les espaces de décision.
            {" "}Créé en tant qu&apos;expression des droits des femmes au sein d&apos;une
            campagne globale pour la souveraineté alimentaire menée par les
            mouvements paysans du continent, NSS s&apos;est imposé comme le porte-voix
            des alternatives paysannes durables, économiquement rentables,
            socialement et écologiquement viables.
          </p>

          {/* Paragraphe 2 */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", fontWeight: 400, lineHeight: 1.8, color: "var(--text-body)" }}>
            Plus de 500 Associations de Femmes Rurales (AFR) ont rejoint le
            mouvement depuis lors. Aujourd&apos;hui NSS compte 175&nbsp;000 membres et
            sympathisants à travers 14 pays d&apos;Afrique de l&apos;Ouest, unis autour
            d&apos;une agriculture familiale, souveraine et agroécologique.
          </p>
        </div>

        {/* ── Colonne droite — Image ── */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            minHeight: "420px",
            position: "relative",
          }}
        >
          <Image
            src="/images/galerie/rencontre-1.jpg"
            alt="Femmes rurales du mouvement NSS en rencontre"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .genese-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
