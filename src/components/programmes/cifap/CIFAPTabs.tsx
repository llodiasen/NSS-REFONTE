"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { CIFAP_EDITIONS, CIFAP_DEFAULT_YEAR, type CIFAPEdition } from '@/data/cifap-editions'

const PARTNERS = ['Fahamu Africa', 'FENOP (Burkina Faso)', 'Enda Pronat']

export default function CIFAPTabs() {
  const [selectedYear, setSelectedYear] = useState(CIFAP_DEFAULT_YEAR)

  const edition = CIFAP_EDITIONS.find(e => e.year === selectedYear) ?? CIFAP_EDITIONS[0]
  const currentIndex = CIFAP_EDITIONS.findIndex(e => e.year === selectedYear)
  const prevEdition = currentIndex > 0 ? CIFAP_EDITIONS[currentIndex - 1] : null
  const nextEdition = currentIndex < CIFAP_EDITIONS.length - 1 ? CIFAP_EDITIONS[currentIndex + 1] : null

  return (
    <>
      {/* ── Barre d'onglets ── */}
      <div className="ctabs-bar" role="tablist" aria-label="Éditions du CIFAP">
        {CIFAP_EDITIONS.map((ed) => {
          const isSelected = ed.year === selectedYear
          return (
            <button
              key={ed.year}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedYear(ed.year)}
              className={[
                'ctabs-tab',
                `ctabs-tab--${ed.status}`,
                isSelected ? 'ctabs-tab--selected' : '',
              ].join(' ')}
            >
              {ed.year}
              {ed.status === 'upcoming' && !isSelected && (
                <span className="ctabs-tab__badge">À VENIR</span>
              )}
            </button>
          )
        })}
      </div>

      {/* ── Grille principale ── */}
      <div className="c24-page ctabs-panel" role="tabpanel">
        <main className="c24-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <EditionContent edition={edition} />
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation prev / next ── */}
          <div className="ctabs-nav">
            {prevEdition ? (
              <button
                onClick={() => setSelectedYear(prevEdition.year)}
                className="ctabs-nav__btn"
              >
                ← Édition {prevEdition.year}
              </button>
            ) : <span />}
            {nextEdition ? (
              <button
                onClick={() => setSelectedYear(nextEdition.year)}
                className="ctabs-nav__btn"
              >
                Édition {nextEdition.year} →
              </button>
            ) : <span />}
          </div>
        </main>

        {/* ── Aside sticky ── */}
        <aside className="c24-aside" aria-label="Informations pratiques CIFAP">
          <EditionAside
            edition={edition}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </aside>
      </div>

      <style>{`
        /* ── Barre d'onglets ── */
        .ctabs-bar {
          display: flex;
          gap: 6px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 1.5rem 0;
          flex-wrap: wrap;
        }
        .ctabs-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 9px 20px;
          border-radius: 6px 6px 0 0;
          border: 1.5px solid transparent;
          border-bottom: none;
          cursor: pointer;
          transition: all 0.16s ease;
          white-space: nowrap;
          line-height: 1;
        }
        /* Passées */
        .ctabs-tab--past {
          background: #F5F3EE;
          color: #999;
          border-color: #e4e1d9;
        }
        .ctabs-tab--past:not(.ctabs-tab--selected):hover {
          background: #eae8e2;
          color: #555;
        }
        /* Active (édition de référence) */
        .ctabs-tab--active {
          background: #F5F3EE;
          color: #2C2C28;
          border-color: #e4e1d9;
        }
        .ctabs-tab--active:not(.ctabs-tab--selected):hover {
          background: #eae8e2;
          color: #2A2A2A;
        }
        /* À venir */
        .ctabs-tab--upcoming {
          background: rgba(165,206,70,0.12);
          color: #5a8020;
          border-color: rgba(165,206,70,0.30);
        }
        .ctabs-tab--upcoming:not(.ctabs-tab--selected):hover {
          background: rgba(165,206,70,0.20);
        }
        /* Sélectionné — écrase tout */
        .ctabs-tab--selected {
          background: #ffffff !important;
          color: #2A2A2A !important;
          border-color: #A5CE46 !important;
          border-bottom-color: transparent !important;
          position: relative;
          z-index: 2;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.04);
        }
        .ctabs-tab__badge {
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          background: #A5CE46;
          color: #2A2A2A;
          padding: 2px 6px;
          border-radius: 3px;
        }

        /* Panneau : bordure de raccord avec les onglets */
        .ctabs-panel {
          border-top: 1.5px solid #A5CE46;
          margin-top: -1px;
        }

        /* ── Navigation éd. précédente / suivante ── */
        .ctabs-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0 3rem;
        }
        .ctabs-nav__btn {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #045627;
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 5px;
          transition: all 0.16s ease;
        }
        .ctabs-nav__btn:hover {
          background: rgba(165,206,70,0.12);
          border-color: rgba(165,206,70,0.35);
          color: #2A2A2A;
        }

        /* ── Item actif dans l'aside nav ── */
        .c24-ed--selected {
          background: rgba(165,206,70,0.10);
          border: 1px solid rgba(165,206,70,0.30);
        }
        .c24-ed--selected .c24-ed-year {
          color: #5a8020;
        }

        @media (max-width: 640px) {
          .ctabs-bar { gap: 4px; padding: 1rem 1rem 0; }
          .ctabs-tab { font-size: 12px; padding: 8px 14px; }
        }
      `}</style>
    </>
  )
}

