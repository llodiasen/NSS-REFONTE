import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import GalerieClient from '@/components/galerie/GalerieClient'

export const metadata: Metadata = {
  title: 'Galerie photos — Mouvement NSS | wasafrica.org',
  description:
    'Photos du terrain : CIFAP, Rencontres et Foires des semences paysannes — organisées par édition et par journée.',
}

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main>
        <GalerieClient />
      </main>
    </>
  )
}
