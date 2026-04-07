import VideoCard from "@/components/sections/VideoCard";

interface Video {
  id: string | null;
  titre: string;
  description: string;
  categorie: string;
  duree: string | null;
  date: string;
  featured: boolean;
  statut: string;
}

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-neutral-400 text-sm">Aucune vidéo dans cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, i) => (
        <VideoCard
          key={`${video.id ?? "noid"}-${i}`}
          id={video.id}
          titre={video.titre}
          description={video.description}
          categorie={video.categorie}
          duree={video.duree}
          date={video.date}
        />
      ))}
    </div>
  );
}
