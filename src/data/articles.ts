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
  videoUrls?: string[];
  coverCaption?: string;
  simpleImages?: string[];
  location?: string;
}

export const ARTICLES: Article[] = [

  // ── L'As Quotidien — AFSA conquise par le modèle Karonghen Wati Naaning ──
  {
    id: "35",
    slug: "lafsa-conquise-modele-integre-karonghen-wati-naaning-casamance",
    title: "L'AFSA conquise par le modèle intégré de « Karonghen Wati Naaning » en Casamance",
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "En visite à Niaguis, l'Alliance pour la souveraineté alimentaire en Afrique (AFSA) a salué le centre agroécologique fondé par NSS et AJAC, qualifiant son approche intégrée d'« exemple reproductible porteur d'espoir pour l'Afrique ».",
    coverUrl: "/images/actualites/afsa-karonghen-wati-naaning-casamance.jpg",
    publishedAt: "2026-02-23",
    category: "Presse",
    author: "Essakéman KAYOUNGA",
    sourceName: "L'As Quotidien",
    sourceUrl: "https://wasafrica.org/fr/lafsa-conquise-par-le-modele-integre-de-karonghen-wati-naaning-en-casamance/",
    canonical: "https://wasafrica.org/fr/lafsa-conquise-par-le-modele-integre-de-karonghen-wati-naaning-en-casamance/",
    robots: "index, follow",
    tags: ["agroécologie", "AFSA", "Casamance", "Niaguis", "semences paysannes", "souveraineté alimentaire", "Nous Sommes la Solution", "centre de formation", "Afrique de l'Ouest"],
    content: `En visite à Niaguis, l'Alliance for Food Sovereignty in Africa (AFSA) a salué le modèle du centre agroécologique « Karonghen Wati Naaning », qu'elle qualifie d'approche complète au service des communautés rurales. L'initiative incarne, selon l'organisation, une vision ambitieuse face aux défis de la souveraineté alimentaire en Afrique.

L'Alliance pour la souveraineté alimentaire en Afrique (AFSA) a exprimé un intérêt marqué pour le modèle développé par le centre agroécologique « Karonghen Wati Naaning », à Niaguis, en Casamance. Million Belay, coordonnateur général, s'est dit impressionné par les réalisations du centre de formation, d'expérimentation et de démonstration, situé dans la commune de Niaguis à quelques kilomètres sur l'axe Ziguinchor–Kolda.

Fondé par le mouvement paysan africain des Femmes Rurales « Nous Sommes La Solution » (NSS) et par l'Association des Jeunes Agriculteurs de Casamance (AJAC), le centre s'impose progressivement comme un pôle stratégique de promotion de l'agroécologie paysanne au Sénégal et en Afrique de l'Ouest.

> « Je suis impressionné par ce que j'ai vu ici, tant en matière de formation aux bonnes pratiques agroécologiques que par la diversité des activités développées. » — Million Belay, coordonnateur général de l'AFSA

Million Belay a parcouru les unités d'élevage, de pisciculture, d'agroforesterie, d'agriculture, d'apiculture, d'horticulture, de transformation, de production de biofertilisants et de biopesticides, ainsi que les initiatives autour de la mangrove. Il a salué une approche complète, intégrant formation des producteurs, valorisation des savoirs locaux, protection des semences paysannes et promotion de pratiques vertueuses pour les écosystèmes — soulignant le lien fort entre le centre et les communautés environnantes. Selon lui, voir des personnes travailler sur le terrain avec passion et apporter des preuves concrètes est bien plus éloquent que n'importe quel rapport de bureau.

Le centre mise sur la diversification des cultures, l'agroforesterie, le compostage biologique et la gestion durable des ressources en eau. L'initiative accorde une place centrale à la formation des jeunes et des femmes. L'appellation « Karonghen Wati Naaning » traduit une volonté de remettre au cœur du développement agricole les savoirs locaux, les semences traditionnelles et les techniques ancestrales.

> « Nous voyons ici un modèle reproductible, ancré dans les réalités locales et porteur d'espoir pour l'Afrique. » — Délégation AFSA

La visite s'est déroulée en présence de Mamadou Danfakha, coordinateur de NSS, de Famara Diédhiou, chargé de programme Afrique de l'Ouest à l'AFSA, de Charles Lwanga, responsable du programme « Sol sain, aliments sains », et de Mariama Sonko, présidente du mouvement NSS.

Mariama Sonko a rappelé que le centre couvre plusieurs domaines — agriculture, élevage, pisciculture, transformation, agroforesterie — et contribue à la promotion de l'agroécologie dans neuf pays : Burkina Faso, Côte d'Ivoire, Gambie, Ghana, Guinée, Guinée-Bissau, Mali, Togo et Sénégal. Mamadou Danfakha, coordinateur NSS, a souligné que le mouvement a su acquérir expérience, motivation et l'accompagnement de partenaires solides. L'ambition portée par NSS est de faire du site un centre africain de référence. Famara Diédhiou a, pour sa part, promis un appui plus structuré au centre, affirmant repartir avec une confiance accrue.`,
  },

  // ── NSS — Thousand Currents au centre Karonghen Wati Naning, Niaguiss ────
  {
    id: "36",
    slug: "thousand-currents-centre-karonghen-wati-naning-niaguiss",
    title: "Thousand Currents au Centre Karonghen Wati Naning à Niaguiss",
    location: "Niaguiss, Casamance — Sénégal",
    excerpt: "Une délégation de Thousand Currents — ONG américaine qui soutient NSS depuis huit ans — a visité le centre Karonghen Wati Naning à Niaguiss en Casamance. Elles sont reparties satisfaites et prêtes à continuer leur appui au mouvement.",
    coverUrl: "/images/actualites/thousand-currents-karonghen-wati-naning-niaguiss.jpg",
    publishedAt: "2024-11-28",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/thousand-currents-au-centre-karonghen-wati-naning-a-niaguiss/",
    robots: "index, follow",
    tags: ["Thousand Currents", "Casamance", "Niaguiss", "centre agroécologique", "Karonghen Wati Naning", "partenariat", "Nous Sommes la Solution", "souveraineté alimentaire"],
    simpleImages: [
      "/images/actualites/thousand-currents/1.jpg",
      "/images/actualites/thousand-currents/2.jpg",
      "/images/actualites/thousand-currents/3.jpg",
      "/images/actualites/thousand-currents/4.jpg",
      "/images/actualites/thousand-currents/8.jpg",
      "/images/actualites/thousand-currents/9.jpg",
      "/images/actualites/thousand-currents/main.jpg",
    ],
    content: `Une équipe de Thousand Currents, composée de Mme Salome (Directrice générale), Mme Félogène (Directrice Afrique) et Mme Zanele (Vice-présidente), une ONG américaine qui appuie Nous Sommes la Solution (NSS) depuis huit ans, a séjourné en Casamance pour visiter le centre Karonghen Wati Naning de Niaguiss.

L'objectif de la visite était de constater de visu les réalisations accomplies sur le site par NSS et ses partenaires locaux, notamment les initiatives menées par AJAC Lukkal.

[[PHOTO_1]]

[[PHOTO_2]]

La délégation a pu découvrir l'ensemble des activités du centre : agriculture paysanne, élevage, pisciculture, agroforesterie, apiculture, horticulture, transformation agroalimentaire, production de biofertilisants et de biopesticides, ainsi que les programmes de formation destinés aux jeunes et aux femmes rurales.

[[PHOTO_3]]

[[PHOTO_4]]

Les trois représentantes de Thousand Currents sont reparties satisfaites de ce qu'elles ont découvert, et se disent prêtes à continuer à soutenir NSS dans sa mission de promotion de l'agroécologie paysanne en Afrique de l'Ouest.

[[PHOTO_5]]

[[PHOTO_6]]

[[PHOTO_7]]`,
  },

  // ── NSS — Déclaration finale Foire Djimini, semences paysannes 2024 ──────
  {
    id: "37",
    slug: "souverainete-alimentaire-semences-paysannes-foire-djimini-2024",
    title: "Souveraineté alimentaire et semences paysannes : déclaration finale de la Foire de Djimini 2024",
    location: "Djimini — Sénégal",
    excerpt: "Les participants à la 8ème édition de la Foire Ouest-Africaine des Semences Paysannes, réunis à Djimini (Sénégal) du 12 au 14 novembre 2024, ont adopté une déclaration finale appelant à l'autonomie semencière face aux politiques qui favorisent les semences industrielles.",
    coverUrl: "/images/actualites/foire-djimini-semences-paysannes-2024.jpg",
    publishedAt: "2024-11-18",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/souverainete-alimentaire-et-semences-paysannes-foire-djimini-2024-2/",
    robots: "index, follow",
    tags: ["semences paysannes", "souveraineté alimentaire", "Djimini", "COASP", "Afrique de l'Ouest", "agroécologie", "biodiversité", "Nous Sommes la Solution"],
    content: `Les participants à la 8ème édition de la Foire Ouest-Africaine des Semences Paysannes, venus de 17 pays membres, alliés et sympathisants du Comité Ouest-Africain des Semences Paysannes (COASP), réunis à Djimini au Sénégal du 12 au 14 novembre 2024, ont réfléchi et échangé autour du thème : « Autonomie semencière et souveraineté alimentaire : enjeux et défis pour la semence paysanne ».

À l'issue de leurs travaux, ils ont établi les constats suivants :

Les semences paysannes représentent près de 80 % des semences utilisées dans les champs en Afrique de l'Ouest, et constituent le fondement de la souveraineté alimentaire et des systèmes alimentaires durables. Elles sont le fruit de milliers d'années de recherche et de sélection par les paysannes et paysans, qui ont ainsi façonné un patrimoine vivant irremplaçable.

L'harmonisation des politiques et des lois semencières, très souvent influencée par des acteurs privés, favorise les semences industrielles et criminalise les systèmes de semences paysannes (SSP), menaçant directement la biodiversité cultivée et l'indépendance des communautés rurales.

Face à ces constats, les participants ont adressé des recommandations à quatre acteurs clés :

**Aux décideurs politiques :** adopter des politiques qui soutiennent les semences paysannes, rejeter les OGM qui créent des dépendances, et investir dans la recherche participative aux côtés des communautés paysannes.

**Aux femmes paysannes :** poursuivre et renforcer leur rôle central dans la conservation, la sélection et la transmission des semences locales.

**Aux jeunes agriculteurs :** s'engager activement dans la préservation de la biodiversité agricole et la valorisation des savoirs endogènes.

**Aux organisations de la société civile :** créer des espaces de dialogue entre tous les acteurs du système semencier et renforcer la collaboration inter-réseaux à l'échelle régionale.

*Fait à Djimini, le jeudi 14 novembre 2024.*`,
  },

  // ── APS — Thousand Currents impressionnée par Karonghère Wati Nianing ────
  {
    id: "38",
    slug: "senegal-etatsunis-agriculture-organisation-americaine-niaguis",
    title: "Niaguis : une organisation américaine « impressionnée » par les réalisations du centre agroécologique « Karonghère Wati Nianing »",
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "Solane Lemma, présidente et directrice générale de Thousand Currents, s'est dite impressionnée lors de sa visite au centre de formation agroécologique à Niaguis. L'organisation américaine appuie NSS depuis huit ans.",
    coverUrl: "/images/actualites/senegal-etatsunis-agriculture-niaguis.jpg",
    publishedAt: "2024-11-14",
    category: "Presse",
    author: "APS",
    sourceName: "APS (Agence de Presse Sénégalaise)",
    sourceUrl: "https://wasafrica.org/fr/senegal-etatsunis-agriculture-collectivite-niaguis/",
    canonical: "https://wasafrica.org/fr/senegal-etatsunis-agriculture-collectivite-niaguis/",
    robots: "index, follow",
    tags: ["Thousand Currents", "Niaguis", "centre agroécologique", "Karonghère Wati Nianing", "Casamance", "agroécologie", "partenariat", "Nous Sommes la Solution"],
    content: `Solane Lemma, présidente et directrice générale de l'organisation américaine Thousand Currents, a exprimé son enthousiasme lors d'une visite au centre de formation agroécologique « Karonghère Wati Nianing » à Niaguis, dans la région de Ziguinchor.

> « Je suis impressionnée par ce que nous avons vu ici. L'agroécologie peut non seulement nourrir les gens mais également préserver notre environnement. » — Solane Lemma

Elle a précisé que l'objectif de sa visite était de renforcer le partenariat avec le mouvement panafricain des femmes rurales Nous Sommes la Solution, dédié à la promotion des pratiques agroécologiques.

> « Les communautés, à travers le monde, sont confrontées aujourd'hui à plusieurs types de problèmes, mais elles sont elles-mêmes la solution à ces problèmes. » — Solane Lemma

> « Nous sommes à leur côté pour les soutenir et mettre en œuvre leurs idées et solutions. » — Solane Lemma

Mamadou Danfakha, coordinateur du mouvement et initiateur du centre, a expliqué que Thousand Currents soutient NSS depuis huit ans dans leurs activités.

Le centre fonctionne comme installation de formation, d'expérimentation et de démonstration couvrant l'agriculture, l'élevage, la pisciculture et l'apiculture à travers huit pays africains.

Mariama Sonko, présidente du mouvement, a souligné l'importance des pratiques biologiques et durables mises en œuvre sur le site.

> « Nous utilisons les engrais organiques et les bio-protecteurs. Ces semences organiques nous permettent de renforcer la fertilité des terres et les rendements des productions. » — Mariama Sonko

Le mouvement opère au Burkina Faso, en Côte d'Ivoire, en Gambie, au Ghana, en Guinée, en Guinée-Bissau, au Mali et au Sénégal, avec des fermes agroécologiques implantées dans chaque pays.`,
  },

  // ── NSS — La lutte de Mariama Sonko pour l'agroécologie ──────────────────
  {
    id: "39",
    slug: "lutte-mariama-sonko-agroecologie-droits-paysannes",
    title: "La lutte de Mariama Sonko pour l'agroécologie et les droits des paysannes : « Ils ont essayé de me faire taire, mais ils n'ont pas réussi »",
    excerpt: "Cette Sénégalaise préside un mouvement de 175 000 agricultrices dans huit pays. Portrait d'une femme que les notables de son village ont tenté de réduire au silence, et qui en est sortie plus forte.",
    coverUrl: "/images/actualites/lutte-mariama-sonko-agroecologie.jpg",
    publishedAt: "2024-11-11",
    category: "Portrait",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/la-lutte-de-mariama-sonko-pour-lagroecologie-et-les-droits-des-paysannes-ils-ont-essaye-de-me-faire-taire-mais-ils-nont-pas-reussi/",
    robots: "index, follow",
    tags: ["Mariama Sonko", "agroécologie", "droits des femmes", "souveraineté alimentaire", "Casamance", "Nous Sommes la Solution", "semences paysannes", "Terra Madre"],
    content: `Cette Sénégalaise préside une organisation régionale qui regroupe 175 000 agricultrices de huit pays. Son rêve est que la terre revienne à ceux qui la travaillent.

Mariama Sonko s'est mariée à l'âge de 17 ans. Sous la pression de sa famille, elle est allée vivre à Niaguis, le village de son mari, un petit village agricole de la région de Casamance, dans le sud du Sénégal. Là, elle a commencé à travailler sur les légumes et s'est impliquée dans une association de femmes agricultrices. Elle constate avec colère que la tradition empêche les femmes de posséder des terres et qu'elles ne peuvent aspirer qu'à les louer dans des conditions abusives.

C'était il y a une vingtaine d'années. Cet épisode d'injustice a particulièrement irrité la jeune Sonko. Avec un groupe d'agricultrices, elle avait loué quelques hectares de terre à un marabout, un chef religieux islamique. Après des années de dur labeur — défrichage, désherbage, labourage et semis du lever au coucher du soleil — le marabout leur a annoncé qu'il souhaitait résilier le bail, au moment précis où la terre commençait à produire de bonnes récoltes.

> « J'étais indignée. Je lui ai dit qu'il ne pouvait pas nous jeter dehors au moment où nos efforts commençaient à porter leurs fruits. » — Mariama Sonko

Sonko a payé cher sa défiance à l'égard du chef religieux. Les notables du village l'ont accusée de dresser les hommes et les femmes les uns contre les autres. Elle a été exclue du mouvement associatif et s'est vu retirer un poste au sein du conseil municipal.

> « Ils ont essayé de me faire taire, mais ils n'ont pas réussi. » — Mariama Sonko

Sonko, aujourd'hui âgée de 52 ans, affirme que chaque fois qu'ils ont essayé de l'humilier, elle s'est toujours levée. Elle s'était déjà fait un nom dans la région en tant que responsable de la fédération des organisations féminines de Ziguinchor.

> « C'est à partir de là que j'ai poursuivi mon combat, en sensibilisant et en formant des collègues femmes. À la radio et dans les forums. Dans les conversations privées et dans les cercles de paysannes. » — Mariama Sonko

Elle observe avec inquiétude comment l'Alliance pour une révolution verte en Afrique (AGRA), créée en 2006, cherche à imposer un modèle agro-industriel sur le continent. Sa cause personnelle se cristallise alors, à la croisée de la lutte pour les droits des femmes et de la défense d'un système alimentaire respectueux de l'environnement.

> « En Afrique, l'agroécologie n'est rien d'autre qu'une forme de souveraineté alimentaire traditionnellement prise en charge par les femmes. » — Mariama Sonko

En 2011, avec 12 organisations de cinq pays (Sénégal, Burkina Faso, Guinée-Conakry, Mali et Ghana), elle crée le mouvement qu'elle préside aujourd'hui : Nous Sommes la Solution (NSS). Le mouvement regroupe désormais plus de 800 organisations représentant quelque 175 000 agricultrices dans huit pays.

> « Elle menace de détruire tout ce que nos ancêtres nous ont laissé, en particulier les sols fertiles et les semences indigènes. » — Mariama Sonko, à propos de l'agriculture hyper-technicisée

NSS ne cherche pas la bataille juridique, mais utilise des arguments concrets. « Nous insistons sur les avantages qu'il y a à ce que les femmes puissent acheter ou hériter de terres. Par exemple, parce que cela augmente la richesse de la famille. » La stratégie fonctionne : « Grâce à notre travail, de nombreuses femmes d'Afrique de l'Ouest cultivent désormais leurs propres terres. »

Sonko vit toujours à Niaguis, où elle cultive « un peu de tout » sur sa ferme de trois hectares, forme aux pratiques agroécologiques et encourage les débats sur le rôle des femmes dans les exploitations familiales et la politique locale. Elle s'est rendue fin septembre 2024 à Turin (Italie) pour participer à Terra Madre, la foire organisée par le mouvement Slow Food.`,
  },

  // ── NSS — Journée internationale de la femme rurale et JMA 2024 ───────────
  {
    id: "40",
    slug: "journee-internationale-femme-rurale-alimentation-nss-2024",
    title: "Journée internationale de la femme rurale et Journée mondiale de l'alimentation 2024",
    excerpt: "Chaque année, NSS célèbre conjointement la Journée internationale de la femme rurale (15 octobre) et la Journée mondiale de l'alimentation (16 octobre). En 2024, la mobilisation a réuni plusieurs organisations membres à Sérekunda, en Gambie.",
    coverUrl: "/images/actualites/journee-femme-rurale-alimentation-2024.jpg",
    publishedAt: "2024-10-30",
    category: "Événement",
    author: "Tidiane Kassé et Mamadou Danfakha",
    canonical: "https://wasafrica.org/fr/journee-internationale-de-la-femme-rurale-et-journee-mondiale-de-lalimentation/",
    robots: "index, follow",
    tags: ["journée femme rurale", "journée mondiale alimentation", "Gambie", "Sérekunda", "NSS", "souveraineté alimentaire", "agroécologie", "semences paysannes"],
    content: `Depuis sa naissance en 2011, le mouvement panafricain Nous Sommes la Solution (NSS) ne faillit pas au rendez-vous. Cochées sur son agenda, les dates du 15 octobre (Journée internationale de la femme rurale) et du 16 octobre (Journée mondiale de l'alimentation) constituent des moments fétiches pour NSS.

La célébration commune de la JIFR et de la JMA permet aux membres de NSS d'avoir, chaque année, une forte communion des acteurs, afin de pouvoir bien plaider leurs causes. La mobilisation a été sonnée cette année par la Catalunya Gambia Foundation (CGF), la Fédération paysanne de Guinée-Bissau (Kafo), l'Association des Jeunes Agriculteurs de la Casamance (AJAC) et l'Union des Groupements de Producteurs de Mékhé (UGPM).

> « Le savoir et le savoir-faire paysan nous permettent de retrouver notre patrimoine nourricier et notre sécurité alimentaire tout en préservant l'environnement. » — Mariama Sonko, présidente de NSS

Sa conviction est assise que la souveraineté alimentaire ne viendra que des Africains eux-mêmes, qui se doivent de « nourrir l'Afrique par le biais de systèmes de production paysanne adaptée et soucieux de la santé de la population africaine et de son cadre de vie ».

Ses regrets résultent du fait que malgré les plaidoyers, les gouvernements n'ont pas encore rompu avec les politiques qui créent des dépendances en intrants agricoles, ni avec la dépendance vis-à-vis des produits importés, notamment ceux faits à base de produits chimiques et d'OGM qui conduisent à l'apparition de « maladies nouvelles ».

À chaque édition, ces femmes démontrent que ce sont elles qui, au-delà des inégalités de genre assises sur les lois et les normes sociales discriminatoires, se retrouvent empêchées de réaliser leur plein potentiel. Leur statut de femmes rurales fait qu'elles restent loin derrière les hommes et leurs pairs en milieu urbain. Pourtant, l'agriculture reste le premier secteur d'emplois pour les femmes dans les pays en développement, un secteur qui relève en grande partie de l'économie informelle avec peu ou pas de protection sociale.

Pour cette année 2024, les réflexions ont notamment porté sur la manière dont la faim et la malnutrition sont exacerbées par des crises prolongées résultant d'une combinaison de conflits, de phénomènes météorologiques extrêmes et de chocs économiques.

> « En transformant les systèmes agroalimentaires, il est possible d'atténuer le changement climatique et de soutenir des moyens de subsistance pacifiques, résilients et inclusifs pour tous. » — Mamadou Danfakha, chargé du programme NSS à Fahamu

> « Les régimes alimentaires malsains sont la principale cause de toutes les formes de malnutrition — sous-nutrition, carences en micronutriments et obésité — qui existent aujourd'hui dans la plupart des pays, toutes classes socio-économiques confondues. » — Mamadou Danfakha

Pendant ces deux journées à Sérekunda, les femmes ont réfléchi sur la diversité, la nutrition, les prix abordables, l'accessibilité et la sécurité alimentaire « pour le bien de tous ». Elles ont organisé des panels sur le thème « le droit aux aliments sains au service d'une vie et d'un avenir meilleurs pour les communautés locales », des concours culinaires, une exposition-vente de produits de transformation locaux et des animations culturelles autour du rôle de la femme rurale.

Les autorités gambiennes étaient fortement représentées : M. Mamadou Sabally, conseiller à la présidence, Dr Saikou Sanyang, conseiller technique au ministère de l'Agriculture, M. Papia Sanyang de la Direction de l'Agriculture urbaine, M. Kebba Touray, président de la commission Agricole du Kanifing Municipal Council, et M. Kinteh, conseiller technique au ministère de la Femme.`,
  },

  // ── NSS — Portrait Mariama Sonko, figure femme rurale Afrique de l'Ouest ─
  {
    id: "41",
    slug: "portrait-mariama-sonko-figure-femme-rurale-afrique-ouest",
    title: "Portrait : Mariama Sonko, une figure de la femme rurale en Afrique de l'Ouest",
    excerpt: "À l'occasion des Journées mondiales de la femme rurale et de l'alimentation en Gambie, Essouly Diédhiou dresse le portrait de Mariama Sonko, comparée à Aline Sitoé Diatta, héroïne de la résistance casamançaise.",
    coverUrl: "/images/actualites/portrait-mariama-sonko-femme-rurale.jpg",
    publishedAt: "2024-10-21",
    category: "Portrait",
    author: "Essouly DIEDHIOU",
    canonical: "https://wasafrica.org/fr/portrait-mariama-sonko-une-figure-de-la-femme-rurale-en-afrique-de-louest/",
    robots: "index, follow",
    tags: ["Mariama Sonko", "femme rurale", "Afrique de l'Ouest", "Gambie", "portrait", "Nous Sommes la Solution", "leadership féminin", "Casamance"],
    content: `Le mouvement panafricain des femmes rurales Nous Sommes la Solution, accompagné par l'ONG FAHAMU qui milite pour la justice sociale, a marqué deux grands rendez-vous de la femme rurale en terre gambienne.

À cette occasion, Essouly Diédhiou a dressé le portrait de Mariama Sonko, rencontrée en Gambie lors des Journées mondiales de la femme rurale et de l'alimentation. Il la présente comme une figure de proue de la femme rurale en Afrique de l'Ouest, comparée à Aline Sitoé Diatta, héroïne de la résistance sénégalaise — particulièrement en Casamance — contre la colonisation française.

Présidente du mouvement panafricain NSS, Mariama Sonko incarne depuis plus de deux décennies la lutte pour les droits des femmes rurales, la souveraineté alimentaire et la promotion de l'agroécologie paysanne à travers l'Afrique de l'Ouest.`,
  },

  // ── NSS — Techniques agricoles bio pour une alimentation saine (Gambie) ───
  {
    id: "42",
    slug: "techniques-agricoles-bio-alimentation-saine-gambie",
    title: "[Invité – Gambie] : Quelles techniques agricoles bio pour une alimentation saine ?",
    location: "Gambie",
    excerpt: "En marge des Journées de la femme rurale et de l'alimentation à Sérekunda, le coordinateur de NSS Mamadou Danfakha présente les pratiques agricoles biologiques promues par le mouvement pour une alimentation plus saine en Afrique de l'Ouest.",
    coverUrl: "/images/actualites/techniques-agricoles-bio-gambie.jpg",
    publishedAt: "2024-10-21",
    category: "Agroécologie",
    author: "Essouly Diédhiou",
    canonical: "https://wasafrica.org/fr/invite-gambie-quelles-techniques-agricoles-bio-pour-une-alimentation-saine/",
    robots: "index, follow",
    tags: ["agroécologie", "agriculture biologique", "alimentation saine", "Gambie", "Nous Sommes la Solution", "Mamadou Danfakha", "techniques agricoles"],
    content: `Le mouvement panafricain des femmes rurales Nous Sommes la Solution, accompagné par l'ONG FAHAMU qui milite pour la justice sociale, a marqué les Journées mondiales de la femme rurale et de l'alimentation en terre gambienne.

L'accent est mis cette année sur une agriculture biologique, avec des pratiques agricoles respectueuses de l'environnement pour une alimentation saine. Dans cet entretien, Essouly Diédhiou s'entretient avec Mamadou Danfakha, coordinateur du mouvement NSS, sur les techniques agroécologiques développées et promues par le réseau dans les neuf pays membres.

Le mouvement NSS privilégie l'utilisation de biofertilisants et de biopesticides issus de matières organiques locales, la préservation et la multiplication des semences paysannes, l'agroforesterie et la gestion durable des sols et des ressources en eau. Ces pratiques, ancrées dans les savoirs ancestraux des femmes rurales, permettent d'allier productivité, résilience climatique et qualité nutritionnelle des aliments produits.`,
  },

  // ── NSS — À la découverte du Caldou Branco, plat national de Guinée-Bissau
  {
    id: "43",
    slug: "decouverte-caldou-branco-plat-national-guinee-bissau",
    title: "À la découverte du Caldou Branco, plat national de la Guinée-Bissau",
    location: "Guinée-Bissau",
    excerpt: "En Gambie, lors de la journée mondiale de l'alimentation, les délégations du Sénégal, de la Guinée-Bissau et de la Gambie ont présenté leurs plats locaux préparés à base de produits bio. Focus sur le Caldou Branco, plat national bissau-guinéen.",
    coverUrl: "/images/actualites/caldou-branco-guinee-bissau.jpg",
    publishedAt: "2024-10-21",
    category: "Gastronomie",
    author: "Essouly Diédhiou",
    canonical: "https://wasafrica.org/fr/a-la-decouverte-du-caldou-branco-plat-national-de-la-guinee-bissau/",
    robots: "index, follow",
    tags: ["Caldou Branco", "Guinée-Bissau", "gastronomie", "alimentation locale", "produits bio", "souveraineté alimentaire", "Gambie", "Journée mondiale alimentation"],
    content: `En Gambie, les femmes rurales du Sénégal, de la Guinée-Bissau et de la Gambie se sont réunies autour du mouvement Nous Sommes la Solution, en marge de la Journée mondiale de l'alimentation.

C'était l'occasion pour chaque délégation de présenter les plats locaux de son pays, tous préparés à base d'aliments bio, en accord avec le slogan de la journée : « Une agriculture bio pour une nourriture saine ».

La délégation de Guinée-Bissau a mis à l'honneur le Caldou Branco, plat national du pays. Ce plat traditionnel, préparé à partir de produits locaux cultivés sans intrants chimiques, illustre parfaitement la richesse du patrimoine culinaire et agricole de la sous-région.

Cette rencontre autour des saveurs et des savoirs culinaires locaux s'inscrit dans la démarche globale de NSS : valoriser les systèmes alimentaires paysans, préserver les recettes et les ingrédients traditionnels, et démontrer que l'agroécologie nourrit à la fois les corps et les cultures.`,
  },

  // ── APS — Camp de formation agroécologie paysanne, Niaguis 2024 ──────────
  {
    id: "49",
    slug: "camp-formation-agroecologie-paysanne-niaguis-ziguinchor-2024",
    title: "Ziguinchor : un camp de formation sur l'agroécologie paysanne lancé à Niaguis",
    location: "Niaguis, Ziguinchor — Sénégal",
    excerpt: "Le mouvement NSS a lancé la 3e édition de son camp international de formation sur les bio-protecteurs en agroécologie à Niaguis. Cinquante leaders et agents techniques issus de huit pays africains y ont participé.",
    coverUrl: "/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg",
    publishedAt: "2024-09-18",
    category: "Agroécologie",
    author: "APS",
    sourceName: "APS (Agence de Presse Sénégalaise)",
    sourceUrl: "https://wasafrica.org/fr/senegal-agriculture-ziguinchor-un-camp-de-formation-sur-lagroecologie-paysanne-lance-a-niaguis/",
    canonical: "https://wasafrica.org/fr/senegal-agriculture-ziguinchor-un-camp-de-formation-sur-lagroecologie-paysanne-lance-a-niaguis/",
    robots: "index, follow",
    tags: ["camp de formation", "agroécologie paysanne", "Niaguis", "Ziguinchor", "bio-protecteurs", "semences paysannes", "Nous Sommes la Solution", "Casamance"],
    content: `Le mouvement panafricain des femmes rurales Nous Sommes la Solution a organisé le lancement de sa troisième édition du camp international de formation axée sur les « Techniques de production et d'utilisation des bio-protecteurs en agroécologie », tenu à Niaguis dans la région de Ziguinchor au sud du Sénégal.

Cette formation de cinq jours a rassemblé environ cinquante leaders et agents techniques issus des associations de femmes rurales membres du mouvement. Le lancement officiel a eu lieu au centre Karonghère Wati Nianing, présidé par l'adjoint au sous-préfet de Niaguis, Idy Gomel Ba.

> « L'objectif de cette formation, c'est de permettre aux producteurs de pouvoir produire des aliments sains et nutritifs. » — Mariama Sonko, présidente du mouvement NSS

Mariama Sonko a soulevé des préoccupations concernant l'agriculture conventionnelle chimique, affirmant qu'il y existe « presque pas de nutriments » et qu'elle provoque une « destruction de l'environnement, à savoir la terre et les semences héritées de nos ancêtres ».

> « Ces bio-protecteurs permettent non seulement d'avoir une bonne production, mais aussi une production de qualité où nous avons tous les nutriments nécessaires pour une bonne alimentation. » — Mariama Sonko

> « Pour que nous soyons souverains, il faudrait qu'on arrive à avoir notre souveraineté semencière. L'agriculture est basée sur la semence. » — Mariama Sonko

Le mouvement opère dans huit pays africains : Ghana, Burkina Faso, Gambie, Guinée-Bissau, Guinée, Mali, Côte d'Ivoire et Sénégal. L'adjoint au sous-préfet Ba a souligné que le camp renforcerait les capacités des leaders et agents techniques sur « le danger de l'usage des produits chimiques en agriculture et sur l'apport des bio-protecteurs dans la qualité des produits agricoles ».`,
  },

  // ── NSS — Agroécologie paysanne à Ouagadougou, COPAGEN 2024 ──────────────
  {
    id: "50",
    slug: "agroecologie-paysanne-promotion-ouagadougou-copagen-2024",
    title: "Promotion de l'agroécologie paysanne en Afrique de l'Ouest : les acteurs affûtent leurs armes à Ouagadougou",
    location: "Ouagadougou — Burkina Faso",
    excerpt: "Du 30 juillet au 1er août 2024 à Ouagadougou, les réseaux et plateformes ouest-africains de l'agroécologie paysanne se sont réunis sous l'égide de la COPAGEN pour élaborer une feuille de route commune.",
    coverUrl: "/images/actualites/agroecologie-paysanne-ouagadougou-2024.jpg",
    publishedAt: "2024-09-08",
    category: "Agroécologie",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/agroecologie-paysanne-ouagadougou/",
    robots: "index, follow",
    tags: ["agroécologie paysanne", "Ouagadougou", "COPAGEN", "Afrique de l'Ouest", "semences paysannes", "souveraineté alimentaire", "OGM", "plaidoyer"],
    content: `Les représentants des plateformes et réseaux de l'Afrique de l'Ouest qui œuvrent à la promotion et à la mise à l'échelle de l'agroécologie paysanne dans la sous-région se sont réunis du 30 juillet au 1er août 2024 à Ouagadougou, dans l'optique d'élaborer une feuille commune en vue de renforcer leurs synergies d'actions.

Cette rencontre a été organisée sous la houlette de la Coalition pour la Protection du Patrimoine Génétique Africain (COPAGEN). Jean Paul Sikeli, secrétaire exécutif de la COPAGEN, a fait comprendre que « l'agroécologie est confrontée à des crises multiples » : crises environnementales, climatiques, sanitaires, sécuritaires et alimentaires, aggravées par le quasi-monopole d'une poignée de firmes agroalimentaires.

> « Ces variétés qui souffrent d'un manque de reconnaissance officielle sont pourtant de loin les meilleures sur plusieurs aspects. L'agroécologie paysanne est le moyen de réalisation par excellence de la souveraineté alimentaire. » — Jean Paul Sikeli, COPAGEN

> « La portée de la souveraineté alimentaire est plus large, plus opérationnelle, plus pratique et plus appropriée pour nos pays, que ne l'est le droit à l'alimentation qui fait une focalisation sur la sécurité alimentaire, en occultant d'autres dimensions importantes du problème. » — Jean Paul Sikeli

À l'issue des 72 heures d'échanges, les différents réseaux ont élaboré une feuille de route comprenant un renforcement de capacité sur l'analyse critique des politiques et le pilotage de campagnes de plaidoyer collectif pour la reconnaissance et la valorisation de la recherche paysanne.

La Coalition pour la Protection du Patrimoine Génétique Africain (COPAGEN) est un mouvement social et citoyen qui œuvre depuis une vingtaine d'années dans la promotion de l'agroécologie et la lutte contre les OGM.`,
  },

  // ── NSS — Autonomisation semencière, souveraineté alimentaire 2023 ────────
  {
    id: "51",
    slug: "autonomisation-semenciere-souverainete-alimentaire-nss-2023",
    title: "Lutte pour la souveraineté alimentaire en Afrique de l'Ouest : l'autonomisation semencière, mère de toutes les batailles",
    excerpt: "Les leaders des associations de femmes rurales membres de NSS estiment que la souveraineté alimentaire passera inéluctablement par l'autonomisation semencière paysanne.",
    coverUrl: "/images/actualites/autonomisation-semenciere-souverainete-alimentaire-2023.jpg",
    publishedAt: "2023-12-15",
    category: "Agroécologie",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/autonomisation-semenciere-souverainete-alimentaire/",
    robots: "index, follow",
    tags: ["autonomisation semencière", "souveraineté alimentaire", "semences paysannes", "Afrique de l'Ouest", "OGM", "Niaguis", "CIFAP", "Nous Sommes la Solution", "AFSA"],
    content: `Au-delà de la priorisation politique des systèmes semenciers paysans, les leaders et agents techniques des associations de femmes rurales membres du mouvement panafricain Nous Sommes la Solution (NSS) estiment que la lutte pour la souveraineté alimentaire au Sénégal et dans la sous-région ouest-africaine passera inéluctablement par l'autonomisation semencière paysanne.

> « Nous devons arrêter de confier nos ventres à ceux qui ne sont pas prêts à nous nourrir. Notre objectif principal est l'autonomisation semencière pour ne plus faire recours à l'Occident. » — Sia Anne Marie Kamano, responsable NSS en Guinée

Cette conviction est partagée par soixante leaders et agents techniques venues de huit pays, participants à la 2e édition du camp international de formation sur l'agroécologie paysanne (SIFAP), tenue du 10 au 17 septembre 2023 au centre « Karonghen Wati Naaning » de Niaguis.

> « Depuis plus d'une dizaine d'années, les associations de femmes rurales s'efforcent de reprendre le contrôle de l'alimentation par le biais de la semence paysanne, afin de rompre avec la dépendance, les pénuries et les déficits fictifs. » — Famara Diédhiou, AFSA

> « En vérité, cette semence dont nous parlons, nous sommes les meilleurs à la maîtriser. Le blé doit être une option secondaire ou tertiaire dans le système alimentaire en Afrique de l'Ouest. » — Famara Diédhiou

Mariama Sonko, présidente du mouvement NSS, est convaincue qu'il est « temps de refuser de dépendre des semences hybrides ou améliorées faites d'OGM, parce qu'elles ne concourent pas à l'autonomisation financière durable des femmes africaines ».

> « On ne peut pas parler de souveraineté alimentaire en Afrique tant qu'on n'est pas souverain en semences paysannes. L'autonomie paysanne commence toujours par l'autonomie de la semence. Si nous laissons perdre nos semences paysannes, nous perdons notre dignité. » — Bélimgnégré Abdoul Razack, expert agroécologiste, Burkina Faso

Le mouvement NSS s'appuie sur des camps de formation, des fermes agrobiologiques, des voyages d'échange et la Foire des semences paysannes de Djimini pour mener cette « mère des batailles » pour la souveraineté semencière en Afrique de l'Ouest.`,
  },

  // ── NSS — Célébration JIFR et JMA à Ngaye 2023 ───────────────────────────
  {
    id: "44",
    slug: "celebration-journee-femme-rurale-alimentation-ngaye-2023",
    title: "Célébration de la Journée internationale de la femme rurale et de la Journée mondiale de l'alimentation à Ngaye",
    location: "Ngaye — Sénégal",
    excerpt: "NSS et ses organisations membres ont célébré conjointement la Journée internationale de la femme rurale et la Journée mondiale de l'alimentation à Ngaye, au Sénégal.",
    coverUrl: "/images/actualites/journee-femme-rurale-alimentation-ngaye-2023.jpg",
    publishedAt: "2023-11-13",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/celebration-journee-femme-rurale-alimentation-ngaye/",
    robots: "index, follow",
    tags: ["journée femme rurale", "journée mondiale alimentation", "Ngaye", "Sénégal", "NSS", "souveraineté alimentaire", "agroécologie"],
    content: `Chaque année depuis sa création en 2011, le mouvement panafricain Nous Sommes la Solution (NSS) honore les dates du 15 octobre (Journée internationale de la femme rurale) et du 16 octobre (Journée mondiale de l'alimentation).

En 2023, la célébration s'est tenue à Ngaye, au Sénégal, réunissant les organisations membres du mouvement autour de ces deux rendez-vous annuels majeurs pour la cause des femmes rurales et la souveraineté alimentaire en Afrique de l'Ouest.

Ces journées sont l'occasion pour les membres de NSS de renforcer leur communion, de plaider leurs causes auprès des autorités locales et nationales, et de partager leurs expériences de terrain autour de l'agroécologie paysanne, de la nutrition et des droits des femmes rurales.`,
  },

  // ── NSS — Mariama Sonko, activiste agriculture ouest-africaine ─────────
  {
    id: "45",
    slug: "mariama-sonko-activiste-agriculture-ouest-africaine-nss",
    title: "Mariama Sonko : l'activiste qui cherche à transformer l'agriculture ouest-africaine",
    excerpt: "À 52 ans, Mariama Sonko dirige NSS, une organisation réunissant plus de 800 groupes de femmes rurales dans sept pays d'Afrique de l'Ouest. Portrait d'une femme qui promeut l'agroécologie contre l'agriculture industrielle.",
    coverUrl: "/images/actualites/mariama-sonko-agriculture-ouest-africaine.jpg",
    publishedAt: "2023-05-23",
    category: "Portrait",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/mariama-sonko-agriculture-ouest-africaine-nss/",
    robots: "index, follow",
    tags: ["Mariama Sonko", "agroécologie", "agriculture familiale", "Afrique de l'Ouest", "femmes rurales", "semences paysannes", "Sum Pak", "Nous Sommes la Solution"],
    content: `Mariama Sonko représente une force indomitable qui poursuit son travail malgré les obstacles.

Des coquilles roses ornent des filets devant son domicile en Casamance, destinés aux mangroves pour créer des zones de reproduction d'huîtres. Cette méthode durable remplace l'approche traditionnelle qui nuit aux écosystèmes.

À 52 ans, Sonko dirige Nous Sommes la Solution (NSS), une organisation réunissant plus de 800 groupes de femmes rurales couvrant sept pays ouest-africains. Le mouvement promeut l'agriculture durable en opposition à l'industrialisation agricole.

> « En Afrique, nous prônons l'agroécologie et la souveraineté alimentaire. Les femmes sont des agents cruciaux du développement rural. » — Mariama Sonko

La Casamance, surnommée le grenier national du Sénégal, contraste avec les régions arides du nord comme Dakar. Sonko y vit et y cultive « un peu de tout » sur sa ferme de trois hectares, où elle forme aux pratiques agroécologiques et encourage les débats ouverts sur le rôle des femmes dans les exploitations familiales.

Un événement traumatisant survenu il y a une vingtaine d'années illustre les défis rencontrés. Un propriétaire terrien ayant autorisé des femmes à cultiver pendant cinq ans les expulsa lorsque la production devint profitable. Sonko tenta de négocier sans succès, subissant l'ostracisme communautaire pendant deux ans.

> « Les dames travaillent vraiment dur, et elles ne sont pas rémunérées pour leurs efforts. » — Mariama Sonko

Parmi les initiatives remarquables du mouvement figure la fabrication de bio-engrais produit à partir de fumier bovin, ainsi que le Sum Pak, un assaisonnement naturel élaboré à partir d'herbes locales, alternative saine aux cubes bouillon à haute teneur sodée qui favorisent l'hypertension.

Sonko sollicite l'appui gouvernemental pour augmenter la production de Sum Pak et réclame une modification légale autorisant l'utilisation de semences cultivées localement, promouvant ainsi la production territoriale et la souveraineté semencière.`,
  },

  // ── NSS — Sum Pak, alternative aux bouillons industriels ─────────────────
  {
    id: "46",
    slug: "sum-pak-alternative-saine-bouillons-industriels-senegal",
    title: "NSS : préparer une alternative plus saine aux bouillons industriels — le Sum Pak",
    excerpt: "Au Sénégal, la surconsommation de bouillons cubes industriels menace la santé publique. Le mouvement NSS a développé le Sum Pak, un exhausteur de goût naturel à base d'herbes locales et de nététou, sans intrants chimiques.",
    coverUrl: "/images/actualites/sum-pak-alternative-bouillons-industriels.jpg",
    publishedAt: "2023-05-23",
    category: "Alimentation",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/sum-pak-alternative-bouillons-industriels-senegal/",
    robots: "index, follow",
    tags: ["Sum Pak", "bouillons industriels", "alimentation saine", "nététou", "Sénégal", "femmes rurales", "transformation agroalimentaire", "Nous Sommes la Solution"],
    content: `Au Sénégal existe un problème persistant affectant la santé publique : la consommation généralisée de bouillons cubes industriels. Depuis les années 70-80, le marché s'est développé massivement via la publicité télévisée et radiophonique, créant une surconsommation inconsciente dans les ménages sénégalais.

Les cubes contiennent entre 40 et 50 % de l'apport journalier recommandé en sel. Cette consommation excessive provoque l'émergence de maladies cardiovasculaires, d'hypertension et d'insuffisance rénale, auparavant inconnues dans les communautés rurales.

Cette situation a motivé le développement d'une alternative naturelle utilisant des ingrédients traditionnels d'avant les années 70. Les leaders du sud du Sénégal ont collaboré pour promouvoir les aliments sains produits localement.

**Le Sum Pak** est un exhausteur de goût naturel, sans intrants chimiques, riche en protéines et en minéraux. Deux variantes existent : le Shrimp Sum Pak (avec crevettes) et une version contenant du nététou, un condiment fermenté traditionnel tiré des noix de néré.

La fabrication du nététou est un processus très laborieux : ébullition des noix de néré, décorticage manuel, lavage, séchage sur tamis, mouture en poudre, mélange selon recette traditionnelle, assaisonnement au citron et emballage. Cet assaisonnement authentique améliore le goût, fournit des nutriments et crée des emplois pour les femmes productrices. La production locale valorise le savoir-faire ancestral et encourage la préservation des arbres indigènes néré.

Les activités de sensibilisation du mouvement NSS comprennent des ateliers sur les dangers des bouillons industriels, la formation à la production de Sum Pak, des émissions radiophoniques en quatre langues locales et des concours culinaires encourageant l'innovation nutritionnelle.

Le réseau s'étend à sept pays, avec une demande actuellement supérieure à l'offre au Sénégal, démontrant l'acceptation croissante des consommateurs pour ces alternatives naturelles.`,
  },

  // ── NSS — Organisations de femmes rurales, NSS ────────────────────────────
  {
    id: "47",
    slug: "organisations-femmes-rurales-nous-sommes-la-solution-nss",
    title: "Organisations de femmes rurales : Nous Sommes la Solution (NSS)",
    excerpt: "En 2011, douze organisations de femmes rurales du Burkina Faso, du Ghana, de la Guinée, du Mali et du Sénégal se sont réunies pour déclarer « Nous sommes la solution ». Retour sur la naissance et la mission du mouvement.",
    coverUrl: "/images/actualites/organisations-femmes-rurales-nss.jpg",
    publishedAt: "2020-07-24",
    category: "NSS",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/organisations-de-femmes-rurales-nous-sommes-la-solution-nss/",
    robots: "index, follow",
    tags: ["Nous Sommes la Solution", "femmes rurales", "agroécologie", "agriculture familiale", "souveraineté alimentaire", "Afrique de l'Ouest", "gouvernance agricole"],
    content: `En 2011, douze organisations de femmes rurales du Burkina Faso, du Ghana, de la Guinée, du Mali et du Sénégal se sont réunies pour déclarer « Nous sommes la solution ».

Les instigatrices de NSS s'appuient sur les pratiques agricoles et les connaissances détenues par leurs ancêtres depuis des générations pour promouvoir l'agriculture familiale par le biais de l'agroécologie, apporter les leçons de ce travail aux puissants décideurs et promouvoir une meilleure gouvernance agricole.

L'initiative s'est étendue régionalement, obtenant l'approbation et la participation des associations de femmes rurales d'Afrique de l'Ouest. L'organisation promeut sa vision d'une Afrique où les femmes rurales assument des rôles décisionnels dans la production, la transformation, la vente et la consommation de produits agricoles durables.

Aujourd'hui, le mouvement NSS regroupe plus de 800 organisations représentant 175 000 agricultrices dans neuf pays d'Afrique de l'Ouest, et continue de porter la voix des femmes rurales dans les espaces de décision locaux, nationaux et internationaux.`,
  },

  // ── NSS — Entretien Mariama Sonko, voix des agricultrices ────────────────
  {
    id: "48",
    slug: "mariama-sonko-agroecologie-afrique-entretien",
    title: "Entretien avec Mariama Sonko : faire entendre la voix des agricultrices en Afrique de l'Ouest",
    excerpt: "Mariama Sonko, coordinatrice nationale du Sénégal et présidente du mouvement NSS, revient sur ses combats, les défis de l'agriculture familiale face à l'agro-industrie, et la vision d'une Afrique souveraine sur le plan alimentaire.",
    coverUrl: "/images/actualites/mariama-sonko-agroecologie-afrique.jpg",
    publishedAt: "2020-07-24",
    category: "Entretien",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/mariama-sonko-agroecologie-afrique/",
    robots: "index, follow",
    tags: ["Mariama Sonko", "agroécologie", "agriculture familiale", "semences paysannes", "souveraineté alimentaire", "femmes rurales", "Nous Sommes la Solution", "Afrique de l'Ouest"],
    content: `Mariama Sonko réside à Niaguiss, village du sud-ouest sénégalais. Elle a intégré le mouvement en 1990, promouvant les savoirs agricoles locaux. Mère de cinq enfants, elle produit ses propres cultures pour nourrir sa famille. Elle occupe les postes de trésorière de l'AJAC Lukaal, de coordinatrice nationale sénégalaise et de présidente du mouvement international Nous Sommes la Solution (NSS).

> « L'accent mis sur l'agriculture conventionnelle, une politique agro-industrielle qui nous est imposée par les multinationales » représente le principal combat de Mariama Sonko. Cette approche s'oppose à l'agriculture familiale et à l'agroécologie qui ont toujours soutenu la souveraineté alimentaire en Afrique.

L'organisation pratique l'agroécologie et l'agriculture familiale, encourageant la souveraineté alimentaire, les semences paysannes et la biodiversité. Le mouvement Nous Sommes la Solution est né d'une campagne lancée en 2011 qui est devenue un mouvement de femmes rurales en 2014. Les capacités renforcées incluent la conscience agroécologique, la communication d'alternatives, le développement institutionnel, la mobilisation de ressources et les échanges d'expériences.

Le réseau comprend environ 800 associations de femmes rurales dans sept pays d'Afrique occidentale : Burkina Faso, Gambie, Ghana, Guinée, Guinée-Bissau, Mali et Sénégal.

> « Le soutien des hommes que nous avons amenés à ce mouvement de femmes rurales, parce qu'ils comprennent le sens et la portée de notre combat, ainsi que la gestion efficace de NSS par les femmes rurales africaines. » — Mariama Sonko, sur les réussites du mouvement

Les défis identifiés incluent l'accès aux semences paysannes, l'accès à la terre, la maîtrise de l'eau, une alimentation saine, l'énergie solaire et la gouvernance transparente. L'agriculture industrielle est désignée comme « la principale cause de la dégradation des terres arables ».

Pour être efficaces, les militantes doivent être informées, structurées, représentées aux réunions décisionnelles et unies. Elles doivent modéliser les bonnes pratiques agroécologiques, maîtriser les défis agricoles, cultiver la solidarité et transmettre aux jeunes l'importance de la qualité alimentaire et du rapport à la nature.

> « Une Afrique où, solidairement, les paysans sont associés aux décisions, et cultivent, transforment, consomment et vendent les produits de l'agriculture familiale africaine tout en préservant l'environnement pour un développement harmonieux. » — Mariama Sonko, vision du succès`,
  },

  // ── Agridigitale — Mariama Sonko gardienne des semences, Bénin 2023 ───────
  {
    id: "49",
    slug: "mariama-sonko-gardienne-semences-paysannes",
    title: "Mariama Sonko, gardienne des semences paysannes",
    location: "Zoungbonou — Bénin",
    excerpt: "À la 3ème Foire ouest-africaine des semences paysannes à Zoungbonou (Bénin), Mariama Sonko rappelle que les femmes africaines sont les véritables gardiennes des semences locales — et que la souveraineté alimentaire passe d'abord par leur reconquête.",
    coverUrl: "/images/actualites/mariama-sonko-gardienne-semences.jpg",
    publishedAt: "2023-03-10",
    category: "Presse",
    author: "Florent Hounkpati",
    sourceName: "Agridigitale",
    sourceUrl: "https://agridigitale.net/article/mariama-sonko-gardienne-des-semences-paysannes",
    canonical: "https://agridigitale.net/recherche/MARIAMA%20SONKO",
    robots: "index, follow",
    tags: ["Mariama Sonko", "semences paysannes", "souveraineté alimentaire", "Nous Sommes la Solution", "agroécologie", "femmes rurales", "Afrique de l'Ouest", "Bénin"],
    content: `Créé en 2011 par 12 organisations de femmes rurales, le mouvement « Nous Sommes la Solution » (NSS) compte à ce jour 175 000 membres à travers l'Afrique de l'Ouest. Il œuvre pour une Afrique où, dans la solidarité, les femmes rurales sont impliquées dans la prise de décisions, cultivant, transformant, vendant et consommant les produits de l'agriculture familiale tout en préservant l'environnement.

> « C'est un mouvement qui est porté par des associations de femmes rurales pour promouvoir l'agroécologie et aller vers une souveraineté alimentaire. Et par rapport à nos axes d'intervention, nous avons la valorisation de la semence locale. » — Mariama Sonko, responsable du mouvement NSS au Sénégal

« Nous ne pouvons pas être souverains sans posséder nos propres semences, et ce sont ces semences qui nous lient à nos traditions, nos cultures », ajoute Mme Sonko.

Les pratiques d'agriculture conventionnelle ont transformé les habitudes de production, faisant place à une dévalorisation des pratiques ancestrales et donc des semences paysannes.

> « En Afrique, on dit que la femme, c'est la gardienne de la semence. Mais ce sont les femmes ancestrales qui l'étaient. Nous, les femmes d'aujourd'hui, nous avons été transformées par l'agriculture conventionnelle et nous sommes en déroute. » — Mariama Sonko

Pour changer, les femmes du mouvement NSS se mobilisent autour de la collecte, de la production, de la conservation et de la valorisation des semences paysannes. À cette 3ème Foire ouest-africaine des semences paysannes à Zoungbonou (sud-ouest du Bénin), elles animent une série d'activités de sensibilisation pour renforcer la dynamique de l'adoption des semences paysannes par les communautés.

*Florent Hounkpati depuis Zoungbonou, Bénin.*`,
  },

  // ── Agridigitale — femmes gardiennes des semences, Mariama Sonko ─────────
  {
    id: "34",
    slug: "femmes-africaines-gardiennes-semences-mariama-sonko-nss",
    title: "Les femmes africaines, gardiennes des semences",
    excerpt: "En Afrique, les femmes ne se sont jamais contentées de cultiver ou de conserver des graines. Elles ont façonné des savoirs, des pratiques et des valeurs intimement liées à la terre. Mariama Sonko, présidente du mouvement NSS, porte cette conviction au cœur du débat sur la souveraineté alimentaire.",
    coverUrl: "/images/actualites/femmes-africaines-gardiennes-semences.jpg",
    publishedAt: "2025-12-12",
    category: "Presse",
    author: "Agridigitale",
    sourceName: "Agridigitale",
    sourceUrl: "https://www.agridigitale.net/article/les-femmes-africaines-gardiennes-des-semences",
    canonical: "https://www.agridigitale.net/article/les-femmes-africaines-gardiennes-des-semences?fbclid=IwY2xjawRJm9JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEoPNIGLxjzPXacMW71_naKU7wShUl2RJfKWfWCg6ISHIJXWF_kuzEQWyTJ0_aem_wLRuAcdXiovDXrBz62gYiA",
    robots: "index, follow",
    tags: ["femmes rurales", "semences paysannes", "souveraineté alimentaire", "Mariama Sonko", "Nous Sommes la Solution", "agroécologie", "Afrique de l'Ouest", "savoirs endogènes"],
    content: `En Afrique, les femmes ne se sont jamais contentées de cultiver ou de conserver des graines. Elles ont façonné des savoirs, des pratiques, des traditions et des valeurs intimement liées à la terre et à l'identité des communautés rurales.

La présidente du mouvement panafricain Nous Sommes la Solution, Mariama Sonko, souligne qu'en Afrique de l'Ouest, les femmes continuent de sélectionner, conserver, nommer et transmettre des variétés locales adaptées aux terroirs. Ce patrimoine agricole, souvent invisible dans les statistiques officielles, représente pourtant une richesse immense.

> « Pour nous, chaque semence porte une histoire, une mémoire et une valeur culturelle profondément ancrée dans les communautés. En Afrique, les femmes sont les gardiennes des semences. C'est elles qui détiennent les savoirs et savoir-faire de ces semences paysannes. » — Mariama Sonko

Pour mieux s'affirmer et porter haut leurs voix, ces femmes ont invité les communautés à mieux connaître leur semence — non seulement comme aliment, mais comme produit qui relie chaque paysan à son identité, sa tradition, ses valeurs. Elles ont ainsi créé le mouvement panafricain Nous Sommes la Solution, qui promeut l'agroécologie et les droits de la femme rurale.

Pour la Sénégalaise Mariama Sonko, les femmes sont les gardiennes du passé, mais aussi les guides vers un avenir où l'Afrique pourra nourrir son peuple en s'appuyant sur ses propres ressources, ses propres valeurs et ses propres identités.`,
  },

  // ── Kindia 2025 — rencontre pan-africaine NSS, 10 pays, AG ──────────────
  {
    id: "33",
    slug: "kindia-rencontre-panafricaine-femmes-rurales-nss-2025",
    title: "Kindia, carrefour du leadership paysan féminin en Afrique",
    location: "Kindia — Guinée",
    excerpt: "Comment un mouvement de femmes rurales construit-il une force continentale sans perdre son ancrage local ? À Kindia, en Guinée, dix pays africains ont répondu avec des bilans concrets, des échanges de terrain et une gouvernance assumée.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776073305/Rencontre_Annuelle_NSS_13_md84yl.webp",
    publishedAt: "2025-11-25",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/kindia-rencontre-panafricaine-femmes-rurales-nss-2025",
    robots: "index, follow",
    tags: ["femmes rurales", "Nous Sommes la Solution", "Kindia", "Guinée", "pan-africain", "leadership féminin", "agroécologie", "souveraineté alimentaire"],
    cloudinaryGalleryCaption: "Kindia, Guinée — Rencontre annuelle NSS, novembre 2025",
    cloudinaryImages: [
      "Rencontre_Annuelle_NSS_1_wjyfc8",
      "Rencontre_Annuelle_NSS_2_xljei0",
      "Rencontre_Annuelle_NSS_3_vwbrut",
      "Rencontre_Annuelle_NSS_4_bjslhg",
      "Rencontre_Annuelle_NSS_5_yc1l4j",
      "Rencontre_Annuelle_NSS_6_mfv586",
      "Rencontre_Annuelle_NSS_7_ewlje0",
      "Rencontre_Annuelle_NSS_8_vuoosu",
      "Rencontre_Annuelle_NSS_9_rtga35",
      "Rencontre_Annuelle_NSS_10_b9fxqe",
      "Rencontre_Annuelle_NSS_11_q7s9ma",
      "Rencontre_Annuelle_NSS_12_zstwlr",
      "Rencontre_Annuelle_NSS_13_md84yl",
      "Rencontre_Annuelle_NSS_14_py7oje",
      "Rencontre_Annuelle_NSS_15_g6km1r",
      "Rencontre_Annuelle_NSS_16_eocwsf",
      "Rencontre_Annuelle_NSS_17_zcxkhg",
      "Rencontre_Annuelle_NSS_18_pv8dvb",
      "Rencontre_Annuelle_NSS_19_dqnzux",
      "Rencontre_Annuelle_NSS_20_qhgien",
    ],
    content: `Comment un mouvement de femmes rurales construit-il une force continentale sans perdre son ancrage local ? À Kindia, en Guinée, dix pays africains ont répondu à cette question non pas avec des discours, mais avec des bilans concrets, des échanges de terrain et une gouvernance assumée. Ce qui se joue ici dépasse le cadre d'une réunion annuelle.

## Kindia, ville-symbole d'un mouvement qui s'ancre en Guinée

Choisir Kindia, ville agricole de la Guinée centrale, n'est pas anodin. C'est affirmer que le centre de gravité du mouvement NSS n'est pas dans les capitales ni dans les organisations internationales — il est dans les terres cultivées, là où les femmes rurales font face chaque saison aux mêmes défis de semences, d'accès au foncier et de prix au marché. Réunir dix délégations nationales dans cet espace, c'est poser un acte de décentralisation symbolique : la légitimité du mouvement pan-africain se construit depuis les champs, pas depuis les bureaux. La rencontre annuelle de novembre 2025 marque ainsi un ancrage géographique fort, qui dit quelque chose de la trajectoire stratégique de NSS — aller chercher ses forces là où elles sont réellement.

## Dix pays, une seule parole collective

La présentation des rapports et bilans par les différentes Associations de Femmes Rurales n'est pas un exercice bureaucratique. C'est un moment rare où des coordinatrices venues du Sénégal, du Mali, du Burkina Faso, de Guinée et des sept autres pays membres peuvent confronter leurs réalités, mesurer ce qui fonctionne, identifier ce qui achoppe. Les échanges de bonnes pratiques qui suivent ne sont pas du transfert descendant de savoirs — ils sont une mise en commun horizontale entre pairs qui partagent les mêmes contraintes climatiques, les mêmes résistances institutionnelles et les mêmes leviers d'action. Cette dynamique humaine, dense et diverse, est précisément ce qui donne au mouvement NSS sa cohérence au-delà des frontières.

## Une assemblée générale comme acte de gouvernance souveraine

La tenue de l'Assemblée Générale au cœur de cette rencontre n'est pas une formalité statutaire. C'est l'affirmation que le mouvement NSS se gouverne lui-même, collectivement, depuis ses membres — et non depuis des partenaires extérieurs ou des bailleurs. Dans un contexte où les organisations paysannes africaines sont souvent fragilisées par leur dépendance aux financements internationaux, cette capacité à se doter d'instances décisionnelles propres est une force structurelle. Elle dit que NSS construit, sur le long terme, non seulement des systèmes alimentaires plus justes et résilients, mais aussi une architecture organisationnelle capable de les porter dans la durée.

---

*Ce que les dix délégations décident à Kindia cette semaine tracera les priorités du mouvement pour 2026 — et les prochains posts de terrain en seront les premiers témoins.*

[[GALLERY]]`,
  },

  // ── Toma 2025 — Burkina Faso, femmes rurales, plaidoyer souveraineté ─────
  {
    id: "32",
    slug: "femmes-rurales-toma-agroecologie-burkina-2025",
    title: "À Toma, les gardiennes du vivant ont pris la parole",
    location: "Toma — Burkina Faso",
    excerpt: "Qui nourrit réellement les campagnes du Sahel ? Le 22 novembre 2025 à Toma, l'Union Nous Sommes la Solution du Burkina Faso a transformé une journée commémorative en acte politique — rappelant que la reconnaissance ne suffit pas là où il faut des ressources.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776072667/Journ%C3%A9e_de_l_Alimentation_de_la_Femme_Rurale_12_rsnzjj.webp",
    publishedAt: "2025-11-22",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/femmes-rurales-toma-agroecologie-burkina-2025",
    robots: "index, follow",
    tags: ["femmes rurales", "agroécologie", "souveraineté alimentaire", "Burkina Faso", "Toma", "Nous Sommes la Solution", "émancipation", "plaidoyer"],
    cloudinaryGalleryCaption: "Toma, Burkina Faso — Journée mondiale de l'alimentation et de la Femme rurale, novembre 2025",
    cloudinaryImages: [
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_1_unkrfe",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_2_hp309f",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_3_tawlqb",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_4_bb7hap",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_5_xxl6mm",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_6_wkwppx",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_7_n3jll8",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_8_nwahtk",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_9_vbek2w",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_10_vgmgf7",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_11_rsb0kv",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_12_rsnzjj",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_13_sgyrbo",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_14_x7zk49",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_15_fqfro6",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_16_mzwm7r",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_17_u2s9gd",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_18_dk0zq9",
      "Journée_de_l_Alimentation_de_la_Femme_Rurale_19_ibltif",
    ],
    content: `Qui nourrit réellement les campagnes du Sahel ? Derrière les chiffres de la production agricole, ce sont des femmes qui sèment, transforment et transmettent. Le 22 novembre 2025 à Toma, l'Union Nous Sommes la Solution du Burkina Faso a transformé une journée commémorative en acte politique — rappelant que la reconnaissance ne suffit pas là où il faut des ressources.

## Célébrer en différé, revendiquer en avance

Il y a quelque chose de délibéré dans le fait de célébrer « en différé » la Journée mondiale de l'alimentation et de la Femme rurale. Ce n'est pas un retard : c'est une appropriation. Les femmes de l'Union NSS n'ont pas attendu une date imposée par un agenda international pour se réunir sous la présidence du Ministre de l'Agriculture — elles ont choisi leur moment, leur lieu, leur scène. À Toma, ville de la province du Nayala, cet événement incarne la capacité du mouvement paysan à s'inscrire dans les institutions tout en gardant son propre rythme. La présence d'un ministre n'est pas un satisfecit accordé d'en haut : c'est le résultat d'un rapport de force construit dans la durée.

## La Présidente, entre hommage et injonction

La prise de parole de la Présidente de l'Union n'a pas suivi la rhétorique convenue des discours commémoratifs. En saluant l'engagement et la résilience des femmes rurales, elle a refusé de les cantonner au rôle de symboles. En les nommant « véritables gardiennes de l'agroécologie et de la souveraineté alimentaire », elle a posé une légitimité technique et politique — pas seulement morale. Et le plaidoyer qu'elle a lancé — pour un accompagnement technique, matériel et financier — transforme l'hommage en revendication concrète. On ne célèbre pas pour s'en tenir là ; on célèbre pour exiger davantage.

> « La véritable émancipation des femmes, c'est celle qui leur permet d'assumer toutes leurs responsabilités. » — Thomas Sankara

## Sankara comme boussole, l'autonomie comme horizon

Convoquer Thomas Sankara dans ce contexte n'est pas un geste nostalgique. C'est un ancrage idéologique qui dit quelque chose de précis sur la vision du mouvement : l'émancipation ne se décrète pas, elle se construit dans la capacité réelle d'agir. Pour les femmes rurales du Burkina, cette capacité passe par la terre, les semences, les savoirs agroécologiques — et par les moyens de les faire valoir. Le mot « déterminées » que l'Union choisit pour clore son message n'est pas une formule de politesse : c'est la déclaration d'un mouvement qui sait où il va et qui mesure le chemin qu'il reste à parcourir vers des communautés plus autonomes, plus fortes et plus durables.

---

*Dans les prochaines semaines, d'autres unions régionales porteront leurs propres bilans de terrain — autant d'occasions de mesurer ce que ce plaidoyer de Toma a déjà commencé à changer.*

[[GALLERY]]`,
  },

  // ── Mali 2025 — journée femme rurale, plaidoyer politique ───────────────
  {
    id: "29",
    slug: "mali-2025-nss-femmes-rurales-journee-internationale-alimentation",
    title: "Au Mali, NSS transforme une journée commémorative en acte politique",
    location: "Mali",
    excerpt: "Célébrer ne suffit pas — encore faut-il que la célébration ouvre des portes. Au Mali, NSS a fait de la Journée Internationale de la Femme Rurale et de la Journée Mondiale de l'Alimentation un moment de plaidoyer concret, en réunissant femmes paysannes, ministères et autorités locales.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776018242/NSS_-_Mali_2025_C%C3%A9l%C3%A9bration_de_la_Journ%C3%A9e_de_la_Femme_Rurale_et_de_l_Alimentation_10_ajjsov.webp",
    publishedAt: "2025-10-15",
    category: "Événement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/mali-2025-nss-femmes-rurales-journee-internationale-alimentation",
    robots: "index, follow",
    tags: ["NSS Mali", "Femmes rurales Mali", "Souveraineté alimentaire", "Journée femme rurale", "Agroécologie", "Plaidoyer", "Nous Sommes la Solution", "Afrique de l'Ouest"],
    cloudinaryImages: [
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_1_slprtl",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_2_p05cxo",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_3_d0mrnw",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_4_hlucos",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_5_hcfbwo",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_6_lmla0m",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_7_qcbfdu",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_8_ocqryb",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_9_xoepxa",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_10_ajjsov",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_11_ttk3dv",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_12_uwxuio",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_13_f1qkqe",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_14_vhfnmy",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_15_yzspvs",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_16_zmb4ue",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_17_tv7tdr",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_18_o3emjh",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_19_efmo86",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_20_j15jwk",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_21_soh9if",
      "NSS_-_Mali_2025_Célébration_de_la_Journée_de_la_Femme_Rurale_et_de_l_Alimentation_22_hgd0mb",
    ],
    cloudinaryGalleryCaption: "Mali, Journée Internationale de la Femme Rurale — octobre 2025",
    content: `Célébrer ne suffit pas — encore faut-il que la célébration ouvre des portes. Au Mali, le mouvement NSS a fait de la Journée Internationale de la Femme Rurale et de la Journée Mondiale de l'Alimentation un moment de plaidoyer concret, en réunissant dans une même salle femmes paysannes, ministères et autorités locales. Une configuration rare qui dit beaucoup sur la maturité politique du mouvement.

## Une fête qui interpelle le pouvoir

Il y a une différence entre commémorer une journée internationale et s'en saisir comme levier d'influence. Au Mali, NSS a clairement choisi la seconde option. En réunissant autour de la même table les ministères de l'Agriculture, de l'Environnement et de la Promotion de la Femme, les interprofessions et les autorités communales, le mouvement a transformé un événement symbolique en espace de négociation politique.

Réaffirmer son plaidoyer auprès des plus hautes autorités du pays pour renforcer le rôle des femmes rurales dans le développement durable, ce n'est pas un discours de circonstance — c'est une stratégie d'influence construite sur plusieurs années de présence terrain et de légitimité paysanne.

## Des femmes leaders qui prennent la parole

Ce qui frappe dans le récit de cette journée, c'est l'énergie des échanges. Les femmes leaders du Mali, membres du mouvement NSS, n'étaient pas là pour recevoir des hommages — elles étaient là pour partager, débattre et transmettre. Les communications riches, les retours d'expériences et les moments de solidarité qui ont ponctué ces deux journées témoignent d'un réseau vivant, où la parole des femmes rurales n'est pas un accessoire mais le cœur du dispositif.

C'est cette capacité à produire de la connaissance collective, à partir du terrain et non depuis les bureaux, qui distingue NSS des organisations classiques de développement.

## Ce que le Mali révèle de la stratégie NSS

En mobilisant simultanément la société civile, les institutions étatiques et les organisations de femmes rurales, NSS démontre qu'il est devenu un acteur incontournable du débat alimentaire au Mali. Cette capacité à agréger des parties prenantes aussi diverses — des ministères aux autorités communales en passant par les interprofessions — est le fruit d'un travail de long terme, fondé sur la crédibilité et la présence constante sur le terrain.

Ce que Bamako confirme en octobre 2025, c'est que NSS n'est plus seulement un réseau de femmes paysannes : c'est une force de proposition politique capable de peser sur les décisions qui façonnent l'avenir alimentaire du pays.

Les engagements pris lors de cette journée au Mali s'inscrivent dans la dynamique régionale portée par NSS — rendez-vous sur notre blog pour suivre les suites concrètes de ce plaidoyer auprès des autorités maliennes.

[[GALLERY]]`,
  },

  // ── Tambacounda 2025 — femmes rurales, 3 pays ────────────────────────────
  {
    id: "28",
    slug: "tambacounda-2025-femmes-rurales-souverainete-alimentaire-nss",
    title: "À Tambacounda, trois pays unis pour dire que les femmes rurales nourrissent l'Afrique",
    location: "Tambacounda — Sénégal",
    excerpt: "Les 15 et 16 octobre 2025, Guinée-Bissau, Gambie et Sénégal se sont réunis à Tambacounda pour célébrer la femme rurale et le droit à l'alimentation — un message porté depuis les territoires, pas depuis les capitales.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776016032/NSS_Tambacounda_2025_-_Femmes_rurales_et_souverainet%C3%A9_alimentaire_ensemble_13_udamj2.jpg",
    publishedAt: "2025-10-15",
    category: "Mouvement",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/tambacounda-2025-femmes-rurales-souverainete-alimentaire-nss",
    robots: "index, follow",
    tags: ["Femmes rurales", "Souveraineté alimentaire", "NSS", "Tambacounda", "Journée mondiale alimentation", "Agroécologie", "Afrique de l'Ouest", "Autonomisation", "Guinée-Bissau", "Gambie", "Sénégal"],
    videoUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776016191/NSS_Tambacounda_2025_-_Femmes_rurales_et_souverainet%C3%A9_alimentaire_ensemble_1_lcaqt8.mp4",
    cloudinaryImages: [
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_1_p6az3e",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_2_ulpuus",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_3_eqvhsv",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_4_bpuw5l",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_5_fu6psk",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_6_gkczch",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_7_pzwwe1",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_8_ibb7jh",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_9_t63vch",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_10_lu3xef",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_11_dbys7y",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_12_dhbkug",
      "NSS_Tambacounda_2025_-_Femmes_rurales_et_souveraineté_alimentaire_ensemble_13_udamj2",
    ],
    cloudinaryGalleryCaption: "Tambacounda, 15–16 octobre 2025",
    content: `Deux journées, deux thèmes, une conviction commune : sans les femmes rurales, il n'y a pas de souveraineté alimentaire possible. Les 15 et 16 octobre 2025, la capitale du Sénégal oriental a accueilli une célébration rare — celle d'un mouvement panafricain qui choisit de commémorer non pas depuis les capitales, mais depuis les territoires où se joue réellement l'avenir alimentaire du continent.

## Tambacounda, un choix politique autant que géographique

Choisir Tambacounda pour célébrer à la fois la Journée Internationale de la Femme Rurale et la Journée Mondiale de l'Alimentation n'est pas un hasard. Ville-carrefour du Sénégal oriental, aux portes du Sahel, Tambacounda incarne précisément les tensions que ces deux journées cherchent à résoudre : pression foncière, changement climatique, migrations rurales et fragilité des systèmes alimentaires locaux.

En s'y réunissant sous les thèmes de la justice réparatrice et d'un avenir alimentaire partagé, le mouvement NSS affirme que la réponse à ces crises ne viendra pas des sommets internationaux, mais des femmes qui travaillent la terre chaque jour et qui transmettent les savoirs d'une génération à l'autre.

[[VIDEO]]

## Trois pays, une seule voix paysanne

La présence simultanée de délégations de Guinée-Bissau, de Gambie et du Sénégal dit quelque chose d'essentiel sur la nature du mouvement NSS : la solidarité ne s'arrête pas aux frontières héritées de la colonisation.

Ces femmes rurales, venues de trois pays aux langues et aux histoires différentes, ont partagé pendant deux jours leurs expériences, exposé leurs productions locales et échangé sur leurs pratiques agroécologiques. Cette circulation des savoirs entre pairs — **sans hiérarchie, sans expertise descendante** — est au cœur de ce que NSS construit depuis plus de dix ans : un réseau de femmes qui se forment mutuellement et qui renforcent collectivement leur capacité à nourrir leurs communautés.

> La Journée Internationale de la Femme Rurale et la Journée Mondiale de l'Alimentation ne sont pas deux événements séparés — elles disent la même chose : nourrir le monde, c'est d'abord reconnaître celles qui le font.

## Ce que Tambacounda 2025 annonce pour le mouvement

Réunir trois pays autour de journées internationales, c'est aussi envoyer un message aux institutions et aux bailleurs : **NSS n'attend pas les agendas extérieurs pour agir.** Le mouvement crée ses propres espaces de visibilité, ancre ses revendications dans des lieux concrets et construit une diplomatie paysanne transfrontalière qui préfigure ce que pourrait être une gouvernance alimentaire véritablement africaine.

En articulant autonomisation des femmes et justice réparatrice, NSS pose une équation claire : réparer les inégalités du passé passe par donner aux femmes rurales les moyens — fonciers, techniques et politiques — de décider de l'avenir alimentaire de leurs territoires.

Les résolutions issues des deux journées de Tambacounda alimenteront les travaux du prochain forum régional NSS — suivez notre blog pour le compte-rendu complet des échanges et des engagements pris par les délégations.

[[GALLERY]]`,
  },

  // ── Niaguis — plaidoyer politique agroécologie ────────────────────────────
  {
    id: "25",
    slug: "niaguis-femmes-rurales-agroecologie-paysanne-plaidoyer-ouest-africain",
    title: "À Niaguis, soixante voix rurales exigent que l'agroécologie devienne loi",
    location: "Niaguis, Casamance — Sénégal",
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
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "Du 14 au 21 septembre 2025, la FENOP a envoyé deux de ses représentantes au CIFAP à Niaguis — un geste fort qui dit beaucoup sur la stratégie du mouvement paysan burkinabè face aux défis de la souveraineté alimentaire.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1776001698/Nous_sommes_la_solution_-_Fenop_1_r9gqhc.jpg",
    publishedAt: "2025-09-14",
    category: "Formation",
    author: "NSS — Nous Sommes la Solution",
    canonical: "https://wasafrica.org/fr/ressources/actualites/cifap-2025-fenop-niaguis-senegal-formation-agroecologie",
    robots: "index, follow",
    tags: ["CIFAP 2025", "FENOP", "Agroécologie paysanne", "Femmes rurales", "Niaguis", "Sénégal", "Horticulture", "NSS", "Formation", "Burkina Faso"],
    cloudinaryGalleryCaption: "Photos du CIFAP 2025 — FENOP & mouvement NSS",
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
    location: "Niaguis, Casamance — Sénégal",
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
    location: "Niaguis, Casamance — Sénégal",
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
    cloudinaryGalleryCaption: "Photos du CIFAP 2025 — Formation agroécologique",
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
    location: "Ziguinchor — Sénégal",
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
    location: "Niaguis, Casamance — Sénégal",
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
    coverUrl: "/images/actualites/nss-cifap-2025.jpg",
    publishedAt: "2025-09-17",
    category: "Formation",
    author: "Mouvement NSS",
    tags: ["CIFAP 2025", "Agroécologie paysanne", "NSS", "Niaguis", "Horticulture", "Formation", "Femmes rurales", "Afrique de l'Ouest"],
    stats: [
      { label: "Participants", value: "~70" },
      { label: "Pays",         value: "8" },
      { label: "Édition",      value: "4e" },
    ],
    cloudinaryGalleryCaption: "Photos du CIFAP 2025 — Niaguis, Casamance",
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
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "À Niaguis, des femmes rurales de huit pays d'Afrique de l'Ouest se réunissent au CIFAP 2025 pour porter un plaidoyer commun en faveur de l'agroécologie paysanne et de la souveraineté alimentaire.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775575693/femmes_rurales_d_Afrique_de_l_Ouest_plaident_pour_l_agro%C3%A9cologie_paysanne_6_ithmd3.webp",
    publishedAt: "2025-09-21",
    category: "Formation",
    author: "NSS — Nous Sommes la Solution",
    tags: ["CIFAP 2025", "Agroécologie paysanne", "NSS", "Niaguis", "Souveraineté alimentaire", "Femmes rurales", "Afrique de l'Ouest", "Plaidoyer"],
    cloudinaryGalleryCaption: "Photos du CIFAP 2025 — Plaidoyer des femmes rurales",
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
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "Ouverture du CIFAP 2025 à Niaguis : la 4ᵉ édition du Camp International de Formation sur l'Agroécologie Paysanne réunit producteurs, femmes leaders et acteurs ruraux de toute l'Afrique de l'Ouest.",
    coverUrl: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775561753/Ouverture_de_la_4%E1%B5%89_%C3%A9dition_du_CIFAP_%C3%A0_Niaguis_lqfakd.webp",
    publishedAt: "2025-09-15",
    category: "Formation",
    author: "Mouvement NSS",
    tags: ["CIFAP", "Agroécologie paysanne", "Niaguis", "Formation agricole", "Horticulture", "Afrique de l'Ouest", "Agriculture durable"],
    robots: "index, follow",
    cloudinaryGalleryCaption: "Photos du CIFAP 2025 — Ouverture",
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
    id: "30",
    slug: "tamba-femmes-rurales-premiere-ligne-changement-climatique-lesoleil",
    title: "Tamba : les femmes rurales en première ligne face au changement climatique",
    location: "Tambacounda — Sénégal",
    excerpt: "À Tambacounda, le mouvement NSS a célébré la Journée internationale de la femme rurale en mettant en lumière la résilience des agricultrices face au changement climatique et leur rôle central dans la transition agroécologique.",
    coverUrl: "/images/actualites/tamba-femmes-rurales-changement-climatique.webp",
    publishedAt: "2025-10-17",
    category: "Presse",
    author: "Boubacar Agna CAMARA",
    sourceName: "Le Soleil",
    canonical: "https://lesoleil.sn/actualites/societe-fait-divers/tamba-les-femmes-rurales-en-premiere-ligne-face-au-changement-climatique/",
    tags: ["Changement climatique", "Femmes rurales", "Tambacounda", "Résilience", "Agroécologie", "NSS", "Journée internationale de la femme rurale"],
    coverCaption: "Journée internationale de la femme rurale à Tambacounda — © Le Soleil / Boubacar Agna CAMARA",
    content: `Ce mercredi 15 octobre, l'association sous régionale Nous Sommes la Solution (NSS), a célébré à Tambacounda, la journée internationale de la femme rurale. Lors de celle-ci, la résilience des femmes du monde rural face aux impacts du changement climatique, dans le secteur agricole, a été notée. « En tant qu'agricultrices, les femmes rurales ont appris à faire face et à s'adapter aux changements climatiques », indique la présidente du mouvement au niveau national et sous-régional, madame Mariama Sonko.

Selon cette dernière, cette adaptation est visible à travers la pratique d'une agriculture en harmonie avec la nature, l'agroécologie, mais également avec la préservation des semences résilientes aux changements climatiques. Elle concerne aussi l'emploi de techniques de gestion des sols écologiques ou biologiques, ou encore les efforts de reboisement et de restauration réalisés à l'échelle de la communauté.

Cette journée célébrée dans la capitale du Sénégal oriental a enregistré la présence des délégations des coordinations de NSS en Gambie et en Guinée-Bissau. Pour Mme Sonko, les femmes rurales ont été à l'avant-garde de la conservation de l'environnement en apportant des connaissances et des pratiques ancestrales inestimables. Celles-ci ont été à la tête de mouvements climatiques mondiaux et nationaux qui ont mis en lumière l'urgence de la crise climatique et la nécessité d'agir pour le bien-être de cette génération et des générations futures, ajoute-t-elle.

C'est dans cette optique que le mouvement panafricain invite toutes les parties prenantes à célébrer le rôle essentiel des femmes rurales dans le renforcement de la résilience climatique, la conservation de la biodiversité et le soin des terres. Car, selon la présidente, les changements climatiques, la perte de la biodiversité et la dégradation des terres affectent les droits, la résilience et les ressources des femmes et des filles rurales.`,
  },

  // ── Scoops de Ziguinchor — NSS CIFAP 3e édition bio-protecteurs ──────────
  {
    id: "31",
    slug: "nss-cifap-3e-edition-bio-protecteurs-agroecologie-niaguis-2024",
    title: "Nous Sommes La Solution (NSS) mise sur les bio-protecteurs en agroécologie",
    location: "Niaguis, Casamance — Sénégal",
    excerpt: "La 3e édition du Camp International de Formation en Agroécologie Paysanne (CIFAP) a réuni 14 associations de femmes rurales ouest-africaines à Niaguis autour des techniques de production et d'utilisation des bio-protecteurs en agroécologie.",
    coverUrl: "/images/actualites/nss-cifap-3e-edition-bio-protecteurs.jpg",
    publishedAt: "2024-09-08",
    category: "Formation",
    author: "Tapha I Badji",
    sourceName: "Scoops de Ziguinchor",
    canonical: "https://scoopsdeziguinchor.com/ziguinchor-3eme-edition-cifap-a-niaguis-le-mouvement-nous-sommes-la-solution-nss-mise-sur-les-bio-protecteurs-en-agroecologie/",
    tags: ["CIFAP", "Bio-protecteurs", "Agroécologie", "Niaguis", "Femmes rurales", "NSS", "Formation", "Afrique de l'Ouest"],
    coverCaption: "3e édition du CIFAP à Niaguis — © Scoops de Ziguinchor / Tapha I Badji",
    videoUrls: [
      "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776020349/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Niaguis_Mouvement_NSS_Iya_Diakit%C3%A9_Coordonnatrice_Mvt_NSS_Mali_gkeoco.mp4",
      "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776021074/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Mouvement_NSS_Mme_Mariama_Sonko_Pr%C3%A9sidente_NSS_2_adfoi0.mp4",
    ],
    content: `La 3ème édition du Camp International de Formation en Agroécologie Paysanne (CIFAP) organisé du 1er au 7 septembre 2024 au Centre Karonghen Wati Naning de Niaguis a, cette année encore, mobilisé des membres de 14 associations de femmes rurales ouest-africaines. Des actrices de développement qui ont eu droit à des séances d'échanges et de partage axées sur « Les techniques de production et d'utilisation des bio-protecteurs en agroécologie » — thème de cette 3ème édition. Un thème qui s'inscrit dans une suite logique d'un schéma élaboré et mis en branle par le Mouvement Nous Sommes La Solution.

Après une 1ère édition qui avait trait aux techniques de conduite des cultures en agroécologie paysanne et sur la production et l'utilisation des bio-intrants, puis une 2ème édition axée sur la production des semences horticoles maraîchères paysannes, le Mouvement Nous Sommes La Solution a, dans le cadre de la 3ème édition de son Camp International de Formation en Agroécologie Paysanne (CIFAP), misé sur les techniques de production et d'utilisation des bio-protecteurs en agroécologie. D'une durée de 5 jours, ce Camp de formation dont la cérémonie d'ouverture a été présidée le lundi dernier par l'autorité sous-préfectorale de Niaguis, a regroupé cette année une cinquantaine de participantes — des représentantes de 14 associations des femmes rurales d'Afrique de l'Ouest, membres du Mouvement NSS.

> Les bio-protecteurs permettent non seulement d'avoir une bonne production, mais aussi une production de qualité avec tous les nutriments nécessaires pour une bonne alimentation. — Mariama Sonko, présidente du Mouvement NSS

[[VIDEO_1]]

S'exprimant au nom des participantes membres du Mouvement NSS, Iya Diakité, coordinatrice du mouvement NSS au Mali, a exhorté la gent féminine africaine à s'investir davantage dans la pratique de l'agroécologie paysanne — gage, selon elle, pour l'atteinte de la souveraineté alimentaire.

[[VIDEO_2]]

Pour rappel, c'est en 2011 que douze organisations de femmes rurales du Burkina Faso, du Ghana, de la Guinée, du Mali et du Sénégal se sont réunies pour mettre sur les fonts baptismaux le Mouvement Nous Sommes La Solution (NSS). Une organisation qui entend miser sur les pratiques agricoles et les connaissances ancestrales pour promouvoir l'agriculture familiale par le biais de l'agroécologie. Avec 14 associations aujourd'hui issues de huit pays ouest-africains, le Mouvement NSS présidé par Mariama Sonko s'active plus que jamais dans le cadre du renforcement des capacités de ses membres sur les techniques de production et d'utilisation des bio-protecteurs à base de produits locaux.`,
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
