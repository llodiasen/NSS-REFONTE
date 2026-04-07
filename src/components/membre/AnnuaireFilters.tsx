"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Search } from "lucide-react";

const COUNTRIES = [
  "Bénin", "Burkina Faso", "Cameroun", "Côte d'Ivoire", "Gambie",
  "Ghana", "Guinée", "Guinée-Bissau", "Mali", "Mauritanie",
  "Niger", "Nigéria", "Sénégal", "Sierra Leone", "Togo",
  "France", "Belgique", "Canada", "Autre",
];

const ROLES = [
  { value: "MEMBRE", label: "Membre" },
  { value: "PARTENAIRE", label: "Partenaire" },
];

const SELECT_CLASS =
  "border border-neutral-200 rounded-xl px-3 py-2.5 text-sm text-neutral-700 " +
  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent " +
  "bg-white transition-all duration-200";

export default function AnnuaireFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page"); // reset page on filter change
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Recherche nom */}
      <div className="relative flex-1">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          placeholder="Rechercher un membre…"
          defaultValue={searchParams.get("q") ?? ""}
          onChange={(e) => updateParam("q", e.target.value)}
          className="w-full border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm
                     text-neutral-700 placeholder-neutral-400 bg-white
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-all duration-200"
        />
      </div>

      {/* Filtre pays */}
      <select
        defaultValue={searchParams.get("country") ?? ""}
        onChange={(e) => updateParam("country", e.target.value)}
        className={SELECT_CLASS}
        aria-label="Filtrer par pays"
      >
        <option value="">Tous les pays</option>
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Filtre rôle */}
      <select
        defaultValue={searchParams.get("role") ?? ""}
        onChange={(e) => updateParam("role", e.target.value)}
        className={SELECT_CLASS}
        aria-label="Filtrer par rôle"
      >
        <option value="">Tous les rôles</option>
        {ROLES.map((r) => (
          <option key={r.value} value={r.value}>{r.label}</option>
        ))}
      </select>
    </div>
  );
}
