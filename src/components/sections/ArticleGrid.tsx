'use client'

import { useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import FilterTabs from '@/components/ui/FilterTabs'
import ArticleCard from '@/components/ui/ArticleCard'
import type { Article } from '@/types/article'

interface ArticleGridProps {
  articles:   Article[]
  filterTabs: string[]
  filterKey:  keyof Article
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ArticleGrid({ articles, filterTabs, filterKey }: ArticleGridProps) {
  const [activeTab, setActiveTab] = useState(filterTabs[0] ?? 'Tous')
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeTab === 'Tous'
    ? articles
    : articles.filter((a) => {
        const val = a[filterKey]
        return typeof val === 'string' && val === activeTab
      })

  return (
    <div className="agrid">
      <FilterTabs
        tabs={filterTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="agrid__wrap" ref={ref}>
        <motion.ul
          className="agrid__list"
          role="list"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {filtered.map((article) => (
            <motion.li key={article.id} variants={item} role="listitem">
              <ArticleCard article={article} />
            </motion.li>
          ))}
          {filtered.length === 0 && (
            <li className="agrid__empty">
              Aucun article pour ce filtre.
            </li>
          )}
        </motion.ul>
      </div>

      <style>{`
        .agrid {
          background: #ffffff;
        }

        .agrid__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        .agrid__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .agrid__empty {
          grid-column: 1 / -1;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: #888;
          text-align: center;
          padding: 48px 0;
        }

        @media (max-width: 1024px) {
          .agrid__list { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .agrid__wrap { padding: 32px 16px 60px; }
          .agrid__list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
