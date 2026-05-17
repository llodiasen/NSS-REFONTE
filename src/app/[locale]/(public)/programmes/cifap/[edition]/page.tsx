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

interface PageProps {
  params: Promise<{ locale: string; edition: string }>
}

export async function generateStaticParams() {
  return getEditionsSorted().map((e) => ({ edition: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { edition: slug } = await params
  const e = getEditionBySlug(slug)
  if (!e) return {}
  return {
    title: `CIFAP ${e.annee} — ${e.numero}e édition : ${e.titre_ligne1} ${e.titre_ligne2} | NSS`,
    description: e.presentation.slice(0, 160),
  }
}

export default async function EditionPage({ params }: PageProps) {
  const { locale, edition: slug } = await params
  const edition = getEditionBySlug(slug)
  if (!edition) notFound()

  const toutes = getEditionsSorted()

  const visibleIds = [
    'presentation',
    edition.programme_technique.length > 0  ? 'programme'   : null,
    edition.objectifs.length > 0            ? 'objectifs'   : null,
    'participants',
    edition.galerie_count                   ? 'galerie'     : null,
    edition.temoignages.length > 0          ? 'temoignages' : null,
    'partenaires',
  ].filter(Boolean) as string[]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <EditionHero edition={edition} toutes={toutes} locale={locale} />
      </div>

      <EditionTabs visibleIds={visibleIds} />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <SectionPresentation edition={edition} />

        {edition.programme_technique.length > 0 && (
          <SectionProgramme items={edition.programme_technique} />
        )}

        {edition.objectifs.length > 0 && (
          <SectionObjectifs objectifs={edition.objectifs} />
        )}

        <SectionParticipants edition={edition} />

        {edition.galerie_count && (
          <SectionGalerie count={edition.galerie_count} />
        )}

        {edition.temoignages.length > 0 && (
          <SectionTemoignages temoignages={edition.temoignages} />
        )}

        <SectionPartenaires partenaires={edition.partenaires} />

        <EditionCtaBanner locale={locale} />
      </div>
    </div>
  )
}
