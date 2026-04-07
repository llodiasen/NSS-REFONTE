"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavMegaMenuProps {
  label: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavMegaMenu({
  label,
  items,
  isOpen,
  onToggle,
}: NavMegaMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
          ${isOpen
            ? "text-primary-700 bg-primary-50"
            : "text-neutral-600 hover:text-primary-700 hover:bg-neutral-100"
          }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 min-w-[240px] z-50"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className={`block px-4 py-3 rounded-xl transition-colors duration-150
                ${isActive(item.href)
                  ? "bg-primary-50 text-primary-700"
                  : "hover:bg-neutral-50 text-neutral-700 hover:text-primary-700"
                }`}
            >
              <span className="font-semibold text-sm block">{item.label}</span>
              {item.description && (
                <span className="text-xs text-neutral-400 mt-0.5 block">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
