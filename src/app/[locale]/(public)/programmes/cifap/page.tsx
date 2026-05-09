import type { Metadata } from 'next'
import CIFAPMainPage from '@/components/programmes/cifap/CIFAPMainPage'

export const metadata: Metadata = {
  title: 'CIFAP — Camp International de Formation en Agroécologie Paysanne | NSS',
  description:
    'Chaque année depuis 2022, le CIFAP réunit des leaders paysans de 8 pays d\'Afrique de l\'Ouest pour une formation intensive en agroécologie paysanne à Niaguis, Sénégal.',
}

export default async function CIFAPPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return <CIFAPMainPage locale={locale} />
}
