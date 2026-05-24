import type { ReactNode } from 'react'

/* ── Tabler outline icons (SVG inline) ──────────────────────────────────── */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20" height="20"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const ICONS: Record<string, ReactNode> = {
  wheat: (
    <Svg>
      <path d="M3 21l10 -10" />
      <path d="M12.5 8.5c1 -2 4 -2 5 0c1 3 -2.5 6 -5 5c-2.5 1 -6 -2 -5 -5c1 -2 4 -2 5 0" />
      <path d="M15 3v4" />
      <path d="M15 7c-.667 1.333 -1.333 2 -2 2" />
    </Svg>
  ),
  homeHeart: (
    <Svg>
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
      <path d="M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.512" />
      <path
        d="M21.854 15.146a2.5 2.5 0 0 0 -3.536 0l-.318 .318l-.318 -.318a2.5 2.5 0 0 0 -3.536 3.536l3.854 3.854l3.854 -3.854a2.5 2.5 0 0 0 0 -3.536z"
        fill="currentColor"
        strokeWidth={0}
      />
    </Svg>
  ),
  genderFemale: (
    <Svg>
      <path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M11 15v6" />
      <path d="M8 18h6" />
    </Svg>
  ),
  plant2: (
    <Svg>
      <path d="M12 10a6 6 0 0 0 -6 -6h-3v1.5c0 3.314 2.686 6 6 6h3" />
      <path d="M12 10v10" />
      <path d="M12 13a6 6 0 0 1 6 -6h2v1.5a6 6 0 0 1 -6 6h-2" />
    </Svg>
  ),
  scale: (
    <Svg>
      <path d="M7 20l10 0" />
      <path d="M6 6l6 -1l6 1" />
      <path d="M12 5v15" />
      <path d="M6 6l-3 9h6z" />
      <path d="M18 6l-3 9h6z" />
    </Svg>
  ),
  usersGroup: (
    <Svg>
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M17 10h2a2 2 0 0 1 2 2v1" />
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </Svg>
  ),
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const CARDS = [
  {
    icon: 'wheat',
    tag: 'Alimentation',
    title: 'Souveraineté alimentaire',
    desc: "Le droit de chaque communauté de décider librement de son système de production et d'alimentation.",
  },
  {
    icon: 'homeHeart',
    tag: 'Économie rurale',
    title: 'Agriculture familiale',
    desc: "La famille comme première force de travail, cadre d'éducation et de création d'emplois en harmonie avec la nature.",
  },
  {
    icon: 'genderFemale',
    tag: 'Droits',
    title: 'Droits des femmes',
    desc: "Accès équitable à la terre, au financement et aux espaces de décision pour toutes les agricultrices du réseau.",
  },
  {
    icon: 'plant2',
    tag: 'Environnement',
    title: 'Agroécologie & Biodiversité',
    desc: "Semences paysannes résilientes, cycles naturels sans intrants chimiques et préservation de la diversité du vivant.",
  },
  {
    icon: 'scale',
    tag: 'Équité',
    title: 'Accès équitable aux ressources',
    desc: "Ressources agricoles accessibles à toutes selon les besoins, avec une pleine prise en compte du genre.",
  },
  {
    icon: 'usersGroup',
    tag: 'Gouvernance',
    title: 'Gouvernance participative',
    desc: "Les familles paysannes au cœur de la définition, du suivi et de l'évaluation des politiques agricoles.",
  },
]

/* ── Component ───────────────────────────────────────────────────────────── */
export default function EngagementsSection() {
  return (
    <section className="eng-s">

      {/* ── Header ── */}
      <div className="eng-hd">
        <div className="eng-surtitle">
          <span className="eng-line" aria-hidden />
          <span>NOS ENGAGEMENTS</span>
          <span className="eng-line" aria-hidden />
        </div>

        <h2 className="eng-h2">
          Ce à quoi nous croyons,{' '}
          <em>ce que nous faisons.</em>
        </h2>

        <div className="eng-ul" aria-hidden />

        <p className="eng-desc">
          Six engagements fondamentaux qui guident chaque action du réseau NSS
          à travers l&apos;Afrique de l&apos;Ouest.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="eng-grid">
        {CARDS.map((card) => (
          <div key={card.title} className="eng-card">
            <div className="eng-icon">{ICONS[card.icon]}</div>
            <span className="eng-tag">{card.tag}</span>
            <h3 className="eng-title">{card.title}</h3>
            <p className="eng-text">{card.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        /* ── Section ── */
        .eng-s {
          background: #f9f8f5;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 5rem);
        }

        /* ── Header ── */
        .eng-hd {
          max-width: 640px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .eng-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .eng-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .eng-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(1.875rem, 3.5vw, 1.875rem);
          font-weight: 400;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .eng-h2 em {
          font-style: italic;
          color: #045627;
        }
        .eng-ul {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          border-radius: 2px;
          margin: 0.75rem auto 1.5rem;
        }
        .eng-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          color: BLACK;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Grid ── */
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Card ── */
        .eng-card {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s ease;
        }
        .eng-card:hover {
          border-color: #00AD4C;
        }

        /* Icon wrapper */
        .eng-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0faf4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AD4C;
          flex-shrink: 0;
        }

        /* Tag */
        .eng-tag {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* Card title */
        .eng-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 16px;
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.3;
          margin: 0;
        }

        /* Card text */
        .eng-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          color: BLACK;
          line-height: 1.7;
          text-align: justify;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .eng-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .eng-s { padding: 52px 20px; }
          .eng-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
