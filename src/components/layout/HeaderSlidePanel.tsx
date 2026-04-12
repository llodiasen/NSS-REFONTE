"use client";

import Link from "next/link";
import { getMegaColumns } from "./mega-nav-config";

const STATS = [
  { value: "175 000", label: "Membres" },
  { value: "14",      label: "Pays" },
  { value: "500+",    label: "Assoc." },
];

const LEGAL = [
  { label: "Politique de confidentialité",   path: "legal/confidentialite" },
  { label: "Mentions légales",               path: "legal/mentions" },
  { label: "Protection des données (RGPD)",  path: "legal/rgpd" },
  { label: "Politique de don & remboursement", path: "legal/dons" },
  { label: "Accessibilité (RGAA)",           path: "legal/accessibilite" },
  { label: "Plan du site",                   path: "sitemap" },
];

const PANEL_LANGS = [
  { code: "fr", label: "FR", flag: "fr" },
  { code: "en", label: "EN", flag: "gb" },
  { code: "pt", label: "PT", flag: "pt" },
] as const;

interface Props {
  isOpen:       boolean;
  locale:       string;
  currentLang:  string;
  topOffset:    number;
  onClose:      () => void;
  onSwitchLang: (code: string) => void;
}

export default function HeaderSlidePanel({
  isOpen, locale, currentLang, topOffset, onClose, onSwitchLang,
}: Props) {
  const actionLinks = getMegaColumns(locale)[2].links;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, top: `${topOffset}px`,
          background: isOpen ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0)",
          transition: "background 0.3s",
          pointerEvents: isOpen ? "all" : "none",
          zIndex: 100,
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu secondaire"
        style={{
          position: "fixed", top: `${topOffset}px`, right: 0,
          width: "300px", background: "#0f2b1a",
          borderRadius: "0 0 0 12px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 101,
          overflowY: "auto",
          maxHeight: `calc(100vh - ${topOffset}px)`,
        }}
      >
        {/* A) Header */}
        <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, color: "#fff" }}>
            Menu — NSS
          </span>
        </div>

        {/* B) Agir & soutenir */}
        <div style={{ padding: "14px 20px" }}>
          <div style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 700, color: "#fff", marginBottom: "8px", letterSpacing: "1px" }}>
            Agir &amp; soutenir
          </div>
          {actionLinks.map(({ icon: Icon, title, description, href }) => (
            <Link key={href} href={href} onClick={onClose} className="spanel-link"
              style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "7px 0", borderBottom: "0.5px solid rgba(255,255,255,0.05)", textDecoration: "none" }}>
              <span style={{ width: "26px", height: "26px", minWidth: "26px", background: "rgba(255,255,255,0.06)", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={12} color="#5a9e72" strokeWidth={2} />
              </span>
              <span>
                <span className="spanel-link-title" style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#fff", lineHeight: 1.3 }}>
                  {title}
                </span>
                <span style={{ display: "block", fontSize: "11px", color: "#fff", marginTop: "1px" }}>
                  {description}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* C) Separator */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />

        {/* D) Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", margin: "12px 20px", borderRadius: "7px", overflow: "hidden" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: "#0f2b1a", padding: "9px 6px", textAlign: "center" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: "9px", color: "#fff", marginTop: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* E) Separator */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />

        {/* F) CTA */}
        <div style={{ padding: "14px 20px" }}>
          <Link href={`/${locale}/agir/rejoindre`} onClick={onClose}
            style={{ display: "block", background: "#1a6b3c", color: "#fff", fontSize: "13px", fontWeight: 600, padding: "10px", borderRadius: "8px", textAlign: "center", textDecoration: "none", marginBottom: "8px" }}>
            Nous rejoindre — Adhérer
          </Link>
          <Link href={`/${locale}/ressources/actualites`} onClick={onClose}
            style={{ display: "block", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: "12px", fontWeight: 500, padding: "9px", borderRadius: "8px", textAlign: "center", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
            Télécharger le rapport 2024
          </Link>
        </div>

        {/* G) Separator */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />

        {/* H) Legal footer */}
        <div style={{ background: "rgba(0,0,0,0.20)", padding: "12px 20px" }}>
          <div style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: 700, color: "#fff", marginBottom: "8px", letterSpacing: "1px" }}>
            Informations légales
          </div>
          {LEGAL.map(({ label, path }) => (
            <Link key={path} href={`/${locale}/${path}`} onClick={onClose}
              className="spanel-legal"
              style={{ display: "block", fontSize: "11px", color: "#fff", textDecoration: "underline", textUnderlineOffset: "2px", padding: "3px 0" }}>
              {label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            {PANEL_LANGS.map(({ code, label, flag }) => {
              const active = currentLang === code;
              return (
                <button key={code} onClick={() => onSwitchLang(code)}
                  style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", padding: "3px 8px", cursor: "pointer", background: active ? "rgba(255,255,255,0.12)" : "transparent", color: "#fff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://flagcdn.com/20x15/${flag}.png`} width={14} height={11} alt={label} style={{ borderRadius: "1px" }} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .spanel-link-title { transition: color 0.15s; }
        .spanel-link:hover .spanel-link-title { color: #fff !important; }
        .spanel-legal:hover { color: #8ecfa2 !important; }
      `}</style>
    </>
  );
}
