"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavChild { label: string; href: string; description?: string }
interface NavItem  { label: string; href?: string; children?: NavChild[] }
interface TopLink  { label: string; href: string }
interface Locale   { code: string; label: string; full: string }

interface Props {
  navItems: NavItem[];
  topLinks: TopLink[];
  locales: Locale[];
  currentLocale: string;
  locale: string;
  onClose: () => void;
  onSwitchLocale: (l: string) => void;
}

export default function MobileMenu({ navItems, topLinks, locales, currentLocale, locale, onClose, onSwitchLocale }: Props) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const isActive = (href?: string) =>
    href ? pathname === href || pathname.startsWith(href + "/") : false;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 150 }}>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
      />

      {/* Drawer */}
      <nav
        aria-label="Menu mobile"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "100%",
          maxWidth: "340px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          boxShadow: "-4px 0 32px rgba(0,0,0,0.12)",
          animation: "drawerIn 0.25s ease both",
        }}
      >
        {/* Header drawer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px", borderBottom: "1px solid rgba(0,0,0,0.07)", background: "#0f2b1a" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", color: "#fff" }}>
            Nouvelles Semences du Sahel
          </span>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{ padding: "6px", border: "none", background: "rgba(255,255,255,0.1)", borderRadius: "8px", cursor: "pointer", color: "#fff", display: "flex" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Main nav */}
        <div style={{ padding: "12px 12px", flex: 1 }}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    border: "none",
                    background: "transparent",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    cursor: "pointer",
                    borderRadius: "10px",
                    textAlign: "left",
                  }}
                  className="mob-btn"
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    style={{
                      color: "#888",
                      transform: expanded === item.label ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {expanded === item.label && (
                  <div style={{ marginLeft: "14px", borderLeft: "2px solid #e0f5ea", paddingLeft: "12px", marginBottom: "8px" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: isActive(child.href) ? 600 : 400,
                          color: isActive(child.href) ? "#0f2b1a" : "#4a4a4a",
                          background: isActive(child.href) ? "rgba(15,43,26,0.06)" : "transparent",
                        }}
                      >
                        {child.label}
                        {child.description && (
                          <span style={{ display: "block", fontSize: "11px", color: "#999", marginTop: "1px" }}>
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                style={{
                  display: "block",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: isActive(item.href) ? 700 : 500,
                  color: isActive(item.href) ? "#0f2b1a" : "#1a1a1a",
                  background: isActive(item.href) ? "rgba(15,43,26,0.06)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            )
          )}

          {/* FAQ */}
          {topLinks.length > 0 && (
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: "12px", paddingTop: "12px" }}>
              {topLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ display: "block", padding: "12px 14px", borderRadius: "10px", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, color: "#1a1a1a" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer drawer */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Locale */}
          <div style={{ display: "flex", gap: "6px" }}>
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => onSwitchLocale(l.code)}
                style={{
                  flex: 1,
                  padding: "9px",
                  borderRadius: "8px",
                  border: "none",
                  background: currentLocale === l.code ? "#0f2b1a" : "#f5f5f5",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: currentLocale === l.code ? "#fff" : "#555",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link href={`/${locale}/membre/dashboard`} style={{ display: "block", textAlign: "center", padding: "11px", borderRadius: "8px", border: "1.5px solid #1d7a52", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "#1d7a52", textDecoration: "none" }}>
            Espace Membre
          </Link>
          <Link href={`/${locale}/agir/donner`} style={{ display: "block", textAlign: "center", padding: "11px", borderRadius: "8px", background: "#c0392b", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "#fff", textDecoration: "none" }}>
            Faire un don
          </Link>
        </div>
      </nav>

      <style>{`
        .mob-btn:hover { background: rgba(15,43,26,0.05) !important; }
        @keyframes drawerIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
