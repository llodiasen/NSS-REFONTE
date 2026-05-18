import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Heart, Leaf, Megaphone, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Soutenir NSS — Faire un don pour la souveraineté alimentaire | wasafrica.org",
  description:
    "Votre don soutient la formation de femmes agricultrices, la préservation des semences paysannes et le plaidoyer pour une agriculture familiale souveraine en Afrique.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

const IMPACTS = [
  {
    icon: <Leaf size={20} className="text-primary-600" />,
    titre: "La formation agroécologique",
    texte:
      "Le CIFAP de Niaguis forme chaque année des femmes agricultrices venues de plusieurs pays. Vos dons financent les frais de déplacement, d'hébergement et de matériel pédagogique.",
  },
  {
    icon: <Heart size={20} className="text-earth-600" />,
    titre: "La préservation des semences paysannes",
    texte:
      "Les membres de NSS conservent, échangent et multiplient des semences paysannes locales. Votre soutien finance les outils, les espaces de stockage et les formations.",
  },
  {
    icon: <Megaphone size={20} className="text-primary-600" />,
    titre: "Le plaidoyer politique",
    texte:
      "Faire entendre la voix des femmes rurales dans les instances nationales et continentales a un coût — déplacements, traductions, participation aux réunions.",
  },
  {
    icon: <Users size={20} className="text-earth-600" />,
    titre: "La communication et les échanges",
    texte:
      "NSS organise des rencontres annuelles où les leaders des associations membres de 7 pays se retrouvent pour partager, décider et planifier ensemble.",
  },
];

const AMOUNTS = ["10", "25", "50", "100"];

export default async function DonnerPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Agir"
        title="Votre soutien change ce qui se passe dans les champs"
        subtitle="NSS ne demande pas de charité. Elle demande un soutien concret pour que les femmes rurales africaines puissent agir à plus grande échelle, former plus d'agricultrices, et peser davantage dans les décisions qui les concernent."
        imageSrc="/images/actualites/lutte-mariama-sonko-agroecologie.jpg"
        imagePosition="center 35%"
      />

      {/* Ce que votre don finance */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Votre impact
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-800 mb-3">
            Ce que votre soutien finance concrètement
          </h2>
          <p className="text-neutral-500 text-sm mb-10 max-w-xl">
            NSS n&apos;a pas de bureaucratie lourde. Chaque euro, chaque franc, chaque dollar
            va directement soutenir les activités des associations membres sur le terrain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {IMPACTS.map((item) => (
              <div key={item.titre} className="bg-neutral-50 rounded-2xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">{item.titre}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Don */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-neutral-800 text-center mb-2">
            Choisissez votre façon de soutenir
          </h2>
          <p className="text-neutral-500 text-sm text-center mb-10">
            Montants suggérés — vous pouvez choisir un autre montant sur la plateforme.
          </p>

          {/* Montants suggérés */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {AMOUNTS.map((amount) => (
              <span
                key={amount}
                className="px-6 py-3 border-2 border-primary-700 text-primary-700 font-bold
                           rounded-xl text-base select-none"
              >
                {amount} €
              </span>
            ))}
            <span className="px-6 py-3 border-2 border-neutral-300 text-neutral-500 font-bold
                             rounded-xl text-base select-none">
              Autre
            </span>
          </div>

          {/* Options de don */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {/* HelloAsso */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-4">
              <div>
                <p className="font-display font-bold text-neutral-800 text-base mb-1">
                  Don ponctuel
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Un soutien immédiat pour les activités en cours. Carte bancaire, PayPal,
                  virement — pour la diaspora et le monde entier.
                </p>
              </div>
              <a
                href="https://www.helloasso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                HelloAsso <ExternalLink size={14} />
              </a>
            </div>

            {/* PayDunya */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-4">
              <div>
                <p className="font-display font-bold text-neutral-800 text-base mb-1">
                  Soutien régulier
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Un virement mensuel pour une action continue. Mobile Money, Orange Money,
                  Wave — pour l&apos;Afrique de l&apos;Ouest.
                </p>
              </div>
              <a
                href="https://paydunya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                PayDunya <ExternalLink size={14} />
              </a>
            </div>

            {/* Partenariat */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-4">
              <div>
                <p className="font-display font-bold text-neutral-800 text-base mb-1">
                  Partenariat institutionnel
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Fondation, fonds ou organisation ? Discutons d&apos;un partenariat
                  stratégique adapté à vos objectifs.
                </p>
              </div>
              <Link href={`/${locale}/contact`} className="btn btn-secondary text-primary-700 mt-auto">
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Transparence */}
          <div className="bg-white rounded-2xl shadow-card p-5 flex items-start gap-4">
            <ShieldCheck size={22} className="text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-neutral-800 text-sm mb-1">
                100% des dons vont aux associations membres
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                NSS s&apos;engage à une transparence totale sur l&apos;utilisation des fonds.
                Aucune bureaucratie lourde, aucun intermédiaire inutile. Chaque soutien est
                directement investi dans les actions terrain des femmes rurales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
