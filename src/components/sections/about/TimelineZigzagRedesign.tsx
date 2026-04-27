"use client";

import { useState, useRef, useEffect } from "react";

/* ── palette ─────────────────────────────────────────────────────────────── */
const GREEN_LINE   = "#00AD4C";
const GREEN_BORDER = "#A5CE46";
const GREEN_DARK   = "#045627";
const GOLD         = "#E8A838";
const CHARCOAL     = "#2A2A2A";

/* ── data ────────────────────────────────────────────────────────────────── */
type Step = { year: string; label: string; body: string; detail: string; above: boolean; gold?: boolean };

const STEPS: Step[] = [
  {
    year:   "2011",
    label:  "La naissance",
    body:   "12 organisations d'Afrique de l'Ouest lancent NSS pour la souveraineté alimentaire des femmes rurales.",
    detail: "Une conviction commune : les femmes rurales ont les savoirs, la volonté et les pratiques pour nourrir le continent. NSS naît comme expression des droits des femmes dans une campagne globale pour la souveraineté alimentaire.",
    above:  true,
    gold:   true,
  },
  {
    year:   "2011–14",
    label:  "La campagne",
    body:   "Déploiement terrain. Séances d'éducation. Les premières associations de femmes rurales rejoignent.",
    detail: "NSS se déploie dans les communautés rurales de toute l'Afrique de l'Ouest. Des centaines de séances d'information sont organisées. Le réseau grandit organiquement, porté par les femmes elles-mêmes.",
    above:  false,
  },
  {
    year:   "2014",
    label:  "Le mouvement",
    body:   "500+ Associations de Femmes Rurales rejoignent NSS. Force paysanne autonome reconnue à l'échelle continentale.",
    detail: "La campagne devient mouvement structuré. Plus de 500 AFR rejoignent NSS qui s'installe durablement comme une force paysanne autonome reconnue à l'échelle continentale.",
    above:  true,
  },
  {
    year:   "2017",
    label:  "1ère Assemblée Générale",
    body:   "Gouvernance 100 % féminine. Chaque pays représenté au Conseil d'Administration.",
    detail: "NSS tient sa première assemblée générale. Les instances de gouvernance sont constituées intégralement de femmes rurales — un modèle de démocratie paysanne unique en Afrique de l'Ouest.",
    above:  false,
  },
  {
    year:   "2018–19",
    label:  "Rayonnement international",
    body:   "Conférences, foires de semences, plaidoyer. La voix paysanne franchit les frontières.",
    detail: "Rencontres annuelles à Thiès et au-delà. Participation à des événements internationaux. La voix des paysannes d'Afrique de l'Ouest se fait entendre dans les instances de décision mondiales.",
    above:  true,
  },
  {
    year:   "2025",
    label:  "Rencontre à Kindia",
    body:   "4e CIFAP à Niaguis. 8 pays. Gouvernance entièrement autonome confirmée.",
    detail: "Rencontre annuelle en Guinée. La 4e édition du Camp International de Formation sur l'Agroécologie Paysanne réunit 8 pays à Niaguis. NSS confirme sa pleine autonomie de gouvernance.",
    above:  false,
  },
  {
    year:   "2026",
    label:  "NSS aujourd'hui",
    body:   "175 000 membres · 500+ associations · 12 pays · Expansion continue vers de nouvelles régions.",
    detail: "Un mouvement ancré, souverain, en expansion vers de nouvelles régions d'Afrique. Les femmes rurales portent l'héritage de 15 ans de lutte collective pour la souveraineté alimentaire.",
    above:  true,
    gold:   true,
  },
];

