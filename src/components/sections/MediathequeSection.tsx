"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import allVideos from "@/data/videos.json";

/* ─── 3 premières vidéos disponibles ────────────────────── */
const BG_BY_CAT: Record<string, string> = {
  Medias:      "#1a2e1a",
  Agroecologie:"#0f2e24",
  Evenements:  "#163020",
  NSS:         "#1a2e1a",
};

interface Video {
  id: string | null;
  cloudinaryUrl?: string | null;
  categorie: string;
  titre: string;
  source: string;
  duree: string;
  bg: string;
}

function cloudinaryThumb(url: string): string {
  return url.replace(/\/f_auto\//, "/f_jpg,so_0/").replace(/\/q_auto\//, "/q_auto/f_jpg,so_0/").replace(/\.mp4$/, ".jpg");
}

const VIDEOS: Video[] = allVideos
  .filter((v) => (v.id || ("cloudinaryUrl" in v && v.cloudinaryUrl)) && v.statut === "disponible")
  .slice(0, 3)
  .map((v) => ({
    id: v.id ?? null,
    cloudinaryUrl: ("cloudinaryUrl" in v ? v.cloudinaryUrl : null) as string | null,
    categorie: v.categorie,
    titre: v.titre,
    source: `${v.categorie} • ${new Date(v.date).getFullYear()}`,
    duree: v.duree ?? "",
    bg: BG_BY_CAT[v.categorie] ?? "#163020",
  }));

/* ─── Icône play SVG ─────────────────────────────────────── */
function IconPlay() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4.75L19.25 12 6 19.25V4.75Z" fill="#1D9E75" />
    </svg>
  );
}

/* ─── Carte vidéo ────────────────────────────────────────── */
function VideoCard({ video }: { video: Video }) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const isCloudinary = !video.id && !!video.cloudinaryUrl;
  const thumbSrc = isCloudinary && video.cloudinaryUrl
    ? cloudinaryThumb(video.cloudinaryUrl)
    : video.id
      ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
      : null;

  return (
    <article
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "#ffffff",
        border: "0.5px solid rgba(0,0,0,0.08)",
        cursor: "pointer",
      }}
      onClick={() => state === "idle" && setState("loading")}
    >
      {/* ── Thumbnail ── */}
      <div
        style={{
          position: "relative",
          height: "220px",
          background: video.bg,
          borderRadius: "10px 10px 0 0",
          overflow: "hidden",
        }}
      >
        {/* Thumbnail — reste visible pendant "loading" */}
        {state !== "playing" && (
          <>
            {thumbSrc ? (
              <Image
                src={thumbSrc}
                alt={video.titre}
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized={isCloudinary}
              />
            ) : (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#a8d5b5", fontSize: "32px", fontWeight: 700 }}>NSS</span>
              </div>
            )}

            {state === "loading" ? (
              /* Spinner */
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.35)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.25)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite" }} />
              </div>
            ) : (
              <button
                aria-label={`Regarder : ${video.titre}`}
                onClick={(e) => { e.stopPropagation(); setState("loading"); }}
                className="play-btn"
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.90)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transition: "transform 0.2s ease, background 0.2s ease" }}
              >
                <IconPlay />
              </button>
            )}

            {video.duree && state === "idle" && (
              <span style={{ position: "absolute", bottom: "8px", right: "8px", background: "rgba(0,0,0,0.65)", color: "#ffffff", fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", fontWeight: 500, padding: "2px 7px", borderRadius: "4px", zIndex: 2, letterSpacing: "0.02em" }}>
                {video.duree}
              </span>
            )}
          </>
        )}

        {/* Lecteur — monté dès "loading" */}
        {state !== "idle" && isCloudinary && video.cloudinaryUrl && (
          <video
            src={video.cloudinaryUrl}
            poster={thumbSrc ?? undefined}
            preload="metadata"
            controls
            autoPlay
            playsInline
            onCanPlay={() => setState("playing")}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "#000", display: state === "playing" ? "block" : "none" }}
          />
        )}
        {state !== "idle" && !isCloudinary && video.id && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.titre}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setState("playing")}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: state === "playing" ? "block" : "none" }}
          />
        )}
      </div>

      {/* ── Corps ── */}
      <div style={{ padding: "14px 16px 16px" }}>
        {/* Catégorie — badge */}
        <span
          style={{
            display: "inline-block",
            fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            color: "#1D9E75",
            background: "#e6f4ec",
            border: "1px solid #a8d5b5",
            borderRadius: "20px",
            padding: "3px 10px",
            marginBottom: "8px",
          }}
        >
          {video.categorie}
        </span>

        {/* Titre */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
            fontSize: "17px",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.35,
            margin: "0 0 8px",
          }}
        >
          {video.titre}
        </p>

        {/* Méta */}
        <p
          style={{
            fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
            fontSize: "14px",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          {video.source}
        </p>
      </div>
    </article>
  );
}

/* ─── Section principale ─────────────────────────────────── */
export default function MediathequeSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="media-inner"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 20px",
        }}
      >
        <SectionHeader
          label="Médiathèque"
          title="Le mouvement en images."
          subtitle="Photos, vidéos et témoignages de terrain — la vie du réseau NSS à travers 14 pays d'Afrique de l'Ouest."
        />

        {/* Grille 3 colonnes */}
        <div
          className="media-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
        >
          {VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>

        {/* Bouton bas */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/mediatheque"
            className="media-cta"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#ffffff",
              background: "#112d1d",
              padding: "0.65rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Toute la médiathèque →
          </Link>
        </div>
      </div>

      <style>{`
        .play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1) !important;
          background: rgba(255,255,255,1) !important;
        }
        .media-cta:hover { background: #17845f !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .media-inner { padding: 60px 24px !important; }
          .media-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
