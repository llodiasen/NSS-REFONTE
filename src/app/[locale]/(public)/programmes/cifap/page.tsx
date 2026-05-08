import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIFAP — Camp International de Formation en Agroécologie Paysanne | NSS',
  description:
    'Le CIFAP réunit chaque année ~70 leaders paysannes de 8 pays d\'Afrique de l\'Ouest pour une formation intensive en agroécologie paysanne à Niaguis, Casamance, Sénégal.',
}

const EDITIONS = [
  {
    num: '01',
    year: '2022',
    theme: 'Techniques de conduite des cultures + bio-intrants',
    detail: 'Fondation du modèle pédagogique CIFAP. Première rencontre internationale des associations NSS autour de l\'agroécologie pratique.',
    tag: 'Fondation',
  },
  {
    num: '02',
    year: '2023',
    theme: 'Production des semences horticoles maraîchères paysannes',
    detail: '8 pays représentés · 1 semaine intensive · Expert invité du Burkina Faso pour la transmission des savoirs semenciers.',
    tag: 'Semences',
  },
  {
    num: '03',
    year: '2024',
    theme: 'Techniques de production et d\'utilisation des bio-protecteurs',
    detail: '14 associations · 50+ participantes · 1–7 septembre 2024 · Fabrication et utilisation des biopesticides naturels.',
    tag: 'Protection',
  },
  {
    num: '04',
    year: '2025',
    theme: 'Techniques de conduite des cultures horticoles en agroécologie',
    detail: '8 pays · ~70 leaders & techniciens · 14–21 septembre 2025 · Maîtrise complète du cycle cultural en agroécologie.',
    tag: 'Horticulture',
  },
]

const PAYS = [
  'Burkina Faso', 'Gambie', 'Ghana', 'Guinée',
  'Guinée-Bissau', 'Côte d\'Ivoire', 'Mali', 'Sénégal',
]

const PARTNERS = ['NSS', 'Fahamu Africa', 'FENOP', 'Enda Pronat']

