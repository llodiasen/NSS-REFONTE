import Link from "next/link";

export default function MediathequeHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        backgroundImage: `url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(3,8,5,0.95) 40%, rgba(6,14,9,0.88) 65%, rgba(0,0,0,0.70) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)",
            "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.08), transparent 65%)",
          ].join(", "),
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "48px var(--container-pad) 44px",
        }}
      >
        {/* Breadcrumb */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "#ffffff", marginBottom: "28px" }}>
          <Link href="/fr" style={{ color: "#ffffff", textDecoration: "none" }}>Accueil</Link>
          {" / "}
          <span style={{ color: "#ffffff" }}>Médiathèque</span>
        </p>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-300, #7aab8a)", whiteSpace: "nowrap" }}>
            Médiathèque NSS — Vidéos
          </span>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
        </div>

        {/* Titre */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.12,
            color: "#ffffff",
            marginBottom: "20px",
            maxWidth: "660px",
          }}
        >
          Le mouvement en vidéos.
        </h1>

        {/* Sous-titre */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#ffffff",
            maxWidth: "520px",
            marginBottom: "36px",
          }}
        >
          Reportages, témoignages et formations filmées —
          la vie du réseau NSS à travers 14 pays.
        </p>

        {/* CTA */}
        <Link
          href="#contenu"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#ffffff",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "24px",
            padding: "10px 22px",
            display: "inline-block",
          }}
          className="mth-hero-cta"
        >
          Explorer les ressources →
        </Link>

      </div>

      <style>{`
        .mth-hero-cta:hover { border-color: rgba(255,255,255,0.7) !important; }
      `}</style>
    </section>
  );
}
