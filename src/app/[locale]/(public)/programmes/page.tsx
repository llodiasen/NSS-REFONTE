import type { Metadata } from 'next'
import Link from 'next/link'
import ProgrammeHero from '@/components/sections/ProgrammeHero'
import StatsSection  from '@/components/sections/StatsSection'
import ProgrammeCard from '@/components/sections/ProgrammeCard'

export const metadata: Metadata = {
  title: 'Nos Programmes — Mouvement NSS',
  description:
    'Découvrez les 3 programmes du mouvement NSS : Agroécologie Paysanne, Rencontres & Dialogues, Foires Paysannes — pour former, rassembler et transformer les communautés rurales.',
}

const STATS = [
  { value: '175 000', label: 'femmes mobilisées' },
  { value: '14',      label: "pays d'Afrique"    },
  { value: '500+',    label: 'foires paysannes'  },
  { value: '14 ans',  label: "d'engagement"      },
]

const CARDS = [
  {
    eyebrow:     'PROGRAMME 01',
    title:       'Agroécologie Paysanne',
    description: 'Valoriser les savoirs paysans, les semences traditionnelles et la biodiversité au service d\'une souveraineté alimentaire durable pour les femmes rurales d\'Afrique de l\'Ouest.',
    href:        '/fr/programmes/agroecologie',
    imageSrc:    '/images/programmes/hero-agroecologie.jpg',
    pillLabel:   'AGROÉCOLOGIE',
  },
  {
    eyebrow:     'PROGRAMME 02',
    title:       'Rencontres & Dialogues',
    description: 'Des espaces de plaidoyer, de convergence et de dialogue pour que les femmes rurales participent pleinement aux décisions sur l\'agriculture et la souveraineté alimentaire.',
    href:        '/fr/programmes/rencontres',
    imageSrc:    '/images/programmes/hero-rencontres.jpg',
    pillLabel:   'RENCONTRES',
  },
  {
    eyebrow:     'PROGRAMME 03',
    title:       'Foires Paysannes',
    description: 'Des foires où les savoirs se transmettent, les semences s\'échangent et les femmes paysannes affirment leur souveraineté alimentaire devant toute la communauté.',
    href:        '/fr/programmes/foires',
    imageSrc:    '/images/programmes/hero-foires.jpg',
    pillLabel:   'FOIRES',
  },
]

export default async function ProgrammesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  return (
    <>
      {/* 1 — Hero */}
      <ProgrammeHero
        eyebrow="NOS ACTIONS"
        title="Nos Programmes"
        subtitle="175 000 femmes rurales. 14 pays. Une seule mission."
        imageSrc="/images/programmes/hero-hub.jpg"
      />

      {/* 2 — Intro */}
      <section className="phub-intro" aria-labelledby="phub-intro-titre">
        <div className="phub-intro__wrap">
          <div className="phub-intro__left">
            <span className="phub-intro__eyebrow">QUI SOMMES-NOUS</span>
            <h2 id="phub-intro-titre" className="phub-intro__h2">
              Femmes <em>qui décident.</em>
            </h2>
            <p className="phub-intro__text">
              Depuis 2011, le mouvement NSS accompagne les femmes rurales d&apos;Afrique de l&apos;Ouest
              pour qu&apos;elles deviennent actrices de leur souveraineté alimentaire — à travers
              la formation, le plaidoyer et les foires paysannes.
            </p>
            <p className="phub-intro__text">
              Nos trois programmes sont nés du terrain, conçus avec les femmes,
              pour répondre à leurs réalités concrètes.
            </p>
          </div>
          <div className="phub-intro__right">
            <span className="phub-intro__stat-value">175 000</span>
            <span className="phub-intro__stat-label">femmes rurales engagées dans le mouvement NSS à travers 14 pays d&apos;Afrique de l&apos;Ouest</span>
          </div>
        </div>
      </section>

      {/* 3 — Stats */}
      <StatsSection stats={STATS} />

      {/* 4 — Nos 3 Programmes */}
      <section className="phub-cards" aria-labelledby="phub-cards-titre">
        <div className="phub-cards__wrap">
          <span className="phub-cards__eyebrow">NOS TROIS PROGRAMMES</span>
          <h2 id="phub-cards-titre" className="phub-cards__h2">
            Agir <em>sur le terrain.</em>
          </h2>
          <div className="phub-cards__grid">
            {CARDS.map((card) => (
              <ProgrammeCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <section className="phub-cta" aria-label="Rejoindre le mouvement">
        <div className="phub-cta__wrap">
          <h2 className="phub-cta__h2">Rejoindre <em>le mouvement.</em></h2>
          <p className="phub-cta__sub">
            Partagez-vous notre vision ? Adhérez à NSS et rejoignez 175&nbsp;000 femmes rurales
            qui transforment les systèmes alimentaires en Afrique de l&apos;Ouest.
          </p>
          <Link href="/fr/agir/rejoindre" className="phub-cta__btn">
            Adhérer au mouvement
          </Link>
        </div>
      </section>

      <style>{`
        /* ── Intro ── */
        .phub-intro {
          background: #ffffff;
          border-bottom: 1px solid rgba(0,173,76,0.08);
        }
        .phub-intro__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .phub-intro__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
        }
        .phub-intro__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .phub-intro__h2 em { font-style: italic; color: #00AD4C; }
        .phub-intro__text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #4A4A4A;
          margin: 0 0 16px;
        }
        .phub-intro__right {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 32px;
          background: #FAFAF8;
          border: 1px solid rgba(0,173,76,0.10);
          border-radius: 4px;
        }
        .phub-intro__stat-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 64px;
          font-weight: 600;
          color: #E8A838;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .phub-intro__stat-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: #4A4A4A;
          margin-top: 12px;
        }

        /* ── Cards ── */
        .phub-cards {
          background: #FAFAF8;
        }
        .phub-cards__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }
        .phub-cards__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
          text-align: center;
        }
        .phub-cards__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 48px;
          letter-spacing: -0.01em;
          text-align: center;
        }
        .phub-cards__h2 em { font-style: italic; color: #00AD4C; }
        .phub-cards__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── CTA ── */
        .phub-cta {
          background: #045627;
        }
        .phub-cta__wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .phub-cta__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #F5EDD6;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .phub-cta__h2 em { font-style: italic; color: #A5CE46; }
        .phub-cta__sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #F5EDD6;
          margin: 0;
          max-width: 560px;
        }
        .phub-cta__btn {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
          padding: 14px 32px;
          border-radius: 4px;
          transition: background 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .phub-cta__btn:hover {
          background: #008f3e;
          border-color: #008f3e;
          transform: scale(1.05);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .phub-cards__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .phub-intro__wrap { grid-template-columns: 1fr; gap: 36px; padding: 52px 24px; }
          .phub-intro__h2 { font-size: 36px; }
          .phub-cards__grid { grid-template-columns: 1fr; }
          .phub-cards__h2 { font-size: 36px; }
          .phub-cta__h2 { font-size: 36px; }
        }
        @media (max-width: 480px) {
          .phub-intro__h2 { font-size: 28px; }
          .phub-intro__stat-value { font-size: 48px; }
          .phub-cards__wrap { padding: 52px 16px; }
          .phub-cta__wrap { padding: 52px 20px; }
        }
      `}</style>
    </>
  )
}
