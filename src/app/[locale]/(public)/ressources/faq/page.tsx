import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import type { FAQItem } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Foire aux questions — Mouvement NSS | wasafrica.org",
  description:
    "Toutes les réponses sur la souveraineté alimentaire, l'agroécologie et le mouvement NSS. Questions fréquentes sur l'adhésion, les programmes et nos engagements.",
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Qu'est-ce que la souveraineté alimentaire ?",
    answer:
      "La souveraineté alimentaire est le droit de chaque peuple à définir librement ses propres systèmes alimentaires et agricoles. Elle garantit à chaque communauté le pouvoir de décider ce qu'elle produit, comment elle le produit et ce qu'elle mange — sans dépendance aux marchés mondiaux ni aux décisions imposées de l'extérieur. NSS la défend comme un droit fondamental, non comme une option.",
  },
  {
    question: "Quel est le rôle des femmes rurales dans la souveraineté alimentaire ?",
    answer:
      "En Afrique, les femmes rurales assurent l'essentiel de la production alimentaire familiale. Elles sèment, cultivent, récoltent, transforment et conservent. Elles transmettent les savoirs agricoles de génération en génération. Pourtant, elles restent marginalisées dans les décisions qui gouvernent leur travail. NSS change cela : les femmes rurales ne sont pas des bénéficiaires de politiques agricoles — elles en sont les premières architectes.",
  },
  {
    question: "Qu'est-ce que le mouvement Nous Sommes la Solution (NSS) ?",
    answer:
      "NSS est un mouvement panafricain lancé en 2011 par 12 organisations de femmes rurales dans 5 pays d'Afrique de l'Ouest. Il rassemble aujourd'hui 175 000 membres et plus de 500 Associations de Femmes Rurales (AFR). NSS promeut l'agroécologie, les semences paysannes, l'agriculture familiale et la participation des femmes rurales dans la gouvernance agricole locale, nationale et continentale.",
  },
  {
    question: "Pourquoi NSS dit-elle que « les femmes sont la solution » ?",
    answer:
      "Ce n'est pas un slogan — c'est un constat. Les femmes rurales africaines produisent la majorité des aliments consommés sur le continent. Elles ont les savoirs, les pratiques et la volonté. Ce qui leur manque, c'est l'accès aux ressources et aux décisions. NSS ne les considère pas comme des victimes à aider, mais comme des actrices à soutenir et à reconnaître dans leurs droits.",
  },
  {
    question: "Comment NSS contribue-t-elle concrètement à la souveraineté alimentaire ?",
    answer:
      "NSS agit à plusieurs niveaux : formation des femmes agricultrices à l'agroécologie (CIFAP), sensibilisation des communautés rurales à travers des séances IEC (Information-Éducation-Communication), partage de techniques culturales endogènes, plaidoyer auprès des décideurs agricoles, et préservation des semences paysannes. Chaque action relie la pratique du terrain au changement de politique.",
  },
  {
    question: "Qu'est-ce que l'agroécologie et pourquoi est-elle au cœur de l'action NSS ?",
    answer:
      "L'agroécologie est une approche agricole holistique qui s'appuie sur les cycles naturels des écosystèmes, valorise les savoirs locaux et refuse les intrants agrochimiques. Elle est au cœur de NSS parce qu'elle correspond exactement à ce que les femmes rurales africaines pratiquent depuis des générations — et parce qu'elle est à la fois plus saine pour les populations, plus respectueuse de l'environnement, et plus résiliente face au changement climatique.",
  },
  {
    question: "Qu'est-ce qu'une semence paysanne ? Pourquoi NSS les défend-elle ?",
    answer:
      "Une semence paysanne est une semence sélectionnée et conservée par les agricultrices elles-mêmes, selon des procédés transmis de génération en génération. Adaptées aux terroirs locaux, résilientes, non brevetées — elles sont la biodiversité vivante de nos systèmes alimentaires. NSS défend leur libre circulation entre agriculteurs et s'oppose à leur privatisation, qui menacerait directement la souveraineté alimentaire des communautés rurales.",
  },
  {
    question: "Quels pays sont membres du mouvement NSS ?",
    answer:
      "NSS est présent dans 7 pays d'Afrique de l'Ouest : Burkina Faso, Gambie, Ghana, Guinée, Guinée Bissau, Mali et Sénégal. Le mouvement vise à s'étendre à d'autres pays du continent, en lien avec des initiatives similaires.",
  },
  {
    question: "Comment puis-je m'impliquer dans NSS ?",
    answer:
      "Plusieurs façons d'agir avec NSS : rejoindre le mouvement en tant que membre (individuel ou via votre organisation), participer aux formations et événements, partager les ressources et faire le plaidoyer dans votre réseau, ou soutenir financièrement nos programmes. Consultez la page « Agir » pour toutes les modalités.",
  },
  {
    question: "Comment adhérer au mouvement NSS ?",
    answer:
      "Pour adhérer au mouvement Nous Sommes la Solution, il faut remplir et signer une demande d'adhésion, régler sa cotisation, et souscrire à la vision et aux objectifs du mouvement. L'adhésion implique de s'impliquer dans les actions mises en œuvre, de partager l'information et de faire le plaidoyer. Contactez-nous ou consultez la page « Rejoindre ».",
  },
  {
    question: "Quels types de formations NSS organise-t-elle ?",
    answer:
      "NSS organise le CIFAP (Camp International de Formation sur l'Agroécologie Paysanne) à Niaguis au Sénégal, des séances d'Information-Éducation-Communication (IEC) dans les communautés rurales, des sessions de partage de techniques culturales endogènes, et des formations à la prise de parole et à la communication via le programme EMMAP.",
  },
  {
    question: "Comment NSS est-elle gouvernée ?",
    answer:
      "NSS est gouvernée à 100 % par des femmes rurales. Chaque pays membre est représenté par une déléguée au Conseil d'Administration, qui élit en son sein le Bureau exécutif. Les décisions et orientations sont prises collectivement par les instances du mouvement. L'ONG Fahamu Africa apporte un appui technique progressivement réduit, signe de l'autonomisation du mouvement.",
  },
  {
    question: "Quels sont les objectifs à long terme de NSS ?",
    answer:
      "NSS vise à consolider et étendre son réseau à l'ensemble du continent africain, à renforcer les capacités de ses associations membres, à influencer durablement les politiques agricoles en faveur de l'agriculture familiale et de l'agroécologie, et à faire reconnaître les femmes rurales comme actrices centrales de la sécurité alimentaire africaine.",
  },
  {
    question: "Comment la collaboration avec d'autres initiatives renforce-t-elle NSS ?",
    answer:
      "NSS s'inscrit dans un écosystème plus large de mouvements paysans et de solidarité internationale. Ses partenaires — Grassroots International, AgroEcology Fund, Thousand Currents, MATCH International, Fahamu Africa — partagent ses valeurs et amplifient sa capacité d'action. Les échanges avec d'autres initiatives similaires sur le continent permettent d'harmoniser les approches et de peser collectivement dans les débats de politique agricole.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Vos questions, nos réponses
          </h1>
          <p className="text-primary-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Tout ce que vous voulez savoir sur la souveraineté alimentaire, l&apos;agroécologie
            et le mouvement Nous Sommes la Solution.
          </p>
        </div>
      </section>

      {/* FAQ accordéon */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="py-14 px-4 bg-white border-t border-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xl font-bold text-neutral-800 mb-2">
            Vous n&apos;avez pas trouvé votre réponse ?
          </p>
          <p className="text-neutral-500 text-sm mb-6">
            Une question sur le mouvement, un projet de partenariat, une demande
            d&apos;adhésion — nous sommes là.
          </p>
          <a href="/fr/contact" className="btn btn-primary">
            Nous contacter
          </a>
        </div>
      </section>
    </>
  );
}
