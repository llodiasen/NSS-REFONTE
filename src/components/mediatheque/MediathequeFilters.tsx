"use client"

const PILLS = ["Tous", "Événements", "Agroécologie", "Médias", "NSS"]

interface Props {
  activeTab:    string
  activePill:   string
  onTabChange:  (t: string) => void
  onPillChange: (p: string) => void
}

export default function MediathequeFilters({
  activePill, onPillChange,
}: Props) {
  return (
    <div className="mf-wrap" id="contenu">
      <div className="mf-inner">

        <div className="mf-pills" role="group" aria-label="Filtrer par catégorie">
          {PILLS.map((pill) => {
            const active = activePill === pill
            return (
              <button
                key={pill}
                onClick={() => onPillChange(pill)}
                className={`mf-pill${active ? ' mf-pill--active' : ''}`}
                aria-pressed={active}
              >
                {pill}
              </button>
            )
          })}
        </div>

      </div>

      <style>{`
        .mf-wrap {
          border-bottom: 0.5px solid #e5e7eb;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .mf-inner {
          padding: 14px 80px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .mf-pills {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
        }
        .mf-pill {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 400;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid #e0e8e2;
          background: #ffffff;
          color: #555555;
          transition: all 0.15s;
        }
        .mf-pill:hover:not(.mf-pill--active) {
          border-color: #00AD4C;
          color: #00AD4C;
        }
        .mf-pill--active {
          background: #045627;
          border-color: #045627;
          color: #ffffff;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .mf-inner { padding: 12px 20px; gap: 10px; }
        }
      `}</style>
    </div>
  )
}
