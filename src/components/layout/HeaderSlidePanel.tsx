"use client";

import Link from "next/link";
import { getMegaColumns } from "./mega-nav-config";

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
  const columns = getMegaColumns(locale);

  // 4 sections : Notre mission, Nos programmes, Ressources + Actualités direct
  const sections = [
    { heading: "Notre mission",  links: columns[0].links },
    { heading: "Nos programmes", links: columns[1].links },
    { heading: "Ressources",     links: columns[3].links },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, top: `${topOffset}px`,
          background: isOpen ? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0)",
          transition: "background 0.3s",
          pointerEvents: isOpen ? "all" : "none",
          zIndex: 100,
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        style={{
          position: "fixed", top: `${topOffset}px`, right: 0,
          width: "280px", background: "#0f2b1a",
          borderRadius: "0 0 0 12px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 101,
          overflowY: "auto",
          maxHeight: `calc(100vh - ${topOffset}px)`,
        }}
      >
        {/* Header */}
        <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
            Navigation
          </span>
        </div>

        {/* Sections nav */}
        {sections.map((section) => (
          <div key={section.heading} style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 700, color: "#5a9e72", letterSpacing: "1px", marginBottom: "6px" }}>
              {section.heading}
            </div>
            {section.links.map(({ icon: Icon, title, href }) => (
              <Link key={href} href={href} onClick={onClose} className="spanel-link"
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", textDecoration: "none" }}>
                <span style={{ width: "24px", height: "24px", minWidth: "24px", background: "rgba(255,255,255,0.06)", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={11} color="#5a9e72" strokeWidth={2} />
                </span>
                <span className="spanel-link-title" style={{ fontSize: "13px", fontWeight: 500, color: "#e8f5eb", lineHeight: 1.3 }}>
                  {title}
                </span>
              </Link>
            ))}
          </div>
        ))}

        {/* Actualités — lien direct */}
        <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/${locale}/ressources/actualites`} onClick={onClose} className="spanel-link"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", padding: "4px 0" }}>
            <span className="spanel-link-title" style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
              Actualités
            </span>
          </Link>
        </div>

        {/* CTA */}
        <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/${locale}/agir/rejoindre`} onClick={onClose}
            style={{ display: "block", background: "#E8A838", color: "#045627", fontSize: "13px", fontWeight: 700, padding: "10px", borderRadius: "8px", textAlign: "center", textDecoration: "none" }}>
            Nous rejoindre →
          </Link>
        </div>

        {/* Lang switcher */}
        <div style={{ padding: "12px 20px" }}>
          <div style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "1px" }}>
            Langue
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {PANEL_LANGS.map(({ code, label, flag }) => {
              const active = currentLang === code;
              return (
                <button key={code} onClick={() => onSwitchLang(code)}
                  style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px", padding: "4px 10px", cursor: "pointer", background: active ? "rgba(255,255,255,0.15)" : "transparent", color: "#fff", fontWeight: active ? 600 : 400 }}>
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
      `}</style>
    </>
  );
}
