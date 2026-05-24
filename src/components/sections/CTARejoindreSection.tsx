import Image from 'next/image'

export default function CTARejoindreSection() {
  return (
    <section className="ctaj" aria-labelledby="ctaj-titre">
      {/* Cover optionnelle */}
      <Image
        src="/images/galerie/plaidoyer-1.jpg"
        alt="Femmes rurales NSS — plaidoyer pour la souveraineté alimentaire"
        fill
        className="ctaj-bg"
        sizes="100vw"
      />
      <div className="ctaj-overlay" aria-hidden="true" />

      {/* Contenu */}
      <div className="ctaj-inner">

        <div className="ctaj-surtitle" aria-hidden="true">
          <span className="ctaj-sur-line" />
          <span className="ctaj-sur-text">ENSEMBLE, NOUS SOMMES LA SOLUTION</span>
          <span className="ctaj-sur-line" />
        </div>

        <h2 id="ctaj-titre" className="ctaj-h2">
          Rejoignez 175&nbsp;000 femmes qui{' '}
          <em>nourrissent l&apos;Afrique.</em>
        </h2>

        <div className="ctaj-underline" aria-hidden="true" />

        <p className="ctaj-desc">
          Partagez nos valeurs&nbsp;? Adhérez à NSS et rejoignez 175&nbsp;000
          femmes rurales qui transforment les systèmes alimentaires en Afrique
          de l&apos;Ouest.
        </p>

        <div className="ctaj-btns">
          <a href="/fr/agir/rejoindre" className="ctaj-btn ctaj-btn--primary">
            ADHÉRER AU MOUVEMENT
          </a>
          <a href="/fr/contact" className="ctaj-btn ctaj-btn--outline">
            NOUS CONTACTER →
          </a>
        </div>

      </div>

      <style>{`
        /* ── SECTION ── */
        .ctaj {
          position: relative;
          overflow: hidden;
          background: #045627;
          padding: 80px 72px;
        }

        /* ── IMAGE ── */
        .ctaj-bg {
          object-fit: cover;
          z-index: 0;
        }

        /* ── OVERLAY ── */
        .ctaj-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(4,86,39,0.92);
        }

        /* ── INNER ── */
        .ctaj-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }

        /* ── SURTITLE ── */
        .ctaj-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .ctaj-sur-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #F5EDD6;
          flex-shrink: 0;
        }
        .ctaj-sur-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #F5EDD6;
        }

        /* ── H2 ── */
        .ctaj-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 2.7rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 20px;
        }
        .ctaj-h2 em {
          color: #A5CE46;
          font-style: italic;
        }

        /* ── UNDERLINE ── */
        .ctaj-underline {
          width: 60px;
          height: 3px;
          background: #A5CE46;
          margin: 0 auto 24px;
          border-radius: 2px;
        }

        /* ── DESC ── */
        .ctaj-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 300;
          color: #ffffff;
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto 36px;
        }

        /* ── BOUTONS ── */
        .ctaj-btns {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ctaj-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 8px;
          padding: 10px 22px;
          transition: background 0.22s ease, border-color 0.22s ease;
        }
        .ctaj-btn--primary {
          background: #00AD4C;
          color: #ffffff;
          border: none;
        }
        .ctaj-btn--primary:hover {
          background: #009940;
        }
        .ctaj-btn--outline {
          background: transparent;
          border: 1.5px solid rgba(245,237,214,0.4);
          color: #F5EDD6;
          font-weight: 400;
          padding: 10px 18px;
        }
        .ctaj-btn--outline:hover {
          border-color: rgba(245,237,214,0.8);
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .ctaj {
            padding: 64px 24px;
          }
          .ctaj-btns {
            flex-direction: column;
            align-items: stretch;
          }
          .ctaj-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
