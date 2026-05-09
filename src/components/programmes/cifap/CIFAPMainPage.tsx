"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Users, Phone, Mail, ExternalLink } from 'lucide-react'
import {
  CIFAP_EDITIONS,
  CIFAP_PAYS,
  CIFAP_PARTENAIRES_NSS,
  CIFAP_PARTENAIRES_BAILLEURS,
} from '@/data/cifap/index'

/* ── Variants ── */
const itemFadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

/* ── AnimatedSection ── */
function AnimatedSection({ labelledby, children }: { labelledby?: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      className="cmain-section"
      aria-labelledby={labelledby}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

/* ── StaggerContainer ── */
function StaggerContainer({ className, stagger = 0.06, children }: { className?: string; stagger?: number; children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

/* ── CountUp ── */
function CountUp({ value }: { value: string }) {
  const match   = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  const prefix  = match?.[1] ?? ''
  const numeric = match ? parseInt(match[2], 10) : NaN
  const suffix  = match?.[3] ?? ''
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || isNaN(numeric)) return
    let frame = 0
    const frames = 48
    const id = setInterval(() => {
      frame++
      setCount(Math.round((frame / frames) * numeric))
      if (frame >= frames) clearInterval(id)
    }, 20)
    return () => clearInterval(id)
  }, [inView, numeric])

  return <span ref={ref}>{isNaN(numeric) ? value : `${prefix}${count}${suffix}`}</span>
}

/* ════════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
════════════════════════════════════════════════════ */
export default function CIFAPMainPage({ locale }: { locale: string }) {
  const asideRef  = useRef(null)
  const asideInView = useInView(asideRef, { once: true, margin: '-60px' })
  const tlRef     = useRef(null)
  const tlInView  = useInView(tlRef, { once: true, margin: '-40px' })
  const edRef     = useRef(null)
  const edInView  = useInView(edRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <motion.section
        className="cmain-hero"
        aria-labelledby="cmain-h1"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="cmain-hero__overlay" aria-hidden="true" />
        <div className="cmain-hero__body">

          <motion.div
            className="cmain-hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            <span className="cmain-hero__eyebrow-line" aria-hidden="true" />
            <span>NOS PROGRAMMES</span>
            <span className="cmain-hero__eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.h1
            id="cmain-h1"
            className="cmain-hero__h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
          >
            Camp International de Formation<br />en Agroécologie Paysanne
          </motion.h1>

          <motion.p
            className="cmain-hero__cifap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            CIFAP
          </motion.p>

          <motion.p
            className="cmain-hero__sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Chaque année depuis 2022, NSS réunit des leaders et techniciens des Associations
            de Femmes Rurales d&apos;Afrique de l&apos;Ouest autour d&apos;un thème
            agroécologique précis — former, relier, durer.
          </motion.p>

          <motion.div
            className="cmain-hero__stats"
            role="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <span role="listitem">4 Éditions</span>
            <span className="cmain-hero__sep" aria-hidden="true" />
            <span role="listitem">8 Pays</span>
            <span className="cmain-hero__sep" aria-hidden="true" />
            <span role="listitem">200+ Participantes formées</span>
            <span className="cmain-hero__sep" aria-hidden="true" />
            <span role="listitem" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={11} aria-hidden="true" />Niaguis, Sénégal
            </span>
          </motion.div>

        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          GRILLE 2 COLONNES
      ════════════════════════════════════════════════════ */}
      <div className="cmain-page">
        <main className="cmain-main">

          {/* ① Présentation */}
          <AnimatedSection labelledby="cmain-pres">
            <h2 id="cmain-pres" className="cmain-h2">Présentation</h2>
            <p className="cmain-text">
              Le CIFAP est une initiative annuelle organisée par le mouvement panafricain NSS
              au Centre Karonghen Wati Naning de Niaguis. Chaque édition réunit femmes rurales,
              techniciens agricoles et leaders communautaires d&apos;Afrique de l&apos;Ouest
              autour d&apos;un thème agroécologique précis, dans une logique de progression
              pédagogique cumulative : chaque camp s&apos;appuie sur les acquis du précédent.
            </p>
          </AnimatedSection>

          {/* ② Triple vocation */}
          <AnimatedSection labelledby="cmain-voc">
            <h2 id="cmain-voc" className="cmain-h2">Triple vocation</h2>
            <ul className="cmain-icon-list" role="list">
              {[
                { icon: '🎓', title: 'Former',  desc: 'Techniques agroécologiques ancrées dans les réalités locales, transmises par des experts et praticiens issus du mouvement paysan.' },
                { icon: '🔗', title: 'Relier',  desc: 'Créer un réseau continental de femmes rurales qui échangent, comparent et adaptent leurs pratiques d\'un pays à l\'autre.' },
                { icon: '⏳', title: 'Durer',   desc: 'Inscrire les savoirs dans les territoires d\'une édition à l\'autre, en enrichissant les savoirs endogènes sans les remplacer.' },
              ].map((v) => (
                <li key={v.title} className="cmain-icon-item" role="listitem">
                  <span className="cmain-icon-em" aria-hidden="true">{v.icon}</span>
                  <span className="cmain-icon-text">
                    <strong className="cmain-icon-strong">{v.title}</strong>
                    {' — '}{v.desc}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* ③ 3 Piliers NSS */}
          <AnimatedSection labelledby="cmain-pil">
            <h2 id="cmain-pil" className="cmain-h2">Les piliers de l&apos;agroécologie NSS</h2>
            <ul className="cmain-icon-list" role="list">
              {[
                { icon: '🌍', title: 'La Terre',      desc: 'Techniques de conduite, fertilité et régénération des sols agricoles paysans.' },
                { icon: '🌱', title: 'Les Semences',  desc: 'Autonomie semencière, conservation et diffusion des variétés reproductives locales.' },
                { icon: '💧', title: "L'Eau",         desc: 'Gestion écologique, irrigation paysanne durable et valorisation des ressources hydriques.' },
              ].map((p) => (
                <li key={p.title} className="cmain-icon-item" role="listitem">
                  <span className="cmain-icon-em" aria-hidden="true">{p.icon}</span>
                  <span className="cmain-icon-text">
                    <strong className="cmain-icon-strong">{p.title}</strong>
                    {' — '}{p.desc}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* ④ Processus progressif — Timeline */}
          <AnimatedSection labelledby="cmain-tl">
            <h2 id="cmain-tl" className="cmain-h2">Processus progressif</h2>
            <div className="cmain-timeline" ref={tlRef}>
              {/* Rangée dots + connecteurs */}
              <div className="cmain-tl-track-row" aria-hidden="true">
                {CIFAP_EDITIONS.map((ed, i) => (
                  <>
                    <div
                      key={`dot-${ed.year}`}
                      className={`cmain-tl-dot${ed.status === 'upcoming' ? ' cmain-tl-dot--upcoming' : ''}`}
                    />
                    {i < CIFAP_EDITIONS.length - 1 && (
                      <div key={`conn-${ed.year}`} className="cmain-tl-conn">
                        <motion.div
                          className="cmain-tl-conn-fill"
                          initial={{ scaleX: 0 }}
                          animate={tlInView ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: 0.45, delay: 0.15 + i * 0.22, ease: 'easeOut' }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
              {/* Rangée labels */}
              <div className="cmain-tl-labels-row">
                {CIFAP_EDITIONS.map((ed, i) => (
                  <>
                    <div
                      key={`lbl-${ed.year}`}
                      className={`cmain-tl-label${ed.status === 'upcoming' ? ' cmain-tl-label--upcoming' : ''}`}
                    >
                      <span className="cmain-tl-year">{ed.year}</span>
                      <span className="cmain-tl-theme">{ed.themeShort}</span>
                      {ed.status === 'upcoming' && (
                        <span className="cmain-tl-badge">À VENIR</span>
                      )}
                    </div>
                    {i < CIFAP_EDITIONS.length - 1 && (
                      <div key={`sp-${ed.year}`} className="cmain-tl-spacer" />
                    )}
                  </>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ⑤ Objectifs généraux */}
          <AnimatedSection labelledby="cmain-obj">
            <h2 id="cmain-obj" className="cmain-h2">Objectifs généraux</h2>
            <ul className="cmain-icon-list" role="list">
              {[
                { icon: '📚', title: 'Renforcement des capacités',  desc: 'Renforcer les capacités des leaders paysans, techniciens et animateurs en techniques agroécologiques appliquées sur le terrain.' },
                { icon: '🌾', title: 'Diffusion des pratiques',     desc: 'Diffuser des pratiques agricoles respectueuses de l\'environnement et reproductibles dans chaque pays membre du réseau NSS.' },
                { icon: '📈', title: 'Amélioration des rendements', desc: 'Améliorer les rendements agricoles et la viabilité économique des exploitations des femmes et hommes ruraux participants.' },
                { icon: '🤝', title: 'Souveraineté alimentaire',    desc: 'Consolider la souveraineté alimentaire en Afrique de l\'Ouest à travers des pratiques agroécologiques paysannes durables.' },
                { icon: '🌍', title: 'Réseau continental',          desc: 'Construire un réseau continental de femmes rurales organisées capables d\'essaimer les pratiques agroécologiques dans leurs territoires.' },
              ].map((o) => (
                <li key={o.title} className="cmain-icon-item" role="listitem">
                  <span className="cmain-icon-em" aria-hidden="true">{o.icon}</span>
                  <span className="cmain-icon-text">
                    <strong className="cmain-icon-strong">{o.title}</strong>
                    {' — '}{o.desc}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* ⑥ Lieu de référence */}
          <AnimatedSection labelledby="cmain-lieu">
            <h2 id="cmain-lieu" className="cmain-h2">Lieu de référence</h2>
            <div className="cmain-lieu">
              <div className="cmain-lieu__pin" aria-hidden="true">
                <MapPin size={22} color="#00AD4C" strokeWidth={1.75} />
              </div>
              <div>
                <p className="cmain-lieu__name">Centre Karonghen Wati Naning</p>
                <p className="cmain-lieu__addr">Niaguis, Ziguinchor — Sénégal</p>
                <p className="cmain-lieu__desc">
                  Centre de démonstration des bonnes pratiques agroécologiques paysannes.
                  Modèle pilote à dupliquer dans chaque pays membre NSS.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* ⑦ Citation principale */}
          <AnimatedSection>
            <motion.blockquote
              className="cmain-quote"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="cmain-quote__text">
                &laquo;&nbsp;Dans l&apos;agroécologie, nous recherchons la souveraineté
                alimentaire. Et pour être souverain, il faut arriver à avoir le droit
                de produire ce que vous voulez manger.&nbsp;&raquo;
              </p>
              <footer className="cmain-quote__foot">
                — <strong>Mariama Sonko</strong>, présidente NSS
              </footer>
            </motion.blockquote>
          </AnimatedSection>

          {/* ⑧ Pays participants */}
          <AnimatedSection labelledby="cmain-pays">
            <h2 id="cmain-pays" className="cmain-h2">Pays participants</h2>
            <StaggerContainer className="cmain-pays-grid" stagger={0.05}>
              {CIFAP_PAYS.map((p) => (
                <motion.span key={p.name} className="cmain-pays-badge" role="listitem" variants={itemFadeUp}>
                  <span className="cmain-pays-flag" aria-hidden="true">{p.flag}</span>
                  <span className="cmain-pays-name">{p.name}</span>
                </motion.span>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* ⑨ Partenaires */}
          <AnimatedSection labelledby="cmain-part">
            <h2 id="cmain-part" className="cmain-h2">Partenaires</h2>
            <div className="cmain-partners-cols">
              <div>
                <p className="cmain-partners-label">Organisateurs</p>
                <ul className="cmain-bullet-list" role="list">
                  {CIFAP_PARTENAIRES_NSS.map((p) => <li key={p} role="listitem">{p}</li>)}
                </ul>
              </div>
              <div>
                <p className="cmain-partners-label">Bailleurs de fonds</p>
                <ul className="cmain-bullet-list" role="list">
                  {CIFAP_PARTENAIRES_BAILLEURS.map((p) => <li key={p} role="listitem">{p}</li>)}
                </ul>
              </div>
            </div>
          </AnimatedSection>

        </main>

        {/* ════════════════════════════════════════════════════
            ASIDE sticky
        ════════════════════════════════════════════════════ */}
        <motion.aside
          ref={asideRef}
          className="cmain-aside"
          aria-label="Informations pratiques CIFAP"
          initial={{ opacity: 0, x: 36 }}
          animate={asideInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {/* ① En chiffres */}
          <div className="cmain-acard">
            <h2 className="cmain-atitle">En chiffres</h2>
            <div className="cmain-stats-grid">
              {[
                { val: '4',    lbl: 'Éditions' },
                { val: '8',    lbl: 'Pays' },
                { val: '200+', lbl: 'Formées' },
                { val: '2022', lbl: 'Depuis' },
              ].map((s) => (
                <div key={s.lbl} className="cmain-stat">
                  <span className="cmain-stat-val"><CountUp value={s.val} /></span>
                  <span className="cmain-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ② Navigation éditions */}
          <div className="cmain-acard">
            <h2 className="cmain-atitle">Toutes les éditions</h2>
            <ul className="cmain-ed-list">
              {CIFAP_EDITIONS.map((ed) => {
                const inner = (
                  <>
                    <div className="cmain-ed-row">
                      <span className="cmain-ed-label">{ed.label}</span>
                      <span className={`cmain-ed-badge ${ed.status === 'upcoming' ? 'cmain-ed-badge--upcoming' : 'cmain-ed-badge--past'}`}>
                        {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
                      </span>
                    </div>
                    <p className="cmain-ed-theme">{ed.themeShort}</p>
                  </>
                )
                return (
                  <li key={ed.year} className="cmain-ed-item">
                    {ed.href ? (
                      <Link href={`/${locale}${ed.href}`} className="cmain-ed-link">
                        {inner}
                      </Link>
                    ) : (
                      <span className="cmain-ed-link cmain-ed-link--disabled" aria-disabled="true">
                        {inner}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ③ Contact */}
          <div className="cmain-acard">
            <h2 className="cmain-atitle">Contact NSS</h2>
            <ul className="cmain-alist">
              <li className="cmain-aitem">
                <Phone size={13} color="#00AD4C" aria-hidden="true" />
                <a href="tel:+221776470231" className="cmain-alink">+221 77 647 02 31</a>
              </li>
              <li className="cmain-aitem">
                <Mail size={13} color="#00AD4C" aria-hidden="true" />
                <a href="mailto:mamadou@fahamu.org" className="cmain-alink">mamadou@fahamu.org</a>
              </li>
              <li className="cmain-aitem">
                <ExternalLink size={13} color="#00AD4C" aria-hidden="true" />
                <a href="https://wasafrica.org" target="_blank" rel="noopener noreferrer" className="cmain-alink">
                  wasafrica.org
                </a>
              </li>
            </ul>
          </div>

          {/* ④ CTA */}
          <div className="cmain-acard cmain-acard--cta">
            <Link href={`/${locale}/agir/rejoindre`} className="cmain-cta-aside">
              Participer au CIFAP
            </Link>
          </div>

        </motion.aside>
      </div>

      {/* ════════════════════════════════════════════════════
          TOUTES LES ÉDITIONS — pleine largeur
      ════════════════════════════════════════════════════ */}
      <section className="cmain-editions" aria-labelledby="cmain-ed-h2">
        <div className="cmain-editions__hd">
          <p className="cmain-editions__eyebrow">TOUTES LES ÉDITIONS</p>
          <h2 id="cmain-ed-h2" className="cmain-editions__h2">
            Quatre ans de formation agroécologique.
          </h2>
          <p className="cmain-editions__sub">
            Chaque édition approfondit un thème précis, dans une logique pédagogique
            cumulative portée par le mouvement NSS.
          </p>
        </div>

        <motion.div
          ref={edRef}
          className="cmain-cards-grid"
          initial="hidden"
          animate={edInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {CIFAP_EDITIONS.map((ed) => (
            <motion.div
              key={ed.year}
              className={`cmain-card${ed.status === 'upcoming' ? ' cmain-card--upcoming' : ''}`}
              style={{ '--card-accent': ed.accent } as React.CSSProperties}
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
            >
              <div className="cmain-card__top">
                <span className={`cmain-card__badge cmain-card__badge--${ed.status}`}>
                  {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
                </span>
                <span className="cmain-card__num">{ed.num} ÉDITION</span>
              </div>
              <p className="cmain-card__year">{ed.year}</p>
              <h3 className="cmain-card__theme">{ed.theme}</h3>
              <div className="cmain-card__meta">
                <span className="cmain-card__meta-item">
                  <Calendar size={11} aria-hidden="true" />{ed.dates}
                </span>
                {ed.participants && (
                  <span className="cmain-card__meta-item">
                    <Users size={11} aria-hidden="true" />{ed.participants}
                  </span>
                )}
                <span className="cmain-card__meta-item">
                  <MapPin size={11} aria-hidden="true" />Niaguis, Sénégal
                </span>
              </div>
              <div className="cmain-card__foot">
                {ed.href ? (
                  <Link href={`/${locale}${ed.href}`} className="cmain-card__cta">
                    Voir l&apos;édition →
                  </Link>
                ) : (
                  <span className="cmain-card__cta cmain-card__cta--disabled">
                    Bientôt disponible
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════ */}
      <section className="cmain-cta-final" aria-labelledby="cmain-cta-h2">
        <div className="cmain-cta-final__body">
          <h2 id="cmain-cta-h2" className="cmain-cta-final__h2">
            Rejoindre le prochain CIFAP
          </h2>
          <p className="cmain-cta-final__sub">
            La 5ème édition se tiendra en septembre 2026 à Niaguis.
          </p>
          <div className="cmain-cta-final__btns">
            <Link href={`/${locale}/agir/rejoindre`} className="cmain-cta-final__btn cmain-cta-final__btn--primary">
              S&apos;inscrire
            </Link>
            <Link href={`/${locale}/agir/soutenir`} className="cmain-cta-final__btn cmain-cta-final__btn--outline">
              Soutenir le programme
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`

        /* ── HERO ── */
        .cmain-hero {
          position: relative;
          overflow: hidden;
          min-height: 440px;
          display: flex;
          align-items: center;
          background-image: url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg');
          background-size: cover;
          background-position: center 40%;
          color: #fff;
        }
        .cmain-hero__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(2,6,3,0.92) 42%, rgba(4,12,6,0.78) 68%, rgba(0,0,0,0.45) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 30%, rgba(0,0,0,0.20) 100%);
        }
        .cmain-hero__body {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px clamp(1.5rem, 5vw, 4rem) 64px;
        }
        .cmain-hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #A5CE46;
        }
        .cmain-hero__eyebrow-line {
          display: block;
          width: 30px;
          height: 1px;
          background: rgba(165,206,70,0.55);
          flex-shrink: 0;
        }
        .cmain-hero__h1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 48px);
          font-weight: 400;
          line-height: 1.14;
          color: #ffffff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
          max-width: 680px;
        }
        .cmain-hero__cifap {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(18px, 2.2vw, 28px);
          font-weight: 300;
          font-style: italic;
          color: #A5CE46;
          margin: 0 0 1.5rem;
          letter-spacing: 0.08em;
        }
        .cmain-hero__sub {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.88);
          margin: 0 0 1.75rem;
          max-width: 600px;
        }
        .cmain-hero__stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #ffffff;
        }
        .cmain-hero__sep {
          display: inline-block;
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.20);
          flex-shrink: 0;
        }

        /* ── LAYOUT GRID ── */
        .cmain-page {
          display: grid;
          grid-template-columns: 1fr 309px;
          gap: 2rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .cmain-main {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* ── SECTIONS ── */
        .cmain-section {
          padding: 2.5rem 0;
          border-bottom: 1px solid #f0efeb;
          background: #ffffff;
        }
        .cmain-section:last-of-type { border-bottom: none; }
        .cmain-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 300;
          color: #2A2A2A;
          margin: 0 0 1.5rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-decoration: underline;
          text-decoration-color: #A5CE46;
          text-decoration-thickness: 2px;
          text-underline-offset: 6px;
        }
        .cmain-text {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: #2C2C28;
          margin: 0;
          text-align: justify;
        }

        /* ── Icon list ── */
        .cmain-icon-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cmain-icon-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          text-align: justify;
        }
        .cmain-icon-em     { font-size: 18px; flex-shrink: 0; line-height: 1.5; min-width: 22px; text-align: center; }
        .cmain-icon-text   { flex: 1; min-width: 0; }
        .cmain-icon-strong { font-weight: 700; color: #2A2A2A; }

        /* ── Bullet list ── */
        .cmain-bullet-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cmain-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #2C2C28;
        }
        .cmain-bullet-list li::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
          margin-top: 0.62em;
        }

        /* ── Partners 2-col ── */
        .cmain-partners-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .cmain-partners-label {
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
        }

        /* ── Timeline ── */
        .cmain-timeline { margin-top: 0.5rem; overflow-x: auto; }
        .cmain-tl-track-row {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }
        .cmain-tl-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00AD4C;
          border: 2.5px solid #ffffff;
          box-shadow: 0 0 0 2px #00AD4C;
          flex-shrink: 0;
        }
        .cmain-tl-dot--upcoming {
          background: #E8A838;
          box-shadow: 0 0 0 2px #E8A838;
        }
        .cmain-tl-conn {
          flex: 1;
          height: 2px;
          background: #e4e1d9;
          position: relative;
          overflow: hidden;
          min-width: 30px;
        }
        .cmain-tl-conn-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #00AD4C, #A5CE46);
        }
        .cmain-tl-labels-row {
          display: flex;
          align-items: flex-start;
        }
        .cmain-tl-label {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 80px;
          flex-shrink: 0;
        }
        .cmain-tl-label:not(:first-child) { align-items: center; text-align: center; }
        .cmain-tl-label:last-child         { align-items: flex-end; text-align: right; }
        .cmain-tl-spacer { flex: 1; }
        .cmain-tl-year {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #2A2A2A;
          letter-spacing: 0.02em;
        }
        .cmain-tl-theme {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: #888;
          line-height: 1.4;
        }
        .cmain-tl-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(232,168,56,0.15);
          color: #9a6c00;
          padding: 2px 6px;
          border-radius: 3px;
          margin-top: 2px;
          width: fit-content;
        }
        .cmain-tl-label--upcoming .cmain-tl-year { color: #9a6c00; }

        /* ── Lieu ── */
        .cmain-lieu {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .cmain-lieu__pin {
          width: 46px;
          height: 46px;
          background: rgba(165,206,70,0.10);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cmain-lieu__name {
          font-family: var(--font-display), Georgia, serif;
          font-size: 18px;
          font-weight: 400;
          color: #2A2A2A;
          margin: 0 0 4px;
        }
        .cmain-lieu__addr {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #555;
          margin: 0 0 6px;
        }
        .cmain-lieu__desc {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          color: #888;
          font-style: italic;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Citation ── */
        .cmain-quote {
          background: #F5F3EE;
          border-left: 3px solid #E8A838;
          padding: 22px 22px 22px 26px;
          margin: 0;
        }
        .cmain-quote__text {
          font-family: var(--font-display), Georgia, serif;
          font-size: 15px;
          font-style: italic;
          line-height: 1.78;
          color: #2A2A2A;
          margin: 0 0 10px;
          text-align: justify;
        }
        .cmain-quote__foot {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          color: #2C2C28;
          margin: 0;
        }
        .cmain-quote__foot strong { font-weight: 700; color: #2A2A2A; }

        /* ── Pays badges ── */
        .cmain-pays-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cmain-pays-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #045627;
          color: #F5EDD6;
          border-radius: 999px;
          padding: 8px 16px;
        }
        .cmain-pays-flag { font-size: 22px; line-height: 1; flex-shrink: 0; }
        .cmain-pays-name {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #F5EDD6;
          white-space: nowrap;
        }

        /* ── ASIDE ── */
        .cmain-aside {
          position: sticky;
          top: calc(68px + 2rem);
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #A5CE46;
          border-radius: 8px;
          overflow: hidden;
        }
        .cmain-acard {
          padding: 18px 20px;
          border-bottom: 1px solid #eef5e8;
          background: #ffffff;
        }
        .cmain-acard:last-of-type { border-bottom: none; }
        .cmain-acard--cta { padding: 16px 20px; }
        .cmain-atitle {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
        }
        .cmain-alist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cmain-aitem {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .cmain-alink {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          color: #00AD4C;
          text-decoration: none;
          word-break: break-all;
          transition: color 0.15s;
        }
        .cmain-alink:hover { color: #045627; text-decoration: underline; }

        /* Stats aside */
        .cmain-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .cmain-stat {
          background: #ffffff;
          border: 1px solid rgba(165,206,70,0.25);
          padding: 12px 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 3px;
          border-radius: 4px;
        }
        .cmain-stat-val {
          font-family: var(--font-display), Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #2A2A2A;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .cmain-stat-lbl {
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          color: #999;
        }

        /* Editions nav aside */
        .cmain-ed-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cmain-ed-item { border-radius: 4px; overflow: hidden; }
        .cmain-ed-link {
          display: block;
          padding: 7px 10px;
          text-decoration: none;
          transition: background 0.14s;
        }
        .cmain-ed-item .cmain-ed-link:hover { background: rgba(165,206,70,0.07); }
        .cmain-ed-link--disabled { cursor: default; opacity: 0.55; }
        .cmain-ed-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 2px;
        }
        .cmain-ed-label {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.2;
        }
        .cmain-ed-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 2px 5px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        .cmain-ed-badge--past     { background: #f2f2f2; color: #999; }
        .cmain-ed-badge--upcoming { background: rgba(165,206,70,0.18); color: #5a8020; }
        .cmain-ed-theme {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          color: #999;
          line-height: 1.35;
          margin: 0;
        }

        /* CTA aside */
        .cmain-cta-aside {
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ffffff;
          background: #00AD4C;
          padding: 13px 16px;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.18s;
        }
        .cmain-cta-aside:hover { background: #045627; }

        /* ── ÉDITIONS CARDS ── */
        .cmain-editions {
          background: #ffffff;
          border-top: 1px solid #f0efeb;
          padding: 4rem 1.5rem 4.5rem;
        }
        .cmain-editions__hd {
          max-width: 1200px;
          margin: 0 auto 2.5rem;
        }
        .cmain-editions__eyebrow {
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
        }
        .cmain-editions__h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 300;
          color: #2A2A2A;
          margin: 0 0 10px;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .cmain-editions__sub {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin: 0;
          max-width: 600px;
        }

        /* Cards grid */
        .cmain-cards-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cmain-card {
          background: #ffffff;
          border: 1px solid #e8e6e0;
          border-top: 3px solid var(--card-accent);
          border-radius: 0 0 6px 6px;
          padding: 22px 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: box-shadow 0.18s, border-top-color 0.18s;
        }
        .cmain-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
        }
        .cmain-card--upcoming {
          background: #fdfcf8;
        }
        .cmain-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .cmain-card__badge {
          font-family: var(--font-body), sans-serif;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 7px;
          border-radius: 3px;
        }
        .cmain-card__badge--past     { background: #f2f2f2; color: #999; }
        .cmain-card__badge--upcoming { background: rgba(232,168,56,0.18); color: #9a6c00; }
        .cmain-card__num {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #bbb;
        }
        .cmain-card__year {
          font-family: var(--font-display), Georgia, serif;
          font-size: 32px;
          font-weight: 300;
          color: #2A2A2A;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .cmain-card__theme {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.4;
          margin: 0;
          flex: 1;
        }
        .cmain-card--upcoming .cmain-card__theme { color: #aaa; }
        .cmain-card__meta {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .cmain-card__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          color: #888;
        }
        .cmain-card__foot {
          margin-top: 4px;
          padding-top: 14px;
          border-top: 1px solid #f0efeb;
        }
        .cmain-card__cta {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #00AD4C;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.15s;
        }
        .cmain-card__cta:hover { color: #045627; }
        .cmain-card__cta--disabled {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #ccc;
          cursor: default;
        }

        /* ── CTA FINAL ── */
        .cmain-cta-final {
          background: #045627;
          padding: 4rem 1.5rem;
        }
        .cmain-cta-final__body {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        .cmain-cta-final__h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .cmain-cta-final__sub {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .cmain-cta-final__btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }
        .cmain-cta-final__btn {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 4px;
          transition: all 0.18s ease;
          display: inline-block;
          white-space: nowrap;
        }
        .cmain-cta-final__btn--primary {
          background: #00AD4C;
          color: #ffffff;
          border: 1.5px solid #00AD4C;
        }
        .cmain-cta-final__btn--primary:hover {
          background: #A5CE46;
          border-color: #A5CE46;
          color: #2A2A2A;
        }
        .cmain-cta-final__btn--outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.45);
        }
        .cmain-cta-final__btn--outline:hover {
          border-color: #A5CE46;
          color: #A5CE46;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cmain-page { grid-template-columns: 1fr 265px; }
          .cmain-cards-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .cmain-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .cmain-page { grid-template-columns: 1fr; padding: 1.5rem 1rem 3rem; }
          .cmain-aside { position: static; }
          .cmain-hero { min-height: 360px; }
          .cmain-hero__body { padding: 52px 1.25rem 44px; }
          .cmain-partners-cols { grid-template-columns: 1fr; gap: 1.5rem; }
          .cmain-tl-label:not(:first-child) { min-width: 70px; }
        }
        @media (max-width: 580px) {
          .cmain-cards-grid { grid-template-columns: 1fr; }
          .cmain-hero__sep  { display: none; }
          .cmain-hero__stats { gap: 6px; }
          .cmain-cta-final__btns { flex-direction: column; align-items: stretch; }
          .cmain-cta-final__btn  { text-align: center; }
        }
      `}</style>
    </>
  )
}
