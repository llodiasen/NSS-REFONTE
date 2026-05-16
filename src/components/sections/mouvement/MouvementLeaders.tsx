'use client'

import { useState } from 'react'
import Image from 'next/image'

/* ─── Données ──────────────────────────────────────────────────────────────── */
const LEADERS = [
  {
    id:           'mariama-sonko',
    nom:          'Mariama Sonko',
    abbr:         'AJAC LUKAAL',
    pays:         'Sénégal',
    organisation: 'Association des Jeunes Agriculteurs de Casamance',
    photo:        '/images/actualites/portrait-mariama-sonko-femme-rurale.jpg',
  },
  {
    id:           'esther-boake',
    nom:          'Esther Y. Boake',
    abbr:         'ABOFA',
    pays:         'Ghana',
    organisation: 'Abrono Organic Farmers Association',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg',
  },
  {
    id:           'sia-kamano',
    nom:          'Sia A.M. Kamano',
    abbr:         'AGUISSA',
    pays:         'Guinée',
    organisation: 'Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg',
  },
  {
    id:           'yah-diakite',
    nom:          'Yah Diakité',
    abbr:         'AMASSA',
    pays:         'Mali',
    organisation: 'Association Malienne pour la Sécurité et la Souveraineté Alimentaires',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg',
  },
  {
    id:           'dao-bacouo',
    nom:          'Dao Bacouo Haoua',
    abbr:         'FENOP',
    pays:         'Burkina Faso',
    organisation: 'Fédération Nationale des Organisations Paysannes',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg',
  },
  {
    id:           'fanta-mane',
    nom:          'Fanta Mané',
    abbr:         'KAFO',
    pays:         'Guinée Bissau',
    organisation: 'Fédération Paysanne de KAFO de Guinée Bissau',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg',
  },
  {
    id:           'fanta-diamoutene',
    nom:          'Fanta Diamoutene',
    abbr:         'AOPP',
    pays:         'Mali',
    organisation: 'Association des Organisations Professionnelles Paysannes',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg',
  },
  {
    id:           'fanta-conde',
    nom:          'Fanta Conde',
    abbr:         'AGACFEM',
    pays:         'Guinée',
    organisation: 'Association des Groupements et Associations Coopératives Féminines',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Conde-AGACFEM-1.jpg',
  },
  {
    id:           'fatou-diop',
    nom:          'Fatou B. Diop',
    abbr:         'UGPM',
    pays:         'Sénégal',
    organisation: 'Union des Groupements Paysans de Meckhé',
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg',
  },
]

