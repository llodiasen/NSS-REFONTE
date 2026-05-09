import type { Metadata } from 'next'
import CIFAPEditionLayout from '@/components/CIFAPEditionLayout'
import { edition2024 } from '@/data/cifap/edition-2024'

export const metadata: Metadata = {
  title: 'CIFAP 2024 — 3e édition : Bio-protecteurs en agroécologie paysanne | NSS',
  description:
    'Troisième édition du CIFAP, 1–7 septembre 2024 à Niaguis, Sénégal. ~50 participants de 8 pays autour des techniques de production et d\'utilisation des bio-protecteurs en agroécologie paysanne.',
}

export default async function CIFAP2024Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return <CIFAPEditionLayout edition={edition2024} locale={locale} />
}
