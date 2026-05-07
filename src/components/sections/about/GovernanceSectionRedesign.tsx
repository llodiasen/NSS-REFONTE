import React from "react";

/* ── Palette ──────────────────────────────────────────────────────────────── */
const GREEN_DARK  = "#045627";
const GREEN_MID   = "#2d9a6a";
const GREEN_VIF   = "#00AD4C";
const GREEN_LIGHT = "#A5CE46";
const CREAM       = "#FAF6EE";
const CHARCOAL    = "#1a1a1a";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const LEVELS = [
  {
    num: "01",
    title: "Assemblée Générale",
    sub: "Autorité suprême du mouvement · Réunion annuelle",
    badge: "Toutes les associations membres représentées",
    accent: GREEN_VIF,
  },
  {
    num: "02",
    title: "Conseil d'Administration",
    sub: "14 pays représentés · Gouvernance 100 % féminine",
    badge: "Élu par l'Assemblée Générale",
    accent: GREEN_MID,
  },
  {
    num: "03",
    title: "Coordinations Nationales",
    sub: "Une coordinatrice par pays",
    badge: "Lien entre la base et la gouvernance",
    accent: GREEN_DARK,
  },
];

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

const STATS = [
  { val: "500+",    lbl: "Associations de Femmes Rurales" },
  { val: "175 000", lbl: "Membres actives" },
  { val: "14",      lbl: "Pays représentés" },
];

