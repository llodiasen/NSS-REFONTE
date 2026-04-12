"use client";

import { useState } from "react";
import { Play, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface VideoCardProps {
  id: string | null;
  cloudinaryUrl?: string | null;
  titre: string;
  description: string;
  categorie: string;
  duree: string | null;
  date: string;
}

function cloudinaryThumb(url: string): string {
  return url.replace(/\/f_auto\//, "/f_jpg,so_0/").replace(/\.mp4$/, ".jpg");
}

const categoryBadge: Record<string, "impact" | "pays" | "evenement" | "media"> = {
  NSS: "impact",
  Agroecologie: "impact",
  Evenements: "evenement",
  Medias: "media",
};

export default function VideoCard({ id, cloudinaryUrl, titre, description, categorie, duree, date }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  const isCloudinary = !!cloudinaryUrl;
  const thumbnailUrl = isCloudinary
    ? cloudinaryThumb(cloudinaryUrl)
    : id
      ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
      : null;
  const canPlay = isCloudinary || !!id;

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* Vidéo / Thumbnail */}
      <div className="relative aspect-video bg-neutral-900 overflow-hidden">
        {playing && isCloudinary ? (
          <video
            src={cloudinaryUrl}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full bg-black"
          />
        ) : playing && id ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={titre}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-primary-900">
                <span className="font-display text-3xl text-primary-300 font-bold">NSS</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bouton play */}
            {canPlay ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label={`Lire la vidéo : ${titre}`}
              >
                <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white
                                flex items-center justify-center shadow-lg
                                transition-all duration-200 group-hover:scale-110">
                  <Play size={22} className="text-primary-700 ml-1" fill="currentColor" />
                </div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-full">
                  Bientôt disponible
                </span>
              </div>
            )}

            {/* Durée */}
            {duree && (
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold
                               px-2 py-0.5 rounded flex items-center gap-1">
                <Clock size={10} /> {duree}
              </span>
            )}
          </>
        )}
      </div>

      {/* Infos */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <Badge variant={categoryBadge[categorie] ?? "media"}>{categorie}</Badge>
          <span className="text-xs text-neutral-400">
            {new Date(date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </span>
        </div>
        <h3 className="font-display font-bold text-neutral-800 text-sm leading-snug line-clamp-2">
          {titre}
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}
