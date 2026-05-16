'use client'

import { useState } from 'react'
import Image from 'next/image'

/* ── Data ──────────────────────────────────────────────────────────────────── */
const ORGS = [
  /* 5 visibles par défaut */
  { abbr: 'UGPM',        src: '/images/Associations/UGPM.webp',                        nom: 'Union des Groupements Paysans de Mékhé',                                 pays: 'Sénégal'      },
  { abbr: 'FENOP',       src: '/images/Associations/FENOP.webp',                        nom: 'Fédération Nationale des Organisations Paysannes',                        pays: 'Burkina Faso' },
  { abbr: 'AGUISSA',     src: '/images/Associations/AGUISSA.webp',                      nom: 'Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires',   pays: 'Guinée'       },
  { abbr: 'KAFO',        src: '/images/Associations/KAFO.webp',                         nom: 'Fédération Paysanne de KAFO',                                             pays: 'Guinée Bissau'},
  { abbr: 'AMASSA',      src: '/images/Associations/AMASSA-e1723163900160.webp',        nom: 'Association Malienne pour la Sécurité et la Souveraineté Alimentaire',     pays: 'Mali'         },
  /* 8 cachées par défaut */
  { abbr: 'CAFO',        src: '/images/Associations/CAFO.webp',                         nom: 'Coordination des Associations et ONG Féminines du Mali',                  pays: 'Mali'         },
  { abbr: 'ABOFAP',      src: '/images/Associations/ABOFAM-768x723.webp',               nom: 'Assono Organic Farming Project',                                          pays: 'Ghana'        },
  { abbr: 'AGACFEM',     src: '/images/Associations/AGAFAM.webp',                       nom: "Association Guinéenne pour l'Allègement des Charges Féminines",           pays: 'Guinée'       },
  { abbr: 'AOPP',        src: '/images/Associations/AOOP.webp',                         nom: 'Associations des Organisations Professionnelles Paysannes',               pays: 'Mali'         },
  { abbr: 'RUWFAG',      src: '/images/Associations/RUWFAG-768x768.webp',               nom: 'Rural Women Farmers Association of Ghana',                                pays: 'Ghana'        },
  { abbr: 'RESACIFROAT', src: '/images/Associations/RESACIFROAT.webp',                  nom: "Réseau d'Appui à la Citoyenneté des Femmes Rurales Ouest-Africaines",     pays: 'Burkina Faso' },
  { abbr: 'CGF',         src: '/images/Associations/CATALUNYA-1.webp',                  nom: 'Catalunya Gambia Foundation',                                             pays: 'Gambie'       },
  { abbr: 'AJAC',        src: '/images/Associations/AJAC-1536x1044-1-768x522.webp',     nom: 'Association des Jeunes Agriculteurs de Casamance',                        pays: 'Sénégal'      },
]

const VISIBLE = 5

/* ── Component ──────────────────────────────────────────────────────────────── */
export default function AboutOrganisations() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="ao-s">

      {/* ── Header ── */}
      <div className="ao-hd">
        <div className="ao-surtitle">
          <span className="ao-line" aria-hidden />
          <span>LE RÉSEAU</span>
          <span className="ao-line" aria-hidden />
        </div>

        <h2 className="ao-h2">
          Nos organisations, <em>nos racines.</em>
        </h2>

        <div className="ao-ul" aria-hidden />

        <p className="ao-desc">
          Plus de 500 associations de femmes rurales réparties dans 14 pays
          d&apos;Afrique de l&apos;Ouest — un réseau vivant, ancré dans les territoires.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="ao-grid">
        {ORGS.map((org, i) => {
          const hidden = i >= VISIBLE
          return (
            <div
              key={org.abbr}
              className={`ao-card${hidden ? (expanded ? ' ao-card--show' : ' ao-card--hidden') : ''}`}
              style={expanded && hidden ? { animationDelay: `${(i - VISIBLE) * 60}ms` } : undefined}
            >
              <div className="ao-img-wrap">
                <Image
                  src={org.src}
                  alt={org.abbr}
                  width={64}
                  height={64}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <span className="ao-abbr">{org.abbr}</span>
              <p className="ao-nom">{org.nom}</p>
              <span className="ao-pays">{org.pays}</span>
            </div>
          )
        })}
      </div>

      {/* ── Bouton ── */}
      <div className="ao-btn-wrap">
        {!expanded ? (
          <button className="ao-btn" onClick={() => setExpanded(true)}>
            Voir toutes les organisations →
          </button>
        ) : (
          <button className="ao-btn" onClick={() => setExpanded(false)}>
            ← Voir moins
          </button>
        )}
      </div>

      <style>{`
        /* ── Section ── */
        .ao-s {
          background: #ffffff;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 5rem);
        }

        /* ── Header ── */
        .ao-hd {
          max-width: 640px;
          margin: 0 auto 36px;
          text-align: center;
        }
        .ao-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .ao-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .ao-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.875rem, 3.5vw, 1.875rem);
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .ao-h2 em {
          font-style: italic;
          color: #045627;
        }
        .ao-ul {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          border-radius: 2px;
          margin: 0.75rem auto 1.25rem;
        }
        .ao-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Grid ── */
        .ao-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto 32px;
        }

        /* ── Card ── */
        .ao-card {
          border: 0.5px solid #e5e7eb;
          border-radius: 10px;
          padding: 20px 12px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s ease;
        }
        .ao-card:hover { border-color: #00AD4C; }

        /* Hidden / animé */
        .ao-card--hidden { display: none; }
        .ao-card--show {
          display: flex;
          opacity: 0;
          transform: translateY(10px);
          animation: ao-in 0.3s ease forwards;
        }
        @keyframes ao-in {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Logo ── */
        .ao-img-wrap {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          padding: 6px;
          box-sizing: border-box;
        }

        /* ── Card content ── */
        .ao-abbr {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #2A2A2A;
        }
        .ao-nom {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: Black;
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }
        .ao-pays {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #00AD4C;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Bouton ── */
        .ao-btn-wrap { text-align: center; }
        .ao-btn {
          border: 1.5px solid #00AD4C;
          color: #00AD4C;
          background: transparent;
          padding: 11px 24px;
          border-radius: 8px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ao-btn:hover {
          background: #00AD4C;
          color: #ffffff;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ao-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .ao-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
