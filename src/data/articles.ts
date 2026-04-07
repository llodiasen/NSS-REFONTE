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
  canonical?: string;
  robots?: string;
  sourceName?: string;
  sourceUrl?: string;
  videoUrl?: string;
  coverCaption?: string;
}

export const ARTICLES: Article[] = [

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
    gallery: [
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775487713/Hero_-_Cifap_ixy5hj.jpg", caption: "Vue générale du CIFAP 2025 à Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_1_em1x4v", caption: "CIFAP 2025 — Photo 1" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_1_vyqxle", caption: "CIFAP 2025 — Photo 1" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_2_dzj8gn", caption: "CIFAP 2025 — Photo 2" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_2_ob9fzo", caption: "CIFAP 2025 — Photo 2" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_3_ohwj2d", caption: "CIFAP 2025 — Photo 3" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_3_uefcl2", caption: "CIFAP 2025 — Photo 3" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_4_czgqw4", caption: "CIFAP 2025 — Photo 4" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_4_qpjfrt", caption: "CIFAP 2025 — Photo 4" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_5_bi90kl", caption: "CIFAP 2025 — Photo 5" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_5_coymw9", caption: "CIFAP 2025 — Photo 5" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_6_fnxpuk", caption: "CIFAP 2025 — Photo 6" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_6_tpdulh", caption: "CIFAP 2025 — Photo 6" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_7_bg2fri", caption: "CIFAP 2025 — Photo 7" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_7_rtfy3j", caption: "CIFAP 2025 — Photo 7" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_8_n1gjzg", caption: "CIFAP 2025 — Photo 8" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_8_pbdegj", caption: "CIFAP 2025 — Photo 8" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_9_o2gube", caption: "CIFAP 2025 — Photo 9" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_9_pfepwa", caption: "CIFAP 2025 — Photo 9" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_10_eq3rgr", caption: "CIFAP 2025 — Photo 10" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_10_v1y6gn", caption: "CIFAP 2025 — Photo 10" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_11_z8yykx", caption: "CIFAP 2025 — Photo 11" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_11_zxetui", caption: "CIFAP 2025 — Photo 11" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_12_auvyj7", caption: "CIFAP 2025 — Photo 12" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_12_tg6zty", caption: "CIFAP 2025 — Photo 12" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_13_su69a0", caption: "CIFAP 2025 — Photo 13" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_14_gyzuth", caption: "CIFAP 2025 — Photo 14" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_15_cvowiq", caption: "CIFAP 2025 — Photo 15" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_16_pkawgs", caption: "CIFAP 2025 — Photo 16" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_17_wcyqxo", caption: "CIFAP 2025 — Photo 17" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_18_cawwit", caption: "CIFAP 2025 — Photo 18" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_19_djes6c", caption: "CIFAP 2025 — Photo 19" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_20_dttkti", caption: "CIFAP 2025 — Photo 20" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_21_ztatq0", caption: "CIFAP 2025 — Photo 21" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_22_hara73", caption: "CIFAP 2025 — Photo 22" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_23_n64fiu", caption: "CIFAP 2025 — Photo 23" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_24_rbvla6", caption: "CIFAP 2025 — Photo 24" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_25_acdal5", caption: "CIFAP 2025 — Photo 25" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_26_sag9on", caption: "CIFAP 2025 — Photo 26" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_27_xil5tl", caption: "CIFAP 2025 — Photo 27" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_28_kliozy", caption: "CIFAP 2025 — Photo 28" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_29_fdjvjb", caption: "CIFAP 2025 — Photo 29" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_30_ptmmy2", caption: "CIFAP 2025 — Photo 30" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_31_suew69", caption: "CIFAP 2025 — Photo 31" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_32_cuxxkj", caption: "CIFAP 2025 — Photo 32" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_33_nzxzeh", caption: "CIFAP 2025 — Photo 33" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_34_wqvyhd", caption: "CIFAP 2025 — Photo 34" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_35_hsot5g", caption: "CIFAP 2025 — Photo 35" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_36_z3kqw0", caption: "CIFAP 2025 — Photo 36" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_37_i77f8h", caption: "CIFAP 2025 — Photo 37" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_38_cgfidg", caption: "CIFAP 2025 — Photo 38" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_39_h8adek", caption: "CIFAP 2025 — Photo 39" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_40_hvk6fx", caption: "CIFAP 2025 — Photo 40" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_41_opeqrs", caption: "CIFAP 2025 — Photo 41" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_42_sngjsw", caption: "CIFAP 2025 — Photo 42" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_43_pes2op", caption: "CIFAP 2025 — Photo 43" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_44_yxdijt", caption: "CIFAP 2025 — Photo 44" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_45_uzj5pk", caption: "CIFAP 2025 — Photo 45" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_46_a9c03r", caption: "CIFAP 2025 — Photo 46" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_47_bl9eaw", caption: "CIFAP 2025 — Photo 47" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_48_orwv1w", caption: "CIFAP 2025 — Photo 48" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_49_vzoyqs", caption: "CIFAP 2025 — Photo 49" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_50_iarlk0", caption: "CIFAP 2025 — Photo 50" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_51_f5afey", caption: "CIFAP 2025 — Photo 51" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_52_uxi0xe", caption: "CIFAP 2025 — Photo 52" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_53_x2p7lt", caption: "CIFAP 2025 — Photo 53" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_54_rvmzv7", caption: "CIFAP 2025 — Photo 54" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_55_rnhqv5", caption: "CIFAP 2025 — Photo 55" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_56_cvqh9x", caption: "CIFAP 2025 — Photo 56" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_57_p2gjwr", caption: "CIFAP 2025 — Photo 57" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_58_sxrkle", caption: "CIFAP 2025 — Photo 58" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_59_a8vtnh", caption: "CIFAP 2025 — Photo 59" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_60_pmyqjl", caption: "CIFAP 2025 — Photo 60" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOUTIONS_CIFAP_2025_61_qltq6o", caption: "CIFAP 2025 — Photo 61" },
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
    gallery: [
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_1_r60wkt", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_5_epvdil", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_5_vuxb5t", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_7_sxaoha", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_9_bj8bcl", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_10_elfkpa", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_10_q2nmsu", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_11_rtctl1", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_11_t7tlzg", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_12_inw0pu", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_13_iql1nh", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_16_rrpng6", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_16_ufp9a6", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_17_pr6hxb", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_18_nkepft", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_18_qhxwdd", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_22_ce0opk", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_23_eo5qvc", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_23_szfymw", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_24_wkdxua", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_25_ebrwnm", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_26_pdcxtd", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_27_k28hdu", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_29_xpr99s", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_30_d7lfiz", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_32_rd3kb0", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_33_tjgk5i", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_35_h7j5s6", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_41_cdc6og", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_42_pqoxc7", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_43_lpwue0", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_44_ehfccr", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_45_kyf7gr", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_50_ofcxih", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_52_yfjako", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_53_cgswx9", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_54_hwa5hq", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_55_gwf3d2", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_56_sboaai", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_57_aldaww", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_61_ohpmgc", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_62_tkzwb8", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_63_v2ewix", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_64_n3zd3j", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_65_xtxj0g", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_66_p4sgga", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_67_vsxzyo", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_68_bgxbkx", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_69_vehsfp", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_70_cier8h", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_71_nuh8v4", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_74_zfbglr", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_76_umhvqs", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_77_xnrd8v", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_78_cjpm9n", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_79_kpviqt", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_81_r0hnmw", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_83_cm5pye", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_84_v5wxli", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_85_grg7ja", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_87_derqqk", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_88_siaui5", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_89_tzyofc", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_90_s6kewe", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_91_matcmp", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_92_bdzlzq", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_93_unmp5c", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_94_ze1rqt", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_95_waxttx", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_96_pvn8dw", caption: "CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/NOUS_SOMMES_LA_SOLUTIONS_CIFAP_2025_97_ivjkou", caption: "CIFAP 2025 — Niaguis" },
    ],
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
    gallery: [
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/Ouverture_de_la_4%E1%B5%89_%C3%A9dition_du_CIFAP_%C3%A0_Niaguis_lqfakd", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547163035_4181181722151383_8621746354621340150_n_nltr0o", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/549371012_4181170252152530_3264224510783469889_n_b3uner", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/549212437_4181181815484707_320755256327631749_n_c9qgvu", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/548204114_4181181925484696_5794237487250784986_n_wacw86", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/548179959_4181180815484807_1725174516879762017_n_ypgzwo", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547267135_4181170405485848_3304556589988714902_n_bgkbg8", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547938708_4181180882151467_7990136013235981478_n_lujarz", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547835296_4181180665484822_2270584862035889623_n_zz7gbc", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547577976_4181181578818064_3491611048039437920_n_xq6jvm", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547862917_4181180842151471_5822749115630760970_n_jkfnpv", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547592602_4181181672151388_778284174587938016_n_wbqb9h", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547495770_4181181638818058_7460929479110403658_n_saturz", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547566899_4181181768818045_3336733239416639277_n_eqicur", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547385072_4181181868818035_4355944713230422873_n_lzdfge", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547403844_4181181902151365_6076548001007715382_n_lzqubj", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547437753_4181170195485869_2155655902466265095_n_ev25er", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/546862015_4181181378818084_5561810864715096716_n_mtwja2", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/547250626_4181181528818069_8043233769900241124_n_alnxz4", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/546622133_4181181972151358_1006797237717819500_n_nh5xcs", caption: "Ouverture du CIFAP 2025 — Niaguis" },
      { url: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/545970584_4181181362151419_5029738448841312069_n_kwtwtm", caption: "Ouverture du CIFAP 2025 — Niaguis" },
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
