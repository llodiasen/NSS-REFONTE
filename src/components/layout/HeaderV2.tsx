"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe, ChevronDown, X } from "lucide-react";
import HeaderNavDropdown from "./HeaderNavDropdown";
import HeaderMobileDrawerV2 from "./HeaderMobileDrawerV2";
import { getMegaColumns } from "./mega-nav-config";

const BANNER_KEY = "nss-v2-banner";
const LANG_KEY   = "nss-v2-lang";

const LANGS = [
  { code: "fr", short: "FR", label: "Français"  },
  { code: "en", short: "EN", label: "English"   },
  { code: "pt", short: "PT", label: "Português" },
] as const;
type LangCode = typeof LANGS[number]["code"];

type DropKey = "mission" | "programmes" | "ressources";
const DROPS: Record<DropKey, { label: string; colIdx: number }> = {
  mission:    { label: "Notre mission",  colIdx: 0 },
  programmes: { label: "Nos programmes", colIdx: 1 },
  ressources: { label: "Ressources",     colIdx: 3 },
};

export default function HeaderV2() {
  const locale   = useLocale();
  const pathname = usePathname();
  const navRef   = useRef<HTMLElement>(null);

  const [bannerOn, setBannerOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOn, setMobileOn] = useState(false);
  const [openDrop, setOpenDrop] = useState<DropKey | null>(null);
  const [lang,     setLang]     = useState<LangCode>(locale as LangCode);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) setBannerOn(true);
    const s = localStorage.getItem(LANG_KEY);
    if (s && LANGS.some(l => l.code === s)) setLang(s as LangCode);
  }, []);

  useEffect(() => {
    const fn = () => {
      const y   = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setProgress(max > 0 ? Math.round((y / max) * 100) : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOn(false); setOpenDrop(null); setLangOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOn ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOn]);

  useEffect(() => {
    const onKey   = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileOn(false); setOpenDrop(null); setLangOpen(false); }
    };
    const onMouse = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("keydown",   onKey);
    document.addEventListener("mousedown", onMouse);
    return () => {
      document.removeEventListener("keydown",   onKey);
      document.removeEventListener("mousedown", onMouse);
    };
  }, []);

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

  const columns = getMegaColumns(locale);

  return (
    <>
      {/* ── Barre de progression ── */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[300] h-[3px]">
        <div
          className="h-full bg-[#00AD4C] transition-[width] duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Bandeau annonce ── */}
      {bannerOn && (
        <div className="fixed left-0 right-0 top-0 z-[200] flex h-10 items-center justify-center overflow-hidden bg-[#045627] px-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #E8A838 0, #E8A838 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <p className="relative z-10 text-[11.5px] font-medium tracking-wide text-[#F5EDD6]">
            500+ Associations de Femmes Rurales nous ont rejoints —{" "}
            <Link href={`/${locale}/mouvement`}
              className="font-bold text-[#E8A838] underline-offset-2 transition-opacity hover:opacity-75">
              Découvrir →
            </Link>
          </p>
          <button onClick={dismissBanner} aria-label="Fermer l'annonce"
            className="absolute right-3 flex h-7 w-7 items-center justify-center rounded text-[#F5EDD6]/40 transition-colors hover:text-[#F5EDD6]">
            <X size={13} />
          </button>
        </div>
      )}

      {/* ── Barre de navigation ── */}
      <header
        className={`fixed left-0 right-0 z-[150] bg-white transition-all duration-300 ${
          bannerOn ? "top-10" : "top-0"
        } ${scrolled ? "shadow-[0_2px_20px_rgba(4,86,39,0.10)]" : "border-b border-[#00AD4C]/15"}`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center px-6 md:px-10">

          {/* Logo */}
          <Link href={`/${locale}`} aria-label="NSS — Accueil" className="shrink-0">
            <Image
              src="/images/logo/LOGO NSS.png"
              alt="Nous Sommes la Solution"
              width={148} height={42}
              className="object-contain transition-opacity duration-200 hover:opacity-80"
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav ref={navRef} aria-label="Navigation principale"
            className="hidden flex-1 items-center justify-center gap-0.5 md:flex">

            {/* Accueil */}
            <Link href={`/${locale}`}
              className="group relative px-3.5 py-2.5 text-[15.5px] font-medium text-[#1a2a1a]/70 transition-colors duration-200 hover:text-[#045627]">
              Accueil
              <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 rounded-full bg-[#00AD4C] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            {/* Dropdowns : Notre mission, Nos programmes, Ressources */}
            {(Object.entries(DROPS) as [DropKey, { label: string; colIdx: number }][]).map(([key, { label, colIdx }]) => {
              const isOpen = openDrop === key;
              return (
                <div key={key} className="relative">
                  <button
                    onClick={() => setOpenDrop(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`group relative flex items-center gap-1 px-3.5 py-2.5 text-[15.5px] font-medium transition-colors duration-200 ${
                      isOpen ? "text-[#045627]" : "text-[#1a2a1a]/70 hover:text-[#045627]"
                    }`}
                  >
                    {label}
                    <ChevronDown size={11}
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute bottom-1.5 left-3.5 right-3.5 h-[2px] origin-left rounded-full bg-[#00AD4C] transition-transform duration-300 ${
                      isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </button>
                  {isOpen && (
                    <HeaderNavDropdown
                      items={columns[colIdx].links}
                      onClose={() => setOpenDrop(null)}
                    />
                  )}
                </div>
              );
            })}

            {/* Contact */}
            <Link href={`/${locale}/contact`}
              className="group relative px-3.5 py-2.5 text-[15.5px] font-medium text-[#1a2a1a]/70 transition-colors duration-200 hover:text-[#045627]">
              Contact
              <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 rounded-full bg-[#00AD4C] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </nav>

          {/* Actions desktop */}
          <div className="ml-auto hidden items-center gap-2.5 md:flex">

            {/* Sélecteur de langue */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(v => !v)}
                aria-label="Changer de langue"
                aria-expanded={langOpen}
                className="flex items-center gap-1.5 rounded-md border border-[#00AD4C]/30 px-3 py-[7px] text-[12px] font-semibold text-[#045627] transition-all duration-200 hover:border-[#00AD4C] hover:bg-[#00AD4C]/5"
              >
                <Globe size={12} strokeWidth={2.5} />
                {lang.toUpperCase()}
                <ChevronDown size={10}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-[250] min-w-[130px] overflow-hidden rounded-lg border border-[#00AD4C]/15 bg-white shadow-[0_8px_32px_rgba(4,86,39,0.12)]">
                  {LANGS.map(({ code, label }) => (
                    <button key={code} role="option" aria-selected={lang === code}
                      onClick={() => { switchLang(code); setLangOpen(false); }}
                      className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[12.5px] transition-colors ${
                        lang === code
                          ? "bg-[#00AD4C]/[0.06] font-semibold text-[#045627]"
                          : "font-normal text-neutral-500 hover:bg-[#00AD4C]/[0.05] hover:text-[#045627]"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${lang === code ? "bg-[#00AD4C]" : "bg-neutral-200"}`} />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Adhérer */}
            <Link href={`/${locale}/agir/rejoindre`}
              className="group relative overflow-hidden rounded-md bg-[#E8A838] px-5 py-2 text-[13px] font-bold tracking-wide text-[#045627] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(232,168,56,0.40)]">
              <span className="relative z-10">Adhérer</span>
              <span className="absolute inset-0 translate-y-full bg-[#c9891e] transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMobileOn(v => !v)}
            aria-label={mobileOn ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOn}
            className="ml-auto flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5.5px] md:hidden"
          >
            <span className={`block h-[1.5px] w-5 bg-[#045627] transition-all duration-300 ${mobileOn ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[#045627] transition-all duration-300 ${mobileOn ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[#045627] transition-all duration-300 ${mobileOn ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>

        </div>
      </header>

      {/* Spacer */}
      <div className={bannerOn ? "h-[108px]" : "h-[68px]"} aria-hidden="true" />

      {/* Drawer mobile */}
      <HeaderMobileDrawerV2
        isOpen={mobileOn}
        locale={locale}
        currentLang={lang}
        topOffset={bannerOn ? 108 : 68}
        onClose={() => setMobileOn(false)}
        onSwitchLang={switchLang}
      />
    </>
  );
}
