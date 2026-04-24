"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Types ───────────────────────────────────────────────── */
type MediaType = "PHOTO" | "VIDÉO" | "ARTICLE" | "INFOGRAPHIE";

interface MediaItem {
  id: string;
  type: MediaType;
  titre: string;
  date: string;
  region: string;
  image: string;
  description: string;
  tags: string[];
  href: string;
}

/* ─── Données ─────────────────────────────────────────────── */
const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "m1",
    type: "PHOTO",
    titre: "Femmes gardiennes de semences paysannes",
    date: "2024",
    region: "Sénégal",
    image: "/images/actualites/femmes-africaines-gardiennes-semences.jpg",
    description:
      "Reportage au cœur des fermes de Niaguiss — femmes agricultrices, protectrices vivantes du patrimoine semencier.",
    tags: ["Souveraineté", "Semences", "Sénégal"],
    href: "/fr/ressources/galerie",
  },
  {
    id: "m2",
    type: "VIDÉO",
    titre: "Témoignage : Aïssatou, agroécologie en action",
    date: "2024",
    region: "Guinée-Bissau",
    image: "/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg",
    description:
      "Une agricultrice guinéenne témoigne de sa transformation après le camp de formation agroécologique CIFAP 2024.",
    tags: ["Formation", "Agroécologie", "Guinée-Bissau"],
    href: "/fr/mediatheque",
  },
  {
    id: "m3",
    type: "ARTICLE",
    titre: "Rapport NSS 2024 : 175 000 femmes engagées",
    date: "2024",
    region: "14 pays",
    image: "/images/actualites/organisations-femmes-rurales-nss.jpg",
    description:
      "Bilan annuel du réseau — formations, mobilisations, nouvelles organisations membres et impact territorial.",
    tags: ["Impact", "Réseau", "Rapport"],
    href: "/fr/ressources/actualites",
  },
  {
    id: "m4",
    type: "INFOGRAPHIE",
    titre: "La biodiversité agricole en Afrique de l'Ouest",
    date: "2024",
    region: "Afrique de l'Ouest",
    image: "/images/actualites/autonomisation-semenciere-souverainete-alimentaire-2023.jpg",
    description:
      "Chiffres clés sur la diversité des semences paysannes conservées par les membres du réseau NSS.",
    tags: ["Données", "Agriculture", "Biodiversité"],
    href: "/fr/ressources/actualites",
  },
  {
    id: "m5",
    type: "PHOTO",
    titre: "Atelier collectif — journée femme rurale",
    date: "2024",
    region: "Côte d'Ivoire",
    image: "/images/actualites/journee-femme-rurale-alimentation-2024.jpg",
    description:
      "Femmes rurales réunies pour l'alimentation saine et le plaidoyer sur leurs droits à la terre.",
    tags: ["Ateliers", "Droits", "Alimentation"],
    href: "/fr/ressources/galerie",
  },
  {
    id: "m6",
    type: "VIDÉO",
    titre: "Formation semences paysannes — Guinée 2024",
    date: "2024",
    region: "Guinée",
    image: "/images/galerie/formation-1.jpg",
    description:
      "Session de transmission des savoirs ancestraux sur la conservation et la sélection des semences paysannes.",
    tags: ["Formation", "Patrimoine", "Semences"],
    href: "/fr/mediatheque",
  },
];

const FILTRES: { label: string; value: MediaType | "TOUS" }[] = [
  { label: "Tous", value: "TOUS" },
  { label: "Photos", value: "PHOTO" },
  { label: "Vidéos", value: "VIDÉO" },
  { label: "Articles", value: "ARTICLE" },
  { label: "Infographies", value: "INFOGRAPHIE" },
];

/* ─── Icônes type ─────────────────────────────────────────── */
function TypeIcon({ type }: { type: MediaType }) {
  if (type === "VIDÉO")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5.14v14l11-7-11-7z" />
      </svg>
    );
  if (type === "ARTICLE")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    );
  if (type === "INFOGRAPHIE")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="18" y="3" width="4" height="18" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="2" y="13" width="4" height="8" rx="1" />
      </svg>
    );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

