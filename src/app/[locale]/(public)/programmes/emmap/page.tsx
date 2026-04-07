import type { Metadata } from "next";
import { Radio, CheckCircle, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "EMMAP — Médias, Minorités et Paix | NSS",
  description:
    "Le programme EMMAP renforce les capacités des communautés rurales en matière de production et de diffusion d'informations sur la souveraineté alimentaire.",
};

const OBJECTIFS = [
  "Former les leaders et membres NSS à la prise de parole publique",
  "Renforcer les capacités de communication des associations membres",
  "Produire des contenus audio, vidéo et écrits sur l'agroécologie et la souveraineté alimentaire",
  "Créer des liens entre les médias communautaires et les organisations paysannes",
  "Amplifier la voix des minorités rurales dans les débats agricoles nationaux",
];

interface EMMAPPageProps {
  params: Promise<{ locale: string }>;
}

export default async function EMMAPPage({ params }: EMMAPPageProps) {
  const { locale } = await params;

  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block bg-earth-500 text-white text-xs font-bold
                             px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              Programme phare
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Donner aux communautés rurales les outils de leur parole
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              Le programme EMMAP (Engagement des Médias pour les Minorités, l&apos;Agriculture
              et la Paix) forme les femmes rurales à produire, diffuser et utiliser
              l&apos;information comme outil de changement.
            </p>
          </div>
        </Container>
      </section>

      {/* PUBLIC */}
      <Section variant="primary-light">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-primary-700" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-0.5">Public ciblé</p>
                <p className="text-neutral-800 font-medium text-sm">
                  Leaders et membres des associations NSS, communicatrices communautaires, journalistes ruraux
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRÉSENTATION */}
      <Section variant="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Médias et plaidoyer"
                title="L'information au service de la souveraineté alimentaire"
                align="left"
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Les femmes rurales d&apos;Afrique de l&apos;Ouest sont trop souvent absentes des médias
                  qui parlent d&apos;elles. EMMAP renverse cet ordre : il forme les membres de NSS à
                  devenir elles-mêmes productrices de contenus, témoins de leurs réalités et
                  actrices de leur communication.
                </p>
                <p>
                  Parce que les agricultrices d&apos;Afrique de l&apos;Ouest doivent être actrices —
                  et non sujettes — de l&apos;information qui les concerne.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <div className="flex items-center gap-3 mb-5">
                <Radio size={20} className="text-primary-700" aria-hidden="true" />
                <h3 className="font-body font-bold text-neutral-800">
                  Objectifs du programme
                </h3>
              </div>
              <ul className="space-y-3">
                {OBJECTIFS.map((obj) => (
                  <li key={obj} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-primary-700 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-neutral-600 text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="neutral">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-neutral-800 mb-4">
              Participez au programme EMMAP
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Votre organisation souhaite intégrer le programme EMMAP ou en savoir plus ?
              Contactez l&apos;équipe NSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                Nous contacter
              </Button>
              <Button href={`/${locale}/ressources/videos`} variant="secondary" size="lg">
                Voir nos vidéos
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
