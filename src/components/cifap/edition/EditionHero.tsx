import Link from 'next/link'
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import type { CifapEdition } from '@/lib/cifap-editions'

const C_GREEN = '#97C459'
const FALLBACK_IMG = '/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg'

interface Props {
  edition: CifapEdition
  toutes: CifapEdition[]
  locale: string
}

export default function EditionHero({ edition: e, toutes, locale }: Props) {
  const bgImage = e.hero_image ?? FALLBACK_IMG

  return (
    <section className="eh" aria-labelledby="eh-titre">

      <div className="eh-bg" style={{ backgroundImage: `url('${bgImage}')` }} aria-hidden />
      <div className="eh-overlay" aria-hidden />

      <div className="eh-body">

        {/* Breadcrumb */}
        <nav className="eh-bc" aria-label="Fil d'Ariane">
          <Link href={`/${locale}`} className="eh-bc-link">Accueil</Link>
          <span className="eh-bc-sep" aria-hidden>›</span>
          <Link href={`/${locale}/programmes`} className="eh-bc-link">Programmes</Link>
          <span className="eh-bc-sep" aria-hidden>›</span>
          <Link href={`/${locale}/programmes/cifap`} className="eh-bc-link">CIFAP</Link>
          <span className="eh-bc-sep" aria-hidden>›</span>
          <span className="eh-bc-curr">{e.numero}e édition {e.annee}</span>
        </nav>

        {/* Label */}
        <div className="eh-label">
          <span className="eh-label-line" aria-hidden />
          <span>CIFAP — {e.numero}E ÉDITION · {e.annee}</span>
        </div>

        {/* H1 */}
        <h1 id="eh-titre" className="eh-h1">
          {e.titre_ligne1}{' '}
          <em>{e.titre_ligne2}</em>
        </h1>

        {/* Lead */}
        <p className="eh-lead">{e.theme}</p>

        {/* Meta */}
        <div className="eh-meta">
          <span className="eh-meta-item">
            <CalendarDays size={14} aria-hidden="true" />
            {e.dates}
          </span>
          <span className="eh-meta-sep" aria-hidden>·</span>
          <span className="eh-meta-item">
            <Clock size={14} aria-hidden="true" />
            {e.jours_formation} jours
          </span>
          <span className="eh-meta-sep" aria-hidden>·</span>
          <span className="eh-meta-item">
            <MapPin size={14} aria-hidden="true" />
            {e.lieu}
          </span>
          <span className="eh-meta-sep" aria-hidden>·</span>
          <span className="eh-meta-item">
            <Users size={14} aria-hidden="true" />
            {e.participants} · {e.pays_representes} pays
          </span>
        </div>

        {/* Timeline éditions */}
        <div className="eh-timeline">
          {toutes.map((ed) => (
            <Link
              key={ed.slug}
              href={`/${locale}/programmes/cifap/${ed.slug}`}
              className={`eh-tl-btn${ed.slug === e.slug ? ' eh-tl-btn--active' : ''}`}
            >
              {ed.numero}e éd. {ed.annee}
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        .eh {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .eh-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }
        .eh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5,12,5,0.88) 50%,
            rgba(5,12,5,0.40) 100%
          );
          z-index: 1;
        }
        .eh-body {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
        }

        /* Breadcrumb */
        .eh-bc {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 32px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
        }
        .eh-bc-link { color: #ffffff; text-decoration: none; transition: color 0.2s; }
        .eh-bc-link:hover { color: #ffffff; }
        .eh-bc-sep  { color: rgba(255,255,255,0.7); }
        .eh-bc-curr { color: #ffffff; }

        /* Label */
        .eh-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
          font-family: 'Outfit', var(--font-body), sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${C_GREEN};
        }
        .eh-label-line { display: block; width: 28px; height: 1.5px; background: ${C_GREEN}; flex-shrink: 0; }

        /* H1 */
        .eh-h1 {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: clamp(29px, 4vw, 47px);
          font-weight: 700; line-height: 1.1;
          color: rgb(246,243,238); max-width: 900px;
          margin: 0 0 16px;
        }
        .eh-h1 em { font-style: normal; color: rgb(246,243,238); }

        /* Lead */
        .eh-lead {
          font-family: 'Source Serif 4', var(--font-source-serif), serif;
          font-size: 1.05rem; font-weight: 400; line-height: 1.7;
          color: #ffffff; max-width: 560px;
          margin: 0 0 24px;
        }

        /* Meta */
        .eh-meta {
          display: flex; flex-wrap: wrap; align-items: center;
          gap: 8px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #ffffff;
          margin-bottom: 32px;
        }
        .eh-meta-item { display: flex; align-items: center; gap: 5px; }
        .eh-meta-sep  { color: rgba(255,255,255,0.3); }

        /* Timeline */
        .eh-timeline {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .eh-tl-btn {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          padding: 5px 14px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
          color: #ffffff;
        }
        .eh-tl-btn:hover { color: #ffffff; }
        .eh-tl-btn--active {
          background: ${C_GREEN};
          color: #0a2618;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .eh { min-height: 520px; }
          .eh-body { padding: 60px 24px 40px; }
          .eh-meta { flex-direction: column; align-items: flex-start; gap: 6px; }
          .eh-meta-sep { display: none; }
        }
        @media (max-width: 480px) {
          .eh { min-height: 540px; }
          .eh-body { padding: 56px 20px 36px; }
          .eh-h1 { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
