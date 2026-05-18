export interface CifapProgrammeItem {
  icone: string
  titre: string
  description: string
}

export interface CifapTemoignage {
  texte: string
  auteur: string
  role: string
}

export interface CifapIntervenant {
  initiales: string
  nom: string
  role: string
}

export interface CifapPartenaire {
  nom: string
  description: string
}

export interface CifapEdition {
  annee: number
  numero: number
  slug: string
  theme: string
  hero_image?: string
  titre_ligne1: string
  titre_ligne2: string
  statut: 'passe' | 'en-cours' | 'a-venir'
  dates: string
  dates_raw: { debut: string; fin: string }
  lieu: string
  participants: string
  pays_representes: number
  jours_formation: number
  pages_documentation?: number
  pays_liste: string[]
  presentation: string
  programme_technique: CifapProgrammeItem[]
  objectifs: string[]
  temoignages: CifapTemoignage[]
  intervenants: CifapIntervenant[]
  partenaires: CifapPartenaire[]
  galerie_count?: number
}

export const CIFAP_EDITIONS: CifapEdition[] = [
  {
    annee: 2022,
    numero: 1,
    slug: '1ere-edition-2022',
    theme: 'Bio-intrants',
    hero_image: '/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg',
    titre_ligne1: 'Bio-intrants —',
    titre_ligne2: 'biofertilisants et biopesticides',
    statut: 'passe',
    dates: '11–19 septembre 2022',
    dates_raw: { debut: '2022-09-11', fin: '2022-09-19' },
    lieu: 'Niaguis, Sénégal',
    participants: '~40',
    pays_representes: 8,
    jours_formation: 7,
    pages_documentation: 48,
    pays_liste: ['Burkina Faso', "Côte d'Ivoire", 'Mali', 'Guinée', 'Ghana', 'Sénégal', 'Niger', 'Bénin'],
    presentation: 'Première édition du CIFAP axée sur la revitalisation des terres et les bio-intrants. Les zones d\'intervention du mouvement NSS utilisent majoritairement des semences hybrides importées, créant une dépendance coûteuse pour les producteurs paysans. Cette première édition a posé les bases d\'une agriculture paysanne autonome en maîtrisant la production d\'intrants biologiques locaux.',
    programme_technique: [
      { icone: 'Sprout', titre: 'Biofertilisants', description: 'Techniques de production et d\'application des biofertilisants adaptées aux sols locaux.' },
      { icone: 'ShieldCheck', titre: 'Biopesticides', description: 'Méthodes naturelles de lutte contre les ravageurs sans recours aux produits chimiques de synthèse.' },
    ],
    objectifs: [
      'Réduire la dépendance aux intrants chimiques importés coûteux pour les producteurs paysans.',
      'Former les leaders paysans aux techniques de production d\'intrants biologiques locaux.',
      'Développer des pratiques agroécologiques adaptées aux terroirs d\'Afrique de l\'Ouest.',
    ],
    temoignages: [
      {
        texte: 'C\'est la promotion de la pratique agroécologique qui m\'a poussé à suivre ce processus. La première édition a été une réflexion sur comment vivre avec sa terre et la paysannerie.',
        auteur: 'Mariama Sonko',
        role: 'Présidente du mouvement NSS',
      },
    ],
    intervenants: [
      { initiales: 'MS', nom: 'Mariama Sonko', role: 'Présidente NSS' },
      { initiales: 'MD', nom: 'Mamadou Danfaha', role: 'Coordinateur NSS / Fahamu Africa' },
    ],
    partenaires: [
      { nom: 'NSS', description: 'Nous Sommes la Solution' },
      { nom: 'Fahamu Africa', description: 'Partenaire de mise en œuvre' },
    ],
    galerie_count: 36,
  },
  {
    annee: 2023,
    numero: 2,
    slug: '2e-edition-2023',
    theme: 'Semences paysannes',
    hero_image: '/images/actualites/autonomisation-semenciere-souverainete-alimentaire-2023.jpg',
    titre_ligne1: 'Production des semences',
    titre_ligne2: 'horticoles paysannes',
    statut: 'passe',
    dates: '10–17 septembre 2023',
    dates_raw: { debut: '2023-09-10', fin: '2023-09-17' },
    lieu: 'Centre Karonghen Wati Naning, Niaguis, Sénégal',
    participants: '~40',
    pays_representes: 8,
    jours_formation: 7,
    pages_documentation: 68,
    pays_liste: ['Burkina Faso', "Côte d'Ivoire", 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Mali', 'Sénégal'],
    presentation: 'Après une première édition axée sur la revitalisation des terres et les bio-intrants, le CIFAP 2023 s\'est attaqué à la problématique semencière. Les zones d\'intervention du mouvement NSS utilisent majoritairement des semences hybrides importées, non reproductibles, créant une dépendance coûteuse. Cette deuxième édition a réuni une quarantaine de leaders paysans, techniciens agricoles et animateurs ruraux issus de 8 pays d\'Afrique de l\'Ouest pour produire des semences locales reproductibles.',
    programme_technique: [
      { icone: 'Sprout', titre: 'Production de semences', description: 'Techniques de sélection et multiplication des semences reproductibles adaptées aux conditions pédoclimatiques locales.' },
      { icone: 'Archive', titre: 'Conservation des semences', description: 'Méthodes de stockage naturel : séchage, conditionnement et température pour préserver la viabilité long terme.' },
      { icone: 'FlaskConical', titre: 'Sélection variétale paysanne', description: 'Identification des variétés les plus adaptées aux conditions locales et résistantes aux stress climatiques.' },
      { icone: 'ShieldCheck', titre: 'Protection des semences', description: 'Techniques naturelles de protection contre les nuisibles sans recours aux produits chimiques de synthèse.' },
      { icone: 'Scissors', titre: 'Techniques de collecte', description: 'Méthodes de récolte optimales pour garantir qualité semencière, maturité physiologique et taux de germination.' },
      { icone: 'RefreshCw', titre: 'Autonomie semencière', description: 'Processus complet pour produire ses propres semences, réduire les achats et renforcer les circuits locaux.' },
    ],
    objectifs: [
      'Promouvoir l\'autonomie semencière des communautés paysannes en développant la capacité collective à produire et conserver leurs propres semences.',
      'Renforcer les capacités des leaders paysans et techniciens sur les techniques de production, sélection et conservation des semences reproductibles locales.',
      'Susciter l\'implantation d\'un centre agroécologique NSS dans chaque pays membre du réseau.',
      'Développer le savoir-faire agroécologique collectif du réseau NSS à travers des échanges pratiques entre paysans de 8 pays.',
      'Favoriser la diversité des cultures et des semences pour préserver la richesse variétale locale et renforcer la résilience alimentaire.',
    ],
    temoignages: [
      {
        texte: 'C\'est la promotion de la pratique agroécologique qui nous a poussés à suivre ce processus. La présente édition porte sur les semences — comment les produire nous-mêmes pour notre souveraineté.',
        auteur: 'Mariama Sonko',
        role: 'Présidente du mouvement NSS',
      },
      {
        texte: 'Il est temps de renforcer la capacité des acteurs sur comment produire nos propres semences, pour aller vers cette autosuffisance et cette souveraineté semencières.',
        auteur: 'Mamadou Danfaha',
        role: 'Coordinateur NSS / Fahamu Africa',
      },
      {
        texte: 'Si vous n\'avez pas votre propre semence, vous ne pouvez pas cultiver à temps voulu et faire une diversité.',
        auteur: 'Mamadou Danfaha',
        role: 'Coordinateur NSS / Fahamu Africa',
      },
    ],
    intervenants: [
      { initiales: 'MS', nom: 'Mariama Sonko', role: 'Présidente NSS' },
      { initiales: 'MD', nom: 'Mamadou Danfaha', role: 'Coordinateur NSS / Fahamu Africa' },
      { initiales: 'ES', nom: 'Expert semences', role: 'Spécialiste semences, Burkina Faso' },
    ],
    partenaires: [
      { nom: 'NSS', description: 'Nous Sommes la Solution' },
      { nom: 'Fahamu Africa', description: 'Partenaire de mise en œuvre' },
    ],
    galerie_count: 36,
  },
  {
    annee: 2024,
    numero: 3,
    slug: '3e-edition-2024',
    theme: 'Bio-protecteurs',
    hero_image: '/images/actualites/nss-cifap-3e-edition-bio-protecteurs.jpg',
    titre_ligne1: 'Bio-protecteurs en',
    titre_ligne2: 'agroécologie paysanne',
    statut: 'passe',
    dates: '1–7 septembre 2024',
    dates_raw: { debut: '2024-09-01', fin: '2024-09-07' },
    lieu: 'Centre Karonghen Wati Naning, Niaguis, Sénégal',
    participants: '~50',
    pays_representes: 8,
    jours_formation: 7,
    pages_documentation: 68,
    pays_liste: ['Burkina Faso', "Côte d'Ivoire", 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Mali', 'Sénégal'],
    presentation: 'Troisième étape du processus progressif CIFAP — 2022 : bio-intrants, 2023 : semences reproductives, 2024 : bio-protecteurs. Cette édition a réuni une cinquantaine de leaders paysans, techniciens agricoles et animateurs ruraux issus de 8 pays d\'Afrique de l\'Ouest. Les pesticides chimiques représentent un danger majeur pour la santé humaine et l\'environnement ; ce camp a renforcé l\'autonomie des membres en bio-protecteurs naturels produits localement.',
    programme_technique: [
      { icone: 'ShieldAlert', titre: 'Danger des pesticides chimiques', description: 'Sensibilisation aux risques sanitaires et environnementaux des produits chimiques de synthèse.' },
      { icone: 'Leaf', titre: 'Bio-protecteurs et qualité agricole', description: 'Apport des bio-protecteurs naturels dans la qualité des productions : réduction des résidus, meilleure valeur nutritive.' },
      { icone: 'FlaskConical', titre: 'Production de bio-protecteurs', description: 'Techniques de fabrication de bio-pesticides et bio-fongicides à base de matières premières végétales disponibles localement.' },
      { icone: 'Wheat', titre: 'Utilisation contre déprédateurs', description: 'Méthodes d\'application et doses appropriées pour protéger efficacement les cultures des ravageurs et maladies fongiques.' },
      { icone: 'RefreshCw', titre: 'Pratiques agroécologiques complémentaires', description: 'Associations culturales, haies vives, paillage — pour une agriculture productive, durable et résiliente.' },
      { icone: 'Globe', titre: 'Échanges et sensibilisation', description: 'Partage entre participants de 8 pays des valeurs ajoutées et résultats concrets de la pratique agroécologique paysanne.' },
    ],
    objectifs: [
      'Renforcer l\'autonomie des membres du réseau NSS en bio-protecteurs naturels produits localement.',
      'Sensibiliser aux dangers des pesticides chimiques et promouvoir des alternatives saines et accessibles.',
      'Développer les capacités pratiques de fabrication de bio-pesticides et bio-fongicides à partir de matières premières locales.',
      'Consolider les acquis des deux premières éditions dans une approche agroécologique intégrée.',
    ],
    temoignages: [
      {
        texte: 'Les bio-protecteurs que nous avons appris à fabriquer ici sont à la fois efficaces, accessibles et respectueux de notre environnement. C\'est une révolution pour nos exploitations.',
        auteur: 'Mariama Sonko',
        role: 'Présidente du mouvement NSS',
      },
    ],
    intervenants: [
      { initiales: 'MS', nom: 'Mariama Sonko', role: 'Présidente NSS' },
      { initiales: 'MD', nom: 'Mamadou Danfaha', role: 'Coordinateur NSS / Fahamu Africa' },
    ],
    partenaires: [
      { nom: 'NSS', description: 'Nous Sommes la Solution' },
      { nom: 'Fahamu Africa', description: 'Partenaire de mise en œuvre' },
    ],
    galerie_count: 24,
  },
  {
    annee: 2025,
    numero: 4,
    slug: '4e-edition-2025',
    theme: 'Conduite des cultures horticoles',
    hero_image: '/images/actualites/nss-cifap-2025.jpg',
    titre_ligne1: 'Cultures horticoles en',
    titre_ligne2: 'agroécologie paysanne',
    statut: 'passe',
    dates: '14–21 septembre 2025',
    dates_raw: { debut: '2025-09-14', fin: '2025-09-21' },
    lieu: 'Centre Karonghen Wati Naning, Niaguis, Sénégal',
    participants: '~60',
    pays_representes: 8,
    jours_formation: 7,
    pages_documentation: 68,
    pays_liste: ['Burkina Faso', "Côte d'Ivoire", 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Mali', 'Sénégal'],
    presentation: 'La quatrième édition du CIFAP s\'est tenue du 14 au 21 septembre 2025 au Centre Karonghen Wati Naning de Niaguis. Cette semaine intensive a réuni une soixantaine de leaders paysans, techniciens agricoles et animateurs ruraux issus de 8 pays d\'Afrique de l\'Ouest autour des techniques pratiques de conduite des cultures horticoles en agroécologie paysanne. Chaque journée combinait apports théoriques et ateliers pratiques directement dans les champs du Centre.',
    programme_technique: [
      { icone: 'Layers', titre: 'Préparation et amendement des sols', description: 'Techniques de préparation mécanique et biologique des sols pour optimiser la structure, la fertilité et la rétention d\'eau.' },
      { icone: 'Sprout', titre: 'Pépinière et transplantation', description: 'Maîtrise des étapes clés : substrats, densité, repiquage et conditions d\'acclimatation des jeunes plants.' },
      { icone: 'Droplets', titre: 'Irrigation et gestion de l\'eau', description: 'Systèmes d\'irrigation adaptés aux ressources locales — goutte-à-goutte, aspersion, irrigation de surface — et économie d\'eau.' },
      { icone: 'ShieldCheck', titre: 'Protection agroécologique des cultures', description: 'Lutte intégrée : bio-protecteurs, associations culturales et pratiques préventives contre les ravageurs et maladies.' },
      { icone: 'Scissors', titre: 'Taille et conduite des plants', description: 'Techniques d\'entretien, taille et palissage adaptés à chaque espèce horticole pour maximiser la productivité.' },
      { icone: 'Package', titre: 'Récolte, conservation et valorisation', description: 'Pratiques post-récolte pour préserver la qualité des produits et créer de la valeur ajoutée au sein des communautés paysannes.' },
    ],
    objectifs: [
      'Maîtriser les techniques pratiques de conduite des cultures horticoles en agroécologie paysanne, de la préparation du sol à la récolte.',
      'Renforcer les capacités des leaders paysans en gestion écologique de l\'eau et protection naturelle des cultures.',
      'Consolider un réseau panafricain de référence en agroécologie horticole parmi les 8 pays membres.',
      'Produire une documentation technique complète et partageable pour l\'ensemble du réseau NSS.',
    ],
    temoignages: [
      {
        texte: 'Chaque édition du CIFAP nous rapproche un peu plus de notre souveraineté alimentaire. Ces techniques, nous pouvons les reproduire chez nous dès notre retour.',
        auteur: 'Mariama Sonko',
        role: 'Présidente du mouvement NSS',
      },
      {
        texte: 'L\'échange entre paysans de 8 pays est en lui-même une richesse inestimable. Nous apprenons les uns des autres, et c\'est ça la force du réseau NSS.',
        auteur: 'Mamadou Danfaha',
        role: 'Coordinateur NSS / Fahamu Africa',
      },
    ],
    intervenants: [
      { initiales: 'MS', nom: 'Mariama Sonko', role: 'Présidente NSS' },
      { initiales: 'MD', nom: 'Mamadou Danfaha', role: 'Coordinateur NSS / Fahamu Africa' },
      { initiales: 'AJ', nom: 'AJAC Lukaal', role: 'Organisation d\'accueil, Sénégal' },
    ],
    partenaires: [
      { nom: 'NSS', description: 'Nous Sommes la Solution' },
      { nom: 'Fahamu Africa', description: 'Partenaire de mise en œuvre' },
      { nom: 'AJAC Lukaal', description: 'Organisation hôte au Sénégal' },
    ],
    galerie_count: 79,
  },
]

export const getEditionBySlug = (slug: string): CifapEdition | undefined =>
  CIFAP_EDITIONS.find((e) => e.slug === slug)

export const getEditionsSorted = (): CifapEdition[] =>
  [...CIFAP_EDITIONS].sort((a, b) => a.annee - b.annee)
