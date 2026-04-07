"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import HeaderTicker from "./HeaderTicker";
import HeaderLangSwitcher from "./HeaderLangSwitcher";
import HeaderDropdown from "./HeaderDropdown";
import MobileMenu from "./MobileMenu";
import { LOCALES } from "./nav-config";

const TOP_LINKS = [
  { label: "FAQ", href: "ressources/faq" },
];

const MAIN_NAV = [
  {
    label: "À propos",
    children: [
      { label: "À propos de NSS",  description: "Histoire, vision et gouvernance", href: "a-propos" },
      { label: "Le mouvement",     description: "Valeurs, structure et membres",   href: "mouvement" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { label: "CIFAP", description: "Formation agroécologique",  href: "programmes/cifap" },
      { label: "EMMAP", description: "Médias, Minorités & Paix",  href: "programmes/emmap" },
    ],
  },
  { label: "Actualités", href: "ressources/actualites" },
  {
    label: "Médias",
    children: [
      { label: "Galerie", description: "Photos du terrain",  href: "ressources/galerie" },
      { label: "Vidéos",  description: "Témoignages vidéos", href: "ressources/videos"  },
    ],
  },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const locale   = useLocale();
  const pathname = usePathname();

  const [isScrolled,   setIsScrolled]   = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenDropdown(null); setMobileOpen(false); }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  const openDD    = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDropdown(label); };
  const startClose  = () => { closeTimer.current = setTimeout(() => setOpenDropdown(null), 130); };
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  const isActive = (path: string) =>
    pathname === `/${locale}/${path}` || pathname.startsWith(`/${locale}/${path}/`);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        boxShadow: isScrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}>

        {/* ── TICKER ── */}
        <div className="hdr-topbar">
          <HeaderTicker />
        </div>

        {/* ── BARRE PRINCIPALE ── */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div style={{
            maxWidth: "var(--container-max)", margin: "0 auto",
            padding: "0 var(--container-pad)",
            display: "flex", alignItems: "center", height: "64px", gap: "24px",
          }}>

            {/* Logo */}
            <Link href={`/${locale}`} aria-label="NSS — Accueil" style={{
              display: "flex", alignItems: "center", gap: "11px",
              textDecoration: "none", flexShrink: 0,
            }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                overflow: "hidden", background: "#0f2b1a",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Image src="/images/logo/logo.webp" alt="NSS" width={32} height={32} style={{ objectFit: "contain" }} priority />
              </div>
              <div className="hdr-logo-text">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "#0f2b1a", lineHeight: 1.2 }}>
                  Nouvelles Semences du Sahel
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
                  Mouvement paysan · Afrique de l&apos;Ouest
                </div>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hdr-nav" aria-label="Navigation principale" style={{
              display: "flex", alignItems: "center", gap: "2px",
              flex: 1, justifyContent: "center",
            }}>
              {MAIN_NAV.map((item) =>
                item.children ? (
                  <div key={item.label} style={{ position: "relative" }}
                    onMouseEnter={() => openDD(item.label)}
                    onMouseLeave={startClose}
                  >
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                      className="hdr-nav-btn"
                      style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        padding: "7px 11px", borderRadius: "7px", border: "none",
                        background: openDropdown === item.label ? "rgba(26,107,60,0.07)" : "transparent",
                        fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500,
                        color: openDropdown === item.label ? "#1a6b3c" : "#2a2a2a",
                        cursor: "pointer", transition: "all 0.15s",
                      }}
                    >
                      {item.label}
                      <ChevronDown size={12} style={{
                        transition: "transform 0.2s",
                        transform: openDropdown === item.label ? "rotate(180deg)" : "none",
                        color: "#aaa",
                      }} />
                    </button>
                    {openDropdown === item.label && (
                      <HeaderDropdown
                        items={item.children.map(c => ({ ...c, href: `/${locale}/${c.href}` }))}
                        onMouseEnter={cancelClose}
                        onMouseLeave={startClose}
                      />
                    )}
                  </div>
                ) : (
                  <Link key={item.label} href={`/${locale}/${item.href}`}
                    className="hdr-nav-link"
                    style={{
                      padding: "7px 11px", borderRadius: "7px",
                      fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500,
                      color: isActive(item.href!) ? "#1a6b3c" : "#2a2a2a",
                      textDecoration: "none",
                      background: isActive(item.href!) ? "rgba(26,107,60,0.07)" : "transparent",
                      transition: "all 0.15s",
                    }}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Actions desktop */}
            <div className="hdr-actions" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <HeaderLangSwitcher currentLocale={locale} />

              <Link href={`/${locale}/contact`} className="hdr-contact-btn"
                style={{
                  padding: "8px 15px", borderRadius: "8px",
                  border: "1.5px solid #1a6b3c",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
                  color: "#1a6b3c", textDecoration: "none", whiteSpace: "nowrap",
                  transition: "all 0.15s",
                }}
              >
                Contact
              </Link>

              <Link href={`/${locale}/agir/rejoindre`} className="hdr-join-btn"
                style={{
                  padding: "8px 16px", borderRadius: "8px",
                  background: "#c0392b",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
                  color: "#fff", textDecoration: "none", whiteSpace: "nowrap",
                  transition: "background 0.15s",
                }}
              >
                Nous rejoindre
              </Link>
            </div>

            {/* Burger */}
            <button onClick={() => setMobileOpen(true)} aria-label="Ouvrir le menu"
              className="hdr-burger"
              style={{ display: "none", marginLeft: "auto", padding: "8px", border: "none", background: "transparent", cursor: "pointer", color: "#1a1a1a" }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="hdr-spacer" aria-hidden="true" style={{ height: "106px" }} />

      {mobileOpen && (
        <MobileMenu
          navItems={MAIN_NAV.map(item => ({
            ...item,
            href: item.href ? `/${locale}/${item.href}` : undefined,
            children: item.children?.map(c => ({ ...c, href: `/${locale}/${c.href}` })),
          }))}
          topLinks={TOP_LINKS.map(l => ({ ...l, href: `/${locale}/${l.href}` }))}
          locales={LOCALES}
          currentLocale={locale}
          locale={locale}
          onClose={() => setMobileOpen(false)}
          onSwitchLocale={(code) => {
            const segs = pathname.split("/");
            segs[1] = code;
            window.location.href = segs.join("/");
          }}
        />
      )}

      <style>{`
        .hdr-nav-btn:hover    { background: rgba(26,107,60,0.07) !important; color: #1a6b3c !important; }
        .hdr-nav-link:hover   { background: rgba(26,107,60,0.07) !important; color: #1a6b3c !important; }
        .hdr-contact-btn:hover { background: #1a6b3c !important; color: #fff !important; }
        .hdr-join-btn:hover   { background: #a93226 !important; }

        @media (max-width: 1024px) {
          .hdr-topbar    { display: none !important; }
          .hdr-logo-text { display: none !important; }
          .hdr-nav       { display: none !important; }
          .hdr-actions   { display: none !important; }
          .hdr-burger    { display: flex !important; }
          .hdr-spacer    { height: 64px !important; }
        }
      `}</style>
    </>
  );
}
