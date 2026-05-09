/* ──────────────────────────────────────────────────────────
   Types partagés — utilisés par CIFAPEditionLayout
   ────────────────────────────────────────────────────────── */

export interface CIFAPProgrammeItem {
  icon: string   // clé Lucide : 'layers' | 'sprout' | 'leaf' | etc.
  title: string
  desc: string
}

export interface CIFAPObjectif {
  icon: string
  title: string
  desc: string
}

export interface CIFAPStat {
  val: string
  label: string
}

export interface CIFAPPays {
  flag: string
  code: string
  name: string
}

export interface CIFAPIntervenant {
  name: string
  role: string
}

export interface CIFAPCitation {
  text: string
  author: string
  role: string
}

export interface CIFAPDistinction {
  name: string
  role?: string
}

export interface CIFAPPilier {
  icon: string
  title: string
  subtitle: string
}

export interface CIFAPProblematique {
  icon: string
  text: string
}

export interface CIFAPEditionNav {
  label: string
  href: string
}

export interface CIFAPEditionData {
  num: number
  year: string
  badge: string
  theme: string
  dates: string
  duration: string
  location: string
  status: 'past' | 'upcoming'
  intro: string[]
  programme: CIFAPProgrammeItem[]
  objectifs: CIFAPObjectif[]
  stats: CIFAPStat[]
  pays: CIFAPPays[]
  intervenants?: CIFAPIntervenant[]
  citations: CIFAPCitation[]
  distinctions?: CIFAPDistinction[]
  distinctionsTotal?: number
  piliers?: CIFAPPilier[]
  problematique?: CIFAPProblematique[]
  financeurs?: string[]
  partenaires: string[]
  prevEdition?: CIFAPEditionNav
  nextEdition?: CIFAPEditionNav
}

/* ──────────────────────────────────────────────────────────
   Données — 4e édition CIFAP 2025
   ────────────────────────────────────────────────────────── */

