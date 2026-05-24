"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ─── Types ───────────────────────────────────────────────── */
interface Evenement {
  id: string;
  type: "FORMATION" | "ATELIER";
  statut: "avenir" | "passe";
  titre: string;
  date: string;
  lieu: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

/* ─── Données ─────────────────────────────────────────────── */
const EVENEMENTS: Evenement[] = [
  {
    id: "e1",
    type: "FORMATION",
    statut: "avenir",
    titre: "Camp international de formation sur l'Agroécologie Paysanne",
    date: "14–21 juin 2025",
    lieu: "Dakar, Sénégal",
    description:
      "Formation dans les fermes agricoles de base pour protéger les systèmes de production agroécologiques.",
    tags: ["5 pays", "Souveraineté familiale", "1 semaine"],
    image: "/images/actualites/cifap-2024.jpg",
    href: "/fr/programmes/cifap",
  },
  {
    id: "e2",
    type: "ATELIER",
    statut: "passe",
    titre: "Voix des femmes rurales — santé, alimentation et droits",
    date: "18 oct. 2024",
    lieu: "Abidjan, Côte d'Ivoire",
    description:
      "Donner des outils de communication et de plaidoyer adaptés aux femmes rurales sur l'alimentation, la santé et leurs droits.",
    tags: ["Droits", "Santé", "1 journée"],
    image: "/images/galerie/leader-1.jpg",
    href: "/fr/evenements",
  },
  {
    id: "e3",
    type: "FORMATION",
    statut: "passe",
    titre: "Semences paysannes et biodiversité agricole en Afrique de l'Ouest",
    date: "5 mars 2024",
    lieu: "Conakry, Guinée",
    description:
      "Préserver et valoriser les semences paysannes comme patrimoine collectif et levier de souveraineté alimentaire.",
    tags: ["Semences", "Biodiversité", "2 jours"],
    image: "/images/galerie/formation-1.jpg",
    href: "/fr/evenements",
  },
];

/* ─── Icônes ──────────────────────────────────────────────── */
function IconCal() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="9" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

/* ─── Badge couleurs selon type ───────────────────────────── */
const TYPE_CONFIG: Record<Evenement["type"], { bg: string; color: string }> = {
  FORMATION: { bg: "#045627", color: "#F5EDD6" },
  ATELIER:   { bg: "#00AD4C", color: "#ffffff" },
};

/* ─── Carte événement ────────────────────────────────────── */
function EvCard({ ev }: { ev: Evenement }) {
  const avenir = ev.statut === "avenir";
  const typeCfg = TYPE_CONFIG[ev.type];

  return (
    <article className={`evc${avenir ? " evc--featured" : ""}`}>

      {/* Image */}
      <div className="evc__img">
        <Image
          src={ev.image}
          alt={ev.titre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />

        {/* Badge type */}
        <span
          className="evc__badge-type"
          style={{ background: typeCfg.bg, color: typeCfg.color }}
          aria-label={`Type : ${ev.type}`}
        >
          {ev.type}
        </span>

        {/* Badge statut */}
        <span
          className={`evc__badge-statut${avenir ? " evc__badge-statut--avenir" : " evc__badge-statut--passe"}`}
          aria-label={`Statut : ${avenir ? "À venir" : "Passé"}`}
        >
          {avenir ? "À venir" : "Passé"}
        </span>
      </div>

      {/* Corps */}
      <div className="evc__body">
        <div className="evc__meta">
          <span className="evc__meta-item">
            <IconCal />
            {ev.date}
          </span>
          <span className="evc__dot" aria-hidden="true">·</span>
          <span className="evc__meta-item">
            <IconPin />
            {ev.lieu}
          </span>
        </div>

        <h3 className="evc__titre">
          <Link href={ev.href}>{ev.titre}</Link>
        </h3>
        <p className="evc__desc">{ev.description}</p>

        <div className="evc__tags" role="list" aria-label="Thématiques">
          {ev.tags.map((tag) => (
            <span key={tag} className="evc__tag" role="listitem">
              {tag}
            </span>
          ))}
        </div>

        <div className="evc__sep" aria-hidden="true" />

        <Link
          href={ev.href}
          className={`evc__cta${avenir ? " evc__cta--primary" : " evc__cta--ghost"}`}
          aria-label={
            avenir
              ? `En savoir plus sur ${ev.titre}`
              : `Voir le compte-rendu de ${ev.titre}`
          }
        >
          {avenir ? "En savoir plus →" : "Voir le compte-rendu →"}
        </Link>
      </div>
    </article>
  );
}

/* ─── Section principale ─────────────────────────────────── */
export default function EventsSectionRedesign() {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    itemsRef.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="evs" aria-labelledby="evs-heading">

      <div className="evs__wrap">
        {/* ── Header ── */}
        <header className="evs__header">
          <div className="evs__eyebrow" role="presentation">
            <span className="evs__line" />
            <span className="evs__eyebrow-txt">Nos Programmes</span>
            <span className="evs__line evs__line--rev" />
          </div>

          <h2 id="evs-heading" className="evs__h2">
            Des formations au cœur{" "}
            <em>de la souveraineté alimentaire.</em>
          </h2>

          <p className="evs__sub">
            Depuis 2011, NSS organise camps, ateliers et rencontres pour renforcer
            les capacités des femmes rurales — de la semence à la gouvernance
            alimentaire, dans 14&nbsp;pays d&apos;Afrique de l&apos;Ouest.
          </p>
        </header>

        {/* ── Grille ── */}
        <ul className="evs__grid" role="list">
          {EVENEMENTS.map((ev, i) => (
            <li
              key={ev.id}
              className="evs__item"
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <EvCard ev={ev} />
            </li>
          ))}
        </ul>

        {/* ── Footer CTA ── */}
        <div className="evs__foot">
          <Link
            href="/fr/evenements"
            className="evs__foot-btn"
            aria-label="Voir tous nos événements passés et à venir"
          >
            Voir tous les événements
          </Link>
        </div>
      </div>

      <style>{`
        /* ════ Section ════════════════════════════════════════ */
        .evs {
          position: relative;
          background: #F7FBF7;
          overflow: hidden;
        }
        .evs__wrap {
          position: relative;
          z-index: 1;
          max-width: 100%;
          padding: 96px 2rem;
        }

        /* ════ Header ═════════════════════════════════════════ */
        .evs__header {
          text-align: center;
          margin-bottom: 64px;
        }
        .evs__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .evs__line {
          display: block;
          width: 44px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00AD4C);
        }
        .evs__line--rev {
          background: linear-gradient(90deg, #00AD4C, transparent);
        }
        .evs__eyebrow-txt {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .evs__h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(22px, 2.8vw, 38px);
          font-weight: 600;
          line-height: 1.1;
          color: #045627;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .evs__h2 em {
          font-style: italic;
          color: #00AD4C;
        }
        .evs__sub {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 1.75;
          color: #3a5040;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ════ Grid ═══════════════════════════════════════════ */
        .evs__grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        /* ════ Animation reveal ═══════════════════════════════ */
        .evs__item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .evs__item[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ════ Card ═══════════════════════════════════════════ */
        .evc {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: box-shadow 0.28s ease, transform 0.28s ease;
        }
        .evc:hover {
          box-shadow: 0 18px 48px rgba(4,86,39,0.11);
          transform: translateY(-4px);
        }

        /* Card "À venir" */
        .evc--featured {
          box-shadow: 0 4px 24px rgba(0,173,76,0.08);
        }

        /* ── Image ── */
        .evc__img {
          position: relative;
          height: 200px;
          flex-shrink: 0;
          overflow: hidden;
          background: #c8dfc8;
        }
        .evc__badge-type {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .evc__badge-statut {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .evc__badge-statut--avenir {
          background: #00AD4C;
          color: #ffffff;
        }
        .evc__badge-statut--passe {
          background: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.82);
          border: 0.5px solid rgba(255,255,255,0.28);
        }

        /* ── Body ── */
        .evc__body {
          padding: 22px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .evc__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px 10px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          color: #6a7a6a;
        }
        .evc__meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .evc__dot {
          color: #b0bfb0;
          line-height: 1;
        }
        .evc__titre {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 600;
          line-height: 1.25;
          color: #045627;
          margin: 0;
        }
        .evc__titre a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s ease;
        }
        .evc__titre a:hover { color: #00AD4C; }
        .evc__desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14.5px;
          line-height: 1.70;
          color: #3a5040;
          text-align: justify;
          margin: 0;
          flex: 1;
        }
        .evc__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .evc__tag {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          color: #045627;
          background: rgba(165,206,70,0.18);
          padding: 3px 10px;
          border-radius: 2px;
          letter-spacing: 0.01em;
        }
        .evc__sep {
          height: 1px;
          background: rgba(0,0,0,0.07);
          margin: 2px 0;
        }
        .evc__cta {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          padding: 9px 16px;
          border-radius: 2px;
          display: inline-block;
          align-self: flex-start;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .evc__cta--primary {
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
        }
        .evc__cta--primary:hover {
          background: #008f3e;
          border-color: #008f3e;
        }
        .evc__cta--ghost {
          background: transparent;
          color: #045627;
          border: 1px solid rgba(4,86,39,0.30);
        }
        .evc__cta--ghost:hover {
          background: #045627;
          color: #F5EDD6;
          border-color: #045627;
        }

        /* ════ Footer ═════════════════════════════════════════ */
        .evs__foot {
          text-align: center;
          margin-top: 56px;
        }
        .evs__foot-btn {
          display: inline-block;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
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
        .evs__foot-btn:hover {
          background: #045627;
          color: #F5EDD6;
        }

        /* ════ Responsive ═════════════════════════════════════ */
        @media (max-width: 1024px) {
          .evs__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .evs__wrap { padding: 72px 1rem; }
          .evs__grid { grid-template-columns: 1fr; }
          .evs__header { margin-bottom: 44px; }
        }
      `}</style>
    </section>
  );
}
