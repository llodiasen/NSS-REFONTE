"use client";

import { useState, useRef, useEffect } from "react";

interface Step {
  year: string;
  label: string;
  body: string;
  detail: string;
}

const STEPS: Step[] = [
  { year: "2011",    label: "La naissance",           body: "12 organisations du Burkina Faso, Ghana, Guinée, Mali et Sénégal lancent NSS.", detail: "Une conviction commune : les femmes rurales ont les savoirs, la volonté et les pratiques pour nourrir le continent. NSS naît comme expression des droits des femmes dans une campagne globale pour la souveraineté alimentaire." },
  { year: "2011–14", label: "La campagne",             body: "Déploiement terrain. Séances sur la souveraineté alimentaire. Premières associations rejoignent.", detail: "NSS se déploie dans les communautés rurales de toute l'Afrique de l'Ouest. Des centaines de séances d'information et d'éducation sont organisées. Le réseau grandit organiquement, porté par les femmes elles-mêmes." },
  { year: "2014",    label: "Le mouvement",            body: "500+ Associations de Femmes Rurales rejoignent NSS. Force paysanne autonome.", detail: "La campagne devient mouvement structuré. Plus de 500 AFR rejoignent NSS qui s'installe durablement comme une force paysanne autonome reconnue à l'échelle continentale." },
  { year: "2017",    label: "1ère Assemblée Générale", body: "Gouvernance 100 % féminine. Chaque pays représenté au Conseil d'Administration.", detail: "NSS tient sa première assemblée générale. Les instances de gouvernance sont constituées intégralement de femmes rurales — un modèle de démocratie paysanne unique en Afrique de l'Ouest." },
  { year: "2018–19", label: "Rayonnement international", body: "Conférences, foires de semences, plaidoyer. La voix paysanne franchit les frontières.", detail: "Rencontres annuelles à Thiès et au-delà. Participation à des événements internationaux. La voix des paysannes d'Afrique de l'Ouest se fait entendre dans les instances de décision mondiales." },
  { year: "2025",    label: "Rencontre à Kindia",      body: "4e CIFAP à Niaguis. 8 pays. Gouvernance entièrement autonome confirmée.", detail: "Rencontre annuelle en Guinée. La 4e édition du Camp International de Formation sur l'Agroécologie Paysanne réunit 8 pays à Niaguis. NSS confirme sa pleine autonomie de gouvernance." },
  { year: "2026",    label: "NSS aujourd'hui",         body: "175 000 membres · 500+ associations · 12 pays · Expansion continue.", detail: "Un mouvement ancré, souverain, en expansion vers de nouvelles régions d'Afrique. Les femmes rurales portent l'héritage de 15 ans de lutte collective pour la souveraineté alimentaire." },
];

type ModalData = Step | null;

