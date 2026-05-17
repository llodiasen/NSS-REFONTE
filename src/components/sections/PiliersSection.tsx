'use client'

import { motion } from 'framer-motion'
import { Leaf, Megaphone, Globe } from 'lucide-react'

const PILIERS = [
  {
    num: '01',
    Icon: Leaf,
    title: 'La terre comme héritage vivant',
    text: "Nos mères nous ont transmis des savoirs que ni les marchés ni les semenciers ne peuvent remplacer. NSS protège et diffuse ces pratiques agroécologiques endogènes qui nourrissent l'Afrique depuis des générations.",
    active: false,
  },
  {
    num: '02',
    Icon: Megaphone,
    title: 'La famille comme premier champ',
    text: "NSS promeut l'agriculture familiale comme modèle viable, durable et souverain. Nos paysannes portent cette conviction du village aux instances continentales.",
    active: true,
  },
  {
    num: '03',
    Icon: Globe,
    title: 'La gouvernance comme terrain de lutte',
    text: "175 000 femmes, 14 pays, un seul mouvement. NSS s'étend vers d'autres régions du continent — la souveraineté alimentaire ne connaît pas de frontières.",
    active: false,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: i * 0.1 },
  }),
}

export default function PiliersSection() {
  return (
    <section className="pil" aria-labelledby="pil-titre">

      {/* ── HEADER ── */}
      <motion.div
        className="pil-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease }}
      >
        <div className="pil-surtitle" aria-hidden="true">
          <span className="pil-sur-line" />
          <span className="pil-sur-text">NOS PILIERS</span>
          <span className="pil-sur-line" />
        </div>

        <h2 id="pil-titre" className="pil-h2">
          Cultiver, transmettre,{' '}
          <em>décider ensemble.</em>
        </h2>

        <div className="pil-underline" aria-hidden="true" />

        <p className="pil-desc">
          Depuis 2011, NSS œuvre sur trois fronts pour bâtir la souveraineté
          alimentaire des femmes rurales d&apos;Afrique de l&apos;Ouest.
        </p>
      </motion.div>

      {/* ── GRILLE ── */}
      <div className="pil-grid" role="list">
        {PILIERS.map((p, i) => (
          <motion.div
            key={p.num}
            role="listitem"
            className={`pil-card${p.active ? ' pil-card--active' : ''}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="pil-card-top">
              <div className="pil-icon-wrap" aria-hidden="true">
                <p.Icon size={20} strokeWidth={1.5} className="pil-icon" />
              </div>
              <span className="pil-num" aria-hidden="true">{p.num}</span>
            </div>

            <h3 className="pil-h3">{p.title}</h3>
            <div className="pil-accent" aria-hidden="true" />
            <p className="pil-text">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        /* ── SECTION ── */
        .pil {
          background: #f9f8f5;
          padding: 80px 40px;
        }

        /* ── HEADER ── */
        .pil-header {
          max-width: 640px;
          margin: 0 auto 56px;
          text-align: center;
        }

        /* ── SURTITLE ── */
        .pil-surtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .pil-sur-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .pil-sur-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* ── H2 ── */
        .pil-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.44rem, 3.15vw, 2.16rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #2A2A2A;
          line-height: 1.15;
          margin: 0;
        }
        .pil-h2 em {
          font-style: italic;
          color: #00AD4C;
        }

        /* ── UNDERLINE ── */
        .pil-underline {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          margin: 0.75rem auto 1.25rem;
          border-radius: 2px;
        }

        /* ── DESC ── */
        .pil-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          margin: 0;
        }

        /* ── GRILLE ── */
        .pil-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 0.5px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .pil-card {
          padding: 40px 32px;
          border-right: 0.5px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          cursor: pointer;
          position: relative;
          z-index: 1;
          transition:
            background 0.4s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .pil-card:last-child {
          border-right: none;
        }

        /* ── HOVER + ACTIVE ── */
        .pil-card:hover,
        .pil-card--active {
          background: #045627;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(4,86,39,0.15);
          z-index: 2;
        }

        /* ── CARD TOP ── */
        .pil-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        /* ── ICÔNE ── */
        .pil-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0faf4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.4s ease;
        }
        .pil-icon {
          color: #00AD4C;
          transition: color 0.4s ease;
        }
        .pil-card:hover .pil-icon-wrap,
        .pil-card--active .pil-icon-wrap {
          background: rgba(255,255,255,0.08);
        }
        .pil-card:hover .pil-icon,
        .pil-card--active .pil-icon {
          color: #A5CE46;
        }

        /* ── NUMÉRO WATERMARK ── */
        .pil-num {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 80px;
          font-weight: 700;
          color: #f0faf4;
          line-height: 1;
          user-select: none;
          transition: color 0.4s ease;
        }
        .pil-card:hover .pil-num,
        .pil-card--active .pil-num {
          color: rgba(255,255,255,0.05);
        }

        /* ── H3 ── */
        .pil-h3 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0 0 8px;
          transition: color 0.4s ease;
        }
        .pil-card:hover .pil-h3,
        .pil-card--active .pil-h3 {
          color: #ffffff;
        }

        /* ── ACCENT ── */
        .pil-accent {
          width: 32px;
          height: 2px;
          background: #00AD4C;
          margin-bottom: 18px;
          transition: background 0.4s ease;
        }
        .pil-card:hover .pil-accent,
        .pil-card--active .pil-accent {
          background: #A5CE46;
        }

        /* ── TEXTE ── */
        .pil-text {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #4A4A4A;
          line-height: 1.8;
          text-align: justify;
          text-align-last: left;
          flex: 1;
          margin: 0;
          transition: color 0.4s ease;
        }
        .pil-card:hover .pil-text,
        .pil-card--active .pil-text {
          color: #ffffff;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .pil {
            padding: 56px 24px;
          }
          .pil-grid {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .pil-card {
            border-right: none;
            border-bottom: 0.5px solid #e5e7eb;
          }
          .pil-card:last-child {
            border-bottom: none;
          }
          .pil-card:hover,
          .pil-card--active {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pil-card,
          .pil-icon-wrap,
          .pil-icon,
          .pil-num,
          .pil-h3,
          .pil-accent,
          .pil-text {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
