import Link from "next/link";

const STATS = [
  { number: "175 000", label: "Membres" },
  { number: "500+",    label: "Associations" },
  { number: "14",      label: "Pays" },
  { number: "2011",    label: "Fondation" },
];

export default function AboutHero() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      color: "#ffffff",
      backgroundImage: `url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      {/* Overlay */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: [
          "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(3,8,5,0.95) 40%, rgba(6,14,9,0.88) 65%, rgba(0,0,0,0.70) 100%)",
          "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)",
          "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.08), transparent 65%)",
        ].join(", "),
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "28px var(--container-pad) 24px",
      }}>
        {/* Breadcrumb */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "#ffffff", marginBottom: "16px" }}>
          <Link href="/fr" style={{ color: "#ffffff", textDecoration: "none" }}>Accueil</Link>
          {" / "}
          <span style={{ color: "#ffffff" }}>À propos</span>
        </p>

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-300)", whiteSpace: "nowrap" }}>
            Notre histoire
          </span>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 400,
          lineHeight: 1.12,
          color: "#ffffff",
          marginBottom: "24px",
          maxWidth: "700px",
        }}>
          Un mouvement né des champs,{" "}
          <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>
            conduit par les femmes.
          </em>
        </h1>

        {/* Sous-titre */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "#ffffff",
          maxWidth: "560px",
          marginBottom: "40px",
        }}>
          Depuis 2011, NSS fédère des femmes rurales d&apos;Afrique de l&apos;Ouest
          autour d&apos;une agriculture souveraine, durable et portée par celles
          qui nourrissent le continent.
        </p>

        {/* Lien */}
        <Link
          href="/fr/mouvement"
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
            transition: "border-color 0.2s ease",
          }}
        >
          Découvrir le mouvement →
        </Link>
      </div>

      {/* Barre stats */}
      <div
        className="about-hero-stats"
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.06)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map(({ number, label }, i) => (
          <div
            key={label}
            style={{
              padding: "28px 32px",
              textAlign: "center",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 400, color: "var(--green-300)", lineHeight: 1, marginBottom: "6px" }}>
              {number}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
