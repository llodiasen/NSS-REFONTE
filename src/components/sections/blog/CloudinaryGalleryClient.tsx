"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "./CloudinaryGallery";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dtjvjlkcc";

/** Construit une URL Cloudinary à partir d'un public_id court ou complet. */
function cldUrl(publicId: string, w?: number, h?: number): string {
  if (publicId.startsWith("http")) return publicId;
  const t = w && h
    ? `c_fill,g_auto,w_${w},h_${h},q_auto,f_auto`
    : "q_auto,f_auto";
  const encoded = publicId.split("/").map(encodeURIComponent).join("/");
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t}/${encoded}`;
}

interface Props {
  images: GalleryImage[];
}

const PREVIEW = 5;

export default function CloudinaryGalleryClient({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close  = useCallback(() => setActive(null), []);
  const goPrev = useCallback(() => setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const goNext = useCallback(
    () => setActive((i) => (i !== null && i < images.length - 1 ? i + 1 : i)),
    [images.length]
  );

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

  const preview   = images.slice(0, PREVIEW);
  const remaining = images.length - PREVIEW;
  const Featured  = preview[0];
  const smalls    = preview.slice(1);

  return (
    <section style={{ borderRadius: "12px", padding: "32px 28px", margin: "40px 0" }}>

      {/* En-tête */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 400, color: "#1a2612", margin: 0 }}>
          Photos du CIFAP 2025
        </h3>
        {images.length > 0 && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8375" }}>
            {images.length} photo{images.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Vide */}
      {images.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", fontFamily: "var(--font-body)", fontSize: "13px", color: "#8a8375" }}>
          Aucune photo disponible.
        </div>
      )}

      {/* ── Grille vedette ── */}
      {images.length > 0 && Featured && (
        <>
          <div className="cld-featured-grid">

            {/* Grande image vedette — col 1, rows 1-2 */}
            <button
              className="cld-featured"
              onClick={() => setActive(0)}
              aria-label={Featured.caption ?? Featured.display_name ?? "Photo vedette"}
            >
              <Image
                src={cldUrl(Featured.public_id, 1200, 900)}
                width={1200}
                height={900}
                alt={Featured.caption ?? Featured.display_name ?? "Photo vedette CIFAP 2025"}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="cld-overlay" aria-hidden="true" />
              {Featured.caption && (
                <div className="cld-caption-overlay" aria-hidden="true">
                  <span className="cld-caption-text">{Featured.caption}</span>
                </div>
              )}
            </button>

            {/* 4 petites vignettes */}
            {smalls.map((img, i) => {
              const isLast = i === smalls.length - 1 && remaining > 0;
              return (
                <button
                  key={img.public_id}
                  className="cld-small"
                  onClick={() => setActive(isLast ? 0 : i + 1)}
                  aria-label={isLast ? `Voir les ${remaining} photos restantes` : (img.caption ?? img.display_name ?? `Photo ${i + 2}`)}
                >
                  <Image
                    src={cldUrl(img.public_id, 600, 450)}
                    width={600}
                    height={450}
                    alt={img.caption ?? img.display_name ?? `Photo ${i + 2} du CIFAP 2025`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {isLast ? (
                    <div className="cld-more-overlay" aria-hidden="true">
                      <div className="cld-more-text">
                        <span className="cld-more-count">+{remaining}</span>
                        <span className="cld-more-label">Voir l&apos;album →</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="cld-overlay" aria-hidden="true" />
                      {img.caption && (
                        <div className="cld-caption-overlay" aria-hidden="true">
                          <span className="cld-caption-text">{img.caption}</span>
                        </div>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bouton "Voir l'album" */}
          {remaining > 0 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => setActive(0)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1D9E75",
                  background: "transparent",
                  border: "1px solid rgba(29,158,117,0.35)",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(29,158,117,0.08)"; e.currentTarget.style.borderColor = "#1D9E75"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(29,158,117,0.35)"; }}
              >
                Voir l&apos;album complet ({images.length} photos) →
              </button>
            </div>
          )}
        </>
      )}

      {/* ── Lightbox ── */}
      {active !== null && (
        <div className="cld-lb" onClick={close} role="dialog" aria-modal="true">
          <div className="cld-lb-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={cldUrl(images[active].public_id, 1600, 1200)}
              width={1600}
              height={1200}
              alt={images[active].caption ?? images[active].display_name ?? `Photo ${active + 1}`}
              style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain", borderRadius: "4px", display: "block" }}
              sizes="90vw"
              priority
            />
            {images[active].caption && (
              <p className="cld-lb-caption">{images[active].caption}</p>
            )}
          </div>

          <div className="cld-lb-counter">{active + 1} / {images.length}</div>

          <button className="cld-lb-close" onClick={close} aria-label="Fermer">
            <X size={18} strokeWidth={1.5} />
          </button>

          {active > 0 && (
            <button className="cld-lb-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Photo précédente">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
          )}

          {active < images.length - 1 && (
            <button className="cld-lb-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Photo suivante">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}

      <style>{`
        /* ── GRILLE VEDETTE ── */
        .cld-featured-grid {
          display: grid;
          grid-template-columns: 3fr 1fr 1fr;
          grid-template-rows: 180px 180px;
          gap: 8px;
        }
        .cld-featured {
          grid-column: 1;
          grid-row: 1 / 3;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          background: #d4ddd0;
        }
        .cld-small {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          background: #d4ddd0;
        }
        .cld-featured img,
        .cld-small img { transition: transform 0.45s ease; }
        .cld-featured:hover img,
        .cld-small:hover img { transform: scale(1.04); }

        /* Overlay hover */
        .cld-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,38,18,0);
          transition: background 0.3s ease;
        }
        .cld-featured:hover .cld-overlay,
        .cld-small:hover .cld-overlay { background: rgba(26,38,18,0.22); }

        /* Légende au survol */
        .cld-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 14px 10px;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .cld-featured:hover .cld-caption-overlay,
        .cld-small:hover .cld-caption-overlay { opacity: 1; }
        .cld-caption-text {
          font-family: var(--font-body);
          font-size: 11px;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
          line-height: 1.4;
          display: block;
        }

        /* Overlay "+X photos" */
        .cld-more-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,20,12,0.62);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .cld-small:hover .cld-more-overlay { background: rgba(10,20,12,0.75); }
        .cld-more-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .cld-more-count {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1;
        }
        .cld-more-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

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
        .cld-lb-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          max-width: 90vw;
        }
        .cld-lb-caption {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          text-align: center;
          font-style: italic;
          letter-spacing: 0.02em;
          line-height: 1.5;
          margin: 0;
          max-width: 600px;
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
          transition: background 0.2s, transform 0.2s;
        }
        .cld-lb-prev { left: 20px; }
        .cld-lb-next { right: 20px; }
        .cld-lb-prev:hover { background: rgba(255,255,255,0.18); transform: translateY(-50%) translateX(-2px); }
        .cld-lb-next:hover { background: rgba(255,255,255,0.18); transform: translateY(-50%) translateX(2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .cld-featured-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 160px 120px 120px;
          }
          .cld-featured {
            grid-column: 1 / 3;
            grid-row: 1;
          }
          .cld-caption-overlay { opacity: 1; }
          .cld-lb-prev { left: 8px; }
          .cld-lb-next { right: 8px; }
          .cld-lb-prev, .cld-lb-next { width: 40px; height: 40px; }
        }
        @media (max-width: 480px) {
          .cld-more-count { font-size: 22px; }
          .cld-more-label { font-size: 10px; }
        }
      `}</style>
    </section>
  );
}
