"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface Org {
  id: string;
  nom: string;
  sigle: string;
  pays: string;
  type: "Fondatrice" | "Affiliée";
  logo: string;
}

const ORGS: Org[] = [
  { id: "1",  sigle: "FENOP",       nom: "Fédération Nationale des Organisations Paysannes",                       pays: "Burkina Faso", type: "Fondatrice", logo: "/images/Associations/FENOP.webp" },
  { id: "2",  sigle: "AGAFAM",      nom: "Association Guinéenne des AFR pour l'Agroécologie et le Marketing",      pays: "Guinée",       type: "Fondatrice", logo: "/images/Associations/AGAFAM.webp" },
  { id: "3",  sigle: "RUWFAG",      nom: "Rural Women Farmers Association of Ghana",                               pays: "Ghana",        type: "Fondatrice", logo: "/images/Associations/RUWFAG-768x768.webp" },
  { id: "4",  sigle: "CAFO",        nom: "Coordination des Associations et ONG Féminines",                        pays: "Mali",         type: "Fondatrice", logo: "/images/Associations/CAFO.webp" },
  { id: "5",  sigle: "AJAC",        nom: "Association des Jeunes Agriculteurs de Casamance",                      pays: "Sénégal",      type: "Fondatrice", logo: "/images/Associations/AJAC-1536x1044-1-768x522.webp" },
  { id: "6",  sigle: "RESACIFROAT", nom: "Réseau des Associations de Femmes Rurales de l'Afrique de l'Ouest",     pays: "Sénégal",      type: "Affiliée",   logo: "/images/Associations/RESACIFROAT.webp" },
  { id: "7",  sigle: "ABOFAM",      nom: "Association of Beneficiaries of Farm Management",                       pays: "Gambie",       type: "Affiliée",   logo: "/images/Associations/ABOFAM-768x723.webp" },
  { id: "8",  sigle: "AGUISSA",     nom: "Les Guinéens peuvent nourrir la Guinée",                                pays: "Guinée",       type: "Affiliée",   logo: "/images/Associations/AGUISSA.webp" },
  { id: "9",  sigle: "AOPP",        nom: "Association des Organisations Professionnelles Paysannes",               pays: "Mali",         type: "Affiliée",   logo: "/images/Associations/AOOP.webp" },
  { id: "10", sigle: "AMASSA",      nom: "Association Malienne pour la Sécurité et la Souveraineté Alimentaires",  pays: "Mali",         type: "Affiliée",   logo: "/images/Associations/AMASSA-e1723163900160.webp" },
  { id: "11", sigle: "UGPM",        nom: "Union des Groupements Paysans de Mékhé",                                pays: "Sénégal",      type: "Affiliée",   logo: "/images/Associations/UGPM.webp" },
  { id: "12", sigle: "KAFO",        nom: "Kafo des Femmes Rurales",                                               pays: "Gambie",       type: "Affiliée",   logo: "/images/Associations/KAFO.webp" },
  { id: "13", sigle: "CGF",         nom: "Coordination des Groupements Féminins",                                 pays: "Sénégal",      type: "Affiliée",   logo: "/images/Associations/CATALUNYA-1.webp" },
];

const PAYS = Array.from(new Set(ORGS.map((o) => o.pays))).sort();

function OrgCard({ org }: { org: Org }) {
  const [imgErr, setImgErr] = useState(false);
  const initials = org.sigle.slice(0, 2).toUpperCase();
  const isFondatrice = org.type === "Fondatrice";

  return (
    <div className="org-card" style={{ background: "#fff", borderRadius: "10px", border: "1px solid #e8e2d9", padding: "28px 20px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", cursor: "default", position: "relative", overflow: "hidden" }}>
      {/* Logo circle */}
      <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "1.5px solid #e8e2d9", display: "flex", alignItems: "center", justifyContent: "center", background: imgErr ? "linear-gradient(135deg,#1a3520,#3b7a45)" : "#f9f7f4", flexShrink: 0 }}>
        {imgErr ? (
          <span style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#fff" }}>{initials}</span>
        ) : (
          <Image src={org.logo} alt={org.sigle} width={80} height={80} style={{ objectFit: "contain", padding: "8px" }} onError={() => setImgErr(true)} />
        )}
      </div>

      {/* Badge */}
      <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: isFondatrice ? "#e8f2df" : "#f0ede7", color: isFondatrice ? "#3b6d11" : "#6b6358" }}>
        {org.type}
      </span>

      {/* Nom */}
      <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a3520", textAlign: "center", lineHeight: 1.4, margin: 0 }}>
        {org.sigle}
      </p>
      <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#888", textAlign: "center", lineHeight: 1.45, margin: 0 }}>
        {org.nom}
      </p>

      {/* Pays */}
      <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa" }}>
        {org.pays}
      </span>
    </div>
  );
}

