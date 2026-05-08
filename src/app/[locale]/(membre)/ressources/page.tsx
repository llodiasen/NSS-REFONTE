import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Download, BookOpen, Leaf, Megaphone, FileText } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Ressources exclusives — Espace membre NSS",
};

interface RessourcesPageProps {
  params: Promise<{ locale: string }>;
}

type Categorie = "Formation" | "Agroécologie" | "Plaidoyer" | "Administratif";

interface Ressource {
  id: string;
  titre: string;
  description: string;
  categorie: Categorie;
  fichier: string;
  taille: string;
  date: string;
}

const RESSOURCES: Ressource[] = [
  {
    id: "1",
    titre: "Guide CIFAP — Manuel de formation agroécologique",
    description: "Manuel complet pour les formatrices terrain du programme CIFAP. Techniques culturales, gestion des sols et biodiversité.",
    categorie: "Formation",
    fichier: "/ressources/guide-cifap-formation.pdf",
    taille: "4,2 Mo",
    date: "2025-11-01",
  },
  {
    id: "2",
    titre: "Fiches techniques : Semences paysannes",
    description: "12 fiches pratiques sur la conservation et l'échange de semences locales adaptées aux contextes sahéliens.",
    categorie: "Agroécologie",
    fichier: "/ressources/fiches-semences-paysannes.pdf",
    taille: "1,8 Mo",
    date: "2025-09-15",
  },
  {
    id: "3",
    titre: "Rapport d'impact NSS 2024",
    description: "Bilan annuel des actions menées dans les 12 pays membres : résultats terrain, témoignages et perspectives.",
    categorie: "Administratif",
    fichier: "/ressources/rapport-impact-2024.pdf",
    taille: "6,1 Mo",
    date: "2025-03-01",
  },
  {
    id: "4",
    titre: "Kit plaidoyer — Souveraineté alimentaire des femmes",
    description: "Outils de communication et arguments clés pour porter la voix des femmes rurales auprès des décideurs politiques.",
    categorie: "Plaidoyer",
    fichier: "/ressources/kit-plaidoyer-souverainete.pdf",
    taille: "2,5 Mo",
    date: "2025-06-10",
  },
  {
    id: "5",
    titre: "Statuts et règlement intérieur NSS",
    description: "Documents constitutifs du mouvement Nous Sommes la Solution. Version consolidée mars 2024.",
    categorie: "Administratif",
    fichier: "/ressources/statuts-nss-2024.pdf",
    taille: "0,9 Mo",
    date: "2024-03-20",
  },
  {
    id: "6",
    titre: "Programme EMMAP — Guide pédagogique",
    description: "Cadre pédagogique de l'École des Mères Maraîchères. Objectifs, modules de formation et évaluation.",
    categorie: "Formation",
    fichier: "/ressources/guide-emmap-pedagogique.pdf",
    taille: "3,3 Mo",
    date: "2025-01-15",
  },
  {
    id: "7",
    titre: "Argumentaire COP — Position NSS sur le climat",
    description: "Document de position de NSS pour les négociations climatiques internationales. Adaptation, financement et droits des femmes.",
    categorie: "Plaidoyer",
    fichier: "/ressources/argumentaire-cop-nss.pdf",
    taille: "1,1 Mo",
    date: "2025-10-01",
  },
  {
    id: "8",
    titre: "Compostage et gestion organique des sols",
    description: "Guide pratique illustré pour la fabrication de compost et l'amélioration naturelle de la fertilité des sols.",
    categorie: "Agroécologie",
    fichier: "/ressources/guide-compostage-sols.pdf",
    taille: "2,0 Mo",
    date: "2025-04-05",
  },
];

const CATEGORIES: Categorie[] = ["Formation", "Agroécologie", "Plaidoyer", "Administratif"];

const categoryIcon: Record<Categorie, React.ReactNode> = {
  Formation: <BookOpen size={16} />,
  Agroécologie: <Leaf size={16} />,
  Plaidoyer: <Megaphone size={16} />,
  Administratif: <FileText size={16} />,
};

const categoryBadge: Record<Categorie, "impact" | "pays" | "evenement" | "media"> = {
  Formation: "impact",
  Agroécologie: "pays",
  Plaidoyer: "evenement",
  Administratif: "media",
};

export default async function RessourcesPage({ params }: RessourcesPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  const grouped = CATEGORIES.reduce<Record<Categorie, Ressource[]>>(
    (acc, cat) => {
      acc[cat] = RESSOURCES.filter((r) => r.categorie === cat);
      return acc;
    },
    {} as Record<Categorie, Ressource[]>
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">
          Ressources exclusives
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          Documents réservés aux membres du mouvement NSS.
        </p>
      </div>

      {/* Sections par catégorie */}
      {CATEGORIES.map((cat) => {
        const items = grouped[cat];
        if (items.length === 0) return null;
        return (
          <section key={cat}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary-600">{categoryIcon[cat]}</span>
              <h2 className="font-display font-bold text-neutral-800 text-lg">{cat}</h2>
              <span className="text-xs text-neutral-400 font-medium">
                ({items.length} document{items.length > 1 ? "s" : ""})
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((ressource) => (
                <div
                  key={ressource.id}
                  className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-4
                             hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        {ressource.titre}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                        {ressource.description}
                      </p>
                    </div>
                    <Badge variant={categoryBadge[ressource.categorie]} className="flex-shrink-0">
                      {ressource.categorie}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-1 border-t border-neutral-100">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span>{ressource.taille}</span>
                      <span>·</span>
                      <span>
                        {new Date(ressource.date).toLocaleDateString("fr-FR", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <a
                      href={ressource.fichier}
                      download
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary-700
                                 hover:text-primary-500 transition-colors"
                      aria-label={`Télécharger ${ressource.titre}`}
                    >
                      <Download size={14} />
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