/* ── Arrow connector ──────────────────────────────────────────────────────── */
function Arrow() {
  return (
    <div className="gvr-conn" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h20M17 7l7 7-7 7" stroke={GREEN_LIGHT} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────────────────────── */
export default function GovernanceSectionRedesign() {
  /* flat list: level, arrow, level, arrow, level */
  const levelItems: React.ReactNode[] = [];
  LEVELS.forEach((l, i) => {
    levelItems.push(
      <div key={l.num} className="gvr-level"
        style={{ "--accent": l.accent } as React.CSSProperties}>
        <span className="gvr-bg-num" aria-hidden="true">{l.num}</span>
        <span className="gvr-lnum">{l.num}</span>
        <h3 className="gvr-ltitle">{l.title}</h3>
        <p className="gvr-ldesc">{l.sub}</p>
        <span className="gvr-lbadge">{l.badge}</span>
      </div>
    );
    if (i < LEVELS.length - 1) levelItems.push(<Arrow key={`a${i}`} />);
  });

  return (
    <section className="gvr" aria-labelledby="gvr-heading">

      {/* ── Header ── */}
      <header className="gvr-header">
        <div className="gvr-eyebrow">
          <span className="gvr-ey-line" />
          <span className="gvr-ey-txt">Ce que nous portons</span>
          <span className="gvr-ey-line" />
        </div>
        <h2 id="gvr-heading" className="gvr-h2">
          Un modèle de démocratie <em className="gvr-h2-em">100 % paysanne.</em>
        </h2>
        <p className="gvr-sub">
          Depuis 2017, NSS est gouverné exclusivement par des femmes rurales issues
          des mouvements membres — sans intermédiaire, sans tutelle externe.
        </p>
      </header>

      {/* ── Citation manifeste ── */}
      <div className="gvr-manifeste" role="complementary">
        <span className="gvr-mquote" aria-hidden="true">&ldquo;</span>
        <blockquote className="gvr-mtext">
          Aucune décision sur nous,{" "}
          <em className="gvr-mtext-em">sans nous.</em>
        </blockquote>
        <div className="gvr-mline" aria-hidden="true" />
      </div>

      {/* ── Niveaux de gouvernance ── */}
      <div className="gvr-levels-wrap">
        <div className="gvr-levels">{levelItems}</div>
      </div>

      {/* ── Pays membres ── */}
      <div className="gvr-countries-wrap">
        <p className="gvr-countries-label">8 pays membres du réseau NSS</p>
        <div className="gvr-countries" role="list">
          {COUNTRIES.map(({ flag, name }) => (
            <div key={name} className="gvr-country" role="listitem">
              <span className="gvr-flag" aria-hidden="true">{flag}</span>
              <span className="gvr-cname">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="gvr-stats" role="list" aria-label="Chiffres clés">
        {STATS.map(({ val, lbl }) => (
          <div key={val} className="gvr-stat" role="listitem">
            <span className="gvr-stat-val">{val}</span>
            <span className="gvr-stat-lbl">{lbl}</span>
          </div>
        ))}
      </div>

      <style suppressHydrationWarning>{`
        /* ── Section ───────────────────────────────────────────────── */
        .gvr { background: #ffffff; overflow: hidden; }

        /* ── Header ────────────────────────────────────────────────── */
        .gvr-header {
          max-width: 720px; margin: 0 auto;
          padding: 112px 40px 56px;
          text-align: center;
        }
        .gvr-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 14px;
          margin-bottom: 20px;
        }
        .gvr-ey-line { display: block; width: 28px; height: 1px; background: rgba(165,206,70,.5); flex-shrink: 0; }
        .gvr-ey-txt {
          font-family: var(--font-body); font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px; color: ${GREEN_LIGHT};
          white-space: nowrap;
        }
        .gvr-h2 {
          font-family: var(--font-display); font-size: clamp(24px, 3vw, 38px);
          font-weight: 600; line-height: 1.15; color: ${CHARCOAL};
          margin: 0 0 18px; white-space: nowrap;
        }
        .gvr-h2-em { font-style: italic; font-weight: 600; color: ${GREEN_LIGHT}; }
        .gvr-sub {
          font-family: var(--font-body); font-size: 14px; line-height: 1.75;
          color: #4a5a4a; margin: 0;
        }

        /* ── Manifeste ──────────────────────────────────────────────── */
        .gvr-manifeste {
          position: relative;
          background: ${GREEN_DARK};
          padding: 48px 60px;
          text-align: center;
          overflow: hidden;
        }
        .gvr-mquote {
          position: absolute; top: -20px; left: 40px;
          font-family: var(--font-display); font-size: 160px; font-weight: 700;
          color: rgba(165,206,70,.07); line-height: 1; pointer-events: none;
          user-select: none; select: none;
        }
        .gvr-mtext {
          font-family: var(--font-display);
          font-size: clamp(18px, 2.4vw, 30px);
          font-weight: 400; font-style: italic;
          color: rgba(245,237,214,.92);
          margin: 0 0 20px; line-height: 1.45;
          position: relative; z-index: 1;
        }
        .gvr-mtext-em { color: ${GREEN_LIGHT}; font-style: italic; }
        .gvr-mline {
          width: 48px; height: 2px; margin: 0 auto;
          background: linear-gradient(90deg, ${GREEN_VIF}, ${GREEN_LIGHT});
          border-radius: 2px;
        }

        /* ── Governance levels ──────────────────────────────────────── */
        .gvr-levels-wrap {
          max-width: 1100px; margin: 0 auto;
          padding: 64px 40px 56px;
        }
        .gvr-levels {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 0;
        }
        .gvr-level {
          position: relative; overflow: hidden;
          background: #fff;
          border: 1.5px solid rgba(165,206,70,.3);
          border-top: 4px solid var(--accent);
          border-radius: 3px;
          padding: 28px 24px 24px;
          transition: box-shadow .25s, transform .25s;
          height: 100%;
          box-sizing: border-box;
        }
        .gvr-level:hover {
          box-shadow: 0 14px 40px rgba(4,86,39,.13);
          transform: translateY(-5px);
        }
        .gvr-bg-num {
          position: absolute; top: -12px; right: 8px;
          font-family: var(--font-display); font-size: 96px; font-weight: 700;
          color: rgba(165,206,70,.07); line-height: 1;
          pointer-events: none; user-select: none;
        }
        .gvr-lnum {
          display: block;
          font-family: var(--font-body); font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 12px;
        }
        .gvr-ltitle {
          font-family: var(--font-display); font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 600; color: ${CHARCOAL};
          margin: 0 0 10px; line-height: 1.2;
        }
        .gvr-ldesc {
          font-family: var(--font-body); font-size: 12.5px;
          line-height: 1.6; color: #5a6a5a; margin: 0 0 18px;
        }
        .gvr-lbadge {
          display: inline-block;
          font-family: var(--font-body); font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.6px;
          color: var(--accent); border: 1px solid var(--accent);
          padding: 4px 10px; border-radius: 2px;
        }
        .gvr-conn {
          display: flex; align-items: center; justify-content: center;
          padding: 0 14px; flex-shrink: 0;
        }

        /* ── Countries ──────────────────────────────────────────────── */
        .gvr-countries-wrap {
          background: ${CREAM};
          padding: 44px 40px;
          text-align: center;
        }
        .gvr-countries-label {
          font-family: var(--font-body); font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px; color: ${GREEN_DARK};
          margin: 0 0 22px;
        }
        .gvr-countries {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
          max-width: 760px; margin: 0 auto;
        }
        .gvr-country {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid rgba(165,206,70,.4);
          border-radius: 100px; padding: 8px 18px;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .gvr-country:hover {
          border-color: ${GREEN_LIGHT};
          box-shadow: 0 4px 12px rgba(165,206,70,.2);
          transform: translateY(-2px);
        }
        .gvr-flag { font-size: 20px; line-height: 1; }
        .gvr-cname {
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
          color: ${GREEN_DARK}; letter-spacing: .2px;
        }

        /* ── Stats ──────────────────────────────────────────────────── */
        .gvr-stats { background: ${GREEN_DARK}; display: flex; }
        .gvr-stat {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          padding: 44px 20px;
          border-right: 1px solid rgba(255,255,255,.1);
        }
        .gvr-stat:last-child { border-right: none; }
        .gvr-stat-val {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400; color: #fff; line-height: 1; margin-bottom: 8px;
        }
        .gvr-stat-lbl {
          font-family: var(--font-body); font-size: 11px; font-weight: 500;
          color: rgba(165,206,70,.85); text-align: center;
          line-height: 1.45; letter-spacing: .3px;
        }

        /* ── Responsive ─────────────────────────────────────────────── */
        @media (max-width: 900px) {
          .gvr-header { padding: 80px 24px 48px; }
          .gvr-h2 { white-space: normal; }
          .gvr-manifeste { padding: 40px 32px; }
          .gvr-mquote { font-size: 100px; }
          .gvr-levels-wrap { padding: 48px 24px 40px; }
          .gvr-levels { grid-template-columns: 1fr; }
          .gvr-conn { padding: 10px 0; transform: rotate(90deg); }
          .gvr-countries-wrap { padding: 36px 24px; }
          .gvr-stats { flex-direction: column; }
          .gvr-stat {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.1);
            padding: 28px 20px;
          }
          .gvr-stat:last-child { border-bottom: none; }
        }
        @media (max-width: 500px) {
          .gvr-manifeste { padding: 32px 20px; }
          .gvr-mquote { display: none; }
          .gvr-level { padding: 22px 18px 20px; }
          .gvr-flag { font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
