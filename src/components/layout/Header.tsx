"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import MegaMenuPanel from "./MegaMenuPanel";

const MAIN_NAV = [
  { label: "Notre mission", href: "a-propos" },
  { label: "Nos programmes", href: "programmes/cifap" },
  { label: "Actualités", href: "ressources/actualites" },
  { label: "Ressources", href: "ressources/galerie" },
];

const BANNER_KEY = "nss-banner-dismissed";
const LANG_KEY   = "nss-lang";

export default function Header() {
  const locale   = useLocale();
  const pathname = usePathname();

  const [bannerVisible, setBannerVisible] = useState(false);
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [currentLang,   setCurrentLang]   = useState(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  // Banner: check sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem(BANNER_KEY);
      if (!dismissed) setBannerVisible(true);
    }
  }, []);

  // Lang: restore from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved) setCurrentLang(saved);
    }
  }, []);

  // Scroll
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const dismissBanner = useCallback(() => {
    sessionStorage.setItem(BANNER_KEY, "1");
    setBannerVisible(false);
  }, []);

  const switchLang = useCallback((code: string) => {
    setCurrentLang(code);
    localStorage.setItem(LANG_KEY, code);
    const segs = pathname.split("/");
    segs[1] = code;
    window.location.href = segs.join("/");
  }, [pathname]);

  return (
    <>
      <header
        ref={containerRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* ── BANDEAU ANNONCE ── */}
        {bannerVisible && (
          <div style={{
            background: "#1a6b3c", height: "40px",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 20px", position: "relative",
          }}>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.02em" }}>
              500+ Associations de Femmes Rurales nous ont rejoints —{" "}
              <Link href={`/${locale}/mouvement`} style={{ color: "#a8d5b5", textDecoration: "underline", fontWeight: 600 }}>
                Découvrir →
              </Link>
            </span>
            <button
              onClick={dismissBanner}
              aria-label="Fermer l'annonce"
              style={{
                position: "absolute", right: "16px", background: "transparent",
                border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer",
                padding: "4px", lineHeight: 1, fontSize: "16px",
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* ── BARRE PRINCIPALE ── */}
        <div style={{ background: "#ffffff", borderBottom: "0.5px solid #dde8de" }}>
          <div style={{
            maxWidth: "var(--container-max)", margin: "0 auto",
            padding: "0 var(--container-pad)",
            display: "flex", alignItems: "center", height: "64px", gap: "16px",
          }}>

            {/* Logo */}
            <Link href={`/${locale}`} aria-label="NSS — Accueil" style={{
              display: "flex", alignItems: "center", gap: "11px",
              textDecoration: "none", flexShrink: 0,
            }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "8px",
                overflow: "hidden", background: "#0f2b1a",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Image src="/images/logo/logo.webp" alt="NSS" width={30} height={30} style={{ objectFit: "contain" }} priority />
              </div>
              <div className="hdr-logo-text">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: "#0f2b1a", lineHeight: 1.2 }}>
                  Nouvelles Semences du Sahel
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "9px", color: "#6b8c72", letterSpacing: "0.03em" }}>
                  Mouvement paysan · Afrique de l&apos;Ouest
                </div>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hdr-nav" role="navigation" aria-label="Navigation principale" style={{
              display: "flex", alignItems: "center", gap: "2px",
              flex: 1, justifyContent: "center",
            }}>
              {MAIN_NAV.map((item) => (
                <Link key={item.label} href={`/${locale}/${item.href}`}
                  className="hdr-nav-link"
                  style={{
                    padding: "6px 11px", borderRadius: "7px",
                    fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500,
                    color: "#2a2a2a", textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hdr-actions" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              {/* Sélecteur langue */}
              <div style={{ display: "flex", gap: "3px" }}>
                {["FR", "EN", "WO", "HA"].map((lang) => (
                  <button key={lang} onClick={() => switchLang(lang.toLowerCase())}
                    style={{
                      fontSize: "11px", fontWeight: 500, padding: "4px 8px",
                      borderRadius: "5px", cursor: "pointer",
                      border: "1px solid #d5e3d7",
                      background: currentLang.toUpperCase() === lang ? "#0f2b1a" : "transparent",
                      color: currentLang.toUpperCase() === lang ? "#fff" : "#6b8c72",
                      transition: "all 0.15s",
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              {/* Rejoindre */}
              <Link href={`/${locale}/agir/rejoindre`}
                style={{
                  padding: "8px 16px", borderRadius: "8px", background: "#1a6b3c",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
                  color: "#fff", textDecoration: "none", whiteSpace: "nowrap",
                  transition: "background 0.15s",
                }}
                className="hdr-join-btn"
              >
                Nous rejoindre
              </Link>
            </div>

            {/* Burger — toujours visible */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              style={{
                width: "44px", height: "44px", borderRadius: "8px", flexShrink: 0,
                border: "2px solid #1a6b3c", background: menuOpen ? "#1a6b3c" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {menuOpen
                ? <X size={20} color="#fff" strokeWidth={2} />
                : <Menu size={20} color="#1a6b3c" strokeWidth={2} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: bannerVisible ? "104px" : "64px" }} aria-hidden="true" />

      {/* Mega menu panel */}
      <MegaMenuPanel
        isOpen={menuOpen}
        locale={locale}
        currentLang={currentLang}
        onClose={() => setMenuOpen(false)}
        onSwitchLang={switchLang}
      />

      <style>{`
        .hdr-nav-link:hover  { background: #eaf3ee !important; color: #1a6b3c !important; }
        .hdr-join-btn:hover  { background: #155c3e !important; }
        .mega-link:hover     { background: rgba(255,255,255,0.05) !important; }
        .mega-link:hover .mega-link-title { color: #ffffff !important; }
        .mega-legal-link:hover { color: #a8d5b5 !important; }

        @media (max-width: 768px) {
          .hdr-logo-text { display: none !important; }
          .hdr-nav       { display: none !important; }
          .hdr-actions   { display: none !important; }
        }
      `}</style>
    </>
  );
}
