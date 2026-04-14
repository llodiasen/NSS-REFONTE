"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import HeaderNavDropdown from "./HeaderNavDropdown";
import HeaderSlidePanel from "./HeaderSlidePanel";
import { getMegaColumns } from "./mega-nav-config";

const BANNER_KEY = "nss-banner-dismissed";
const LANG_KEY   = "nss-lang";
const LANGS = [
  { code: "fr", label: "FR", flag: "fr" },
  { code: "en", label: "EN", flag: "gb" },
  { code: "pt", label: "PT", flag: "pt" },
] as const;
type LangCode = "fr" | "en" | "pt";
type DropKey     = "mission" | "programmes" | "ressources";

const DROPS: Record<DropKey, { label: string; colIdx: number }> = {
  mission:    { label: "Notre mission",  colIdx: 0 },
  programmes: { label: "Nos programmes", colIdx: 1 },
  ressources: { label: "Ressources",     colIdx: 3 },
};

export default function Header() {
  const locale   = useLocale();
  const pathname = usePathname();
  const navRef   = useRef<HTMLElement>(null);

  const [bannerVisible, setBannerVisible] = useState(false);
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [slideOpen,     setSlideOpen]     = useState(false);
  const [openDrop,      setOpenDrop]      = useState<DropKey | null>(null);
  const [currentLang,   setCurrentLang]   = useState<LangCode>(locale as LangCode);
  const [langDropOpen,  setLangDropOpen]  = useState(false);

  // Init banner + lang from storage (client only)
  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) setBannerVisible(true);
    const saved = localStorage.getItem(LANG_KEY);
    const valid = LANGS.map((l) => l.code);
    if (saved && valid.includes(saved as LangCode)) setCurrentLang(saved as LangCode);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close on route change
  useEffect(() => { setSlideOpen(false); setOpenDrop(null); }, [pathname]);

  // Body scroll lock when slide open
  useEffect(() => {
    document.body.style.overflow = slideOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [slideOpen]);

  // Escape + click-outside
  useEffect(() => {
    const onKey   = (e: KeyboardEvent) => { if (e.key === "Escape") { setSlideOpen(false); setOpenDrop(null); } };
    const onMouse = (e: MouseEvent)    => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null); };
    document.addEventListener("keydown",   onKey);
    document.addEventListener("mousedown", onMouse);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onMouse); };
  }, []);

  const dismissBanner = useCallback(() => {
    sessionStorage.setItem(BANNER_KEY, "1");
    setBannerVisible(false);
  }, []);

  const switchLang = useCallback((code: string) => {
    setCurrentLang(code as LangCode);
    localStorage.setItem(LANG_KEY, code);
    const segs = pathname.split("/");
    segs[1] = code;
    window.location.href = segs.join("/");
  }, [pathname]);

  const columns   = getMegaColumns(locale);
  const topOffset = bannerVisible ? 104 : 64;

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 102, boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "box-shadow 0.3s ease" }}>

        {/* ── BANDEAU ── */}
        {bannerVisible && (
          <div style={{ background: "#1a6b3c", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px", position: "relative" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#fff", letterSpacing: "0.02em" }}>
              500+ Associations de Femmes Rurales nous ont rejoints —{" "}
              <Link href={`/${locale}/mouvement`} style={{ color: "#a8d5b5", textDecoration: "underline", fontWeight: 600 }}>Découvrir →</Link>
            </span>
            <button onClick={dismissBanner} aria-label="Fermer l'annonce"
              style={{ position: "absolute", right: "14px", background: "transparent", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", padding: "4px", fontSize: "16px", lineHeight: 1 }}>
              ✕
            </button>
          </div>
        )}

        {/* ── BARRE NAV ── */}
        <div style={{ background: "#fff", borderBottom: "0.5px solid #dde8de" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", display: "flex", alignItems: "center", height: "64px", gap: "16px" }}>

            {/* Logo */}
            <Link href={`/${locale}`} aria-label="NSS — Accueil" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
              <Image src="/images/logo/LOGO NSS.png" alt="NSS" width={200} height={200} style={{ objectFit: "contain" }} priority />
            </Link>

            {/* Desktop nav with dropdowns */}
            <nav ref={navRef} role="navigation" aria-label="Navigation principale" className="hdr-nav"
              style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }}>
              <Link href={`/${locale}`} className="hdr-nav-link"
                style={{ padding: "6px 11px", borderRadius: "7px", fontSize: "15px", fontWeight: 500, color: "#2a2a2a", textDecoration: "none", transition: "all 0.15s" }}>
                Accueil
              </Link>
              {(Object.keys(DROPS) as DropKey[]).map((key) => {
                const { label, colIdx } = DROPS[key];
                const isOpen = openDrop === key;
                return (
                  <div key={key} style={{ position: "relative" }}>
                    <button onClick={() => setOpenDrop(isOpen ? null : key)} aria-expanded={isOpen} aria-haspopup="true"
                      style={{ display: "flex", alignItems: "center", gap: "4px", padding: "6px 11px", borderRadius: "7px", cursor: "pointer", background: isOpen ? "#eaf3ee" : "transparent", border: "none", fontSize: "15px", fontWeight: 500, color: isOpen ? "#0f2b1a" : "#2a2a2a", transition: "all 0.15s" }}>
                      {label}
                      <ChevronDown size={12} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                    </button>
                    {isOpen && <HeaderNavDropdown items={columns[colIdx].links} onClose={() => setOpenDrop(null)} />}
                  </div>
                );
              })}
              <Link href={`/${locale}/contact`} className="hdr-nav-link"
                style={{ padding: "6px 11px", borderRadius: "7px", fontSize: "15px", fontWeight: 500, color: "#2a2a2a", textDecoration: "none", transition: "all 0.15s" }}>
                Contact
              </Link>
            </nav>

            {/* Actions (desktop only) */}
            <div className="hdr-actions" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              {/* Language dropdown */}
              <div style={{ position: "relative" }}>
                {(() => {
                  const active = LANGS.find((l) => l.code === currentLang) ?? LANGS[0];
                  return (
                    <>
                      <button
                        onClick={() => setLangDropOpen((v) => !v)}
                        style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 500, padding: "4px 10px", borderRadius: "5px", cursor: "pointer", border: "1px solid #d5e3d7", background: "#0f2b1a", color: "#fff", transition: "all 0.15s" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://flagcdn.com/20x15/${active.flag}.png`} width={16} height={12} alt={active.label} style={{ borderRadius: "1px" }} />
                        {active.label}
                        <ChevronDown size={11} style={{ transition: "transform 0.2s", transform: langDropOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      {langDropOpen && (
                        <div style={{ position: "absolute", top: "calc(100% + 6px)", right: 0, background: "#fff", border: "1px solid #d5e3d7", borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.10)", overflow: "hidden", zIndex: 200, minWidth: "100px" }}>
                          {LANGS.map(({ code, label, flag }) => (
                            <button key={code} onClick={() => { switchLang(code); setLangDropOpen(false); }}
                              style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", padding: "8px 14px", fontSize: "12px", fontWeight: currentLang === code ? 600 : 400, background: currentLang === code ? "#f0f7f2" : "transparent", color: currentLang === code ? "#0f2b1a" : "#444", cursor: "pointer", border: "none", textAlign: "left" }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={`https://flagcdn.com/20x15/${flag}.png`} width={16} height={12} alt={label} style={{ borderRadius: "1px" }} />
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
              <Link href={`/${locale}/agir/rejoindre`} className="hdr-join-btn hdr-sm-hide"
                style={{ padding: "8px 16px", borderRadius: "8px", background: "#1a6b3c", fontSize: "13px", fontWeight: 600, color: "#fff", textDecoration: "none", whiteSpace: "nowrap" }}>
                Nous rejoindre
              </Link>
            </div>

            {/* Hamburger — mobile only */}
            <button onClick={() => setSlideOpen((v) => !v)}
              aria-label={slideOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={slideOpen}
              className="hdr-burger"
              style={{ width: "40px", height: "40px", borderRadius: "8px", flexShrink: 0, marginLeft: "auto", border: `1.5px solid ${slideOpen ? "#0f2b1a" : "#1a6b3c"}`, background: slideOpen ? "#0f2b1a" : "#fff", display: "none", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", cursor: "pointer", transition: "all 0.25s" }}>
              <span className={slideOpen ? "hbl hb1o" : "hbl"} />
              <span className={slideOpen ? "hbl hb2o" : "hbl"} />
              <span className={slideOpen ? "hbl hb3o" : "hbl"} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: `${topOffset}px` }} aria-hidden="true" />

      <HeaderSlidePanel
        isOpen={slideOpen} locale={locale} currentLang={currentLang}
        topOffset={topOffset} onClose={() => setSlideOpen(false)} onSwitchLang={switchLang}
      />

      <style>{`
        .hdr-nav-link:hover { background:#eaf3ee !important; color:#1a6b3c !important; }
        .hdr-join-btn:hover  { background:#155c3e !important; }
        .hbl { display:block; width:16px; height:1.5px; background:#1a6b3c; transition:all 0.25s; }
        .hb1o { background:#fff !important; transform:translateY(6.5px) rotate(45deg); }
        .hb2o { background:#fff !important; opacity:0; }
        .hb3o { background:#fff !important; transform:translateY(-6.5px) rotate(-45deg); }
        @media (max-width:768px) {
          .hdr-nav    { display:none !important; }
          .hdr-actions { display:none !important; }
          .hdr-burger  { display:flex !important; }
        }
        @media (max-width:640px) { .hdr-logo-text { display:none !important; } }
      `}</style>
    </>
  );
}
