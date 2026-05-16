import Link from "next/link";

export default function CTASection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
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
          background: "rgba(25,53,36,0.94)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "80px var(--container-pad)",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2.5px",
            color: "var(--green-300)",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Rejoindre le mouvement
        </span>

        {/* H2 */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
            fontSize: "clamp(21px, 3vw, 34px)",
            fontWeight: 400,
            lineHeight: 1.18,
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Rejoindre le mouvement
        </h2>

        {/* Sous-titre */}
        <p
          style={{
            fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#ffffff",
            maxWidth: "680px",
            margin: "0 auto 40px",
          }}
        >
          Partagez-vous notre vision ? Adhérez à NSS et rejoignez 175&nbsp;000 femmes
          rurales qui transforment les systèmes alimentaires en Afrique de l&apos;Ouest.
        </p>

        {/* Boutons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Link
            href="/fr/agir/rejoindre"
            className="cta-btn-primary"
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ffffff",
              background: "var(--green-600)",
              padding: "8px 0",
              width: "140px",
              textAlign: "center",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            Adhérer
          </Link>
          <Link
            href="/fr/contact"
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "8px 0",
              width: "140px",
              textAlign: "center",
              whiteSpace: "nowrap",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s ease",
            }}
          >
            Nous contacter →
          </Link>
        </div>
      </div>

      <style>{`
        .cta-btn-primary:hover { background: var(--green-700) !important; transform: translateY(-2px); }
        @media (max-width: 640px) {
          .cta-btn-primary { font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
