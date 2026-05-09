export type EditionStatus = 'past' | 'active' | 'upcoming'

export interface CIFAPPays {
  flag: string
  name: string
}

export interface CIFAPStat {
  val: string
  eye: string
  lbl: string
}

export interface CIFAPCitation {
  text: string
  author: string
  role: string
}

export interface CIFAPEdition {
  year: string
  num: number
  status: EditionStatus
  theme: string
  title?: string
  dates?: string
  location?: string
  duration?: string
  stats?: CIFAPStat[]
  pays?: CIFAPPays[]
  intro?: string
  bullets?: { bold: string; text: string }[]
  citation?: CIFAPCitation
  presenter?: string
  photoCredit?: string
  articleAuthor?: string
}

export const CIFAP_EDITIONS: CIFAPEdition[] = [
  {
    year: '2022',
    num: 1,
    status: 'past',
    theme: 'Techniques de conduite des cultures en agroécologie paysanne + bio-intrants',
    intro:
      'Première édition du CIFAP, fondation du modèle pédagogique NSS. Cette rencontre inaugurale a réuni des femmes rurales et leaders communautaires autour des bases de l\'agroécologie paysanne.',
    bullets: [
      { bold: 'Conduire', text: 'les cultures en respectant les cycles naturels du sol et les savoirs locaux.' },
      { bold: 'Produire', text: 'des bio-intrants locaux pour réduire la dépendance aux intrants chimiques.' },
      { bold: 'Transmettre', text: 'un modèle pédagogique reproductible dans chaque pays membre.' },
    ],
  },
  {
    year: '2023',
    num: 2,
    status: 'past',
    theme: 'Production des semences horticoles maraîchères paysannes',
    intro:
      'Deuxième édition centrée sur la souveraineté semencière. Avec un expert invité du Burkina Faso, les participantes ont appris à produire, conserver et échanger leurs propres semences maraîchères.',
    bullets: [
      { bold: 'Produire', text: 'des semences horticoles paysannes adaptées aux conditions locales.' },
      { bold: 'Conserver', text: 'les variétés locales menacées par les semences commerciales hybrides.' },
      { bold: 'Partager', text: 'les savoirs semenciers entre les 8 pays membres du réseau NSS.' },
    ],
    stats: [
      { val: '8', eye: 'Pays', lbl: 'Représentés' },
      { val: '1', eye: 'Expert invité', lbl: 'Burkina Faso' },
    ],
  },
  {
    year: '2024',
    num: 3,
    status: 'active',
    title: 'NSS mise sur les bio-protecteurs en agroécologie',
    theme: 'Techniques de production et d\'utilisation des bio-protecteurs en agroécologie',
    dates: '1–7 septembre 2024',
    location: 'Centre Karonghen Wati Naning, Niaguis, Ziguinchor — Sénégal',
    duration: '5 jours',
    intro:
      'Troisième édition du CIFAP, organisée au Centre Karonghen Wati Naning de Niaguis. Cette semaine intensive a réuni ~50 participantes de 14 associations et 8 pays autour de la fabrication et l\'utilisation des bio-protecteurs naturels.',
    bullets: [
      { bold: 'Former', text: 'aux techniques de fabrication des biopesticides à base de plantes locales.' },
      { bold: 'Protéger', text: 'les cultures contre les ravageurs sans recourir aux pesticides chimiques.' },
      { bold: 'Renforcer', text: 'les capacités des femmes rurales en tant que gardiennes de la biodiversité agricole.' },
      { bold: 'Diffuser', text: 'les bonnes pratiques dans les 8 pays membres du réseau NSS.' },
    ],
    stats: [
      { val: '~50', eye: 'Édition 2024', lbl: 'Participantes' },
      { val: '14', eye: 'Réseau', lbl: 'Associations' },
      { val: '8', eye: 'Pays', lbl: 'Représentés' },
      { val: '5', eye: 'Durée', lbl: 'Jours intensifs' },
    ],
    pays: [
      { flag: '🇧🇫', name: 'Burkina Faso' },
      { flag: '🇬🇲', name: 'Gambie' },
      { flag: '🇬🇭', name: 'Ghana' },
      { flag: '🇬🇳', name: 'Guinée' },
      { flag: '🇬🇼', name: 'Guinée-Bissau' },
      { flag: '🇨🇮', name: 'Côte d\'Ivoire' },
      { flag: '🇲🇱', name: 'Mali' },
      { flag: '🇸🇳', name: 'Sénégal' },
    ],
    citation: {
      text: 'Les bio-protecteurs permettent non seulement d\'avoir une bonne production, mais aussi une production de qualité avec tous les nutriments nécessaires pour une bonne alimentation.',
      author: 'Mariama Sonko',
      role: 'Présidente du Mouvement NSS',
    },
    presenter: 'Iya Diakité, coordinatrice NSS Mali',
    photoCredit: 'Scoops de Ziguinchor / Tapha I Badji',
    articleAuthor: 'Tapha I Badji',
  },
  {
    year: '2025',
    num: 4,
    status: 'upcoming',
    theme: 'Techniques de conduite des cultures horticoles en agroécologie maraîchère paysanne',
    dates: '14–21 septembre 2025',
    location: 'Centre Karonghen Wati Naning, Niaguis, Ziguinchor — Sénégal',
    duration: '7 jours',
    intro:
      'Quatrième édition du CIFAP, centrée sur la maîtrise complète du cycle cultural horticole en agroécologie. Cette édition réunira ~70 leaders et techniciens de 8 pays membres.',
    bullets: [
      { bold: 'Maîtriser', text: 'le cycle complet de conduite des cultures horticoles en agroécologie.' },
      { bold: 'Développer', text: 'des compétences pratiques en maraîchage paysanne durable.' },
      { bold: 'Consolider', text: 'le réseau panafricain NSS autour de l\'excellence agroécologique.' },
    ],
    stats: [
      { val: '~70', eye: 'Édition 2025', lbl: 'Leaders & techniciens' },
      { val: '8', eye: 'Pays', lbl: 'Membres' },
      { val: '7', eye: 'Durée', lbl: 'Jours' },
    ],
  },
]

export const CIFAP_DEFAULT_YEAR = '2024'
