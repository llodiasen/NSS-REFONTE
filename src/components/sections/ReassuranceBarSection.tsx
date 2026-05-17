const ITEMS = [
  {
    label: 'Semences paysannes protégées',
    sub: 'Préservation des savoirs agroécologiques transmis de génération en génération',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
        <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
        <line x1="12" y1="20" x2="12" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Souveraineté alimentaire',
    sub: "Chaque communauté décide librement de son système de production et d'alimentation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20v-7" />
        <path d="M12 13l-3.5 -2" />
        <path d="M12 13l3.5 -2" />
        <path d="M12 9l-3.5 -2" />
        <path d="M12 9l3.5 -2" />
        <path d="M12 5l-2 -1.5" />
        <path d="M12 5l2 -1.5" />
        <path d="M9.5 20.5l2.5 -2.5" />
        <path d="M14.5 20.5l-2.5 -2.5" />
      </svg>
    ),
  },
  {
    label: 'Gouvernance 100 % féminine',
    sub: 'Les femmes rurales dirigent, décident et portent le mouvement depuis 2011',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="5" />
        <line x1="12" y1="14" x2="12" y2="22" />
        <line x1="9" y1="19" x2="15" y2="19" />
      </svg>
    ),
  },
  {
    label: 'Agroécologie sans frontières',
    sub: 'Pratiques durables, sans intrants chimiques, ancrées dans les territoires africains',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9a10 10 0 0 1 10 10v3" />
        <path d="M2 9c0 0 3.5 0 7.5 3.5" />
        <path d="M12 19c0 -6.5 4 -11 10 -12" />
      </svg>
    ),
  },
]

export default function ReassuranceBarSection() {
  return (
    <section className="rsb" aria-label="Nos engagements">
      <div className="rsb-grid" role="list">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`rsb-item${i === ITEMS.length - 1 ? ' rsb-item--last' : ''}`}
            role="listitem"
          >
            <div className="rsb-icon-wrap" aria-hidden="true">
              {item.icon}
            </div>
            <div className="rsb-divider" aria-hidden="true" />
            <p className="rsb-label">{item.label}</p>
            <p className="rsb-sub">{item.sub}</p>
          </div>
        ))}
      </div>

      <style>{`
        /* ── SECTION ── */
        .rsb {
          background: #045627;
          width: 100%;
        }

        /* ── GRID ── */
        .rsb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        /* ── ITEM ── */
        .rsb-item {
          padding: 28px 24px;
          border-right: 0.5px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }
        .rsb-item--last {
          border-right: none;
        }

        /* ── ICON WRAPPER ── */
        .rsb-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(165,206,70,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #A5CE46;
        }

        /* ── DIVIDER ── */
        .rsb-divider {
          width: 24px;
          height: 1.5px;
          background: rgba(165,206,70,0.4);
          margin: 0 auto;
          flex-shrink: 0;
        }

        /* ── LABEL ── */
        .rsb-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        /* ── SOUS-TEXTE ── */
        .rsb-sub {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          margin: 0;
        }

        /* ── MOBILE 375px ── */
        @media (max-width: 640px) {
          .rsb-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .rsb-item {
            border-right: 0.5px solid rgba(255,255,255,0.08);
          }
          .rsb-item:nth-child(2n) {
            border-right: none;
          }
          .rsb-item:nth-child(1),
          .rsb-item:nth-child(2) {
            border-bottom: 0.5px solid rgba(255,255,255,0.08);
          }
          .rsb-item--last {
            border-right: none;
          }
        }
      `}</style>
    </section>
  )
}
