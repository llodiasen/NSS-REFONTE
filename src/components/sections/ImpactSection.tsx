'use client'

import { useEffect, useRef, useState } from 'react'

/* ── Tabler SVG icons (MIT) ─────────────────────────────────────────────── */
function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
    </svg>
  )
}
function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
    </svg>
  )
}
function IconCommunity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 9h5M8 13h5"/>
      <path d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14h-10z"/>
      <path d="M13 3h2a2 2 0 0 1 2 2v3"/>
      <path d="M14 21v-5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5h-7z"/>
      <path d="M21 21h-7M3 21h10"/>
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12z"/>
      <path d="M16 3v4M8 3v4M4 11h16M11 15h1M12 15v3"/>
    </svg>
  )
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const CARDS = [
  {
    icon:    <IconUsers />,
    num:     '175k',
    label:   'Membres actives',
    desc:    "Femmes rurales engagées à travers l'Afrique de l'Ouest",
    active:  false,
  },
  {
    icon:    <IconMapPin />,
    num:     '14',
    label:   'Pays membres',
    desc:    'Du Sénégal au Ghana, un réseau panafricain en expansion',
    active:  true,
  },
  {
    icon:    <IconCommunity />,
    num:     '500+',
    label:   'Associations rurales',
    desc:    'Associations de femmes rurales membres du réseau NSS',
    active:  false,
  },
  {
    icon:    <IconCalendar />,
    num:     '14 ans',
    label:   "D'engagement",
    desc:    "Depuis 2011, un mouvement qui grandit sans jamais fléchir",
    active:  false,
  },
] as const

/* ── Composant ───────────────────────────────────────────────────────────── */
export default function ImpactSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="imp" aria-labelledby="imp-titre">
      <div className="imp-inner">

        {/* ══ COLONNE GAUCHE ══ */}
        <div className="imp-left">

          <div className="imp-eyebrow" aria-hidden="true">
            <span className="imp-ey-line" />
            <span>NOTRE IMPACT</span>
          </div>

          <h2 id="imp-titre" className="imp-h2">
            Un réseau vivant, <em>ancré dans les territoires.</em>
          </h2>

          <p className="imp-body">
            En Afrique de l&apos;Ouest, l&apos;agriculture familiale nourrit
            70&nbsp;% des populations. NSS fédère celles qui en sont le
            pilier — les femmes rurales — pour qu&apos;elles décident,
            cultivent et transmettent en toute souveraineté.
          </p>

          <blockquote className="imp-quote">
            <p className="imp-quote-text">
              &ldquo;Par nous-mêmes, pour nous-mêmes, en nous-mêmes — les femmes
              nourrissent l&apos;Afrique.&rdquo;
            </p>
            <footer className="imp-quote-author">
              Mariama Sonko — Présidente NSS
            </footer>
          </blockquote>

        </div>

        {/* ══ COLONNE DROITE — grille stats ══ */}
        <div className="imp-grid" ref={gridRef}>
          {CARDS.map(({ icon, num, label, desc, active }, i) => {
            const cls = [
              'imp-card',
              active   ? 'imp-card--active' : '',
              visible  ? 'imp-card--in'     : '',
              visible  ? `imp-card--d${i + 1}` : '',
            ].filter(Boolean).join(' ')

            return (
              <div key={label} className={cls}>
                <span className="imp-card-icon" aria-hidden="true">{icon}</span>
                <span className="imp-num">{num}</span>
                <span className="imp-label">{label}</span>
                <span className="imp-desc">{desc}</span>
              </div>
            )
          })}
        </div>

      </div>

      <style>{`
        /* ── SECTION ── */
        .imp {
          background: #f9f8f5;
          padding: 80px 72px;
        }

        /* ── INNER ── */
        .imp-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── EYEBROW ── */
        .imp-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .imp-ey-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }

        /* ── H2 ── */
        .imp-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.62rem, 3.15vw, 2.16rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.15;
          color: #2A2A2A;
          margin: 0 0 20px;
        }
        .imp-h2 em {
          color: #00AD4C;
          font-style: italic;
        }

        /* ── PARAGRAPHE ── */
        .imp-body {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          text-align: justify;
          text-align-last: left;
          margin: 0 0 32px;
        }

        /* ── BLOCKQUOTE ── */
        .imp-quote {
          border-left: 2px solid #00AD4C;
          padding: 4px 0 4px 18px;
          margin: 0;
        }
        .imp-quote-text {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px;
          font-style: italic;
          color: #2A2A2A;
          line-height: 1.6;
          margin: 0;
        }
        .imp-quote-author {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 8px;
          display: block;
        }

        /* ── GRILLE STATS ── */
        .imp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── CARD BASE ── */
        .imp-card {
          background: #ffffff;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          cursor: default;
          opacity: 0;
          transition: background 0.3s ease;
        }

        /* ── CARD ICON ── */
        .imp-card-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 18px;
          color: #e5e7eb;
          transition: color 0.3s ease;
          display: flex;
        }

        /* ── NUM ── */
        .imp-num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 3rem;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
          transition: color 0.3s ease;
        }

        /* ── LABEL ── */
        .imp-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        /* ── DESC ── */
        .imp-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #9ca3af;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        /* ── HOVER + ACTIVE ── */
        .imp-card--active,
        .imp-card:hover {
          background: #045627;
        }
        .imp-card--active .imp-num,
        .imp-card:hover .imp-num { color: #A5CE46; }

        .imp-card--active .imp-label,
        .imp-card:hover .imp-label { color: rgba(245,237,214,0.6); }

        .imp-card--active .imp-desc,
        .imp-card:hover .imp-desc { color: rgba(245,237,214,0.45); }

        .imp-card--active .imp-card-icon,
        .imp-card:hover .imp-card-icon { color: rgba(165,206,70,0.2); }

        /* ── ANIMATION fadeInUp ── */
        @keyframes imp-fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .imp-card--in {
          opacity: 1;
          animation: imp-fadeInUp 0.4s ease backwards;
        }
        .imp-card--d1 { animation-delay: 0ms;   }
        .imp-card--d2 { animation-delay: 80ms;  }
        .imp-card--d3 { animation-delay: 160ms; }
        .imp-card--d4 { animation-delay: 240ms; }

        /* ── MOBILE 375px ── */
        @media (max-width: 768px) {
          .imp { padding: 56px 24px; }
          .imp-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .imp-card { padding: 24px 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .imp-card { transition: background 0.2s ease; animation: none !important; opacity: 1; }
          .imp-num, .imp-label, .imp-desc, .imp-card-icon { transition: none; }
        }
      `}</style>
    </section>
  )
}
