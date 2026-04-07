"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export type GalerieCategorie = "Tout" | "CIFAP" | "Terrain" | "Événements" | "Leaders";

export interface GaleriePhoto {
  id: string;
  src: string;
  alt: string;
  legende: string;
  categorie: Exclude<GalerieCategorie, "Tout">;
  width: number;
  height: number;
}

interface GalerieGridProps {
  photos: GaleriePhoto[];
}

const CATEGORIES: GalerieCategorie[] = ["Tout", "CIFAP", "Terrain", "Événements", "Leaders"];

export default function GalerieGrid({ photos }: GalerieGridProps) {
  const [active, setActive] = useState<GalerieCategorie>("Tout");
  const [lightbox, setLightbox] = useState<GaleriePhoto | null>(null);

  const filtered =
    active === "Tout" ? photos : photos.filter((p) => p.categorie === active);

  return (
    <>
      {/* Filtres pill */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === cat
                ? "bg-primary-700 text-white shadow-md"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille masonry CSS columns */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        style={{ columnFill: "balance" }}
      >
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden
                       shadow-card hover:shadow-md transition-shadow duration-300"
            onClick={() => setLightbox(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover"
            />
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
              <ZoomIn size={28} className="text-white" />
              <p className="text-white text-xs font-semibold text-center leading-snug">
                {photo.legende}
              </p>
            </div>
            {/* Badge catégorie */}
            <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold
                             px-2 py-0.5 rounded-full backdrop-blur-sm">
              {photo.categorie}
            </span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-neutral-400 text-sm py-16">
          Aucune photo dans cette catégorie.
        </p>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={lightbox.width}
              height={lightbox.height}
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-sm">{lightbox.legende}</p>
              <span className="text-white/50 text-xs mt-1 block">{lightbox.categorie}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
