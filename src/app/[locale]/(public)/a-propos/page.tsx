import type { Metadata } from "next";
import AboutApHero from "@/components/sections/about/AboutApHero";
import AboutApIdentite from "@/components/sections/about/AboutApIdentite";
import AboutApPourquoi from "@/components/sections/about/AboutApPourquoi";
import AboutApVision from "@/components/sections/about/AboutApVision";
import AboutApManifeste from "@/components/sections/about/AboutApManifeste";
import AboutApEngagements from "@/components/sections/about/AboutApEngagements";
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
      {/* S1 — Hero */}
      <AboutApHero />

      {/* S2 — Qui sommes-nous */}
      <AboutApIdentite />

      {/* S3 — Pourquoi NSS + Réponse NSS */}
      <AboutApPourquoi />

      {/* S4 — Notre Vision */}
      <AboutApVision />

      {/* S5 — Notre Manifeste */}
      <AboutApManifeste />

      {/* S6 — Nos Engagements */}
      <AboutApEngagements />

      {/* S7 — CTA final */}
      <FinalCTASectionRedesign />

      {/* S8 — Formulaire de contact */}
      <ContactSectionNSS />
    </>
  );
}
