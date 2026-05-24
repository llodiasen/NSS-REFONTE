"use client";

import { useState, useEffect, useRef, useCallback, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Globe, ChevronDown, X, Menu,
  Users, Heart, Shield, MapPin,
  Sprout, Megaphone, Store,
  Video, FileText, Newspaper,
  type LucideIcon,
} from "lucide-react";

/* ─── Palette ────────────────────────────────────────────── */
const C = {
  green:  "#00AD4C",
  dark:   "#045627",
  lime:   "#A5CE46",
  cream:  "#f9f8f5",
  border: "#e5e7eb",
  text:   "#4A4A4A",
  textD:  "#2A2A2A",
  textM:  "#6b7280",
  textL:  "#9ca3af",
  iconBg: "#eaf3de",
} as const;

/* ─── Nav data ───────────────────────────────────────────── */
type DropItem = { icon: LucideIcon; label: string; sub: string; href: string } | null;

const NAV_DROPS: { key: string; label: string; href?: string; items: DropItem[] }[] = [
  {
    key: "mission",
    label: "Notre mission",
    items: [
      { icon: Users,  label: "Qui sommes-nous",     sub: "Histoire et genèse du réseau",    href: "/a-propos" },
      { icon: Heart,  label: "Nos valeurs",          sub: "Souveraineté, dignité, écologie", href: "/mouvement" },
      null,
      { icon: Shield, label: "Équipe & gouvernance", sub: "Coordinatrices, conseil d'admin", href: "/mouvement" },
      { icon: MapPin, label: "Nos pays d'action",    sub: "14 pays d'Afrique de l'Ouest",   href: "/mouvement/associations" },
    ],
  },
  {
    key: "programmes",
    label: "Nos programmes",
    href: "/programmes",
    items: [
      { icon: Sprout,    label: "CIFAP",         sub: "Camp de formation agroécologie",       href: "/programmes/cifap" },
      { icon: Megaphone, label: "Rencontre NSS", sub: "Congrès continentaux biennaux",        href: "/programmes" },
      { icon: Store,     label: "Foire NSS",     sub: "Foire de la souveraineté alimentaire", href: "/programmes" },
    ],
  },
  {
    key: "ressources",
    label: "Ressources",
    items: [
      { icon: Video,     label: "Médiathèque",  sub: "Vidéos, photos, documentaires", href: "/mediatheque" },
      { icon: FileText,  label: "Publications", sub: "Rapports, guides, études",       href: "/ressources" },
      { icon: Newspaper, label: "Actualités",   sub: "Dernières nouvelles du réseau",  href: "/ressources/actualites" },
    ],
  },
];

const LANGS = [
  { code: "fr", short: "FR", label: "Français",  flag: "🇫🇷" },
  { code: "en", short: "EN", label: "English",   flag: "🇬🇧" },
  { code: "pt", short: "PT", label: "Português", flag: "🇵🇹" },
] as const;
type LangCode = typeof LANGS[number]["code"];

const BANNER_KEY = "nss-v3-banner";
const LANG_KEY   = "nss-v2-lang";

/* ─── Dropdown panel ─────────────────────────────────────── */
function NavDropdown({ items, locale, onClose, onEnter, onLeave }: {
  items: DropItem[];
  locale: string;
  onClose: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "absolute", top: "calc(100% + 8px)", left: 0,
        background: "#ffffff", border: `0.5px solid ${C.border}`,
        borderRadius: "14px", padding: "8px", minWidth: "280px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)", zIndex: 100,
      }}
    >
      {items.map((item, i) =>
        item === null ? (
          <div key={`d${i}`} style={{ height: "0.5px", background: "#f3f4f6", margin: "4px 0" }} />
        ) : (
          <Link
            key={`${item.href}-${i}`}
            href={`/${locale}${item.href}`}
            onClick={onClose}
            className="ndd-row"
            style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              padding: "10px 12px", borderRadius: "10px",
              textDecoration: "none", transition: "background 0.15s",
            }}
          >
            <span style={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: C.iconBg, flexShrink: 0, marginTop: "1px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <item.icon size={15} color={C.green} />
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: C.textD, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
                {item.label}
              </span>
              <span style={{ fontSize: "11px", fontWeight: 300, color: C.textM, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
                {item.sub}
              </span>
            </span>
          </Link>
        )
      )}
    </div>
  );
}

