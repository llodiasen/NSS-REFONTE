"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { getMegaColumns } from "./mega-nav-config";

const LANGS = [
  { code: "fr", short: "FR", label: "Français"  },
  { code: "en", short: "EN", label: "English"   },
  { code: "pt", short: "PT", label: "Português" },
] as const;

interface Props {
  isOpen:      boolean;
  locale:      string;
  currentLang: string;
  topOffset:   number;
  onClose:     () => void;
  onSwitchLang:(code: string) => void;
}

export default function HeaderMobileDrawerV2({
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
        className={`fixed inset-x-0 z-[160] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: `${topOffset}px`, bottom: 0 }}
      />

      {/* Panneau slide-in depuis la droite */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed right-0 z-[170] flex w-[300px] flex-col bg-[#0f2b1a] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: `${topOffset}px`,
          maxHeight: `calc(100dvh - ${topOffset}px)`,
          overflowY: "auto",
          borderBottomLeftRadius: "12px",
        }}
      >
        {/* En-tête du panel */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <Link href={`/${locale}`} onClick={onClose}>
            <Image
              src="/images/logo/LOGO NSS.png"
              alt="NSS"
              width={110} height={32}
              className="object-contain brightness-0 invert"
            />
          </Link>
          <button onClick={onClose} aria-label="Fermer le menu"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-white/50 transition-colors hover:border-white/30 hover:text-white">
            <X size={14} />
          </button>
        </div>

        {/* Accueil — lien direct */}
        <div className="border-b border-white/[0.06] px-5 py-3">
          <Link href={`/${locale}`} onClick={onClose}
            className="text-[14px] font-semibold text-white/90 transition-colors hover:text-white">
            Accueil
          </Link>
        </div>

        {/* Sections avec sous-liens */}
        {sections.map(({ heading, links }) => (
          <div key={heading} className="border-b border-white/[0.06] px-5 py-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.2px] text-[#5a9e72]">
              {heading}
            </p>
            {links.map(({ title, description, href }) => (
              <Link key={href} href={href} onClick={onClose}
                className="group flex flex-col gap-0.5 rounded-md px-1 py-2 transition-colors hover:bg-white/[0.04]">
                <span className="text-[13px] font-medium leading-snug text-[#e8f5eb] transition-colors group-hover:text-white">
                  {title}
                </span>
                <span className="text-[11px] leading-snug text-white/40">
                  {description}
                </span>
              </Link>
            ))}
          </div>
        ))}

        {/* Contact — lien direct */}
        <div className="border-b border-white/[0.06] px-5 py-3">
          <Link href={`/${locale}/contact`} onClick={onClose}
            className="text-[14px] font-semibold text-white/90 transition-colors hover:text-white">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="border-b border-white/[0.06] px-5 py-4">
          <Link href={`/${locale}/agir/rejoindre`} onClick={onClose}
            className="block rounded-md bg-[#E8A838] py-3 text-center text-[13px] font-bold text-[#045627] transition-all hover:bg-[#d4952a]">
            Adhérer au mouvement →
          </Link>
        </div>

        {/* Langue */}
        <div className="px-5 py-4">
          <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[1.5px] text-white/35">
            Langue
          </p>
          <div className="flex gap-2">
            {LANGS.map(({ code, short, label }) => {
              const active = currentLang === code;
              return (
                <button key={code} onClick={() => onSwitchLang(code)} aria-label={label}
                  className={`flex-1 rounded-md py-2 text-[11px] font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#00AD4C] text-white"
                      : "border border-white/15 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {short}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
