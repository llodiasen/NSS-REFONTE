import type { Metadata } from "next";
import EngagementsSection from "@/components/sections/EngagementsSection";

export const metadata: Metadata = {
  title: "Nos Engagements — Mouvement NSS",
  description:
    "NSS s'engage pour la souveraineté alimentaire, l'agroécologie, les semences paysannes et la gouvernance participative en Afrique de l'Ouest.",
};

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
