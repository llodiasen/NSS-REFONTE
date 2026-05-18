import { notFound }           from 'next/navigation'
import type { Metadata }      from 'next'
import { getEditionBySlug, getEditionsSorted } from '@/lib/cifap-editions'
import EditionHero            from '@/components/cifap/edition/EditionHero'
import EditionTabs            from '@/components/cifap/edition/EditionTabs'
import SectionPresentation    from '@/components/cifap/edition/SectionPresentation'
import SectionProgramme       from '@/components/cifap/edition/SectionProgramme'
import SectionObjectifs       from '@/components/cifap/edition/SectionObjectifs'
import SectionParticipants    from '@/components/cifap/edition/SectionParticipants'
import SectionGalerie         from '@/components/cifap/edition/SectionGalerie'
import SectionTemoignages     from '@/components/cifap/edition/SectionTemoignages'
import SectionPartenaires     from '@/components/cifap/edition/SectionPartenaires'
import EditionCtaBanner       from '@/components/cifap/edition/EditionCtaBanner'

export const metadata: Metadata = {
  title: 'CIFAP 2023 — 2e édition : Production des semences horticoles paysannes | NSS',
  description: 'Deuxième édition du CIFAP, 10–17 septembre 2023 à Niaguis, Sénégal. ~40 participants de 8 pays autour de la production des semences horticoles paysannes.',
}

export default async function CIFAP2023Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const edition = getEditionBySlug('2e-edition-2023')
  if (!edition) notFound()
  const toutes = getEditionsSorted()

  const visibleIds = [
    'presentation', 'programme', 'objectifs', 'participants',
    edition.galerie_count ? 'galerie' : null,
    edition.temoignages.length > 0 ? 'temoignages' : null,
    'partenaires',
  ].filter(Boolean) as string[]

  return (
    <div className="bg-gray-50 min-h-screen">
      <EditionHero edition={edition} toutes={toutes} locale={locale} />
      <EditionTabs visibleIds={visibleIds} />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <SectionPresentation edition={edition} />
        <SectionProgramme items={edition.programme_technique} />
        <SectionObjectifs objectifs={edition.objectifs} />
        <SectionParticipants edition={edition} />
        {edition.galerie_count && <SectionGalerie count={edition.galerie_count} />}
        {edition.temoignages.length > 0 && <SectionTemoignages temoignages={edition.temoignages} />}
        <SectionPartenaires partenaires={edition.partenaires} />
        <EditionCtaBanner locale={locale} />
      </div>
    </div>
  )
}
