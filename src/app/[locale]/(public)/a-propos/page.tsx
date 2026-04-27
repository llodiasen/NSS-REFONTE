import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutDeclaration from "@/components/sections/about/AboutDeclaration";
import TimelineZigzagRedesign from "@/components/sections/about/TimelineZigzagRedesign";
import GovernanceSectionRedesign from "@/components/sections/about/GovernanceSectionRedesign";
import LeadershipGridRedesign from "@/components/sections/about/LeadershipGridRedesign";
import FinalCTASectionRedesign from "@/components/sections/FinalCTASectionRedesign";
import ContactSectionRedesign from "@/components/home/ContactSectionRedesign";

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
      {/* 02 — Déclaration */}
      <AboutDeclaration />
      {/* 03 — Frise chronologique */}
      <TimelineZigzagRedesign />
      {/* 05 — Structure & Gouvernance */}
      <GovernanceSectionRedesign />
      {/* 06 — Témoignages & Leaders */}
      <LeadershipGridRedesign />
      {/* 07 — CTA final */}
      <FinalCTASectionRedesign />
      {/* 08 — Formulaire de contact */}
      <ContactSectionRedesign />
    </>
  );
}
