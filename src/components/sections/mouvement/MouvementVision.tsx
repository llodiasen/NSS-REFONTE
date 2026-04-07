"use client";

import { useState } from "react";

const OBJECTIFS = [
  {
    num: "01",
    text: "Promouvoir les savoirs agricoles transmis pendant des générations et qui ont préservé la souveraineté alimentaire sur le continent.",
  },
  {
    num: "02",
    text: "Promouvoir l'agriculture familiale à travers l'agro-écologie.",
  },
  {
    num: "03",
    text: "Influencer les décideurs et promouvoir une meilleure gouvernance agricole.",
  },
];

const ACTIONS = [
  "Organiser des séances d'Information-Éducation-Communication (IEC) sur la souveraineté alimentaire et sur l'agro-écologie.",
  "Organiser des sessions de partage de techniques et de pratiques culturales endogènes et agro-écologiques.",
  "Intervenir dans des réunions pour provoquer des changements de comportement ou d'attitude en faveur de la souveraineté alimentaire.",
];

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(900px, 92vw)", aspectRatio: "16/9", position: "relative" }}>
        <iframe
          src="https://www.youtube.com/embed/?autoplay=1"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen"
        />
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "-40px", right: 0,
            background: "none", border: "none", color: "#fff",
            fontSize: "14px", cursor: "pointer", fontFamily: "var(--font-body)",
            letterSpacing: "0.1em",
          }}
        >
          ESC · Fermer
        </button>
      </div>
    </div>
  );
}