export default function OrganisationsMembres({ locale: _locale }: { locale: string }) {
  const [activeType, setActiveType] = useState<"Toutes" | "Fondatrice" | "Affiliée">("Toutes");
  const [activePays, setActivePays] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ORGS.filter((o) => {
      const matchType = activeType === "Toutes" || o.type === activeType;
      const matchPays = !activePays || o.pays === activePays;
      return matchType && matchPays;
    });
  }, [activeType, activePays]);

  const setFilter = (type: "Toutes" | "Fondatrice" | "Affiliée", pays: string | null) => {
    setActiveType(type);
    setActivePays(pays);
  };

  const pillStyle = (active: boolean) => ({
    fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif" as const,
    fontSize: "12px",
    fontWeight: 500 as const,
    padding: "7px 18px",
    borderRadius: "20px",
    border: active ? "1px solid #1a3520" : "1px solid #d4ccbd",
    background: active ? "#1a3520" : "transparent",
    color: active ? "#fff" : "#6b6358",
    cursor: "pointer" as const,
    transition: "all 0.18s ease",
    whiteSpace: "nowrap" as const,
  });

  return (
    <section style={{ background: "#F6F3EE", padding: "80px 0 96px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>

        {/* ── En-tête ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          {/* Eyebrow avec lignes décoratives */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ display: "block", flex: 1, maxWidth: "80px", height: "1px", background: "#c4bfb5" }} />
            <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a7060" }}>
              Le Réseau
            </span>
            <span style={{ display: "block", flex: 1, maxWidth: "80px", height: "1px", background: "#c4bfb5" }} />
          </div>

          {/* Titre */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "clamp(21px,3.5vw,36px)", fontWeight: 400, color: "#1a3520", margin: "0 0 14px", lineHeight: 1.15 }}>
            Nos organisations{" "}
            <em style={{ fontStyle: "italic", color: "#5c8a3c" }}>membres.</em>
          </h2>

          {/* Sous-titre */}
          <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "14px", color: "#9c9488", margin: 0, letterSpacing: "0.02em" }}>
            14 pays · 5 organisations fondatrices · 500+ associations affiliées
          </p>
        </div>

        {/* ── Stats ── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", maxWidth: "520px", width: "100%", background: "#fff", border: "1px solid #d4ccbd", borderRadius: "6px", overflow: "hidden" }}>
            {[
              { val: "13",   lab: "Organisations" },
              { val: "5",    lab: "Fondatrices" },
              { val: "500+", lab: "Associations" },
            ].map(({ val, lab }, i) => (
              <div key={lab} style={{ padding: "20px 16px", textAlign: "center", borderLeft: i > 0 ? "1px solid #e8e2d9" : "none" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1a3520", lineHeight: 1, marginBottom: "6px" }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b0a898" }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filtres ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "36px" }}>
          <button style={pillStyle(activeType === "Toutes" && !activePays)} onClick={() => setFilter("Toutes", null)}>Toutes</button>
          <button style={pillStyle(activeType === "Fondatrice" && !activePays)} onClick={() => setFilter("Fondatrice", null)}>Fondatrices</button>
          <button style={pillStyle(activeType === "Affiliée" && !activePays)} onClick={() => setFilter("Affiliée", null)}>Affiliées</button>
          <span style={{ width: "1px", background: "#d4ccbd", margin: "0 4px", alignSelf: "stretch" }} />
          {PAYS.map((p) => (
            <button key={p} style={pillStyle(activePays === p)} onClick={() => setFilter("Toutes", activePays === p ? null : p)}>{p}</button>
          ))}
        </div>

        {/* ── Grille ── */}
        <div className="org-grid">
          {filtered.map((org) => <OrgCard key={org.id} org={org} />)}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", padding: "13px 32px", background: "transparent", border: "1.5px solid #1a3520", color: "#1a3520", borderRadius: "2px", cursor: "pointer", transition: "background 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1a3520"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a3520"; }}>
            Voir toutes les organisations →
          </button>
        </div>
      </div>

      <style>{`
        .org-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .org-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .org-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #1a3520;
          border-radius: 10px 10px 0 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .org-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,53,32,0.1); }
        .org-card:hover::before { transform: scaleX(1); }
        @media (max-width: 1024px) { .org-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .org-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 480px)  { .org-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
