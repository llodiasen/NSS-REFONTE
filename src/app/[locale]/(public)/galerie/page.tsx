import type { Metadata } from 'next'
import GalerieClient from '@/components/galerie/GalerieClient'

export const metadata: Metadata = {
  title: 'Galerie photos — Mouvement NSS | wasafrica.org',
  description:
    'Photos du terrain : CIFAP, Rencontres et Foires des semences paysannes — organisées par édition et par journée.',
}

export default function GaleriePage() {
  return <GalerieClient />
}
