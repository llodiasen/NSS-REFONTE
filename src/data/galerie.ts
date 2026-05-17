export type Categorie = 'cifap' | 'rencontre' | 'foire'

export interface Photo {
  src: string
  alt: string
}

export interface Album {
  id: string
  categorie: Categorie
  edition: string
  jour: string
  theme: string
  date: string
  photos: Photo[]
}

/* ── Helpers de génération ─────────────────────────────────── */

function cifap2025Root(count: number): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/programmes/Cifap/Cifap 2025 à Niaguis (${i + 1}).jpg`,
    alt: `CIFAP 2025 à Niaguis — photo ${i + 1}`,
  }))
}

function cifap2025Subdir(count: number): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/programmes/Cifap/Cifap 2025 à Niaguis (1)/NOUS SOMMES LA SOUTIONS CIFAP 2025 (${i + 1}).webp`,
    alt: `CIFAP 2025 — Cérémonie d'ouverture, photo ${i + 1}`,
  }))
}

/* ── Albums ────────────────────────────────────────────────── */

export const ALBUMS: Album[] = [
  {
    id: 'cifap-2025-niaguis',
    categorie: 'cifap',
    edition: 'CIFAP 2025',
    jour: 'Journée complète',
    theme: 'Formation agroécologie paysanne — Niaguis',
    date: 'août 2025',
    photos: cifap2025Root(79),
  },
  {
    id: 'cifap-2025-ouverture',
    categorie: 'cifap',
    edition: 'CIFAP 2025',
    jour: "Cérémonie d'ouverture",
    theme: '4e édition — Ouverture & accueil',
    date: 'août 2025',
    photos: cifap2025Subdir(61),
  },
  {
    id: 'foire-djimini-2024',
    categorie: 'foire',
    edition: 'Foire Djimini 2024',
    jour: 'Journée',
    theme: 'Semences paysannes & biodiversité',
    date: '2024',
    photos: [
      {
        src: '/images/programmes/Cifap/Foire-Djimini-2024-4-770x415.webp',
        alt: 'Foire des semences paysannes — Djimini 2024',
      },
      {
        src: '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
        alt: 'Foire Djimini — échange de semences paysannes 2024',
      },
      {
        src: '/images/programmes/Cifap/foire-du-benin-1.webp',
        alt: 'Foire agroécologique — Bénin',
      },
    ],
  },
  {
    id: 'rencontre-senegal-2025',
    categorie: 'rencontre',
    edition: 'Rencontre Sénégal 2025',
    jour: 'Journée',
    theme: 'Rencontre des femmes rurales NSS',
    date: '2025',
    photos: [
      {
        src: '/images/actualites/rencontre-2025.jpg',
        alt: 'Rencontre NSS — Sénégal 2025',
      },
      {
        src: '/images/galerie/rencontre-1.jpg',
        alt: 'Femmes rurales NSS — rencontre territoriale',
      },
    ],
  },
]

export const TOTAL_PHOTOS = ALBUMS.reduce((acc, a) => acc + a.photos.length, 0)
