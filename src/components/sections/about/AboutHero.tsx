import Link from "next/link";

export default function AboutHero() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      color: "#ffffff",
      backgroundColor: "#045627",
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
        padding: "5rem var(--container-pad) 7rem",
      }}>
        {/* Breadcrumb */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "#ffffff", marginBottom: "16px" }}>
          <Link href="/fr" style={{ color: "#ffffff", textDecoration: "none" }}>Accueil</Link>
          {" / "}
          <span style={{ color: "#ffffff" }}>À propos</span>
        </p>

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(232,168,56,0.4)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#E8A838", whiteSpace: "nowrap" }}>
            Notre histoire
          </span>
          <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(232,168,56,0.4)", flexShrink: 0 }} />
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 600,
          lineHeight: 1.18,
          color: "#ffffff",
          marginBottom: "0",
          maxWidth: "none",
        }}>
          <span style={{ display: "block", whiteSpace: "nowrap" }}>Un mouvement né des champs,</span>
          <em style={{ display: "block", fontStyle: "italic", fontWeight: 600, color: "#A5CE46" }}>conduit par les femmes.</em>
        </h1>

      </div>

    </section>
  );
}
