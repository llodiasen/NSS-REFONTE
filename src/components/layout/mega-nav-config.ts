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
        { icon: Home,     title: "Agroécologie paysanne",   description: "Semences, sols, pratiques",          href: `/${locale}/programmes/cifap` },
        { icon: Globe,    title: "Souveraineté alimentaire",description: "Droits des femmes paysannes",        href: `/${locale}/mouvement` },
        { icon: BookOpen, title: "Formation CIFAP",          description: "Camp international paysan",          href: `/${locale}/programmes/cifap` },
        { icon: UserPlus, title: "Réseau AFRI",              description: "175 000 femmes mobilisées",          href: `/${locale}/programmes/emmap` },
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
        { icon: Video,    title: "Médiathèque",             description: "Photos, vidéos, témoignages",        href: `/${locale}/ressources/videos` },
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
