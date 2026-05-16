'use client'

import { useEffect, useRef, useState } from 'react'

/* Tabler outline SVG icons (paths from tabler-icons.io, MIT) */
function IconLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
      <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9 0 1 0 3 2 5h3z" />
    </svg>
  )
}
function IconSpeakerphone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 8a3 3 0 0 1 0 6" />
      <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
      <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
    </svg>
  )
}
function IconWorld() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  )
}

const CARDS = [
  {
    icon:  <IconLeaf />,
    num:   '01',
    title: 'La terre comme héritage vivant',
    text:  "Nos mères nous ont transmis des savoirs que ni les marchés ni les semenciers ne peuvent remplacer. NSS protège et diffuse ces pratiques agroécologiques endogènes qui nourrissent l'Afrique depuis des générations.",
  },
  {
    icon:  <IconSpeakerphone />,
    num:   '02',
    title: 'La famille comme premier champ',
    text:  "NSS promeut l'agriculture familiale comme modèle viable, durable et souverain. Nos paysannes portent cette conviction du village aux instances continentales — parce que décider de ce qu'on cultive, c'est décider de ce qu'on est.",
  },
  {
    icon:  <IconWorld />,
    num:   '03',
    title: 'La gouvernance comme terrain de lutte',
    text:  "175 000 femmes, 14 pays, un seul mouvement. NSS s'étend vers d'autres régions du continent — parce que la souveraineté alimentaire ne connaît pas de frontières.",
  },
] as const

export default function ObjectifsRedesign() {
  const [active, setActive] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="obj" aria-labelledby="obj-titre">

      <header className="obj-header">
        <div className="obj-eyebrow" aria-hidden="true">
          <span className="obj-eyeline" />
          <span>NOS OBJECTIFS</span>
          <span className="obj-eyeline" />
        </div>
        <h2 id="obj-titre" className="obj-h2">
          Cultiver, transmettre, <em>décider ensemble.</em>
        </h2>
        <span className="obj-underline" aria-hidden="true" />
        <p className="obj-desc">
          Depuis 2011, NSS œuvre sur trois fronts&nbsp;: promouvoir les savoirs
          paysans, développer l&apos;agriculture familiale et peser sur la
          gouvernance agricole — du village aux instances continentales.
        </p>
      </header>

      <div className="obj-grid" role="listbox" aria-label="Objectifs de NSS">
        {CARDS.map(({ icon, num, title, text }, i) => {
          const cls = [
            'obj-card',
            active === i  ? 'obj-card--active'  : '',
            visible       ? 'obj-card--anim'    : '',
            visible       ? `obj-card--d${i+1}` : '',
          ].filter(Boolean).join(' ')

          return (
            <article
              key={num}
              role="option"
              className={cls}
              onClick={() => setActive(i)}
              aria-selected={active === i}
            >
              <div className="obj-row-top">
                <div className="obj-icon-wrap" aria-hidden="true">{icon}</div>
                <span className="obj-num" aria-hidden="true">{num}</span>
              </div>
              <h3 className="obj-title">{title}</h3>
              <div className="obj-accent" aria-hidden="true" />
              <p className="obj-text">{text}</p>
            </article>
          )
        })}
      </div>

      <style>{`
        /* ── SECTION ── */
        .obj {
          background: #f9f8f5;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1rem, 2.5vw, 2rem);
        }

        /* ── HEADER ── */
        .obj-header {
          max-width: 640px;
          margin: 0 auto 52px;
          text-align: center;
        }
        .obj-eyebrow {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #00AD4C;
        }
        .obj-eyeline {
          display: block; width: 28px; height: 1.5px;
          background: #00AD4C; flex-shrink: 0;
        }
        .obj-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.37rem, 2.99vw, 2.39rem);
          font-weight: 500; letter-spacing: -0.01em; line-height: 1.2;
          color: #2A2A2A; margin: 0;
        }
        .obj-h2 em { font-style: italic; color: #00AD4C; }
        .obj-underline {
          display: block; width: 60px; height: 3px;
          background: #00AD4C; border-radius: 2px;
          margin: 0.75rem auto 1.25rem;
        }
        .obj-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px; font-weight: 300; color: #4A4A4A;
          line-height: 1.8; text-align: center; margin: 0;
        }

        /* ── GRID ── */
        .obj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 0.5px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── CARD BASE ── */
        .obj-card {
          padding: 36px 32px;
          border-right: 0.5px solid #e5e7eb;
          display: flex; flex-direction: column;
          background: #ffffff;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transition: background 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
        }
        .obj-card:last-child { border-right: none; }

        /* ── ACTIVE + HOVER ── */
        .obj-card.obj-card--active,
        .obj-card:hover {
          background: #045627;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(4,86,39,0.2);
          z-index: 2;
        }

        /* ── ROW TOP ── */
        .obj-row-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 20px;
        }

        /* ── ICON ── */
        .obj-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 8px; background: #f0faf4;
          display: flex; align-items: center; justify-content: center;
          color: #00AD4C; flex-shrink: 0;
          transition: background 0.4s ease, color 0.4s ease;
        }

        /* ── NUMBER ── */
        .obj-num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 72px; font-weight: 600;
          color: #f0faf4; line-height: 1;
          transition: color 0.4s ease;
          user-select: none; pointer-events: none;
        }

        /* ── H3 ── */
        .obj-title {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px; font-weight: 500;
          color: #2A2A2A; line-height: 1.2; margin: 0 0 8px;
          transition: color 0.4s ease;
        }

        /* ── ACCENT ── */
        .obj-accent {
          width: 32px; height: 2px;
          background: #00AD4C; margin-bottom: 16px; flex-shrink: 0;
          transition: background 0.4s ease;
        }

        /* ── TEXT ── */
        .obj-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px; font-weight: 300;
          color: #4A4A4A; line-height: 1.8;
          text-align: justify; text-align-last: left;
          flex: 1; margin: 0;
          transition: color 0.4s ease;
        }

        /* ── ÉTATS ENFANTS hover / actif ── */
        .obj-card.obj-card--active .obj-num,
        .obj-card:hover .obj-num { color: rgba(255,255,255,0.06); }

        .obj-card.obj-card--active .obj-icon-wrap,
        .obj-card:hover .obj-icon-wrap {
          background: rgba(255,255,255,0.1);
          color: #A5CE46;
        }

        .obj-card.obj-card--active .obj-title,
        .obj-card:hover .obj-title { color: #ffffff; }

        .obj-card.obj-card--active .obj-accent,
        .obj-card:hover .obj-accent { background: #A5CE46; }

        .obj-card.obj-card--active .obj-text,
        .obj-card:hover .obj-text { color: rgba(255,255,255,0.85); }

        /* ── ANIMATION fadeInUp ── */
        @keyframes obj-fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .obj-card.obj-card--anim {
          opacity: 1;
          animation: obj-fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        .obj-card.obj-card--d1 { animation-delay: 0.1s; }
        .obj-card.obj-card--d2 { animation-delay: 0.2s; }
        .obj-card.obj-card--d3 { animation-delay: 0.3s; }

        /* ── MOBILE ≤ 640px ── */
        @media (max-width: 640px) {
          .obj-grid {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .obj-card {
            border-right: none;
            border-bottom: 0.5px solid #e5e7eb;
          }
          .obj-card:last-child { border-bottom: none; }
          .obj-card.obj-card--active,
          .obj-card:hover { transform: none; box-shadow: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .obj-card { transition: none; animation: none !important; opacity: 1; }
        }
      `}</style>

    </section>
  )
}
