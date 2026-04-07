import Link from "next/link";

const CROSSHATCH = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M0 0l12 12M12 0L0 12' stroke='white' stroke-width='0.8'/%3E%3C/svg%3E")`;

export default function BlogHero() {
  return (
    <section
      style={{
        background: "var(--green-900)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "48px",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.2), transparent 65%)",
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(29,122,82,0.15), transparent 60%)",
          ].join(", "),
        }}
      />
      {/* Crosshatch */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: CROSSHATCH }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "140px var(--container-pad) 0",
        }}
      >
        {/* Breadcrumb */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>
          <Link href="/fr" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Accueil</Link>
          {" / "}
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Blog</span>
        </p>

        {/* Tag */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", marginRight: "12px", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "var(--green-300)" }}>
            Actualités &amp; ressources
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: "640px",
            marginBottom: "20px",
          }}
        >
          Dernières nouvelles du{" "}
          <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>mouvement.</em>
        </h1>

        {/* Sous-titre */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "520px",
          }}
        >
          Formation, plaidoyer, partenariats, victoires du terrain — suivez l&apos;actualité
          des 175 000 femmes rurales qui changent l&apos;Afrique de l&apos;Ouest.
        </p>
      </div>
    </section>
  );
}
