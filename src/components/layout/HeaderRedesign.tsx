"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown, X } from "lucide-react";
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
type DropKey  = "mission" | "programmes" | "ressources";
const DROPS: Record<DropKey, { label: string; colIdx: number }> = {
  mission:    { label: "Notre mission",  colIdx: 0 },
  programmes: { label: "Nos programmes", colIdx: 1 },
  ressources: { label: "Ressources",     colIdx: 3 },
};

export default function HeaderRedesign() {
  const locale   = useLocale();
  const pathname = usePathname();
  const navRef   = useRef<HTMLElement>(null);

  const [bannerVisible, setBannerVisible] = useState(false);
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [slideOpen,     setSlideOpen]     = useState(false);
  const [openDrop,      setOpenDrop]      = useState<DropKey | null>(null);
  const [currentLang,   setCurrentLang]   = useState<LangCode>(locale as LangCode);
  const [langDropOpen,  setLangDropOpen]  = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) setBannerVisible(true);
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && (["fr", "en", "pt"] as string[]).includes(saved))
      setCurrentLang(saved as LangCode);
  }, []);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setSlideOpen(false); setOpenDrop(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = slideOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [slideOpen]);

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
    const segs = pathname.split("/"); segs[1] = code;
    window.location.href = segs.join("/");
  }, [pathname]);

  const columns   = getMegaColumns(locale);
  const topOffset = bannerVisible ? 104 : 64;

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-[102] transition-shadow duration-300${isScrolled ? " shadow-[0_2px_16px_rgba(4,86,39,0.12)]" : ""}`}>

        {/* ── Bandeau ── */}
        {bannerVisible && (
          <div className="relative flex h-9 items-center justify-center border-b border-[#00AD4C]/10 bg-[#f9f8f5] px-5">
            <p className="text-[11px] font-medium tracking-wide text-[#4a4a4a]">
              500+ Associations de Femmes Rurales nous ont rejoints —{" "}
              <Link href={`/${locale}/mouvement`}
                className="font-semibold text-[#00AD4C] transition-opacity hover:opacity-75">
                Découvrir →
              </Link>
            </p>
            <button onClick={dismissBanner} aria-label="Fermer l'annonce"
              className="absolute right-3.5 flex h-6 w-6 items-center justify-center rounded text-[#9ca3af] transition-colors hover:text-[#2A2A2A]">
              <X size={12} />
            </button>
          </div>
        )}

        {/* ── Barre nav ── */}
        <div className="border-b border-[#00AD4C]/15 bg-white">
          <div className="relative mx-auto flex h-16 max-w-[1200px] items-center px-6">

            {/* Logo — centré sur mobile, gauche sur desktop */}
            <Link href={`/${locale}`} aria-label="NSS — Accueil"
              className="absolute left-1/2 flex -translate-x-1/2 items-center md:relative md:left-auto md:translate-x-0 md:shrink-0">
              <Image src="/images/logo/LOGO NSS.png" alt="NSS — Nous Sommes la Solution"
                width={160} height={44} className="object-contain object-left" priority />
            </Link>

            {/* Nav desktop */}
            <nav ref={navRef} aria-label="Navigation principale"
              className="hidden flex-1 items-center justify-center gap-0.5 pl-4 md:flex">

              <Link href={`/${locale}`}
                className="group relative px-3 py-2 text-[14px] font-medium text-[#1a2a1a] transition-colors hover:text-[#00AD4C]">
                Accueil
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#00AD4C] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {(Object.keys(DROPS) as DropKey[]).map((key) => {
                const { label, colIdx } = DROPS[key];
                const isOpen = openDrop === key;
                return (
                  <div key={key} className="relative">
                    <button onClick={() => setOpenDrop(isOpen ? null : key)}
                      aria-expanded={isOpen} aria-haspopup="true"
                      className={`group relative flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors ${isOpen ? "text-[#00AD4C]" : "text-[#1a2a1a] hover:text-[#00AD4C]"}`}>
                      {label}
                      <ChevronDown size={11} className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute inset-x-3 bottom-1 h-px origin-left bg-[#00AD4C] transition-transform duration-200 ${isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                    </button>
                    {isOpen && <HeaderNavDropdown items={columns[colIdx].links} onClose={() => setOpenDrop(null)} />}
                  </div>
                );
              })}

              <Link href={`/${locale}/contact`}
                className="group relative px-3 py-2 text-[14px] font-medium text-[#1a2a1a] transition-colors hover:text-[#00AD4C]">
                Contact
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#00AD4C] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </nav>

            {/* Actions desktop */}
            <div className="hidden shrink-0 items-center gap-2 md:flex">

              {/* Language switcher */}
              <div className="relative">
                {(() => {
                  const active = LANGS.find((l) => l.code === currentLang) ?? LANGS[0];
                  return (
                    <>
                      <button onClick={() => setLangDropOpen((v) => !v)}
                        aria-label={`Langue : ${active.label}`} aria-expanded={langDropOpen}
                        className="flex items-center gap-1.5 rounded-md border border-[#00AD4C]/30 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#2A2A2A] transition-all hover:border-[#00AD4C] hover:text-[#00AD4C]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://flagcdn.com/20x15/${active.flag}.png`} width={16} height={12} alt={active.label} className="rounded-[1px]" />
                        {active.label}
                        <ChevronDown size={9} className={`transition-transform duration-200 ${langDropOpen ? "rotate-180" : ""}`} />
                      </button>
                      {langDropOpen && (
                        <div className="absolute right-0 top-[calc(100%+6px)] z-[200] min-w-24 overflow-hidden rounded-lg border border-[#00AD4C]/15 bg-white shadow-[0_8px_24px_rgba(4,86,39,0.10)]">
                          {LANGS.map(({ code, label, flag }) => (
                            <button key={code} role="option" aria-selected={currentLang === code}
                              onClick={() => { switchLang(code); setLangDropOpen(false); }}
                              className={`flex w-full items-center gap-2 px-3.5 py-2 text-left text-[12px] transition-colors ${currentLang === code ? "bg-[#00AD4C]/[0.08] font-semibold text-[#045627]" : "font-normal text-neutral-600 hover:bg-[#00AD4C]/[0.08]"}`}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={`https://flagcdn.com/20x15/${flag}.png`} width={16} height={12} alt={label} className="rounded-[1px]" />
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* CTA — or/gold */}
              <Link href={`/${locale}/agir/rejoindre`}
                aria-label="Nous rejoindre — Adhérer au mouvement NSS"
                className="rounded-md bg-[#E8A838] px-4 py-2 text-[13px] font-bold tracking-wide text-[#045627] transition-all hover:-translate-y-px hover:bg-[#d4952a] hover:shadow-[0_4px_12px_rgba(232,168,56,0.30)]">
                Nous rejoindre
              </Link>
            </div>

            {/* Hamburger — mobile uniquement */}
            <button onClick={() => setSlideOpen((v) => !v)}
              aria-label={slideOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={slideOpen}
              className={`ml-auto flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-md border transition-all duration-200 md:hidden ${slideOpen ? "border-[#045627] bg-[#045627]" : "border-[#00AD4C] bg-white"}`}>
              <span className={`block h-[1.5px] w-4 transition-all duration-200 ${slideOpen ? "translate-y-[6.5px] rotate-45 bg-white" : "bg-[#00AD4C]"}`} />
              <span className={`block h-[1.5px] w-4 transition-all duration-200 ${slideOpen ? "bg-white opacity-0" : "bg-[#00AD4C]"}`} />
              <span className={`block h-[1.5px] w-4 transition-all duration-200 ${slideOpen ? "-translate-y-[6.5px] -rotate-45 bg-white" : "bg-[#00AD4C]"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className={bannerVisible ? "h-[104px]" : "h-16"} aria-hidden="true" />

      <HeaderSlidePanel isOpen={slideOpen} locale={locale} currentLang={currentLang}
        topOffset={topOffset} onClose={() => setSlideOpen(false)} onSwitchLang={switchLang} />
    </>
  );
}
