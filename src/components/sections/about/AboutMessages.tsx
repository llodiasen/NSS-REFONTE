"use client";

import { useRef, useEffect } from "react";

const MESSAGES = [
  {
    num: "01",
    text: "« Nous, femmes, nourrissons le monde avec nos bras et nos valeurs. »",
  },
  {
    num: "02",
    text: "« Produisons ce que nous consommons et consommons ce que nous produisons. »",
  },
  {
    num: "03",
    text: "« Préservons la semence paysanne et développons la biodiversité. »",
  },
];

export default function AboutMessages() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".am__item");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("am--vis"); io.unobserve(e.target); }
      }),
      { threshold: 0.18 }
    );
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="am" aria-labelledby="am-heading">
      <div className="am__wrap">

        {/* ── Header ── */}
        <header className="am__hd">
          <div className="am__eyebrow" role="presentation">
            <span className="am__ey-line" aria-hidden="true" />
            <span className="am__ey-txt">Ce que nous portons</span>
            <span className="am__ey-line" aria-hidden="true" />
          </div>
          <h2 id="am-heading" className="am__h2">
            Trois principes.{" "}
            <em>Un seul mouvement.</em>
          </h2>
        </header>

        {/* ── Liste ── */}
        <ol className="am__list" ref={listRef} role="list">
          {MESSAGES.map((m, i) => (
            <li
              key={m.num}
              className="am__item am--anim"
              style={{ transitionDelay: `${i * 0.12}s` }}
              role="listitem"
            >
              <span className="am__num" aria-hidden="true">{m.num}</span>
              <blockquote className="am__quote">
                <p className="am__text">{m.text}</p>
              </blockquote>
            </li>
          ))}
        </ol>

        {/* ── Footer ── */}
        <footer className="am__foot" aria-hidden="true">
          <span className="am__foot-line" />
          <span className="am__foot-label">Engagements fondateurs — NSS, 2011</span>
          <span className="am__foot-line" />
        </footer>

      </div>

      <style>{`
        /* ══ Section ════════════════════════════════════════════ */
        .am {
          background: #FAFAF8;
          overflow: hidden;
        }
        .am__wrap {
          max-width: 780px;
          margin: 0 auto;
          padding: 72px 40px 64px;
        }

        /* ══ Header ═════════════════════════════════════════════ */
        .am__hd {
          text-align: center;
          margin-bottom: 48px;
        }
        .am__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .am__ey-line {
          display: block;
          flex: 1; max-width: 40px;
          height: 1px;
          background: #E8A838;
        }
        .am__ey-txt {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #E8A838;
          white-space: nowrap;
        }
        .am__h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 400; line-height: 1.2;
          color: #0a1f10; margin: 0;
          letter-spacing: -0.01em;
        }
        .am__h2 em {
          font-style: italic;
          color: #00AD4C;
        }

        /* ══ Liste ══════════════════════════════════════════════ */
        .am__list {
          list-style: none;
          margin: 0; padding: 0;
        }

        /* ══ Animations scroll ══════════════════════════════════ */
        .am--anim {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .am--vis {
          opacity: 1;
          transform: translateY(0);
        }

        /* ══ Item ═══════════════════════════════════════════════ */
        .am__item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 0 24px;
          padding: 28px 16px;
          border-top: 1px solid rgba(0,0,0,0.06);
          align-items: start;
          border-radius: 6px;
          transition: background 0.3s ease;
          cursor: default;
        }
        .am__item:last-child {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .am__item:hover {
          background: rgba(165, 206, 70, 0.05);
        }

        /* ══ Numéro ═════════════════════════════════════════════ */
        .am__num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 36px; font-weight: 600; line-height: 1;
          color: rgba(232, 168, 56, 0.55);
          padding-top: 4px;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }
        .am__item:hover .am__num {
          color: #E8A838;
        }

        /* ══ Citation ═══════════════════════════════════════════ */
        .am__quote { margin: 0; }
        .am__text {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 400; font-style: italic;
          line-height: 1.45; letter-spacing: -0.005em;
          color: #2e3d2e;
          margin: 0;
          transition: color 0.3s ease;
        }
        .am__item:hover .am__text {
          color: #0a1f10;
        }

        /* ══ Footer ═════════════════════════════════════════════ */
        .am__foot {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
        }
        .am__foot-line {
          flex: 1; height: 1px;
          background: rgba(0,0,0,0.08);
        }
        .am__foot-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(0,0,0,0.28);
          white-space: nowrap;
        }

        /* ══ Responsive ═════════════════════════════════════════ */
        @media (max-width: 600px) {
          .am__wrap { padding: 56px 24px 48px; }
          .am__item {
            grid-template-columns: 36px 1fr;
            gap: 0 16px;
            padding: 22px 12px;
          }
          .am__num { font-size: 28px; }
          .am__text { font-size: clamp(16px, 4.5vw, 22px); }
        }
      `}</style>
    </section>
  );
}
