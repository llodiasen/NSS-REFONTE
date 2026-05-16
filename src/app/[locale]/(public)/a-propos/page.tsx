import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutDeclaration from "@/components/sections/about/AboutDeclaration";
import GovernanceSectionRedesign from "@/components/sections/about/GovernanceSectionRedesign";
import AboutValeurs from "@/components/sections/about/AboutValeurs";
import TimelineZigzagRedesign from "@/components/sections/about/TimelineZigzagRedesign";
import AboutPartenaires from "@/components/sections/about/AboutPartenaires";
import FinalCTASectionRedesign from "@/components/sections/FinalCTASectionRedesign";
import ContactSectionNSS from "@/components/sections/ContactSectionNSS";

export const metadata: Metadata = {
  title: "À propos — Nous Sommes la Solution (NSS)",
  description:
    "Depuis 2011, Nous Sommes la Solution fédère 175 000 femmes rurales d'Afrique de l'Ouest autour d'une agriculture souveraine, durable et entre leurs mains.",
};

export default function AProposPage() {
  return (
    <>
      {/* 01 — Hero */}
      <AboutHero />
      {/* 02 — Notre Mission */}
      <AboutDeclaration />
      {/* 03 — Pays membres */}
      <GovernanceSectionRedesign />
      {/* 04 — Nos Valeurs */}
      <AboutValeurs />
      {/* 05 — Notre Histoire (timeline) */}
      <TimelineZigzagRedesign />
      {/* 06 — Partenaires */}
      <AboutPartenaires />
      {/* 07 — CTA final */}
      <FinalCTASectionRedesign />
      {/* 08 — Formulaire de contact */}
      <ContactSectionNSS />
    </>
  );
}
