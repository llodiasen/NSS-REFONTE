import type { Metadata } from "next";
import { Suspense } from "react";
import videos from "@/data/videos.json";
import VideoHero from "@/components/sections/VideoHero";
import VideoFilter from "@/components/sections/VideoFilter";
import VideoGrid from "@/components/sections/VideoGrid";
import ExportPDFButton from "@/components/ui/ExportPDFButton"; // NOUVEAU Mission 4

export const metadata: Metadata = {
  title: "Médiathèque vidéos — Mouvement NSS | wasafrica.org",
  description:
    "Regardez les vidéos du mouvement Nous Sommes la Solution : reportages terrain, interviews, événements et plaidoyer pour la souveraineté alimentaire des femmes rurales africaines.",
};

interface VideosPageProps {
  searchParams: Promise<{ cat?: string }>;
}

type Video = (typeof videos)[number];

export default async function VideosPage({ searchParams }: VideosPageProps) {
  const { cat } = await searchParams;

  const featured = videos.find((v) => v.featured && v.id) as Video | undefined;

  const gridVideos = videos.filter((v) => {
    if (v === featured) return false;
    if (cat && cat !== "Tout") return v.categorie === cat;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Médiathèque
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Vidéos du mouvement
          </h1>
          <p className="text-primary-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Reportages terrain, interviews de leaders, événements et plaidoyer international —
            le mouvement NSS en images.
          </p>
          {/* NOUVEAU Mission 4 — Bouton export PDF galerie */}
          <ExportPDFButton
            documentType="videos"
            filename="NSS_Galerie_Videos_[date]"
            label="Exporter la galerie PDF"
            variant="inline"
          />
        </div>
      </section>

      {/* Vidéo à la une */}
      {featured && (
        <section className="py-14 px-4 bg-white border-b border-neutral-100">
          <div className="max-w-5xl mx-auto">
            <VideoHero
              id={featured.id}
              titre={featured.titre}
              description={featured.description}
              duree={featured.duree}
              date={featured.date}
            />
          </div>
        </section>
      )}

      {/* Filtres + Grille */}
      <section className="py-14 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto space-y-8">
          <Suspense>
            <VideoFilter />
          </Suspense>
          <VideoGrid videos={gridVideos} />
        </div>
      </section>
    </>
  );
}
