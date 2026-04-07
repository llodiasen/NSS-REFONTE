"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

interface LocaleOption {
  code: string;
  label: string;
  full: string;
}

interface LanguageSwitcherProps {
  currentLocale: string;
  locales: LocaleOption[];
}

export default function LanguageSwitcher({ currentLocale, locales }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 transition-colors duration-200"
        aria-label="Changer de langue"
        aria-expanded={open}
      >
        <Globe size={15} />
        <span>{currentLocale.toUpperCase()}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-100 py-1 min-w-[130px] z-50">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150
                ${currentLocale === l.code
                  ? "text-primary-700 font-semibold bg-primary-50"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-primary-700"
                }`}
            >
              {l.label} — {l.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
