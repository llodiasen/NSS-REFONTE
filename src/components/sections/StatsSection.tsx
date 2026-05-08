'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  stats?: Stat[]
}

const DEFAULT_STATS: Stat[] = [
  { value: '175 000', label: 'femmes mobilisées'  },
  { value: '14',      label: "pays d'Afrique"     },
  { value: '500+',    label: 'foires paysannes'   },
  { value: '14 ans',  label: "d'engagement"       },
]

function parseNumber(val: string): { prefix: string; num: number; suffix: string } {
  const match = val.match(/^([^\d]*)(\d[\d\s]*)(\D*)$/)
  if (!match) return { prefix: '', num: 0, suffix: val }
  return {
    prefix: match[1] ?? '',
    num:    parseInt(match[2].replace(/\s/g, ''), 10),
    suffix: match[3] ?? '',
  }
}

function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const { prefix, num, suffix } = parseNumber(value)
  const [display, setDisplay] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView || num === 0) { setDisplay(num); return }
    const duration  = 2000
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * num))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [inView, num])

  if (num === 0) return <>{value}</>

  const formatted = display >= 1000
    ? display.toLocaleString('fr-FR').replace(',', ' ')
    : String(display)

  return <>{prefix}{formatted}{suffix}</>
}

export default function StatsSection({ stats = DEFAULT_STATS }: StatsSectionProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="stats-section" ref={ref} aria-label="Chiffres clés NSS">
      <div className="stats-grid">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            className="stats-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
          >
            <span className="stats-value">
              <CountUp value={value} inView={inView} />
            </span>
            <span className="stats-label">{label}</span>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-section {
          background: #045627;
          overflow: hidden;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .stats-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 0 24px;
          border-right: 1px solid rgba(245,237,214,0.20);
        }
        .stats-item:last-child { border-right: none; }

        .stats-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 52px;
          font-weight: 600;
          color: #E8A838;
          line-height: 1;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .stats-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #A5CE46;
          text-align: center;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 48px 20px;
            gap: 32px 0;
          }
          .stats-item:nth-child(2) { border-right: none; }
          .stats-item:nth-child(3) { border-right: 1px solid rgba(245,237,214,0.20); }
          .stats-item:nth-child(3),
          .stats-item:nth-child(4) { border-top: 1px solid rgba(245,237,214,0.20); padding-top: 32px; }
          .stats-value { font-size: 40px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .stats-value { transition: none; }
        }
      `}</style>
    </section>
  )
}
