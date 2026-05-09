import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Globe, Users, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CIFAP — Camp International de Formation en Agroécologie Paysanne | NSS',
  description:
    'Le CIFAP réunit chaque année des leaders paysannes de 8 pays d\'Afrique de l\'Ouest pour une semaine intensive de formation en agroécologie paysanne à Niaguis, Casamance.',
}

const EDITIONS = [
  {
    year: '2022',
    theme: 'Techniques de conduite des cultures + bio-intrants',
    status: 'past' as const,
  },
  {
    year: '2023',
    theme: 'Production des semences horticoles maraîchères paysannes',
    status: 'past' as const,
  },
  {
    year: '2024',
    theme: 'Techniques de production et d\'utilisation des bio-protecteurs',
    status: 'active' as const,
  },
  {
    year: '2025',
    theme: 'Techniques de conduite des cultures horticoles en agroécologie',
    status: 'recent' as const,
  },
]

const PAYS = [
  { flag: '🇧🇫', name: 'Burkina Faso' },
  { flag: '🇬🇲', name: 'Gambie' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇬🇳', name: 'Guinée' },
  { flag: '🇬🇼', name: 'Guinée-Bissau' },
  { flag: '🇨🇮', name: 'Côte d\'Ivoire' },
  { flag: '🇲🇱', name: 'Mali' },
  { flag: '🇸🇳', name: 'Sénégal' },
]

const OBJECTIFS = [
  {
    icon: '📚',
    title: 'Éducation et sensibilisation',
    desc: 'Former en profondeur aux techniques de production et d\'utilisation des bio-protecteurs, méthodes écologiques essentielles pour protéger les cultures et promouvoir la biodiversité.',
  },
  {
    icon: '🔄',
    title: 'Partage de connaissances',
    desc: 'Faciliter les échanges entre participants de divers horizons pour diffuser savoirs et expériences pratiques en agroécologie paysanne.',
  },
  {
    icon: '💡',
    title: 'Renforcement des capacités',
    desc: 'Offrir des ateliers pratiques animés par des experts pour améliorer les compétences des participantes en techniques agroécologiques applicables sur le terrain.',
  },
  {
    icon: '🌐',
    title: 'Mise en réseau continental',
    desc: 'Créer un espace de réseautage où contacts, projets et pratiques circulent entre femmes rurales de huit pays d\'Afrique de l\'Ouest.',
  },
]

const PARTNERS = ['Fahamu Africa', 'FENOP (Burkina Faso)', 'Enda Pronat']

export default async function CIFAPPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  return (
    <>
      <div className="c24-page">

        {/* ════════════════════════════════════════════════════
            COLONNE PRINCIPALE
        ════════════════════════════════════════════════════ */}
        <main className="c24-main">

          {/* ① HERO */}
          <section className="c24-hero" aria-labelledby="c24-h1">
            {/* Tags */}
            <div className="c24-hero__tags" aria-label="Catégories">
              <span className="c24-hero__tag">Agroécologie</span>
              <span className="c24-hero__tag">Formation</span>
            </div>

            {/* Badge lieu */}
            <p className="c24-hero__loc">
              <MapPin size={12} aria-hidden="true" />
              Centre Karonghen Wati Naning · Niaguis, Casamance, Sénégal
            </p>

            {/* Titre */}
            <h1 id="c24-h1" className="c24-hero__h1">
              Camp International de Formation en Agroécologie Paysanne — CIFAP
            </h1>

            {/* Thème en encadré bordure or */}
            <div className="c24-hero__theme">
              <strong>Thème 2024 :</strong>{' '}
              « Techniques de production et d&apos;utilisation des bio-protecteurs en agroécologie »
            </div>

            {/* Métadonnées */}
            <div className="c24-hero__meta" role="list" aria-label="Informations pratiques">
              <span className="c24-hero__meta-item" role="listitem">
                <Calendar size={13} aria-hidden="true" />
                1–7 septembre 2024
              </span>
              <span className="c24-hero__meta-sep" aria-hidden="true" />
              <span className="c24-hero__meta-item" role="listitem">
                <Clock size={13} aria-hidden="true" />
                5 jours
              </span>
              <span className="c24-hero__meta-sep" aria-hidden="true" />
              <span className="c24-hero__meta-item" role="listitem">
                <Globe size={13} aria-hidden="true" />
                8 pays membres
              </span>
              <span className="c24-hero__meta-sep" aria-hidden="true" />
              <span className="c24-hero__meta-item" role="listitem">
                <Users size={13} aria-hidden="true" />
                50+ participantes
              </span>
            </div>
          </section>

          {/* ② BANDEAU STATUT */}
          <div className="c24-status" role="status" aria-live="polite">
            <strong>3ème édition — Clôturée.</strong>{' '}
            La 4ème édition s&apos;est tenue du 14 au 21 septembre 2025.
          </div>

          {/* ③ PRÉSENTATION */}
          <section className="c24-card" aria-labelledby="c24-pres-h">
            <h2 id="c24-pres-h" className="c24-section-h">Présentation</h2>
            <p className="c24-text">
              Le CIFAP est une initiative annuelle organisée par le mouvement panafricain Nous Sommes
              la Solution (NSS) au Centre Karonghen Wati Naning de Niaguis. Chaque édition réunit des
              femmes rurales, des techniciens agricoles et des leaders communautaires d&apos;Afrique de
              l&apos;Ouest autour d&apos;un thème agroécologique précis — dans une logique de progression
              pédagogique d&apos;une édition à l&apos;autre. Ce camp remplit un triple rôle :{' '}
              <strong>former</strong> aux techniques paysannes durables,{' '}
              <strong>relier</strong> les femmes rurales d&apos;un continent à l&apos;autre, et{' '}
              <strong>durer</strong> en ancrant les savoirs dans les réalités locales.
            </p>
          </section>

          {/* ④ OBJECTIFS */}
          <section className="c24-card" aria-labelledby="c24-obj-h">
            <h2 id="c24-obj-h" className="c24-section-h">Objectifs</h2>
            <div className="c24-obj-grid">
              {OBJECTIFS.map((obj) => (
                <div key={obj.title} className="c24-obj-card">
                  <span className="c24-obj-icon" aria-hidden="true">{obj.icon}</span>
                  <h3 className="c24-obj-name">{obj.title}</h3>
                  <p className="c24-obj-desc">{obj.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ⑤ PARTICIPANTS */}
          <section className="c24-card" aria-labelledby="c24-part-h">
            <h2 id="c24-part-h" className="c24-section-h">Participants</h2>
            <p className="c24-text" style={{ marginBottom: '1rem' }}>
              Représentantes de 14 associations de femmes rurales issues de huit pays :
            </p>
            <div className="c24-pays-badges" role="list" aria-label="Pays représentés">
              {PAYS.map((p) => (
                <span key={p.name} className="c24-pays-badge" role="listitem">
                  <span aria-hidden="true">{p.flag}</span>
                  {p.name}
                </span>
              ))}
            </div>
            <div className="c24-stats-grid" role="list" aria-label="Chiffres clés">
              {[
                { val: '50+',  lbl: 'Participantes (éd. 2024)' },
                { val: '~70',  lbl: 'Leaders formées (éd. 2025)' },
                { val: '14',   lbl: 'Associations membres' },
                { val: '4',    lbl: 'Éditions depuis 2022' },
              ].map((s) => (
                <div key={s.lbl} className="c24-stat-card" role="listitem">
                  <span className="c24-stat-val">{s.val}</span>
                  <span className="c24-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ⑥ CITATION */}
          <blockquote className="c24-quote">
            <p className="c24-quote__text">
              « Dans l&apos;agroécologie, nous recherchons la souveraineté alimentaire.
              Pour être souverain, il faut avoir le droit de produire ce que vous voulez manger. »
            </p>
            <footer className="c24-quote__foot">
              — <strong>Mariama Sonko</strong>, présidente du mouvement NSS
            </footer>
          </blockquote>

          {/* ⑦ THÉMATIQUES */}
          <section className="c24-card" aria-labelledby="c24-them-h">
            <h2 id="c24-them-h" className="c24-section-h">Thématiques abordées</h2>
            <div className="c24-them-grid">
              <div className="c24-them-card">
                <span className="c24-them-icon" aria-hidden="true">🌱</span>
                <h3 className="c24-them-name">La Terre</h3>
                <p className="c24-them-desc">Compost, rotation des cultures, santé des sols</p>
              </div>
              <div className="c24-them-card">
                <span className="c24-them-icon" aria-hidden="true">🌾</span>
                <h3 className="c24-them-name">Les Semences</h3>
                <p className="c24-them-desc">Semences paysannes, souveraineté semencière</p>
              </div>
              <div className="c24-them-card">
                <span className="c24-them-icon" aria-hidden="true">🛡️</span>
                <h3 className="c24-them-name">Bio-protecteurs</h3>
                <p className="c24-them-desc">Protection naturelle, biodiversité agricole</p>
              </div>
            </div>
          </section>

          {/* ⑧ LIEU */}
          <section className="c24-card" aria-labelledby="c24-lieu-h">
            <h2 id="c24-lieu-h" className="c24-section-h">Lieu</h2>
            <div className="c24-lieu">
              <div className="c24-lieu__pin" aria-hidden="true">
                <MapPin size={20} color="#00AD4C" />
              </div>
              <div className="c24-lieu__info">
                <p className="c24-lieu__name">Centre Karonghen Wati Naning</p>
                <p className="c24-lieu__addr">Niaguis, Ziguinchor — Sénégal</p>
                <p className="c24-lieu__voc">
                  Centre de démonstration des bonnes pratiques agroécologiques
                </p>
              </div>
            </div>
          </section>

          {/* ⑨ CTA DOUBLE */}
          <div className="c24-cta-row">
            <Link href="/fr/agir/rejoindre" className="c24-cta c24-cta--primary">
              Participer au prochain CIFAP
            </Link>
            <Link href="/fr/agir/soutenir" className="c24-cta c24-cta--outline">
              Soutenir le programme
            </Link>
          </div>

        </main>

        {/* ════════════════════════════════════════════════════
            ASIDE STICKY
        ════════════════════════════════════════════════════ */}
        <aside className="c24-aside" aria-label="Informations pratiques CIFAP">

          {/* Bloc 1 — Détails édition 2024 */}
          <div className="c24-acard">
            <h2 className="c24-atitle">Édition 2024</h2>
            <ul className="c24-alist">
              <li className="c24-aitem">
                <Calendar size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Début</span>
                <span className="c24-aval">1 sept. 2024</span>
              </li>
              <li className="c24-aitem">
                <Calendar size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Fin</span>
                <span className="c24-aval">7 sept. 2024</span>
              </li>
              <li className="c24-aitem">
                <Clock size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Durée</span>
                <span className="c24-aval">5 jours</span>
              </li>
              <li className="c24-aitem">
                <MapPin size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Lieu</span>
                <span className="c24-aval">Niaguis, Sénégal</span>
              </li>
            </ul>
          </div>

          {/* Bloc 2 — Navigation éditions */}
          <div className="c24-acard">
            <h2 className="c24-atitle">Toutes les éditions</h2>
            <nav aria-label="Naviguer entre les éditions CIFAP">
              <ul className="c24-ed-list">
                {EDITIONS.map((ed) => (
                  <li key={ed.year} className={`c24-ed-item c24-ed--${ed.status}`}>
                    <Link href="/fr/programmes/cifap" className="c24-ed-link">
                      <div className="c24-ed-head">
                        <span className="c24-ed-year">{ed.year}</span>
                        {ed.status === 'active' && (
                          <span className="c24-ed-pill c24-ed-pill--active">Page active</span>
                        )}
                        {ed.status === 'recent' && (
                          <span className="c24-ed-pill c24-ed-pill--gold">Dernière</span>
                        )}
                      </div>
                      <p className="c24-ed-theme">{ed.theme}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bloc 3 — Organisateur */}
          <div className="c24-acard">
            <h2 className="c24-atitle">Organisateur</h2>
            <p className="c24-aorg">Mouvement NSS — Nous Sommes la Solution</p>
            <ul className="c24-alist">
              <li className="c24-aitem">
                <Phone size={13} color="#00AD4C" aria-hidden="true" />
                <a href="tel:+221776470231" className="c24-alink">+221 77 647 02 31</a>
              </li>
              <li className="c24-aitem">
                <Mail size={13} color="#00AD4C" aria-hidden="true" />
                <a href="mailto:mamadou@fahamu.org" className="c24-alink">mamadou@fahamu.org</a>
              </li>
              <li className="c24-aitem">
                <ExternalLink size={13} color="#00AD4C" aria-hidden="true" />
                <a
                  href="https://wasafrica.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c24-alink"
                >
                  wasafrica.org
                </a>
              </li>
            </ul>
          </div>

          {/* Bloc 4 — Partenaires */}
          <div className="c24-acard">
            <h2 className="c24-atitle">Partenaires</h2>
            <ul className="c24-plist">
              {PARTNERS.map((p) => (
                <li key={p} className="c24-pitem">
                  <span className="c24-pdot" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`

        /* ── Layout global ── */
        .c24-page {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 2rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 5rem;
        }
        .c24-main {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* ── HERO ── */
        .c24-hero {
          background: #045627;
          border-radius: 12px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 1.25rem;
        }
        .c24-hero::before {
          content: '';
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: #00AD4C;
          opacity: 0.13;
          top: -140px;
          right: -120px;
          pointer-events: none;
        }
        .c24-hero__tags {
          display: flex;
          gap: 8px;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }
        .c24-hero__tag {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: rgba(165,206,70,0.18);
          color: #A5CE46;
          border: 1px solid rgba(165,206,70,0.28);
          border-radius: 100px;
          padding: 4px 13px;
        }
        .c24-hero__loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(245,237,214,0.65);
          margin: 0 0 1rem;
          position: relative;
          z-index: 1;
        }
        .c24-hero__h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(24px, 3.2vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          color: #F5EDD6;
          margin: 0 0 1.375rem;
          position: relative;
          z-index: 1;
          letter-spacing: -0.01em;
        }
        .c24-hero__theme {
          background: rgba(255,255,255,0.06);
          border-left: 3px solid #E8A838;
          border-radius: 0 6px 6px 0;
          padding: 12px 16px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #F5EDD6;
          line-height: 1.55;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        .c24-hero__theme strong {
          font-weight: 700;
          color: #E8A838;
        }
        .c24-hero__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .c24-hero__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(245,237,214,0.78);
        }
        .c24-hero__meta-sep {
          width: 1px;
          height: 12px;
          background: rgba(245,237,214,0.22);
          flex-shrink: 0;
        }

        /* ── Bandeau statut ── */
        .c24-status {
          background: #FFFBF2;
          border: 0.5px solid #e5e7eb;
          border-left: 3px solid #E8A838;
          border-radius: 8px;
          padding: 12px 18px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #555;
          margin-bottom: 1.25rem;
          line-height: 1.55;
        }
        .c24-status strong {
          font-weight: 700;
          color: #1a1a1a;
        }

        /* ── Cards sections ── */
        .c24-card {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .c24-section-h {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #0A0A0A;
          margin: 0 0 1rem;
          padding-bottom: 0.625rem;
          border-bottom: 1px solid #f0f0ee;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .c24-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.78;
          color: #4A4A4A;
          margin: 0;
          text-align: justify;
        }
        .c24-text strong {
          font-weight: 700;
          color: #045627;
        }

        /* ── Objectifs 2×2 ── */
        .c24-obj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .c24-obj-card {
          background: #FAFAF8;
          border: 1px solid rgba(0,173,76,0.08);
          border-radius: 8px;
          padding: 1.125rem;
          transition: box-shadow 0.2s ease;
        }
        .c24-obj-card:hover {
          box-shadow: 0 4px 18px rgba(0,173,76,0.09);
        }
        .c24-obj-icon {
          display: block;
          font-size: 26px;
          margin-bottom: 10px;
        }
        .c24-obj-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #045627;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .c24-obj-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12.5px;
          font-weight: 300;
          color: #666;
          line-height: 1.65;
          margin: 0;
          text-align: justify;
        }

        /* ── Pays badges ── */
        .c24-pays-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 1.25rem;
        }
        .c24-pays-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #045627;
          background: rgba(0,173,76,0.06);
          border: 1px solid rgba(0,173,76,0.14);
          border-radius: 100px;
          padding: 5px 12px;
        }

        /* ── Stats 2×2 ── */
        .c24-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .c24-stat-card {
          background: #f8f8f7;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 5px;
        }
        .c24-stat-val {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .c24-stat-lbl {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #888;
          line-height: 1.35;
        }

        /* ── Citation ── */
        .c24-quote {
          background: #F5EDD6;
          border: 1px solid rgba(232,168,56,0.18);
          border-left: 4px solid #E8A838;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 0 0 1.25rem;
        }
        .c24-quote__text {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 19px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.58;
          color: #1a1a1a;
          margin: 0 0 0.75rem;
        }
        .c24-quote__foot {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #666;
          margin: 0;
        }
        .c24-quote__foot strong {
          font-weight: 700;
          color: #045627;
        }

        /* ── Thématiques 3 colonnes ── */
        .c24-them-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .c24-them-card {
          background: #FAFAF8;
          border: 1px solid rgba(0,173,76,0.07);
          border-top: 2px solid #00AD4C;
          border-radius: 8px;
          padding: 1.25rem;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .c24-them-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,173,76,0.10);
        }
        .c24-them-icon {
          display: block;
          font-size: 30px;
          margin-bottom: 10px;
        }
        .c24-them-name {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: #045627;
          margin: 0 0 6px;
          line-height: 1.15;
        }
        .c24-them-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #666;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Lieu ── */
        .c24-lieu {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .c24-lieu__pin {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: rgba(0,173,76,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .c24-lieu__info { flex: 1; min-width: 0; }
        .c24-lieu__name {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 3px;
        }
        .c24-lieu__addr {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #666;
          margin: 0 0 6px;
        }
        .c24-lieu__voc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #999;
          font-style: italic;
          margin: 0;
        }

        /* ── CTA double ── */
        .c24-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .c24-cta {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 6px;
          transition: all 0.2s ease;
          display: inline-block;
          white-space: nowrap;
        }
        .c24-cta--primary {
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
        }
        .c24-cta--primary:hover {
          background: #009040;
          border-color: #009040;
        }
        .c24-cta--outline {
          background: transparent;
          color: #045627;
          border: 1.5px solid #045627;
        }
        .c24-cta--outline:hover {
          background: #045627;
          color: #ffffff;
        }

        /* ════════════════════════════════════════════════════
           ASIDE
        ════════════════════════════════════════════════════ */
        .c24-aside {
          position: sticky;
          top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .c24-acard {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.125rem;
        }
        .c24-atitle {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #aaa;
          margin: 0 0 0.875rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #f0f0ee;
        }
        .c24-alist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .c24-aitem {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #555;
          min-width: 0;
        }
        .c24-akey {
          font-weight: 500;
          color: #aaa;
          min-width: 36px;
          flex-shrink: 0;
        }
        .c24-aval {
          font-weight: 600;
          color: #1a1a1a;
          margin-left: auto;
        }
        .c24-alink {
          color: #00AD4C;
          text-decoration: none;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          transition: color 0.15s ease;
          word-break: break-all;
        }
        .c24-alink:hover { color: #045627; }

        /* Éditions nav */
        .c24-ed-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .c24-ed-item {
          border-radius: 8px;
          transition: background 0.15s ease;
        }
        .c24-ed--past   { opacity: 0.55; }
        .c24-ed--active {
          background: rgba(0,173,76,0.07);
          border: 1px solid rgba(0,173,76,0.18);
          opacity: 1;
        }
        .c24-ed--recent {
          background: rgba(232,168,56,0.06);
          border: 1px solid rgba(232,168,56,0.18);
          opacity: 1;
        }
        .c24-ed-link {
          display: block;
          padding: 10px 12px;
          text-decoration: none;
          border-radius: 8px;
        }
        .c24-ed-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 4px;
        }
        .c24-ed-year {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1;
        }
        .c24-ed--active .c24-ed-year { color: #00AD4C; }
        .c24-ed-pill {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 2px 8px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .c24-ed-pill--active {
          background: rgba(0,173,76,0.14);
          color: #00AD4C;
        }
        .c24-ed-pill--gold {
          background: rgba(232,168,56,0.18);
          color: #9a6e10;
        }
        .c24-ed-theme {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: #777;
          line-height: 1.45;
          margin: 0;
        }

        /* Organisateur */
        .c24-aorg {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem;
          line-height: 1.35;
        }

        /* Partenaires */
        .c24-plist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .c24-pitem {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #444;
        }
        .c24-pdot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
        }

        /* ════════════════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .c24-page { grid-template-columns: 1fr 240px; }
        }
        @media (max-width: 768px) {
          .c24-page {
            grid-template-columns: 1fr;
            padding: 1.25rem 1rem 3rem;
          }
          .c24-main  { order: 1; }
          .c24-aside {
            order: 2;
            position: static;
          }
          .c24-obj-grid   { grid-template-columns: 1fr; }
          .c24-them-grid  { grid-template-columns: 1fr 1fr; }
          .c24-stats-grid { grid-template-columns: 1fr 1fr; }
          .c24-hero { padding: 1.5rem; }
          .c24-hero__h1 { font-size: 22px; }
        }
        @media (max-width: 480px) {
          .c24-them-grid { grid-template-columns: 1fr; }
          .c24-hero__meta-sep { display: none; }
          .c24-cta-row { flex-direction: column; }
          .c24-cta { text-align: center; }
          .c24-hero { padding: 1.25rem; }
        }
      `}</style>
    </>
  )
}
