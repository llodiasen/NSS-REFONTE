import Image from 'next/image'

const PARTENAIRES = [
  {
    nom: 'Grassroots International',
    logo: '/images/partenaires/Grassroots-international.jpg',
    ext: 'jpg',
  },
  {
    nom: 'AgroEcology Fund',
    logo: '/images/partenaires/Agroecology-Fund.jpg',
    ext: 'jpg',
  },
  {
    nom: 'Thousand Currents',
    logo: '/images/partenaires/thoussands-current-1.jpg',
    ext: 'jpg',
  },
  {
    nom: 'Fonds Égalité',
    logo: '/images/partenaires/Fond-egalite.png',
    ext: 'png',
  },
  {
    nom: 'Fahamu Africa',
    logo: '/images/partenaires/logofahamu1.png',
    ext: 'png',
  },
]

export default function PartenairesHomepageSection() {
  return (
    <section className="phr" aria-labelledby="phr-titre">

      {/* ── HEADER ── */}
      <div className="phr-header">
        <div className="phr-surtitle" aria-hidden="true">
          <span className="phr-sur-line" />
          <span className="phr-sur-text">ILS NOUS SOUTIENNENT</span>
          <span className="phr-sur-line" />
        </div>

        <h2 id="phr-titre" className="phr-h2">
          Ensemble, plus <em>forts.</em>
        </h2>

        <p className="phr-desc">
          Des organisations internationales qui croient au pouvoir des femmes
          rurales africaines pour transformer les systèmes alimentaires.
        </p>
      </div>

      {/* ── LOGOS ── */}
      <div className="phr-logos" role="list" aria-label="Nos partenaires">
        {PARTENAIRES.map((p, i) => (
          <div
            key={p.nom}
            className={`phr-logo-card${i === PARTENAIRES.length - 1 ? ' phr-logo-card--last' : ''}`}
            role="listitem"
            title={p.nom}
          >
            <div className="phr-logo-img-wrap">
              <Image
                src={p.logo}
                alt={p.nom}
                fill
                className="phr-logo-img"
                sizes="140px"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* ── SECTION ── */
        .phr {
          background: #ffffff;
          padding: 64px 72px;
        }

        /* ── HEADER ── */
        .phr-header {
          max-width: 640px;
          margin: 0 auto 48px;
          text-align: center;
        }

        /* ── SURTITLE ── */
        .phr-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .phr-sur-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .phr-sur-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* ── H2 ── */
        .phr-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1.26rem, 2.7vw, 1.62rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #2A2A2A;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .phr-h2 em {
          font-style: italic;
          color: #00AD4C;
        }

        /* ── DESC ── */
        .phr-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          margin: 0;
        }

        /* ── LOGOS ── */
        .phr-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          border: 0.5px solid #f3f4f6;
          border-radius: 12px;
          overflow: hidden;
        }

        /* ── LOGO CARD ── */
        .phr-logo-card {
          padding: 24px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 0.5px solid #f3f4f6;
          filter: grayscale(100%);
          opacity: 0.55;
          transition: filter 0.3s ease, opacity 0.3s ease;
          cursor: pointer;
          flex: 1;
          min-width: 140px;
        }
        .phr-logo-card--last {
          border-right: none;
        }
        .phr-logo-card:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* ── LOGO IMAGE ── */
        .phr-logo-img-wrap {
          position: relative;
          height: 32px;
          width: 140px;
        }
        .phr-logo-img {
          object-fit: contain;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .phr {
            padding: 48px 24px;
          }
          .phr-logos {
            flex-wrap: wrap;
          }
          .phr-logo-card {
            width: 50%;
            flex: none;
            border-right: 0.5px solid #f3f4f6;
            border-bottom: 0.5px solid #f3f4f6;
            min-width: 0;
          }
          .phr-logo-card:nth-child(2n) {
            border-right: none;
          }
          .phr-logo-card:nth-last-child(-n+1):nth-child(odd),
          .phr-logo-card:nth-last-child(-n+2):nth-child(even) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  )
}
