import Link from "next/link";

const STATS = [
  { val: "175 000", lbl: "Membres actives" },
  { val: "14",      lbl: "Pays" },
  { val: "2011",    lbl: "Depuis" },
];

export default function AboutCTA() {
  return (
    <section className="ac" aria-labelledby="ac-heading">
      <div className="ac__wrap">

        {/* ── Tagline ── */}
        <div className="ac__tagline" aria-hidden="true">
          <span className="ac__tl-line">Par nous-mêmes.</span>
          <span className="ac__tl-sep">·</span>
          <span className="ac__tl-line">Pour nous-mêmes.</span>
          <span className="ac__tl-sep">·</span>
          <span className="ac__tl-line">En nous-mêmes.</span>
        </div>

        {/* ── Rule ── */}
        <div className="ac__rule" aria-hidden="true" />

        {/* ── Corps ── */}
        <span className="ac__ey">Rejoindre le mouvement</span>
        <h2 id="ac-heading" className="ac__h2">
          Ensemble, nous sommes<br />
          <em>la solution.</em>
        </h2>
        <p className="ac__body">
          175&nbsp;000 femmes rurales transforment déjà les systèmes alimentaires
          en Afrique de l&rsquo;Ouest. Rejoignez le mouvement, portez la voix
          de votre communauté, et construisez l&rsquo;avenir avec nous.
        </p>

        {/* ── Boutons ── */}
        <div className="ac__btns">
          <Link href="/fr/agir/rejoindre" className="ac__btn ac__btn--primary">
            Adhérer à NSS
          </Link>
          <Link href="/fr/contact" className="ac__btn ac__btn--ghost">
            Nous contacter →
          </Link>
        </div>

        {/* ── Stats ── */}
        <ul className="ac__stats" role="list" aria-label="NSS en chiffres">
          {STATS.map(({ val, lbl }) => (
            <li key={val} className="ac__stat" role="listitem">
              <span className="ac__stat-val">{val}</span>
              <span className="ac__stat-lbl">{lbl}</span>
            </li>
          ))}
        </ul>

      </div>

      <style>{`
        /* ══ Section ════════════════════════════════════════════ */
        .ac {
          background: #0a1f10;
          overflow: hidden;
        }
        .ac__wrap {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 40px 96px;
          text-align: center;
        }

        /* ══ Tagline ════════════════════════════════════════════ */
        .ac__tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }
        .ac__tl-line {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(18px, 2vw, 24px);
          font-style: italic;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.01em;
        }
        .ac__tl-sep {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          color: rgba(232,168,56,0.35);
          font-size: 18px;
        }

        /* ══ Rule ═══════════════════════════════════════════════ */
        .ac__rule {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #E8A838, transparent);
          margin: 0 auto 48px;
        }

        /* ══ Corps ══════════════════════════════════════════════ */
        .ac__ey {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #A5CE46; margin-bottom: 18px;
        }
        .ac__h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 500; line-height: 1.1;
          color: #fff; margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .ac__h2 em { font-style: italic; color: #A5CE46; }
        .ac__body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.75; color: rgba(255,255,255,0.6);
          max-width: 560px; margin: 0 auto 44px;
        }

        /* ══ Boutons ════════════════════════════════════════════ */
        .ac__btns {
          display: flex; gap: 16px;
          justify-content: center; flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .ac__btn {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13.5px; font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          padding: 13px 32px;
          display: inline-block;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .ac__btn--primary {
          background: #00AD4C; color: #fff; border: 1px solid #00AD4C;
        }
        .ac__btn--primary:hover {
          background: #009040; border-color: #009040;
          transform: translateY(-2px);
        }
        .ac__btn--ghost {
          background: transparent;
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .ac__btn--ghost:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ══ Stats ══════════════════════════════════════════════ */
        .ac__stats {
          list-style: none; margin: 0; padding: 0;
          display: flex; justify-content: center;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 40px; gap: 0;
        }
        .ac__stat {
          flex: 1; max-width: 160px;
          display: flex; flex-direction: column; align-items: center;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .ac__stat:last-child { border-right: none; }
        .ac__stat-val {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 600; line-height: 1;
          color: #fff; margin-bottom: 6px;
        }
        .ac__stat-lbl {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ══ Responsive ═════════════════════════════════════════ */
        @media (max-width: 600px) {
          .ac__wrap { padding: 72px 24px 64px; }
          .ac__tagline { gap: 8px; }
          .ac__tl-sep { display: none; }
          .ac__tl-line { display: block; width: 100%; }
          .ac__btns { flex-direction: column; align-items: center; }
          .ac__btn { width: 220px; text-align: center; }
          .ac__stats { gap: 0; }
          .ac__stat { max-width: 33%; padding: 0 12px; }
        }
      `}</style>
    </section>
  );
}
