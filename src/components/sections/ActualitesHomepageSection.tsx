import Image from 'next/image'

const ARTICLES = [
  {
    slug: 'lafsa-conquise-modele-integre-karonghen-wati-naaning-casamance',
    categorie: 'Presse',
    titre: "L'AFSA conquise par le modèle intégré de « Karonghen Wati Naaning » en Casamance",
    date: '23 fév. 2026',
    lieu: 'Niaguis, Sénégal',
    readTime: '3 min',
    extrait: "En visite à Niaguis, l'Alliance pour la souveraineté alimentaire en Afrique (AFSA) a salué le centre agroécologique fondé par NSS et AJAC, qualifiant son approche intégrée d'« exemple reproductible porteur d'espoir pour l'Afrique ».",
    coverUrl: '/images/actualites/afsa-karonghen-wati-naaning-casamance.jpg',
  },
  {
    slug: 'thousand-currents-centre-karonghen-wati-naning-niaguiss',
    categorie: 'Événement',
    titre: 'Thousand Currents au Centre Karonghen Wati Naning à Niaguiss',
    date: '28 nov. 2024',
    lieu: 'Niaguiss, Sénégal',
    readTime: '2 min',
    extrait: "Une délégation de Thousand Currents — ONG américaine qui soutient NSS depuis huit ans — a visité le centre Karonghen Wati Naning. Elles sont reparties satisfaites et prêtes à continuer leur appui au mouvement.",
    coverUrl: '/images/actualites/thousand-currents-karonghen-wati-naning-niaguiss.jpg',
  },
  {
    slug: 'souverainete-alimentaire-semences-paysannes-foire-djimini-2024',
    categorie: 'Événement',
    titre: "Souveraineté alimentaire et semences paysannes : déclaration finale de la Foire de Djimini 2024",
    date: '18 nov. 2024',
    lieu: 'Djimini, Sénégal',
    readTime: '2 min',
    extrait: "Les participants à la 8ème édition de la Foire Ouest-Africaine des Semences Paysannes ont adopté une déclaration finale appelant à l'autonomie semencière face aux politiques qui favorisent les semences industrielles.",
    coverUrl: '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
  },
]

function IconCalendar() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export default function ActualitesHomepageSection() {
  return (
    <section className="ach" aria-labelledby="ach-titre">

      {/* ── HEADER ── */}
      <div className="ach-header">
        <div className="ach-surtitle" aria-hidden="true">
          <span className="ach-sur-line" />
          <span className="ach-sur-text">ACTUALITÉS</span>
          <span className="ach-sur-line" />
        </div>
        <h2 id="ach-titre" className="ach-h2">
          Le terrain parle, <em>les femmes rurales agissent.</em>
        </h2>

        <div className="ach-underline" aria-hidden="true" />

        <p className="ach-desc">
          Retrouvez les dernières nouvelles du mouvement — formations, rencontres,
          plaidoyers et victoires des femmes rurales d&apos;Afrique de l&apos;Ouest.
        </p>
      </div>

      {/* ── GRILLE ── */}
      <div className="ach-grid" role="list">
        {ARTICLES.map((art) => (
          <article key={art.slug} className="ach-card" role="listitem">

            {/* Image */}
            <div className="ach-img-wrap">
              <Image
                src={art.coverUrl}
                alt={art.titre}
                fill
                className="ach-img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="ach-badge">{art.categorie}</span>
            </div>

            {/* Corps */}
            <div className="ach-corps">
              <span className="ach-tag">{art.categorie}</span>
              <h3 className="ach-h3">{art.titre}</h3>

              <div className="ach-meta">
                <div className="ach-meta-item">
                  <span className="ach-meta-icon"><IconCalendar /></span>
                  <span className="ach-meta-value">{art.date}</span>
                </div>
                <div className="ach-meta-sep" aria-hidden="true" />
                <div className="ach-meta-item">
                  <span className="ach-meta-icon"><IconMapPin /></span>
                  <span className="ach-meta-value">{art.lieu}</span>
                </div>
                <div className="ach-meta-sep" aria-hidden="true" />
                <div className="ach-meta-item">
                  <span className="ach-meta-icon"><IconClock /></span>
                  <span className="ach-meta-value">{art.readTime}</span>
                </div>
              </div>

              <p className="ach-texte">{art.extrait}</p>

              <a href={`/fr/ressources/actualites/${art.slug}`} className="ach-lien">
                LIRE L&apos;ARTICLE →
              </a>
            </div>

          </article>
        ))}
      </div>

      {/* ── VOIR TOUT ── */}
      <div className="ach-footer">
        <a href="/fr/ressources/actualites" className="ach-voir-tout">
          VOIR TOUTES LES ACTUALITÉS →
        </a>
      </div>

      <style>{`
        /* ── SECTION ── */
        .ach {
          background: #f9f8f5;
          padding: 80px 40px;
        }

        /* ── HEADER ── */
        .ach-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }

        /* ── SURTITLE ── */
        .ach-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .ach-sur-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .ach-sur-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* ── H2 ── */
        .ach-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.44rem, 3.15vw, 1.8rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #2A2A2A;
          line-height: 1.15;
          margin: 0;
        }
        .ach-h2 em {
          font-style: italic;
          color: #00AD4C;
        }

        /* ── UNDERLINE ── */
        .ach-underline {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          margin: 0.75rem auto 1.25rem;
          border-radius: 2px;
        }

        /* ── DESC ── */
        .ach-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          margin: 0;
        }

        /* ── GRILLE ── */
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: stretch;
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .ach-card {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.2s ease;
        }
        .ach-card:hover {
          border-color: #00AD4C;
        }

        /* ── IMAGE ── */
        .ach-img-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          width: 100%;
          flex-shrink: 0;
        }
        .ach-img {
          object-fit: cover;
        }

        /* ── BADGE ── */
        .ach-badge {
          position: absolute;
          top: 12px;
          left: 12px;
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
        .ach-corps {
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* ── TAG ── */
        .ach-tag {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #045627;
          background: #eaf5ee;
          border: 1px solid #c3e6cc;
          border-radius: 99px;
          padding: 3px 10px;
          margin-bottom: 10px;
          align-self: flex-start;
        }

        /* ── H3 ── */
        .ach-h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.25;
          margin: 0 0 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          min-height: calc(18px * 1.25 * 3);
        }

        /* ── META ── */
        .ach-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-top: 0.5px solid #f3f4f6;
          border-bottom: 0.5px solid #f3f4f6;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .ach-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ach-meta-icon {
          display: flex;
          align-items: center;
          color: #9ca3af;
          flex-shrink: 0;
        }
        .ach-meta-value {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #4A4A4A;
        }
        .ach-meta-sep {
          width: 1px;
          height: 12px;
          background: #e5e7eb;
          flex-shrink: 0;
        }

        /* ── TEXTE ── */
        .ach-texte {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.7;
          text-align: justify;
          text-align-last: left;
          flex: 1;
          margin: 0 0 18px;
        }

        /* ── LIEN ── */
        .ach-lien {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00AD4C;
          text-decoration: none;
          cursor: pointer;
        }

        /* ── FOOTER ── */
        .ach-footer {
          display: flex;
          justify-content: center;
          max-width: 1100px;
          margin: 36px auto 0;
        }
        .ach-voir-tout {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00AD4C;
          text-decoration: none;
          border-bottom: 1.5px solid #00AD4C;
          padding-bottom: 2px;
          white-space: nowrap;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .ach {
            padding: 56px 24px;
          }
          .ach-header {
            max-width: 100%;
          }
          .ach-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