export default function AboutTimeline() {
  const [modal, setModal] = useState<ModalData>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const moved = useRef(false);

  /* Escape to close modal */
  useEffect(() => {
    if (!modal) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [modal]);

  /* Drag-to-scroll */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    dragging.current = true;
    moved.current = false;
    startX.current = e.pageX - scrollRef.current.getBoundingClientRect().left;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.getBoundingClientRect().left;
    const delta = startX.current - x;
    if (Math.abs(delta) > 4) moved.current = true;
    scrollRef.current.scrollLeft = scrollStart.current + delta;
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const handleCardClick = (step: Step) => {
    if (!moved.current) setModal(step);
  };

  return (
    <>
      {/* ── Modal ── */}
      {modal && (
        <div className="rm-ov" onClick={() => setModal(null)} role="dialog" aria-modal="true" aria-label={modal.label}>
          <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rm-modal__close" onClick={() => setModal(null)} aria-label="Fermer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <span className="rm-modal__year">{modal.year}</span>
            <h3 className="rm-modal__label">{modal.label}</h3>
            <div className="rm-modal__divider" aria-hidden="true" />
            <p className="rm-modal__body">{modal.detail}</p>
          </div>
        </div>
      )}

      <section className="rm" aria-labelledby="rm-heading">
        <div className="rm__wrap">

          {/* ── Header centré ── */}
          <header className="rm__hd">
            <span className="rm__ey">Notre parcours</span>
            <h2 id="rm-heading" className="rm__h2">
              De campagne à mouvement <em>continental.</em>
            </h2>
          </header>

          {/* ── Scroller + fade droit ── */}
          <div className="rm__outer">
            <div
              ref={scrollRef}
              className="rm__scroller"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <div className="rm__strip" role="list">
                {STEPS.map((s) => (
                  <div key={s.year} className="rm__item" role="listitem">
                    <button
                      className="rm__card"
                      onClick={() => handleCardClick(s)}
                      aria-label={`${s.year} — ${s.label}. Cliquer pour plus de détails.`}
                    >
                      <span className="rm__year">{s.year}</span>
                      <strong className="rm__label">{s.label}</strong>
                      <p className="rm__body">{s.body}</p>
                      <span className="rm__hint" aria-hidden="true">▶ Détails</span>
                    </button>
                    <span className="rm__stem" aria-hidden="true" />
                    <span className="rm__dot" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            {/* Dégradé droit — signal visuel "swiper" */}
            <span className="rm__fade-r" aria-hidden="true" />
          </div>

          {/* Hint scroll */}
          <p className="rm__scroll-hint" aria-hidden="true">Faire glisser pour voir la suite →</p>

        </div>
      </section>

      <style>{`
        /* ══ Section ════════════════════════════════════════════ */
        .rm { background: #fff; }
        .rm__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 0 72px;
        }

        /* ══ Header ═════════════════════════════════════════════ */
        .rm__hd {
          text-align: center;
          margin-bottom: 64px;
          padding: 0 40px;
        }
        .rm__ey {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #00AD4C; margin-bottom: 14px;
        }
        .rm__h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 500; line-height: 1.1;
          color: #0a1f10; margin: 0;
        }
        .rm__h2 em { font-style: italic; color: #00AD4C; }

        /* ══ Scroll container ═══════════════════════════════════ */
        .rm__scroller {
          overflow-x: auto;
          overflow-y: visible;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0 60px 16px;
          user-select: none;
        }
        .rm__scroller::-webkit-scrollbar { display: none; }

        /* ══ Strip (flex row) ════════════════════════════════════ */
        .rm__strip {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          min-width: max-content;
          position: relative;
          padding-bottom: 0;
        }
        /* Horizontal line through all dots */
        .rm__strip::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 135px;
          right: 135px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00AD4C 4%, #00AD4C 96%, transparent);
          border-radius: 2px;
          pointer-events: none;
        }

        /* ══ Item (column) ══════════════════════════════════════ */
        .rm__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 270px;
          flex-shrink: 0;
        }

        /* ══ Card ════════════════════════════════════════════════ */
        .rm__card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-left: 3px solid transparent;
          border-radius: 10px;
          padding: 22px 20px 48px;
          text-align: left;
          cursor: pointer;
          width: 254px;
          min-height: 180px;
          position: relative;
          transition: transform 0.28s ease, box-shadow 0.28s ease,
                      background 0.28s ease, border-color 0.28s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .rm__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 52px rgba(4,86,39,0.15), 0 4px 12px rgba(0,0,0,0.06);
          background: rgba(165,206,70,0.04);
          border-color: rgba(0,173,76,0.35);
          border-left-color: #00AD4C;
        }
        .rm__card:active {
          transform: translateY(-4px) scale(0.97);
          box-shadow: 0 10px 28px rgba(4,86,39,0.12);
        }
        .rm__card:focus-visible {
          outline: 2px solid #00AD4C;
          outline-offset: 3px;
        }

        /* ══ Texte carte ════════════════════════════════════════ */
        .rm__year {
          display: block;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 30px; font-weight: 600;
          line-height: 1; color: #E8A838;
          margin-bottom: 8px;
          transition: color 0.25s ease;
        }
        .rm__card:hover .rm__year { color: #00AD4C; }

        .rm__label {
          display: block;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15.5px; font-weight: 700;
          color: #045627; margin-bottom: 10px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .rm__card:hover .rm__label { color: #00AD4C; }

        .rm__body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; line-height: 1.68;
          color: #4a5a4a; margin: 0;
          text-align: justify;
          hyphens: auto;
        }
        .rm__hint {
          position: absolute;
          bottom: 14px; left: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #00AD4C;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .rm__card:hover .rm__hint {
          opacity: 1;
          transform: translateX(0);
        }

        /* ══ Connecteur + dot ═══════════════════════════════════ */
        .rm__stem {
          display: block;
          width: 2px; height: 24px;
          background: linear-gradient(to bottom, rgba(0,173,76,0.3), #00AD4C);
          flex-shrink: 0;
        }
        .rm__dot {
          display: block;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #00AD4C;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .rm__item:hover .rm__dot {
          background: #00AD4C;
          transform: scale(1.5);
          box-shadow: 0 0 0 6px rgba(0,173,76,0.18);
        }

        /* ══ Outer wrapper + fade droit ════════════════════════ */
        .rm__outer {
          position: relative;
          /* Largeur = 4 cartes (270px × 4) + padding gauche (60px) + peek (50px) */
          max-width: calc(4 * 270px + 60px + 50px);
          margin: 0 auto;
        }
        .rm__fade-r {
          position: absolute;
          top: 0; right: 0; bottom: 16px;
          width: 140px;
          background: linear-gradient(to right, transparent, #fff 72%);
          pointer-events: none;
          z-index: 2;
        }

        /* ══ Hint scroll ════════════════════════════════════════ */
        .rm__scroll-hint {
          text-align: center;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(0,0,0,0.3);
          margin-top: 28px;
        }

        /* ══ Modal ══════════════════════════════════════════════ */
        .rm-ov {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(4,26,12,0.72);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          backdrop-filter: blur(4px);
          animation: rm-in 0.18s ease;
        }
        @keyframes rm-in { from { opacity: 0 } to { opacity: 1 } }
        .rm-modal {
          background: #fff;
          border-radius: 12px;
          border-top: 4px solid #00AD4C;
          padding: 40px 40px 36px;
          max-width: 520px; width: 100%;
          position: relative;
          box-shadow: 0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.08);
          animation: rm-up 0.22s ease;
        }
        @keyframes rm-up { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .rm-modal__close {
          position: absolute; top: 16px; right: 16px;
          background: rgba(0,0,0,0.04); border: none;
          color: #9aaa9a; cursor: pointer;
          padding: 6px; border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .rm-modal__close:hover { color: #0a1f10; background: rgba(0,0,0,0.08); }
        .rm-modal__year {
          display: inline-block;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 14px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #fff;
          background: #00AD4C;
          border-radius: 4px;
          padding: 3px 10px;
          margin-bottom: 16px;
        }
        .rm-modal__label {
          display: block;
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 600; line-height: 1.15;
          color: #0a1f10; margin: 0 0 6px;
          letter-spacing: -0.01em;
        }
        .rm-modal__divider {
          width: 36px; height: 2px;
          background: linear-gradient(90deg, #00AD4C, #A5CE46);
          border-radius: 1px;
          margin: 16px 0 20px;
        }
        .rm-modal__body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; line-height: 1.78;
          color: #2e3d2e; margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ══ Mobile ═════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .rm__wrap { padding: 64px 0 48px; }
          .rm__outer { max-width: 100%; }
          .rm__scroller { padding: 0 20px 16px; }
          .rm__strip::after { left: 110px; right: 110px; }
          .rm__item { width: 220px; }
          .rm__card { width: 204px; min-height: 160px; }
          .rm__year { font-size: 26px; }
          .rm__label { font-size: 14px; }
          .rm__body { font-size: 13.5px; }
          .rm__fade-r { width: 60px; }
          .rm__scroll-hint { display: block; }
        }
      `}</style>
    </>
  );
}
