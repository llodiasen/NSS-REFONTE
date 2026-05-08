const COUNTRIES = [
  { flag: "🇧🇫", name: "Burkina Faso" },
  { flag: "🇨🇮", name: "Côte d'Ivoire" },
  { flag: "🇬🇲", name: "Gambie" },
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇬🇳", name: "Guinée" },
  { flag: "🇬🇼", name: "Guinée-Bissau" },
  { flag: "🇲🇱", name: "Mali" },
  { flag: "🇸🇳", name: "Sénégal" },
];

const TIERS = [
  {
    cls: "top",
    label: "Assemblée Générale",
    sub: "Autorité suprême du mouvement · Réunion annuelle",
    detail: "Toutes les associations membres représentées",
  },
  {
    cls: "mid",
    label: "Conseil d'Administration",
    sub: "14 pays représentés · Gouvernance 100 % féminine",
    detail: "Élu par l'Assemblée Générale",
  },
  {
    cls: "low",
    label: "Coordinations Nationales",
    sub: "Une coordinatrice par pays",
    detail: "Lien entre la base et la gouvernance",
  },
];

export default function AboutGovernance() {
  return (
    <section className="ag" aria-labelledby="ag-heading">
      <div className="ag__wrap">

        <header className="ag__hd">
          <span className="ag__ey">Structure &amp; Gouvernance</span>
          <h2 id="ag-heading" className="ag__h2">
            Un modèle de démocratie<br />
            <em>100&nbsp;% paysanne.</em>
          </h2>
          <p className="ag__intro">
            Depuis 2017, NSS est gouverné exclusivement par des femmes rurales issues
            des mouvements membres — sans intermédiaire, sans tutelle externe.
          </p>
        </header>

        {/* ── Hiérarchie ── */}
        <div className="ag__chart" role="img" aria-label="Organigramme NSS">

          {TIERS.map((tier, i) => (
            <div key={tier.cls} className="ag__row">
              {i > 0 && <div className="ag__connector" aria-hidden="true" />}
              <div className={`ag__node ag__node--${tier.cls}`}>
                <strong className="ag__node-label">{tier.label}</strong>
                <span className="ag__node-sub">{tier.sub}</span>
                <span className="ag__node-detail">{tier.detail}</span>
              </div>
            </div>
          ))}

          {/* Connector → pays */}
          <div className="ag__connector" aria-hidden="true" />

          {/* Pays */}
          <div className="ag__countries" role="list" aria-label="Pays membres CIFAP">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="ag__country" role="listitem">
                <span className="ag__flag" aria-hidden="true">{c.flag}</span>
                <span className="ag__cname">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Connector → membres */}
          <div className="ag__connector" aria-hidden="true" />

          {/* Stats finales */}
          <div className="ag__stats">
            {[
              { val: "500+",     lbl: "Associations de Femmes Rurales" },
              { val: "175 000", lbl: "Membres actives" },
              { val: "14",       lbl: "Pays" },
            ].map(({ val, lbl }) => (
              <div key={val} className="ag__stat">
                <span className="ag__stat-val">{val}</span>
                <span className="ag__stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        /* ══ Section ════════════════════════════════════════════ */
        .ag { background: #FAFAF8; }
        .ag__wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 100px 40px 96px;
        }

        /* ══ Header ═════════════════════════════════════════════ */
        .ag__hd { text-align: center; margin-bottom: 72px; }
        .ag__ey {
          display: block;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #00AD4C; margin-bottom: 16px;
        }
        .ag__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 500; line-height: 1.15;
          color: #0a1f10; margin: 0 0 20px;
        }
        .ag__h2 em { font-style: italic; color: #00AD4C; }
        .ag__intro {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 15px; line-height: 1.7;
          color: #4a5a4a; margin: 0; max-width: 520px;
          margin-left: auto; margin-right: auto;
        }

        /* ══ Chart ══════════════════════════════════════════════ */
        .ag__chart {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ag__row { width: 100%; display: flex; flex-direction: column; align-items: center; }

        /* ══ Connector ══════════════════════════════════════════ */
        .ag__connector {
          width: 2px; height: 32px;
          background: linear-gradient(to bottom, #00AD4C, rgba(0,173,76,0.25));
          flex-shrink: 0;
        }

        /* ══ Noeuds ═════════════════════════════════════════════ */
        .ag__node {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 22px 32px;
          border-radius: 8px;
          width: 100%; max-width: 540px;
          box-sizing: border-box;
        }
        .ag__node--top {
          background: #045627;
          box-shadow: 0 8px 32px rgba(4,86,39,0.18);
        }
        .ag__node--top .ag__node-label { color: #fff; }
        .ag__node--top .ag__node-sub   { color: rgba(255,255,255,0.72); }
        .ag__node--top .ag__node-detail { color: rgba(165,206,70,0.7); }

        .ag__node--mid {
          background: #fff;
          border: 1px solid rgba(0,173,76,0.25);
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .ag__node--mid .ag__node-label { color: #0a1f10; }
        .ag__node--mid .ag__node-sub   { color: #4a5a4a; }
        .ag__node--mid .ag__node-detail { color: #00AD4C; }

        .ag__node--low {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          max-width: 440px;
        }
        .ag__node--low .ag__node-label { color: #0a1f10; }
        .ag__node--low .ag__node-sub   { color: #4a5a4a; }
        .ag__node--low .ag__node-detail { color: rgba(0,0,0,0.35); }

        .ag__node-label {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 15px; font-weight: 700; line-height: 1.2;
          margin-bottom: 6px;
        }
        .ag__node-sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12.5px; line-height: 1.5;
          margin-bottom: 4px;
        }
        .ag__node-detail {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ══ Pays ═══════════════════════════════════════════════ */
        .ag__countries {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px;
          padding: 4px 0;
          width: 100%; max-width: 600px;
        }
        .ag__country {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px;
          transition: border-color 0.2s, background 0.2s;
        }
        .ag__country:hover {
          border-color: rgba(0,173,76,0.3);
          background: rgba(165,206,70,0.06);
        }
        .ag__flag { font-size: 14px; line-height: 1; }
        .ag__cname {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px; font-weight: 500;
          color: #2e3d2e;
        }

        /* ══ Stats ══════════════════════════════════════════════ */
        .ag__stats {
          display: flex; gap: 0;
          width: 100%; max-width: 540px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
        }
        .ag__stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; padding: 20px 16px;
          border-right: 1px solid rgba(0,0,0,0.06);
        }
        .ag__stat:last-child { border-right: none; }
        .ag__stat-val {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 600; color: #045627; line-height: 1;
          margin-bottom: 4px;
        }
        .ag__stat-lbl {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10.5px; font-weight: 500;
          color: #7a8a7a; text-align: center;
          line-height: 1.4;
        }

        /* ══ Responsive ═════════════════════════════════════════ */
        @media (max-width: 600px) {
          .ag__wrap { padding: 72px 24px 64px; }
          .ag__node { padding: 18px 20px; }
          .ag__stats { flex-direction: column; }
          .ag__stat { border-right: none; border-bottom: 1px solid rgba(0,0,0,0.06); }
          .ag__stat:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
