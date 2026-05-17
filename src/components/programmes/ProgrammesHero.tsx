import Link from 'next/link'

const C_GREEN = '#97C459'

const STATS = [
  { value: '3',    label: 'Programmes', color: C_GREEN, last: false },
  { value: '8',    label: 'Pays',       color: C_GREEN, last: false },
  { value: 'Annuel', label: 'Rythme',   color: C_GREEN, last: false },
  { value: '2017', label: 'Depuis',     color: C_GREEN, last: true  },
]

export default function ProgrammesHero() {
  return (
    <section className="prh" aria-labelledby="prh-titre">

      <div className="prh-bg" aria-hidden />
      <div className="prh-overlay" aria-hidden />

      <div className="prh-body">

        {/* Fil d'Ariane */}
        <nav className="prh-bc" aria-label="Fil d'Ariane">
          <Link href="/fr" className="prh-bc-home">Accueil</Link>
          <span className="prh-bc-sep" aria-hidden>›</span>
          <span className="prh-bc-curr">Programmes</span>
        </nav>

        {/* Label */}
        <div className="prh-label" aria-hidden="false">
          <span className="prh-label-line" aria-hidden />
          <span>NOS PROGRAMMES</span>
        </div>

        {/* H1 */}
        <h1 id="prh-titre" className="prh-h1">
          Former, rassembler,{' '}
          <em>agir ensemble.</em>
        </h1>

        {/* Lead */}
        <p className="prh-lead">
          Trois événements annuels pour former, relier et célébrer les leaders
          paysans d&apos;Afrique de l&apos;Ouest autour de la souveraineté alimentaire.
        </p>

        {/* Stats */}
        <div className="prh-stats" role="list" aria-label="Chiffres programmes">
          {STATS.map(({ value, label, color, last }) => (
            <div key={label} className={`prh-stat${last ? '' : ' prh-stat--sep'}`} role="listitem">
              <span className="prh-stat-v" style={{ color }}>{value}</span>
              <span className="prh-stat-l">{label}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .prh {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .prh-bg {
          position: absolute;
          inset: 0;
          background: url('/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg') center / cover no-repeat;
          z-index: 0;
        }
        .prh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5,12,5,0.88) 50%,
            rgba(5,12,5,0.40) 100%
          );
          z-index: 1;
        }
        .prh-body {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
        }

        /* Breadcrumb */
        .prh-bc {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 32px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
        }
        .prh-bc-home { color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
        .prh-bc-home:hover { color: #ffffff; }
        .prh-bc-sep  { color: rgba(255,255,255,0.4); }
        .prh-bc-curr { color: #ffffff; }

        /* Label */
        .prh-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${C_GREEN};
        }
        .prh-label-line { display: block; width: 28px; height: 1.5px; background: ${C_GREEN}; flex-shrink: 0; }

        /* H1 */
        .prh-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2.09rem, 4.75vw, 3.04rem);
          font-weight: 700; line-height: 1.1;
          color: #ffffff; max-width: 600px;
          margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .prh-h1 em { font-style: italic; color: #ffffff; }

        /* Lead */
        .prh-lead {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 1rem; font-weight: 400; line-height: 1.7;
          color: #ffffff; max-width: 520px; margin: 0;
        }

        /* Stats */
        .prh-stats {
          display: flex; align-items: baseline; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 20px; margin-top: 28px; row-gap: 12px;
        }
        .prh-stat { display: flex; align-items: baseline; gap: 6px; }
        .prh-stat--sep { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.15); }
        .prh-stat-v {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 1.25rem; font-weight: 700; line-height: 1; letter-spacing: -0.01em;
        }
        .prh-stat-l {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .prh { min-height: 520px; }
          .prh-body { padding: 60px 24px 40px; }
          .prh-stat--sep { padding-right: 20px; margin-right: 20px; }
        }
        @media (max-width: 480px) {
          .prh { min-height: 540px; }
          .prh-body { padding: 56px 20px 36px; }
          .prh-h1 { max-width: 100%; }
          .prh-stat--sep { padding-right: 14px; margin-right: 14px; }
        }
      `}</style>
    </section>
  )
}
