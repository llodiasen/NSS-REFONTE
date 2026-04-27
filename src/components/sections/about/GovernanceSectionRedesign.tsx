/* ── Palette ──────────────────────────────────────────────────────────────── */
const GREEN_DARK  = "#045627";   // niveau 1 bg
const GREEN_LIGHT = "#A5CE46";   // connectors + borders
const GREEN_NSS   = "#4db882";   // vert clair titres / labels
const CREAM       = "#F5EDD6";   // niveau 4 badges bg
const CHARCOAL    = "#2A2A2A";   // texte stats

/* ── Data ─────────────────────────────────────────────────────────────────── */
const COUNTRIES = [
  { flag: "🇧🇫", code: "BF" },
  { flag: "🇨🇮", code: "CI" },
  { flag: "🇬🇲", code: "GM" },
  { flag: "🇬🇭", code: "GH" },
  { flag: "🇬🇳", code: "GN" },
  { flag: "🇬🇼", code: "GW" },
  { flag: "🇲🇱", code: "ML" },
  { flag: "🇸🇳", code: "SN" },
];

const STATS = [
  { val: "500+",     lbl: "Associations de Femmes Rurales" },
  { val: "175 000",  lbl: "Membres actives" },
  { val: "14",       lbl: "Pays représentés" },
];

/* ── Connector ───────────────────────────────────────────────────────────── */
function Conn() {
  return <div className="gv-conn" aria-hidden="true" />;
}

