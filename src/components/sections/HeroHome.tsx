import Link from "next/link";

const STATS = [
  { number: "14",       label: "Pays" },
  { number: "175 000",  label: "Membres" },
  { number: "500+",     label: "Organisations" },
  { number: "14 ans",   label: "D\u2019engagement" },
];

export default function HeroHome() {
  return (
    <section className="hero-section">
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
      <div className="hero-content">
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
          <span
            aria-hidden="true"
            style={{ display: "block", width: "40px", height: "1px", background: "#E07B39", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-sans), var(--font-body), sans-serif",
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

        {/* H1 */}
        <h1 className="hero-h1">
          Les femmes rurales nourrissent{" "}
          <em style={{ fontStyle: "italic", color: "#52B788" }}>
            l&apos;Afrique.
          </em>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Un réseau de 175&nbsp;000 agricultrices qui transforment les systèmes
          alimentaires, de semence en consommation.
        </p>

        {/* Boutons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/fr/agir/rejoindre" className="hero-btn-primary">
            Rejoindre le mouvement
          </Link>
          <Link href="/fr/mouvement" className="hero-btn-outline">
            Découvrir nos actions
          </Link>
        </div>
      </div>

      {/* ── Barre stats ── */}
      <div className="hero-stats">
        {STATS.map(({ number, label }, i) => (
          <div key={label} className="hero-stat-item" style={{
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <div className="hero-stat-number">{number}</div>
            <div className="hero-stat-label">{label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── Contenu ── */
        .hero-content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 80px 80px;
          max-width: 860px;
        }

        /* ── H1 ── */
        .hero-h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(52px, 6vw, 88px);
          font-weight: 400;
          line-height: 1.08;
          color: #ffffff;
          margin-bottom: 28px;
          max-width: 700px;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.75;
          color: #ffffff;
          max-width: 500px;
          margin-bottom: 44px;
        }

        /* ── Boutons ── */
        .hero-btn-primary {
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 500;
          background: #1d7a52;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .hero-btn-primary:hover { background: #155c3e; transform: translateY(-1px); }

        .hero-btn-outline {
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 400;
          background: transparent;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.4);
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .hero-btn-outline:hover { border-color: #ffffff; background: rgba(255,255,255,0.07); }

        /* ── Stats bar ── */
        .hero-stats {
          position: relative;
          z-index: 2;
          background: rgba(13,43,26,0.85);
          backdrop-filter: blur(6px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }

        .hero-stat-item {
          padding: 28px 16px;
          text-align: center;
        }

        .hero-stat-number {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 40px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
          white-space: nowrap;
        }

        .hero-stat-label {
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.5);
        }

        /* ── Tablette ── */
        @media (max-width: 1024px) {
          .hero-content { padding: 100px 40px 60px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { min-height: unset; }
          .hero-content { padding: 72px 20px 36px; justify-content: flex-start; }
          .hero-h1 { font-size: clamp(38px, 9vw, 54px); }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-stat-item { padding: 20px 12px; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .hero-stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08) !important; }
          .hero-stat-item:nth-child(3),
          .hero-stat-item:nth-child(4) { border-bottom: none; }
          .hero-stat-number { font-size: 30px; }
          .hero-stat-label { font-size: 10px; }
        }

        /* ── Petit mobile ── */
        @media (max-width: 480px) {
          .hero-section { min-height: unset; }
          .hero-content { padding: 64px 16px 20px; justify-content: flex-start; }
          .hero-h1 { font-size: clamp(34px, 8vw, 44px); }
          .hero-desc { font-size: 14px; }
          .hero-stat-number { font-size: 26px; }
        }
      `}</style>
    </section>
  );
}
