export interface ArticleStat {
  label: string;
  value: string;
}

export interface ArticleGalleryItem {
  url: string;
  caption: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string | null;
  publishedAt: string;
  category: string;
  author?: string;
  tags?: string[];
  stats?: ArticleStat[];
  gallery?: ArticleGalleryItem[];
  cloudinaryFolderId?: string;
  cloudinaryGalleryCaption?: string;
  cloudinaryImages?: string[];
  canonical?: string;
  robots?: string;
  sourceName?: string;
  sourceUrl?: string;
  videoUrl?: string;
  coverCaption?: string;
  simpleImages?: string[];
}

export const ARTICLES: Article[] = [

  // ── Niaguis — plaidoyer politique agroécologie ────────────────────────────
  {
    id: "25",
    slug: "niaguis-femmes-rurales-agroecologie-paysanne-plaidoyer-ouest-africain",
    title: "À Niaguis, soixante voix rurales exigent que l'agroécologie devienne loi",
    excerpt: "Des femmes rurales de 8 pays d'Afrique de l'Ouest réunies à Niaguis plaident pour faire de l'agroécologie paysanne le socle des politiques agricoles nationales.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775575693/femmes_rurales_d_Afrique_de_l_Ouest_plaident_pour_l_agro%C3%A9cologie_paysanne_6_ithmd3.webp",
    publishedAt: "2025-09-17",
    category: "Plaidoyer",
    author: "NSS — Nous Sommes la Solution",
    tags: ["Agroécologie paysanne", "Femmes rurales", "Souveraineté alimentaire", "Niaguis", "Afrique de l'Ouest", "CIFAP", "Savoirs endogènes", "Politiques agricoles", "Horticulture"],
    canonical: "https://wasafrica.org/fr/ressources/actualites/niaguis-femmes-rurales-agroecologie-paysanne-plaidoyer-ouest-africain",
    robots: "index, follow",
    videoUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775599193/Cifap_2025_%C3%A0_Niaguis_cbkidu.mp4",
    stats: [
      { label: "Participantes", value: "60+" },
      { label: "Pays représentés", value: "8" },
      { label: "Édition du CIFAP", value: "2e" },
    ],
    content: `Peut-on transformer un village de Ziguinchor en épicentre d'une revendication politique continentale ? C'est exactement ce qui s'est passé à Niaguis le 17 septembre 2025. Alors que les modèles agricoles industriels continuent de fragiliser les économies rurales du Sahel à la côte atlantique, une soixantaine de femmes venues de huit pays ont choisi ce coin de Casamance pour dire, ensemble, que l'alternative existe — et qu'elle porte un nom : l'agroécologie paysanne. Cette deuxième édition du CIFAP ne s'est pas contentée de plaider : elle a formé, transmis, démontré.

## Niaguis comme acte politique

Choisir Niaguis, ce n'est pas un hasard de logistique. C'est ancrer le débat là où il a du sens : dans les terres, auprès de celles qui les cultivent. En lançant un appel direct aux gouvernements pour que l'agroécologie paysanne devienne le socle des politiques agricoles nationales, les participantes du CIFAP ont franchi un seuil. Elles ne témoignent plus seulement de leurs pratiques — elles légifèrent par la parole collective. Exiger que les savoirs endogènes et le respect de l'environnement soient reconnus comme fondements de la souveraineté alimentaire, c'est refuser que cette souveraineté reste un idéal de discours pour en faire une obligation de gouvernance.

> Thème de l'édition : Techniques pratiques de conduite des cultures horticoles en agroécologie paysanne

**Modules de formation :** Préparation des sols · Pépinières & repiquage · Traitements naturels · Riz pluvial · Entretien des cultures · Savoirs endogènes

[[VIDEO]]

## Huit pays, une même exigence

Du **Burkina Faso** à la **Gambie**, du **Ghana** à la **Guinée-Bissau**, de la **Guinée Conakry** à la **Côte d'Ivoire**, du **Mali** au **Sénégal** : la diversité géographique de cette assemblée n'est pas un chiffre pour impressionner. Elle dit quelque chose de précis sur la nature du mouvement. Les réalités climatiques, foncières et économiques de ces huit pays divergent profondément — et pourtant, soixante participantes ont convergé vers le même diagnostic et la même prescription. Ce consensus transfrontalier entre femmes rurales, construit depuis le terrain et non depuis les capitales, est lui-même une forme de plaidoyer : il démontre que l'agroécologie paysanne n'est pas une solution locale parmi d'autres, mais une réponse structurelle à une crise qui ne connaît pas de frontières.

## Ce que Niaguis dit du mouvement

Le CIFAP n'est pas une conférence de plus. C'est un outil de construction d'un rapport de force — patient, méthodique, enraciné. Réunir chaque année les mêmes types d'actrices, dans le même lieu, avec une ambition qui monte en intensité, c'est une stratégie de capitalisation : chaque édition consolide les liens, affine les positions, et renforce la légitimité collective de celles qui parlent. Que l'appel de Niaguis vise explicitement les gouvernements marque une étape de maturité : le mouvement ne cherche plus seulement à convaincre, il interpelle le pouvoir. L'autonomie des communautés rurales n'est plus présentée comme un projet à soutenir, mais comme un droit à garantir.

Dans les jours qui viennent, les délégations repartent dans leurs pays respectifs — avec, dans leurs bagages, des formations, des engagements et un texte commun qu'il faudra maintenant faire entendre jusqu'aux ministères.`,
  },

  // ── FENOP — CIFAP 2025 Niaguis, leaders burkinabè ────────────────────────
  {
    id: "27",
    slug: "cifap-2025-fenop-niaguis-senegal-formation-agroecologie",
    title: "À Niaguis, deux leaders burkinabè plongent au cœur de l'agroécologie paysanne",
    excerpt: "Du 14 au 21 septembre 2025, la FENOP a envoyé deux de ses représentantes au CIFAP à Niaguis — un geste fort qui dit beaucoup sur la stratégie du mouvement paysan burkinabè face aux défis de la souveraineté alimentaire.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776001698/Nous_sommes_la_solution_-_Fenop_1_r9gqhc.jpg",
    publishedAt: "2025-09-14",
    category: "Formation",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/cifap-2025-fenop-niaguis-senegal-formation-agroecologie",
    robots: "index, follow",
    tags: ["CIFAP 2025", "FENOP", "Agroécologie paysanne", "Femmes rurales", "Niaguis", "Sénégal", "Horticulture", "NSS", "Formation", "Burkina Faso"],
    cloudinaryGalleryCaption: "CIFAP 2025 à Niaguis — FENOP & mouvement NSS",
    cloudinaryImages: [
      "Nous_sommes_la_solution_-_Fenop_1_r9gqhc",
      "Nous_sommes_la_solution_-_Fenop_2_on3m7f",
      "Nous_sommes_la_solution_-_Fenop_3_tiaibt",
      "Nous_sommes_la_solution_-_Fenop_4_d0vljw",
      "Nous_sommes_la_solution_-_Fenop_5_nw7oye",
      "Nous_sommes_la_solution_-_Fenop_6_ujuxsu",
      "Nous_sommes_la_solution_-_Fenop_7_ent93g",
    ],
    content: `Former des leaders paysannes ne suffit pas — encore faut-il leur donner les outils concrets pour transformer leurs pratiques sur le terrain. C'est précisément le pari du CIFAP, ce camp international qui réunit chaque année des femmes rurales d'Afrique de l'Ouest autour de savoirs techniques ancrés dans la réalité du sol et des saisons. Du 14 au 21 septembre 2025, la FENOP a envoyé deux de ses représentantes à Niaguis, au Sénégal — un geste fort qui dit beaucoup sur la stratégie du mouvement paysan burkinabè.

## Un camp qui fait de la technique un acte politique

L'agroécologie paysanne n'est pas qu'une méthode de culture : c'est une posture vis-à-vis du sol, des semences et de l'autonomie alimentaire. En choisissant de former ses cadres aux techniques de conduite des cultures horticoles selon les principes agroécologiques, la FENOP affirme que le changement de pratiques agricoles est indissociable du changement de rapport au pouvoir.

Organisé par Fahamu Africa et le mouvement NSS — Nous Sommes la Solution — le CIFAP 2025 n'est pas une formation ordinaire : c'est un espace où la transmission du savoir entre femmes rurales devient elle-même un acte de résistance face aux modèles agricoles industriels qui fragilisent les économies familiales sahéliennes.

[[GALLERY]]

## Thérèse KY et Catherine Midjour Soulama, visages d'un leadership qui se construit

Madame Thérèse KY et Madame Catherine MIDJOUR SOULAMA ne représentent pas seulement la FENOP à Niaguis — elles incarnent une génération de leaders paysannes burkinabè qui refusent de séparer la formation technique de l'engagement politique.

Participer au CIFAP, c'est aussi rejoindre un réseau continental de femmes rurales qui échangent, comparent et adaptent leurs pratiques d'un pays à l'autre. Cette circulation des savoirs entre le Burkina Faso, le Sénégal et les autres nations représentées au camp est précisément ce qui fait la force du modèle NSS : **l'intelligence collective plutôt que l'expertise descendante.**

## Ce que cette participation révèle de la stratégie FENOP

En s'associant au CIFAP dans le cadre du mouvement NSS, la FENOP inscrit son action dans une dynamique régionale qui dépasse les frontières nationales. Former deux leaders, c'est former des multiplicatrices : à leur retour au Burkina Faso, Thérèse KY et Catherine Midjour Soulama porteront avec elles non seulement des techniques horticoles adaptées à l'agroécologie, mais aussi la mémoire d'une semaine vécue avec des femmes paysannes de tout le continent.

> C'est ce modèle de leadership enraciné — formé sur le terrain, nourri par l'échange, orienté vers les plus vulnérables — que le mouvement NSS cherche à généraliser à travers ses 14 pays d'action.

Les enseignements du CIFAP 2025 seront au cœur des prochaines rencontres de la FENOP — suivez notre blog pour le retour terrain des deux participantes dès leur retour au Burkina Faso.`,
  },

  // ── Seneweb — Agroécologie & changement de paradigme, Niaguis ───────────
  {
    id: "26",
    slug: "agroecologie-changement-paradigme-souverainete-alimentaire-niaguis-seneweb",
    title: "Agroécologie et changement de paradigme pour une souveraineté alimentaire : À Niaguis, les organisations paysannes de l'Afrique de l'Ouest portent le plaidoyer",
    excerpt: "Après une immersion d'une semaine au centre agroécologique de Niaguis, des organisations paysannes de 8 pays d'Afrique de l'Ouest rentrent renforcées pour promouvoir l'agroécologie et porter le plaidoyer communautaire auprès de leurs gouvernements.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776000229/Agro%C3%A9cologie_et_changement_de_paradigme_pour_une_souverainet%C3%A9_alimentaire_lkwtd4.jpg",
    publishedAt: "2025-09-23",
    category: "Presse",
    author: "Max Euclide KANFANY",
    sourceName: "Seneweb Ziguinchor",
    tags: ["Agroécologie", "Souveraineté alimentaire", "CIFAP", "Niaguis", "Femmes rurales", "Afrique de l'Ouest", "NSS", "Plaidoyer", "Formation"],
    coverCaption: "Agroécologie et changement de paradigme pour une souveraineté alimentaire : À Niaguis, les organisations paysannes de l'Afrique de l'Ouest portent le plaidoyer — © Seneweb Ziguinchor / Max Euclide KANFANY",
    simpleImages: [
      "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776000230/Agro%C3%A9cologie_et_changement_de_paradigme_pour_une_souverainet%C3%A9_alimentaire_2_vqgpk6.jpg",
      "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776000229/Agro%C3%A9cologie_et_changement_de_paradigme_pour_une_souverainet%C3%A9_alimentaire_1_f0kuc2.jpg",
      "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776000228/Agro%C3%A9cologie_et_changement_de_paradigme_pour_une_souverainet%C3%A9_alimentaire_4_tmo5iz.jpg",
    ],
    videoUrl: "/Videos/Agro%C3%A9cologie%20et%20changement%20de%20paradigme%20pour%20une%20souverainet%C3%A9%20alimentaire%20-%20%C3%80%20Niaguis.mp4",
    canonical: "https://www.seneweb.com/fr/news/Agriculture/agroecologie-et-changement-de-paradigme-pour-une-souverainete-alimentaire-a-niaguis-les-organisations-paysannes-de-lafrique-de-louest-portent-le-plaidoyer_n_468870.html",
    content: `Après une immersion d'une semaine au centre agroécologique de Niaguis, les organisations paysannes de femmes du Burkina Faso, de la Gambie, du Ghana, de la Guinée-Bissau, de la Guinée, de la Côte d'Ivoire, du Mali et du Sénégal rentrent renforcées et mieux outillées pour aider leurs communautés respectives dans la promotion de l'agroécologie et les sensibiliser sur la nécessité de rompre avec l'agriculture intensive. À charge pour ces dernières de porter le plaidoyer communautaire auprès de leur gouvernement pour accompagner la pratique agroécologique, seule voie, à leur avis, pour arriver à la souveraineté alimentaire, avec une alimentation plus saine.

Ce camp a regroupé une centaine de participants, novices et habitués, sur la thématique « Les techniques de conduite des cultures horticoles en agroécologie ».

## Fatou Bintou Diop : une formation très bénéfique

Fatou Bintou Diop, présidente de l'Union des groupements paysans de Mékhé à Tivaouane et trésorière de l'organisation Nous sommes la solution, affirme que ce camp a été très bénéfique. Selon elle, l'agroécologie peut aider à booster la production au Sénégal.

> Nous avons les écartements, le temps de pépinières, les pépinières avec les alvéoles, la préparation du sol, comment on teste le sol. Nous avons aussi échangé beaucoup de choses. C'est une formation très intéressante.

[[PHOTO_1]]

## Catherine Soulama : la culture hors sol pour les déplacés du Burkina Faso

Une pratique saine sans utilisation d'engrais ni de pesticides et qui, au Burkina Faso, commence à faire des effets avec le régime de la transition, selon Catherine Soulama, membre de la Fédération nationale des organisations paysannes. Pour sa première expérience à ce camp international en agroécologie, elle dit rentrer avec une expérience riche en apprentissages de nouvelles pratiques.

> Lors des formations qu'on a reçues ici, on a fait la culture hors sol. Quand je prends le cas spécifique de mon pays, présentement nous sommes confrontés à un problème d'insécurité. On a le déplacement massif des populations vers la ville. Cette technique hors sol peut porter un plus à ma communauté, parce que je pourrais aider les déplacés internes et même la population à assimiler ces méthodes.

**Au Burkina Faso**, les autorités sont en train de valoriser l'agroécologie au niveau des écoles et au niveau des déplacés internes. Avec la culture hors sol apprise lors du camp, il devient possible d'accompagner encore davantage les populations déplacées vers une alimentation saine.

[[PHOTO_2]]

## Monique Noumo Konan : rendre l'agroécologie plus formelle

Monique Noumo Konan, coordonnatrice de Nous sommes la solution en Côte d'Ivoire, une habituée du camp, dit avoir passé près d'une semaine à apprendre les bonnes pratiques de l'agroécologie.

> Ce que j'ai beaucoup appris cette année, c'est de rendre un peu plus formelle la chose de l'agroécologie — pour dire que l'agroécologie, ce n'est pas de l'anarchie, ce n'est pas quelque chose de désordonné. Et cette année, nous avons appris à diagnostiquer la santé d'un sol. Ensuite ce qu'il faut apporter au sol.

Monique Noumo Konan demande aux femmes du Sénégal de s'approprier l'agroécologie. Elle exhorte les autorités africaines à accompagner la promotion de cette agriculture respectueuse de l'humain, de la biodiversité, du climat et de la santé.

> C'est une agriculture qui ne va pas nous causer de problèmes et nous permet d'atteindre la souveraineté alimentaire, dans la bonne santé et dans la protection de l'environnement et du climat.

[[VIDEO]]

## Un camp qui grandit d'année en année

D'une trentaine de participants la première année, ce camp compte aujourd'hui une centaine d'adhérentes. Mariama Sonko, présidente du mouvement panafricain Nous sommes la solution, se réjouit de cet élan croissant.

> Il y a un engagement des acteurs autour de la promotion de l'agroécologie. Parce que la première année, on a eu à convier une trentaine de personnes. Mais au fur et à mesure qu'on avance, les demandes sont extrêmes pour participer à ce camp international parce que les résultats sont visibles. Au niveau des pays, les gens constatent qu'il y a vraiment une évolution au niveau des différentes pratiques.

Une raison suffisante pour la présidente d'être rassurée sur la pertinence de ce type d'agriculture qui intéresse de plus en plus de jeunes, au-delà des femmes.

[[PHOTO_3]]

> Dans l'agroécologie, nous recherchons la souveraineté alimentaire. Et pour être souverain, il faut arriver à avoir le droit de produire ce que vous voulez manger et aussi d'avoir la possibilité de le faire.`,
  },

  // ── Articles existants ────────────────────────────────────────────────────
  {
    id: "7",
    slug: "cifap-2025-derniere-journee-techniques-horticoles-agroecologie-afrique-ouest",
    title: "Les femmes de l'Afrique de l'Ouest à l'école des techniques horticoles en agroécologie – Retour sur le CIFAP 2025",
    excerpt: "Retour sur la dernière journée du CIFAP 2025 à Niaguis : près de 70 leaders et techniciens de 8 pays d'Afrique de l'Ouest formés aux techniques de conduite des cultures horticoles en agroécologie paysanne.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775487713/Hero_-_Cifap_ixy5hj.jpg",
    publishedAt: "2025-09-21",
    category: "Formation",
    author: "Babacar Sene, Journal Agropasteur (Source NSS)",
    tags: ["CIFAP 2025", "Agroécologie paysanne", "NSS", "Fahamu Africa", "Horticulture", "Formation", "Femmes rurales", "Afrique de l'Ouest", "Niaguis"],
    stats: [
      { label: "Édition", value: "4e" },
      { label: "Participants", value: "~70" },
      { label: "Pays", value: "8" },
    ],
    cloudinaryGalleryCaption: "Formation agroécologique — CIFAP 2025, Niaguis",
    cloudinaryImages: [
      "Hero_-_Cifap_ixy5hj",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_1_em1x4v",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_1_vyqxle",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_2_dzj8gn",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_2_ob9fzo",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_3_ohwj2d",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_3_uefcl2",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_4_czgqw4",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_4_qpjfrt",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_5_bi90kl",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_5_coymw9",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_6_fnxpuk",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_6_tpdulh",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_7_bg2fri",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_7_rtfy3j",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_8_n1gjzg",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_8_pbdegj",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_9_o2gube",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_9_pfepwa",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_10_eq3rgr",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_10_v1y6gn",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_11_z8yykx",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_11_zxetui",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_12_auvyj7",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_12_tg6zty",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_13_su69a0",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_14_gyzuth",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_15_cvowiq",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_16_pkawgs",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_17_wcyqxo",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_18_cawwit",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_19_djes6c",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_20_dttkti",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_21_ztatq0",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_22_hara73",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_23_n64fiu",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_24_rbvla6",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_25_acdal5",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_26_sag9on",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_27_xil5tl",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_28_kliozy",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_29_fdjvjb",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_30_ptmmy2",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_31_suew69",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_32_cuxxkj",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_33_nzxzeh",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_34_wqvyhd",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_35_hsot5g",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_36_z3kqw0",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_37_i77f8h",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_38_cgfidg",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_39_h8adek",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_40_hvk6fx",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_41_opeqrs",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_42_sngjsw",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_43_pes2op",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_44_yxdijt",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_45_uzj5pk",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_46_a9c03r",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_47_bl9eaw",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_48_orwv1w",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_49_vzoyqs",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_50_iarlk0",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_51_f5afey",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_52_uxi0xe",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_53_x2p7lt",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_54_rvmzv7",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_55_rnhqv5",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_56_cvqh9x",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_57_p2gjwr",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_58_sxrkle",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_59_a8vtnh",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_60_pmyqjl",
      "NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_61_qltq6o",
    ],
    content: `## Lancement de la quatrième édition

Le lundi 15 septembre marque le lancement de la quatrième édition 2025 du Camp International de Formation en Agroécologie Paysanne (CIFAP) à Niaguis, sur le thème **« Techniques de conduite des cultures horticoles en agroécologie »**. Organisé par « Nous Sommes la Solution », le camp vise à renforcer les échanges entre leaders et agents techniques des Associations de Femmes Rurales (AFR) membres du réseau, tout en offrant des pratiques innovantes et durables adaptées aux réalités locales.

Un événement qui met à l'honneur les femmes rurales et les jeunes producteurs, en leur offrant des outils concrets pour développer une agriculture horticole durable et résiliente face aux défis environnementaux.

## Une atmosphère studieuse et conviviale

Dès l'aube, le village s'anime : jeunes, femmes et producteurs venus de tout le Sénégal investissent les parcelles pédagogiques. Le sol travaillé à la main, l'odeur du compost et le vert éclatant des cultures créent une atmosphère à la fois studieuse et conviviale.

Les ateliers pratiques mettent en avant des techniques simples mais efficaces : rotation des cultures, protection naturelle des plants et gestion écologique des sols.

> « Chaque technique apprise ici peut transformer nos exploitations. » — Aissatou, maraîchère

Entre formations et échanges, le CIFAP se transforme également en espace de réseautage, où contacts, projets et idées circulent autour des repas collectifs et des sessions de partage.

## Huit pays réunis autour de l'agroécologie horticole

Cette édition a réuni des participantes venues du **Mali, du Burkina Faso, du Ghana, de la Côte d'Ivoire, de la Guinée-Bissau, de la Guinée, de la Gambie et du Sénégal**, autour du thème principal : **« Techniques de conduite des cultures horticoles en agroécologie paysanne »**

## Près de 70 leaders et techniciens formés

Venues de huit pays d'Afrique de l'Ouest, **près de soixante-dix leaders et techniciens** issus des **Associations de Femmes Rurales (AFR)** ont été formés aux techniques de conduite des cultures horticoles en agroécologie paysanne.`,
  },

  // ── Article Ziguinchor — Plaidoyer agro-industrie ─────────────────────────
  {
    id: "22",
    slug: "ziguinchor-organisations-paysannes-agro-industrie-souverainete",
    title: "Ziguinchor : Des organisations paysannes de femmes alertent sur l'impact négatif de l'agro-industrie sur l'atteinte de la souveraineté alimentaire",
    excerpt: "Des organisations paysannes de femmes de Ziguinchor interpellent les autorités sénégalaises et africaines sur les dangers de l'agro-industrie et plaident pour une transition vers l'agroécologie.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775558250/Ziguinchor_Des_organisations_paysannes_de_femmes_alertent_sur_l_impact_n%C3%A9gatif_de_l_agro-industrie_sur_l_atteinte_de_la_souverainet%C3%A9_hqxbec.webp",
    publishedAt: "2025-08-30",
    category: "Plaidoyer",
    author: "Max Euclide KANFANY",
    tags: ["Plaidoyer", "Agroécologie", "Souveraineté alimentaire", "Ziguinchor", "Sénégal", "NSS"],
    canonical: "https://www.seneweb.com/fr/news/Video/ziguinchor-des-organisations-paysannes-de-femmes-alertent-sur-limpact-negatif-de-lagro-industrie-sur-latteinte-de-la-souverainete_n_466644.html",
    robots: "index, follow",
    sourceName: "Seneweb",
    sourceUrl: "https://www.seneweb.com/fr/news/Video/ziguinchor-des-organisations-paysannes-de-femmes-alertent-sur-limpact-negatif-de-lagro-industrie-sur-latteinte-de-la-souverainete_n_466644.html",
    videoUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775556689/Ziguinchor_Des_organisations_paysannes_de_femmes_alertent_sur_l_impact_n%C3%A9gatif_de_l_agro-industrie_sur_l_atteinte_de_la_souverainet%C3%A9_hqdzfs.mp4",
    coverCaption: "Ziguinchor : Des organisations paysannes de femmes alertent sur l'impact négatif de l'agro-industrie sur l'atteinte de la souveraineté alimentaire",
    content: `Des organisations paysanes de femmes de Ziguinchor interpellent les autorités étatiques du Sénégal et de l'Afrique en général sur les problèmes de l'agro-industrie sur la santé des hommes et sur la dégradation des terres cultivables. En marge d'une rencontre, un forum international à Dakar les jours à venir sur l'agrobusiness, ces organisations de femmes ont soutenu: ʺ Nous sommes la solution ʺ, s'adressent-t-elles aux autorités.

" Si nous voulons vraiment avoir notre souveraineté alimentaire, nous devons promouvoir l'agro-écologie ", a indiqué Mariama Sonko, Présidente du mouvement ʺ Nous sommes la solutions ʺ, à Ziguinchor.

Selon elle, les terres de l'Afrique s'appauvrissent d'années en années par les systèmes agricoles utilisés. De ce fait, ces organisations paysannes exhortent les autorités à faire la promotion des bio-fertilisants et bio-stimulants. " L'utilisation des bio-fertilisants et bio-stimulants est une urgence ", a-t-elle ajouté.

[[VIDEO]]

Pour cette organisation, la souffrance qui existe aujourd'hui en Afrique est la conséquence d'une mauvaise alimentation. D'où la nécessité d'aller vers cette transition agro-écologique, pour avoir une alimentation saine et dans la durabilité.

"Il est mieux de promouvoir l'agro-écologie que l'agro-business", plaide la présidente. Ces organisations paysannes féminines exhortent ainsi, les gouvernements africains, notamment celui du Sénégal à intégrer cette initiative dans leur politique agricole, dans l'optique d'aller vers la souveraineté alimentaire.`,
  },

  {
    id: "21",
    slug: "niaguis-capitale-agroecologie-paysanne-cifap-2025",
    title: "Niaguis, capitale ouest-africaine de l'agroécologie paysanne : retour sur le CIFAP 2025",
    excerpt:
      "Près de 70 leaders, techniciens et animateurs agricoles venus de 8 pays d'Afrique de l'Ouest se sont réunis à Niaguis pour la deuxième journée du CIFAP 2025 — une semaine de formation intensive placée sous le signe des techniques horticoles en agroécologie paysanne.",
    content: `## Une formation ancrée dans la pratique

Le thème de cette édition, "Techniques pratiques de conduite des cultures horticoles en agroécologie paysanne", donne le ton : pas de théorie abstraite, mais des gestes concrets appris sur le terrain. Dès la matinée, les participantes et participants étaient aux champs — mains dans la terre, outils en main.

Au programme : préparation des sols, mise en place de pépinières, repiquage, entretien des cultures, traitements naturels et techniques de récolte. Une session dédiée à la culture du riz pluvial figurait également au calendrier.

## Renforcer les compétences des leaders de terrain

Cette édition du CIFAP vise un objectif précis : équiper les leaders féminins, techniciens et animateurs agricoles des outils nécessaires pour former à leur tour leurs communautés. Le transfert de compétences est au cœur de la méthode NSS — chaque personne formée ici repartira avec la capacité de démultiplier ces savoirs dans son pays d'origine.

Les femmes rurales d'Afrique de l'Ouest plaident ainsi, par leurs actes, pour une agroécologie paysanne souveraine — construite par elles, pour elles.

## Niaguis, un symbole qui se confirme

Ce n'est pas un hasard si le CIFAP revient chaque année à Niaguis, en Casamance. Ce territoire est devenu au fil des éditions un lieu de référence pour la formation paysanne ouest-africaine — un espace où des femmes de 14 pays partagent leurs savoirs ancestraux et leurs innovations de terrain.`,
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_1_r60wkt",
    publishedAt: "2025-09-17",
    category: "Formation",
    author: "Mouvement NSS",
    tags: ["CIFAP 2025", "Agroécologie paysanne", "NSS", "Niaguis", "Horticulture", "Formation", "Femmes rurales", "Afrique de l'Ouest"],
    stats: [
      { label: "Participants", value: "~70" },
      { label: "Pays",         value: "8" },
      { label: "Édition",      value: "4e" },
    ],
    cloudinaryGalleryCaption: "CIFAP 2025 — Niaguis, Casamance",
    cloudinaryImages: [
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_1_r60wkt",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_5_epvdil",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_5_vuxb5t",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_7_sxaoha",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_9_bj8bcl",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_10_elfkpa",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_10_q2nmsu",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_11_rtctl1",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_11_t7tlzg",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_12_inw0pu",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_13_iql1nh",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_16_rrpng6",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_16_ufp9a6",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_17_pr6hxb",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_18_nkepft",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_18_qhxwdd",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_22_ce0opk",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_23_eo5qvc",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_23_szfymw",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_24_wkdxua",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_25_ebrwnm",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_26_pdcxtd",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_27_k28hdu",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_29_xpr99s",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_30_d7lfiz",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_32_rd3kb0",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_33_tjgk5i",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_35_h7j5s6",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_41_cdc6og",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_42_pqoxc7",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_43_lpwue0",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_44_ehfccr",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_45_kyf7gr",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_50_ofcxih",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_52_yfjako",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_53_cgswx9",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_54_hwa5hq",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_55_gwf3d2",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_56_sboaai",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_57_aldaww",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_61_ohpmgc",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_62_tkzwb8",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_63_v2ewix",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_64_n3zd3j",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_65_xtxj0g",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_66_p4sgga",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_67_vsxzyo",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_68_bgxbkx",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_69_vehsfp",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_70_cier8h",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_71_nuh8v4",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_74_zfbglr",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_76_umhvqs",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_77_xnrd8v",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_78_cjpm9n",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_79_kpviqt",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_81_r0hnmw",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_83_cm5pye",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_84_v5wxli",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_85_grg7ja",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_87_derqqk",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_88_siaui5",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_89_tzyofc",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_90_s6kewe",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_91_matcmp",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_92_bdzlzq",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_93_unmp5c",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_94_ze1rqt",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_95_waxttx",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_96_pvn8dw",
      "NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_97_ivjkou",
    ],
  },

  // ── Femmes rurales — plaidoyer agroécologie paysanne Niaguis ────────────────
  {
    id: "24",
    slug: "femmes-rurales-agroecologie-paysanne-plaidoyer-niaguis",
    title: "Femmes rurales d'Afrique de l'Ouest : un plaidoyer collectif pour l'agroécologie paysanne à Niaguis",
    excerpt: "À Niaguis, des femmes rurales de huit pays d'Afrique de l'Ouest se réunissent au CIFAP 2025 pour porter un plaidoyer commun en faveur de l'agroécologie paysanne et de la souveraineté alimentaire.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775575693/femmes_rurales_d_Afrique_de_l_Ouest_plaident_pour_l_agro%C3%A9cologie_paysanne_6_ithmd3.webp",
    publishedAt: "2025-09-21",
    category: "Formation",
    author: "NSS — Nous Sommes la Solution",
    tags: ["CIFAP 2025", "Agroécologie paysanne", "NSS", "Niaguis", "Souveraineté alimentaire", "Femmes rurales", "Afrique de l'Ouest", "Plaidoyer"],
    cloudinaryGalleryCaption: "Femmes rurales d'Afrique de l'Ouest — CIFAP 2025, Niaguis",
    cloudinaryImages: [
      "550121041_24681588258142731_8198053065475994889_n_cxdblc",
      "549795885_24681580328143524_3103202289953071503_n_l9plji",
      "549617216_24681557374812486_7272298061268070418_n_o4tbfo",
      "549522968_24681584084809815_1712861352102865637_n_vz7rv8",
      "549295076_24681604084807815_6392891349585102514_n_cuyxzu",
      "548309676_24681590054809218_9168887447033458993_n_vdzt9m",
      "549211286_24681585488143008_5614237383404674501_n_sns8lm",
      "549193663_24681581694810054_538109028421329166_n_hwepnc",
      "549186518_24681624031472487_5216676861033100827_n_qg7xyi",
      "548926029_24681556668145890_7654396287717760268_n_x6hxom",
      "548508607_24681558504812373_6100761976296010119_n_dmhwwu",
      "548308927_24681589418142615_8430907209307327567_n_bi67fs",
      "546629545_24681613134806910_2222397665823863978_n_baujc3",
      "548308452_24681591211475769_8954597861629074999_n_zkgg4k",
      "548300747_24681586114809612_363689707631168563_n_hrdabc",
      "547283689_24681588668142690_5975092984303473517_n_rqgmkr",
      "548209660_24681625241472366_6681821818706666959_n_xk34fd",
      "548199099_24681611758140381_7654766063873064977_n_lprhrd",
      "548097145_24681586651476225_1360774902788714240_n_ltejka",
      "547994577_24681587751476115_7004588264127965586_n_hgyd2q",
      "547065233_24681582398143317_1944322534761290759_n_pwuvq0",
      "546630435_24681618454806378_1160413185952172721_n_wnddaj",
      "546633357_24681590731475817_824053366044374961_n_gxrghx",
      "546617231_24681619864806237_3001687403129637920_n_ajvrjp",
      "546614470_24681587084809515_3859244178181993271_n_e53gar",
    ],
    content: `## Huit pays, une voix

Du **Burkina Faso** à la **Gambie**, du **Ghana** à la **Guinée-Bissau**, de la **Guinée** à la **Côte d'Ivoire**, du **Mali** au **Sénégal** — des femmes rurales de huit pays se retrouvent chaque année à Niaguis, portant avec elles les réalités de leurs territoires et la même conviction : l'agroécologie paysanne est la voie vers la souveraineté alimentaire.

Ensemble, elles forment une voix continentale qui interpelle les gouvernements, les institutions et les partenaires du développement pour que cette agriculture — respectueuse de la vie, du sol et des communautés — soit reconnue, soutenue et financée.

> « Dans l'agroécologie, nous recherchons la souveraineté alimentaire. Et pour être souverain, il faut arriver à avoir le droit de produire ce que vous voulez manger. » — Mariama Sonko, présidente de NSS

[[GALLERY]]

## Savoirs endogènes et souveraineté alimentaire

Au CIFAP, les savoirs circulent dans les deux sens. Les formatrices transmettent des techniques agroécologiques — rotation des cultures, préparation du compost, culture hors sol, diagnostic de la santé des sols — mais les participantes apportent aussi leurs propres connaissances, héritées de générations de femmes agricultrices.

Ces **savoirs endogènes** sont au cœur du modèle NSS : ils ne sont pas à remplacer, mais à enrichir et à valoriser. C'est cette combinaison — techniques innovantes et savoirs locaux — qui construit une souveraineté alimentaire durable, ancrée dans les réalités de chaque territoire.

> « L'agroécologie, ce n'est pas de l'anarchie — c'est quelque chose de bien ordonné. » — Monique Noumo Konan, coordinatrice NSS Côte d'Ivoire`,
  },

  // ── Article Ouverture CIFAP 2025 — Niaguis ────────────────────────────────
  {
    id: "23",
    slug: "niaguis-terre-convergence-cifap-4e-flamme-agroecologique",
    title: "Niaguis, terre de convergence : le CIFAP allume sa 4ᵉ flamme agroécologique",
    excerpt: "Ouverture du CIFAP 2025 à Niaguis : la 4ᵉ édition du Camp International de Formation sur l'Agroécologie Paysanne réunit producteurs, femmes leaders et acteurs ruraux de toute l'Afrique de l'Ouest.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775561753/Ouverture_de_la_4%E1%B5%89_%C3%A9dition_du_CIFAP_%C3%A0_Niaguis_lqfakd.webp",
    publishedAt: "2025-09-15",
    category: "Formation",
    author: "Mouvement NSS",
    tags: ["CIFAP", "Agroécologie paysanne", "Niaguis", "Formation agricole", "Horticulture", "Afrique de l'Ouest", "Agriculture durable"],
    robots: "index, follow",
    cloudinaryGalleryCaption: "Ouverture du CIFAP 2025 — Niaguis, Casamance",
    cloudinaryImages: [
      "Ouverture_de_la_4ᵉ_édition_du_CIFAP_à_Niaguis_lqfakd",
      "547163035_4181181722151383_8621746354621340150_n_nltr0o",
      "549371012_4181170252152530_3264224510783469889_n_b3uner",
      "549212437_4181181815484707_320755256327631749_n_c9qgvu",
      "548204114_4181181925484696_5794237487250784986_n_wacw86",
      "548179959_4181180815484807_1725174516879762017_n_ypgzwo",
      "547267135_4181170405485848_3304556589988714902_n_bgkbg8",
      "547938708_4181180882151467_7990136013235981478_n_lujarz",
      "547835296_4181180665484822_2270584862035889623_n_zz7gbc",
      "547577976_4181181578818064_3491611048039437920_n_xq6jvm",
      "547862917_4181180842151471_5822749115630760970_n_jkfnpv",
      "547592602_4181181672151388_778284174587938016_n_wbqb9h",
      "547495770_4181181638818058_7460929479110403658_n_saturz",
      "547566899_4181181768818045_3336733239416639277_n_eqicur",
      "547385072_4181181868818035_4355944713230422873_n_lzdfge",
      "547403844_4181181902151365_6076548001007715382_n_lzqubj",
      "547437753_4181170195485869_2155655902466265095_n_ev25er",
      "546862015_4181181378818084_5561810864715096716_n_mtwja2",
      "547250626_4181181528818069_8043233769900241124_n_alnxz4",
      "546622133_4181181972151358_1006797237717819500_n_nh5xcs",
      "545970584_4181181362151419_5029738448841312069_n_kwtwtm",
    ],
    content: `En ce 15 septembre 2025, le village de Niaguis devient pour la quatrième fois le carrefour d'une agriculture en transformation. Le Camp International de Formation sur l'Agroécologie Paysanne ouvre ses portes sous un thème concret et ambitieux : maîtriser les techniques de conduite des cultures horticoles en agroécologie. Derrière cet intitulé technique, une question de fond : à qui appartient le savoir agricole de demain ?

## Une cérémonie qui dit plus qu'elle n'inaugure

La présence des autorités administratives locales à la cérémonie d'ouverture n'est pas un simple protocole. Elle marque une reconnaissance : celle d'un modèle agricole alternatif qui gagne sa légitimité sur le terrain. En choisissant d'honorer cet événement, les représentants de Niaguis envoient un signal fort — le développement durable et l'autonomisation des communautés rurales ne sont plus des slogans, ils deviennent une politique de terrain, portée et assumée localement.

## Un public qui reflète l'ambition du camp

Producteurs aguerris, jeunes en quête de voies agricoles viables, femmes rurales, acteurs du développement venus de plusieurs horizons : dès la première journée, la diversité des participants dit beaucoup sur la portée réelle du CIFAP. Ce n'est pas une formation de spécialistes entre eux — c'est un espace où se croisent les générations, les genres et les expériences. Les échanges autour des pratiques innovantes et durables ne se font pas ex cathedra ; ils naissent de cette pluralité même, où chacun apporte autant qu'il reçoit.

## La vision du CIFAP : former, relier, durer

À chaque édition, le CIFAP confirme son triple rôle : cadre de formation technique, espace de partage de savoirs et outil de mise en réseau. Cette architecture n'est pas accidentelle — elle reflète une conviction profonde que la transition agroécologique ne se décrète pas mais se construit, collectivement, par la transmission et le lien. Respectueuse de l'environnement, orientée vers la sécurité alimentaire, la démarche portée ici à Niaguis trace une ligne directe entre la parcelle paysanne et les grands équilibres agricoles du continent.

La semaine qui s'ouvre sera celle des mains dans la terre et des têtes en dialogue — suivez nos prochaines publications pour les comptes rendus des ateliers pratiques, les portraits de participants et les enseignements techniques au cœur de cette 4ᵉ édition.`,
  },

  // ── Le Soleil — Tamba, femmes rurales & changement climatique ────────────
  {
    id: "28",
    slug: "tamba-femmes-rurales-premiere-ligne-changement-climatique-lesoleil",
    title: "Tamba : les femmes rurales en première ligne face au changement climatique",
    excerpt: "À Tambacounda, le mouvement NSS a célébré la Journée internationale de la femme rurale en mettant en lumière la résilience des agricultrices face au changement climatique et leur rôle central dans la transition agroécologique.",
    coverUrl: "https://lesoleil.sn/wp-content/webp-express/webp-images/uploads/2025/10/WhatsApp-Image-2025-10-16-at-21.29.47-900x405.jpeg.webp",
    publishedAt: "2025-10-17",
    category: "Presse",
    author: "Boubacar Agna CAMARA",
    sourceName: "Le Soleil",
    canonical: "https://lesoleil.sn/actualites/societe-fait-divers/tamba-les-femmes-rurales-en-premiere-ligne-face-au-changement-climatique/",
    tags: ["Changement climatique", "Femmes rurales", "Tambacounda", "Résilience", "Agroécologie", "NSS", "Journée internationale de la femme rurale"],
    coverCaption: "Journée internationale de la femme rurale à Tambacounda — © Le Soleil / Boubacar Agna CAMARA",
    content: `Ce mercredi 15 octobre, l'association sous régionale Nous sommes la solution (NSS), a célébré à Tambacounda, la journée internationale de la femme rurale. Lors de celle-ci, la résilience des femmes du monde rural face aux impacts du changement climatique, dans le secteur agricole, a été notée. « En tant qu'agricultrices, les femmes rurales ont appris à faire face et à s'adapter aux changements climatiques », indique la présidente du mouvement au niveau national et sous-régional, madame Mariama Sonko.

Selon cette dernière, cette adaptation est visible à travers la pratique d'une agriculture en harmonie avec la nature, l'agroécologie, mais également avec la préservation des semences résilientes aux changements climatiques. Elle concerne aussi l'emploi de techniques de gestion des sols écologiques ou biologiques, ou encore les efforts de reboisement et de restauration réalisés à l'échelle de la communauté.

Cette journée célébrée dans la capitale du Sénégal oriental a enregistré la présence des délégations des coordinations de NSS en Gambie et en Guinée-Bissau. Pour Mme Sonko, les femmes rurales ont été à l'avant-garde de la conservation de l'environnement en apportant des connaissances et des pratiques ancestrales inestimables. Celles-ci ont été à la tête de mouvements climatiques mondiaux et nationaux qui ont mis en lumière l'urgence de la crise climatique et la nécessité d'agir pour le bien-être de cette génération et des générations futures, ajoute-t-elle.

C'est dans cette optique que le mouvement panafricain invite toutes les parties prenantes à célébrer le rôle essentiel des femmes rurales dans le renforcement de la résilience climatique, la conservation de la biodiversité et le soin des terres. Car, selon la présidente, les changements climatiques, la perte de la biodiversité et la dégradation des terres affectent les droits, la résilience et les ressources des femmes et des filles rurales.`,
  },
];

export const ALL_CATEGORIES = [
  "Formation",
  "Plaidoyer",
  "Mouvement",
  "Agroécologie",
  "Atelier de formation",
  "Rencontres",
  "Leadership",
  "Programmes",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
