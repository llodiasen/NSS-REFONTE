import type { Metadata } from "next";
import HeroHome from "@/components/sections/HeroHome";
import ImpactSection from "@/components/sections/ImpactSection";
import MissionSection from "@/components/sections/MissionSection";
import PiliersSection from "@/components/sections/PiliersSection";
import ProgrammesEvenementsSection from "@/components/sections/ProgrammesEvenementsSection";
import CTARejoindreSection from "@/components/sections/CTARejoindreSection";
import ReassuranceBarSection from "@/components/sections/ReassuranceBarSection";
import ActualitesHomepageSection from "@/components/sections/ActualitesHomepageSection";
import MediathequeSectionRedesign from "@/components/home/MediathequeSectionRedesign";
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
      {/* 01 — Hero plein écran */}
      <HeroHome />
      {/* 01b — Barre de réassurance */}
      <ReassuranceBarSection />
      {/* 02 — Notre impact */}
      <ImpactSection />
      {/* 03 — Notre mission */}
      <MissionSection />
      {/* 04 — Nos trois piliers */}
      <PiliersSection />
      {/* 06 — Programmes & Événements */}
      <ProgrammesEvenementsSection />
      {/* 07 — CTA Rejoindre le mouvement */}
      <CTARejoindreSection />
      {/* 08 — Actualités */}
      <ActualitesHomepageSection />
      {/* 10 — Médiathèque */}
      <MediathequeSectionRedesign />
      {/* 11 — Nous contacter */}
      <ContactSectionRedesign />
    </>
  );
}
