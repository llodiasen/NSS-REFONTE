"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/* ─── Types ───────────────────────────────────────────────── */
interface ProgramItem {
  num: string;
  titre: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

/* ─── Icônes SVG thématiques ─────────────────────────────── */
const IconSprout = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22V13" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M12 13C12 13 8 11 6 7c3.5-.8 6.5 1 6 6z" stroke="#1A3A2A" strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M12 13C12 13 16 11 18 7c-3.5-.8-6.5 1-6 6z" stroke="#1A3A2A" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
);

const IconSeed = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="11" rx="4.5" ry="7" stroke="#1A3A2A" strokeWidth="1.7" transform="rotate(-20 12 11)"/>
    <path d="M12 20V15" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M9 18c1-1 3-1 4 0" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const IconWave = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="6" r="2" stroke="#1A3A2A" strokeWidth="1.7"/>
    <path d="M12 8v4" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M8 13c1-2 2-3 4-3s3 1 4 3" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M5 17c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const IconHand = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v7M9 5v5M6 7v3a6 6 0 0 0 6 6 6 6 0 0 0 6-6V7" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 5v5" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M12 16v3" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M9 19h6" stroke="#1A3A2A" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

/* ─── Données ─────────────────────────────────────────────── */
const PROGRAMMES: ProgramItem[] = [
  {
    num: "01",
    titre: "Agroécologie Paysanne",
    description:
      "Transmettre les savoirs agroécologiques via des camps annuels de formation réunissant des agricultrices de 6 pays.",
    href: "/fr/programmes/agroecologie",
    icon: <IconSprout />,
  },
  {
    num: "02",
    titre: "Semences & Biodiversité",
    description:
      "Préserver les semences paysannes comme patrimoine vivant et levier de souveraineté alimentaire en Afrique de l'Ouest.",
    href: "/fr/programmes/semences",
    icon: <IconSeed />,
  },
  {
    num: "03",
    titre: "Voix des Femmes Rurales",
    description:
      "Renforcer le plaidoyer et la communication des femmes rurales via des radios communautaires en langues locales.",
    href: "/fr/programmes/voix",
    icon: <IconWave />,
  },
  {
    num: "04",
    titre: "Droits & Leadership",
    description:
      "Accompagner les femmes rurales dans la prise de décision économique, foncière et politique au sein de leurs communautés.",
    href: "/fr/programmes/leadership",
    icon: <IconHand />,
  },
];

