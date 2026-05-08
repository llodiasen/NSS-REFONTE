"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { getMegaColumns, STATS, LEGAL_LINKS, PANEL_LOCALES } from "./mega-nav-config";

interface Props {
  isOpen: boolean;
  locale: string;
  currentLang: string;
  onClose: () => void;
  onSwitchLang: (code: string) => void;
}

export default function MegaMenuPanel({ isOpen, locale, currentLang, onClose, onSwitchLang }: Props) {
  const columns = getMegaColumns(locale);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.25)", zIndex: 98 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog" aria-modal="true" aria-label="Menu de navigation"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed", top: "var(--header-height, 106px)", left: 0, right: 0,
              background: "#0f2b1a", zIndex: 99,
              overflowY: "auto", maxHeight: "calc(100vh - var(--header-height, 106px))",
            }}
          >
            {/* En-tête panel */}
            <div style={{ padding: "18px 24px 0" }}>
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#7aab8a", fontWeight: 600 }}>
                Explorer le mouvement NSS
              </span>
            </div>

            {/* Grille 4 colonnes */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px 24px" }}>
              {columns.map((col) => (
                <div key={col.heading}>
                  <div style={{
                    fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px",
                    color: "#5a9e72", fontWeight: 600, paddingBottom: "10px",
                    borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: "12px",
                  }}>
                    {col.heading}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {col.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link key={link.title} href={link.href} onClick={onClose}
                          className="mega-link"
                          style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none", padding: "6px 8px", borderRadius: "6px" }}
                        >
                          <span style={{
                            width: "28px", height: "28px", borderRadius: "6px",
                            background: "rgba(255,255,255,0.07)", display: "flex",
                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                          }}>
                            <Icon size={14} color="#7aab8a" strokeWidth={1.5} />
                          </span>
                          <span>
                            <span className="mega-link-title" style={{ display: "block", fontSize: "13px", color: "#d4edda", fontWeight: 500, lineHeight: 1.3 }}>
                              {link.title}
                            </span>
                            <span style={{ display: "block", fontSize: "11px", color: "#6b8c72", lineHeight: 1.4, marginTop: "2px" }}>
                              {link.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Séparateur */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 24px" }} />

            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px",
              background: "rgba(255,255,255,0.06)", margin: "16px 24px",
              borderRadius: "8px", overflow: "hidden",
            }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ background: "#0f2b1a", padding: "10px", textAlign: "center" }}>
                  <div style={{ fontSize: "17px", fontWeight: 700, color: "#e8f5eb", lineHeight: 1.2 }}>{s.value}</div>
                  <div style={{ fontSize: "10px", color: "#5a9e72", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Séparateur */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 24px" }} />

            {/* CTA band */}
            <div style={{ display: "flex", gap: "10px", padding: "14px 24px", alignItems: "stretch" }}>
              {[
                { title: "Faire un don", desc: "Soutenir les femmes paysannes", href: `/${locale}/agir/donner` },
                { title: "Rapport annuel 2024", desc: "Télécharger le bilan annuel", href: `/${locale}/ressources/actualites` },
              ].map((card) => (
                <Link key={card.title} href={card.href} onClick={onClose}
                  style={{
                    flex: 1, background: "rgba(26,107,60,0.45)", border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "8px", padding: "12px 14px", textDecoration: "none",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#e8f5eb" }}>{card.title}</div>
                  <div style={{ fontSize: "11px", color: "#6b8c72", marginTop: "4px" }}>{card.desc}</div>
                </Link>
              ))}
              <Link href={`/${locale}/agir/rejoindre`} onClick={onClose}
                style={{
                  background: "#1a6b3c", borderRadius: "8px", padding: "12px 20px",
                  textDecoration: "none", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>Nous rejoindre</div>
                <div style={{ fontSize: "10px", color: "#a8d5b5", marginTop: "3px" }}>Devenir membre NSS</div>
              </Link>
            </div>

            {/* Pied de panel */}
            <div style={{
              background: "rgba(0,0,0,0.25)", padding: "11px 24px",
              display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                {LEGAL_LINKS.map((l) => (
                  <Link key={l.label} href={l.href} onClick={onClose}
                    className="mega-legal-link"
                    style={{ fontSize: "11px", color: "#5a8a6a", textDecoration: "underline" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {PANEL_LOCALES.map((l) => (
                  <button key={l.code} onClick={() => onSwitchLang(l.code)}
                    style={{
                      fontSize: "10px", padding: "3px 7px",
                      border: "1px solid rgba(255,255,255,0.10)", borderRadius: "4px", cursor: "pointer",
                      background: currentLang === l.code ? "rgba(255,255,255,0.12)" : "transparent",
                      color: currentLang === l.code ? "#e8f5eb" : "#5a8a6a",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
