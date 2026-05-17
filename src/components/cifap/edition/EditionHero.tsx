import Link from 'next/link'
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import type { CifapEdition } from '@/lib/cifap-editions'

interface Props {
  edition: CifapEdition
  toutes: CifapEdition[]
  locale: string
}

export default function EditionHero({ edition: e, toutes, locale }: Props) {
  return (
    <section className="bg-nss-nuit rounded-3xl px-8 py-10 mb-0">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
        <Link href={`/${locale}`} className="hover:text-gray-200 transition-colors">Accueil</Link>
        <span aria-hidden>/</span>
        <Link href={`/${locale}/programmes`} className="hover:text-gray-200 transition-colors">Programmes</Link>
        <span aria-hidden>/</span>
        <Link href={`/${locale}/programmes/cifap`} className="hover:text-gray-200 transition-colors">CIFAP</Link>
        <span aria-hidden>/</span>
        <span className="text-gray-300">{e.numero}e édition {e.annee}</span>
      </nav>

      {/* Eyebrow */}
      <p className="text-nss-lime text-xs uppercase tracking-widest mb-4">
        —— CIFAP — {e.numero}E ÉDITION · {e.annee}
      </p>

      {/* Titre 2 lignes */}
      <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6">
        <span className="text-white">{e.titre_ligne1}</span>
        <br />
        <span className="text-nss-lime italic">{e.titre_ligne2}</span>
      </h1>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-300 text-sm">
        <span className="flex items-center gap-2">
          <CalendarDays size={16} className="text-nss-lime flex-shrink-0" aria-hidden="true" />
          {e.dates}
        </span>
        <span className="flex items-center gap-2">
          <Clock size={16} className="text-nss-lime flex-shrink-0" aria-hidden="true" />
          {e.jours_formation} jours
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-nss-lime flex-shrink-0" aria-hidden="true" />
          {e.lieu}
        </span>
        <span className="flex items-center gap-2">
          <Users size={16} className="text-nss-lime flex-shrink-0" aria-hidden="true" />
          {e.participants} participants · {e.pays_representes} pays
        </span>
      </div>

      {/* Timeline éditions */}
      <div
        className="flex items-center gap-3 mt-8 pt-6 overflow-x-auto"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        {toutes.map((ed) => (
          <Link
            key={ed.slug}
            href={`/${locale}/programmes/cifap/${ed.slug}`}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
              ed.slug === e.slug
                ? 'bg-nss-lime text-nss-nuit font-semibold'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {ed.numero}e éd. {ed.annee}
          </Link>
        ))}
      </div>
    </section>
  )
}
