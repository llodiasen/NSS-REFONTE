import type { Metadata } from 'next'
import { PROGRAMMES } from '@/lib/programmes'
import ProgrammesHero        from '@/components/programmes/ProgrammesHero'
import ProgrammeCard         from '@/components/programmes/ProgrammeCard'
import AgendaBlock           from '@/components/programmes/AgendaBlock'
import CifapEditionsSection  from '@/components/programmes/CifapEditionsSection'

export const metadata: Metadata = {
  title: 'Nos programmes — NSS',
  description:
    'Découvrez les trois programmes du mouvement NSS : CIFAP, Rencontre annuelle et Foire agroécologique.',
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function ProgrammesPage({ params }: PageProps) {
  const { locale } = await params

  const sorted = [...PROGRAMMES].sort(
    (a, b) =>
      new Date(a.prochaine_date_raw ?? '2099').getTime() -
      new Date(b.prochaine_date_raw ?? '2099').getTime(),
  )

  return (
    <>
      <ProgrammesHero />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* ── Grille des programmes ── */}
        <section aria-labelledby="programmes-titre" className="py-[24px]">
          <div className="flex items-baseline justify-between mb-4">
            <h2
              id="programmes-titre"
              className="text-[18px] font-semibold text-foreground"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Tous les programmes
            </h2>
            <a
              href="#agenda"
              className="text-xs text-nss-principal hover:underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Voir l&apos;agenda ↓
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {sorted.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} locale={locale} />
            ))}
          </div>
        </section>

        {/* ── Agenda ── */}
        <section id="agenda" aria-labelledby="agenda-titre" className="py-[24px]">
          <h2
            id="agenda-titre"
            className="text-[18px] font-semibold text-foreground mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Agenda 2026
          </h2>
          <AgendaBlock programmes={sorted} />
        </section>

        {/* ── Éditions CIFAP ── */}
        <section className="py-[24px]">
          <CifapEditionsSection locale={locale} />
        </section>

      </div>
    </>
  )
}
