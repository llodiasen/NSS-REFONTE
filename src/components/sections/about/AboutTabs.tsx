"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = ["Notre histoire", "Pourquoi NSS\u00a0?", "Notre vision"] as const;
type Tab = (typeof TABS)[number];

const PAYS = [
  { flag: "🇧🇫", nom: "Burkina Faso" },
  { flag: "🇬🇭", nom: "Ghana" },
  { flag: "🇬🇳", nom: "Guinée" },
  { flag: "🇲🇱", nom: "Mali" },
  { flag: "🇸🇳", nom: "Sénégal" },
  { flag: "🇬🇼", nom: "Guinée Bissau" },
  { flag: "🇬🇲", nom: "Gambie" },
];

const PILIERS = [
  { icon: "🌱", label: "Cultiver & produire" },
  { icon: "🤝", label: "Décider ensemble" },
  { icon: "🌍", label: "Préserver la nature" },
];

export default function AboutTabs() {
  const [active, setActive] = useState<Tab>("Notre histoire");

  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="tabs-wrap"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 56px",
        }}
      >
        {/* Label + Titre */}
        <div style={{ marginBottom: "44px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)", whiteSpace: "nowrap" }}>
              À propos de NSS
            </span>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(29,122,82,0.35)", flexShrink: 0 }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(21px, 3vw, 34px)", fontWeight: 400, lineHeight: 1.18, color: "var(--text-primary)", margin: 0 }}>
            Un mouvement né des champs.
          </h2>
        </div>

        {/* Onglets */}
        <div className="tabs-bar" style={{ display: "flex", borderBottom: "1px solid #e8e8e6", marginBottom: "48px" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="tab-btn"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "15px",
                fontWeight: active === tab ? 600 : 400,
                color: active === tab ? "#1a6b3c" : "#888",
                background: "none",
                border: "none",
                borderBottom: `2.5px solid ${active === tab ? "#1a6b3c" : "transparent"}`,
                padding: "12px 28px 16px",
                cursor: "pointer",
                marginBottom: "-1px",
                transition: "color 0.2s ease, border-color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel 1 — Notre histoire */}
        {active === "Notre histoire" && (
          <div className="tabs-panel" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)", display: "block", marginBottom: "16px" }}>
                Depuis 2011
              </span>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, lineHeight: 1.25, color: "var(--text-primary)", marginBottom: "20px" }}>
                Née des champs, portée par des milliers de voix.
              </h3>
              <p style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "15px", lineHeight: 1.8, color: "var(--text-body)", marginBottom: "32px", textAlign: "justify" }}>
                NSS a été lancé en 2011 par douze organisations de femmes rurales du Burkina Faso, du Ghana, de la Guinée, du Mali et du Sénégal. Créé comme expression des droits des femmes au sein d&apos;une campagne globale pour la souveraineté alimentaire, NSS s&apos;est imposé sur le champ des alternatives paysannes durables, économiquement rentables, socialement et écologiquement viables.
              </p>
              {/* Stats */}
              <div style={{ display: "flex", gap: "32px", marginBottom: "28px" }}>
                {[{ val: "175 000", lbl: "Membres" }, { val: "500+", lbl: "AFR" }, { val: "2011", lbl: "Fondation" }].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "26px", fontWeight: 400, color: "#1a6b3c", lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>{lbl}</div>
                  </div>
                ))}
              </div>
              {/* Pays */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {PAYS.map(({ flag, nom }) => (
                  <span key={nom} style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "12px", background: "#f0f7f2", color: "#1a6b3c", borderRadius: "20px", padding: "4px 12px", display: "flex", alignItems: "center", gap: "5px" }}>
                    <span>{flag}</span>{nom}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", minHeight: "440px" }}>
              <Image src="/images/actualites/rencontre-2025.jpg" alt="Rencontre annuelle NSS" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="50vw" />
            </div>
          </div>
        )}

        {/* Panel 2 — Pourquoi NSS ? */}
        {active === "Pourquoi NSS\u00a0?" && (
          <div className="tabs-panel" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)", display: "block", marginBottom: "16px" }}>
                Le contexte
              </span>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, lineHeight: 1.25, color: "var(--text-primary)", marginBottom: "20px" }}>
                L&apos;agriculture familiale nourrit l&apos;Afrique. Ses actrices restent invisibles.
              </h3>
              <p style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "15px", lineHeight: 1.8, color: "var(--text-body)", marginBottom: "32px", textAlign: "justify" }}>
                En Afrique, l&apos;agriculture familiale constitue l&apos;économie d&apos;environ 70% des populations et assure l&apos;essentiel des productions agricoles. Pourtant, les paysan·nes qui créent cette richesse ont un faible accès à la terre et aux ressources de production. NSS est né pour promouvoir leur voix dans la gouvernance agricole aux niveaux local, national et continental.
              </p>
              {/* Stats */}
              <div style={{ display: "flex", gap: "32px" }}>
                {[{ val: "70%", lbl: "des populations" }, { val: "14", lbl: "pays membres" }].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "26px", fontWeight: 400, color: "#1a6b3c", lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", minHeight: "440px" }}>
              <Image src="/images/galerie/agro-1.jpg" alt="Femmes rurales dans les champs" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="50vw" />
            </div>
          </div>
        )}

        {/* Panel 3 — Notre vision */}
        {active === "Notre vision" && (
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Image de fond */}
            <Image src="/images/galerie/rencontre-1.jpg" alt="Femmes NSS en assemblée" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="100vw" />
            {/* Overlay sombre */}
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(10,30,18,0.88)" }} />
            {/* Contenu */}
            <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", textAlign: "center", padding: "56px 40px" }}>
              {/* Guillemet décoratif */}
              <div aria-hidden="true" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "80px", lineHeight: 0.6, color: "#1a6b3c", marginBottom: "28px", userSelect: "none" }}>&ldquo;</div>
              <blockquote style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400, lineHeight: 1.75, color: "#ffffff", margin: "0 0 48px", textAlign: "justify" }}>
                Nous Sommes la Solution œuvre pour une Afrique où, dans la solidarité, les femmes rurales, impliquées dans la prise de décision, cultivent, transforment, vendent et consomment les produits de l&apos;agriculture familiale tout en préservant l&apos;environnement pour un développement harmonieux et durable.
              </blockquote>
              {/* 3 piliers */}
              <div className="piliers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {PILIERS.map(({ icon, label }) => (
                  <div key={label} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "18px 12px", backdropFilter: "blur(4px)" }}>
                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
                    <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .tab-btn:hover { color: #1a6b3c !important; }
        @media (max-width: 768px) {
          .tabs-wrap { padding: 52px 20px !important; }
          .tabs-bar { gap: 0; overflow-x: auto; }
          .tab-btn { padding: 10px 16px 14px !important; font-size: 13px !important; }
          .tabs-panel { grid-template-columns: 1fr !important; gap: 32px !important; }
          .tabs-panel > div:last-child { min-height: 280px !important; }
          .piliers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
