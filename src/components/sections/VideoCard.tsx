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
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");

  const isCloudinary = !!cloudinaryUrl;
  const thumbnailUrl = isCloudinary
    ? cloudinaryThumb(cloudinaryUrl)
    : id
      ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
      : null;
  const canPlay = isCloudinary || !!id;

  function handlePlay() { setState("loading"); }

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* Vidéo / Thumbnail */}
      <div className="relative aspect-video bg-neutral-900 overflow-hidden">

        {/* Thumbnail — reste visible pendant "loading" */}
        {state !== "playing" && (
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
            <div className="absolute inset-0 bg-black/30" />

            {state === "loading" ? (
              /* Spinner pendant le chargement */
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-[3px] border-white/30 border-t-white animate-spin" />
              </div>
            ) : canPlay ? (
              <button
                onClick={handlePlay}
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

            {duree && state === "idle" && (
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold
                               px-2 py-0.5 rounded flex items-center gap-1">
                <Clock size={10} /> {duree}
              </span>
            )}
          </>
        )}

        {/* Lecteur — monté dès "loading" pour que le fetch démarre */}
        {state !== "idle" && isCloudinary && (
          <video
            src={cloudinaryUrl}
            poster={thumbnailUrl ?? undefined}
            preload="metadata"
            controls
            autoPlay
            playsInline
            onCanPlay={() => setState("playing")}
            className="absolute inset-0 w-full h-full bg-black"
            style={{ display: state === "playing" ? "block" : "none" }}
          />
        )}
        {state !== "idle" && !isCloudinary && id && (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setState("playing")}
            className="absolute inset-0 w-full h-full"
            style={{ display: state === "playing" ? "block" : "none" }}
          />
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