export default async function CIFAPPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  return (
    <>
      {/* ════════════════════════════════════════════════════
          ① HERO
      ════════════════════════════════════════════════════ */}
      <section className="ch-hero" aria-label="CIFAP — présentation">
        <div className="ch-hero__overlay" />
        <div className="ch-hero__content">
          <span className="ch-hero__eyebrow">PROGRAMME CIFAP</span>
          <h1 className="ch-hero__h1">CIFAP</h1>
          <p className="ch-hero__sub">Camp International de Formation en Agroécologie Paysanne</p>
          <div className="ch-hero__loc">
            <span className="ch-hero__loc-dot" aria-hidden="true" />
            Centre Karonghen Wati Naning · Niaguis, Casamance, Sénégal
          </div>
        </div>
        <div className="ch-hero__bar">
          <div className="ch-hero__bar-inner">
            <div className="ch-hero__stat">
              <span className="ch-hero__stat-val">4</span>
              <span className="ch-hero__stat-lbl">éditions</span>
            </div>
            <div className="ch-hero__sep" aria-hidden="true" />
            <div className="ch-hero__stat">
              <span className="ch-hero__stat-val">8</span>
              <span className="ch-hero__stat-lbl">pays représentés</span>
            </div>
            <div className="ch-hero__sep" aria-hidden="true" />
            <div className="ch-hero__stat">
              <span className="ch-hero__stat-val">~70</span>
              <span className="ch-hero__stat-lbl">leaders formées/an</span>
            </div>
            <div className="ch-hero__sep" aria-hidden="true" />
            <div className="ch-hero__stat">
              <span className="ch-hero__stat-val">2022</span>
              <span className="ch-hero__stat-lbl">première édition</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ② INTRODUCTION
      ════════════════════════════════════════════════════ */}
      <section className="ch-intro" aria-labelledby="ch-intro-titre">
        <div className="ch-intro__wrap">
          <div className="ch-intro__left">
            <span className="ch-intro__eyebrow">QU'EST-CE QUE LE CIFAP ?</span>
            <h2 id="ch-intro-titre" className="ch-intro__h2">
              Former. <em>Relier. Durer.</em>
            </h2>
            <p className="ch-intro__text">
              Le CIFAP est bien plus qu&apos;une formation : c&apos;est un espace de rencontre et de
              transmission entre femmes paysannes de toute l&apos;Afrique de l&apos;Ouest. Chaque édition
              renforce les compétences techniques en agroécologie, tisse des liens entre les associations
              membres de NSS, et ancre des pratiques reproductibles dans les communautés d&apos;origine.
            </p>
            <p className="ch-intro__text">
              La transition agroécologique ne se décrète pas — elle se construit collectivement
              par la transmission et le lien.
            </p>
            <div className="ch-intro__pillars">
              {['Former', 'Relier', 'Durer'].map((p) => (
                <span key={p} className="ch-intro__pillar">{p}</span>
              ))}
            </div>
          </div>
          <div className="ch-intro__right">
            <blockquote className="ch-intro__quote">
              <p className="ch-intro__quote-text">
                « Dans l&apos;agroécologie, nous recherchons la souveraineté alimentaire.
                Pour être souverain, il faut avoir le droit de produire ce que vous voulez manger. »
              </p>
              <footer className="ch-intro__quote-foot">
                <strong>Mariama Sonko</strong>
                <span>Présidente de NSS</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ③ TIMELINE DES 4 ÉDITIONS
      ════════════════════════════════════════════════════ */}
      <section className="ch-tl" aria-labelledby="ch-tl-titre">
        <div className="ch-tl__wrap">
          <span className="ch-tl__eyebrow">PARCOURS DES ÉDITIONS</span>
          <h2 id="ch-tl-titre" className="ch-tl__h2">
            Du sol <em>à l&apos;horticulture.</em>
          </h2>
          <ol className="ch-tl__list">
            {EDITIONS.map((ed) => (
              <li key={ed.num} className="ch-tl__item">
                <div className="ch-tl__dot-col">
                  <div className="ch-tl__dot" aria-hidden="true">
                    <span>{ed.num}</span>
                  </div>
                </div>
                <div className="ch-tl__card">
                  <div className="ch-tl__card-head">
                    <span className="ch-tl__year">{ed.year}</span>
                    <span className="ch-tl__tag">{ed.tag}</span>
                  </div>
                  <p className="ch-tl__theme">{ed.theme}</p>
                  <p className="ch-tl__detail">{ed.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ④ TROIS PILIERS PÉDAGOGIQUES
      ════════════════════════════════════════════════════ */}
      <section className="ch-pil" aria-labelledby="ch-pil-titre">
        <div className="ch-pil__wrap">
          <span className="ch-pil__eyebrow">PÉDAGOGIE</span>
          <h2 id="ch-pil-titre" className="ch-pil__h2">
            Trois piliers <em>pour apprendre.</em>
          </h2>
          <div className="ch-pil__grid">
            <div className="ch-pil__card">
              <span className="ch-pil__icon" aria-hidden="true">🌱</span>
              <h3 className="ch-pil__name">La Terre</h3>
              <p className="ch-pil__desc">
                Rotation des cultures, compostage, fertilité des sols et pratiques
                culturales durables pour une production autonome et résiliente.
              </p>
            </div>
            <div className="ch-pil__card">
              <span className="ch-pil__icon" aria-hidden="true">🌾</span>
              <h3 className="ch-pil__name">Les Semences</h3>
              <p className="ch-pil__desc">
                Sélection, conservation et échange des semences paysannes reproductibles
                pour garantir la souveraineté semencière des communautés rurales.
              </p>
            </div>
            <div className="ch-pil__card">
              <span className="ch-pil__icon" aria-hidden="true">💧</span>
              <h3 className="ch-pil__name">L&apos;Eau</h3>
              <p className="ch-pil__desc">
                Gestion écologique des ressources hydriques, systèmes d&apos;irrigation
                adaptés et résilience face aux aléas du changement climatique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ⑤ HUIT PAYS, UNE VOIX
      ════════════════════════════════════════════════════ */}
      <section className="ch-pays" aria-labelledby="ch-pays-titre">
        <div className="ch-pays__wrap">
          <span className="ch-pays__eyebrow">REPRÉSENTATION CONTINENTALE</span>
          <h2 id="ch-pays-titre" className="ch-pays__h2">
            Huit pays, <em>une voix.</em>
          </h2>
          <div className="ch-pays__badges" role="list" aria-label="Pays représentés">
            {PAYS.map((p) => (
              <span key={p} className="ch-pays__badge" role="listitem">{p}</span>
            ))}
          </div>
          <blockquote className="ch-pays__quote">
            <p>
              « Du Burkina Faso à la Gambie, du Ghana à la Guinée-Bissau — des femmes rurales
              portant les réalités de leurs territoires et une même conviction : l&apos;agroécologie
              paysanne est la voie vers la souveraineté alimentaire. »
            </p>
          </blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ⑥ SAVOIRS ENDOGÈNES
      ════════════════════════════════════════════════════ */}
      <section className="ch-sav" aria-labelledby="ch-sav-titre">
        <div className="ch-sav__wrap">
          <div className="ch-sav__left">
            <span className="ch-sav__eyebrow">PHILOSOPHIE</span>
            <h2 id="ch-sav-titre" className="ch-sav__h2">
              Savoirs <em>endogènes.</em>
            </h2>
            <p className="ch-sav__text">
              Les savoirs endogènes ne sont pas à remplacer — ils sont à enrichir et à valoriser.
              C&apos;est la combinaison de techniques innovantes et de savoirs locaux qui construit
              une souveraineté durable, ancrée dans les réalités des femmes paysannes d&apos;Afrique de l&apos;Ouest.
            </p>
            <p className="ch-sav__text">
              Le CIFAP ne transmet pas un savoir venu d&apos;ailleurs — il crée les conditions
              pour que les femmes reconnaissent, partagent et amplifient ce qu&apos;elles savent déjà.
            </p>
          </div>
          <blockquote className="ch-sav__quote">
            <p className="ch-sav__quote-text">
              « L&apos;agroécologie, ce n&apos;est pas de l&apos;anarchie — c&apos;est quelque chose de bien ordonné. »
            </p>
            <footer className="ch-sav__quote-foot">
              <strong>Monique Noumo Konan</strong>
              <span>Coordinatrice NSS Côte d&apos;Ivoire</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ⑦ PARTENAIRES
      ════════════════════════════════════════════════════ */}
      <section className="ch-part" aria-label="Partenaires du CIFAP">
        <div className="ch-part__wrap">
          <span className="ch-part__eyebrow">ILS SOUTIENNENT LE CIFAP</span>
          <div className="ch-part__list" role="list">
            {PARTNERS.map((p) => (
              <span key={p} className="ch-part__name" role="listitem">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ⑧ CTA DOUBLE
      ════════════════════════════════════════════════════ */}
      <section className="ch-cta" aria-label="Rejoindre le CIFAP">
        <div className="ch-cta__wrap">
          <h2 className="ch-cta__h2">Rejoindre <em>le prochain CIFAP.</em></h2>
          <p className="ch-cta__sub">
            La prochaine édition se tient en septembre 2026 à Niaguis, Casamance.
            Rejoignez les 70+ leaders paysannes qui transforment l&apos;agriculture
            en Afrique de l&apos;Ouest.
          </p>
          <div className="ch-cta__btns">
            <Link href="/fr/agir/rejoindre" className="ch-cta__btn ch-cta__btn--primary">
              Participer au prochain CIFAP
            </Link>
            <Link href="/fr/agir/soutenir" className="ch-cta__btn ch-cta__btn--outline">
              Soutenir le programme
            </Link>
          </div>
          <Link href="/fr/programmes" className="ch-cta__back">
            ← Voir tous nos programmes
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`

        /* ──────────────────────────────────────────────────
           ① HERO
        ────────────────────────────────────────────────── */
        .ch-hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: url('/images/programmes/hero-agroecologie.jpg') center / cover no-repeat;
          overflow: hidden;
        }
        .ch-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(4,86,39,0.20) 0%,
            rgba(4,86,39,0.55) 45%,
            rgba(4,86,39,0.88) 100%
          );
        }
        .ch-hero__content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 52px;
          width: 100%;
        }
        .ch-hero__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 18px;
        }
        .ch-hero__h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(80px, 13vw, 152px);
          font-weight: 700;
          line-height: 0.88;
          color: #ffffff;
          margin: 0 0 22px;
          letter-spacing: -0.025em;
        }
        .ch-hero__sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: clamp(14px, 2vw, 19px);
          font-weight: 300;
          color: rgba(245,237,214,0.90);
          margin: 0 0 28px;
          max-width: 540px;
          line-height: 1.55;
        }
        .ch-hero__loc {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(165,206,70,0.35);
          border-radius: 100px;
          padding: 9px 18px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #F5EDD6;
          backdrop-filter: blur(6px);
        }
        .ch-hero__loc-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
          animation: cifap-pulse 2.2s ease-in-out infinite;
        }
        @keyframes cifap-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.35); }
        }

        /* Stats bar */
        .ch-hero__bar {
          position: relative;
          z-index: 1;
          background: rgba(4,86,39,0.88);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(165,206,70,0.18);
        }
        .ch-hero__bar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          padding: 0 24px;
        }
        .ch-hero__stat-val {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 38px;
          font-weight: 700;
          color: #E8A838;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ch-hero__stat-lbl {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(245,237,214,0.65);
          margin-top: 5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ch-hero__sep {
          width: 1px;
          height: 44px;
          background: rgba(165,206,70,0.18);
          flex-shrink: 0;
        }

        /* ──────────────────────────────────────────────────
           ② INTRODUCTION
        ────────────────────────────────────────────────── */
        .ch-intro {
          background: #ffffff;
          border-bottom: 1px solid rgba(0,173,76,0.07);
        }
        .ch-intro__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 24px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .ch-intro__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
        }
        .ch-intro__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .ch-intro__h2 em { font-style: italic; color: #00AD4C; }
        .ch-intro__text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #4A4A4A;
          margin: 0 0 16px;
          text-align: justify;
        }
        .ch-intro__pillars {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .ch-intro__pillar {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #045627;
          background: rgba(0,173,76,0.07);
          border: 1px solid rgba(0,173,76,0.18);
          border-radius: 100px;
          padding: 6px 18px;
        }
        .ch-intro__quote {
          background: #FAFAF8;
          border: 1px solid rgba(0,173,76,0.08);
          border-left: 4px solid #E8A838;
          border-radius: 4px;
          padding: 38px 34px;
          margin: 0;
        }
        .ch-intro__quote-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 21px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.55;
          color: #1a1a1a;
          margin: 0 0 22px;
        }
        .ch-intro__quote-foot {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ch-intro__quote-foot strong {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #045627;
        }
        .ch-intro__quote-foot span {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #999;
        }

        /* ──────────────────────────────────────────────────
           ③ TIMELINE
        ────────────────────────────────────────────────── */
        .ch-tl {
          background: #FAFAF8;
          border-bottom: 1px solid rgba(0,173,76,0.05);
        }
        .ch-tl__wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 88px 24px;
        }
        .ch-tl__eyebrow {
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
        .ch-tl__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 64px;
          letter-spacing: -0.01em;
          text-align: center;
        }
        .ch-tl__h2 em { font-style: italic; color: #00AD4C; }
        .ch-tl__list {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .ch-tl__list::before {
          content: '';
          position: absolute;
          left: 27px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #A5CE46 0%, #00AD4C 50%, #045627 100%);
          border-radius: 2px;
        }
        .ch-tl__item {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          padding-bottom: 52px;
          position: relative;
        }
        .ch-tl__item:last-child { padding-bottom: 0; }
        .ch-tl__dot-col {
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          width: 56px;
          display: flex;
          justify-content: center;
        }
        .ch-tl__dot {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #00AD4C;
          border: 3px solid #FAFAF8;
          box-shadow: 0 0 0 2px #00AD4C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ch-tl__dot span {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }
        .ch-tl__card {
          background: #ffffff;
          border: 0.5px solid #E4E2DC;
          border-left: 3px solid #E4E2DC;
          border-radius: 8px;
          padding: 28px 28px 24px;
          flex: 1;
          transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ch-tl__card:hover {
          border-left-color: #00AD4C;
          box-shadow: 0 8px 28px rgba(0,173,76,0.09);
        }
        .ch-tl__card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .ch-tl__year {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 34px;
          font-weight: 700;
          color: #E8A838;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ch-tl__tag {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #045627;
          background: rgba(165,206,70,0.18);
          border-radius: 100px;
          padding: 4px 12px;
        }
        .ch-tl__theme {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
          margin: 0 0 10px;
        }
        .ch-tl__detail {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #888;
          line-height: 1.6;
          margin: 0;
        }

        /* ──────────────────────────────────────────────────
           ④ TROIS PILIERS
        ────────────────────────────────────────────────── */
        .ch-pil {
          background: #ffffff;
          border-bottom: 1px solid rgba(0,173,76,0.05);
        }
        .ch-pil__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 24px;
          text-align: center;
        }
        .ch-pil__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
        }
        .ch-pil__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 56px;
          letter-spacing: -0.01em;
        }
        .ch-pil__h2 em { font-style: italic; color: #00AD4C; }
        .ch-pil__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ch-pil__card {
          background: #FAFAF8;
          border: 1px solid rgba(0,173,76,0.08);
          border-top: 3px solid #00AD4C;
          border-radius: 8px;
          padding: 44px 28px 38px;
          text-align: center;
          transition: box-shadow 0.2s ease, transform 0.25s ease;
        }
        .ch-pil__card:hover {
          box-shadow: 0 12px 36px rgba(0,173,76,0.11);
          transform: translateY(-5px);
        }
        .ch-pil__icon {
          display: block;
          font-size: 42px;
          margin-bottom: 22px;
        }
        .ch-pil__name {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 26px;
          font-weight: 600;
          color: #045627;
          margin: 0 0 14px;
          line-height: 1.1;
        }
        .ch-pil__desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #4A4A4A;
          margin: 0;
          text-align: justify;
        }

        /* ──────────────────────────────────────────────────
           ⑤ HUIT PAYS
        ────────────────────────────────────────────────── */
        .ch-pays {
          background: #045627;
        }
        .ch-pays__wrap {
          max-width: 1000px;
          margin: 0 auto;
          padding: 88px 24px;
          text-align: center;
        }
        .ch-pays__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 20px;
        }
        .ch-pays__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #F5EDD6;
          margin: 0 0 52px;
          letter-spacing: -0.01em;
        }
        .ch-pays__h2 em { font-style: italic; color: #A5CE46; }
        .ch-pays__badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
        }
        .ch-pays__badge {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
          color: #045627;
          background: #A5CE46;
          border-radius: 100px;
          padding: 9px 22px;
          text-transform: uppercase;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .ch-pays__badge:hover {
          background: #ffffff;
          color: #045627;
        }
        .ch-pays__quote {
          max-width: 680px;
          margin: 0 auto;
          border-left: 3px solid rgba(165,206,70,0.50);
          padding-left: 28px;
          text-align: left;
        }
        .ch-pays__quote p {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.62;
          color: rgba(245,237,214,0.88);
          margin: 0;
        }

        /* ──────────────────────────────────────────────────
           ⑥ SAVOIRS ENDOGÈNES
        ────────────────────────────────────────────────── */
        .ch-sav {
          background: #F5EDD6;
          border-top: 1px solid rgba(232,168,56,0.18);
          border-bottom: 1px solid rgba(232,168,56,0.18);
        }
        .ch-sav__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 24px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .ch-sav__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #00AD4C;
          margin-bottom: 20px;
        }
        .ch-sav__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #0A0A0A;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
        }
        .ch-sav__h2 em { font-style: italic; color: #045627; }
        .ch-sav__text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: #3a3a2a;
          margin: 0 0 16px;
          text-align: justify;
        }
        .ch-sav__quote {
          background: #ffffff;
          border: 1px solid rgba(232,168,56,0.22);
          border-left: 4px solid #E8A838;
          border-radius: 4px;
          padding: 38px 34px;
          margin: 0;
        }
        .ch-sav__quote-text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 21px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.55;
          color: #1a1a1a;
          margin: 0 0 22px;
        }
        .ch-sav__quote-foot {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ch-sav__quote-foot strong {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #045627;
        }
        .ch-sav__quote-foot span {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #999;
        }

        /* ──────────────────────────────────────────────────
           ⑦ PARTENAIRES
        ────────────────────────────────────────────────── */
        .ch-part {
          background: #ffffff;
          border-bottom: 1px solid rgba(0,173,76,0.07);
        }
        .ch-part__wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px;
          text-align: center;
        }
        .ch-part__eyebrow {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A5CE46;
          margin-bottom: 36px;
        }
        .ch-part__list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
        }
        .ch-part__name {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #2a2a2a;
          text-transform: uppercase;
          opacity: 0.45;
          padding: 10px 36px;
          border-right: 1px solid #E4E2DC;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }
        .ch-part__name:last-child { border-right: none; }
        .ch-part__name:hover { opacity: 1; }

        /* ──────────────────────────────────────────────────
           ⑧ CTA DOUBLE
        ────────────────────────────────────────────────── */
        .ch-cta {
          background: #045627;
        }
        .ch-cta__wrap {
          max-width: 860px;
          margin: 0 auto;
          padding: 96px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .ch-cta__h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 47px;
          font-weight: 600;
          line-height: 1.0;
          color: #F5EDD6;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .ch-cta__h2 em { font-style: italic; color: #A5CE46; }
        .ch-cta__sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.78;
          color: rgba(245,237,214,0.75);
          margin: 0;
          max-width: 560px;
        }
        .ch-cta__btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }
        .ch-cta__btn {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 32px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .ch-cta__btn--primary {
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
        }
        .ch-cta__btn--primary:hover {
          background: #009040;
          border-color: #009040;
          transform: scale(1.04);
        }
        .ch-cta__btn--outline {
          background: transparent;
          color: #F5EDD6;
          border: 1.5px solid rgba(245,237,214,0.45);
        }
        .ch-cta__btn--outline:hover {
          border-color: #A5CE46;
          color: #A5CE46;
        }
        .ch-cta__back {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(165,206,70,0.7);
          text-decoration: none;
          margin-top: 8px;
          transition: color 0.2s ease;
        }
        .ch-cta__back:hover { color: #A5CE46; }

        /* ──────────────────────────────────────────────────
           RESPONSIVE
        ────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .ch-hero { min-height: 70svh; }
          .ch-hero__h1 { font-size: clamp(56px, 16vw, 80px); }
          .ch-hero__bar-inner { flex-wrap: wrap; gap: 12px; padding: 18px 24px; }
          .ch-hero__sep { display: none; }
          .ch-hero__stat { flex: none; width: 46%; padding: 0 8px; }
          .ch-intro__wrap { grid-template-columns: 1fr; gap: 44px; padding: 60px 24px; }
          .ch-intro__h2 { font-size: 36px; }
          .ch-tl__h2 { font-size: 36px; }
          .ch-pil__grid { grid-template-columns: 1fr; }
          .ch-pil__h2 { font-size: 36px; }
          .ch-pays__h2 { font-size: 36px; }
          .ch-sav__wrap { grid-template-columns: 1fr; gap: 44px; padding: 60px 24px; }
          .ch-sav__h2 { font-size: 36px; }
          .ch-cta__h2 { font-size: 36px; }
          .ch-part__name { padding: 10px 20px; font-size: 13px; }
        }
        @media (max-width: 480px) {
          .ch-hero__h1 { font-size: 52px; }
          .ch-intro__h2, .ch-tl__h2, .ch-pil__h2,
          .ch-pays__h2, .ch-sav__h2, .ch-cta__h2 { font-size: 30px; }
          .ch-cta__btns { flex-direction: column; width: 100%; }
          .ch-cta__btn { text-align: center; }
          .ch-tl__wrap { padding: 56px 16px; }
          .ch-tl__list::before { left: 24px; }
          .ch-tl__dot { width: 48px; height: 48px; }
          .ch-tl__dot-col { width: 48px; }
          .ch-part__list { flex-direction: column; gap: 0; }
          .ch-part__name { border-right: none; border-bottom: 1px solid #E4E2DC; width: 100%; }
          .ch-part__name:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  )
}
