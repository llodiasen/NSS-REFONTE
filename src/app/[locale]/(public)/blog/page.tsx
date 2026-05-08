import type { Metadata } from "next";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogContent from "@/components/sections/blog/BlogContent";
import BlogNewsletter from "@/components/sections/blog/BlogNewsletter";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog — Actualités NSS | Nous Sommes la Solution",
  description:
    "Suivez l'actualité du mouvement NSS : formation agroécologique, plaidoyer, partenariats et nouvelles des 175 000 femmes rurales d'Afrique de l'Ouest.",
  openGraph: {
    title: "Blog — Actualités NSS | Nous Sommes la Solution",
    description:
      "Formation, plaidoyer, partenariats et victoires du terrain — toute l'actualité du mouvement NSS.",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogContent />
      <BlogNewsletter />
      <CTASection />
    </>
  );
}
