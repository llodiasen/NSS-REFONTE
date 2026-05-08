"use client";

import { useEffect, useRef } from "react";

const VIDEO_ID    = "FothaoeQsQ8";
const VIDEO_SRC   = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&loop=1&playlist=${VIDEO_ID}`;
const VIDEO_TITLE = "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété";
const CAPTION     = "Au Sénégal — Le Combat des Agricultrices pour l'Accès à la Propriété";

const STATS = [
  { v: "70 %",    l: "des productrices alimentaires en Afrique sont des femmes" },
  { v: "175 000", l: "membres actives à travers l'Afrique de l'Ouest"           },
  { v: "12",      l: "pays membres du réseau NSS"                                },
];

export default function AboutDeclaration() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ad--vis"); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="ad" ref={sectionRef} aria-labelledby="ad-heading">
      <div className="ad__wrap">

        {/* ════════ GAUCHE — Texte ════════ */}
        <div className="ad__left">

          {/* Label or */}
          <span className="ad__label" aria-label="Notre identité">Notre identité</span>

          {/* Titre */}
          <h2 id="ad-heading" className="ad__h2">
            <span className="ad__h2-line">Les femmes rurales nourrissent l&apos;Afrique.</span>
            <em className="ad__h2-em">Elles sont la solution.</em>
          </h2>

          {/* Underline vert 60px */}
          <span className="ad__underline" aria-hidden="true" />

          {/* Paragraphe 1 */}
          <p className="ad__body">
            En Afrique, l&apos;agriculture familiale fait vivre environ{" "}
            <strong className="ad__hl">70&nbsp;%</strong> des populations.
            Ce sont les femmes rurales qui en assurent l&apos;essentiel —
            semailles, récoltes, transformation, conservation. Pourtant,
            elles ont un accès limité à la terre, aux ressources et aux
            décisions qui gouvernent leur travail.
          </p>

          {/* Paragraphe 2 */}
          <p className="ad__body ad__body--last">
            NSS est né pour changer cela. Non pas pour demander de l&apos;aide,
            mais pour affirmer que les femmes rurales africaines sont,
            elles-mêmes, la solution à la crise alimentaire du continent.
          </p>

          {/* Stat-cards 3 colonnes */}
          <div className="ad__stats" role="list" aria-label="Chiffres clés">
            {STATS.map(({ v, l }) => (
              <div key={v} className="ad__stat" role="listitem">
                <span className="ad__stat-v">{v}</span>
                <span className="ad__stat-l">{l}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ════════ DROITE — Vidéo ════════ */}
        <div className="ad__right">
          <div className="ad__vid">
            <iframe
              src={VIDEO_SRC}
              title={VIDEO_TITLE}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="ad__iframe"
            />
            {/* Caption bas-gauche */}
            <div className="ad__caption" aria-hidden="true">
              <span className="ad__caption-dot" />
              {CAPTION}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* ══ Section — fade-in scroll ════════════════════════════ */
        .ad {
          background: #ffffff;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ad--vis { opacity: 1; transform: translateY(0); }

        /* ══ Grid 2 cols ═════════════════════════════════════════ */
        .ad__wrap {
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 5rem 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }

        /* ══ Colonne gauche ══════════════════════════════════════ */
        .ad__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Label or */
        .ad__label {
          display: inline-block;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #E8A838;
          margin-bottom: 16px;
        }

        .ad__h2 {
          font-family: var(--font-display, 'Playfair Display', Georgia, serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 600;
          line-height: 1.16;
          color: #1a1a1a;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .ad__h2-line { display: block; }
        .ad__h2-em {
          display: block;
          font-style: italic;
          color: #A5CE46;
        }

        /* Underline vert 60px */
        .ad__underline {
          display: block;
          width: 60px; height: 3px;
          background: #00AD4C;
          border-radius: 2px;
          margin-bottom: 24px;
          flex-shrink: 0;
        }

        /* Paragraphes */
        .ad__body {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 17px;
          line-height: 1.8;
          color: #1a1a1a;
          margin: 0 0 16px;
          text-align: justify;
          hyphens: auto;
        }
        .ad__body--last { margin-bottom: 28px; }
        .ad__hl { font-weight: 700; color: #00AD4C; }

        /* Stat-cards 3 colonnes */
        .ad__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .ad__stat {
          background: #FAF6EE;
          border-radius: 8px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .ad__stat:hover {
          background: #F2EDE0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .ad__stat-v {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 27px;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
        }
        .ad__stat-l {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13px;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.4;
        }

        /* ══ Colonne droite — vidéo ══════════════════════════════ */
        .ad__right {
          display: flex;
          flex-direction: column;
        }

        .ad__vid {
          position: relative;
          flex: 1;
          min-height: 320px;
          border-radius: 12px;
          overflow: hidden;
          background: #041a0c;
          box-shadow: 0 4px 16px rgba(0,0,0,0.14);
        }

        .ad__iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Caption bas-gauche */
        .ad__caption {
          position: absolute;
          bottom: 56px; /* au-dessus des contrôles YouTube */
          left: 14px;
          z-index: 1;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(4px);
          color: #fff;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 4px;
          max-width: calc(100% - 28px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ad__caption-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
          animation: ad-blink 2s ease-in-out infinite;
        }
        @keyframes ad-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        /* ══ Responsive ══════════════════════════════════════════ */
        @media (max-width: 900px) {
          .ad__wrap {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 4rem 24px;
          }
          /* Mobile : texte d'abord, puis vidéo */
          .ad__left  { order: 1; }
          .ad__right { order: 2; }
          .ad__vid   { aspect-ratio: 16/9; flex: none; min-height: 0; }
          .ad__h2    { font-size: 28px; }
          .ad__stats { grid-template-columns: repeat(3, 1fr); gap: 8px; }
        }
        @media (max-width: 480px) {
          .ad__h2    { font-size: 24px; }
          .ad__stats { grid-template-columns: 1fr 1fr; }
          .ad__stat  { padding: 12px 10px; }
          .ad__stat-v { font-size: 22px; }
          .ad__caption { font-size: 10px; bottom: 48px; }
        }
      `}</style>
    </section>
  );
}
