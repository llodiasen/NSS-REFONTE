import Link from 'next/link'

const C_GREEN = '#97C459'

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


      </div>

      <style>{`
        .prh {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          font-size: 13px;
        }
        .prh-bc-home { color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
        .prh-bc-home:hover { color: #ffffff; }
        .prh-bc-sep  { color: rgba(255,255,255,0.4); }
        .prh-bc-curr { color: #ffffff; }

        /* Label */
        .prh-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
          font-family: 'Outfit', var(--font-body), sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${C_GREEN};
        }
        .prh-label-line { display: block; width: 28px; height: 1.5px; background: ${C_GREEN}; flex-shrink: 0; }

        /* H1 */
        .prh-h1 {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700; line-height: 1.1;
          color: rgb(246,243,238); max-width: 900px;
          margin: 0 0 20px;
        }
        .prh-h1 em { color: rgb(246,243,238); }

        /* Lead */
        .prh-lead {
          font-family: 'Source Serif 4', var(--font-source-serif), serif;
          font-size: 1.05rem; font-weight: 400; line-height: 1.7;
          color: #ffffff; max-width: 520px; margin: 0;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .prh { min-height: 520px; }
          .prh-body { padding: 60px 24px 40px; }
        }
        @media (max-width: 480px) {
          .prh { min-height: 540px; }
          .prh-body { padding: 56px 20px 36px; }
          .prh-h1 { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
