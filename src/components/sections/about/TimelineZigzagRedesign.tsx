"use client";

import { useState, useRef, useEffect } from "react";

/* ── palette ─────────────────────────────────────────────────────────────── */
const GREEN_LINE   = "#00AD4C";
const GREEN_BORDER = "#A5CE46";
const GREEN_DARK   = "#045627";
const GOLD         = "#E8A838";
const CHARCOAL     = "#2A2A2A";

/* ── data ────────────────────────────────────────────────────────────────── */
type Step = { year: string; label: string; body: string; detail: string; gold?: boolean };

const STEPS: Step[] = [
  {
    year:   "2011",
    label:  "La naissance",
    body:   "12 organisations d'Afrique de l'Ouest lancent NSS pour la souveraineté alimentaire des femmes rurales.",
    detail: "Une conviction commune : les femmes rurales ont les savoirs, la volonté et les pratiques pour nourrir le continent. NSS naît comme expression des droits des femmes dans une campagne globale pour la souveraineté alimentaire.",
    gold:   true,
  },
  {
    year:   "2011–14",
    label:  "La campagne",
    body:   "Déploiement terrain. Séances d'éducation. Les premières associations de femmes rurales rejoignent.",
    detail: "NSS se déploie dans les communautés rurales de toute l'Afrique de l'Ouest. Des centaines de séances d'information sont organisées. Le réseau grandit organiquement, porté par les femmes elles-mêmes.",
  },
  {
    year:   "2014",
    label:  "Le mouvement",
    body:   "500+ Associations de Femmes Rurales rejoignent NSS. Force paysanne autonome reconnue à l'échelle continentale.",
    detail: "La campagne devient mouvement structuré. Plus de 500 AFR rejoignent NSS qui s'installe durablement comme une force paysanne autonome reconnue à l'échelle continentale.",
  },
  {
    year:   "2017",
    label:  "1ère Assemblée Générale",
    body:   "Gouvernance 100 % féminine. Chaque pays représenté au Conseil d'Administration.",
    detail: "NSS tient sa première assemblée générale. Les instances de gouvernance sont constituées intégralement de femmes rurales — un modèle de démocratie paysanne unique en Afrique de l'Ouest.",
  },
  {
    year:   "2018–19",
    label:  "Rayonnement international",
    body:   "Conférences, foires de semences, plaidoyer. La voix paysanne franchit les frontières.",
    detail: "Rencontres annuelles à Thiès et au-delà. Participation à des événements internationaux. La voix des paysannes d'Afrique de l'Ouest se fait entendre dans les instances de décision mondiales.",
  },
  {
    year:   "2025",
    label:  "Rencontre à Kindia",
    body:   "4e CIFAP à Niaguis. 8 pays. Gouvernance entièrement autonome confirmée.",
    detail: "Rencontre annuelle en Guinée. La 4e édition du Camp International de Formation sur l'Agroécologie Paysanne réunit 8 pays à Niaguis. NSS confirme sa pleine autonomie de gouvernance.",
  },
  {
    year:   "2026",
    label:  "NSS aujourd'hui",
    body:   "175 000 membres · 500+ associations · 12 pays · Expansion continue vers de nouvelles régions.",
    detail: "Un mouvement ancré, souverain, en expansion vers de nouvelles régions d'Afrique. Les femmes rurales portent l'héritage de 15 ans de lutte collective pour la souveraineté alimentaire.",
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
    dragging.current    = true;
    moved.current       = false;
    startX.current      = e.pageX - scrollRef.current.getBoundingClientRect().left;
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
            <div
              ref={scrollRef}
              className="tz-scroller"
              onMouseDown={onMD}
              onMouseMove={onMM}
              onMouseUp={onMU}
              onMouseLeave={onMU}
            >
              <div className="tz-strip">

                {/* Horizontal line — runs through centre of all dots */}
                <div className="tz-hline" aria-hidden="true" />

                {STEPS.map(s => (
                  <div key={s.year} className="tz-item">
                    {/* Card */}
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

                    {/* Stem */}
                    <div className="tz-stem" aria-hidden="true" />
                    {/* Dot */}
                    <div className="tz-dot" aria-hidden="true" />
                  </div>
                ))}

              </div>
            </div>
            <span className="tz-fade-l" aria-hidden="true" />
            <span className="tz-fade-r" aria-hidden="true" />
          </div>

          <p className="tz-scroll-hint" aria-hidden="true">Faire glisser pour voir la suite →</p>
        </div>

        <style suppressHydrationWarning>{`
          /* ── Variables ────────────────────────────────────────── */
          :root {
            --tz-card:   210px;
            --tz-stem:   44px;
            --tz-dot:    14px;
            --tz-item-w: 268px;
            --tz-gap:    16px;
            --tz-h: calc(var(--tz-card) + var(--tz-stem) + var(--tz-dot));
          }

          /* ── Section ──────────────────────────────────────────── */
          .tz { background: #FAF6EE; }
          .tz-wrap { max-width: 1280px; margin: 0 auto; padding: 100px 0 84px; }

          /* ── Header ───────────────────────────────────────────── */
          .tz-header { text-align: center; margin-bottom: 60px; padding: 0 40px; }
          .tz-eyebrow {
            display: flex; align-items: center; justify-content: center; gap: 14px;
            font-family: var(--font-body); font-size: 11px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 1.5px; color: #A5CE46; margin: 0 0 16px;
          }
          .tz-eline { display: block; width: 28px; height: 1px; background: rgba(165,206,70,0.5); flex-shrink: 0; }
          .tz-h2 {
            font-family: var(--font-display);
            font-size: clamp(24px, 3vw, 38px);
            font-weight: 600; color: #1a1a1a; margin: 0; line-height: 1.15;
          }
          .tz-em { font-style: italic; font-weight: 600; color: #A5CE46; }

          /* ── Scroll container ─────────────────────────────────── */
          .tz-outer { position: relative; }
          .tz-scroller {
            overflow-x: auto;
            overflow-y: visible;
            cursor: grab;
            scrollbar-width: none;
            padding: 0 60px 12px;
            user-select: none;
            scroll-behavior: smooth;
          }
          .tz-scroller::-webkit-scrollbar { display: none; }

          /* ── Strip — horizontal linear ────────────────────────── */
          .tz-strip {
            position: relative;
            display: flex;
            flex-direction: row;
            gap: var(--tz-gap);
            height: var(--tz-h);
            min-width: max-content;
            align-items: flex-start;
          }

          /* ── Horizontal line — centred on dots ────────────────── */
          .tz-hline {
            position: absolute;
            top: calc(var(--tz-card) + var(--tz-stem) + var(--tz-dot) / 2);
            left: 0; right: 0;
            height: 2px;
            background: ${GREEN_LINE};
            pointer-events: none;
            z-index: 0;
          }

          /* ── Item — card on top, stem + dot below ─────────────── */
          .tz-item {
            position: relative;
            width: var(--tz-item-w);
            height: var(--tz-h);
            flex-shrink: 0;
          }

          /* Card — fixed height, top-aligned */
          .tz-card {
            position: absolute;
            top: 0;
            left: 0; right: 0;
            height: var(--tz-card);
            background: #ffffff;
            border: 1px solid ${GREEN_BORDER};
            border-radius: 4px;
            box-shadow: 0 4px 16px rgba(4,86,39,.10);
            padding: 16px 18px 8px;
            text-align: left;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            transition: transform .25s ease, box-shadow .25s ease;
            overflow: hidden;
            z-index: 1;
          }
          .tz-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 14px 36px rgba(4,86,39,.20);
            border-color: ${GREEN_LINE};
          }
          .tz-card:focus-visible { outline: 2px solid ${GREEN_LINE}; outline-offset: 3px; }

          /* Stem — below card */
          .tz-stem {
            position: absolute;
            top: var(--tz-card);
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: var(--tz-stem);
            background: ${GREEN_LINE};
            z-index: 1;
          }

          /* Dot — at bottom of stem */
          .tz-dot {
            position: absolute;
            top: calc(var(--tz-card) + var(--tz-stem));
            left: 50%;
            transform: translateX(-50%);
            width: var(--tz-dot);
            height: var(--tz-dot);
            border-radius: 50%;
            background: #fff;
            border: 2.5px solid ${GREEN_LINE};
            transition: background .25s, transform .25s, box-shadow .25s;
            z-index: 2;
          }
          .tz-item:hover .tz-dot {
            background: ${GREEN_LINE};
            transform: translateX(-50%) scale(1.5);
            box-shadow: 0 0 0 6px rgba(0,173,76,.15);
          }

          /* ── Card text ────────────────────────────────────────── */
          .tz-year {
            font-family: var(--font-body);
            font-size: 12px; font-weight: 700; line-height: 1;
            color: ${GREEN_DARK}; margin-bottom: 8px; display: block; flex-shrink: 0;
            text-transform: uppercase; letter-spacing: .1em;
          }
          .tz-year--gold { color: ${GOLD}; }
          .tz-label {
            font-family: var(--font-body);
            font-size: 18px; font-weight: 700; line-height: 1.25;
            color: ${CHARCOAL}; display: block; margin-bottom: 10px; flex-shrink: 0;
          }
          .tz-body {
            font-family: var(--font-body);
            font-size: 15px; line-height: 1.6;
            color: #1a1a1a; margin: 0;
            display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
            text-align: justify;
            hyphens: auto;
            flex: 1;
          }
          .tz-more {
            font-family: var(--font-body);
            font-size: 12px; font-weight: 700; letter-spacing: .12em;
            text-transform: uppercase; color: ${GREEN_LINE};
            opacity: 0; transition: opacity .2s;
            margin-top: 6px; display: block; flex-shrink: 0;
          }
          .tz-card:hover .tz-more { opacity: 1; }

          /* ── Fade edges ───────────────────────────────────────── */
          .tz-fade-l, .tz-fade-r {
            position: absolute; top: 0; bottom: 0; width: 80px;
            pointer-events: none; z-index: 3;
          }
          .tz-fade-l { left: 0; background: linear-gradient(to right, #FAF6EE, transparent); }
          .tz-fade-r { right: 0; background: linear-gradient(to left, #FAF6EE, transparent); }

          /* ── Scroll hint ──────────────────────────────────────── */
          .tz-scroll-hint {
            text-align: center; margin-top: 20px;
            font-family: var(--font-body); font-size: 10.5px; font-weight: 600;
            letter-spacing: .18em; text-transform: uppercase; color: rgba(0,0,0,.28);
          }

          /* ── Modal ────────────────────────────────────────────── */
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
          @keyframes tz-up { from { transform: translateY(16px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
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

          /* ── Responsive ───────────────────────────────────────── */
          @media (max-width: 680px) {
            :root {
              --tz-card:   190px;
              --tz-stem:   36px;
              --tz-item-w: 210px;
            }
            .tz-wrap     { padding: 72px 0 56px; }
            .tz-scroller { padding: 0 20px 10px; }
            .tz-header   { margin-bottom: 44px; }
            .tz-year     { font-size: 26px; }
            .tz-label    { font-size: 13px; }
            .tz-body     { font-size: 12px; }
          }
        `}</style>
      </section>
    </>
  );
}
