"use client";

import { useState } from "react";
import { Play, Clock, Star } from "lucide-react";

interface VideoHeroProps {
  id: string | null;
  titre: string;
  description: string;
  duree: string | null;
  date: string;
}

export default function VideoHero({ id, titre, description, duree, date }: VideoHeroProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl = id
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Vidéo */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-xl">
        {playing && id ? (
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
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-primary-900">
                <span className="font-display text-5xl text-primary-300 font-bold">NSS</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30" />

            {id ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label={`Lire la vidéo : ${titre}`}
              >
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white
                                flex items-center justify-center shadow-xl
                                transition-all duration-200 group-hover:scale-110">
                  <Play size={32} className="text-primary-700 ml-1" fill="currentColor" />
                </div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/70 text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
                  Bientôt disponible
                </span>
              </div>
            )}

            {duree && (
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold
                               px-2.5 py-1 rounded flex items-center gap-1.5">
                <Clock size={11} /> {duree}
              </span>
            )}
          </>
        )}
      </div>

      {/* Infos */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 bg-earth-100 text-earth-700 text-xs font-semibold
                           px-3 py-1 rounded-full">
            <Star size={12} fill="currentColor" /> Vidéo à la une
          </span>
          <span className="text-neutral-400 text-xs">
            {new Date(date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </span>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-800 leading-snug">
          {titre}
        </h2>

        <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>

        {id && !playing && (
          <button
            onClick={() => setPlaying(true)}
            className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white
                       font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-md"
          >
            <Play size={16} fill="currentColor" /> Regarder la vidéo
          </button>
        )}
      </div>
    </div>
  );
}
