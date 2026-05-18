import type { Metadata } from "next";
import EngagementsSection from "@/components/sections/EngagementsSection";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nos Engagements — Mouvement NSS",
  description:
    "NSS s'engage pour la souveraineté alimentaire, l'agroécologie, les semences paysannes et la gouvernance participative en Afrique de l'Ouest.",
};

export default function EngagementsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="Nos convictions"
        title="Ce en quoi nous croyons, ce pour quoi nous agissons"
        subtitle="Les engagements de NSS ne sont pas des déclarations d'intention. Ce sont des pratiques vécues quotidiennement par 175 000 femmes rurales à travers l'Afrique de l'Ouest."
        imageSrc="/images/actualites/femmes-africaines-gardiennes-semences.jpg"
        imagePosition="center 35%"
      />

      <EngagementsSection />
    </>
  );
}
