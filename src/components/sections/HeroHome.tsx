import Link from "next/link";

const STATS = [
  { number: "14",       label: "Pays" },
  { number: "175 000",  label: "Membres" },
  { number: "500+",     label: "AFR" },
  { number: "14 ans",   label: "D'engagement" },
];

export default function HeroHome() {
  return (
    <section className="hero-section">
      {/* Background */}
      <div aria-hidden="true" className="hero-bg" />
      {/* Gradient */}
      <div aria-hidden="true" className="hero-overlay" />
      {/* Diagonal stripe pattern — African fabric inspired */}
      <div aria-hidden="true" className="hero-deco" />

      {/* Content */}
      <div className="hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" aria-hidden="true" />
          <span className="hero-eyebrow-text">
            Célébrons l&apos;agriculture familiale africaine
          </span>
        </div>

        {/* H1 */}
        <h1 className="hero-h1">
          Les femmes rurales<br />
          <em>nourrissent l&apos;Afrique.</em>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          175&nbsp;000 agricultrices organisées en Afrique de l&apos;Ouest qui cultivent,
          transforment et défendent leur souveraineté alimentaire — de la semence à la consommation.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <Link href="/fr/agir/rejoindre" className="hero-btn-primary">
            Rejoindre le mouvement
          </Link>
          <Link href="/fr/mouvement" className="hero-btn-outline">
            Notre histoire
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats" role="list">
        {STATS.map(({ number, label }, i) => (
          <div
            key={label}
            role="listitem"
            className="hero-stat-item"
            style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none" }}
          >
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
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/hero/hero-nss-femmes-rurales.jpg');
          background-size: cover;
          background-position: center 30%;
          filter: saturate(0.65) brightness(0.78);
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(112deg, rgba(7,26,16,0.96) 38%, rgba(21,92,62,0.60) 72%, rgba(7,26,16,0.15) 100%);
          z-index: 1;
        }
        .hero-deco {
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: repeating-linear-gradient(
            -52deg,
            transparent,
            transparent 20px,
            rgba(224,123,57,0.05) 20px,
            rgba(224,123,57,0.05) 22px
          );
          z-index: 2;
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 130px 80px 80px;
          max-width: 840px;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .hero-eyebrow-line {
          display: block;
          width: 48px;
          height: 1px;
          background: #E07B39;
          flex-shrink: 0;
        }
        .hero-eyebrow-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #E07B39;
        }
        .hero-h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(50px, 6.5vw, 90px);
          font-weight: 600;
          line-height: 0.92;
          color: #ffffff;
          margin-bottom: 26px;
          max-width: 720px;
        }
        .hero-h1 em {
          font-style: italic;
          color: #52B788;
        }
        .hero-desc {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.80;
          color: #ffffff;
          max-width: 490px;
          margin-bottom: 48px;
        }
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #52B788;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .hero-btn-primary:hover { background: #155c3e; transform: translateY(-1px); }
        .hero-btn-outline {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: transparent;
          color: rgba(255,255,255,0.80);
          padding: 13px 28px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.32);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .hero-btn-outline:hover { border-color: rgba(255,255,255,0.80); color: #ffffff; }
        .hero-stats {
          position: relative;
          z-index: 3;
          background: rgba(10,38,24,0.92);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(82,183,136,0.18);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }
        .hero-stat-item {
          padding: 32px 20px;
          text-align: center;
        }
        .hero-stat-number {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 44px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
          white-space: nowrap;
        }
        .hero-stat-label {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.42);
        }
        @media (max-width: 1024px) {
          .hero-content { padding: 100px 40px 64px; }
          .hero-deco { display: none; }
        }
        @media (max-width: 768px) {
          .hero-section { min-height: unset; }
          .hero-content { padding: 80px 20px 40px; }
          .hero-h1 { font-size: clamp(38px, 9vw, 56px); }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-stat-item { padding: 20px 12px; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .hero-stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08) !important; }
          .hero-stat-item:nth-child(3), .hero-stat-item:nth-child(4) { border-bottom: none; }
          .hero-stat-number { font-size: 32px; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 72px 16px 32px; }
          .hero-h1 { font-size: clamp(34px, 8vw, 46px); }
          .hero-desc { font-size: 14px; }
          .hero-tagline { font-size: 9px; letter-spacing: 0.12em; }
        }
      `}</style>
    </section>
  );
}