/* ── Contenu par édition ── */
function EditionContent({ edition }: { edition: CIFAPEdition }) {
  return (
    <>
      {/* Présentation */}
      <section className="c24-card" aria-labelledby={`c24-pres-${edition.year}`}>
        <h2 id={`c24-pres-${edition.year}`} className="c24-section-h">
          {edition.title ?? `CIFAP ${edition.year}`}
        </h2>
        {edition.intro && (
          <p className="c24-text" style={edition.bullets?.length ? { marginBottom: '1.25rem' } : undefined}>
            {edition.intro}
          </p>
        )}
        {edition.bullets && edition.bullets.length > 0 && (
          <ul className="c24-bullet-list">
            {edition.bullets.map((b, i) => (
              <li key={i}><strong>{b.bold}</strong> {b.text}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Chiffres clés */}
      {edition.stats && edition.stats.length > 0 && (
        <section className="c24-card" aria-labelledby={`c24-stats-${edition.year}`}>
          <h2 id={`c24-stats-${edition.year}`} className="c24-section-h">Chiffres clés</h2>
          <div
            className="c24-stats-grid"
            style={{ gridTemplateColumns: `repeat(${Math.min(edition.stats.length, 4)}, 1fr)` }}
            role="list"
          >
            {edition.stats.map((s) => (
              <div key={s.lbl} className="c24-stat-card" role="listitem">
                <span className="c24-stat-eyebrow">{s.eye}</span>
                <span className="c24-stat-val">{s.val}</span>
                <span className="c24-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pays représentés */}
      {edition.pays && edition.pays.length > 0 && (
        <section className="c24-card" aria-labelledby={`c24-pays-${edition.year}`}>
          <h2 id={`c24-pays-${edition.year}`} className="c24-section-h">Pays représentés</h2>
          <div className="c24-pays-badges" role="list" aria-label="Pays représentés">
            {edition.pays.map((p) => (
              <span key={p.name} className="c24-pays-badge" role="listitem">
                <span aria-hidden="true">{p.flag}</span>
                {p.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Citation */}
      {edition.citation && (
        <blockquote className="c24-quote">
          <p className="c24-quote__text">
            &laquo;&nbsp;{edition.citation.text}&nbsp;&raquo;
          </p>
          <footer className="c24-quote__foot">
            — <strong>{edition.citation.author}</strong>, {edition.citation.role}
          </footer>
        </blockquote>
      )}

      {/* Lieu (uniquement si renseigné) */}
      {edition.location && (
        <section className="c24-card" aria-labelledby={`c24-lieu-${edition.year}`}>
          <h2 id={`c24-lieu-${edition.year}`} className="c24-section-h">Lieu</h2>
          <div className="c24-lieu">
            <div className="c24-lieu__pin" aria-hidden="true">
              <MapPin size={20} color="#00AD4C" />
            </div>
            <div className="c24-lieu__info">
              <p className="c24-lieu__name">Centre Karonghen Wati Naning</p>
              <p className="c24-lieu__addr">Niaguis, Ziguinchor — Sénégal</p>
              <p className="c24-lieu__voc">Centre de démonstration des bonnes pratiques agroécologiques</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="c24-cta-row">
        <Link href="/fr/agir/rejoindre" className="c24-cta c24-cta--primary">
          Participer au prochain CIFAP
        </Link>
        <Link href="/fr/agir/soutenir" className="c24-cta c24-cta--outline">
          Soutenir le programme
        </Link>
      </div>
    </>
  )
}

/* ── Aside ── */
function EditionAside({
  edition,
  selectedYear,
  onSelectYear,
}: {
  edition: CIFAPEdition
  selectedYear: string
  onSelectYear: (year: string) => void
}) {
  const hasDetails = edition.dates || edition.duration || edition.location

  return (
    <>
      {/* Bloc 1 — Détails édition (si disponibles) */}
      {hasDetails && (
        <div className="c24-acard">
          <h2 className="c24-atitle">Édition {edition.year}</h2>
          <ul className="c24-alist">
            {edition.dates && (
              <li className="c24-aitem">
                <Calendar size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Dates</span>
                <span className="c24-aval">{edition.dates}</span>
              </li>
            )}
            {edition.duration && (
              <li className="c24-aitem">
                <Clock size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Durée</span>
                <span className="c24-aval">{edition.duration}</span>
              </li>
            )}
            {edition.location && (
              <li className="c24-aitem">
                <MapPin size={13} color="#00AD4C" aria-hidden="true" />
                <span className="c24-akey">Lieu</span>
                <span className="c24-aval">Niaguis, Sénégal</span>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Bloc 2 — Navigation éditions */}
      <div className="c24-acard">
        <h2 className="c24-atitle">Toutes les éditions</h2>
        <nav aria-label="Naviguer entre les éditions CIFAP">
          <ul className="c24-ed-list">
            {CIFAP_EDITIONS.map((ed) => {
              const isActive = ed.year === selectedYear
              return (
                <li
                  key={ed.year}
                  className={`c24-ed-item ${isActive ? 'c24-ed--selected' : `c24-ed--${ed.status}`}`}
                >
                  <button
                    onClick={() => onSelectYear(ed.year)}
                    className="c24-ed-link"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div className="c24-ed-head">
                      <span className="c24-ed-year">{ed.year}</span>
                      {isActive && (
                        <span className="c24-ed-pill c24-ed-pill--active">Sélectionnée</span>
                      )}
                      {!isActive && ed.status === 'upcoming' && (
                        <span className="c24-ed-pill c24-ed-pill--gold">À venir</span>
                      )}
                    </div>
                    <p className="c24-ed-theme">{ed.theme}</p>
                  </button>
                </li>
              )
            })}
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
    </>
  )
}