/* ─── Carte média ─────────────────────────────────────────── */
function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="mdc">
      <span className="mdc__bar" aria-hidden="true" />
      <Link href={item.href} className="mdc__img-wrap" aria-label={`Voir : ${item.titre}`}>
        <Image
          src={item.image}
          alt={item.titre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="mdc__img-overlay" aria-hidden="true" />
        <span
          className="mdc__type-badge"
          aria-label={`Type de contenu : ${item.type}`}
        >
          <TypeIcon type={item.type} />
          {item.type}
        </span>
      </Link>

      <div className="mdc__body">
        <p className="mdc__meta">
          <span>{item.region}</span>
          <span className="mdc__dot" aria-hidden="true">·</span>
          <span>{item.date}</span>
        </p>
        <h3 className="mdc__titre">
          <Link href={item.href}>{item.titre}</Link>
        </h3>
        <p className="mdc__desc">{item.description}</p>

        <div className="mdc__tags" role="list" aria-label="Tags thématiques">
          {item.tags.map((tag) => (
            <span key={tag} className="mdc__tag" role="listitem">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Section principale ─────────────────────────────────── */
export default function MediathequeSectionRedesign() {
  const [filtre, setFiltre] = useState<MediaType | "TOUS">("TOUS");
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const visibles =
    filtre === "TOUS" ? MEDIA_ITEMS : MEDIA_ITEMS.filter((m) => m.type === filtre);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );
    itemsRef.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [filtre]);

  return (
    <section className="mds" aria-labelledby="mds-heading">
      <div className="mds__pattern" aria-hidden="true" />

      <div className="mds__wrap">
        {/* ── Header ── */}
        <header className="mds__header">
          <div className="mds__eyebrow" role="presentation">
            <span className="mds__line" />
            <span className="mds__eyebrow-txt">Médiathèque</span>
            <span className="mds__line mds__line--rev" />
          </div>

          <h2 id="mds-heading" className="mds__h2">
            Le mouvement NSS{" "}
            <em>en images et en mots.</em>
          </h2>

          <p className="mds__sub">
            Photos, vidéos et témoignages de terrain — la vie du réseau NSS
            à travers 14&nbsp;pays d&apos;Afrique de l&apos;Ouest.
            Un patrimoine vivant de luttes et de savoirs.
          </p>
        </header>

        {/* ── Filtres ── */}
        <div
          className="mds__filters"
          role="tablist"
          aria-label="Filtrer par type de contenu"
        >
          {FILTRES.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filtre === f.value}
              className={`mds__filter${filtre === f.value ? " mds__filter--active" : ""}`}
              onClick={() => setFiltre(f.value)}
              aria-label={`Afficher : ${f.label}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Grille ── */}
        <ul className="mds__grid" role="list" aria-live="polite" aria-label="Contenus médiathèque">
          {visibles.map((item, i) => (
            <li
              key={item.id}
              className="mds__item"
              ref={(el) => { itemsRef.current[i] = el; }}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <MediaCard item={item} />
            </li>
          ))}
        </ul>

        {visibles.length === 0 && (
          <p className="mds__empty" role="status">
            Aucun contenu dans cette catégorie pour l&apos;instant.
          </p>
        )}

        {/* ── Footer CTA ── */}
        <div className="mds__foot">
          <Link
            href="/fr/mediatheque"
            className="mds__foot-btn"
            aria-label="Accéder à toute la médiathèque NSS"
          >
            Accéder à la médiathèque
          </Link>
        </div>
      </div>

      <style>{`
        /* ════ Section ════════════════════════════════════════ */
        .mds {
          position: relative;
          background: #F7FBF7;
          overflow: hidden;
        }
        .mds__pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(0,173,76,0.025) 40px,
              rgba(0,173,76,0.025) 42px
            );
        }
        .mds__wrap {
          position: relative;
          z-index: 1;
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 96px var(--container-pad, 24px);
        }

        /* ════ Header ═════════════════════════════════════════ */
        .mds__header {
          text-align: center;
          margin-bottom: 40px;
        }
        .mds__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 22px;
        }
        .mds__line {
          display: block;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00AD4C);
        }
        .mds__line--rev {
          background: linear-gradient(90deg, #00AD4C, transparent);
        }
        .mds__eyebrow-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .mds__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.1;
          color: #045627;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .mds__h2 em {
          font-style: italic;
          color: #00AD4C;
        }
        .mds__sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.75;
          color: #3a5040;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ════ Filtres ════════════════════════════════════════ */
        .mds__filters {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .mds__filter {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 2px;
          border: 1px solid rgba(4,86,39,0.22);
          background: transparent;
          color: #3a5040;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .mds__filter:hover {
          border-color: #00AD4C;
          color: #00AD4C;
        }
        .mds__filter--active {
          background: #00AD4C;
          color: #ffffff;
          border-color: #00AD4C;
        }

        /* ════ Grid ═══════════════════════════════════════════ */
        .mds__grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* ════ Animation reveal ═══════════════════════════════ */
        .mds__item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .mds__item[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ════ Card ═══════════════════════════════════════════ */
        .mdc {
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
        .mdc:hover {
          box-shadow: 0 16px 40px rgba(4,86,39,0.10);
          transform: translateY(-4px);
        }
        .mdc__bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #00AD4C;
          border-radius: 10px 0 0 10px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.28s ease;
          z-index: 3;
        }
        .mdc:hover .mdc__bar {
          transform: scaleY(1);
        }

        /* ── Image ── */
        .mdc__img-wrap {
          position: relative;
          display: block;
          height: 188px;
          overflow: hidden;
          background: #c8dfc8;
          flex-shrink: 0;
        }
        .mdc__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.38) 100%);
          z-index: 1;
          transition: opacity 0.28s ease;
        }
        .mdc:hover .mdc__img-overlay {
          opacity: 0.7;
        }
        .mdc__type-badge {
          position: absolute;
          bottom: 10px;
          left: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 5px;
          background: #045627;
          color: #F5EDD6;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }

        /* ── Body ── */
        .mdc__body {
          padding: 18px 18px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 8px;
        }
        .mdc__meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          color: #6a7a6a;
          margin: 0;
        }
        .mdc__dot { color: #b0bfb0; }
        .mdc__titre {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(16px, 1.6vw, 19px);
          font-weight: 600;
          line-height: 1.25;
          color: #045627;
          margin: 0;
        }
        .mdc__titre a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s ease;
        }
        .mdc__titre a:hover { color: #00AD4C; }
        .mdc__desc {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13.5px;
          line-height: 1.68;
          color: #3a5040;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mdc__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 2px;
        }
        .mdc__tag {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10.5px;
          font-weight: 500;
          color: #045627;
          background: rgba(165,206,70,0.18);
          padding: 2px 9px;
          border-radius: 2px;
        }

        /* ════ Empty state ════════════════════════════════════ */
        .mds__empty {
          text-align: center;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 15px;
          color: #6a7a6a;
          padding: 48px 0;
        }

        /* ════ Footer ═════════════════════════════════════════ */
        .mds__foot {
          text-align: center;
          margin-top: 52px;
        }
        .mds__foot-btn {
          display: inline-block;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
          padding: 14px 36px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease;
        }
        .mds__foot-btn:hover {
          background: #008f3e;
          border-color: #008f3e;
        }

        /* ════ Responsive ═════════════════════════════════════ */
        @media (max-width: 1024px) {
          .mds__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .mds__wrap { padding: 72px 20px; }
          .mds__grid { grid-template-columns: 1fr; }
          .mds__header { margin-bottom: 32px; }
        }
      `}</style>
    </section>
  );
}
