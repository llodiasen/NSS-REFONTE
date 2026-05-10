export const CIFAP_EDITIONS = [
  {
    num: '1ÈRE', year: '2022', status: 'past' as const,
    label: '1ère édition 2022',
    theme: 'Bio-intrants — biofertilisants et biopesticides',
    themeShort: 'Bio-intrants',
    dates: 'Septembre 2022 · 7 jours',
    participants: '~40 · 8 pays',
    href: '/programmes/cifap/1ere-edition-2022',
    accent: '#A5CE46',
    photo: null as string | null,
    objectives: [
      'Formation sur biofertilisants et biopesticides paysans',
      'Autonomie en intrants agricoles locaux et naturels',
      'Premiers échanges continentaux du réseau NSS',
    ],
  },
  {
    num: '2ÈME', year: '2023', status: 'past' as const,
    label: '2ème édition 2023',
    theme: 'Production des semences horticoles paysannes',
    themeShort: 'Semences horticoles',
    dates: '10–17 sept 2023 · 7 jours',
    participants: '~40 · 8 pays',
    href: '/programmes/cifap/2e-edition-2023',
    accent: '#A5CE46',
    photo: null as string | null,
    objectives: [
      'Production et conservation des semences reproductives',
      'Autonomie semencière face aux semences hybrides',
      'Renforcement des capacités techniques des leaders',
    ],
  },
  {
    num: '3ÈME', year: '2024', status: 'past' as const,
    label: '3ème édition 2024',
    theme: 'Bio-protecteurs en agroécologie paysanne',
    themeShort: 'Bio-protecteurs',
    dates: '1–7 sept 2024 · 5 jours',
    participants: '~50 · 8 pays',
    href: '/programmes/cifap/3e-edition-2024',
    accent: '#A5CE46',
    photo: 'https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg' as string | null,
    objectives: [
      'Production et utilisation des bio-protecteurs naturels',
      'Prévention des ravageurs sans pesticides chimiques',
      'Autonomie en protection des cultures agroécologiques',
    ],
  },
  {
    num: '4ÈME', year: '2025', status: 'past' as const,
    label: '4ème édition 2025',
    theme: 'Cultures horticoles en agroécologie paysanne',
    themeShort: 'Cultures horticoles',
    dates: '14–21 sept 2025 · 7 jours',
    participants: '~70 · 8 pays',
    href: '/programmes/cifap/4e-edition-2025',
    accent: '#00AD4C',
    photo: null as string | null,
    objectives: [
      'Techniques de conduite des cultures horticoles en agroécologie',
      'Production diversifiée et résiliente face au changement climatique',
      'Leadership féminin et réseautage continental NSS',
    ],
  },
  {
    num: '5ÈME', year: '2026', status: 'upcoming' as const,
    label: '5ème édition 2026',
    theme: 'À confirmer',
    themeShort: 'À confirmer',
    dates: 'Septembre 2026 · prévisionnel',
    participants: null,
    href: null,
    accent: '#E8A838',
    photo: null as string | null,
    objectives: [
      'Thème à définir collectivement par le réseau NSS',
    ],
  },
]

export const CIFAP_PAYS = [
  { flag: '🇧🇫', name: 'Burkina Faso' },
  { flag: '🇨🇮', name: "Côte d'Ivoire" },
  { flag: '🇬🇲', name: 'Gambie' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇬🇳', name: 'Guinée' },
  { flag: '🇬🇼', name: 'Guinée-Bissau' },
  { flag: '🇲🇱', name: 'Mali' },
  { flag: '🇸🇳', name: 'Sénégal' },
]

export const CIFAP_PARTENAIRES_NSS = [
  { name: 'Fahamu Africa', logo: '/images/partenaires/logofahamu1.png'             },
  { name: 'FENOP',         logo: '/images/partenaires/FENOP.jpg'                  },
  { name: 'AJAC Lukaal',   logo: '/images/partenaires/AJAC-Lukaal_Tiburce-MANGA.png' },
]

export const CIFAP_PARTENAIRES_BAILLEURS = [
  { name: 'Grassroots International', logo: '/images/partenaires/Grassroots-international.jpg' },
  { name: 'Thousand Currents',        logo: '/images/partenaires/thoussands-current-1.jpg'     },
  { name: 'Agroecology Fund',         logo: '/images/partenaires/Agroecology-Fund.jpg'         },
  { name: 'Fonds Égalité',            logo: '/images/partenaires/Fond-egalite.png'             },
]
