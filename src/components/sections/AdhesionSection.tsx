"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Framer Motion helpers ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

function FU({
  children,
  i = 0,
  style,
}: {
  children: React.ReactNode;
  i?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      custom={i}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const OBJECTIFS = [
  "Défendre la souveraineté alimentaire des peuples d'Afrique de l'Ouest",
  "Promouvoir et protéger les savoirs paysans et les semences traditionnelles",
  "Amplifier la voix des femmes rurales dans les instances de décision",
  "Renforcer la solidarité entre organisations paysannes à l'échelle continentale",
];

const ETAPES = [
  {
    num: "01",
    title: "Contactez-nous",
    desc: "Envoyez une demande d'adhésion à votre organisation membre NSS nationale ou directement au secrétariat.",
  },
  {
    num: "02",
    title: "Validation de votre dossier",
    desc: "Le Conseil d'Administration examine votre candidature et vérifie l'alignement avec les valeurs du mouvement.",
  },
  {
    num: "03",
    title: "Bienvenue dans le mouvement",
    desc: "Accédez aux ressources, formations, réseaux et espaces de plaidoyer du mouvement NSS.",
  },
];

const STRUCT = [
  {
    watermark: "AG",
    label: "Instance souveraine",
    title: "Assemblée Générale",
    body: "Organe suprême du mouvement, l'Assemblée Générale réunit toutes les organisations membres. Elle fixe les orientations stratégiques, élit le Conseil d'Administration et valide les comptes annuels.",
  },
  {
    watermark: "CA",
    label: "Direction collégiale",
    title: "Conseil d'Administration",
    body: "Composé de représentantes élues par pays, le CA assure la gouvernance quotidienne du mouvement, supervise les programmes et garantit la redevabilité envers les membres.",
  },
  {
    watermark: "FA",
    label: "Appui technique",
    title: "Fahamu Africa",
    body: "Partenaire technique depuis la fondation en 2011, Fahamu Africa accompagne NSS dans la coordination inter-pays, la communication et le renforcement des capacités organisationnelles.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function AdhesionSection() {
  return (
    <section style={{ background: "#fff" }}>

      {/* ══ BLOC 1 — GRID 2 COLONNES ══════════════════════════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "0.5px solid rgba(0,0,0,0.08)",
        }}
        className="adh-top-grid"
      >
        {/* Gauche — Objectifs */}
        <FU i={0} style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "72px 56px",
              background: "#fff",
              height: "100%",
              borderRight: "0.5px solid rgba(0,0,0,0.08)",
              boxSizing: "border-box",
            }}
            className="adh-left"
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#2D6A4F",
                marginBottom: "14px",
              }}
            >
              Nos objectifs
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#1A1A1A",
                marginBottom: "36px",
              }}
            >
              Ce que NSS s&apos;engage<br />à défendre
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {OBJECTIFS.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    paddingTop: i === 0 ? "0" : "16px",
                    paddingBottom: "16px",
                    borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#2D6A4F",
                      opacity: 0.5,
                      flexShrink: 0,
                      marginTop: "7px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      lineHeight: 1.75,
                      color: "#333",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FU>

        {/* Droite — Rejoignez-nous */}
        <FU i={1} style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "72px 56px",
              background: "#f7faf8",
              height: "100%",
              boxSizing: "border-box",
            }}
            className="adh-right"
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#2D6A4F",
                marginBottom: "14px",
              }}
            >
              Rejoignez-nous
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#1A1A1A",
                marginBottom: "36px",
              }}
            >
              Comment adhérer<br />au mouvement
            </h2>

            <div>
              {ETAPES.map(({ num, title, desc }, i) => (
                <div
                  key={num}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    paddingTop: i === 0 ? "0" : "24px",
                    paddingBottom: "24px",
                    borderBottom:
                      i < ETAPES.length - 1
                        ? "0.5px solid rgba(0,0,0,0.08)"
                        : "none",
                  }}
                >
                  {/* Cercle numéro */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#1a3a2a",
                      flexShrink: 0,
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {num}
                  </span>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-display)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      {title}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        lineHeight: 1.75,
                        color: "#1A1A1A",
                        opacity: 0.45,
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FU>
      </div>

      {/* ══ BLOC 2 — STRUCTURATION GRID 3 COLONNES ════════════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderTop: "0.5px solid rgba(0,0,0,0.08)",
          background: "#fff",
        }}
        className="adh-struct-grid"
      >
        {STRUCT.map(({ watermark, label, title, body }, i) => (
          <FU key={watermark} i={i * 0.5}>
            <div
              style={{
                position: "relative",
                padding: "48px 40px",
                borderLeft: i === 0 ? "none" : "0.5px solid rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "background 0.25s ease",
                height: "100%",
                boxSizing: "border-box",
              }}
              className="adh-struct-col"
            >
              {/* Watermark */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "var(--font-display)",
                  fontSize: "120px",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#1a3a2a",
                  opacity: 0.02,
                  letterSpacing: "-4px",
                  userSelect: "none",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {watermark}
              </span>

              {/* Label 9px */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1A1A1A",
                  opacity: 0.3,
                  marginBottom: "12px",
                }}
              >
                {label}
              </span>

              {/* Ligne verte animée */}
              <div
                className="adh-bar"
                style={{
                  height: "2px",
                  background: "#2D6A4F",
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />

              {/* Titre */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "#1A1A1A",
                  marginBottom: "12px",
                }}
              >
                {title}
              </h3>

              {/* Corps */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  lineHeight: 1.8,
                  color: "#1A1A1A",
                  opacity: 0.45,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          </FU>
        ))}
      </div>

      {/* ══ BLOC 3 — CTA FINALE ══════════════════════════════════════════ */}
      <FU i={0}>
        <div
          style={{
            background: "#1a3a2a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
          className="adh-cta-band"
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Rejoindre le mouvement
            </span>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#fff",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              175 000 femmes qui{" "}
              <em style={{ fontStyle: "italic", color: "#7dd4a0" }}>
                nourrissent l&apos;Afrique
              </em>{" "}
              depuis 2011
            </p>
          </div>

          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#fff",
              border: "none",
              borderRadius: "28px",
              padding: "16px 32px",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1a3a2a",
              cursor: "pointer",
              flexShrink: 0,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            className="adh-cta-btn"
          >
            Adhérer maintenant →
          </button>
        </div>
      </FU>

      <style>{`
        /* Barre verte */
        .adh-bar { width: 20px; transition: width 0.3s ease; }
        .adh-struct-col:hover .adh-bar { width: 36px; }
        .adh-struct-col:hover { background: #f7faf8; }

        /* CTA btn */
        .adh-cta-btn:hover { opacity: 0.9; transform: translateX(4px); }

        /* Responsive */
        @media (max-width: 900px) {
          .adh-top-grid { grid-template-columns: 1fr !important; }
          .adh-left { border-right: none !important; border-bottom: 0.5px solid rgba(0,0,0,0.08); padding: 48px 24px !important; }
          .adh-right { padding: 48px 24px !important; }
          .adh-struct-grid { grid-template-columns: 1fr !important; }
          .adh-struct-col { border-left: none !important; border-top: 0.5px solid rgba(0,0,0,0.08); }
          .adh-struct-col:first-child { border-top: none; }
          .adh-cta-band { flex-direction: column !important; align-items: flex-start !important; gap: 32px; padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  );
}
