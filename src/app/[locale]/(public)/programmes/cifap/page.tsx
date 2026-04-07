import type { Metadata } from "next";
import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "CIFAP — Camp International de Formation à l'Agroécologie Paysanne",
  description:
    "Le CIFAP de Niaguis forme chaque année des femmes agricultrices d'Afrique de l'Ouest aux pratiques agroécologiques et à la souveraineté semencière.",
};

const CONTENUS = [
  "Techniques d'agroécologie paysanne adaptées aux terroirs locaux",
  "Sélection, conservation et échange de semences paysannes",
  "Pratiques culturales endogènes — valorisation des savoirs traditionnels",
  "Méthodes de compostage, gestion des sols et biodiversité agricole",
  "Organisation collective et plaidoyer pour la souveraineté alimentaire",
];

interface CIFAPPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CIFAPPage({ params }: CIFAPPageProps) {
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
              Former les agricultrices de demain à Niaguis
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              Le Camp International de Formation sur l&apos;Agroécologie Paysanne (CIFAP) est
              le cœur battant de la transmission des savoirs agricoles au sein du mouvement NSS.
            </p>
          </div>
        </Container>
      </section>

      {/* INFOS RAPIDES */}
      <Section variant="primary-light">
        <Container>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MapPin, label: "Lieu", value: "Niaguis, Casamance, Sénégal" },
              { icon: Calendar, label: "Fréquence", value: "Annuelle" },
              { icon: Users, label: "Public", value: "Femmes agricultrices membres NSS" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-neutral-800 font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRÉSENTATION */}
      <Section variant="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Formation agroécologique"
                title="Un camp international enraciné dans le terroir casamançais"
                align="left"
              />
              <p className="text-neutral-600 leading-relaxed mb-6">
                Organisé à Niaguis, en Casamance (Sénégal), le CIFAP rassemble chaque année
                des femmes agricultrices venues de plusieurs pays d&apos;Afrique de l&apos;Ouest.
                Pendant plusieurs jours, elles apprennent, échangent et repartent avec des
                savoirs concrets à partager dans leurs communautés.
              </p>
              <p className="text-sm text-neutral-500 italic">
                Centre agroécologique Karonghen Wati Naning — Niaguis, Casamance, Sénégal
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <h3 className="font-body font-bold text-neutral-800 mb-5">
                Ce que le CIFAP transmet
              </h3>
              <ul className="space-y-3">
                {CONTENUS.map((contenu) => (
                  <li key={contenu} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-primary-700 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-neutral-600 text-sm leading-relaxed">{contenu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="earth-light">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-neutral-800 mb-4">
              Participer au prochain CIFAP
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Vous êtes une organisation membre et souhaitez envoyer des participantes
              au prochain CIFAP ? Contactez-nous pour connaître les modalités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                Nous contacter
              </Button>
              <Button href={`/${locale}/agir/donner`} variant="earth" size="lg">
                Financer le CIFAP
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
