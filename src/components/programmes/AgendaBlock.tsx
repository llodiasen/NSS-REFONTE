import { CalendarDays } from 'lucide-react'
import type { Programme, StatutType } from '@/lib/programmes'

const STATUT_CONFIG: Record<StatutType, { label: string; bg: string; color: string }> = {
  ouvert:  { label: 'Inscriptions ouvertes', bg: '#EAF3DE', color: '#3B6D11' },
  bientot: { label: 'Bientôt annoncé',       bg: '#FAEEDA', color: '#633806' },
  complet: { label: 'Complet',               bg: '#FCEBEB', color: '#A32D2D' },
  passe:   { label: 'Édition passée',        bg: '#F3F4F6', color: '#6B7280' },
}

function parseDate(raw?: string): { month: string; day: string } | null {
  if (!raw) return null
  const d = new Date(raw)
  if (isNaN(d.getTime())) return null
  const month = d.toLocaleString('fr-FR', { month: 'short' }).toUpperCase().replace('.', '')
  const day   = d.getDate().toString().padStart(2, '0')
  return { month, day }
}

interface Props {
  programmes: Programme[]
}

export default function AgendaBlock({ programmes }: Props) {
  return (
    <div
      className="rounded-lg overflow-hidden bg-white"
      style={{ border: '0.5px solid #e5e7eb' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-5 py-4"
        style={{ borderBottom: '0.5px solid #e5e7eb' }}
      >
        <CalendarDays size={16} style={{ color: '#9CA3AF' }} aria-hidden="true" />
        <span
          className="text-[15px] font-medium"
          style={{ color: '#111827', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        >
          Prochains événements
        </span>
      </div>

      {/* Rows */}
      <div>
        {programmes.map((p, i) => {
          const date   = parseDate(p.prochaine_date_raw)
          const statut = STATUT_CONFIG[p.statut]
          const isLast = i === programmes.length - 1

          return (
            <div
              key={p.slug}
              className="flex items-center gap-4 px-5 py-4 transition-colors duration-150 hover:bg-[#f9f8f5]"
              style={isLast ? undefined : { borderBottom: '0.5px solid #e5e7eb' }}
            >
              {/* Date column */}
              <div className="w-14 flex-shrink-0 text-center" aria-label={p.prochaine_date}>
                {date ? (
                  <>
                    <p
                      className="text-[11px] font-medium uppercase leading-none mb-0.5"
                      style={{ color: '#6B7280', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {date.month}
                    </p>
                    <p
                      className="text-[21px] font-semibold leading-none"
                      style={{ color: '#111827', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {date.day}
                    </p>
                  </>
                ) : (
                  <p
                    className="text-[14px] font-medium"
                    style={{ color: '#9CA3AF', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    TBD
                  </p>
                )}
              </div>

              {/* Dot séparateur */}
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#D1D5DB' }} aria-hidden="true" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-[14px] font-medium leading-snug"
                  style={{ color: '#111827', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                >
                  {p.nom}
                </p>
                <p
                  className="text-[12px] mt-0.5 truncate"
                  style={{ color: '#6B7280', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                >
                  {p.lieu} · {p.prochaine_date} · {p.public_cible}
                </p>
              </div>

              {/* Statut */}
              <span
                className="text-[12px] font-medium px-2 py-0.5 rounded flex-shrink-0"
                style={{ background: statut.bg, color: statut.color, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {statut.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
