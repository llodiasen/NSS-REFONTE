import type { Metadata } from 'next'
import Link from 'next/link'
import ProgrammeHero from '@/components/sections/ProgrammeHero'
import ArticleGrid   from '@/components/sections/ArticleGrid'
import { ARTICLES }  from '@/data/articles'
import type { Article as DataArticle } from '@/data/articles'
import type { Article } from '@/types/article'

export const metadata: Metadata = {
  title: 'Agroécologie Paysanne — Programmes NSS',
  description:
    'Des semences aux savoirs, les femmes rurales NSS protègent la terre et promeuvent l\'agroécologie paysanne en Afrique de l\'Ouest.',
}

function toTypedArticle(a: DataArticle): Article {
  return {
    id:        a.id,
    title:     a.title,
    excerpt:   a.excerpt,
    image:     a.coverUrl ?? '/images/placeholder.jpg',
    date:      a.publishedAt,
    pays:      a.location?.split(',')[1]?.trim().split('—')[0]?.trim(),
    type:      a.type ?? 'actualite',
    programme: a.programme,
    slug:      a.slug,
  }
}

const agroArticles: Article[] = ARTICLES
  .filter((a) => a.programme === 'agroecologie')
  .map(toTypedArticle)

const FILTER_TABS = ['Tous', 'Sénégal', 'Mali', 'Burkina Faso', 'Guinée', 'Multi-pays']

export default async function AgroecologiePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  return (
    <>
      {/* 1 — Hero */}
      <ProgrammeHero
        eyebrow="PROGRAMME 01"
        title="Agroécologie Paysanne"
        subtitle="Des semences aux savoirs, les femmes protègent la terre."
        imageSrc="/images/programmes/hero-agroecologie.jpg"
      />

      {/* 2 — Intro */}
      <section className="agro-intro" aria-labelledby="agro-intro-titre">
        <div className="agro-intro__wrap">
          <div className="agro-intro__left">
            <span className="agro-intro__eyebrow">NOTRE ACTION</span>
            <h2 id="agro-intro-titre" className="agro-intro__h2">
              Nourrir <em>sans dégrader.</em>
            </h2>
            <p className="agro-intro__text">
              L&apos;agroécologie paysanne est au cœur de l&apos;action NSS. En valorisant les savoirs
              traditionnels, les semences locales et la biodiversité, nous accompagnons les femmes
              rurales vers une agriculture durable, souveraine et résistante au changement climatique.
            </p>
            <p className="agro-intro__text">
              Formations pratiques, camps d&apos;échange et démonstrations en champ-école paysans
              permettent à des milliers de femmes de s&apos;approprier des techniques accessibles
              et reproductibles dans leurs communautés.
            </p>
          </div>
          <div className="agro-intro__right">
            <div className="agro-intro__fact">
              <span className="agro-intro__fact-value">500+</span>
              <span className="agro-intro__fact-label">Associations engagées en agroécologie paysanne</span>
            </div>
            <div className="agro-intro__fact">
              <span className="agro-intro__fact-value">14</span>
              <span className="agro-intro__fact-label">Pays couverts par le réseau NSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Grille articles filtrée */}
      <ArticleGrid
        articles={agroArticles}
        filterTabs={FILTER_TABS}
        filterKey="pays"
      />

      {/* 4 — CTA bas */}
      <section className="agro-cta" aria-label="Voir tous les programmes">
        <div className="agro-cta__wrap">
          <Link href="/fr/programmes" className="agro-cta__link">
            ← Voir tous nos programmes
          </Link>
        </div>
      </section>

      <style>{`
        /* ── Intro ── */
        .agro-intro { background: #FAFAF8; }
        .agro-intro__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .agro-intro__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
        }
        .agro-intro__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .agro-intro__h2 em { font-style: italic; color: #00AD4C; }
        .agro-intro__text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #4A4A4A;
          margin: 0 0 16px;
        }
        .agro-intro__right {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 8px;
        }
        .agro-intro__fact {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 28px 24px;
          background: #ffffff;
          border: 1px solid rgba(0,173,76,0.10);
          border-left: 3px solid #00AD4C;
          border-radius: 2px;
        }
        .agro-intro__fact-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 48px;
          font-weight: 600;
          color: #E8A838;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .agro-intro__fact-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #4A4A4A;
          line-height: 1.5;
        }

        /* ── CTA bas ── */
        .agro-cta { background: #045627; }
        .agro-cta__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }
        .agro-cta__link {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #A5CE46;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .agro-cta__link:hover { color: #ffffff; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .agro-intro__wrap { grid-template-columns: 1fr; gap: 36px; padding: 52px 24px; }
          .agro-intro__h2 { font-size: 36px; }
        }
        @media (max-width: 480px) {
          .agro-intro__h2 { font-size: 28px; }
          .agro-intro__fact-value { font-size: 40px; }
        }
      `}</style>
    </>
  )
}
