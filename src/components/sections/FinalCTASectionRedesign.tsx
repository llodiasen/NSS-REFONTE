import Link from "next/link";

/* ── palette ─────────────────────────────────────────────────────────────── */
const GOLD    = "#E8A838";
const GREEN_V = "#2d9a6a";
const CREAM   = "#F5EDD6";

export default function FinalCTASectionRedesign() {
  return (
    <section className="fcta-section" aria-labelledby="fcta-heading">
      {/* radial glow at centre */}
      <div className="fcta-glow" aria-hidden />

      <div className="fcta-inner">

        {/* Eyebrow */}
        <p className="fcta-eyebrow">Rejoindre le mouvement</p>

        {/* Heading */}
        <h2 id="fcta-heading" className="fcta-h2">
          Ensemble, nous sommes <em className="fcta-h2-em">la solution.</em>
        </h2>

        {/* Subtitle */}
        <p className="fcta-sub">
          175&nbsp;000 femmes rurales transforment déjà les systèmes alimentaires en Afrique
          de l&apos;Ouest. Rejoignez le mouvement, portez la voix de votre communauté,
          et construisez l&apos;avenir avec nous.
        </p>

        {/* CTAs */}
        <div className="fcta-btns">
          <Link href="/fr/agir/rejoindre" className="fcta-btn fcta-btn--fill">Adhérer à NSS</Link>
          <Link href="/fr/contact"        className="fcta-btn fcta-btn--ghost">Nous contacter →</Link>
        </div>

      </div>

      <style suppressHydrationWarning>{`
        .fcta-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(158deg, #045627 0%, #021f0e 50%, #000000 100%);
          padding: 64px 40px 60px;
          text-align: center;
        }

        /* ambient radial glow */
        .fcta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          width: 600px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(46,154,106,.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .fcta-inner {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Eyebrow */
        .fcta-eyebrow {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3.5px;
          color: ${GOLD};
          margin: 0 0 16px;
        }

        /* H2 */
        .fcta-h2 {
          font-family: var(--font-display);
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 400;
          color: ${CREAM};
          line-height: 1.12;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .fcta-h2-em {
          font-style: italic;
          color: ${GOLD};
          display: inline;
        }

        /* Subtitle */
        .fcta-sub {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(245, 237, 214, .70);
          line-height: 1.75;
          margin: 0 0 32px;
          max-width: 520px;
          text-align: center;
        }

        /* Buttons */
        .fcta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .fcta-btn {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 3px;
          letter-spacing: .5px;
          transition: background .22s, color .22s, border-color .22s, transform .15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .fcta-btn--fill {
          background: ${GREEN_V};
          color: #ffffff;
          border: 2px solid ${GREEN_V};
        }
        .fcta-btn--fill:hover {
          background: #3ab87e;
          border-color: #3ab87e;
          transform: translateY(-2px);
        }
        .fcta-btn--ghost {
          background: transparent;
          color: ${CREAM};
          border: 2px solid rgba(245, 237, 214, .40);
        }
        .fcta-btn--ghost:hover {
          border-color: ${CREAM};
          background: rgba(245, 237, 214, .07);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .fcta-section { padding: 48px 24px 44px; }
          .fcta-btns { flex-direction: column; align-items: center; }
          .fcta-btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