/* ─── Style helper ───────────────────────────────────────── */
function nl(active: boolean): CSSProperties {
  return {
    display: "flex", alignItems: "center", gap: "5px",
    padding: "8px 14px", borderRadius: "8px",
    fontSize: "13px", fontWeight: active ? 500 : 400,
    color: active ? C.green : C.text,
    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
    cursor: "pointer", textDecoration: "none",
    background: "none", border: "none",
    transition: "background 0.15s, color 0.15s",
    whiteSpace: "nowrap" as const,
  };
}

/* ─── Main ───────────────────────────────────────────────── */
export default function HeaderV2() {
  const locale   = useLocale();
  const pathname = usePathname();

  const [bannerOn,      setBannerOn]      = useState(false);
  const [progress,      setProgress]      = useState(0);
  const [mobileOn,      setMobileOn]      = useState(false);
  const [openDrop,      setOpenDrop]      = useState<string | null>(null);
  const [langOpen,      setLangOpen]      = useState(false);
  const [lang,          setLang]          = useState<LangCode>("fr");
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) setBannerOn(true);
    const s = localStorage.getItem(LANG_KEY);
    if (s && LANGS.some(l => l.code === s)) setLang(s as LangCode);
  }, []);

  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOn(false); setOpenDrop(null); setLangOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOn ? "hidden" : ""; }, [mobileOn]);

  const dismissBanner = useCallback(() => {
    sessionStorage.setItem(BANNER_KEY, "1");
    setBannerOn(false);
  }, []);

  const switchLang = useCallback((code: string) => {
    setLang(code as LangCode);
    localStorage.setItem(LANG_KEY, code);
    const segs = pathname.split("/");
    segs[1] = code;
    window.location.href = segs.join("/");
  }, [pathname]);

  const openDd = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDrop(key);
  };
  const closeDd = () => {
    closeTimer.current = setTimeout(() => setOpenDrop(null), 120);
  };

  return (
    <>
      {/* ── Progress bar ── */}
      <div style={{ pointerEvents: "none", position: "fixed", left: 0, right: 0, top: 0, zIndex: 300, height: "3px" }}>
        <div style={{ height: "100%", background: C.green, width: `${progress}%`, transition: "width 75ms linear" }} />
      </div>

      {/* ── Bannière ── */}
      {bannerOn && (
        <div className="nss-banner" style={{
          background: C.dark, padding: "9px 0",
          textAlign: "center", position: "relative",
        }}>
          <p style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: "12px", fontWeight: 400,
            color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em", margin: 0,
          }}>
            500+ Associations de Femmes Rurales nous ont rejoints —
            <Link href={`/${locale}/mouvement`} style={{
              color: C.lime, fontWeight: 500, marginLeft: "6px",
              borderBottom: "1px solid rgba(165,206,70,0.4)",
              textDecoration: "none", cursor: "pointer",
            }}>
              Découvrir →
            </Link>
          </p>
          <button
            onClick={dismissBanner}
            aria-label="Fermer l'annonce"
            className="nss-banner-close"
            style={{
              position: "absolute", right: "20px", top: "50%",
              transform: "translateY(-50%)",
              fontSize: "14px", color: "rgba(255,255,255,0.4)",
              background: "none", border: "none", cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Header ── */}
      <header className="nss-header" style={{
        background: "#ffffff",
        borderBottom: `0.5px solid ${C.border}`,
        padding: "0 52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
        position: "sticky", top: 0, zIndex: 100,
        boxSizing: "border-box",
      }}>

        {/* Logo */}
        <Link href={`/${locale}`} aria-label="NSS — Accueil" style={{ flexShrink: 0 }}>
          <Image
            src="/images/logo/LOGO NSS.png"
            alt="Nous Sommes la Solution"
            width={140} height={40}
            style={{ objectFit: "contain", display: "block" }}
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav
          className="hdrv2-nav"
          aria-label="Navigation principale"
          style={{ display: "none", alignItems: "center", gap: "4px" }}
        >
          <Link href={`/${locale}`} className="nss-nav-link" style={nl(pathname === `/${locale}` || pathname === `/${locale}/`)}>
            Accueil
          </Link>

          {NAV_DROPS.map(drop => (
            <div key={drop.key} style={{ position: "relative" }}
              onMouseEnter={() => openDd(drop.key)}
              onMouseLeave={closeDd}
            >
              {drop.href ? (
                <Link
                  href={`/${locale}${drop.href}`}
                  aria-haspopup="true"
                  className="nss-nav-link"
                  style={{
                    ...nl(pathname.includes(drop.href)),
                    background: openDrop === drop.key ? C.cream : "none",
                  }}
                >
                  {drop.label}
                  <ChevronDown size={12} color={C.textL}
                    style={{ transition: "transform 0.2s", transform: openDrop === drop.key ? "rotate(180deg)" : "none" }} />
                </Link>
              ) : (
              <button
                aria-expanded={openDrop === drop.key}
                aria-haspopup="true"
                className="nss-nav-link"
                style={{
                  ...nl(false),
                  background: openDrop === drop.key ? C.cream : "none",
                }}
              >
                {drop.label}
                <ChevronDown size={12} color={C.textL}
                  style={{ transition: "transform 0.2s", transform: openDrop === drop.key ? "rotate(180deg)" : "none" }} />
              </button>
              )}
              {openDrop === drop.key && (
                <NavDropdown
                  items={drop.items}
                  locale={locale}
                  onClose={() => setOpenDrop(null)}
                  onEnter={() => openDd(drop.key)}
                  onLeave={closeDd}
                />
              )}
            </div>
          ))}

          <Link href={`/${locale}/contact`} className="nss-nav-link" style={nl(pathname.includes("/contact"))}>
            Contact
          </Link>
        </nav>

        {/* Actions desktop */}
        <div className="hdrv2-actions" style={{ display: "none", alignItems: "center", gap: "12px" }}>

          {/* Langue */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(v => !v)}
              aria-label="Changer de langue"
              style={{
                display: "flex", alignItems: "center", gap: "5px",
                fontSize: "12px", color: C.textM,
                border: `0.5px solid ${C.border}`, borderRadius: "8px",
                padding: "7px 12px", cursor: "pointer", background: "none",
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              }}
            >
              <Globe size={14} color={C.textL} />
              {LANGS.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
              <ChevronDown size={10} color={C.textL} />
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", right: 0, top: "calc(100% + 8px)",
                background: "#fff", border: `0.5px solid ${C.border}`,
                borderRadius: "10px", padding: "4px", minWidth: "130px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)", zIndex: 200,
              }}>
                {LANGS.map(({ code, label, flag }) => (
                  <button key={code} onClick={() => { switchLang(code); setLangOpen(false); }}
                    style={{
                      display: "block", width: "100%", padding: "8px 12px",
                      fontSize: "12px", textAlign: "left", background: "none",
                      border: "none", cursor: "pointer", borderRadius: "8px",
                      color: lang === code ? C.green : C.textM,
                      fontWeight: lang === code ? 500 : 400,
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      transition: "background 0.15s",
                    }}
                    className="nss-lang-opt"
                  >
                    {flag} {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}/agir/rejoindre`}
            className="nss-cta"
            style={{
              background: C.green, color: "#ffffff",
              fontSize: "12px", fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "10px 20px", borderRadius: "8px",
              border: "none", cursor: "pointer",
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              textDecoration: "none", display: "inline-block",
              transition: "background 0.2s",
            }}
          >
            Adhérer →
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setMobileOn(v => !v)}
          aria-label={mobileOn ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOn}
          className="nss-burger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
        >
          <Menu size={22} color={C.textD} />
        </button>

      </header>

      {/* ── Drawer mobile ── */}
      {mobileOn && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "#ffffff", padding: "24px 20px",
          overflowY: "auto", display: "flex", flexDirection: "column",
        }}>
          {/* Top drawer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
            <Link href={`/${locale}`} onClick={() => setMobileOn(false)}>
              <Image src="/images/logo/LOGO NSS.png" alt="NSS" width={120} height={34} style={{ objectFit: "contain" }} />
            </Link>
            <button onClick={() => setMobileOn(false)} aria-label="Fermer"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
              <X size={22} color={C.textD} />
            </button>
          </div>

          {/* Accueil */}
          <Link href={`/${locale}`} onClick={() => setMobileOn(false)} style={{
            fontSize: "16px", fontWeight: 500, color: C.textD, padding: "14px 0",
            textDecoration: "none", borderBottom: `0.5px solid ${C.border}`,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", display: "block",
          }}>
            Accueil
          </Link>

          {/* Accordion */}
          {NAV_DROPS.map(drop => (
            <div key={drop.key} style={{ borderBottom: `0.5px solid ${C.border}` }}>
              <button
                onClick={() => setMobileSection(mobileSection === drop.key ? null : drop.key)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "14px 0", background: "none", border: "none",
                  cursor: "pointer", fontSize: "16px", fontWeight: 500, color: C.textD,
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                }}
              >
                {drop.label}
                <ChevronDown size={16} color={C.textL}
                  style={{ transition: "transform 0.2s", transform: mobileSection === drop.key ? "rotate(180deg)" : "none" }} />
              </button>
              {mobileSection === drop.key && (
                <div style={{ paddingBottom: "12px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {drop.items.map((item, i) =>
                    item === null ? (
                      <div key={`d${i}`} style={{ height: "0.5px", background: C.border, margin: "4px 0" }} />
                    ) : (
                      <Link key={i} href={`/${locale}${item.href}`} onClick={() => setMobileOn(false)} style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        padding: "10px 4px", textDecoration: "none", borderRadius: "8px",
                      }} className="nss-mob-item">
                        <span style={{
                          width: "32px", height: "32px", borderRadius: "8px",
                          background: C.iconBg, flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <item.icon size={15} color={C.green} />
                        </span>
                        <span>
                          <span style={{ display: "block", fontSize: "14px", fontWeight: 500, color: C.textD, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
                            {item.label}
                          </span>
                          <span style={{ display: "block", fontSize: "12px", color: C.textM, fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
                            {item.sub}
                          </span>
                        </span>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Contact */}
          <Link href={`/${locale}/contact`} onClick={() => setMobileOn(false)} style={{
            fontSize: "16px", fontWeight: 500, color: C.textD, padding: "14px 0",
            textDecoration: "none", borderBottom: `0.5px solid ${C.border}`,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", display: "block",
          }}>
            Contact
          </Link>

          {/* Langue mobile */}
          <div style={{ padding: "20px 0 8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.textL, marginBottom: "10px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
              Langue
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {LANGS.map(({ code, short, label, flag }) => (
                <button key={code} onClick={() => switchLang(code)} aria-label={label}
                  style={{
                    flex: 1, padding: "8px 0", borderRadius: "8px",
                    fontSize: "12px", fontWeight: 500, cursor: "pointer",
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    background: lang === code ? C.green : "none",
                    color: lang === code ? "#ffffff" : C.textM,
                    border: lang === code ? "none" : `0.5px solid ${C.border}`,
                    transition: "all 0.2s",
                  }}
                >
                  {flag} {short}
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }} />

          {/* CTA mobile */}
          <Link href={`/${locale}/agir/rejoindre`} onClick={() => setMobileOn(false)} style={{
            display: "block", width: "100%", background: C.green, color: "#ffffff",
            textAlign: "center", padding: "14px", borderRadius: "8px",
            textDecoration: "none", fontSize: "14px", fontWeight: 500,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", boxSizing: "border-box",
            marginTop: "16px",
          }}>
            Adhérer au mouvement →
          </Link>
        </div>
      )}

      <style>{`
        /* Desktop nav */
        @media (min-width: 768px) {
          .hdrv2-nav     { display: flex !important; }
          .hdrv2-actions { display: flex !important; }
          .nss-burger    { display: none !important; }
        }
        /* Mobile */
        @media (max-width: 767px) {
          .nss-burger  { display: flex !important; }
          .nss-header  { padding: 0 20px !important; }
          .nss-banner  { padding: 8px 40px 8px 16px !important; text-align: left !important; }
          .nss-banner p { font-size: 11px !important; }
        }
        /* Hover states */
        .nss-nav-link:hover { background: ${C.cream} !important; color: ${C.textD} !important; }
        .ndd-row:hover      { background: ${C.cream} !important; }
        .nss-lang-opt:hover { background: ${C.cream} !important; }
        .nss-cta:hover      { background: #009940 !important; }
        .nss-mob-item:hover { background: ${C.cream} !important; }
        .nss-banner-close:hover { color: rgba(255,255,255,0.8) !important; }
      `}</style>
    </>
  );
}
