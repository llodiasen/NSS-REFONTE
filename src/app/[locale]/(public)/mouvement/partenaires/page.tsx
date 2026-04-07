import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Nos Partenaires — Mouvement NSS",
  description:
    "NSS est soutenu par des partenaires internationaux engagés pour la souveraineté alimentaire et l'autonomie des femmes rurales d'Afrique.",
};

const PARTENAIRES = [
  {
    nom: "Grassroots International",
    pays: "États-Unis — Boston",
    url: "https://www.grassrootsonline.org",
    description:
      "Organisation américaine de solidarité internationale, Grassroots International finance et accompagne les mouvements sociaux de base à travers le monde. Partenaire historique de NSS, elle soutient notre capacité à agir depuis la base, sans intermédiaire.",
  },
  {
    nom: "AgroEcology Fund",
    pays: "International",
    url: "https://www.agroecologyfund.org",
    description:
      "Fonds international dédié exclusivement au soutien de l'agroécologie paysanne. L'AgroEcology Fund reconnaît dans les pratiques portées par NSS un modèle à renforcer et à diffuser à l'échelle continentale.",
  },
  {
    nom: "Thousand Currents",
    pays: "États-Unis — Oakland",
    url: "https://thousandcurrents.org",
    description:
      "Thousand Currents finance des organisations du Sud global qui construisent des alternatives économiques et alimentaires durables. Son partenariat avec NSS traduit une conviction partagée : les solutions viennent du terrain.",
  },
  {
    nom: "The MATCH International Women's Fund",
    pays: "Canada",
    url: "https://www.matchinternational.org",
    description:
      "Fonds canadien dédié au financement des mouvements de femmes dans les pays du Sud. MATCH soutient le renforcement du leadership des femmes rurales au sein de NSS.",
  },
  {
    nom: "Fahamu Africa",
    pays: "Sénégal — Dakar",
    url: "https://fahamu.org",
    description:
      "ONG panafricaine basée à Dakar, Fahamu Africa accompagne NSS depuis sa création en 2011. Appui technique, communication, renforcement institutionnel — son rôle évolue progressivement vers un soutien plus léger, reflet du leadership autonome du mouvement.",
  },
];

export default function PartenairesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider block mb-4">
              Ils nous font confiance
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Des partenaires qui croient en notre autonomie
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              NSS est un mouvement conduit par des femmes rurales africaines. Nos partenaires
              le savent et nous soutiennent sans imposer leur agenda.
            </p>
          </div>
        </Container>
      </section>

      {/* PARTENAIRES */}
      <Section variant="neutral">
        <Container>
          <SectionHeader
            label="Nos partenaires internationaux"
            title="Cinq organisations, une conviction partagée"
          />
          <div className="space-y-6 max-w-3xl mx-auto">
            {PARTENAIRES.map((p) => (
              <article
                key={p.nom}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-body text-xl font-bold text-neutral-800 mb-1">{p.nom}</h2>
                    <span className="text-sm text-primary-700 font-medium">{p.pays}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Site de ${p.nom}`}
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-primary-700
                               transition-colors duration-200 flex-shrink-0 mt-1"
                  >
                    <ExternalLink size={15} />
                    <span className="hidden sm:inline">{p.url.replace("https://", "")}</span>
                  </a>
                </div>
                <p className="text-neutral-600 leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
