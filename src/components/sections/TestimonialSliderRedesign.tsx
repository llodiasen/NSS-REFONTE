"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── palette ─────────────────────────────────────────────────────────────── */
const GOLD     = "#C9A227";
const GREEN_VIF= "#2d9a6a";
const GREEN_LT = "#4db882";
const BORDER   = "#045627";
const BG       = "#ffffff";
const DARK     = "#071A10";

/* ── data ────────────────────────────────────────────────────────────────── */
type Leader = { nom: string; role: string; orga: string; location: string; caption: string; photo: string; href: string };

const LEADERS: Leader[] = [
  {
    nom: "Mariama Sonko",
    role: "Présidente",
    orga: "NSS",
    location: "Sénégal",
    caption: "Fondatrice et présidente depuis 2011, elle porte la voix des 175 000 membres de NSS sur la scène internationale de la souveraineté alimentaire.",
    photo: "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Esther Y. Boake",
    role: "CA Ghana",
    orga: "ABOFAB",
    location: "Ghana",
    caption: "Déléguée de l'ABOFAB, elle représente les organisations paysannes ghanéennes au sein du Conseil d'Administration de NSS.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Sia A.M. Kamano",
    role: "CA Guinée",
    orga: "AGUISSA",
    location: "Guinée",
    caption: "Représentante de l'AGUISSA, elle œuvre pour l'autonomie des femmes paysannes guinéennes à travers l'agroécologie.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Yah Diakité",
    role: "CA Mali",
    orga: "AMASSA",
    location: "Mali",
    caption: "Pilier de l'AMASSA, elle engage les femmes rurales maliennes dans la préservation des semences paysannes et la biodiversité.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Cadia Fernandes",
    role: "CA Guinée-Bissau",
    orga: "KAFO",
    location: "Guinée-Bissau",
    caption: "Représentante de KAFO, elle défend la vision NSS en Guinée-Bissau et milite pour le rôle central des femmes dans les systèmes alimentaires.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Catherine Soulama",
    role: "CA Burkina Faso",
    orga: "FENOP",
    location: "Burkina Faso",
    caption: "Déléguée de la FENOP, elle coordonne les actions du mouvement au Burkina Faso et incarne l'engagement collectif des femmes rurales burkinabè.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Fanta Diamoutene",
    role: "CA Mali",
    orga: "AOPP",
    location: "Mali",
    caption: "Membre active de l'AOPP, elle mobilise les organisations paysannes autour des valeurs fondatrices de NSS et de la souveraineté alimentaire.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg",
    href: "/fr/mouvement/associations",
  },
  {
    nom: "Fatou B. Diop",
    role: "CA Sénégal",
    orga: "UGPM",
    location: "Sénégal",
    caption: "Porte-voix de l'UGPM, elle contribue à l'expansion du réseau NSS et à la promotion des droits des productrices rurales du Sénégal.",
    photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg",
    href: "/fr/mouvement/associations",
  },
];

const CPP   = 4; // cards per page
const PAGES = Math.ceil(LEADERS.length / CPP);

/* ── card ────────────────────────────────────────────────────────────────── */
function LeaderCard({ l }: { l: Leader }) {
  return (
    <article className="tsl-card">
      <div className="tsl-card-img">
        <Image src={l.photo} alt={l.nom} fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        <div className="tsl-grad" />
        <div className="tsl-body">
          <p className="tsl-name">{l.nom}</p>
          <p className="tsl-role">
            {l.role}&nbsp;<span className="tsl-orga">· {l.orga}</span>
          </p>
          <p className="tsl-loc"><span className="tsl-dot" />{l.location}</p>
          <Link href={l.href} className="tsl-cta">En savoir plus →</Link>
        </div>
      </div>
    </article>
  );
}

