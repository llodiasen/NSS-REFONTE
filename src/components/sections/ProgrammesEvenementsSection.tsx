import Image from 'next/image'

const EVENEMENTS = [
  {
    type: 'Formation',
    titre: 'CIFAP',
    sousTitre: "Camp International de Formation en Agroécologie Paysanne",
    dateLabel: 'Sept. 2026',
    lieuLabel: 'Niaguis, Sénégal',
    texte: "Un espace d'apprentissage collectif où les paysannes agroécologistes se forment et construisent des solutions pour la souveraineté alimentaire.",
    bouton: 'Voir les éditions →',
    lien: '/fr/programmes/cifap',
    img: '/images/actualites/nss-cifap-2025.jpg',
    alt: 'CIFAP 2025 — Camp International de Formation Agroécologique à Niaguis',
  },
  {
    type: 'Congrès',
    titre: 'Rencontre NSS',
    sousTitre: 'Congrès Continentaux Biennaux',
    dateLabel: '2027 (Prév.)',
    lieuLabel: "Afr. de l'Ouest",
    texte: "Une plateforme continentale réunissant les leaders et actrices pour débattre et amplifier les mouvements paysans.",
    bouton: 'En savoir plus →',
    lien: '/fr/mouvement/engagements',
    img: '/images/actualites/rencontre-2025.jpg',
    alt: 'Rencontre NSS 2025 — Congrès des femmes rurales',
  },
  {
    type: 'Foire',
    titre: 'Foire NSS',
    sousTitre: 'Foire Annuelle de la Souveraineté Alimentaire',
    dateLabel: 'Sept. 2026',
    lieuLabel: "Afr. de l'Ouest",
    texte: "Un festival d'agroécologie où paysannes, organisations et visiteurs échangent les pratiques pour nourrir l'Afrique.",
    bouton: 'En savoir plus →',
    lien: '/fr/mouvement/engagements',
    img: '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
    alt: 'Foire Djimini 2024 — Semences paysannes et souveraineté alimentaire',
  },
]

export default function ProgrammesEvenementsSection() {
  return (
    <section className="pev" aria-labelledby="pev-titre">

      {/* ── HEADER ── */}
      <div className="pev-header">

        <div className="pev-surtitle" aria-hidden="true">
          <span className="pev-sur-line" />
          <span className="pev-sur-text">PROGRAMMES &amp; ÉVÉNEMENTS</span>
          <span className="pev-sur-line" />
        </div>

        <h2 id="pev-titre" className="pev-h2">
          Nos programmes <em>&amp; événements.</em>
        </h2>

        <div className="pev-underline" aria-hidden="true" />

        <p className="pev-desc">
          Formation, congrès, foire — trois rendez-vous qui rassemblent les femmes
          rurales d&apos;Afrique de l&apos;Ouest.
        </p>
      </div>

      {/* ── GRILLE ── */}
      <div className="pev-grid" role="list">
        {EVENEMENTS.map((ev) => (
          <article key={ev.titre} className="pev-card" role="listitem">

            {/* Image */}
            <div className="pev-img-wrap">
              <Image
                src={ev.img}
                alt={ev.alt}
                fill
                className="pev-img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="pev-badge" aria-label="À venir">À VENIR</span>
            </div>

            {/* Corps */}
            <div className="pev-corps">
              <span className="pev-type">{ev.type}</span>
              <h3 className="pev-h3">{ev.titre}</h3>
              <p className="pev-sous-titre">{ev.sousTitre}</p>

              <div className="pev-meta" aria-label={`${ev.dateLabel} · ${ev.lieuLabel}`}>
                <div className="pev-meta-item">
                  <span className="pev-meta-label">Dates</span>
                  <span className="pev-meta-value">{ev.dateLabel}</span>
                </div>
                <div className="pev-meta-sep" aria-hidden="true" />
                <div className="pev-meta-item">
                  <span className="pev-meta-label">Lieu</span>
                  <span className="pev-meta-value">{ev.lieuLabel}</span>
                </div>
              </div>

              <p className="pev-texte">{ev.texte}</p>

              <a href={ev.lien} className="pev-btn">
                {ev.bouton}
              </a>
            </div>

          </article>
        ))}
      </div>

      <style>{`
        /* ── SECTION ── */
        .pev {
          background: #ffffff;
          padding: 80px 40px;
        }

        /* ── HEADER ── */
        .pev-header {
          max-width: 640px;
          margin: 0 auto 52px;
          text-align: center;
        }

        /* ── SURTITLE ── */
        .pev-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .pev-sur-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .pev-sur-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* ── H2 ── */
        .pev-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.44rem, 3.15vw, 2.16rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #2A2A2A;
          line-height: 1.15;
          margin: 0;
        }
        .pev-h2 em {
          font-style: italic;
          color: #00AD4C;
        }

        /* ── UNDERLINE ── */
        .pev-underline {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          margin: 0.75rem auto 1.25rem;
          border-radius: 2px;
        }

        /* ── DESC ── */
        .pev-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          margin: 0;
        }

        /* ── GRILLE ── */
        .pev-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .pev-card {
          border-radius: 14px;
          overflow: hidden;
          border: 0.5px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        /* ── IMAGE ── */
        .pev-img-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
        }
        .pev-img {
          object-fit: cover;
        }

        /* ── BADGE ── */
        .pev-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #045627;
          color: #A5CE46;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
        }

        /* ── CORPS ── */
        .pev-corps {
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #ffffff;
        }

        /* ── TYPE ── */
        .pev-type {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00AD4C;
          margin-bottom: 4px;
        }

        /* ── H3 ── */
        .pev-h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.1;
          margin: 0 0 4px;
        }

        /* ── SOUS-TITRE ── */
        .pev-sous-titre {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0 0 14px;
        }

        /* ── META ── */
        .pev-meta {
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: center;
          padding: 12px 0;
          border-top: 0.5px solid #f3f4f6;
          border-bottom: 0.5px solid #f3f4f6;
          margin-bottom: 14px;
        }
        .pev-meta-item {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .pev-meta-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ca3af;
        }
        .pev-meta-value {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #2A2A2A;
        }
        .pev-meta-sep {
          width: 1px;
          height: 24px;
          background: #e5e7eb;
          flex-shrink: 0;
        }

        /* ── TEXTE ── */
        .pev-texte {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.7;
          text-align: justify;
          text-align-last: left;
          flex: 1;
          margin: 0 0 16px;
        }

        /* ── BOUTON ── */
        .pev-btn {
          display: inline-flex;
          align-items: center;
          border: 1.5px solid #00AD4C;
          color: #00AD4C;
          background: transparent;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease;
          align-self: flex-start;
        }
        .pev-btn:hover {
          background: #00AD4C;
          color: #ffffff;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .pev {
            padding: 56px 24px;
          }
          .pev-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
