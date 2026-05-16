"use client";

import Link from "next/link";
import Image from "next/image";
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
          background: isOpen ? "rgba(0,0,0,0.20)" : "rgba(0,0,0,0)",
          transition: "background 0.3s",
          pointerEvents: isOpen ? "all" : "none",
          zIndex: 100,
          backdropFilter: isOpen ? "blur(2px)" : "none",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        style={{
          position: "fixed", top: `${topOffset}px`, right: 0,
          width: "300px",
          background: "#ffffff",
          borderLeft: "1px solid #e5e7eb",
          borderRadius: "0 0 0 16px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 101,
          overflowY: "auto",
          maxHeight: `calc(100vh - ${topOffset}px)`,
          boxShadow: "-8px 0 32px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo + fermer */}
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Image src="/images/logo/LOGO NSS.png" alt="NSS" width={110} height={30} style={{ objectFit: "contain", objectPosition: "left" }} />
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            style={{ width: "32px", height: "32px", border: "1px solid #e5e7eb", borderRadius: "8px", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lien direct Accueil */}
        <div style={{ padding: "12px 20px 0" }}>
          <Link href={`/${locale}`} onClick={onClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", textDecoration: "none", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ width: "32px", height: "32px", background: "#f0faf4", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="#00AD4C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M3 12l2 -2m0 0l7 -7l7 7M5 10v10a1 1 0 0 0 1 1h3m10 -11l2 2m-2 -2v10a1 1 0 0 1 -1 1h-3m-6 0a1 1 0 0 0 1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
              </svg>
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500, color: "#2A2A2A" }}>Accueil</span>
          </Link>
        </div>

        {/* Sections nav */}
        <div style={{ flex: 1, padding: "4px 20px" }}>
          {sections.map((section) => (
            <div key={section.heading} style={{ paddingTop: "16px", paddingBottom: "8px", borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", fontWeight: 600, color: "#00AD4C", letterSpacing: "0.12em", marginBottom: "8px" }}>
                {section.heading}
              </div>
              {section.links.map(({ icon: Icon, title, href }) => (
                <Link key={href} href={href} onClick={onClose}
                  style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", textDecoration: "none" }}
                  className="spanel-link"
                >
                  <span style={{ width: "30px", height: "30px", minWidth: "30px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={12} color="#6b7280" strokeWidth={2} />
                  </span>
                  <span className="spanel-link-title" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, color: "#374151", lineHeight: 1.3 }}>
                    {title}
                  </span>
                </Link>
              ))}
            </div>
          ))}

          {/* Contact direct */}
          <div style={{ paddingTop: "16px", paddingBottom: "8px" }}>
            <Link href={`/${locale}/contact`} onClick={onClose}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", textDecoration: "none" }}
              className="spanel-link"
            >
              <span style={{ width: "30px", height: "30px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="#6b7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span className="spanel-link-title" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, color: "#374151" }}>
                Contact
              </span>
            </Link>
          </div>
        </div>

        {/* Footer: CTA + langue */}
        <div style={{ borderTop: "1px solid #f3f4f6", padding: "16px 20px 24px" }}>

          {/* CTA */}
          <Link href={`/${locale}/agir/rejoindre`} onClick={onClose}
            style={{ display: "block", background: "#E8A838", color: "#045627", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textAlign: "center", textDecoration: "none", letterSpacing: "0.04em", marginBottom: "14px" }}>
            Adhérer au mouvement →
          </Link>

          {/* Lang switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.1em", marginRight: "4px" }}>Langue</span>
            {PANEL_LANGS.map(({ code, label, flag }) => {
              const active = currentLang === code;
              return (
                <button key={code} onClick={() => onSwitchLang(code)}
                  style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", border: `1px solid ${active ? "#00AD4C" : "#e5e7eb"}`, borderRadius: "6px", padding: "5px 10px", cursor: "pointer", background: active ? "#f0faf4" : "#ffffff", color: active ? "#00AD4C" : "#6b7280", fontWeight: active ? 600 : 400, transition: "all 0.15s" }}>
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
        .spanel-link:hover .spanel-link-title { color: #00AD4C !important; }
      `}</style>
    </>
  );
}
