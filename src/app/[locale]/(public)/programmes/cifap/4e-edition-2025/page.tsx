import type { Metadata } from 'next'
import CIFAPEditionLayout from '@/components/CIFAPEditionLayout'
import { edition2025 } from '@/data/cifap/edition-2025'

export const metadata: Metadata = {
  title: 'CIFAP 2025 — 4e édition : Cultures horticoles en agroécologie paysanne | NSS',
  description:
    'Quatrième édition du CIFAP, 14–21 septembre 2025 à Niaguis, Sénégal. ~60 participants de 8 pays autour des techniques pratiques de conduite des cultures horticoles en agroécologie paysanne.',
}

export default async function CIFAP2025Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return <CIFAPEditionLayout edition={edition2025} locale={locale} />
}
