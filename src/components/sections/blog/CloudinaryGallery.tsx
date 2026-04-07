"use client";

import { useState, useEffect, useCallback } from "react";
import { CldImage } from "next-cloudinary";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CloudinaryImage } from "@/app/api/cloudinary-gallery/route";

interface Props {
  folderId: string;
  title?: string;
}

export default function CloudinaryGallery({ folderId, title = "Photos du CIFAP 2025" }: Props) {
  const [images, setImages]   = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);
  const [active, setActive]   = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/cloudinary-gallery?folder=${encodeURIComponent(folderId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setImages(data.images ?? []);
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [folderId]);

  const close   = useCallback(() => setActive(null), []);
  const goPrev  = useCallback(() => setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const goNext  = useCallback(() => setActive((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section style={{ background: "#F6F3EE", borderRadius: "12px", padding: "32px 28px", margin: "40px 0" }}>
      {/* En-tête */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 400, color: "#1a2612", margin: 0 }}>
          {title}
        </h3>
        {!loading && !error && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8375" }}>
            {images.length} photo{images.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* États */}
      {loading && (
        <div style={{ textAlign: "center", padding: "40px 0", fontFamily: "var(--font-body)", fontSize: "13px", color: "#8a8375" }}>
          Chargement des photos…
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", padding: "24px 0", fontFamily: "var(--font-body)", fontSize: "13px", color: "#c0392b" }}>
          {error}
        </div>
      )}

      {/* Grille */}
      {!loading && !error && images.length > 0 && (
        <div className="cld-grid">
          {images.map((img, i) => (
            <button
              key={img.public_id}
              className="cld-item"
              onClick={() => setActive(i)}
              aria-label={img.display_name ?? `Photo ${i + 1}`}
            >
              <CldImage
                src={img.public_id}
                width={800}
                height={600}
                crop="fill"
                gravity="auto"
                alt={img.display_name ?? `Photo ${i + 1} du CIFAP 2025`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="cld-overlay" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {active !== null && (
        <div className="cld-lb" onClick={close} role="dialog" aria-modal="true">
          <div className="cld-lb-img" onClick={(e) => e.stopPropagation()}>
            <CldImage
              src={images[active].public_id}
              width={1600}
              height={1200}
              crop="fill"
              gravity="auto"
              alt={images[active].display_name ?? `Photo ${active + 1}`}
              style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }}
              sizes="90vw"
              priority
            />
          </div>

          {/* Compteur */}
          <div className="cld-lb-counter">{active + 1} / {images.length}</div>

          {/* Fermer */}
          <button className="cld-lb-close" onClick={close} aria-label="Fermer">
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          {active > 0 && (
            <button className="cld-lb-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Photo précédente">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
          )}

          {/* Next */}
          {active < images.length - 1 && (
            <button className="cld-lb-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Photo suivante">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}

      <style>{`
        /* ── GRILLE ── */
        .cld-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .cld-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          background: #d4ddd0;
        }
        .cld-item img { transition: transform 0.45s ease; }
        .cld-item:hover img { transform: scale(1.04); }
        .cld-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,38,18,0);
          transition: background 0.3s ease;
        }
        .cld-item:hover .cld-overlay { background: rgba(26,38,18,0.25); }

        /* ── LIGHTBOX ── */
        .cld-lb {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: cld-fade 0.2s ease;
        }
        @keyframes cld-fade { from { opacity: 0; } to { opacity: 1; } }

        .cld-lb-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cld-lb-counter {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
          pointer-events: none;
        }

        .cld-lb-close {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cld-lb-close:hover { background: rgba(255,255,255,0.18); }

        .cld-lb-prev, .cld-lb-next {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 28px;
          transition: background 0.2s, transform 0.2s;
        }
        .cld-lb-prev { left: 20px; }
        .cld-lb-next { right: 20px; }
        .cld-lb-prev:hover { background: rgba(255,255,255,0.18); transform: translateY(-50%) translateX(-2px); }
        .cld-lb-next:hover { background: rgba(255,255,255,0.18); transform: translateY(-50%) translateX(2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) { .cld-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  {
          .cld-grid { grid-template-columns: 1fr; }
          .cld-lb-prev { left: 8px; }
          .cld-lb-next { right: 8px; }
          .cld-lb-prev, .cld-lb-next { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}
