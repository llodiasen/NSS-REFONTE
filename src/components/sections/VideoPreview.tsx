"use client";

import { useState } from "react";
import Link from "next/link";

const VIDEOS = [
  {
    id: "boT5gIW072Q",
    titre: "10 Min avec Madame Sacko — Environnement et Agroécologie",
    tags: ["Explorer", "Regarder"],
  },
  {
    id: "LGkcZMWNgZA",
    titre: "Journal TV 138 — 1er septembre 2025",
    tags: ["Explorer", "Regarder"],
  },
  {
    id: "FothaoeQsQ8",
    titre: "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété",
    tags: ["Explorer", "Regarder"],
  },
];

function VideoCard({ video }: { video: typeof VIDEOS[0] }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <article style={{
      borderRadius: "10px",
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.05)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          height: "140px",
          background: "linear-gradient(135deg, #0d1f15, #1a3a2a)",
          cursor: "pointer",
          flexShrink: 0,
        }}
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.titre}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={video.titre}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
              }}
              loading="lazy"
            />
            {/* Bouton play centré */}
            <button
              aria-label={`Regarder : ${video.titre}`}
              onClick={() => setPlaying(true)}
              className="vid2-play"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                transition: "transform 0.2s ease",
              }}
            >
              {/* Triangle CSS */}
              <span style={{
                display: "inline-block",
                width: 0,
                height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: "14px solid #2d7a4f",
                marginLeft: "3px",
              }} />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "16px" }}>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          color: "#1a1a1a",
          lineHeight: 1.4,
          marginBottom: "10px",
        }}>
          {video.titre}
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {video.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setPlaying(true)}
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#2d7a4f",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {tag} →
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function VideoPreview({ locale }: { locale: string }) {
  return (
    <section style={{ background: "#fafaf8", padding: "72px 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Tag centré "Médiathèque" avec traits des deux côtés */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "20px",
        }}>
          <span style={{ flex: 1, maxWidth: "48px", height: "1px", background: "#2d7a4f" }} />
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#2d7a4f",
          }}>
            Médiathèque
          </span>
          <span style={{ flex: 1, maxWidth: "48px", height: "1px", background: "#2d7a4f" }} />
        </div>

        {/* Titre centré */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px",
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          lineHeight: 1.3,
          marginBottom: "36px",
        }}>
          Le mouvement en images.
        </h2>

        {/* Grille 3 cards */}
        <div className="vid2-grid">
          {VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>

        {/* CTA centré */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link
            href={`/${locale}/ressources/videos`}
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#2d7a4f",
              textDecoration: "none",
              border: "1px solid rgba(45,122,79,0.25)",
              borderRadius: "6px",
              padding: "12px 24px",
              display: "inline-block",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            className="vid2-cta"
          >
            Toute la médiathèque →
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .vid2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .vid2-play:hover { transform: translate(-50%, -50%) scale(1.1) !important; }
        .vid2-cta:hover  { background: rgba(45,122,79,0.06) !important; }
        @media (max-width: 768px) {
          .vid2-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
