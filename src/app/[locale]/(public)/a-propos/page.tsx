import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutGenese from "@/components/sections/about/AboutGenese";
import AboutIdentite from "@/components/sections/about/AboutIdentite";
import AboutVision from "@/components/sections/about/AboutVision";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutLeaders from "@/components/sections/about/AboutLeaders";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "À propos — Nous Sommes la Solution (NSS)",
  description:
    "Depuis 2011, Nous Sommes la Solution fédère 175 000 femmes rurales d'Afrique de l'Ouest autour d'une agriculture souveraine, durable et entre leurs mains.",
};

export default function AProposPage() {
  return (
    <>
      {/* 01 — Hero interne + 4 chiffres clés */}
      <AboutHero />
      {/* 02 — Notre histoire */}
      <AboutGenese />
      {/* 03 — Contexte & identité */}
      <AboutIdentite />
      {/* 04 — Notre vision & mission */}
      <AboutVision />
      <AboutMission />
      {/* 05 — Gouvernance & leaders */}
      <AboutLeaders />
      {/* 06 — CTA Rejoindre */}
      <CTASection />
    </>
  );
}
