import type { Metadata } from "next";
import EngagementsSection from "@/components/sections/EngagementsSection";

export const metadata: Metadata = {
  title: "Nos Engagements — Mouvement NSS",
  description:
    "NSS s'engage pour la souveraineté alimentaire, l'agroécologie, les semences paysannes et la gouvernance participative en Afrique de l'Ouest.",
};

const ENGAGEMENTS = [
  {
    num: "01",
    titre: "Souveraineté alimentaire",
    texte:
      "Le droit de chaque communauté à décider librement et de façon autonome de son système de production et d'alimentation. Pas de modèle imposé de l'extérieur.",
  },
  {
    num: "02",
    titre: "Agriculture familiale",
    texte:
      "La famille comme première force de travail. Une agriculture qui produit prioritairement ce dont les membres ont besoin, en harmonie avec la nature, créatrice d'emplois et de liens.",
  },
  {
    num: "03",
    titre: "Semences paysannes",
    texte:
      "Promouvoir et préserver les semences sélectionnées selon des procédés endogènes. Résilientes, productives, libres — elles sont la biodiversité vivante de nos systèmes alimentaires.",
  },
  {
    num: "04",
    titre: "Biodiversité",
    texte:
      "Conserver et renforcer la variété du monde vivant. La biodiversité reconnaît la complémentarité entre les éléments de la nature — condition d'un développement réellement durable.",
  },
  {
    num: "05",
    titre: "Agroécologie",
    texte:
      "Un système holistique qui soutient la santé des écosystèmes, s'appuie sur les cycles naturels adaptés aux conditions locales, et refuse les intrants agrochimiques et synthétiques.",
  },
  {
    num: "06",
    titre: "Accès équitable aux ressources",
    texte:
      "Chaque femme rurale doit avoir un accès réel et égal aux ressources agricoles — terre, eau, semences, équipement, financement — selon ses besoins, en intégrant pleinement les paramètres de genre.",
  },
  {
    num: "07",
    titre: "Gouvernance participative",
    texte:
      "Les organisations et familles paysannes doivent participer effectivement à la définition, la mise en œuvre, le suivi et l'évaluation des politiques agricoles qui les concernent.",
  },
];

export default function EngagementsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0e2418", color: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span style={{
            display: "block",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#2d6a47",
            marginBottom: "20px",
            fontFamily: "var(--font-body)",
          }}>
            Nos convictions
          </span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}>
            Ce en quoi nous croyons, ce pour quoi nous agissons
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#b8c9bf",
            maxWidth: "560px",
            margin: 0,
          }}>
            Les engagements de NSS ne sont pas des déclarations d&apos;intention. Ce sont des
            pratiques vécues quotidiennement par 175 000 femmes rurales à travers l&apos;Afrique
            de l&apos;Ouest.
          </p>
        </div>
      </section>

      <EngagementsSection />
    </>
  );
}
