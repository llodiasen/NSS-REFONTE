"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CTAHeroSectionRedesign() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="cth" aria-labelledby="cth-heading">
      {/* Gradient de fond */}
      <div className="cth__bg" aria-hidden="true" />

      {/* Motif kente géométrique overlay */}
      <div className="cth__pattern" aria-hidden="true" />

      {/* Halo or subtil */}
      <div className="cth__halo" aria-hidden="true" />

      <div className="cth__inner" ref={innerRef}>
        {/* Eyebrow */}
        <div className="cth__eyebrow" role="presentation">
          <span className="cth__line" />
          <span className="cth__eyebrow-txt">Rejoindre le mouvement</span>
          <span className="cth__line cth__line--rev" />
        </div>

        {/* H2 */}
        <h2 id="cth-heading" className="cth__h2">
          Par nous-mêmes.{" "}
          <em>Pour nous-mêmes.</em>
        </h2>

        {/* Sous-titre */}
        <p className="cth__sub">
          Partagez-vous notre vision ? Adhérez à NSS et rejoignez{" "}
          175&nbsp;000 femmes rurales qui transforment les systèmes
          alimentaires en Afrique de l&apos;Ouest.
        </p>

        {/* Boutons */}
        <div className="cth__btns">
          <Link
            href="/fr/agir/rejoindre"
            className="cth__btn cth__btn--primary"
            aria-label="Adhérer au mouvement NSS"
          >
            Adhérer
          </Link>
          <Link
            href="/fr/contact"
            className="cth__btn cth__btn--ghost"
            aria-label="Nous contacter"
          >
            Nous contacter →
          </Link>
        </div>

        {/* Tagline bas */}
        <p className="cth__tagline" aria-hidden="true">
          En nous-mêmes.
        </p>
      </div>

      <style>{`
        /* ════ Section ════════════════════════════════════════ */
        .cth {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
        }

        /* Gradient vert foncé → vert vif */
        .cth__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #021f0e 0%,
            #045627 40%,
            #007a37 70%,
            #00AD4C 100%
          );
          z-index: 0;
        }

        /* Motif géométrique diagonal kente */
        .cth__pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 18px,
              rgba(245,237,214,0.04) 18px,
              rgba(245,237,214,0.04) 20px
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 18px,
              rgba(165,206,70,0.04) 18px,
              rgba(165,206,70,0.04) 20px
            );
        }

        /* Halo or centré */
        .cth__halo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232,168,56,0.10) 0%,
            transparent 65%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ════ Contenu ════════════════════════════════════════ */
        .cth__inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 96px var(--container-pad, 24px);
          text-align: center;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cth__inner[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* Eyebrow */
        .cth__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-bottom: 28px;
        }
        .cth__line {
          display: block;
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,168,56,0.7));
        }
        .cth__line--rev {
          background: linear-gradient(90deg, rgba(232,168,56,0.7), transparent);
        }
        .cth__eyebrow-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #E8A838;
        }

        /* H2 */
        .cth__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(36px, 6vw, 76px);
          font-weight: 500;
          line-height: 1.05;
          color: #F5EDD6;
          margin: 0 0 24px;
          letter-spacing: -0.015em;
        }
        .cth__h2 em {
          font-style: italic;
          color: #A5CE46;
        }

        /* Sous-titre */
        .cth__sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.75;
          color: rgba(245,237,214,0.82);
          max-width: 620px;
          margin: 0 auto 44px;
        }

        /* Boutons */
        .cth__btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cth__btn {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 36px;
          border-radius: 2px;
          display: inline-block;
          transition: background 0.22s ease, color 0.22s ease,
                      border-color 0.22s ease, transform 0.22s ease;
        }
        .cth__btn--primary {
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
        }
        .cth__btn--primary:hover {
          background: #008f3e;
          border-color: #008f3e;
          transform: translateY(-2px);
        }
        .cth__btn--ghost {
          background: transparent;
          color: #F5EDD6;
          border: 1.5px solid rgba(245,237,214,0.45);
        }
        .cth__btn--ghost:hover {
          background: rgba(245,237,214,0.10);
          border-color: rgba(245,237,214,0.80);
          transform: translateY(-2px);
        }

        /* Tagline bas */
        .cth__tagline {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(13px, 1.2vw, 15px);
          font-style: italic;
          color: rgba(245,237,214,0.32);
          margin: 48px 0 0;
          letter-spacing: 0.06em;
        }

        /* ════ Responsive ═════════════════════════════════════ */
        @media (max-width: 640px) {
          .cth__inner { padding: 72px 20px; }
          .cth__btns { flex-direction: column; align-items: stretch; }
          .cth__btn { text-align: center; }
        }
      `}</style>
    </section>
  );
}
