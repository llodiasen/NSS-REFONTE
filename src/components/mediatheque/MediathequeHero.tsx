import Link from 'next/link'

const C_GREEN = '#97C459'

const STATS = [
  { value: '15',  label: 'Vidéos',      color: C_GREEN, last: false },
  { value: '14',  label: 'Pays',        color: C_GREEN, last: false },
  { value: '2017', label: 'Depuis',     color: C_GREEN, last: true  },
]

export default function MediathequeHero() {
  return (
    <section className="vh" aria-labelledby="vh-titre">

      <div className="vh-bg" aria-hidden />
      <div className="vh-overlay" aria-hidden />

      <div className="vh-body">

        {/* Fil d'Ariane */}
        <nav className="vh-bc" aria-label="Fil d'Ariane">
          <Link href="/fr" className="vh-bc-home">Accueil</Link>
          <span className="vh-bc-sep" aria-hidden>›</span>
          <span className="vh-bc-curr">Médiathèque</span>
        </nav>

        {/* Label */}
        <div className="vh-label" aria-hidden="false">
          <span className="vh-label-line" aria-hidden />
          <span>MÉDIATHÈQUE NSS</span>
        </div>

        {/* H1 */}
        <h1 id="vh-titre" className="vh-h1">
          Leur parole,{' '}
          <em>en images.</em>
        </h1>

        {/* Lead */}
        <p className="vh-lead">
          Reportages, témoignages et formations filmées — la vie du réseau
          NSS à travers 14 pays d&apos;Afrique de l&apos;Ouest.
        </p>

        {/* CTA */}
        <a href="#contenu" className="vh-cta">Explorer les vidéos →</a>

        {/* Stats */}
        <div className="vh-stats" role="list" aria-label="Chiffres médiathèque">
          {STATS.map(({ value, label, color, last }) => (
            <div key={label} className={`vh-stat${last ? '' : ' vh-stat--sep'}`} role="listitem">
              <span className="vh-stat-v" style={{ color }}>{value}</span>
              <span className="vh-stat-l">{label}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .vh {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .vh-bg {
          position: absolute;
          inset: 0;
          background: url('/images/actualites/nss-cifap-2025.jpg') center / cover no-repeat;
          z-index: 0;
        }
        .vh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5,12,5,0.88) 50%,
            rgba(5,12,5,0.40) 100%
          );
          z-index: 1;
        }
        .vh-body {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
        }

        /* Breadcrumb */
        .vh-bc {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 32px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
        }
        .vh-bc-home { color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
        .vh-bc-home:hover { color: #ffffff; }
        .vh-bc-sep  { color: rgba(255,255,255,0.4); }
        .vh-bc-curr { color: #ffffff; }

        /* Label */
        .vh-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${C_GREEN};
        }
        .vh-label-line { display: block; width: 28px; height: 1.5px; background: ${C_GREEN}; flex-shrink: 0; }

        /* H1 */
        .vh-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2.09rem, 4.75vw, 3.04rem);
          font-weight: 700; line-height: 1.1;
          color: #ffffff; max-width: 600px;
          margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .vh-h1 em { font-style: italic; color: #ffffff; }

        /* Lead */
        .vh-lead {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 1rem; font-weight: 400; line-height: 1.7;
          color: #ffffff; max-width: 520px; margin: 0 0 24px;
        }

        /* CTA */
        .vh-cta {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px; font-weight: 500;
          color: #ffffff; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 24px; padding: 9px 22px;
          display: inline-block;
          transition: border-color 0.2s;
          letter-spacing: 0.04em;
        }
        .vh-cta:hover { border-color: rgba(255,255,255,0.75); }

        /* Stats */
        .vh-stats {
          display: flex; align-items: baseline; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 20px; margin-top: 28px; row-gap: 12px;
        }
        .vh-stat { display: flex; align-items: baseline; gap: 6px; }
        .vh-stat--sep { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.15); }
        .vh-stat-v {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 1.25rem; font-weight: 700; line-height: 1; letter-spacing: -0.01em;
        }
        .vh-stat-l {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .vh { min-height: 520px; }
          .vh-body { padding: 60px 24px 40px; }
          .vh-stat--sep { padding-right: 20px; margin-right: 20px; }
        }
        @media (max-width: 480px) {
          .vh { min-height: 540px; }
          .vh-body { padding: 56px 20px 36px; }
          .vh-h1 { max-width: 100%; }
          .vh-stat--sep { padding-right: 14px; margin-right: 14px; }
        }
      `}</style>
    </section>
  )
}