/* ─── Composant principal ─────────────────────────────────── */
export default function ProgramsSection() {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("prog-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -32px 0px" }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="prog-section" aria-labelledby="prog-heading">
      {/* Motif géométrique africain en fond — opacité 0.04 */}
      <div className="prog-pattern" aria-hidden="true" />

      <div className="prog-wrap">
        {/* ── Header ── */}
        <header className="prog-header">
          {/* Eyebrow kente — cohérent avec ActionsSection */}
          <div className="prog-eyebrow" role="presentation">
            <span className="prog-line" />
            <span className="prog-eyebrow-text">Nos axes d&apos;action</span>
            <span className="prog-line" />
          </div>

          <h2 id="prog-heading" className="prog-h2">
            Des programmes nés du terrain,<br />
            <em>portés par les femmes.</em>
          </h2>

          <p className="prog-sub">
            175&nbsp;000 membres, 7 pays, des dizaines de programmes actifs.
            Le réseau NSS transforme les savoirs des femmes rurales
            en leviers de changement durable.
          </p>
        </header>

        {/* ── Grille ── */}
        <ul className="prog-grid" role="list">
          {PROGRAMMES.map(({ num, titre, description, href, icon }, i) => (
            <li
              key={num}
              className="prog-card"
              ref={(el) => { itemsRef.current[i] = el; }}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="prog-card-in">
                {/* Bordure gauche animée au hover */}
                <span className="prog-card-bar" aria-hidden="true" />

                {/* Icône + numéro */}
                <div className="prog-card-top">
                  <div className="prog-icon">{icon}</div>
                  <span className="prog-num" aria-hidden="true">{num}</span>
                </div>

                {/* Texte */}
                <h3 className="prog-card-h3">{titre}</h3>
                <p className="prog-card-desc">{description}</p>

                {/* Lien */}
                <Link
                  href={href}
                  className="prog-card-lnk"
                  aria-label={`En savoir plus sur ${titre}`}
                >
                  En savoir plus →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Bas de section ── */}
        <div className="prog-foot">
          <Link href="/fr/programmes" className="prog-cta">
            Tous nos programmes
          </Link>
        </div>
      </div>

      <style>{`
        .prog-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        /* Motif adinkra/géométrique subtil */
        .prog-pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg,   transparent, transparent 38px, rgba(26,58,42,0.03) 38px, rgba(26,58,42,0.03) 39px),
            repeating-linear-gradient(90deg,  transparent, transparent 38px, rgba(26,58,42,0.03) 38px, rgba(26,58,42,0.03) 39px);
          pointer-events: none;
          z-index: 0;
        }
        .prog-wrap {
          position: relative;
          z-index: 1;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 96px var(--container-pad);
        }
        /* ── Header ── */
        .prog-header { text-align: center; margin-bottom: 64px; }
        .prog-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .prog-line {
          display: block;
          width: 40px;
          height: 1px;
          background: #C4622D;
        }
        .prog-eyebrow-text {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C4622D;
        }
        .prog-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(30px, 4vw, 54px);
          font-weight: 500;
          line-height: 1.10;
          color: #1A3A2A;
          margin: 0 0 20px;
        }
        .prog-h2 em { font-style: italic; color: #C4622D; }
        .prog-sub {
          font-size: 16px;
          line-height: 1.75;
          color: #6a6a5a;
          max-width: 600px;
          margin: 0 auto;
        }
        /* ── Grille ── */
        .prog-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        /* ── Animation scroll ── */
        .prog-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .prog-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        /* ── Card ── */
        .prog-card-in {
          position: relative;
          background: #F5EDD6;
          border-radius: 8px;
          padding: 28px 24px 22px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .prog-card-in:hover {
          box-shadow: 0 14px 44px rgba(26,58,42,0.11);
          transform: translateY(-4px);
        }
        /* Bordure gauche terracotta au hover */
        .prog-card-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #C4622D;
          border-radius: 8px 0 0 8px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.28s ease;
        }
        .prog-card-in:hover .prog-card-bar { transform: scaleY(1); }
        /* Ligne icon / numéro */
        .prog-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .prog-icon {
          width: 48px;
          height: 48px;
          background: rgba(26,58,42,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prog-num {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 40px;
          font-weight: 600;
          color: #E8A838;
          line-height: 1;
          opacity: 0.80;
        }
        .prog-card-h3 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(18px, 1.8vw, 22px);
          font-weight: 600;
          color: #1A3A2A;
          line-height: 1.20;
          margin: 0 0 12px;
        }
        .prog-card-desc {
          font-size: 14px;
          line-height: 1.72;
          color: #4a4a3a;
          margin: 0 0 20px;
          flex: 1;
        }
        .prog-card-lnk {
          font-size: 12px;
          font-weight: 600;
          color: #C4622D;
          text-decoration: none;
          letter-spacing: 0.04em;
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .prog-card-lnk:hover { color: #9e4b22; }
        /* ── Footer ── */
        .prog-foot { text-align: center; margin-top: 52px; }
        .prog-cta {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1A3A2A;
          border: 1.5px solid #1A3A2A;
          padding: 13px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .prog-cta:hover { background: #1A3A2A; color: #ffffff; }
        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .prog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .prog-wrap { padding: 72px 24px; }
          .prog-grid { grid-template-columns: 1fr; }
          .prog-h2 { font-size: clamp(26px, 7vw, 40px); }
        }
      `}</style>
    </section>
  );
}