export default function MouvementVision() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ══ SECTION UNIFIÉE VISION + OBJECTIFS ══ */}
      <section style={{ background: "#ffffff" }}>
        <div
          className="vision-unified-grid"
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "560px",
          }}
        >
          {/* ── COLONNE GAUCHE ── */}
          <div style={{
            borderRight: "1px solid rgba(0,0,0,0.07)",
            padding: "40px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#2D6A4F", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#2D6A4F",
              }}>
                Nous Sommes la Solution
              </span>
            </div>

            {/* H2 */}
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 2.8vw, 36px)", fontWeight: 400, lineHeight: 1.12,
              color: "#071A10", marginBottom: "16px",
            }}>
              Notre vision,{" "}
              <em style={{ fontStyle: "italic", color: "#52B788" }}>
                nos engagements
              </em>
            </h2>

            {/* Texte vision */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px", lineHeight: 1.75, color: "#111111",
              textAlign: "justify",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              marginBottom: "24px", paddingBottom: "24px",
            }}>
              Nous Sommes la Solution œuvre pour une Afrique où les femmes rurales,
              impliquées dans la prise de décision, cultivent, transforment et consomment
              les produits de l&apos;agriculture familiale tout en préservant l&apos;environnement
              pour un développement durable.
            </p>

            {/* Label objectifs */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px", letterSpacing: "0.16em",
              textTransform: "uppercase", color: "rgba(0,0,0,0.35)",
              marginBottom: "12px", fontWeight: 500,
            }}>
              Objectifs — Ce que nous visons
            </p>

            {/* Liste objectifs */}
            <div>
              {OBJECTIFS.map(({ num, text }) => (
                <div
                  key={num}
                  className="obj-item"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    padding: "12px 6px",
                    transition: "background 0.2s, padding-left 0.2s",
                    cursor: "default",
                  }}
                >
                  <span
                    className="obj-num"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px", lineHeight: 1,
                      color: "rgba(82,183,136,0.3)",
                      transition: "color 0.2s",
                      paddingTop: "3px",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    className="obj-text"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px", lineHeight: 1.65,
                      color: "#111111",
                      transition: "color 0.2s",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Citation expansion */}
            <div style={{
              marginTop: "18px",
              background: "rgba(82,183,136,0.05)",
              borderLeft: "2px solid #52B788",
              padding: "14px 18px",
              borderRadius: "0 4px 4px 0",
            }}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px", fontStyle: "italic",
                lineHeight: 1.7, color: "#111111", margin: 0,
              }}>
                NSS vise à s&apos;élargir vers d&apos;autres régions du continent,
                en relation avec d&apos;autres initiatives similaires, afin de se
                donner un cachet continental.
              </p>
            </div>
          </div>

          {/* ── COLONNE DROITE — Vidéo ── */}
          <div style={{
            position: "relative",
            background: "#0D2B1A",
            backgroundImage: "repeating-linear-gradient(45deg, rgba(82,183,136,0.04) 0px, rgba(82,183,136,0.04) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, rgba(82,183,136,0.04) 0px, rgba(82,183,136,0.04) 1px, transparent 1px, transparent 12px)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}>

            {/* Overlay gradient */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(7,26,16,0.15) 0%, transparent 40%, rgba(7,26,16,0.75) 100%)",
            }} />

            {/* Badge durée */}
            <div style={{
              position: "absolute", top: "20px", right: "20px", zIndex: 2,
              background: "rgba(7,26,16,0.75)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "40px",
              padding: "5px 12px",
              fontFamily: "'DM Sans', var(--font-body), sans-serif",
              fontSize: "11px", color: "#ffffff",
              letterSpacing: "0.05em",
            }}>
              04:32
            </div>

            {/* Bouton Play — centré */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 2,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "14px",
            }}>
              <button
                onClick={() => setModalOpen(true)}
                className="play-btn"
                aria-label="Regarder le documentaire"
                style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" style={{ marginLeft: "4px" }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
              <span style={{
                fontFamily: "'DM Sans', var(--font-body), sans-serif",
                fontSize: "10px", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
              }}>
                Regarder le film
              </span>
            </div>

            {/* Info bas */}
            <div style={{ position: "relative", zIndex: 2, padding: "28px 32px" }}>
              <span style={{
                display: "block",
                fontFamily: "'DM Sans', var(--font-body), sans-serif",
                fontSize: "9px", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#E07B39",
                marginBottom: "6px",
              }}>
                NSS — Documentaire
              </span>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px", fontWeight: 400,
                color: "#ffffff", margin: "0 0 4px",
                lineHeight: 1.2,
              }}>
                Les femmes rurales, actrices du changement
              </p>
              <span style={{
                fontFamily: "'DM Sans', var(--font-body), sans-serif",
                fontSize: "11px", color: "rgba(255,255,255,0.35)",
              }}>
                Afrique de l&apos;Ouest · 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONSOLIDER & ÉLARGIR ══ */}
      <section style={{ background: "#f7f4ef" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "96px var(--container-pad)" }}>
          <div className="consolider-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            {/* Gauche */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <span style={{ display: "block", width: "32px", height: "1px", background: "rgba(29,122,82,0.4)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "var(--green-600)" }}>
                  Nos actions
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 400, lineHeight: 1.2,
                color: "#071A10", marginBottom: "24px",
              }}>
                Consolider et élargir{" "}
                <em style={{ fontStyle: "italic", color: "var(--green-600)" }}>
                  «&nbsp;Nous Sommes la Solution&nbsp;»
                </em>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px",
                fontWeight: 400, lineHeight: 1.75,
                color: "#111111", margin: 0,
              }}>
                En vue de contribuer au mouvement pour la souveraineté alimentaire,
                les membres de Nous sommes la solution sont invités à :
              </p>
            </div>

            {/* Droite */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {ACTIONS.map((action, i) => (
                <div key={i} style={{
                  display: "flex", gap: "28px", alignItems: "flex-start",
                  padding: "28px 0",
                  borderBottom: i < ACTIONS.length - 1 ? "1px solid rgba(29,122,82,0.12)" : "none",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "32px",
                    fontWeight: 400, lineHeight: 1,
                    color: "rgba(29,122,82,0.2)",
                    flexShrink: 0, paddingTop: "4px",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px",
                    fontWeight: 400, lineHeight: 1.75,
                    color: "#111111", margin: 0,
                  }}>
                    {action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}

      <style>{`
        .play-btn:hover {
          background: rgba(224,123,57,0.4) !important;
          border-color: #E07B39 !important;
          transform: scale(1.1);
        }
        .obj-item:hover { background: rgba(45,106,79,0.04); padding-left: 6px; }
        .obj-item:hover .obj-num  { color: rgba(82,183,136,0.65) !important; }
        .obj-item:hover .obj-text { color: #071A10 !important; }

        @media (max-width: 900px) {
          .vision-unified-grid { grid-template-columns: 1fr !important; }
          .consolider-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
