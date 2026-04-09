"use client";

import Link from "next/link";
import { useState } from "react";

const VIDEO_URL = "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775741043/Mariama_Sonko_-_Chairwoman_of_the_Nous_sommes_la_SOLUTION_movement_S%C3%A9negal_--_SeedIsLife_ak3z9z.mp4";
const THUMB_URL = "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg";

export default function AboutSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section style={{ background: "#ffffff", overflow: "hidden" }}>
      <div
        className="about-outer"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "80px var(--container-pad)",
        }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            gap: "64px",
          }}
        >
          {/* ── Colonne gauche ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Eyebrow — À propos — */}
            <div style={{ marginBottom: "28px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#3B6D11",
                  letterSpacing: "0.04em",
                }}
              >
                — À propos —
              </span>
            </div>

            {/* Titre */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.6vw, 36px)",
                fontWeight: 400,
                lineHeight: 1.18,
                color: "var(--text-primary)",
                marginBottom: "16px",
              }}
            >
              Agroécologie &amp; Souveraineté Alimentaire en Afrique
            </h2>

            {/* Barre décorative */}
            <div
              aria-hidden="true"
              style={{
                width: "40px",
                height: "3px",
                background: "#3B6D11",
                marginBottom: "28px",
              }}
            />

            {/* Paragraphe */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "var(--text-body)",
                textAlign: "justify",
                marginBottom: "24px",
              }}
            >
              Créé en tant qu&apos;expression des droits des femmes au sein d&apos;une
              campagne globale pour la souveraineté alimentaire menée par les
              mouvements paysans du continent, NSS s&apos;est imposé sur le champ des
              alternatives paysannes durables, économiquement rentables,
              socialement et écologiquement viables.
            </p>

            {/* Bloc citation */}
            <blockquote
              style={{
                borderLeft: "3px solid #3B6D11",
                paddingLeft: "20px",
                margin: "0 0 40px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "var(--text-body)",
                  fontStyle: "normal",
                  textAlign: "justify",
                }}
              >
                Plus de{" "}
                <strong style={{ color: "#3B6D11" }}>
                  500 Associations de Femmes Rurales (AFR)
                </strong>{" "}
                y ont adhéré depuis lors et le mouvement compte{" "}
                <strong style={{ color: "#3B6D11" }}>
                  175&nbsp;000 membres et sympathisants
                </strong>{" "}
                à travers l&apos;Afrique de l&apos;Ouest.
              </p>
            </blockquote>

            {/* Bouton */}
            <div>
              <Link href="/a-propos" className="about-btn">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* ── Colonne droite — Vidéo pleine hauteur ── */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Bloc vidéo */}
            <div
              style={{
                position: "relative",
                width: "100%",
                flex: 1,
                minHeight: "400px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                border: "4px solid #ffffff",
                zIndex: 2,
                background: "#0d2015",
                cursor: playing ? "default" : "pointer",
              }}
              onClick={() => !playing && setPlaying(true)}
            >
              {playing ? (
                <video
                  src={VIDEO_URL}
                  controls
                  autoPlay
                  playsInline
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={THUMB_URL}
                    alt="Mariama Sonko — Nous Sommes la Solution"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.30)" }} />
                  <button
                    aria-label="Regarder la vidéo"
                    className="about-play-btn"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.92)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                      transition: "transform 0.2s ease, background 0.2s ease",
                    }}
                    onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 4.75L19.25 12 6 19.25V4.75Z" fill="#1D9E75" />
                    </svg>
                  </button>
                </>
              )}
            </div>

              {/* Badge — sous la vidéo */}
              <div
                style={{
                  marginTop: "16px",
                  alignSelf: "flex-start",
                  background: "#ffffff",
                  borderRadius: "12px",
                  border: "0.5px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#3B6D11",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    +14 ans d&apos;engagement
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Agir pour l&apos;agriculture durable
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1) !important;
          background: rgba(255,255,255,1) !important;
        }
        .about-btn {
          display: inline-block;
          background: #3B6D11;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          text-transform: none;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .about-btn:hover {
          background: #2e560d;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .about-outer {
            padding: 60px 24px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-photo-wrap {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