/* ── Main ─────────────────────────────────────────────────────────────────── */
export default function GovernanceSectionRedesign() {
  return (
    <section className="gv" aria-labelledby="gv-heading">
      <div className="gv-wrap">

        {/* ── Header ── */}
        <header className="gv-header">
          <div className="gv-eyebrow-row" aria-hidden="true">
            <span className="gv-ey-line" />
            <span className="gv-ey-txt">Structure &amp; Gouvernance</span>
            <span className="gv-ey-line" />
          </div>
          <h2 id="gv-heading" className="gv-h2">
            Un modèle de démocratie
            <br />
            <em className="gv-h2-em">100&nbsp;% paysanne.</em>
          </h2>
          <p className="gv-sub">
            Depuis 2017, NSS est gouverné exclusivement par des femmes rurales issues
            des mouvements membres — sans intermédiaire, sans tutelle externe.
          </p>
        </header>

        {/* ── Organigramme ── */}
        <div className="gv-chart" role="img" aria-label="Organigramme de gouvernance NSS">

          {/* Niveau 1 — Assemblée Générale */}
          <div className="gv-node gv-node--top">
            <p className="gv-n-label">Assemblée Générale</p>
            <p className="gv-n-sub">Autorité suprême du mouvement · Réunion annuelle</p>
            <span className="gv-n-badge gv-n-badge--light">
              Toutes les associations membres représentées
            </span>
          </div>

          <Conn />

          {/* Niveau 2 — Conseil d'Administration */}
          <div className="gv-node gv-node--mid">
            <p className="gv-n-label">Conseil d&apos;Administration</p>
            <p className="gv-n-sub">14 pays représentés · Gouvernance 100&nbsp;% féminine</p>
            <span className="gv-n-badge gv-n-badge--green">
              Élu par l&apos;Assemblée Générale
            </span>
          </div>

          <Conn />

          {/* Niveau 3 — Coordinations Nationales */}
          <div className="gv-node gv-node--mid">
            <p className="gv-n-label">Coordinations Nationales</p>
            <p className="gv-n-sub">Une coordinatrice par pays</p>
            <span className="gv-n-badge gv-n-badge--green">
              Lien entre la base et la gouvernance
            </span>
          </div>

          <Conn />

          {/* Niveau 4 — Badges pays */}
          <div className="gv-countries" role="list" aria-label="Pays membres">
            {COUNTRIES.map(({ flag, code }) => (
              <div key={code} className="gv-country" role="listitem">
                <span aria-hidden="true">{flag}</span>
                <span className="gv-code">{code}</span>
              </div>
            ))}
          </div>

          <Conn />

          {/* Niveau 5 — Stats */}
          <div className="gv-stats" role="list" aria-label="Chiffres clés">
            {STATS.map(({ val, lbl }) => (
              <div key={val} className="gv-stat" role="listitem">
                <span className="gv-stat-val">{val}</span>
                <span className="gv-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style suppressHydrationWarning>{`
        /* ── Section ──────────────────────────────────────────── */
        .gv { background: #FAFAF8; }
        .gv-wrap {
          max-width: 700px;
          margin: 0 auto;
          padding: 96px 40px 100px;
        }

        /* ── Header ───────────────────────────────────────────── */
        .gv-header { text-align: center; margin-bottom: 64px; }
        .gv-eyebrow-row {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; margin-bottom: 20px;
        }
        .gv-ey-line { display: block; width: 32px; height: 1px; background: ${GREEN_NSS}; flex-shrink: 0; }
        .gv-ey-txt {
          font-family: var(--font-body); font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 3px; color: ${GREEN_NSS}; white-space: nowrap;
        }
        .gv-h2 {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400; line-height: 1.15; color: #0a1f10; margin: 0 0 18px;
        }
        .gv-h2-em { font-style: italic; color: ${GREEN_NSS}; }
        .gv-sub {
          font-family: var(--font-body); font-size: 14px; line-height: 1.75;
          color: #4a5a4a; margin: 0; max-width: 500px;
          margin-left: auto; margin-right: auto;
        }

        /* ── Chart container ──────────────────────────────────── */
        .gv-chart { display: flex; flex-direction: column; align-items: center; }

        /* ── Connector ────────────────────────────────────────── */
        .gv-conn {
          width: 2px; height: 36px; flex-shrink: 0;
          background: linear-gradient(to bottom, ${GREEN_LIGHT}, rgba(165,206,70,.3));
        }

        /* ── Nodes ────────────────────────────────────────────── */
        .gv-node {
          width: 100%; max-width: 540px; box-sizing: border-box;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 24px 36px; border-radius: 4px;
        }

        /* Niveau 1 */
        .gv-node--top {
          background: ${GREEN_DARK};
          box-shadow: 0 12px 40px rgba(4,86,39,.28), 0 4px 12px rgba(4,86,39,.18);
        }
        .gv-node--top .gv-n-label { color: #fff; }
        .gv-node--top .gv-n-sub   { color: rgba(255,255,255,.72); }

        /* Niveau 2 & 3 */
        .gv-node--mid {
          background: #ffffff;
          border: 2px solid ${GREEN_LIGHT};
          box-shadow: 0 8px 28px rgba(0,0,0,.07), 0 2px 8px rgba(165,206,70,.15);
        }
        .gv-node--mid .gv-n-label { color: #0a1f10; }
        .gv-node--mid .gv-n-sub   { color: #4a5a4a; }

        /* Typography */
        .gv-n-label {
          font-family: var(--font-display); font-size: clamp(17px, 2vw, 22px);
          font-weight: 400; line-height: 1.2; margin: 0 0 8px;
        }
        .gv-n-sub {
          font-family: var(--font-body); font-size: 13px; line-height: 1.5;
          margin: 0 0 14px;
        }

        /* Badges */
        .gv-n-badge {
          font-family: var(--font-body); font-size: 9.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.8px; padding: 5px 12px;
          border-radius: 2px;
        }
        .gv-n-badge--light {
          color: ${GREEN_LIGHT}; background: rgba(165,206,70,.12);
          border: 1px solid rgba(165,206,70,.25);
        }
        .gv-n-badge--green {
          color: ${GREEN_DARK}; background: rgba(165,206,70,.15);
          border: 1px solid rgba(165,206,70,.35);
        }

        /* ── Countries ────────────────────────────────────────── */
        .gv-countries {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
          max-width: 540px; width: 100%; padding: 4px 0;
        }
        .gv-country {
          display: flex; align-items: center; gap: 5px;
          padding: 7px 14px; border-radius: 3px;
          background: ${CREAM};
          border: 1px solid rgba(165,206,70,.4);
          transition: border-color .2s, box-shadow .2s;
        }
        .gv-country:hover {
          border-color: ${GREEN_LIGHT};
          box-shadow: 0 2px 8px rgba(165,206,70,.2);
        }
        .gv-code {
          font-family: var(--font-body); font-size: 11px; font-weight: 700;
          letter-spacing: 1px; color: ${GREEN_DARK};
        }

        /* ── Stats ────────────────────────────────────────────── */
        .gv-stats {
          display: flex; width: 100%; max-width: 540px;
          background: #ffffff;
          border: 1px solid ${GREEN_LIGHT};
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0,0,0,.07);
        }
        .gv-stat {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          padding: 22px 16px;
          border-right: 1px solid rgba(165,206,70,.3);
        }
        .gv-stat:last-child { border-right: none; }
        .gv-stat-val {
          font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px);
          font-weight: 400; color: ${CHARCOAL}; line-height: 1; margin-bottom: 6px;
        }
        .gv-stat-lbl {
          font-family: var(--font-body); font-size: 10.5px; font-weight: 500;
          color: #7a8a7a; text-align: center; line-height: 1.4;
        }

        /* ── Responsive ───────────────────────────────────────── */
        @media (max-width: 600px) {
          .gv-wrap { padding: 64px 20px 72px; }
          .gv-node { padding: 20px 20px; }
          .gv-stats { flex-direction: column; }
          .gv-stat { border-right: none; border-bottom: 1px solid rgba(165,206,70,.3); }
          .gv-stat:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
