import Link from "next/link";

const STATS = [
  { number: "14",       label: "Pays" },
  { number: "175 000",  label: "Membres" },
  { number: "500+",     label: "Organisations" },
  { number: "14 ans",   label: "D\u2019engagement" },
];

export default function HeroHome() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Image de fond ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/images/hero/hero-nss-femmes-rurales.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.65) brightness(0.85)",
          zIndex: 0,
        }}
      />

      {/* ── Overlay gradient ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(7,26,16,0.92) 45%, rgba(7,26,16,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Contenu ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "120px 80px 160px",
          maxWidth: "860px",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
          <span
            aria-hidden="true"
            style={{ display: "block", width: "40px", height: "1px", background: "#E07B39", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', 'Outfit', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E07B39",
            }}
          >
            Nous Sommes la Solution
          </span>
        </div>

        {/* H1 — deux lignes */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(52px, 6vw, 88px)",
            fontWeight: 600,
            lineHeight: 1.08,
            color: "#ffffff",
            marginBottom: "28px",
            maxWidth: "700px",
          }}
        >
          Les femmes rurales nourrissent{" "}
          <em style={{ fontStyle: "italic", color: "#52B788" }}>
            l&apos;Afrique.
          </em>
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', 'Outfit', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "#ffffff",
            maxWidth: "500px",
            marginBottom: "44px",
          }}
        >
          Un réseau de 175&nbsp;000 agricultrices qui transforment les systèmes
          alimentaires, de semence en consommation.
        </p>

        {/* Boutons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/fr/agir/rejoindre"
            className="hero-btn-primary"
            style={{
              fontFamily: "'DM Sans', 'Outfit', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              background: "#1d7a52",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            Rejoindre le mouvement
          </Link>
          <Link
            href="/fr/mouvement"
            className="hero-btn-outline"
            style={{
              fontFamily: "'DM Sans', 'Outfit', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              background: "transparent",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.4)",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
          >
            Découvrir nos actions
          </Link>
        </div>
      </div>

      {/* ── Barre stats — collée au bas ── */}
      <div
        className="hero-stats"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          background: "rgba(13,43,26,0.85)",
          backdropFilter: "blur(6px)",
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
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "40px",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              {number}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', 'Outfit', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hero-btn-primary:hover  { background: #155c3e !important; transform: translateY(-1px); }
        .hero-btn-outline:hover  { border-color: #ffffff !important; background: rgba(255,255,255,0.07) !important; }

        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; position: static !important; }
        }
        @media (max-width: 600px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
