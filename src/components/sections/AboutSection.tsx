"use client";

import Link from "next/link";
import { useState } from "react";

const VIDEO_URL =
  "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775741043/Mariama_Sonko_-_Chairwoman_of_the_Nous_sommes_la_SOLUTION_movement_S%C3%A9negal_--_SeedIsLife_ak3z9z.mp4";
const THUMB_URL =
  "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg";

const MILESTONES = [
  { value: "2011",  label: "Fondation" },
  { value: "12",    label: "Organisations fondatrices" },
  { value: "500+",  label: "Associations de Femmes Rurales" },
];

export default function AboutSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="ab-section">
      <div className="ab-container">
        <div className="ab-grid">

          {/* ══════════ COLONNE GAUCHE — TEXTE ══════════ */}
          <div className="ab-left">

            {/* Ligne décorative or */}
            <div className="ab-deco-line" aria-hidden="true" />

            {/* Eyebrow */}
            <p className="ab-eyebrow">Qui sommes-nous</p>

            {/* H2 */}
            <h2 className="ab-h2">
              Une Afrique où les femmes rurales
              <em className="ab-h2-em"><br />décident et cultivent leur avenir</em>
            </h2>

            {/* Texte descriptif */}
            <p className="ab-vision">
              NSS œuvre pour une Afrique où, dans la solidarité, les femmes
              rurales — impliquées dans la prise de décision — cultivent,
              transforment, vendent et consomment les produits de
              l&apos;agriculture familiale tout en préservant l&apos;environnement
              pour un développement harmonieux et durable.
            </p>

            {/* Citation avec border-left vert */}
            <blockquote className="ab-quote">
              <p className="ab-quote-text">
                &ldquo;Avec leurs bras et leurs valeurs, les femmes rurales
                sont aptes à nourrir le monde.&rdquo;
              </p>
              <footer className="ab-attribution">
                MARIAMA SONKO — PRÉSIDENTE NSS · AJAC (Sénégal)
              </footer>
            </blockquote>

            {/* Chiffres clés */}
            <div className="ab-milestones" role="list">
              {MILESTONES.map(({ value, label }) => (
                <div key={label} className="ab-milestone" role="listitem">
                  <span className="ab-milestone-value">{value}</span>
                  <span className="ab-milestone-label">{label}</span>
                </div>
              ))}
            </div>

            <Link href="/fr/mouvement" className="ab-cta">
              Notre histoire →
            </Link>
          </div>

          {/* ══════════ COLONNE DROITE — VIDÉO ══════════ */}
          <div className="ab-right">
            <div
              className="ab-video-wrap"
              onClick={() => !playing && setPlaying(true)}
              style={{ cursor: playing ? "default" : "pointer" }}
            >
              {playing ? (
                <video
                  src={VIDEO_URL}
                  controls
                  autoPlay
                  playsInline
                  className="ab-video-el"
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={THUMB_URL}
                    alt="Mariama Sonko — Nous Sommes la Solution"
                    className="ab-video-el"
                  />
                  <div className="ab-video-veil" />
                  <button
                    className="ab-play-btn"
                    aria-label="Regarder la vidéo de Mariama Sonko"
                    onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
                  >
                    <span className="ab-play-ring" aria-hidden="true" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 4.75L19.25 12 6 19.25V4.75Z" fill="#045627" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="ab-tagline-strip">
              Mariama Sonko — Présidente, Nous Sommes la Solution
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .ab-section {
          background: #ffffff;
          border-top: 3px solid #00AD4C;
          overflow: hidden;
        }
        .ab-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 88px 60px;
          box-sizing: border-box;
        }

        /* ── Grille 2 colonnes ── */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        /* ── Colonne gauche ── */
        .ab-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 28px;
          position: relative;
        }

        /* Ligne décorative verticale or → vert clair */
        .ab-deco-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #E8A838 0%, #A5CE46 55%, #00AD4C 100%);
          border-radius: 2px;
        }

        /* Eyebrow */
        .ab-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
          margin: 0 0 20px;
        }

        /* H2 */
        .ab-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(28px, 3.2vw, 46px);
          font-weight: 400;
          line-height: 1.12;
          color: #045627;
          margin: 0 0 28px;
          max-width: 540px;
        }
        .ab-h2-em {
          font-style: italic;
          color: #00AD4C;
        }

        /* Texte descriptif */
        .ab-vision {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: #3a3a3a;
          margin: 0 0 32px;
        }

        /* Citation */
        .ab-quote {
          border-left: 3px solid #00AD4C;
          padding: 16px 20px;
          margin: 0 0 36px;
          background: rgba(0,173,76,0.04);
          border-radius: 0 6px 6px 0;
        }
        .ab-quote-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 18px;
          font-style: italic;
          font-weight: 400;
          line-height: 1.65;
          color: #1a1a1a;
          margin: 0 0 10px;
        }
        .ab-attribution {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E8A838;
        }

        /* Chiffres clés */
        .ab-milestones {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          padding: 24px 0;
          margin: 0 0 32px;
          border-top: 1px solid rgba(0,173,76,0.15);
          border-bottom: 1px solid rgba(0,173,76,0.15);
        }
        .ab-milestone {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ab-milestone-value {
          font-family: var(--font-display), Georgia, serif;
          font-size: 34px;
          font-weight: 400;
          color: #045627;
          line-height: 1;
        }
        .ab-milestone-label {
          font-size: 10px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* CTA */
        .ab-cta {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          color: #045627;
          text-decoration: none;
          border-bottom: 2px solid #00AD4C;
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ab-cta:hover { color: #00AD4C; border-color: #A5CE46; }

        /* ── Colonne droite — vidéo ── */
        .ab-right {
          display: flex;
          flex-direction: column;
        }
        .ab-video-wrap {
          position: relative;
          flex: 1;
          min-height: 340px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(0,173,76,0.12),
            0 20px 60px rgba(0,0,0,0.12);
          background: #0d2015;
          margin-bottom: 0;
        }
        .ab-video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ab-video-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,86,39,0.55) 0%,
            rgba(4,86,39,0.10) 40%,
            transparent 100%
          );
        }

        /* Bouton play */
        .ab-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(232,168,56,0.95);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 6px 24px rgba(232,168,56,0.50);
        }
        .ab-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.10);
          box-shadow: 0 8px 32px rgba(232,168,56,0.65);
        }
        /* Anneau pulse */
        .ab-play-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1.5px solid rgba(232,168,56,0.45);
          animation: ab-pulse 2.4s ease-out infinite;
        }
        @keyframes ab-pulse {
          0%   { transform: scale(1);    opacity: 0.9; }
          100% { transform: scale(1.50); opacity: 0;   }
        }

        /* Bandeau nom */
        .ab-tagline-strip {
          background: #045627;
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-align: center;
          padding: 14px 20px;
          border-radius: 0 0 12px 12px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ab-container { padding: 72px 40px; }
        }
        @media (max-width: 768px) {
          .ab-container { padding: 60px 24px; }
          .ab-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ab-video-wrap { min-height: 280px; }
        }
        @media (max-width: 480px) {
          .ab-container { padding: 48px 16px; }
          .ab-milestones { gap: 20px; }
          .ab-milestone-value { font-size: 28px; }
          .ab-quote-text { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
