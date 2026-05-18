import type { Metadata } from "next";
import HomepageV2 from "@/components/home/HomepageV2";

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

export default function HomePage() {
  return <HomepageV2 />;
}
