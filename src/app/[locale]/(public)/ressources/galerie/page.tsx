import type { Metadata } from "next";
import GalerieGrid from "@/components/sections/GalerieGrid";
import type { GaleriePhoto } from "@/components/sections/GalerieGrid";

export const metadata: Metadata = {
  title: "Galerie photos — Mouvement NSS | wasafrica.org",
  description:
    "Photos du terrain, formations CIFAP, événements et portraits des leaders du mouvement Nous Sommes la Solution en Afrique de l'Ouest.",
};

const PHOTOS: GaleriePhoto[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1589156215745-857a6f2e8ba7?w=800&q=80",
    alt: "Femmes agricultrices au CIFAP 2024, Niaguis, Sénégal",
    legende: "CIFAP 2024 — Session de formation à Niaguis, Sénégal",
    categorie: "CIFAP",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    alt: "Champ agroécologique cultivé par les membres NSS au Mali",
    legende: "Agroécologie paysanne — Mali",
    categorie: "Terrain",
    width: 800,
    height: 1000,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1529113241122-41cc0e01a46f?w=800&q=80",
    alt: "Assemblée générale annuelle NSS",
    legende: "Assemblée générale NSS — 500+ participantes",
    categorie: "Événements",
    width: 800,
    height: 533,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
    alt: "Portrait de la coordinatrice régionale NSS Guinée",
    legende: "Coordinatrice régionale — Guinée",
    categorie: "Leaders",
    width: 800,
    height: 900,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    alt: "Atelier semences paysannes, CIFAP 2023",
    legende: "Atelier semences paysannes — CIFAP 2023",
    categorie: "CIFAP",
    width: 800,
    height: 600,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
    alt: "Séance IEC dans un village du Burkina Faso",
    legende: "Séance IEC — Burkina Faso",
    categorie: "Terrain",
    width: 800,
    height: 700,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Formation EMMAP prise de parole publique",
    legende: "Programme EMMAP — Prise de parole publique",
    categorie: "Événements",
    width: 800,
    height: 550,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&q=80",
    alt: "Leader paysanne NSS au Sénégal",
    legende: "Leader paysanne — Réseau NSS Sénégal",
    categorie: "Leaders",
    width: 800,
    height: 1000,
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    alt: "Jardin agroécologique CIFAP Niaguis",
    legende: "Jardin agroécologique — CIFAP Niaguis",
    categorie: "CIFAP",
    width: 800,
    height: 600,
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    alt: "Distribution de semences paysannes au Mali",
    legende: "Échange de semences — Mali",
    categorie: "Terrain",
    width: 800,
    height: 650,
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Forum régional souveraineté alimentaire 2024",
    legende: "Forum régional souveraineté alimentaire — Dakar 2024",
    categorie: "Événements",
    width: 800,
    height: 533,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
    alt: "Présidente du mouvement NSS en plaidoyer",
    legende: "Plaidoyer international — Présidente NSS",
    categorie: "Leaders",
    width: 800,
    height: 800,
  },
];

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Galerie
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Le mouvement en images
          </h1>
          <p className="text-primary-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Femmes du terrain, formations CIFAP, événements et portraits des leaders qui font
            vivre la souveraineté alimentaire au quotidien.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <GalerieGrid photos={PHOTOS} />
        </div>
      </section>
    </>
  );
}
