"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ─── Types ───────────────────────────────────────────────── */
interface Partenaire {
  nom: string;
  logo: string;
  href?: string;
}

/* ─── Données ─────────────────────────────────────────────── */
const PARTENAIRES: Partenaire[] = [
  {
    nom: "Grassroots International",
    logo: "/images/partenaires/Grassroots-international.jpg",
    href: "https://www.grassrootsonline.org",
  },
  {
    nom: "Thousand Currents",
    logo: "/images/partenaires/thoussands-current-1.jpg",
    href: "https://thousandcurrents.org",
  },
  {
    nom: "Fonds pour l'Égalité",
    logo: "/images/partenaires/Fond-egalite.png",
    href: "https://www.fondspouregalite.org",
  },
  {
    nom: "Fahamu Africa",
    logo: "/images/partenaires/logofahamu1.png",
    href: "https://fahamu.org",
  },
  {
    nom: "Agroecology Fund",
    logo: "/images/partenaires/Agroecology-Fund.jpg",
    href: "https://agroecologyfund.org",
  },
];

/* ─── Section ────────────────────────────────────────────── */
export default function PartnersSectionRedesign() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pts" ref={sectionRef} aria-labelledby="pts-heading">
      <div className="pts__pattern" aria-hidden="true" />

      <div className="pts__wrap">
        {/* ── Eyebrow ── */}
        <header className="pts__header">
          <div className="pts__eyebrow" role="presentation">
            <span className="pts__line" />
            <span className="pts__eyebrow-txt">Ils nous soutiennent</span>
            <span className="pts__line pts__line--rev" />
          </div>

        </header>

        {/* ── Logos grille ── */}
        <ul className="pts__grid" role="list" aria-label="Nos partenaires">
          {PARTENAIRES.map((p) => (
            <li key={p.nom} className="pts__item" role="listitem">
              <a
                href={p.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="pts__logo-wrap"
                aria-label={`Partenaire : ${p.nom} (ouvre dans un nouvel onglet)`}
                title={p.nom}
              >
                <div className="pts__img-box">
                  <Image
                    src={p.logo}
                    alt={p.nom}
                    fill
                    sizes="160px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="pts__tooltip" aria-hidden="true">{p.nom}</span>
              </a>
            </li>
          ))}
        </ul>

      </div>

      <style>{`
        /* ════ Section ════════════════════════════════════════ */
        .pts {
          position: relative;
          background: #ffffff;
          border-top: 1px solid rgba(0,173,76,0.10);
          border-bottom: 1px solid rgba(0,173,76,0.10);
          overflow: hidden;
        }
        .pts__pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(0,173,76,0.025) 60px,
            rgba(0,173,76,0.025) 62px
          );
        }
        .pts__wrap {
          position: relative;
          z-index: 1;
          max-width: 100%;
          padding: 80px 2rem;
        }

        /* ════ Header ═════════════════════════════════════════ */
        .pts__header {
          text-align: center;
          margin-bottom: 56px;
        }
        .pts__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .pts__line {
          display: block;
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00AD4C);
        }
        .pts__line--rev {
          background: linear-gradient(90deg, #00AD4C, transparent);
        }
        .pts__eyebrow-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .pts__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(22px, 2.8vw, 38px);
          font-weight: 600;
          line-height: 1.12;
          color: #045627;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .pts__h2 em {
          font-style: italic;
          color: #00AD4C;
        }
        .pts__sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: #3a5040;
          max-width: 580px;
          margin: 0 auto;
        }

        /* ════ Grid logos ═════════════════════════════════════ */
        .pts__grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .pts__item {
          flex: 0 0 auto;
        }
        .pts__logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 72px;
          padding: 12px 16px;
          background: #f7fbf7;
          border: 1px solid rgba(0,173,76,0.12);
          border-radius: 8px;
          text-decoration: none;
          transition: border-color 0.28s ease, background 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease;
          filter: grayscale(0.6) opacity(0.75);
        }
        .pts__logo-wrap:hover {
          filter: grayscale(0) opacity(1);
          border-color: rgba(0,173,76,0.35);
          background: rgba(165,206,70,0.07);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,173,76,0.10);
        }
        .pts__img-box {
          position: relative;
          width: 100%;
          height: 44px;
        }
        .pts__tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #045627;
          color: #F5EDD6;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          padding: 5px 12px;
          border-radius: 3px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 10;
        }
        .pts__tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #045627;
        }
        .pts__logo-wrap:hover .pts__tooltip {
          opacity: 1;
        }

        /* ════ Footer ═════════════════════════════════════════ */
        .pts__foot {
          text-align: center;
          margin-top: 56px;
        }
        .pts__foot-text {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 15px;
          color: #3a5040;
          margin: 0 0 20px;
        }
        .pts__foot-btn {
          display: inline-block;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #045627;
          border: 1.5px solid #045627;
          padding: 14px 36px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .pts__foot-btn:hover {
          background: #045627;
          color: #F5EDD6;
        }

        /* ════ Responsive ═════════════════════════════════════ */
        @media (max-width: 768px) {
          .pts__wrap { padding: 64px 1rem; }
          .pts__logo-wrap { width: 130px; height: 60px; }
          .pts__grid { gap: 14px; }
        }
        @media (max-width: 480px) {
          .pts__logo-wrap { width: 110px; height: 52px; }
        }
      `}</style>
    </section>
  );
}
