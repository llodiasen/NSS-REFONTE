"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { ArticleGalleryItem } from "@/data/articles";

const PREVIEW_COUNT = 6;

interface Props {
  items: ArticleGalleryItem[];
  title?: string;
  subtitle?: string;
}

// Editorial grid positions (6-photo layout, 3-col × 3-row)
const EDITORIAL_POS: Array<{ gridColumn: string; gridRow: string }> = [
  { gridColumn: "1",     gridRow: "1 / 3" },   // Photo 1 — grande, 2 rangées
  { gridColumn: "2",     gridRow: "1" },         // Photo 2
  { gridColumn: "3",     gridRow: "1" },         // Photo 3
  { gridColumn: "2 / 4", gridRow: "2" },         // Photo 4 — large, 2 colonnes
  { gridColumn: "1 / 3", gridRow: "3" },         // Photo 5 — large, 2 colonnes
  { gridColumn: "3",     gridRow: "3" },         // Photo 6
];

export default function ArticleGallery({ items, title = "Galerie photographique", subtitle }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close   = useCallback(() => setActive(null), []);
  const goPrev  = useCallback(() => setActive(i => (i !== null && i > 0               ? i - 1 : i)), []);
  const goNext  = useCallback(() => setActive(i => (i !== null && i < items.length - 1 ? i + 1 : i)), [items.length]);

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

  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const preview  = items.slice(0, PREVIEW_COUNT);
  const hasMore  = items.length > PREVIEW_COUNT;
  const useEditorial = preview.length === PREVIEW_COUNT;

  return (
    <>
      {/* ── Header ── */}
      <div style={{ marginTop: "48px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
          <span style={{ display: "block", width: "28px", height: "1px", background: "var(--green-600)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
            Galerie
          </span>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 400, color: "#071A10", margin: "0 0 6px" }}>
          {title}
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#9ca3af", margin: 0 }}>
          {subtitle ?? `${items.length} photos — Cliquez pour agrandir`}
        </p>
      </div>

      {/* ── Editorial grid (desktop, 6 photos) ── */}
      <div className={useEditorial ? "gal-editorial" : "gal-simple"}>
        {preview.map((item, i) => {
          const pos = useEditorial ? EDITORIAL_POS[i] : {};
          return (
            <button
              key={`${item.url}-${i}`}
              className="gal-item"
              onClick={() => setActive(i)}
              aria-label={`Ouvrir : ${item.caption}`}
              style={{ ...pos }}
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="gal-overlay" aria-hidden="true">
                <div className="gal-overlay-inner">
                  <ZoomIn size={22} color="#fff" strokeWidth={1.5} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Mobile grid (2 cols, 4 photos) ── */}
      <div className="gal-mobile">
        {items.slice(0, 4).map((item, i) => (
          <button
            key={`mob-${item.url}-${i}`}
            className="gal-item"
            onClick={() => setActive(i)}
            aria-label={`Ouvrir : ${item.caption}`}
          >
            <Image
              src={item.url}
              alt={item.caption}
              fill
              style={{ objectFit: "cover" }}
              sizes="50vw"
            />
            <div className="gal-overlay" aria-hidden="true">
              <div className="gal-overlay-inner">
                <ZoomIn size={22} color="#fff" strokeWidth={1.5} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Voir toutes les photos ── */}
      {hasMore && (
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link
            href={`/${locale}/ressources/galerie`}
            className="gal-see-all"
            aria-label={`Voir toutes les photos (${items.length})`}
          >
            Voir l&apos;album →
          </Link>
        </div>
      )}

      {/* ── Lightbox ── */}
      {active !== null && (
        <div className="gal-lb-backdrop" onClick={close} role="dialog" aria-modal="true">
          <div className="gal-lb-shell" onClick={e => e.stopPropagation()}>

            <div className="gal-lb-topbar">
              <span className="gal-lb-counter">{active + 1} / {items.length}</span>
              <button className="gal-lb-close" onClick={close} aria-label="Fermer">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="gal-lb-img-wrap" key={active}>
              <Image
                src={items[active].url}
                alt={items[active].caption}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
                priority
              />
            </div>

            {items[active].caption && (
              <p className="gal-lb-caption">{items[active].caption}</p>
            )}
          </div>

          {active > 0 && (
            <button className="gal-lb-prev" onClick={e => { e.stopPropagation(); goPrev(); }} aria-label="Photo précédente">
              <ChevronLeft size={26} strokeWidth={1.5} />
            </button>
          )}
          {active < items.length - 1 && (
            <button className="gal-lb-next" onClick={e => { e.stopPropagation(); goNext(); }} aria-label="Photo suivante">
              <ChevronRight size={26} strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}

      <style>{`
        /* ── EDITORIAL GRID (desktop, exactly 6 photos) ── */
        .gal-editorial {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 240px 220px 200px;
          gap: 8px;
        }

        /* ── SIMPLE GRID (fallback, < 6 photos) ── */
        .gal-simple {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .gal-simple .gal-item {
          aspect-ratio: 4 / 3;
        }

        /* ── MOBILE GRID (hidden on desktop) ── */
        .gal-mobile { display: none; }

        /* ── SHARED ITEM STYLES ── */
        .gal-item {
          position: relative;
          border: none;
          padding: 0;
          background: #d4e0d6;
          cursor: pointer;
          border-radius: 6px;
          overflow: hidden;
        }
        .gal-editorial .gal-item,
        .gal-simple .gal-item { width: 100%; height: 100%; }

        .gal-item img { transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .gal-item:hover img { transform: scale(1.05); }

        .gal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(7,26,16,0);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.35s ease, opacity 0.35s ease;
          opacity: 0;
        }
        .gal-overlay-inner {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }
        .gal-item:hover .gal-overlay { background: rgba(7,26,16,0.42); opacity: 1; }
        .gal-item:hover .gal-overlay-inner { transform: scale(1); }

        /* ── SEE ALL BUTTON ── */
        .gal-see-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: transparent;
          border: 1.5px solid var(--green-600, #1d7a52);
          color: var(--green-600, #1d7a52);
          font-family: Outfit, sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          border-radius: 2px;
        }
        .gal-see-all:hover { background: var(--green-600, #1d7a52); color: #fff; }

        /* ── LIGHTBOX ── */
        .gal-lb-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(4,12,8,0.96);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          animation: lb-fade-in 0.22s ease;
        }
        @keyframes lb-fade-in { from { opacity: 0; } to { opacity: 1; } }

        .gal-lb-shell {
          position: relative; width: 88vw; max-width: 1100px; height: 84vh;
          display: flex; flex-direction: column;
        }
        .gal-lb-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 0 14px; flex-shrink: 0;
        }
        .gal-lb-counter {
          font-family: var(--font-body); font-size: 12px;
          color: rgba(255,255,255,0.4); letter-spacing: 1px;
        }
        .gal-lb-close {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.8);
          display: flex; align-items: center; justify-content: center; cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .gal-lb-close:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); }

        .gal-lb-img-wrap {
          position: relative; flex: 1; border-radius: 8px; overflow: hidden;
          animation: lb-img-in 0.28s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        @keyframes lb-img-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .gal-lb-caption {
          font-family: var(--font-body); font-size: 12px;
          color: rgba(255,255,255,0.4); text-align: center;
          padding: 12px 0 0; margin: 0; flex-shrink: 0; letter-spacing: 0.3px;
        }
        .gal-lb-prev, .gal-lb-next {
          position: fixed; top: 50%; transform: translateY(-50%);
          width: 48px; height: 48px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.8);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10000;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .gal-lb-prev { left: 20px; }
        .gal-lb-next { right: 20px; }
        .gal-lb-prev:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.35); transform: translateY(-50%) translateX(-2px); }
        .gal-lb-next:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.35); transform: translateY(-50%) translateX(2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .gal-editorial, .gal-simple { display: none; }
          .gal-mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .gal-mobile .gal-item { height: 160px; }
          .gal-lb-shell { width: 96vw; height: 80vh; }
          .gal-lb-prev { left: 8px; }
          .gal-lb-next { right: 8px; }
          .gal-lb-prev, .gal-lb-next { width: 40px; height: 40px; }
        }
      `}</style>
    </>
  );
}
