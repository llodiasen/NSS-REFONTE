import type { Metadata } from "next";
import HeroHome from "@/components/sections/HeroHome";
import AboutSection from "@/components/sections/AboutSection";
import ActionsSection from "@/components/sections/ActionsSection";
import PartenairesSection from "@/components/sections/PartenairesSection";
import MediathequeSection from "@/components/sections/MediathequeSection";
import ActualitesSection from "@/components/sections/ActualitesSection";
import CTASection from "@/components/sections/CTASection";
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
      {/* 03 — Nos actions */}
      <ActionsSection />
      {/* 04 — Partenaires */}
      <PartenairesSection />
      {/* 05 — Médiathèque */}
      <MediathequeSection />
      {/* 06 — CTA */}
      <CTASection />
      {/* 07 — Actualités */}
      <ActualitesSection />
      {/* 08 — Nous contacter */}
      <ContactHomeSection />
    </>
  );
}
