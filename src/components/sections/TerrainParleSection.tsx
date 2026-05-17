import Image from 'next/image'

export default function TerrainParleSection() {
  return (
    <section className="tps" aria-labelledby="tps-quote">
      <Image
        src="/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg"
        alt="Femmes rurales NSS lors du camp de formation agroécologique à Niaguis, Casamance"
        fill
        className="tps-bg"
        sizes="100vw"
      />

      <div className="tps-overlay" aria-hidden="true" />

      <div className="tps-content">

        {/* ── COLONNE GAUCHE ── */}
        <div className="tps-left">
          <div className="tps-label" aria-hidden="true">
            <span className="tps-label-line" />
            <span className="tps-label-text">LE TERRAIN PARLE</span>
          </div>

          <blockquote id="tps-quote" className="tps-quote">
            <span className="tps-guillemet" aria-hidden="true">&ldquo;</span>
            Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.
            <span className="tps-guillemet" aria-hidden="true">&rdquo;</span>
          </blockquote>

          <div className="tps-author">
            <div className="tps-avatar" aria-hidden="true">
              <span className="tps-avatar-initials">MS</span>
            </div>
            <div className="tps-author-meta">
              <span className="tps-author-name">Mariama Sonko</span>
              <span className="tps-author-role">Présidente — Nous Sommes la Solution</span>
            </div>
          </div>
        </div>

        {/* ── COLONNE DROITE ── */}
        <div className="tps-right">
          <div className="tps-stats">
            <div className="tps-stat">
              <span className="tps-stat-num">70%</span>
              <span className="tps-stat-lbl">de l&apos;alimentation africaine</span>
            </div>
            <div className="tps-stat">
              <span className="tps-stat-num">500+</span>
              <span className="tps-stat-lbl">Associations rurales</span>
            </div>
          </div>

          <div className="tps-divider" aria-hidden="true" />

          <p className="tps-tagline">
            Par nous-mêmes. Pour nous-mêmes.<br />
            <span className="tps-tagline-em">En nous-mêmes.</span>
          </p>
        </div>

      </div>

      <style>{`
        /* ── SECTION ── */
        .tps {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        /* ── IMAGE ── */
        .tps-bg {
          object-fit: cover;
          z-index: 0;
        }

        /* ── OVERLAY ── */
        .tps-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(4,86,39,0.97) 0%,
            rgba(4,86,39,0.6) 40%,
            rgba(4,86,39,0.15) 100%
          );
        }

        /* ── CONTENT ── */
        .tps-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 56px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-end;
        }

        /* ── LABEL ── */
        .tps-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        .tps-label-line {
          display: block;
          width: 20px;
          height: 1px;
          background: #A5CE46;
          flex-shrink: 0;
        }
        .tps-label-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #A5CE46;
        }

        /* ── CITATION ── */
        .tps-quote {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 500;
          font-style: italic;
          color: #F5EDD6;
          line-height: 1.2;
          margin: 0 0 24px;
          padding: 0;
          border: none;
        }
        .tps-guillemet {
          color: #A5CE46;
          font-size: 3rem;
          line-height: 0;
          vertical-align: -0.3em;
        }

        /* ── AUTEUR ── */
        .tps-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .tps-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(165,206,70,0.2);
          border: 1.5px solid rgba(165,206,70,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tps-avatar-initials {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 16px;
          font-weight: 600;
          color: #A5CE46;
        }
        .tps-author-meta {
          display: flex;
          flex-direction: column;
        }
        .tps-author-name {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #F5EDD6;
        }
        .tps-author-role {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          color: rgba(245,237,214,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        /* ── RIGHT ── */
        .tps-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }

        /* ── STATS ── */
        .tps-stats {
          display: flex;
          flex-direction: row;
          gap: 32px;
          justify-content: flex-end;
        }
        .tps-stat {
          text-align: right;
        }
        .tps-stat-num {
          display: block;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #A5CE46;
          line-height: 1;
        }
        .tps-stat-lbl {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          color: rgba(245,237,214,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        /* ── DIVIDER ── */
        .tps-divider {
          width: 100%;
          height: 0.5px;
          background: rgba(165,206,70,0.2);
        }

        /* ── TAGLINE ── */
        .tps-tagline {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 1.2rem;
          font-style: italic;
          color: rgba(245,237,214,0.6);
          line-height: 1.5;
          text-align: right;
          margin: 0;
        }
        .tps-tagline-em {
          font-style: normal;
          font-weight: 500;
          color: #A5CE46;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .tps-content {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 32px;
          }
          .tps-right {
            align-items: flex-start;
          }
          .tps-stats {
            justify-content: flex-start;
          }
          .tps-stat {
            text-align: left;
          }
          .tps-tagline {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}
