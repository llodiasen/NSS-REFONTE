import Link from 'next/link'
import { Tent, Mic, Store, Calendar, MapPin, Users } from 'lucide-react'
import type { Programme, ProgrammeType, StatutType } from '@/lib/programmes'

/* ── Maps ──────────────────────────────────────────────────── */

const TYPE_CONFIG: Record<ProgrammeType, {
  Icon: React.ElementType
  label: string
  bg: string
  color: string
}> = {
  camp:       { Icon: Tent,  label: 'Camp de formation', bg: '#EAF3DE', color: '#3B6D11' },
  conference: { Icon: Mic,   label: 'Conférence',        bg: '#E6F1FB', color: '#0C447C' },
  foire:      { Icon: Store, label: 'Foire paysanne',    bg: '#FAEEDA', color: '#633806' },
}

const STATUT_CONFIG: Record<StatutType, {
  label: string
  bg: string
  color: string
}> = {
  ouvert:  { label: 'Inscriptions ouvertes', bg: '#EAF3DE', color: '#3B6D11' },
  bientot: { label: 'Bientôt annoncé',       bg: '#FAEEDA', color: '#633806' },
  complet: { label: 'Complet',               bg: '#FCEBEB', color: '#A32D2D' },
  passe:   { label: 'Édition passée',        bg: '#F3F4F6', color: '#6B7280' },
}

/* ── Composant ──────────────────────────────────────────────── */

interface Props {
  programme: Programme
  locale?: string
}

export default function ProgrammeCard({ programme: p, locale = 'fr' }: Props) {
  const type    = TYPE_CONFIG[p.type]
  const statut  = STATUT_CONFIG[p.statut]
  const TypeIcon = type.Icon

  return (
    <article
      className="rounded-lg overflow-hidden flex flex-col bg-white transition-colors duration-150 hover:border-[#0C3D2A]/25"
      style={{ border: '0.5px solid #e5e7eb' }}
    >
      {/* Barre top colorée */}
      <div className="h-[7px] flex-shrink-0" style={{ background: p.couleur_accent }} />

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">

        {/* Badge type */}
        <span
          className="self-start inline-flex items-center gap-1.5 text-[12px] font-medium px-2 py-1 rounded"
          style={{ background: type.bg, color: type.color, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        >
          <TypeIcon size={11} aria-hidden="true" />
          {type.label}
        </span>

        {/* Nom */}
        <h3
          className="text-[16px] font-semibold text-foreground leading-snug"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        >
          {p.nom}
        </h3>

        {/* Description */}
        <p
          className="text-[13px] leading-relaxed line-clamp-2"
          style={{ color: '#6B7280', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        >
          {p.description}
        </p>

        {/* Meta */}
        <div
          className="pt-3 space-y-2"
          style={{ borderTop: '0.5px solid #e5e7eb' }}
        >
          <div className="flex items-start gap-2">
            <Calendar size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
            <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
              {p.prochaine_date}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
            <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
              {p.lieu}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Users size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
            <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
              {p.public_cible} · {p.frequence}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 flex items-center justify-between gap-3"
        style={{ borderTop: '0.5px solid #e5e7eb' }}
      >
        <span
          className="text-[12px] font-medium px-2 py-0.5 rounded"
          style={{ background: statut.bg, color: statut.color, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        >
          {statut.label}
        </span>
        <Link
          href={`/${locale}/programmes/${p.slug}`}
          className="text-[13px] font-medium hover:underline whitespace-nowrap"
          style={{ color: '#1D9E75', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
          aria-label={`Voir le programme ${p.nom}`}
        >
          Voir le programme →
        </Link>
      </div>
    </article>
  )
}
