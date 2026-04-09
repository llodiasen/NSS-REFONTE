"use client";

import { useState } from "react";

const STEPS = [
  {
    nodeLabel: "2011",
    badge: "NAISSANCE",
    badgeBg: "rgba(82,183,136,0.12)",
    badgeColor: "#2D6A4F",
    watermark: "2011",
    title: "Campagne fondatrice",
    desc: "NSS naît comme expression des droits des femmes dans une campagne globale pour la souveraineté alimentaire, avec l'appui de l'ONG Fahamu Africa.",
    isToday: false,
  },
  {
    nodeLabel: "2011–14",
    badge: "TRANSITION",
    badgeBg: "rgba(13,43,26,0.10)",
    badgeColor: "#0D2B1A",
    watermark: "2014",
    title: "De campagne à mouvement",
    desc: "NSS s'affirme comme mouvement paysan autonome, ancré dans chaque pays membre d'Afrique de l'Ouest.",
    isToday: false,
  },
  {
    nodeLabel: "2017",
    badge: "GOUVERNANCE",
    badgeBg: "rgba(224,123,57,0.12)",
    badgeColor: "#B85C1A",
    watermark: "2017",
    title: "1ère Assemblée Générale",
    desc: "Instances dirigeantes constituées à 100% de femmes rurales. Chaque pays représenté au Conseil d'Administration qui élit le bureau.",
    isToday: false,
  },
  {
    nodeLabel: "Auj.",
    badge: "LEADERSHIP",
    badgeBg: "rgba(59,130,246,0.10)",
    badgeColor: "#1D4ED8",
    watermark: "Auj.",
    title: "Autonomie totale",
    desc: "L'appui de Fahamu Africa se réduit progressivement face au leadership prononcé des femmes leaders qui pilotent le mouvement.",
    isToday: true,
  },
];

export default function AboutStructure() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--section-py) var(--container-pad)",
      }}>

        {/* ── Wrapper fond arrondi ── */}
        <div style={{
          background: "#ffffff",
          borderRadius: "8px",
          padding: "56px 40px",
        }}>

          {/* En-tête centré */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
              <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "#2D6A4F" }} />
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "2.5px", color: "#2D6A4F",
              }}>
                Notre Histoire
              </span>
              <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "#2D6A4F" }} />
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(21px, 3vw, 34px)",
              fontWeight: 400, lineHeight: 1.18,
              color: "#071A10", margin: 0,
            }}>
              L&apos;évolution du mouvement{" "}
              <em style={{ fontStyle: "italic", color: "#52B788" }}>NSS</em>
            </h2>
          </div>

          {/* ── Timeline ── */}
          <div style={{ position: "relative", marginBottom: "32px", padding: "0 34px" }}>
            {/* Ligne dégradée */}
            <div aria-hidden="true" style={{
              position: "absolute",
              top: "34px",
              left: "calc(34px + 12.5%)",
              right: "calc(34px + 12.5%)",
              height: "2px",
              background: "linear-gradient(to right, #52B788, #0D2B1A)",
              zIndex: 0,
            }} />

            {/* Nœuds */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              position: "relative",
              zIndex: 1,
            }}>
              {STEPS.map((step, i) => {
                const isActive = active === i;
                const isToday = step.isToday;
                let bg = "#0D2B1A";
                let color = "#ffffff";
                let border = "#0D2B1A";
                if (isActive && isToday) { bg = "#ffffff"; color = "#52B788"; border = "#52B788"; }
                else if (isActive)       { bg = "#52B788"; color = "#ffffff"; border = "#52B788"; }
                else if (isToday)        { bg = "#ffffff"; color = "#0D2B1A"; border = "#0D2B1A"; }

                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <button
                      onClick={() => setActive(i)}
                      className={`tl-node ${isActive ? "tl-node-active" : ""}`}
                      aria-pressed={isActive}
                      style={{
                        width: "68px", height: "68px", borderRadius: "50%",
                        background: bg, color: color,
                        border: `3px solid ${border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        fontSize: step.nodeLabel.length > 4 ? "10px" : "13px",
                        fontWeight: 700,
                        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, border-color 0.2s",
                      }}
                    >
                      {step.nodeLabel}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Cartes ── */}
          <div className="tl-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`tl-card ${isActive ? "tl-card-active" : ""}`}
                  style={{
                    position: "relative",
                    background: isActive ? "#071A10" : "#ffffff",
                    borderRadius: "8px",
                    padding: "28px 24px",
                    border: `1.5px solid ${isActive ? "rgba(82,183,136,0.3)" : "rgba(0,0,0,0.07)"}`,
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease",
                    transform: isActive ? "translateY(-6px)" : "none",
                    boxShadow: isActive ? "0 16px 40px rgba(13,43,26,0.12)" : "none",
                  }}
                >
                  {/* Watermark */}
                  <span aria-hidden="true" style={{
                    position: "absolute",
                    top: "-10px", right: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "72px", fontWeight: 400, lineHeight: 1,
                    color: isActive ? "rgba(255,255,255,0.06)" : "rgba(13,43,26,0.07)",
                    userSelect: "none", pointerEvents: "none",
                    transition: "color 0.3s",
                  }}>
                    {step.watermark}
                  </span>

                  {/* Badge */}
                  <span style={{
                    display: "inline-block",
                    fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "1px",
                    background: step.badgeBg, color: step.badgeColor,
                    borderRadius: "20px", padding: "3px 10px",
                    marginBottom: "14px",
                  }}>
                    {step.badge}
                  </span>

                  {/* Titre */}
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 700,
                    color: isActive ? "#ffffff" : "#111111",
                    lineHeight: 1.3, marginBottom: "10px",
                  }}>
                    {step.title}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400,
                    color: isActive ? "rgba(255,255,255,0.75)" : "#111111",
                    lineHeight: 1.7, margin: "0 0 16px",
                    textAlign: "justify",
                  }}>
                    {step.desc}
                  </p>

                  {/* Lien */}
                  <span className={`tl-link ${isActive ? "tl-link-visible" : ""}`} style={{
                    display: "block",
                    fontFamily: "var(--font-body)", fontSize: "11px",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    color: "#52B788",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}>
                    En savoir plus →
                  </span>

                  {/* Barre bas */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "3px",
                    background: isActive
                      ? "linear-gradient(to right, #52B788, #E07B39)"
                      : "linear-gradient(to right, #52B788, #2D6A4F)",
                    transformOrigin: "left",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.35s ease",
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .tl-node:hover { transform: scale(1.18) !important; box-shadow: 0 0 0 8px rgba(82,183,136,0.2) !important; }
        .tl-card:hover:not(.tl-card-active) {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(13,43,26,0.12) !important;
          border-color: rgba(82,183,136,0.3) !important;
          background: #071A10 !important;
        }
        .tl-card:hover:not(.tl-card-active) p { color: #ffffff !important; }
        .tl-card:hover .tl-link { opacity: 1 !important; transform: translateY(0) !important; }
        .tl-card:hover > div:last-child { transform: scaleX(1) !important; }

        @media (max-width: 900px) {
          .tl-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .tl-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
