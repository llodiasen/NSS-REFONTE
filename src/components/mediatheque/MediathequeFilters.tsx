"use client"

import { Search } from "lucide-react"

const PILLS = ["Tous", "Événements", "Agroécologie", "Médias", "NSS"]

interface Props {
  activeTab:      string
  activePill:     string
  search:         string
  onTabChange:    (t: string) => void
  onPillChange:   (p: string) => void
  onSearchChange: (s: string) => void
}

export default function MediathequeFilters({
  activePill, search, onPillChange, onSearchChange,
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

        <div className="mf-search" role="search">
          <Search size={14} className="mf-search-icon" aria-hidden="true" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher une vidéo…"
            className="mf-search-input"
            aria-label="Rechercher une vidéo"
          />
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
          justify-content: space-between;
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
        .mf-search {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 7px 12px;
          gap: 7px;
        }
        .mf-search-icon { color: #aaaaaa; flex-shrink: 0; }
        .mf-search-input {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          width: 180px;
          border: none;
          outline: none;
          background: transparent;
          color: #2A2A2A;
        }
        .mf-search-input::placeholder { color: #aaaaaa; }

        @media (max-width: 768px) {
          .mf-inner { padding: 12px 20px; gap: 10px; }
          .mf-search-input { width: 130px; }
        }
      `}</style>
    </div>
  )
}
