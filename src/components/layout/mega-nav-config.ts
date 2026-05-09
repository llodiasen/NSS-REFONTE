import {
  Clock, Shield, Users, MapPin,
  Home, Globe, BookOpen, UserPlus,
  Heart, DollarSign, Briefcase, Mail,
  FileText, Video, Calendar, Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface MegaLink {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  indent?: boolean;
}

export interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

export function getMegaColumns(locale: string): MegaColumn[] {
  return [
    {
      heading: "Notre mission",
      links: [
        { icon: Clock,    title: "Qui sommes-nous",    description: "Histoire et genèse du réseau",      href: `/${locale}/a-propos` },
        { icon: Shield,   title: "Nos valeurs",         description: "Souveraineté, dignité, écologie",   href: `/${locale}/mouvement` },
        { icon: Users,    title: "Équipe & gouvernance",description: "Coordinatrices, conseil d'admin",   href: `/${locale}/a-propos#equipe` },
        { icon: MapPin,   title: "Nos pays d'action",  description: "14 pays d'Afrique de l'Ouest",      href: `/${locale}/impact` },
      ],
    },
    {
      heading: "Nos programmes",
      links: [
        { icon: BookOpen, title: "Tous les programmes",      description: "Vue d'ensemble des 3 programmes",    href: `/${locale}/programmes` },
        { icon: Home,     title: "CIFAP",                   description: "Camp international agroécologique",  href: `/${locale}/programmes/cifap` },
        { icon: Calendar, title: "Édition 2023",             description: "Semences horticoles paysannes",      href: `/${locale}/programmes/cifap/2e-edition-2023`, indent: true },
        { icon: Calendar, title: "Édition 2024",             description: "Bio-protecteurs en agroécologie",   href: `/${locale}/programmes/cifap/3e-edition-2024`, indent: true },
        { icon: Calendar, title: "Édition 2025",             description: "Cultures horticoles paysannes",     href: `/${locale}/programmes/cifap/4e-edition-2025`, indent: true },
        { icon: Globe,    title: "EMMAP",                   description: "Médias, Minorités & Paix",           href: `/${locale}/programmes/emmap` },
        { icon: UserPlus, title: "FIARA & Rencontre",        description: "Foire & rassemblement annuel",       href: `/${locale}/programmes` },
      ],
    },
    {
      heading: "Agir & donner",
      links: [
        { icon: Heart,       title: "Adhérer au réseau",    description: "Rejoindre le mouvement",             href: `/${locale}/agir/rejoindre` },
        { icon: DollarSign,  title: "Faire un don",         description: "Soutenir les femmes paysannes",      href: `/${locale}/agir/donner` },
        { icon: Briefcase,   title: "Devenir partenaire",   description: "ONG, institutions, bailleurs",       href: `/${locale}/contact` },
        { icon: Mail,        title: "Nous contacter",       description: "Dakar — réponse sous 48h",           href: `/${locale}/contact` },
      ],
    },
    {
      heading: "Ressources",
      links: [
        { icon: FileText, title: "Publications & rapports", description: "Rapports annuels, études",           href: `/${locale}/ressources/actualites` },
        { icon: Video,    title: "Vidéos",                   description: "Reportages, témoignages filmés",      href: `/${locale}/mediatheque` },
        { icon: Calendar, title: "Agenda & événements",    description: "Formations, forums, rencontres",     href: `/${locale}/ressources/actualites` },
        { icon: Search,   title: "Presse & médias",        description: "Communiqués, porte-parole",          href: `/${locale}/ressources/galerie` },
      ],
    },
  ];
}

export const STATS = [
  { value: "175 000", label: "Membres" },
  { value: "14",      label: "Pays d'action" },
  { value: "500+",    label: "Associations AFRI" },
];

export const LEGAL_LINKS = [
  { label: "Politique de confidentialité", href: "/fr/mentions-legales" },
  { label: "Mentions légales",             href: "/fr/mentions-legales" },
  { label: "Protection des données (RGPD)",href: "/fr/mentions-legales" },
  { label: "Politique de don",             href: "/fr/agir/donner" },
  { label: "Accessibilité",               href: "/fr/mentions-legales" },
  { label: "Plan du site",                href: "/fr/mentions-legales" },
];

export const PANEL_LOCALES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "wo", label: "WO" },
  { code: "ha", label: "HA" },
];
