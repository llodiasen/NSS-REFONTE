import Link from 'next/link'

const HERO_IMG = 'http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg'

const C_GREEN = '#97C459'
const C_RED   = '#E24B4A'

interface StatItem {
  value: string
  label: string
  color: string
  last:  boolean
}

const STATS: StatItem[] = [
  { value: '2011',    label: 'Fondation',      color: C_GREEN, last: false },
  { value: '175 000', label: 'Membres actives', color: C_GREEN, last: false },
  { value: '14',      label: 'Pays',            color: C_RED,   last: false },
  { value: '500+',    label: 'Associations',    color: C_GREEN, last: true  },
]

export default function MouvementHero() {
  return (
    <section className="mh" aria-labelledby="mh-titre">

      {/* Image cover */}
      <div className="mh-bg" aria-hidden />

      {/* Overlay directionnel sombre → léger */}
      <div className="mh-overlay" aria-hidden />

      {/* Contenu — aligné bas-gauche via flex-end */}
      <div className="mh-body">

        {/* Fil d'Ariane */}
        <nav className="mh-bc" aria-label="Fil d'Ariane">
          <Link href="/fr" className="mh-bc-home">Accueil</Link>
          <span className="mh-bc-sep" aria-hidden>›</span>
          <span className="mh-bc-curr">Mouvement</span>
        </nav>

        {/* Label — ligne + texte */}
        <div className="mh-label" aria-hidden="false">
          <span className="mh-label-line" aria-hidden />
          <span>NOTRE MOUVEMENT</span>
        </div>

        {/* H1 — pas de br forcé */}
        <h1 id="mh-titre" className="mh-h1">
          Un mouvement structuré,{' '}
          <em>guidé par ses valeurs.</em>
        </h1>

        {/* Paragraphe */}
        <p className="mh-lead">
          Depuis 2011, NSS fédère les femmes rurales d&apos;Afrique de l&apos;Ouest
          autour d&apos;une conviction&nbsp;: elles sont, elles-mêmes, la solution
          à la crise alimentaire du continent.
        </p>

        {/* Stats inline avec séparateurs border-right */}
        <div className="mh-stats" role="list" aria-label="Chiffres clés NSS">
          {STATS.map(({ value, label, color, last }) => (
            <div
              key={label}
              className={`mh-stat${last ? '' : ' mh-stat--sep'}`}
              role="listitem"
            >
              <span className="mh-stat-v" style={{ color }}>{value}</span>
              <span className="mh-stat-l">{label}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .mh {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        /* ── Image cover ── */
        .mh-bg {
          position: absolute;
          inset: 0;
          background:
            url('${HERO_IMG}')
            center / cover no-repeat;
          z-index: 0;
        }

        /* ── Overlay — sombre gauche, léger droite ── */
        .mh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5,12,5,0.88) 50%,
            rgba(5,12,5,0.40) 100%
          );
          z-index: 1;
        }

        /* ── Corps ── */
        .mh-body {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
        }

        /* ── Fil d'Ariane ── */
        .mh-bc {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 32px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
        }
        .mh-bc-home {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mh-bc-home:hover { color: #ffffff; }
        .mh-bc-sep  { color: rgba(255,255,255,0.4); }
        .mh-bc-curr { color: #ffffff; }

        /* ── Label ── */
        .mh-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C_GREEN};
        }
        .mh-label-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: ${C_GREEN};
          flex-shrink: 0;
        }

        /* ── H1 ── */
        .mh-h1 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(2.09rem, 4.75vw, 3.04rem);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          max-width: 600px;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }
        .mh-h1 em {
          font-style: italic;
          color: #ffffff;
        }

        /* ── Lead ── */
        .mh-lead {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.7;
          color: #ffffff;
          max-width: 520px;
          margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Stats ── */
        .mh-stats {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 20px;
          margin-top: 28px;
          row-gap: 12px;
        }
        .mh-stat {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .mh-stat--sep {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .mh-stat-v {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .mh-stat-l {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #ffffff;
          opacity: 1;
        }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .mh { min-height: 520px; }
          .mh-body { padding: 60px 24px 40px; }
          .mh-stat--sep { padding-right: 20px; margin-right: 20px; }
        }

        /* ── Mobile 375px ── */
        @media (max-width: 480px) {
          .mh { min-height: 540px; }
          .mh-body { padding: 56px 20px 36px; }
          .mh-h1  { max-width: 100%; }
          .mh-lead { text-align: left; }
          .mh-stat--sep { padding-right: 14px; margin-right: 14px; }
          .mh-stat-v { font-size: 1.1rem; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .mh-bc-home { transition: none; }
        }
      `}</style>
    </section>
  )
}