/* ── main ────────────────────────────────────────────────────────────────── */
export default function TimelineZigzagRedesign() {
  const [modal, setModal]   = useState<Step | null>(null);
  const scrollRef           = useRef<HTMLDivElement>(null);
  const dragging            = useRef(false);
  const startX              = useRef(0);
  const scrollStart         = useRef(0);
  const moved               = useRef(false);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [modal]);

  const onMD = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    dragging.current  = true;
    moved.current     = false;
    startX.current    = e.pageX - scrollRef.current.getBoundingClientRect().left;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const onMM = (e: React.MouseEvent) => {
    if (!dragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.getBoundingClientRect().left;
    if (Math.abs(startX.current - x) > 4) moved.current = true;
    scrollRef.current.scrollLeft = scrollStart.current + (startX.current - x);
  };
  const onMU = () => {
    dragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="tz-ov" onClick={() => setModal(null)} role="dialog" aria-modal="true" aria-label={modal.label}>
          <div className="tz-modal" onClick={e => e.stopPropagation()}>
            <button className="tz-modal-x" onClick={() => setModal(null)} aria-label="Fermer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
            <span className="tz-modal-year">{modal.year}</span>
            <h3 className="tz-modal-title">{modal.label}</h3>
            <div className="tz-modal-rule" aria-hidden />
            <p className="tz-modal-body">{modal.detail}</p>
          </div>
        </div>
      )}

      <section className="tz" aria-labelledby="tz-heading">
        <div className="tz-wrap">

          {/* Header */}
          <header className="tz-header">
            <p className="tz-eyebrow">
              <span className="tz-eline" aria-hidden="true" />
              Notre parcours
              <span className="tz-eline" aria-hidden="true" />
            </p>
            <h2 id="tz-heading" className="tz-h2">
              De campagne à mouvement <em className="tz-em">continental.</em>
            </h2>
          </header>

          {/* Scroller */}
          <div className="tz-outer">
            <div ref={scrollRef} className="tz-scroller"
              onMouseDown={onMD} onMouseMove={onMM}
              onMouseUp={onMU} onMouseLeave={onMU}>
              <div className="tz-strip">

                {/* Horizontal line */}
                <div className="tz-hline" aria-hidden="true" />

                {STEPS.map(s => (
                  <div key={s.year} className={`tz-item tz-item--${s.above ? "above" : "below"}`}>

                    <button
                      type="button"
                      className="tz-card"
                      onClick={() => { if (!moved.current) setModal(s); }}
                      aria-label={`${s.year} — ${s.label}. Cliquer pour plus de détails.`}
                    >
                      <span className={`tz-year${s.gold ? " tz-year--gold" : ""}`}>{s.year}</span>
                      <strong className="tz-label">{s.label}</strong>
                      <p className="tz-body">{s.body}</p>
                      <span className="tz-more" aria-hidden="true">▶ Détails</span>
                    </button>

                    <div className="tz-stem" aria-hidden="true" />
                    <div className="tz-dot"  aria-hidden="true" />

                  </div>
                ))}
              </div>
            </div>
            <span className="tz-fade" aria-hidden="true" />
          </div>

          <p className="tz-scroll-hint" aria-hidden="true">Faire glisser pour voir la suite →</p>
        </div>

        <style suppressHydrationWarning>{`
          /* ── Variables ──────────────────────────────────────── */
          .tz-strip {
            --card: 224px;
            --stem: 48px;
            --dot:  14px;
            --dot-r: 7px;
            --mid: calc(var(--card) + var(--stem) + var(--dot-r)); /* 279px */
            --strip-h: calc(var(--card) * 2 + var(--stem) * 2 + var(--dot)); /* 558px */
          }

          /* ── Section ─────────────────────────────────────────── */
          .tz { background: #FAFAF8; }
          .tz-wrap { max-width: 1200px; margin: 0 auto; padding: 88px 0 72px; }

          /* ── Header ──────────────────────────────────────────── */
          .tz-header { text-align: center; margin-bottom: 80px; padding: 0 40px; }
          .tz-eyebrow {
            display: flex; align-items: center; justify-content: center; gap: 14px;
            font-family: var(--font-body); font-size: 9px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 3px; color: ${GREEN_BORDER}; margin: 0 0 16px;
          }
          .tz-eline { display: block; width: 28px; height: 1px; background: ${GREEN_BORDER}; flex-shrink: 0; }
          .tz-h2 {
            font-family: var(--font-display);
            font-size: clamp(26px, 3.2vw, 40px);
            font-weight: 400; color: ${CHARCOAL}; margin: 0; line-height: 1.15;
          }
          .tz-em { font-style: italic; color: ${GREEN_BORDER}; }

          /* ── Scroll container ────────────────────────────────── */
          .tz-outer { position: relative; }
          .tz-scroller {
            overflow-x: auto; overflow-y: visible;
            cursor: grab; scrollbar-width: none;
            padding: 0 60px 8px; user-select: none;
          }
          .tz-scroller::-webkit-scrollbar { display: none; }

          /* ── Strip (zigzag stage) ────────────────────────────── */
          .tz-strip {
            position: relative;
            display: flex;
            flex-direction: row;
            height: var(--strip-h);
            min-width: max-content;
          }

          /* ── Horizontal line ─────────────────────────────────── */
          .tz-hline {
            position: absolute;
            top: var(--mid);
            left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, ${GREEN_LINE} 6%, ${GREEN_LINE} 94%, transparent 100%);
            pointer-events: none;
          }

          /* ── Items ───────────────────────────────────────────── */
          .tz-item {
            position: relative;
            width: 310px;
            height: var(--strip-h);
            flex-shrink: 0;
          }

          /* Shared card positioning */
          .tz-card {
            position: absolute;
            left: 14px; right: 14px;
            height: var(--card);
            background: #ffffff;
            border: 1px solid ${GREEN_BORDER};
            border-radius: 4px;
            box-shadow: 0 4px 16px rgba(4,86,39,.10);
            padding: 22px 22px 16px;
            text-align: left;
            cursor: pointer;
            display: flex; flex-direction: column; gap: 0;
            transition: transform .25s ease, box-shadow .25s ease;
            overflow: hidden;
          }
          .tz-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(4,86,39,.18);
            border-color: ${GREEN_LINE};
          }
          .tz-card:focus-visible { outline: 2px solid ${GREEN_LINE}; outline-offset: 3px; }

          /* Stem shared */
          .tz-stem {
            position: absolute;
            left: 50%; transform: translateX(-50%);
            width: 2px; height: var(--stem);
            background: linear-gradient(to bottom, rgba(0,173,76,.25), ${GREEN_LINE});
          }

          /* Dot shared */
          .tz-dot {
            position: absolute;
            left: 50%; transform: translateX(-50%);
            width: var(--dot); height: var(--dot); border-radius: 50%;
            background: #fff; border: 2.5px solid ${GREEN_LINE};
            transition: background .25s, transform .25s, box-shadow .25s;
            z-index: 2;
          }
          .tz-item:hover .tz-dot {
            background: ${GREEN_LINE};
            transform: translateX(-50%) scale(1.45);
            box-shadow: 0 0 0 6px rgba(0,173,76,.15);
          }

          /* ABOVE: card → stem → dot */
          .tz-item--above .tz-card { top: 0; }
          .tz-item--above .tz-stem { top: var(--card); }
          .tz-item--above .tz-dot  { top: calc(var(--card) + var(--stem)); }

          /* BELOW: dot → stem → card */
          .tz-item--below .tz-dot  { top: calc(var(--card) + var(--stem)); }
          .tz-item--below .tz-stem { top: calc(var(--card) + var(--stem) + var(--dot)); }
          .tz-item--below .tz-card { top: calc(var(--card) + var(--stem) + var(--dot) + var(--stem)); }

          /* ── Card text ───────────────────────────────────────── */
          .tz-year {
            font-family: var(--font-display);
            font-size: 34px; font-weight: 400; line-height: 1;
            color: ${GREEN_DARK}; margin-bottom: 9px; display: block;
          }
          .tz-year--gold { color: ${GOLD}; }
          .tz-label {
            font-family: var(--font-body);
            font-size: 15px; font-weight: 700; line-height: 1.25;
            color: ${CHARCOAL}; display: block; margin-bottom: 10px;
          }
          .tz-body {
            font-family: var(--font-body);
            font-size: 13.5px; line-height: 1.65;
            color: #4a5a4a; margin: 0;
            display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
            flex: 1;
          }
          .tz-more {
            font-family: var(--font-body);
            font-size: 9px; font-weight: 700; letter-spacing: .12em;
            text-transform: uppercase; color: ${GREEN_LINE};
            opacity: 0; transition: opacity .2s;
            margin-top: 6px; display: block; flex-shrink: 0;
          }
          .tz-card:hover .tz-more { opacity: 1; }

          /* ── Fade + hint ─────────────────────────────────────── */
          .tz-fade {
            position: absolute; top: 0; right: 0; bottom: 0; width: 120px;
            background: linear-gradient(to right, transparent, #FAFAF8 75%);
            pointer-events: none;
          }
          .tz-scroll-hint {
            text-align: center; margin-top: 24px;
            font-family: var(--font-body); font-size: 10.5px; font-weight: 600;
            letter-spacing: .18em; text-transform: uppercase; color: rgba(0,0,0,.28);
          }

          /* ── Modal ───────────────────────────────────────────── */
          .tz-ov {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(4,26,12,.72);
            display: flex; align-items: center; justify-content: center;
            padding: 24px; backdrop-filter: blur(4px);
            animation: tz-in .18s ease;
          }
          @keyframes tz-in { from { opacity: 0 } to { opacity: 1 } }
          .tz-modal {
            background: #fff; border-radius: 4px;
            border-top: 4px solid ${GREEN_LINE};
            padding: 40px; max-width: 480px; width: 100%;
            position: relative;
            box-shadow: 0 32px 80px rgba(0,0,0,.22);
            animation: tz-up .22s ease;
          }
          @keyframes tz-up { from { transform: translateY(16px); opacity:0 } to { transform:translateY(0); opacity:1 } }
          .tz-modal-x {
            position: absolute; top: 14px; right: 14px;
            background: rgba(0,0,0,.04); border: none; cursor: pointer;
            color: #9aaa9a; padding: 6px; border-radius: 4px;
            display: flex; align-items: center; transition: color .2s, background .2s;
          }
          .tz-modal-x:hover { color: ${CHARCOAL}; background: rgba(0,0,0,.08); }
          .tz-modal-year {
            display: inline-block; font-family: var(--font-body);
            font-size: 11px; font-weight: 700; letter-spacing: .12em;
            text-transform: uppercase; color: #fff;
            background: ${GREEN_LINE}; border-radius: 2px;
            padding: 3px 10px; margin-bottom: 14px;
          }
          .tz-modal-title {
            font-family: var(--font-display); font-size: clamp(20px, 2.4vw, 28px);
            font-weight: 400; color: ${CHARCOAL}; margin: 0 0 4px; line-height: 1.15;
          }
          .tz-modal-rule {
            width: 36px; height: 2px;
            background: linear-gradient(90deg, ${GREEN_LINE}, ${GREEN_BORDER});
            margin: 16px 0 20px;
          }
          .tz-modal-body {
            font-family: var(--font-body); font-size: 14px;
            line-height: 1.78; color: #2e3d2e; margin: 0;
          }

          /* ── Responsive ──────────────────────────────────────── */
          @media (max-width: 680px) {
            .tz-wrap  { padding: 64px 0 48px; }
            .tz-scroller { padding: 0 20px 8px; }
            .tz-header { margin-bottom: 52px; }
            .tz-strip { --card: 176px; --stem: 38px; }
            .tz-item  { width: 230px; }
            .tz-year  { font-size: 24px; }
            .tz-label { font-size: 13px; }
            .tz-body  { font-size: 12px; }
            .tz-fade  { width: 60px; }
          }
        `}</style>
      </section>
    </>
  );
}
