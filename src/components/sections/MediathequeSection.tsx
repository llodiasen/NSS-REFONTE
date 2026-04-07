"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const VIDEOS = [
  {
    id: "boT5gIW072Q",
    titre: "10 Min avec Madame Sacko \u2014 Environnement et Agro\u00e9cologie",
  },
  {
    id: "LGkcZMWNgZA",
    titre: "Journal TV 138 \u2014 1er septembre 2025",
  },
  {
    id: "FothaoeQsQ8",
    titre: "Au S\u00e9n\u00e9gal\u00a0: Le Combat des Agricultrices pour l\u2019Acc\u00e8s \u00e0 la Propri\u00e9t\u00e9",
  },
];

function VideoCard({ id, titre }: { id: string; titre: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <article
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        border: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Thumbnail */}
      <div
        className="video-thumb"
        style={{
          position: "relative",
          height: "220px",
          background: "var(--green-900)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "transform 0.2s ease",
        }}
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={titre}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={thumb}
              alt={titre}
              fill
              style={{ objectFit: "cover", opacity: 0.75 }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Play button */}
            <button
              aria-label={`Regarder\u00a0: ${titre}`}
              onClick={() => setPlaying(true)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              className="play-btn"
            >
              {/* Triangle CSS */}
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderTop: "9px solid transparent",
                  borderBottom: "9px solid transparent",
                  borderLeft: "16px solid var(--green-700)",
                  marginLeft: "4px",
                }}
              />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "24px" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 500,
            color: "var(--text-primary)",
            lineHeight: 1.45,
            marginBottom: "14px",
          }}
        >
          {titre}
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          {["Explorer", "Regarder"].map((label) => (
            <button
              key={label}
              onClick={() => setPlaying(true)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--green-600)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.15s ease",
              }}
            >
              {label} →
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function MediathequeSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="media-inner"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        <SectionHeader
          label="Médiathèque"
          title="Le mouvement en images."
          subtitle="Photos, vidéos et témoignages de terrain — la vie du réseau NSS à travers 14 pays d'Afrique de l'Ouest."
        />

        {/* Grid 3 colonnes */}
        <div className="media-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {VIDEOS.map((v) => <VideoCard key={v.id} id={v.id} titre={v.titre} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/fr/ressources/videos"
            className="media-cta"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
              background: "var(--green-600)",
              padding: "10px 22px",
              display: "inline-block",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            Toute la médiathèque →
          </Link>
        </div>
      </div>

      <style>{`
        .video-thumb:hover { transform: scale(1.02); }
        .play-btn:hover { transform: translate(-50%, -50%) scale(1.1) !important; }
        .media-cta:hover { background: #fff !important; color: var(--green-600) !important; }
        @media (max-width: 768px) {
          .media-inner { padding: 60px 24px !important; }
          .media-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
