import type { Metadata } from "next";
import HeroHome from "@/components/sections/HeroHome";
import ImpactSection from "@/components/sections/ImpactSection";
import MissionSection from "@/components/sections/MissionSection";
import HeroSectionRedesign from "@/components/sections/HeroSectionRedesign";
import ObjectifsRedesign from "@/components/sections/ObjectifsRedesign";
import ProgrammesRedesign from "@/components/sections/ProgrammesRedesign";
import PartnersSectionRedesign from "@/components/home/PartnersSectionRedesign";
import MediathequeSectionRedesign from "@/components/home/MediathequeSectionRedesign";
import CTAHeroSectionRedesign from "@/components/home/CTAHeroSectionRedesign";
import NewsSectionRedesign from "@/components/home/NewsSectionRedesign";
import ContactSectionRedesign from "@/components/home/ContactSectionRedesign";

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
      {/* 02 — Notre impact */}
      <ImpactSection />
      {/* 03 — Notre mission */}
      <MissionSection />
      {/* 04 — Qui sommes-nous redesign */}
      <HeroSectionRedesign />
      {/* 03 — Nos objectifs (vert foncé, 3 cartes) */}
      <ObjectifsRedesign />
      {/* 04 — Nos programmes (blanc, tabs CIFAP / EMMAP) */}
      <ProgrammesRedesign />
      {/* 05 — Partenaires */}
      <PartnersSectionRedesign />
      {/* 06 — Médiathèque */}
      <MediathequeSectionRedesign />
      {/* 07 — CTA Hero */}
      <CTAHeroSectionRedesign />
      {/* 08 — Actualités */}
      <NewsSectionRedesign />
      {/* 09 — Nous contacter */}
      <ContactSectionRedesign />
    </>
  );
}
