"use client";

import { useState } from "react";
import Link from "next/link";

const VIDEO_URL =
  "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775741043/Mariama_Sonko_-_Chairwoman_of_the_Nous_sommes_la_SOLUTION_movement_S%C3%A9negal_--_SeedIsLife_ak3z9z.mp4";
const THUMB_URL =
  "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg";

const STATS = [
  { value: "2011",  label: "Fondation"                    },
  { value: "12",    label: "Organisations fondatrices"    },
  { value: "500+",  label: "Associations de femmes rurales"},
];

export default function HeroSectionRedesign() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="ap-section" aria-labelledby="ap-heading">
      <div className="ap-inner">

        {/* ══════════════ GAUCHE ══════════════ */}
        <div className="ap-left">

          {/* Eyebrow */}
          <p className="ap-eyebrow">Qui sommes-nous</p>

          {/* H2 */}
          <h2 id="ap-heading" className="ap-h2">
            Une Afrique où les femmes rurales{" "}
            <em className="ap-h2-em">décident et cultivent leur avenir</em>
          </h2>

          {/* Description */}
          <p className="ap-body">
            Créé en tant qu&apos;expression des droits des femmes au sein d&apos;une
            campagne globale pour la souveraineté alimentaire menée par les mouvements
            paysans du continent, NSS s&apos;est imposé sur le champ des alternatives
            paysannes durables, économiquement rentables, socialement et écologiquement viables.
          </p>

          {/* Citation */}
          <blockquote className="ap-quote">
            <p className="ap-quote-text">
              &ldquo;Plus de 500 Associations de Femmes Rurales (AFR) y ont adhéré
              depuis lors et le mouvement compte 175&nbsp;000 membres et sympathisants
              à travers l&apos;Afrique de l&apos;Ouest.&rdquo;
            </p>
          </blockquote>

          {/* Stats en bas avant le CTA */}
          <div className="ap-stats" role="list">
            {STATS.map(({ value, label }) => (
              <div key={label} className="ap-stat" role="listitem">
                <span className="ap-stat-value">{value}</span>
                <span className="ap-stat-label">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/fr/mouvement" className="ap-cta">
            Découvrir le mouvement
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" aria-hidden="true">
              <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ══════════════ DROITE — grande vidéo ══════════════ */}
        <div className="ap-right">
          <div className="ap-video-outer">
          <div
            className="ap-video"
            onClick={() => !playing && setPlaying(true)}
            style={{ cursor: playing ? "default" : "pointer" }}
          >
            {playing ? (
              <video
                src={VIDEO_URL}
                controls autoPlay playsInline
                className="ap-video-el"
              />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={THUMB_URL}
                  alt="Mariama Sonko — Présidente Nous Sommes la Solution"
                  className="ap-video-el"
                />
                <div className="ap-video-veil" />

                {/* Bouton play or */}
                <button
                  className="ap-play"
                  aria-label="Regarder la vidéo"
                  onClick={e => { e.stopPropagation(); setPlaying(true); }}
                >
                  <span className="ap-play-ring" aria-hidden="true" />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ap-play-icon">
                    <path d="M6 4.75L19.25 12 6 19.25V4.75Z" fill="currentColor"/>
                  </svg>
                </button>

                {/* Badge "Regarder" */}
                <div className="ap-badge">
                  <span className="ap-badge-dot" aria-hidden="true" />
                  Regarder la vidéo
                </div>
              </>
            )}
          </div>
          <p className="ap-legend">Mariama Sonko — Présidente, Nous Sommes la Solution</p>
          </div>
        </div>

      </div>

      <style>{`
        .ap-section {
          background: #fff;
          border-top: 1px solid #e4ede5;
        }
        .ap-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 52px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: stretch;
          box-sizing: border-box;
        }

        /* ── Gauche ── */
        .ap-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Stats */
        .ap-stats {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
          margin: 0 0 20px;
          border-top: 1px solid #e4ede5;
          border-bottom: 1px solid #e4ede5;
          padding: 12px 0;
        }
        .ap-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          padding: 0 20px 0 0;
          border-right: 1px solid #e4ede5;
          margin-right: 20px;
        }
        .ap-stat:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }
        .ap-stat-value {
          font-family: var(--font-display), Georgia, serif;
          font-size: 32px;
          font-weight: 400;
          color: #045627;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ap-stat-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #111;
          line-height: 1.4;
        }

        /* Eyebrow */
        .ap-eyebrow {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #00AD4C;
          margin: 0 0 12px;
        }

        /* H2 */
        .ap-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 600;
          line-height: 1.16;
          color: #045627;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .ap-h2-em {
          font-style: italic;
          color: #00AD4C;
        }

        /* Description */
        .ap-body {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.80;
          color: #111;
          text-align: justify;
          margin: 0 0 20px;
        }

        /* Citation */
        .ap-quote {
          border-left: 2px solid #E8A838;
          padding: 2px 0 2px 18px;
          margin: 0 0 20px;
        }
        .ap-quote-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 18px;
          font-style: italic;
          line-height: 1.60;
          color: #000;
          margin: 0 0 8px;
        }
        .ap-quote-attr {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
        }

        /* CTA */
        .ap-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #045627;
          text-decoration: none;
          align-self: flex-start;
          border-bottom: 1.5px solid #00AD4C;
          padding-bottom: 3px;
          transition: color 0.2s, gap 0.2s;
        }
        .ap-cta:hover { color: #00AD4C; gap: 16px; }

        /* ── Droite — vidéo premium ── */
        .ap-right {
          display: flex;
          flex-direction: column;
        }
        .ap-video-outer {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          gap: 0;
        }

        /* Cadre vidéo premium */
        .ap-video {
          position: relative;
          width: 100%;
          flex: 1;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          background: #061409;
          box-shadow:
            0 0 0 1px rgba(232,168,56,0.18),
            0 2px 0 0 #E8A838,
            0 24px 64px rgba(4,86,39,0.18),
            0 4px 16px rgba(0,0,0,0.12);
        }
        .ap-video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* Voile cinématique */
        .ap-video-veil {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top,  rgba(4,86,39,0.72) 0%, transparent 45%),
            linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 25%);
        }

        /* Bouton play premium */
        .ap-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #E8A838;
          color: #045627;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow:
            0 0 0 8px rgba(232,168,56,0.15),
            0 6px 28px rgba(232,168,56,0.60);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s;
        }
        .ap-play:hover {
          transform: translate(-50%, -50%) scale(1.13);
          box-shadow:
            0 0 0 12px rgba(232,168,56,0.12),
            0 10px 40px rgba(232,168,56,0.75);
        }
        .ap-play-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px solid rgba(232,168,56,0.40);
          animation: ap-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes ap-pulse {
          0%   { transform: scale(1);    opacity: 1; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        .ap-play-icon { position: relative; z-index: 1; margin-left: 3px; }

        /* Badge "Regarder" en bas gauche */
        .ap-badge {
          position: absolute;
          bottom: 18px;
          left: 20px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,237,214,0.80);
        }
        .ap-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00AD4C;
          flex-shrink: 0;
          animation: ap-blink 1.8s ease-in-out infinite;
        }
        @keyframes ap-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }

        /* Légende premium sous la vidéo */
        .ap-legend {
          background: #045627;
          color: rgba(245,237,214,0.90);
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-align: center;
          padding: 13px 20px;
          margin: 0;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 4px 20px rgba(4,86,39,0.15);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ap-inner { padding: 44px 28px; gap: 40px; }
        }
        @media (max-width: 768px) {
          .ap-inner {
            grid-template-columns: 1fr;
            padding: 40px 20px;
            gap: 32px;
          }
          .ap-video { min-height: 280px; }
        }
        @media (max-width: 480px) {
          .ap-inner { padding: 32px 16px; gap: 24px; }
          .ap-h2 { font-size: clamp(20px, 6vw, 28px); }
          .ap-body { font-size: 14.5px; }
          .ap-video { min-height: 240px; }
          .ap-stat-value { font-size: 26px; min-width: 54px; }
        }
      `}</style>
    </section>
  );
}
