import type { Metadata } from 'next'
import CIFAPEditionLayout from '@/components/CIFAPEditionLayout'
import { edition2023 } from '@/data/cifap/edition-2023'

export const metadata: Metadata = {
  title: 'CIFAP 2023 — 2e édition : Production des semences horticoles paysannes | NSS',
  description:
    'Deuxième édition du CIFAP, 10–17 septembre 2023 à Niaguis, Sénégal. ~40 participants de 8 pays autour de la production des semences horticoles paysannes et de l\'autonomie semencière.',
}

export default async function CIFAP2023Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return <CIFAPEditionLayout edition={edition2023} locale={locale} />
}
