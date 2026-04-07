"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const LANGS = [
  { code: "fr", label: "FR", flagCdn: "fr" },
  { code: "en", label: "EN", flagCdn: "gb" },
  { code: "pt", label: "PT", flagCdn: "pt" },
];

interface Props { currentLocale: string }

export default function HeaderLangSwitcher({ currentLocale }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router   = useRouter();

  const switchLocale = (code: string) => {
    const segs = pathname.split("/");
    segs[1] = code;
    router.push(segs.join("/"));
    setOpen(false);
  };

  const current = LANGS.find(l => l.code === currentLocale) ?? LANGS[0];

  return (
    <div style={{ position: "relative" }}>

      {/* Bouton : drapeau + code court */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Changer de langue"
        aria-expanded={open}
        className="lang-toggle"
        style={{
          display: "flex", alignItems: "center", gap: "6px",
          padding: "7px 10px", borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.11)", background: "transparent",
          fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
          color: "#1a1a1a", cursor: "pointer", transition: "all 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/20x15/${current.flagCdn}.png`}
          width={20} height={15}
          alt={current.label}
          style={{ borderRadius: "2px", display: "block", flexShrink: 0 }}
        />
        <span>{current.label}</span>
        <ChevronDown size={11} style={{
          color: "#999",
          transition: "transform 0.2s",
          transform: open ? "rotate(180deg)" : "none",
        }} />
      </button>

      {open && (
        <>
          {/* Click-away */}
          <div style={{ position: "fixed", inset: 0, zIndex: 198 }} onClick={() => setOpen(false)} />

          {/* Dropdown — aligné à droite, ne dépasse pas le bord */}
          <div style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
            minWidth: "140px",
            width: "max-content",
            zIndex: 199,
            animation: "langOpen 0.15s ease both",
          }}>
            {LANGS.map((l) => {
              const isActive = currentLocale === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => switchLocale(l.code)}
                  className="lang-opt"
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    width: "100%", padding: "10px 14px",
                    border: "none", cursor: "pointer",
                    background: isActive ? "#f0fdf4" : "transparent",
                    fontFamily: "var(--font-body)", fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#0f2b1a" : "#3a3a3a",
                    transition: "background 0.1s",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/24x18/${l.flagCdn}.png`}
                    width={24} height={18}
                    alt={l.label}
                    style={{ borderRadius: "2px", display: "block", flexShrink: 0 }}
                  />
                  <span>{l.label}</span>
                  {isActive && (
                    <span style={{
                      width: "5px", height: "5px", borderRadius: "50%",
                      background: "#1a6b3c", flexShrink: 0, marginLeft: "4px",
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      <style>{`
        .lang-toggle:hover { border-color: #1a6b3c !important; color: #1a6b3c !important; }
        .lang-opt:hover    { background: #f5f5f5 !important; }
        @keyframes langOpen {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