/* ─── Composant ────────────────────────────────────────────────────────────── */
export default function MouvementLeaders() {
  const [count, setCount] = useState(4)
  const visible = LEADERS.slice(0, count)
  const hasMore = count < LEADERS.length

  return (
    <section className="ml-section" aria-labelledby="ml-titre">

      <div className="ml-wrap">

        {/* ── En-tête centré ── */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div className="ml-header">
            <span className="ml-eyebrow-line" aria-hidden />
            <span className="ml-eyebrow">NOS LEADERS</span>
            <span className="ml-eyebrow-line" aria-hidden />
          </div>
          <h2 id="ml-titre" className="ml-h2">
            Les voix qui <em>portent le mouvement.</em>
          </h2>
          <div className="ml-underline" aria-hidden />
          <p className="ml-desc">
            Des femmes de terrain qui incarnent NSS par leur engagement,
            leur vision et leur détermination.
          </p>
        </div>

        {/* ── Grille ── */}
        <div className="ml-grid" role="list">
          {visible.map((leader, i) => {
            const isNew = i >= count - 4 && count > 4
            return (
              <article
                key={leader.id}
                className={`ml-card${isNew ? ' ml-card--new' : ''}`}
                style={isNew ? { animationDelay: `${(i % 4) * 60}ms` } : undefined}
                role="listitem"
                aria-label={leader.nom}
              >
                {/* Image */}
                <div className="ml-img-wrap">
                  <Image
                    src={leader.photo}
                    alt={leader.nom}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 390px"
                  />
                </div>

                {/* Corps */}
                <div className="ml-body">
                  {/* Meta : ABBR · Pays */}
                  <div className="ml-meta">
                    <svg className="ml-meta-icon ml-meta-icon--green" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
                      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                    </svg>
                    <span className="ml-abbr">{leader.abbr}</span>
                    <span className="ml-sep" aria-hidden>·</span>
                    <svg className="ml-meta-icon ml-meta-icon--gray" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span className="ml-pays">{leader.pays.toUpperCase()}</span>
                  </div>

                  {/* Nom */}
                  <h3 className="ml-nom">{leader.nom}</h3>

                  {/* Nom complet organisation */}
                  <p className="ml-asso">{leader.organisation}</p>

                </div>
              </article>
            )
          })}
        </div>

        {/* ── Voir plus / Voir moins ── */}
        <div className="ml-more-wrap">
          {hasMore ? (
            <button
              className="ml-more"
              onClick={() => setCount(c => Math.min(c + 4, LEADERS.length))}
              aria-label="Afficher 4 leaders de plus"
            >
              VOIR PLUS →
            </button>
          ) : (
            <button
              className="ml-more"
              onClick={() => setCount(4)}
              aria-label="Afficher moins de leaders"
            >
              ← VOIR MOINS
            </button>
          )}
        </div>

      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ── Section ── */
        .ml-section {
          background: #f9f8f5;
          padding: 96px 0 112px;
        }
        .ml-wrap {
          max-width: 1200px;
          margin-inline: auto;
          padding-inline: clamp(1.25rem, 4vw, 2.5rem);
        }

        /* ── En-tête ── */
        .ml-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .ml-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .ml-eyebrow {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #00AD4C;
        }

        .ml-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.875rem, 3.5vw, 1.875rem);
          font-weight: 600;
          line-height: 1.2;
          color: #2A2A2A;
          text-align: center;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .ml-h2 em { font-style: italic; color: #045627; }

        .ml-underline {
          display: block;
          width: 60px; height: 3px;
          background: #00AD4C; border-radius: 2px;
          margin: 0.75rem auto 0;
        }
        .ml-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px; font-weight: 400; line-height: 1.7;
          color: #5a5a5a; margin: 1.25rem 0 0; text-align: center;
        }

        /* ── Grille ── */
        .ml-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Carte ── */
        .ml-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .ml-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(20, 60, 20, 0.10);
        }

        /* Animation cartes nouvelles */
        .ml-card--new {
          opacity: 0;
          animation: ml-fadein 0.35s ease forwards;
        }
        @keyframes ml-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Image ── */
        .ml-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #1f4a28;
        }

        /* ── Corps ── */
        .ml-body {
          padding: 20px 24px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Meta ABBR · Pays */
        .ml-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }
        .ml-meta-icon {
          flex-shrink: 0;
          display: block;
        }
        .ml-meta-icon--green { color: #00AD4C; }
        .ml-meta-icon--gray  { color: #9ca3af; }
        .ml-abbr {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          color: #00AD4C;
        }
        .ml-sep {
          font-size: 12px;
          color: #c4c4bb;
          line-height: 1;
        }
        .ml-pays {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6b7280;
        }

        /* Nom leader */
        .ml-nom {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px;
          font-weight: 400;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0 0 10px;
        }

        /* Séparateur sous l'organisation */
        .ml-sep-line {
          width: 100%;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin: 16px 0;
          flex-shrink: 0;
        }

        /* Nom complet organisation */
        .ml-asso {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #3a3a3a;
          line-height: 1.6;
          margin: 0 0 18px;
          flex: 1;
          text-align:justify;
        }

        /* CTA EN SAVOIR PLUS */
        .ml-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: #00AD4C;
          cursor: pointer;
          transition: color 0.18s ease;
          align-self: flex-start;
        }
        .ml-card:hover .ml-cta {
          color: #007a35;
        }

        /* ── Bouton Voir plus ── */
        .ml-more-wrap {
          text-align: center;
          margin-top: 48px;
        }
        .ml-more {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #5a9a2f;
          background: transparent;
          border: 1.5px solid #5a9a2f;
          border-radius: 4px;
          padding: 9px 22px;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .ml-more:hover {
          background: #5a9a2f;
          color: #ffffff;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .ml-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }

        /* ── Mobile ── */
        @media (max-width: 540px) {
          .ml-section { padding: 64px 0 80px; }
          .ml-grid { grid-template-columns: 1fr; gap: 16px; }
          .ml-body { padding: 20px 22px 24px; }
        }
      `}</style>
    </section>
  )
}
