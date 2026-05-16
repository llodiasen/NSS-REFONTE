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
    photo:        'https://wasafrica.org/wp-content/uploads/2024/08/Mariama-Sonko-AJAC-LUKAAL.jpg',
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
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? LEADERS : LEADERS.slice(0, 6)

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
            const isNew = expanded && i >= 6
            return (
              <article
                key={leader.id}
                className={`ml-card${isNew ? ' ml-card--new' : ''}`}
                style={isNew ? { animationDelay: `${(i - 6) * 60}ms` } : undefined}
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
                    <span className="ml-abbr">{leader.abbr}</span>
                    <span className="ml-sep" aria-hidden>·</span>
                    <span className="ml-pays">{leader.pays.toUpperCase()}</span>
                  </div>

                  {/* Nom */}
                  <h3 className="ml-nom">{leader.nom}</h3>

                  {/* Nom complet organisation */}
                  <p className="ml-asso">{leader.organisation}</p>

                  {/* Séparateur soft */}
                  <div className="ml-sep-line" aria-hidden />

                  {/* CTA */}
                  <span className="ml-cta" aria-label={`En savoir plus sur ${leader.nom}`}>
                    EN SAVOIR PLUS →
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Voir plus ── */}
        {!expanded && LEADERS.length > 6 && (
          <div className="ml-more-wrap">
            <button
              className="ml-more"
              onClick={() => setExpanded(true)}
              aria-label={`Afficher les ${LEADERS.length - 6} leaders restants`}
            >
              VOIR PLUS →
            </button>
          </div>
        )}

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
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 600;
          line-height: 1.2;
          color: #2A2A2A;
          text-align: center;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .ml-h2 em { font-style: italic; color: #A5CE46; }

        .ml-underline {
          display: block;
          width: 60px; height: 3px;
          background: #00AD4C; border-radius: 2px;
          margin: 0.75rem auto 0;
        }
        .ml-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; font-weight: 400; line-height: 1.7;
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
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Meta ABBR · Pays */
        .ml-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
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
          font-size: 20px;
          font-weight: 600;
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
          padding: 13px 36px;
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
