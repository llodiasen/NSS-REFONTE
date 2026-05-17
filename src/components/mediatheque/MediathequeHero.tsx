import Link from "next/link"

export default function MediathequeHero() {
  return (
    <section className="mh" aria-label="En-tête médiathèque">

      <div className="mh-bg" aria-hidden="true" />
      <div className="mh-overlay" aria-hidden="true" />

      <div className="mh-body">

        {/* Breadcrumb */}
        <nav className="mh-bc" aria-label="Fil d'Ariane">
          <Link href="/fr" className="mh-bc-link">Accueil</Link>
          <span className="mh-bc-sep" aria-hidden="true">/</span>
          <span>Médiathèque</span>
        </nav>

        {/* Eyebrow */}
        <div className="mh-eyebrow" aria-hidden="true">
          <span className="mh-ey-line" />
          <span className="mh-ey-txt">MÉDIATHÈQUE NSS</span>
          <span className="mh-ey-line" />
        </div>

        {/* H1 */}
        <h1 className="mh-h1">
          Leur parole,
          <em>en images.</em>
        </h1>

        {/* Sub */}
        <p className="mh-sub">
          Reportages, témoignages et formations filmées — la vie du réseau
          NSS à travers 14 pays d&apos;Afrique de l&apos;Ouest.
        </p>

        <a href="#contenu" className="mh-cta">Explorer les vidéos →</a>

      </div>

      <style>{`
        .mh {
          position: relative;
          height: 340px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          background: #0d1a0d;
        }

        .mh-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/actualites/nss-cifap-2025.jpg');
          background-size: cover;
          background-position: center 35%;
        }

        .mh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(4,22,8,0.93) 0%,
            rgba(4,22,8,0.78) 52%,
            rgba(4,22,8,0.45) 100%
          );
        }

        .mh-body {
          position: relative;
          z-index: 2;
          padding: 0 80px 44px;
          max-width: 640px;
        }

        /* Breadcrumb */
        .mh-bc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }
        .mh-bc-link {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mh-bc-link:hover { color: rgba(255,255,255,0.8); }
        .mh-bc-sep { color: rgba(255,255,255,0.2); }

        /* Eyebrow */
        .mh-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .mh-ey-line {
          display: block;
          width: 22px;
          height: 1px;
          background: rgba(165,206,70,0.5);
          flex-shrink: 0;
        }
        .mh-ey-txt {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A5CE46;
        }

        /* H1 */
        .mh-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }
        .mh-h1 em {
          display: block;
          color: #A5CE46;
          font-style: italic;
        }

        /* Sub */
        .mh-sub {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.62);
          line-height: 1.7;
          margin: 0 0 22px;
          max-width: 460px;
        }

        /* CTA */
        .mh-cta {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 24px;
          padding: 9px 20px;
          display: inline-block;
          transition: border-color 0.2s;
          letter-spacing: 0.04em;
        }
        .mh-cta:hover { border-color: rgba(255,255,255,0.65); }

        @media (max-width: 768px) {
          .mh { height: auto; min-height: 260px; }
          .mh-body { padding: 0 24px 32px; }
          .mh-h1 { font-size: clamp(1.75rem, 7vw, 2.4rem); }
        }
      `}</style>
    </section>
  )
}
