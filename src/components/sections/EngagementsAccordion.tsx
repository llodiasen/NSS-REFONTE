"use client";

import { useState } from "react";

const ENGAGEMENTS = [
  {
    num: "01",
    title: "Souveraineté alimentaire",
    body: "NSS défend le droit des peuples à définir leurs propres politiques alimentaires et agricoles, adaptées à leurs contextes locaux. La souveraineté alimentaire place les producteurs et les consommateurs au cœur des systèmes alimentaires, contre les diktats des marchés mondiaux.",
  },
  {
    num: "02",
    title: "Agriculture familiale",
    body: "L'agriculture familiale représente plus de 80 % de la production alimentaire en Afrique de l'Ouest. NSS œuvre pour sa reconnaissance, son financement et sa protection face aux pressions des agro-industries et des politiques d'importation déloyales.",
  },
  {
    num: "03",
    title: "Semences paysannes",
    body: "Les semences paysannes sont le patrimoine vivant de générations de cultivatrices. NSS s'oppose à leur privatisation et à l'imposition de semences hybrides brevetées. Nous soutenons les banques de semences communautaires et les pratiques de sélection endogènes.",
  },
  {
    num: "04",
    title: "Biodiversité",
    body: "La diversité des espèces cultivées est un rempart contre les crises climatiques et sanitaires. NSS encourage les agricultrices à maintenir une grande variété de cultures, à préserver les savoirs botaniques et à refuser la monoculture intensive qui appauvrit les sols.",
  },
  {
    num: "05",
    title: "Agroécologie",
    body: "L'agroécologie intègre les principes écologiques dans les pratiques agricoles : gestion de l'eau, fertilité des sols, contrôle naturel des ravageurs. NSS forme les femmes rurales à ces techniques qui réduisent les coûts, préservent l'environnement et augmentent la résilience.",
  },
  {
    num: "06",
    title: "Accès équitable aux ressources",
    body: "Les femmes rurales cultivent l'essentiel des terres nourricières mais en détiennent rarement la propriété légale. NSS plaide pour un accès équitable au foncier, au crédit, à l'eau et aux intrants, en levant les obstacles juridiques et culturels qui excluent les femmes.",
  },
  {
    num: "07",
    title: "Gouvernance participative",
    body: "Les décisions qui affectent les communautés rurales doivent être prises avec elles, pas à leur place. NSS forme des leaders locales, renforce les organisations de base et accompagne la participation des femmes rurales dans les instances de gouvernance à tous les niveaux.",
  },
];

export default function EngagementsAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section style={{ background: "#fff" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 40px" }}
        className="engage-wrap"
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            marginBottom: "64px",
          }}
          className="engage-header"
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#2D6A4F",
                marginBottom: "8px",
              }}
            >
              Nos engagements
            </span>
            <div
              style={{ width: "48px", height: "2px", background: "#2D6A4F", marginBottom: "12px" }}
              aria-hidden="true"
            />
            <h2
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#1A1A1A",
                margin: 0,
                marginLeft: "-3px",
              }}
            >
              Les engagements<br />de Nous Sommes<br />la Solution
            </h2>
          </div>
          <div style={{ paddingLeft: "48px" }} className="engage-intro-pad">
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "16px",
                lineHeight: 1.85,
                color: "#555",
                margin: 0,
              }}
            >
              Sept axes fondamentaux qui guident l&apos;action du mouvement depuis
              sa fondation en 2011 — portés par 175&nbsp;000 femmes rurales à travers
              l&apos;Afrique de l&apos;Ouest.
            </p>
          </div>
        </div>

        {/* Accordéon */}
        <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}>
          {ENGAGEMENTS.map(({ num, title, body }) => {
            const isOpen = open === num;
            return (
              <div key={num} style={{ borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : num)}
                  aria-expanded={isOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 0",
                    textAlign: "left",
                  }}
                  className="engage-btn"
                >
                  {/* Numéro */}
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      color: "#1A1A1A",
                      opacity: 0.25,
                      minWidth: "48px",
                      flexShrink: 0,
                    }}
                  >
                    {num}
                  </span>

                  {/* Titre */}
                  <span
                    style={{
                      flex: 1,
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {title}
                  </span>

                  {/* Flèche */}
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "18px",
                      color: "#2D6A4F",
                      marginLeft: "24px",
                      flexShrink: 0,
                      transition: "transform 0.25s ease",
                      display: "inline-block",
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                {/* Contenu expandable */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "300px" : "0",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "15px",
                      lineHeight: 1.85,
                      color: "#555",
                      paddingLeft: "48px",
                      paddingBottom: "28px",
                      maxWidth: "680px",
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .engage-btn:hover > span:nth-child(2) { color: #2D6A4F !important; }
        @media (max-width: 900px) {
          .engage-wrap { padding: 72px 24px !important; }
          .engage-header { grid-template-columns: 1fr !important; gap: 32px; }
          .engage-intro-pad { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
