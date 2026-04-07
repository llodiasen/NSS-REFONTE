export const LOCALES = [
  { code: "fr", label: "FR", full: "Français" },
  { code: "en", label: "EN", full: "English" },
  { code: "pt", label: "PT", full: "Português" },
];

export function buildNavItems(locale: string) {
  return [
    { label: "À propos", href: `/${locale}/a-propos` },
    { label: "Impact", href: `/${locale}/impact` },
    {
      label: "Programmes",
      children: [
        { label: "CIFAP", href: `/${locale}/programmes/cifap`, description: "Formation agroécologique" },
        { label: "EMMAP", href: `/${locale}/programmes/emmap`, description: "Médias, Minorités & Paix" },
      ],
    },
    {
      label: "Ressources",
      children: [
        { label: "Actualités", href: `/${locale}/ressources/actualites`, description: "Dernières nouvelles" },
        { label: "FAQ", href: `/${locale}/ressources/faq`, description: "Questions fréquentes" },
        { label: "Galerie", href: `/${locale}/ressources/galerie`, description: "Photos du terrain" },
        { label: "Vidéos", href: `/${locale}/ressources/videos`, description: "Témoignages" },
      ],
    },
    {
      label: "Agir",
      children: [
        { label: "Rejoindre", href: `/${locale}/agir/rejoindre`, description: "Devenir membre NSS" },
        { label: "Donner", href: `/${locale}/agir/donner`, description: "Soutenir le mouvement" },
      ],
    },
    { label: "Contact", href: `/${locale}/contact` },
  ];
}
