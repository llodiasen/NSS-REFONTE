import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Notre Impact — 175 000 femmes pour la souveraineté alimentaire",
  description:
    "NSS rassemble 175 000 membres dans 7 pays d'Afrique de l'Ouest. Découvrez l'impact concret du mouvement sur la souveraineté alimentaire et l'agroécologie.",
};

const IMPACTS = [
  {
    titre: "Pour les femmes rurales",
    texte:
      "NSS donne aux femmes rurales un accès à la formation, aux réseaux de solidarité et aux espaces de décision dont elles ont été trop longtemps exclues. Elle les reconnaît comme actrices — pas comme bénéficiaires.",
  },
  {
    titre: "Pour les communautés",
    texte:
      "Les séances d'Information-Éducation-Communication (IEC) organisées par les associations membres diffusent les pratiques agroécologiques dans les communautés rurales. Les techniques endogènes sont valorisées, les semences paysannes préservées.",
  },
  {
    titre: "Pour la gouvernance agricole",
    texte:
      "NSS intervient dans les arènes de décision locales, nationales et continentales pour que la voix des paysannes pèse dans l'élaboration des politiques agricoles. Pas de politique agricole sans les femmes qui font l'agriculture.",
  },
];

const TEMOIGNAGES = [
  {
    citation: "Avec leurs bras et leurs valeurs, les femmes rurales sont aptes à nourrir le monde. Il suffit de leur donner les moyens d'agir.",
    nom: "Mariama Sonko",
    role: "AJAC, Sénégal",
  },
  {
    citation: "La souveraineté alimentaire, c'est notre droit. Décider de ce que nous plantons, de ce que nous mangeons, de ce que nous transmettons à nos enfants.",
    nom: "Yah Diakité",
    role: "AMASSA, Mali",
  },
  {
    citation: "NSS, c'est un espace où les femmes rurales ne sont plus seules. Nous partageons, nous apprenons, nous agissons ensemble.",
    nom: "Fatou Binetou Diop",
    role: "UGPM, Sénégal",
  },
];

const PAYS = ["Burkina Faso", "Gambie", "Ghana", "Guinée", "Guinée Bissau", "Mali", "Sénégal"];

interface ImpactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ImpactPage({ params }: ImpactPageProps) {
  const { locale } = await params;

  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider block mb-4">
              NSS en chiffres
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              175 000 femmes. Un seul mouvement. Un continent qui se nourrit.
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              NSS n'est pas une promesse. C'est une réalité vécue sur le terrain, dans les champs,
              dans les marchés, dans les assemblées — par des centaines de milliers de femmes rurales africaines.
            </p>
          </div>
        </Container>
      </section>

      {/* CHIFFRES ANIMÉS */}
      <Section variant="white">
        <Container>
          <SectionHeader
            eyebrow="NSS en chiffres"
            title="L'échelle d'un mouvement populaire"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-primary-100">
            <div className="px-4"><StatCounter value={175000} suffix="+" label="Membres et sympathisant·es" /></div>
            <div className="px-4"><StatCounter value={500} suffix="+" label="Associations de Femmes Rurales actives" /></div>
            <div className="px-4"><StatCounter value={13} label="Organisations fondatrices dans 7 pays" /></div>
            <div className="px-4"><StatCounter value={14} label="Ans d'action continue depuis 2011" /></div>
          </div>
        </Container>
      </Section>

      {/* PAYS MEMBRES */}
      <Section variant="primary-light">
        <Container>
          <SectionHeader
            eyebrow="Notre présence"
            title="Un réseau ancré dans 7 pays d'Afrique de l'Ouest"
            subtitle="NSS vise à s'élargir à d'autres régions du continent africain, en lien avec des initiatives similaires pour se donner un rayonnement continental."
          />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PAYS.map((pays) => (
              <span
                key={pays}
                className="bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-full
                           border border-primary-200 shadow-sm text-sm"
              >
                {pays}
              </span>
            ))}
          </div>
          {/* Carte placeholder */}
          <div className="bg-white rounded-2xl border border-primary-100 h-72 flex items-center
                          justify-center shadow-sm max-w-3xl mx-auto">
            <p className="text-neutral-400 text-sm font-medium">
              Carte interactive Leaflet — intégration Sprint Debug
            </p>
          </div>
        </Container>
      </Section>

      {/* IMPACT TERRAIN */}
      <Section variant="neutral">
        <Container>
          <SectionHeader
            eyebrow="Notre impact terrain"
            title="Ce que le mouvement transforme"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {IMPACTS.map((item) => (
              <div
                key={item.titre}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="font-body font-bold text-primary-700 text-lg mb-3">{item.titre}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{item.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TÉMOIGNAGES */}
      <Section variant="white">
        <Container>
          <SectionHeader
            eyebrow="Elles parlent"
            title="La parole aux femmes du mouvement"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {TEMOIGNAGES.map((t) => (
              <figure
                key={t.nom}
                className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
              >
                <blockquote className="text-neutral-700 leading-relaxed italic mb-6 text-sm">
                  &laquo;{t.citation}&raquo;
                </blockquote>
                <figcaption>
                  <p className="font-body font-bold text-primary-900 text-sm">{t.nom}</p>
                  <p className="text-primary-600 text-xs mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Soutenez cet impact
            </h2>
            <p className="text-primary-100 leading-relaxed mb-8">
              Votre don finance directement le CIFAP, les formations et le plaidoyer
              des femmes rurales qui nourrissent l'Afrique.
            </p>
            <Button href={`/${locale}/agir/donner`} variant="earth" size="lg">
              Faire un don
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
