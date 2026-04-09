"use client";

import { useState } from "react";

const CONVICTIONS = [
  {
    title: "La femme rurale nourrit le continent",
    body: "Plus de 70% des denrées alimentaires d'Afrique de l'Ouest sont produites par des femmes qui n'ont ni accès à la terre, ni aux financements, ni aux instances de décision.",
  },
  {
    title: "L'agroécologie est notre boussole",
    body: "Des pratiques agricoles durables, portées par les savoirs locaux, la biodiversité et la souveraineté des semences paysannes.",
  },
  {
    title: "Le changement vient de l'intérieur",
    body: "NSS porte la voix de la base des femmes rurales — nous leur donnons les espaces et la force collective pour transformer elles-mêmes les systèmes alimentaires.",
  },
];

export default function PourquoiNSS() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: "#fff", padding: "72px 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Tag "Pourquoi NSS" */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <span style={{ width: "32px", height: "1px", background: "#2d7a4f", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#2d7a4f",
          }}>
            Pourquoi NSS
          </span>
        </div>

        {/* Grille 2 colonnes */}
        <div className="pqn2-grid">

          {/* Colonne gauche */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#1a1a1a",
              marginBottom: "28px",
            }}>
              Les femmes nourrissent l&apos;Afrique.{" "}
              <span style={{ color: "#6b7280", fontWeight: 700 }}>Leurs voix restent inaudibles.</span>
            </h2>

            {/* Stats empilées */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              {[
                { num: "70%",  label: "des denrées alimentaires produites par les femmes rurales" },
                { num: "0",    label: "accès aux terres, ressources foncières et financières" },
                { num: "14",   label: "pays mobilisés par NSS depuis 2011" },
              ].map(({ num, label }) => (
                <div
                  key={num}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#2d7a4f",
                    minWidth: "60px",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}>
                    {num}
                  </span>
                  <span style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: 1.5,
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div>
            {/* Paragraphe 1 avec drop cap */}
            <p className="pqn2-dropcap" style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "15px",
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}>
              En Afrique de l&apos;Ouest, les femmes rurales représentent la colonne vertébrale de
              l&apos;agriculture familiale — elles produisent près de 70&nbsp;% des denrées alimentaires
              du continent. Pourtant, elles n&apos;ont pas accès aux terres, aux semences, au financement,
              ni aux instances de décision.
            </p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "15px",
              color: "#4b5563",
              lineHeight: 1.8,
            }}>
              NSS est né de ce constat. Pour donner la parole aux femmes rurales — mais aussi pour
              transformer leur rôle invisible en force collective pour la souveraineté alimentaire
              dans toute l&apos;Afrique.
            </p>
          </div>
        </div>

        {/* Sous-section Convictions */}
        <div style={{ marginTop: "48px" }}>

          {/* Tag "Nos convictions" */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span style={{ width: "32px", height: "1px", background: "#2d7a4f", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#2d7a4f",
            }}>
              Nos convictions
            </span>
          </div>

          {/* Accordéon */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {CONVICTIONS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                    }}>
                      {item.title}
                    </span>
                    {/* Icône + dans cercle */}
                    <span style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(45,122,79,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#2d7a4f",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1,
                      transition: "transform 0.25s ease",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}>
                      +
                    </span>
                  </button>
                  <div style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "200px" : "0",
                    transition: "max-height 0.3s ease",
                  }}>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: "#6b7280",
                      lineHeight: 1.7,
                      paddingBottom: "18px",
                    }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .pqn2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .pqn2-dropcap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: #2d7a4f;
          float: left;
          line-height: 0.85;
          margin-right: 6px;
          margin-top: 4px;
        }
        @media (max-width: 768px) {
          .pqn2-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
