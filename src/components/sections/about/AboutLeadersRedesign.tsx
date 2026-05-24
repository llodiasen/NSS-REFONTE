"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const FEATURED = {
  nom:          "Mariama Sonko",
  role:         "Présidente",
  organisation: "AJAC — Sénégal",
  citation:
    "Avec leurs bras et leurs valeurs, les femmes rurales sont aptes à nourrir le monde. Il suffit de leur donner les moyens d'agir.",
  photo:
    "https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg",
};

const LEADERS = [
  { nom: "Esther Y. Boake",    organisation: "ABOFAB",   pays: "Ghana",         photo: "https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg" },
  { nom: "Sia A. M. Kamano",   organisation: "AGUISSA",  pays: "Guinée",        photo: "https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg" },
  { nom: "Yah Diakité",        organisation: "AMASSA",   pays: "Mali",          photo: "https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg" },
  { nom: "Cadia Fernandes",    organisation: "KAFO",     pays: "Guinée-Bissau", photo: "https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg" },
  { nom: "Catherie Soulama",   organisation: "FENOP",    pays: "Burkina Faso",  photo: "https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg" },
  { nom: "Fanta Diamoutene",   organisation: "AOPP",     pays: "Mali",          photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg" },
  { nom: "Fanta Condé",        organisation: "AGACFEM",  pays: "Guinée",        photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Conde-AGACFEM-1.jpg" },
  { nom: "Fatou B. Diop",      organisation: "UGPM",     pays: "Sénégal",       photo: "https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg" },
];

const CARD_W   = 280;
const CARD_GAP = 16;
const SNAP_W   = CARD_W + CARD_GAP;
const TOTAL    = LEADERS.length + 1; /* hero + coordinatrices */

export default function AboutLeadersRedesign() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  /* ── Scroll fade-in ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("al--vis"); io.disconnect(); } },
      { threshold: 0.07 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── Sync dots avec scroll ── */
  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const heroSnapEnd = el.clientWidth + CARD_GAP;
    const s = el.scrollLeft;
    if (s < heroSnapEnd / 2) {
      setActiveIdx(0);
    } else {
      const idx = 1 + Math.round((s - heroSnapEnd) / SNAP_W);
      setActiveIdx(Math.max(1, Math.min(idx, TOTAL - 1)));
    }
  }, []);

  /* ── Navigation arrows ── */
  const scrollToCard = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const clamped   = Math.max(0, Math.min(idx, TOTAL - 1));
    const heroSnapW = el.clientWidth + CARD_GAP;
    const left = clamped === 0 ? 0 : heroSnapW + SNAP_W * (clamped - 1);
    el.scrollTo({ left, behavior: "smooth" });
    setActiveIdx(clamped);
  };

  return (
    <section className="al" ref={sectionRef} aria-labelledby="al-heading">
      <div className="al__wrap">

        {/* ── Header ── */}
        <header className="al__hd">
          <div className="al__eyebrow" role="presentation">
            <span className="al__ey-line" aria-hidden="true" />
            <span className="al__ey-txt">Nos leaders</span>
          </div>
          <h2 id="al-heading" className="al__h2">
            Elles portent <em>le mouvement.</em>
          </h2>
        </header>

        {/* ── Carousel ── */}
        <div className="al__car-outer">

          {/* Arrow gauche */}
          <button
            className="al__arrow al__arrow--prev"
            onClick={() => scrollToCard(activeIdx - 1)}
            aria-label="Diapositive précédente"
            disabled={activeIdx === 0}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Track */}
          <div
            className="al__car"
            ref={carouselRef}
            onScroll={handleScroll}
            role="list"
            aria-label="Leaders NSS"
          >

            {/* ── Slide 0 : Hero Mariama ── */}
            <article
              className="al__hero"
              role="listitem"
              aria-label={`${FEATURED.nom} — ${FEATURED.role}`}
            >
              <div className="al__hero-img">
                <Image
                  src={FEATURED.photo}
                  alt={`${FEATURED.nom} — ${FEATURED.role}, NSS`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              <div className="al__hero-body">
                <span className="al__hero-role">{FEATURED.role.toUpperCase()}</span>
                <h3 className="al__hero-nom">{FEATURED.nom}</h3>
                <p className="al__hero-org">{FEATURED.organisation}</p>
                <blockquote className="al__hero-quote">
                  <p>&#171; {FEATURED.citation} &#187;</p>
                </blockquote>
                <Link href="/fr/mouvement/associations" className="al__hero-link">
                  En savoir plus →
                </Link>
              </div>
            </article>

            {/* ── Slides 1-N : Coordinatrices ── */}
            {LEADERS.map((l) => (
              <article key={l.nom} className="al__card" role="listitem">
                <div className="al__card-img">
                  <Image
                    src={l.photo}
                    alt={`${l.nom} — ${l.organisation}`}
                    fill
                    sizes="280px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  <span className="al__card-ov" aria-hidden="true" />
                </div>
                <div className="al__card-info" aria-label={l.nom}>
                  <strong className="al__card-nom">{l.nom}</strong>
                  <span className="al__card-org">{l.organisation}</span>
                  <span className="al__card-pays">{l.pays}</span>
                  <Link
                    href="/fr/mouvement/associations"
                    className="al__card-link"
                    aria-label={`En savoir plus sur ${l.nom}`}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </article>
            ))}

          </div>

          {/* Arrow droite */}
          <button
            className="al__arrow al__arrow--next"
            onClick={() => scrollToCard(activeIdx + 1)}
            aria-label="Diapositive suivante"
            disabled={activeIdx === TOTAL - 1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="al__dots" role="tablist" aria-label="Navigation carousel">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={i === 0 ? `Aller à ${FEATURED.nom}` : `Aller à ${LEADERS[i - 1].nom}`}
              className={`al__dot${i === activeIdx ? " al__dot--active" : ""}`}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="al__cta">
          <Link href="/fr/mouvement/associations" className="al__cta-link">
            Voir toutes les associations membres →
          </Link>
        </div>

      </div>

      <style>{`
        /* ══ SECTION ════════════════════════════════════════════════ */
        .al {
          background: #fff;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .al--vis { opacity: 1; transform: translateY(0); }

        .al__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 40px 80px;
        }

        /* ══ HEADER ═════════════════════════════════════════════════ */
        .al__hd { margin-bottom: 48px; }
        .al__eyebrow {
          display: flex; align-items: center;
          gap: 12px; margin-bottom: 16px;
        }
        .al__ey-line {
          display: block; width: 28px; height: 2px;
          background: #00AD4C; flex-shrink: 0;
        }
        .al__ey-txt {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: #00AD4C;
        }
        .al__h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 500; line-height: 1.1;
          color: #0a1f10; margin: 0;
        }
        .al__h2 em { font-style: italic; color: #00AD4C; }

        /* ══ CAROUSEL WRAPPER ═══════════════════════════════════════ */
        .al__car-outer {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 20px;
        }

        /* ── Arrows ── */
        .al__arrow {
          flex-shrink: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.1);
          color: #0a1f10;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.3s ease, border-color 0.3s ease,
                      box-shadow 0.3s ease, color 0.3s ease;
          z-index: 2;
        }
        .al__arrow:hover:not(:disabled) {
          background: #00AD4C; border-color: #00AD4C; color: #fff;
          box-shadow: 0 4px 16px rgba(0,173,76,0.28);
        }
        .al__arrow:disabled { opacity: 0.3; cursor: default; }
        .al__arrow--prev { margin-right: 12px; }
        .al__arrow--next { margin-left: 12px; }

        /* ── Track ── */
        .al__car {
          flex: 1;
          display: flex;
          gap: ${CARD_GAP}px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }
        .al__car::-webkit-scrollbar { display: none; }

        /* ══ HERO CARD — Slide 0 ════════════════════════════════════ */
        .al__hero {
          flex-shrink: 0;
          width: 100%;
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 320px 1fr;
          background: linear-gradient(135deg, #045627 0%, #1a5a3a 100%);
          min-height: 360px;
        }
        .al__hero-img {
          position: relative;
          width: 100%;
          min-height: 320px;
        }
        .al__hero-body {
          padding: 44px 48px;
          display: flex; flex-direction: column;
          justify-content: center;
        }
        .al__hero-role {
          display: inline-block;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.32em;
          color: #E8A838; margin-bottom: 12px;
        }
        .al__hero-nom {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 28px; font-weight: 700;
          line-height: 1.1; color: #fff;
          margin: 0 0 8px;
        }
        .al__hero-org {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; font-weight: 500;
          color: #A5CE46; margin: 0 0 28px;
        }
        .al__hero-quote {
          margin: 0 0 24px;
          padding-left: 16px;
          border-left: 3px solid #E8A838;
        }
        .al__hero-quote p {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 15px; font-style: italic; font-weight: 400;
          line-height: 1.7; color: #F5EDD6; margin: 0;
        }
        .al__hero-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; font-weight: 700;
          color: #A5CE46; text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.3s ease;
          align-self: flex-start;
        }
        .al__hero-link:hover { color: #fff; }

        /* ══ CARTE STANDARD ═════════════════════════════════════════ */
        .al__card {
          width: ${CARD_W}px;
          flex-shrink: 0;
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid transparent;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
          background: #1a1a1a;
          cursor: pointer;
        }
        .al__card:hover {
          transform: translateY(-2px);
          border-color: #00AD4C;
        }

        /* ── Photo ── */
        .al__card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }
        .al__card-ov {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,10,6,0.92) 0%,
            rgba(4,10,6,0.55) 45%,
            transparent       80%
          );
          z-index: 1;
        }

        /* ── Texte overlay ── */
        .al__card-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px;
          z-index: 2;
          display: flex; flex-direction: column; gap: 3px;
        }
        .al__card-nom {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 16px; font-weight: 700;
          color: #fff; line-height: 1.2;
        }
        .al__card-org {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #E8A838;
        }
        .al__card-pays {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px; font-weight: 500;
          color: #A5CE46; margin-bottom: 6px;
        }
        .al__card-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11.5px; font-weight: 700;
          color: #00AD4C; text-decoration: underline;
          text-underline-offset: 3px;
          align-self: flex-start;
          opacity: 0; transform: translateY(4px);
          transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        .al__card:hover .al__card-link { opacity: 1; transform: translateY(0); }
        .al__card-link:hover { color: #045627; }

        /* ══ DOTS ═══════════════════════════════════════════════════ */
        .al__dots {
          display: flex; justify-content: center;
          align-items: center; gap: 8px;
          margin-bottom: 40px;
        }
        .al__dot {
          border-radius: 50%; border: none;
          cursor: pointer; padding: 0;
          width: 8px; height: 8px;
          background: #d4d4d4;
          transition: background 0.3s ease, transform 0.3s ease,
                      width 0.3s ease, height 0.3s ease;
        }
        .al__dot--active {
          width: 10px; height: 10px;
          background: #E8A838;
        }
        .al__dot:hover:not(.al__dot--active) { background: #00AD4C; }

        /* ══ CTA ════════════════════════════════════════════════════ */
        .al__cta { text-align: center; }
        .al__cta-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; font-weight: 600;
          color: #045627; text-decoration: none;
          border: 1.5px solid rgba(4,86,39,0.22);
          border-radius: 24px; padding: 11px 28px;
          display: inline-block;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .al__cta-link:hover {
          background: #045627; color: #fff; border-color: #045627;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .al__hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .al__hero-img { aspect-ratio: 16/9; min-height: 200px; }
          .al__hero-body { padding: 28px 24px; }
          .al__arrow { display: none; }
        }
        @media (max-width: 640px) {
          .al__wrap { padding: 64px 20px 56px; }
        }
      `}</style>
    </section>
  );
}
