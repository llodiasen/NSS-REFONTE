// NOUVEAU — P0 — Remplace les images manquantes par un fond coloré avec titre centré

interface PlaceholderImageProps {
  title?: string;
  category?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

const BG_BY_CATEGORY: Record<string, string> = {
  Formation: "bg-primary-700",
  Plaidoyer: "bg-earth-700",
  Mouvement: "bg-primary-900",
  Événements: "bg-primary-500",
  Agroécologie: "bg-primary-700",
  default: "bg-primary-800",
};

const ASPECT: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export default function PlaceholderImage({
  title,
  category,
  className = "",
  aspectRatio = "video",
}: PlaceholderImageProps) {
  const bg = BG_BY_CATEGORY[category ?? "default"] ?? BG_BY_CATEGORY.default;

  return (
    <div
      className={`${ASPECT[aspectRatio]} ${bg} relative overflow-hidden flex items-center justify-center ${className}`}
      aria-label={title ? `Image pour : ${title}` : "Image à venir"}
    >
      {/* Motif décoratif grain */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      {/* Feuille décorative */}
      <svg
        className="absolute bottom-3 right-3 text-white/20 w-16 h-16"
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M32 4C16 4 4 20 4 36c0 10 8 16 16 16 4 0 8-1 12-3V32l8-8-8 8v17c4 2 8 3 12 3 8 0 16-6 16-16C60 20 48 4 32 4z"/>
      </svg>
      {/* Titre */}
      {title && (
        <p className="relative z-10 text-white font-display font-bold text-center text-sm sm:text-base
                      px-4 leading-snug max-w-[80%]">
          {title}
        </p>
      )}
    </div>
  );
}
