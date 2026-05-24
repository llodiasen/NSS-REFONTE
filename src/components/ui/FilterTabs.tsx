'use client'

import { motion } from 'framer-motion'

interface FilterTabsProps {
  tabs:      string[]
  activeTab: string
  onChange:  (tab: string) => void
}

export default function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="ftabs-wrap" role="tablist" aria-label="Filtrer les articles">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={tab === activeTab}
          onClick={() => onChange(tab)}
          className={`ftabs-tab${tab === activeTab ? ' ftabs-tab--active' : ''}`}
        >
          {tab === activeTab && (
            <motion.span
              layoutId="tab-indicator"
              className="ftabs-indicator"
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />
          )}
          <span className="ftabs-label">{tab}</span>
        </button>
      ))}

      <style>{`
        .ftabs-wrap {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #FAFAF8;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          border-bottom: 1px solid rgba(0,173,76,0.08);
        }

        .ftabs-tab {
          position: relative;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          font-weight: 400;
          color: #2C2C28;
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .ftabs-tab--active {
          font-weight: 700;
          color: #ffffff;
        }

        .ftabs-tab:not(.ftabs-tab--active):hover .ftabs-label {
          text-decoration: underline;
          text-decoration-color: #A5CE46;
          text-underline-offset: 3px;
        }

        .ftabs-indicator {
          position: absolute;
          inset: 0;
          background: #00AD4C;
          border-radius: 4px;
          z-index: -1;
        }

        .ftabs-label {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .ftabs-wrap { padding: 12px 20px; gap: 6px; }
          .ftabs-tab  { font-size: 12px; padding: 7px 12px; }
        }
      `}</style>
    </div>
  )
}