export const edition2025: CIFAPEditionData = {
  num: 4,
  year: '2025',
  badge: '4ÈME ÉDITION · 2025',
  theme: 'Techniques pratiques de conduite des cultures horticoles en agroécologie paysanne',
  dates: '14–21 septembre 2025',
  duration: '7 jours',
  location: 'Centre Karonghen Wati Naning, Niaguis, Ziguinchor — Sénégal',
  status: 'past',

  intro: [
    'La quatrième édition du CIFAP s\'est tenue du 14 au 21 septembre 2025 au Centre Karonghen Wati Naning de Niaguis, Ziguinchor. Cette semaine intensive a réuni une soixantaine de leaders paysans, techniciens agricoles et animateurs ruraux issus de 8 pays d\'Afrique de l\'Ouest autour des techniques pratiques de conduite des cultures horticoles en agroécologie paysanne.',
    'Organisée conjointement par le mouvement NSS, AJAC Lukaal et Fahamu Africa, cette édition a approfondi les acquis des années précédentes en proposant un programme technique complet : de la préparation des sols à la récolte, en passant par la gestion écologique et la culture hors sol. Chaque journée combinait apports théoriques et ateliers pratiques directement dans les champs du Centre.',
  ],

  programme: [
    {
      icon: 'layers',
      title: 'Préparation des sols',
      desc: 'Techniques de labour naturel, amendement organique et régénération de la fertilité des sols sans intrants chimiques.',
    },
    {
      icon: 'sprout',
      title: 'Mise en place de pépinières',
      desc: 'Conception et gestion de pépinières paysannes adaptées aux conditions climatiques locales pour un démarrage optimal des plants.',
    },
    {
      icon: 'leaf',
      title: 'Repiquage et entretien des cultures',
      desc: 'Méthodes de transplantation, irrigation raisonnée et suivi phénologique des cultures maraîchères en conditions paysannes.',
    },
    {
      icon: 'shield',
      title: 'Traitements naturels phytosanitaires',
      desc: 'Fabrication et application de biopesticides et biofongicides à base de plantes locales pour protéger les cultures.',
    },
    {
      icon: 'wheat',
      title: 'Culture du riz pluvial',
      desc: 'Conduite des cultures de riz pluvial en agroécologie : variétés locales, gestion de l\'eau et pratiques culturales intégrées.',
    },
    {
      icon: 'scissors',
      title: 'Techniques de récolte',
      desc: 'Calendriers culturaux, méthodes de récolte raisonnée et indicateurs de maturité pour maximiser qualité et rendements.',
    },
    {
      icon: 'rotate',
      title: 'Rotation des cultures',
      desc: 'Planification des successions culturales pour maintenir la fertilité du sol, réduire les ravageurs et optimiser les productions.',
    },
    {
      icon: 'globe',
      title: 'Gestion écologique des sols',
      desc: 'Compostage, paillage et techniques de conservation de l\'eau pour préserver et régénérer durablement les sols agricoles.',
    },
    {
      icon: 'flask',
      title: 'Culture hors sol',
      desc: 'Introduction aux techniques de culture sur substrat et en hydroponie simplifiée, adaptées aux contextes urbains et péri-urbains.',
    },
  ],

  objectifs: [
    {
      icon: '🎓',
      title: 'Renforcement des compétences',
      desc: 'Renforcer les compétences des leaders paysans, techniciens et animateurs en techniques agroécologiques appliquées directement sur le terrain.',
    },
    {
      icon: '🌍',
      title: 'Diffusion des pratiques',
      desc: 'Diffuser des pratiques agricoles respectueuses de l\'environnement et reproductibles dans chaque pays membre du réseau NSS.',
    },
    {
      icon: '📈',
      title: 'Amélioration des rendements',
      desc: 'Améliorer les rendements agricoles et la viabilité économique des exploitations des femmes et hommes ruraux participants.',
    },
    {
      icon: '🌾',
      title: 'Souveraineté alimentaire',
      desc: 'Consolider la souveraineté alimentaire des communautés rurales à travers des pratiques agroécologiques paysannes durables.',
    },
  ],

  stats: [
    { val: '~60', label: 'Participants' },
    { val: '8', label: 'Pays représentés' },
    { val: '7', label: 'Jours de formation' },
    { val: '4', label: 'Organisations' },
  ],

  pays: [
    { flag: '🇧🇫', code: 'BF', name: 'Burkina Faso' },
    { flag: '🇨🇮', code: 'CI', name: 'Côte d\'Ivoire' },
    { flag: '🇬🇲', code: 'GM', name: 'Gambie' },
    { flag: '🇬🇭', code: 'GH', name: 'Ghana' },
    { flag: '🇬🇳', code: 'GN', name: 'Guinée' },
    { flag: '🇬🇼', code: 'GW', name: 'Guinée-Bissau' },
    { flag: '🇲🇱', code: 'ML', name: 'Mali' },
    { flag: '🇸🇳', code: 'SN', name: 'Sénégal' },
  ],

  intervenants: [
    { name: 'Mariama Sonko',           role: 'Présidente du mouvement NSS' },
    { name: 'Jean Michel Waly Sène',   role: 'Secrétaire exécutif, Enda Pronat' },
    { name: 'Monique Noumo Konan',     role: 'Coordinatrice NSS, Côte d\'Ivoire' },
    { name: 'Thérèse KY',             role: 'Représentante FENOP, Burkina Faso' },
    { name: 'Catherine Midjour Soulama', role: 'Représentante FENOP, Burkina Faso' },
  ],

  citations: [
    {
      text: 'Dans l\'agroécologie, nous recherchons la souveraineté alimentaire. Et pour être souverain, il faut arriver à avoir le droit de produire ce que vous voulez manger.',
      author: 'Mariama Sonko',
      role: 'Présidente NSS',
    },
    {
      text: 'L\'agroécologie, ce n\'est pas de l\'anarchie — c\'est quelque chose de bien ordonné.',
      author: 'Monique Noumo Konan',
      role: 'Coordinatrice NSS Côte d\'Ivoire',
    },
    {
      text: 'Chaque technique apprise ici peut transformer nos exploitations.',
      author: 'Aissatou',
      role: 'Maraîchère participante',
    },
  ],

  distinctions: [
    { name: 'Mamadou Goîta',         role: 'Coordinateur général NSS' },
    { name: 'Jean Michel Waly Sène', role: 'Secrétaire exécutif, Enda Pronat' },
  ],
  distinctionsTotal: 6,

  partenaires: ['Fahamu Africa', 'FENOP', 'Enda Pronat', 'AJAC Lukaal'],

  prevEdition: {
    label: '3e édition 2024',
    href: '/programmes/cifap/3e-edition-2024',
  },
}