/* ── main ────────────────────────────────────────────────────────────────── */
export default function TestimonialSliderRedesign() {
  const [page, setPage]     = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => setPage(((n % PAGES) + PAGES) % PAGES), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setPage(p => (p + 1) % PAGES), 7000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="tsl-section" aria-label="Nos leaders"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>

      {/* Header */}
      <div className="tsl-header">
        <p className="tsl-eyebrow">
          <span className="tsl-eline" />Nos Leaders<span className="tsl-eline" />
        </p>
        <h2 className="tsl-h2">Les voix qui portent <em className="tsl-h2-em">le mouvement.</em></h2>
        <p className="tsl-sub">175&nbsp;000 membres · 12 pays · 500+ associations de femmes rurales</p>
      </div>

      {/* Viewport */}
      <div className="tsl-viewport">
        <div className="tsl-track" style={{ transform: `translateX(-${page * 100}%)` }}>
          {Array.from({ length: PAGES }).map((_, pi) => (
            <div key={pi} className="tsl-slide">
              <div className="tsl-grid">
                {LEADERS.slice(pi * CPP, (pi + 1) * CPP).map(l => (
                  <LeaderCard key={l.nom} l={l} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="tsl-nav">
        <button className="tsl-arrow" onClick={() => go(page - 1)} aria-label="Précédent">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="tsl-dots" role="tablist">
          {Array.from({ length: PAGES }).map((_, i) => (
            <button key={i} role="tab" aria-selected={i === page} aria-label={`Page ${i + 1}`}
              className={`tsl-dot-btn${i === page ? " tsl-dot-btn--on" : ""}`}
              onClick={() => go(i)} />
          ))}
        </div>
        <button className="tsl-arrow" onClick={() => go(page + 1)} aria-label="Suivant">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Global CTA */}
      <div className="tsl-cta-wrap">
        <Link href="/fr/mouvement/associations" className="tsl-cta-btn">
          Voir toutes les associations →
        </Link>
      </div>

      <style suppressHydrationWarning>{`
        .tsl-section { background:#FAF6EE; padding:100px 0 80px; overflow:hidden; }

        /* Header */
        .tsl-header { text-align:center; padding:0 2rem; margin-bottom:48px; }
        .tsl-eyebrow {
          display:flex; align-items:center; justify-content:center; gap:14px;
          font-family:var(--font-body); font-size:11px; font-weight:700;
          text-transform:uppercase; letter-spacing:1.5px; color:#A5CE46; margin:0 0 18px;
        }
        .tsl-eline { display:block; width:28px; height:1px; background:rgba(165,206,70,0.5); flex-shrink:0; }
        .tsl-h2 {
          font-family:var(--font-display); font-size:clamp(24px,3vw,38px);
          font-weight:600; color:#1a1a1a; margin:0 0 10px; line-height:1.15;
        }
        .tsl-h2-em { font-style:italic; font-weight:600; color:#A5CE46; }
        .tsl-sub { font-family:var(--font-body); font-size:13px; color:#7a7a7a; margin:0; }

        /* Slider */
        .tsl-viewport { width:100%; overflow:hidden; }
        .tsl-track { display:flex; transition:transform .65s cubic-bezier(.4,0,.2,1); will-change:transform; }
        .tsl-slide { min-width:100%; padding:0 2rem; box-sizing:border-box; }
        .tsl-grid {
          display:grid; grid-template-columns:repeat(4,1fr); gap:20px;
        }

        /* Card */
        .tsl-card {
          border:2px solid ${BORDER}; border-radius:4px; overflow:hidden;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .tsl-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(4,86,39,.20); }
        .tsl-card-img { position:relative; aspect-ratio:2/3; overflow:hidden; }
        .tsl-card:hover .tsl-card-img > img { transform:scale(1.04); }
        .tsl-card-img > img { transition:transform .6s ease !important; }

        /* Gradient overlay */
        .tsl-grad {
          position:absolute; inset:0;
          background:linear-gradient(to top,
            rgba(4,12,8,.97) 0%,
            rgba(4,12,8,.88) 30%,
            rgba(4,12,8,.42) 56%,
            transparent 78%
          );
          pointer-events:none;
        }

        /* Card content */
        .tsl-body {
          position:absolute; bottom:0; left:0; right:0;
          padding:20px 16px 18px;
          display:flex; flex-direction:column; gap:4px;
        }
        .tsl-name {
          font-family:var(--font-display); font-size:16px; font-weight:400;
          color:#fff; margin:0; line-height:1.2;
        }
        .tsl-role {
          font-family:var(--font-body); font-size:10px; font-weight:700;
          text-transform:uppercase; letter-spacing:1.2px; color:#ffffff; margin:0;
        }
        .tsl-orga { font-weight:400; letter-spacing:0; }
        .tsl-loc {
          display:flex; align-items:center; gap:6px;
          font-family:var(--font-body); font-size:11px; color:${GREEN_LT}; margin:0 0 7px;
        }
        .tsl-dot {
          width:5px; height:5px; border-radius:50%;
          background:${GREEN_LT}; flex-shrink:0;
        }
        .tsl-caption {
          font-family:var(--font-display); font-style:italic; font-size:11.5px;
          color:#ffffff; line-height:1.65; margin:0 0 10px;
          display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
        }
        .tsl-cta {
          font-family:var(--font-body); font-size:10px; font-weight:700;
          text-transform:uppercase; letter-spacing:1.5px; color:${GREEN_LT};
          text-decoration:none; transition:color .2s; width:fit-content;
        }
        .tsl-cta:hover { color:#fff; }

        /* Navigation */
        .tsl-nav {
          display:flex; align-items:center; justify-content:center;
          gap:24px; margin-top:36px; padding:0 2rem;
        }
        .tsl-arrow {
          width:44px; height:44px; border-radius:50%;
          border:2px solid ${GREEN_VIF}; background:transparent; color:${GREEN_VIF};
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background .2s, color .2s;
          flex-shrink:0;
        }
        .tsl-arrow:hover { background:${GREEN_VIF}; color:#fff; }
        .tsl-dots { display:flex; gap:8px; align-items:center; }
        .tsl-dot-btn {
          width:9px; height:9px; border-radius:50%;
          border:2px solid #bbb; background:transparent;
          cursor:pointer; padding:0;
          transition:background .25s, border-color .25s, transform .25s;
        }
        .tsl-dot-btn--on { background:${GOLD}; border-color:${GOLD}; transform:scale(1.3); }

        /* Global CTA */
        .tsl-cta-wrap {
          display:flex; justify-content:center; margin-top:32px; padding:0 2rem;
        }
        .tsl-cta-btn {
          font-family:var(--font-body); font-size:13px; font-weight:700;
          text-decoration:none; color:#ffffff;
          background:#00AD4C; padding:12px 32px; border-radius:8px;
          transition:filter .2s, transform .15s;
          display:inline-flex; align-items:center; gap:6px;
        }
        .tsl-cta-btn:hover { filter:brightness(1.1); transform:translateY(-2px); }

        /* Responsive */
        @media (max-width:1024px) { .tsl-grid { grid-template-columns:repeat(3,1fr); } }
        @media (max-width:768px) {
          .tsl-grid { grid-template-columns:repeat(2,1fr); }
          .tsl-slide { padding:0 1rem; }
          .tsl-section { padding:72px 0 60px; }
        }
        @media (max-width:480px) {
          .tsl-grid { grid-template-columns:1fr 1fr; gap:12px; }
          .tsl-header,.tsl-nav { padding:0 1rem; }
        }
      `}</style>
    </section>
  );
}
