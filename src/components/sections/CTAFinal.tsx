import Link from "next/link";

interface CTAFinalProps {
  locale: string;
}

export default function CTAFinal({ locale }: CTAFinalProps) {
  return (
    <section className="ctaf-section">
      <div className="ctaf-inner">

        {/* Eyebrow avec lignes */}
        <div className="ctaf-eyebrow-row">
          <span className="ctaf-line" aria-hidden="true" />
          <span className="ctaf-eyebrow">Agir avec NSS</span>
          <span className="ctaf-line" aria-hidden="true" />
        </div>

        {/* H2 */}
        <h2 className="ctaf-title">
          Rejoignez{" "}
          <span className="ctaf-accent">175&nbsp;000 femmes</span>
          {" "}qui changent l&apos;Afrique.
        </h2>

        {/* Sous-titre */}
        <p className="ctaf-subtitle">
          Un mouvement ancré dans les territoires, gouverné par les femmes rurales,
          ouvert à toutes celles et ceux qui croient en la souveraineté alimentaire.
        </p>

        {/* Boutons */}
        <div className="ctaf-btns">
          <Link href={`/${locale}/agir/rejoindre`} className="ctaf-btn ctaf-btn--primary">
            Rejoindre le mouvement
          </Link>
          <Link href={`/${locale}/agir/donner`} className="ctaf-btn ctaf-btn--donate">
            Faire un don
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .ctaf-section {
          background: #0e2418;
          padding: 100px 40px;
        }
        .ctaf-inner {
          max-width: 560px;
          margin: 0 auto;
          text-align: center;
        }
        .ctaf-eyebrow-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .ctaf-line {
          flex: 1;
          max-width: 48px;
          height: 1px;
          background: #2d5c3a;
        }
        .ctaf-eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4caf80;
          white-space: nowrap;
        }
        .ctaf-title {
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .ctaf-accent {
          color: #4caf80;
        }
        .ctaf-subtitle {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin: 0 0 40px;
        }
        .ctaf-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ctaf-btn {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 24px;
          padding: 14px 28px;
          transition: opacity 0.2s ease;
          display: inline-block;
        }
        .ctaf-btn:hover { opacity: 0.85; }
        .ctaf-btn--primary {
          background: #4caf80;
          color: #0e2418;
        }
        .ctaf-btn--donate {
          background: #e8622a;
          color: #fff;
        }
        @media (max-width: 768px) {
          .ctaf-section { padding: 64px 20px; }
          .ctaf-title { font-size: 24px; }
          .ctaf-btns { flex-direction: column; align-items: center; }
          .ctaf-btn { width: 100%; text-align: center; max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
