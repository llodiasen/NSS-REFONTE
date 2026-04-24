import type { Metadata } from "next";
import HeroHome from "@/components/sections/HeroHome";
import AboutSection from "@/components/sections/AboutSection";
import EventsSectionRedesign from "@/components/home/EventsSectionRedesign";
import PartnersSectionRedesign from "@/components/home/PartnersSectionRedesign";
import MediathequeSectionRedesign from "@/components/home/MediathequeSectionRedesign";
import CTAHeroSectionRedesign from "@/components/home/CTAHeroSectionRedesign";
import NewsSectionRedesign from "@/components/home/NewsSectionRedesign";
import ContactHomeSection from "@/components/sections/ContactHomeSection";

export const metadata: Metadata = {
  title: "Nous Sommes la Solution — Femmes rurales pour la souveraineté alimentaire",
  description:
    "NSS est un mouvement de 175 000 membres africains qui défendent la souveraineté alimentaire et l'agroécologie en Afrique de l'Ouest depuis 2011.",
  openGraph: {
    title: "Nous Sommes la Solution (NSS) — wasafrica.org",
    description:
      "Mouvement panafricain de 175 000 membres engagés pour la souveraineté alimentaire. Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.",
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <>
      {/* 01 — Hero plein écran + barre stats */}
      <HeroHome />
      {/* 02 — À propos */}
      <AboutSection />
      {/* 03 — Événements */}
      <EventsSectionRedesign />
      {/* 04 — Partenaires */}
      <PartnersSectionRedesign />
      {/* 05 — Médiathèque */}
      <MediathequeSectionRedesign />
      {/* 06 — CTA Hero */}
      <CTAHeroSectionRedesign />
      {/* 07 — Actualités */}
      <NewsSectionRedesign />
      {/* 08 — Nous contacter */}
      <ContactHomeSection />
    </>
  );
}
