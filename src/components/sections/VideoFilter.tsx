"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type VideoCategorie = "Tout" | "NSS" | "Agroecologie" | "Evenements" | "Medias";

const CATEGORIES: { value: VideoCategorie; label: string }[] = [
  { value: "Tout", label: "Tout" },
  { value: "NSS", label: "NSS" },
  { value: "Agroecologie", label: "Agroécologie" },
  { value: "Evenements", label: "Événements" },
  { value: "Medias", label: "Médias" },
];

export default function VideoFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get("cat") as VideoCategorie) ?? "Tout";

  const setFilter = useCallback(
    (cat: VideoCategorie) => {
      const params = new URLSearchParams(searchParams.toString());
      if (cat === "Tout") {
        params.delete("cat");
      } else {
        params.set("cat", cat);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={active === value ? "btn btn-primary" : "btn btn-secondary text-neutral-600"}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
