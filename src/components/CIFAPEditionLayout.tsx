"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Calendar, Clock, MapPin, Users, Globe, Phone, Mail, ExternalLink,
  Layers, Sprout, Leaf, ShieldCheck, Wheat, Scissors, RotateCcw, FlaskConical,
  type LucideIcon,
} from 'lucide-react'
import type { CIFAPEditionData } from '@/data/cifap/edition-2025'

/* ── Icon map ── */
const PROG_ICONS: Record<string, LucideIcon> = {
  layers:   Layers,
  sprout:   Sprout,
  leaf:     Leaf,
  shield:   ShieldCheck,
  wheat:    Wheat,
  scissors: Scissors,
  rotate:   RotateCcw,
  globe:    Globe,
  flask:    FlaskConical,
}

/* ── Toutes les éditions ── */
const ALL_EDITIONS = [
  { year: '2022', label: '1ère édition 2022', theme: 'Bio-intrants — biofertilisants et biopesticides',      href: '/programmes/cifap/1ere-edition-2022', status: 'past'     as const },
  { year: '2023', label: '2ème édition 2023', theme: 'Production des semences horticoles paysannes',          href: '/programmes/cifap/2e-edition-2023',   status: 'past'     as const },
  { year: '2024', label: '3ème édition 2024', theme: 'Bio-protecteurs en agroécologie',                       href: '/programmes/cifap/3e-edition-2024',   status: 'past'     as const },
  { year: '2025', label: '4ème édition 2025', theme: 'Cultures horticoles en agroécologie paysanne',          href: '/programmes/cifap/4e-edition-2025',   status: 'past'     as const },
  { year: '2026', label: '5ème édition 2026', theme: 'À confirmer',                                           href: null,                                  status: 'upcoming' as const },
]

/* ── Variants partagés ── */
const itemFadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const itemSlideLeft = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

/* ── AnimatedSection ── */
function AnimatedSection({
  labelledby,
  delay = 0,
  eyebrow,
  children,
}: {
  labelledby?: string
  delay?: number
  eyebrow?: string
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      className="ced-section"
      aria-labelledby={labelledby}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {eyebrow && <p className="ced-eyebrow">{eyebrow}</p>}
      {children}
    </motion.section>
  )
}

/* ── StaggerContainer ── */
function StaggerContainer({
  className,
  stagger = 0.06,
  children,
}: {
  className?: string
  stagger?: number
  children: React.ReactNode
}) {
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

  return (
    <span ref={ref}>
      {isNaN(numeric) ? value : `${prefix}${count}${suffix}`}
    </span>
  )
}

/* ════════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
════════════════════════════════════════════════════ */
interface Props {
  edition: CIFAPEditionData
  locale: string
}

export default function CIFAPEditionLayout({ edition, locale }: Props) {
  const participantsStat = edition.stats.find(s => s.label === 'Participants')

  const asideRef  = useRef(null)
  const asideInView = useInView(asideRef, { once: true, margin: '-60px' })
  const navRef    = useRef(null)
  const navInView = useInView(navRef,  { once: true, margin: '-60px' })

  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO — fade-in + scale
      ════════════════════════════════════════════════════ */}
      <motion.section
        className="ced-hero"
        aria-labelledby="ced-h1"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="ced-hero__overlay" aria-hidden="true" />
        <div className="ced-hero__body">

          <nav className="ced-breadcrumb" aria-label="Fil d'Ariane">
            <Link href={`/${locale}/programmes/cifap`} className="ced-breadcrumb__link">
              CIFAP
            </Link>
            <span className="ced-breadcrumb__sep" aria-hidden="true">›</span>
            <span className="ced-breadcrumb__current">Édition {edition.year}</span>
          </nav>

          <motion.div
            className="ced-badges"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="ced-badge ced-badge--edition">{edition.badge}</span>
            {edition.status === 'past' && (
              <span className="ced-badge ced-badge--closed">Clôturée</span>
            )}
          </motion.div>

          <motion.h1
            id="ced-h1"
            className="ced-hero__h1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            {edition.theme}
          </motion.h1>

          <motion.div
            className="ced-hero__meta"
            role="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            <span className="ced-hero__meta-item" role="listitem">
              <Calendar size={13} aria-hidden="true" />{edition.dates}
            </span>
            <span className="ced-hero__meta-sep" aria-hidden="true" />
            <span className="ced-hero__meta-item" role="listitem">
              <Clock size={13} aria-hidden="true" />{edition.duration}
            </span>
            <span className="ced-hero__meta-sep" aria-hidden="true" />
            <span className="ced-hero__meta-item" role="listitem">
              <Globe size={13} aria-hidden="true" />{edition.pays.length} pays membres
            </span>
            {participantsStat && (
              <>
                <span className="ced-hero__meta-sep" aria-hidden="true" />
                <span className="ced-hero__meta-item" role="listitem">
                  <Users size={13} aria-hidden="true" />{participantsStat.val} participants
                </span>
              </>
            )}
          </motion.div>

        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          GRILLE principale
      ════════════════════════════════════════════════════ */}
      <div className="ced-page">

        <main className="ced-main">

          {/* ① Présentation */}
          <AnimatedSection labelledby="ced-pres" eyebrow="PRÉSENTATION">
            <h2 id="ced-pres" className="ced-h2">Présentation</h2>
            {edition.intro.map((para, i) => (
              <p
                key={i}
                className="ced-text"
                style={i < edition.intro.length - 1 ? { marginBottom: '1rem' } : undefined}
              >
                {para}
              </p>
            ))}
          </AnimatedSection>

          {/* ② Programme — stagger 0.08s */}
          <AnimatedSection labelledby="ced-prog" eyebrow="PROGRAMME TECHNIQUE">
            <h2 id="ced-prog" className="ced-h2">Programme technique</h2>
            <StaggerContainer className="ced-prog-grid" stagger={0.08}>
              {edition.programme.map((item, i) => {
                const Icon = PROG_ICONS[item.icon] ?? Leaf
                return (
                  <motion.div key={i} className="ced-prog-card" variants={itemFadeUp}>
                    <div className="ced-prog-header">
                      <Icon size={20} color="#00AD4C" aria-hidden="true" strokeWidth={1.75} />
                      <h3 className="ced-prog-title">{item.title}</h3>
                    </div>
                    <p className="ced-prog-desc">{item.desc}</p>
                  </motion.div>
                )
              })}
            </StaggerContainer>
          </AnimatedSection>

          {/* ③ Objectifs */}
          <AnimatedSection labelledby="ced-obj" eyebrow="OBJECTIFS">
            <h2 id="ced-obj" className="ced-h2">Objectifs</h2>
            <StaggerContainer className="ced-obj-list-wrap" stagger={0.08}>
              <ol className="ced-obj-list" role="list">
                {edition.objectifs.map((obj, i) => (
                  <motion.li key={i} className="ced-obj-item" role="listitem" variants={itemFadeUp}>
                    <span className="ced-obj-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div className="ced-obj-body">
                      <strong className="ced-obj-title">{obj.title}</strong>
                      <p className="ced-obj-desc">{obj.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </StaggerContainer>
          </AnimatedSection>

          {/* ④ Problématique (optionnel) */}
          {edition.problematique && edition.problematique.length > 0 && (
            <AnimatedSection labelledby="ced-prob" eyebrow="PROBLÉMATIQUE">
              <h2 id="ced-prob" className="ced-h2">Problématique</h2>
              <ul className="ced-icon-list" role="list">
                {edition.problematique.map((p, i) => (
                  <li key={i} className="ced-icon-item" role="listitem">
                    <span className="ced-icon-em" aria-hidden="true">{p.icon}</span>
                    <span className="ced-icon-text">{p.text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {/* ⑤ Piliers agroécologie NSS (optionnel) */}
          {edition.piliers && edition.piliers.length > 0 && (
            <AnimatedSection labelledby="ced-pil" eyebrow="PILIERS AGROÉCOLOGIE NSS">
              <h2 id="ced-pil" className="ced-h2">Les piliers de l&apos;agroécologie NSS</h2>
              <StaggerContainer className="ced-piliers-grid" stagger={0.12}>
                {edition.piliers.map((p, i) => (
                  <motion.div key={i} className={`ced-pilier-card${p.active ? ' ced-pilier-card--active' : ''}`} variants={itemFadeUp}>
                    {p.active && <span className="ced-pilier-badge">CETTE ÉDITION</span>}
                    <span className="ced-pilier-icon" aria-hidden="true">{p.icon}</span>
                    <h3 className="ced-pilier-title">{p.title}</h3>
                    {p.edition != null && <p className="ced-pilier-edition">{p.edition}</p>}
                    <p className="ced-pilier-body">{p.subtitle}</p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          )}

          {/* ⑤ Participants — stats count-up + pays stagger */}
          <AnimatedSection labelledby="ced-part" eyebrow="PARTICIPANTS">
            <h2 id="ced-part" className="ced-h2">Participants</h2>
            <div className="ced-stats-bar">
              <StaggerContainer className="ced-stats-row" stagger={0.1}>
                {edition.stats.map((s) => (
                  <motion.div key={s.label} className="ced-stat" role="listitem" variants={itemFadeUp}>
                    <span className="ced-stat-val"><CountUp value={s.val} /></span>
                    <span className="ced-stat-lbl">{s.label}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
            <StaggerContainer className="ced-pays-grid" stagger={0.05}>
              {edition.pays.map((p) => (
                <motion.span key={p.name} className="ced-pays-badge" role="listitem" variants={itemFadeUp}>
                  <span className="ced-pays-flag" aria-hidden="true">{p.flag}</span>
                  <span className="ced-pays-name">{p.name}</span>
                </motion.span>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* ⑤ Intervenants */}
          {edition.intervenants && edition.intervenants.length > 0 && (
            <AnimatedSection labelledby="ced-interv" eyebrow="INTERVENANTS">
              <h2 id="ced-interv" className="ced-h2">Intervenants clés</h2>
              <ul className="ced-bullet-list" role="list">
                {edition.intervenants.map((iv, i) => (
                  <li key={i} className="ced-bullet-item" role="listitem">
                    <strong className="ced-bullet-strong">{iv.name}</strong>
                    {' — '}
                    <span className="ced-bullet-sub">{iv.role}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {/* ⑥ Citations — stagger slide-left */}
          {edition.citations.length > 0 && (
            <AnimatedSection labelledby="ced-cit" eyebrow="VOIX DU TERRAIN">
              <h2 id="ced-cit" className="ced-h2">Voix du terrain</h2>
              <StaggerContainer className="ced-citations" stagger={0.15}>
                {edition.citations.map((c, i) => (
                  <motion.blockquote key={i} className="ced-quote" variants={itemSlideLeft}>
                    <p className="ced-quote__text">
                      &laquo;&nbsp;{c.text}&nbsp;&raquo;
                    </p>
                    <footer className="ced-quote__foot">
                      — <strong>{c.author}</strong>, {c.role}
                    </footer>
                  </motion.blockquote>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          )}

          {/* ⑦ Distinctions */}
          {edition.distinctions && edition.distinctions.length > 0 && (
            <AnimatedSection labelledby="ced-dist" eyebrow="DISTINCTIONS">
              <h2 id="ced-dist" className="ced-h2">Cérémonie de distinctions</h2>
              <p className="ced-text" style={{ marginBottom: '1.25rem' }}>
                Une cérémonie de distinctions a honoré{' '}
                {edition.distinctionsTotal ?? edition.distinctions.length} personnes
                pour leur contribution exceptionnelle au développement de l&apos;agroécologie
                paysanne en Afrique de l&apos;Ouest.
              </p>
              <ul className="ced-bullet-list" role="list">
                {edition.distinctions.map((d, i) => (
                  <li key={i} className="ced-bullet-item" role="listitem">
                    <strong className="ced-bullet-strong">{d.name}</strong>
                    {d.role && (
                      <>{' — '}<span className="ced-bullet-sub">{d.role}</span></>
                    )}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {/* ⑧ Partenaires */}
          <AnimatedSection labelledby="ced-partners" eyebrow="PARTENAIRES">
            <h2 id="ced-partners" className="ced-h2">Partenaires organisateurs</h2>
            <StaggerContainer className="ced-partenaires-grid" stagger={0.1}>
              {edition.partenaires.map((p) => (
                <motion.div key={p} className="ced-partenaire-card" variants={itemFadeUp}>
                  <span className="ced-partenaire-dot" aria-hidden="true" />
                  <span className="ced-partenaire-name">{p}</span>
                  <span className="ced-partenaire-role">Organisateur</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* ⑨ Navigation — slide-up au scroll */}
          <motion.nav
            ref={navRef}
            className="ced-nav"
            aria-label="Éditions précédente et suivante"
            initial={{ opacity: 0, y: 20 }}
            animate={navInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {edition.prevEdition ? (
              <Link href={`/${locale}${edition.prevEdition.href}`} className="ced-nav__btn">
                <span className="ced-nav__arrow">←</span>
                <span className="ced-nav__info">
                  <span className="ced-nav__label">Édition précédente</span>
                  <span className="ced-nav__title">{edition.prevEdition.label}</span>
                </span>
              </Link>
            ) : <span />}
            {edition.nextEdition ? (
              <Link href={`/${locale}${edition.nextEdition.href}`} className="ced-nav__btn">
                <span className="ced-nav__info" style={{ textAlign: 'right' }}>
                  <span className="ced-nav__label">Édition suivante</span>
                  <span className="ced-nav__title">{edition.nextEdition.label}</span>
                </span>
                <span className="ced-nav__arrow">→</span>
              </Link>
            ) : <span />}
          </motion.nav>

        </main>

        {/* ════════════════════════════════════════════════════
            ASIDE — slide-right au scroll
        ════════════════════════════════════════════════════ */}
        <motion.aside
          ref={asideRef}
          className="ced-aside"
          aria-label="Informations pratiques"
          initial={{ opacity: 0, x: 36 }}
          animate={asideInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >

          {/* ① Infos édition */}
          <div className="ced-acard">
            <h2 className="ced-atitle">Édition {edition.year}</h2>
            <ul className="ced-alist">
              <li className="ced-aitem">
                <Calendar size={13} color="#00AD4C" aria-hidden="true" />
                <span className="ced-akey">Dates</span>
                <span className="ced-aval">{edition.dates}</span>
              </li>
              <li className="ced-aitem">
                <Clock size={13} color="#00AD4C" aria-hidden="true" />
                <span className="ced-akey">Durée</span>
                <span className="ced-aval">{edition.duration}</span>
              </li>
              <li className="ced-aitem">
                <MapPin size={13} color="#00AD4C" aria-hidden="true" />
                <span className="ced-akey">Lieu</span>
                <span className="ced-aval">Niaguis, Sénégal</span>
              </li>
              {participantsStat && (
                <li className="ced-aitem">
                  <Users size={13} color="#00AD4C" aria-hidden="true" />
                  <span className="ced-akey">Participants</span>
                  <span className="ced-aval">{participantsStat.val}</span>
                </li>
              )}
              <li className="ced-aitem">
                <Globe size={13} color="#00AD4C" aria-hidden="true" />
                <span className="ced-akey">Pays</span>
                <span className="ced-aval">{edition.pays.length} pays membres</span>
              </li>
            </ul>
          </div>

          {/* ② Toutes les éditions */}
          <div className="ced-acard">
            <h2 className="ced-atitle">Toutes les éditions</h2>
            <ul className="ced-ed-list">
              {ALL_EDITIONS.map((ed) => {
                const isActive = ed.year === edition.year
                const inner = (
                  <>
                    <div className="ced-ed-row">
                      <span className="ced-ed-label">{ed.label}</span>
                      <span className={`ced-ed-badge ${ed.status === 'upcoming' ? 'ced-ed-badge--upcoming' : 'ced-ed-badge--past'}`}>
                        {ed.status === 'upcoming' ? 'À VENIR' : 'PASSÉ'}
                      </span>
                    </div>
                    <p className="ced-ed-theme">{ed.theme}</p>
                  </>
                )
                return (
                  <li key={ed.year} className={`ced-ed-item${isActive ? ' ced-ed-item--active' : ''}`}>
                    {ed.href !== null ? (
                      <Link href={`/${locale}${ed.href}`} className="ced-ed-link">
                        {inner}
                      </Link>
                    ) : (
                      <span className="ced-ed-link ced-ed-link--disabled" aria-disabled="true">
                        {inner}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ③ Partenaires */}
          <div className="ced-acard">
            <h2 className="ced-atitle">Partenaires</h2>
            <ul className="ced-plist">
              {edition.partenaires.map((p) => (
                <li key={p} className="ced-pitem">
                  <span className="ced-pdot" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* ④ Financement (optionnel) */}
          {edition.financeurs && edition.financeurs.length > 0 && (
            <div className="ced-acard">
              <h2 className="ced-atitle">Financement</h2>
              <ul className="ced-plist">
                {edition.financeurs.map((f) => (
                  <li key={f} className="ced-pitem">
                    <span className="ced-pdot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ⑤ Contact */}
          <div className="ced-acard">
            <h2 className="ced-atitle">Contact NSS</h2>
            <ul className="ced-alist">
              <li className="ced-aitem">
                <Phone size={13} color="#00AD4C" aria-hidden="true" />
                <a href="tel:+221776470231" className="ced-alink">+221 77 647 02 31</a>
              </li>
              <li className="ced-aitem">
                <Mail size={13} color="#00AD4C" aria-hidden="true" />
                <a href="mailto:mamadou@fahamu.org" className="ced-alink">mamadou@fahamu.org</a>
              </li>
              <li className="ced-aitem">
                <ExternalLink size={13} color="#00AD4C" aria-hidden="true" />
                <a href="https://wasafrica.org" target="_blank" rel="noopener noreferrer" className="ced-alink">
                  wasafrica.org
                </a>
              </li>
            </ul>
          </div>

          {/* ⑤ CTA */}
          <div className="ced-acard ced-acard--cta">
            <Link href={`/${locale}/agir/rejoindre`} className="ced-cta-btn">
              Participer au prochain CIFAP
            </Link>
          </div>

        </motion.aside>
      </div>

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`

        /* ── HERO ── */
        .ced-hero {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
          background-image: url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg');
          background-size: cover;
          background-position: center 40%;
          color: #fff;
        }
        .ced-hero__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(4,86,39,0.92) 0%, rgba(4,86,39,0.85) 35%, rgba(0,50,25,0.70) 65%, rgba(0,0,0,0.50) 100%);
        }
        .ced-hero__body {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px clamp(1.5rem, 5vw, 4rem) 60px;
        }

        /* Fil d'Ariane */
        .ced-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .ced-breadcrumb__link {
          position: relative;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.18s;
        }
        .ced-breadcrumb__link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #A5CE46;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .ced-breadcrumb__link:hover { color: #A5CE46; }
        .ced-breadcrumb__link:hover::after { transform: scaleX(1); }
        .ced-breadcrumb__sep    { color: rgba(255,255,255,0.25); font-size: 13px; }
        .ced-breadcrumb__current {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.70);
        }

        /* Badges */
        .ced-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .ced-badge {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
        }
        .ced-badge--edition { background: #A5CE46; color: #2A2A2A; }
        .ced-badge--closed {
          background: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .ced-hero__h1 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(26px, 3.5vw, 52px);
          font-weight: 700;
          line-height: 1.18;
          color: #ffffff;
          margin: 0 0 1.5rem;
          max-width: 700px;
          letter-spacing: -0.02em;
        }
        .ced-hero__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ced-hero__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          color: #F5EDD6;
        }
        .ced-hero__meta-sep {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.18);
          flex-shrink: 0;
        }

        /* ── LAYOUT ── */
        .ced-page {
          display: grid;
          grid-template-columns: 1fr 309px;
          gap: 3rem;
          align-items: start;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem clamp(1rem, 3vw, 2rem) 5rem;
        }
        .ced-main {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* ── SECTIONS ── */
        .ced-section {
          padding: 3.5rem 0;
          border-bottom: 1px solid #f0efeb;
          background: #ffffff;
        }
        .ced-section:last-of-type { border-bottom: none; }

        .ced-h2 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 1.25rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .ced-eyebrow {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
        }
        .ced-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.85;
          color: #2C2C28;
          margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Programme 2 colonnes cards ── */
        .ced-prog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .ced-prog-card {
          background: #FAFAF8;
          border-radius: 8px;
          padding: 20px 20px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: background 0.22s, transform 0.22s;
        }
        .ced-prog-card:hover {
          background: #F5F3EE;
          transform: translateX(3px);
          box-shadow: 0 2px 12px rgba(0,173,76,0.08);
        }
        .ced-prog-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ced-prog-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0;
          line-height: 1.3;
        }
        .ced-prog-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          color: #2C2C28;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
          hyphens: auto;
          padding-left: 30px;
        }

        /* ── Objectifs numérotés ── */
        .ced-obj-list-wrap { }
        .ced-obj-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .ced-obj-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(165,206,70,0.25);
          align-items: start;
        }
        .ced-obj-item:last-child { border-bottom: none; }
        .ced-obj-num {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #A5CE46;
          opacity: 0.45;
          line-height: 1;
        }
        .ced-obj-body { display: flex; flex-direction: column; gap: 6px; }
        .ced-obj-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.3;
        }
        .ced-obj-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          color: #2C2C28;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
          hyphens: auto;
        }

        /* ── Piliers agroécologie ── */
        .ced-piliers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ced-pilier-card {
          background: #ffffff;
          border: 1px solid rgba(165,206,70,0.45);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .ced-pilier-card--active {
          background: #F9F7F3;
          border-color: #A5CE46;
          opacity: 1;
          box-shadow: 0 4px 20px rgba(0,173,76,0.12);
        }
        .ced-pilier-badge {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
          margin-bottom: 4px;
        }
        .ced-pilier-icon { font-size: 24px; line-height: 1; }
        .ced-pilier-title {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0;
        }
        .ced-pilier-edition {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 12px;
          color: #A5CE46;
          margin: 0;
        }
        .ced-pilier-body {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 13px;
          color: #2C2C28;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Stats bar ── */
        .ced-stats-bar {
          background: #FAFAF8;
          border-radius: 12px;
          padding: 28px 24px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(165,206,70,0.20);
        }
        .ced-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .ced-stat {
          text-align: center;
          padding: 0 16px;
          border-right: 1px solid rgba(165,206,70,0.30);
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: transparent;
        }
        .ced-stat:last-child { border-right: none; }
        .ced-stat-val {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ced-stat-lbl {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #2C2C28;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.35;
        }

        /* ── Pays badges ── */
        .ced-pays-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ced-pays-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #045627;
          color: #F5EDD6;
          border-radius: 999px;
          padding: 8px 16px;
        }
        .ced-pays-flag { font-size: 24px; line-height: 1; flex-shrink: 0; }
        .ced-pays-name {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #F5EDD6;
          white-space: nowrap;
        }

        /* ── Listes bullet vert (intervenants, distinctions) ── */
        .ced-bullet-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ced-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          text-align: justify;
        }
        .ced-bullet-item::before {
          content: '';
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
          margin-top: 0.62em;
        }
        .ced-bullet-strong { font-weight: 700; color: #2A2A2A; }
        .ced-bullet-sub    { color: #666; }

        /* ── Partenaires grid ── */
        .ced-partenaires-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .ced-partenaire-card {
          background: #ffffff;
          border: 1px solid rgba(165,206,70,0.40);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ced-partenaire-card:hover {
          border-color: #00AD4C;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,173,76,0.10);
        }
        .ced-partenaire-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,173,76,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ced-partenaire-name {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
        }
        .ced-partenaire-role {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 12px;
          font-style: italic;
          color: #A5CE46;
        }

        /* ── Citations redesign ── */
        .ced-citations {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ced-quote {
          background: #F9F7F3;
          border: 1px solid rgba(232,168,56,0.22);
          border-radius: 8px;
          padding: 24px 24px 20px;
          margin: 0;
          position: relative;
        }
        .ced-quote::before {
          content: '”';
          position: absolute;
          top: 8px;
          left: 16px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 72px;
          color: #A5CE46;
          opacity: 0.15;
          line-height: 1;
          pointer-events: none;
        }
        .ced-quote__text {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.65;
          color: #2A2A2A;
          margin: 0 0 14px;
          text-align: justify;
          padding-top: 12px;
        }
        .ced-quote__foot {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 13px;
          color: #2C2C28;
          margin: 0;
        }
        .ced-quote__foot strong { font-weight: 700; color: #2A2A2A; }

        /* ── Navigation ── */
        .ced-nav {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 2.5rem 0 2rem;
          border-top: 1px solid #f0efeb;
        }
        .ced-nav__btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: #ffffff;
          border: 1px solid #e4e1d9;
          border-radius: 8px;
          text-decoration: none;
          transition: border-color 0.18s, background 0.18s, transform 0.18s, box-shadow 0.18s;
          max-width: 48%;
        }
        .ced-nav__btn:hover {
          border-color: #A5CE46;
          background: rgba(165,206,70,0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .ced-nav__arrow {
          font-size: 20px;
          color: #A5CE46;
          flex-shrink: 0;
          line-height: 1;
        }
        .ced-nav__info   { display: flex; flex-direction: column; gap: 3px; }
        .ced-nav__label  {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #aaa;
        }
        .ced-nav__title  {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #2A2A2A;
        }

        /* ── ASIDE blanc pur, border vert clair ── */
        .ced-aside {
          position: sticky;
          top: calc(68px + 2rem);
          width: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #A5CE46;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(4,86,39,0.08);
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .ced-acard {
          padding: 20px 24px;
          border-bottom: 1px solid #eef5e8;
          background: #ffffff;
        }
        .ced-acard:last-of-type { border-bottom: none; }

        .ced-atitle {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 12px;
        }
        .ced-alist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ced-aitem {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .ced-akey {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
          min-width: 38px;
          flex-shrink: 0;
        }
        .ced-aval {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          color: #555;
          margin-left: auto;
          text-align: right;
        }
        .ced-alink {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14.5px;
          color: #00AD4C;
          text-decoration: none;
          word-break: break-all;
          transition: color 0.15s;
        }
        .ced-alink:hover { color: #045627; text-decoration: underline; }

        .ced-plist {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ced-pitem {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 15px;
          color: #2C2C28;
        }
        .ced-pdot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #A5CE46;
          flex-shrink: 0;
        }

        /* ── Liste éditions aside ── */
        .ced-ed-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ced-ed-item {
          border-radius: 5px;
          overflow: hidden;
        }
        .ced-ed-item--active {
          background: rgba(0,173,76,0.07);
        }
        .ced-ed-link {
          display: block;
          padding: 8px 10px;
          text-decoration: none;
          transition: background 0.14s;
        }
        .ced-ed-item:not(.ced-ed-item--active) .ced-ed-link:hover {
          background: rgba(165,206,70,0.06);
        }
        .ced-ed-link--disabled { cursor: default; opacity: 0.55; }
        .ced-ed-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 3px;
        }
        .ced-ed-label {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.2;
        }
        .ced-ed-item--active .ced-ed-label { color: #045627; font-weight: 800; }
        .ced-ed-badge {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 3px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .ced-ed-badge--past     { background: #f2f2f2; color: #999; }
        .ced-ed-badge--upcoming { background: rgba(232,168,56,0.15); color: #b8871a; }
        .ced-ed-theme {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 13px;
          color: #888;
          line-height: 1.4;
          margin: 0;
        }

        /* ── CTA ── */
        .ced-acard--cta { padding: 16px 20px; }
        .ced-cta-btn {
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif, sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #ffffff;
          background: #00AD4C;
          padding: 15px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .ced-cta-btn:hover { background: #045627; transform: scale(1.02); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ced-page { grid-template-columns: 1fr 265px; }
          .ced-piliers-grid { grid-template-columns: 1fr; gap: 12px; }
          .ced-prog-desc { padding-left: 0; }
          .ced-stats-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .ced-page { grid-template-columns: 1fr; padding: 1.5rem 1rem 3rem; }
          .ced-main  { order: 1; }
          .ced-aside { order: 2; position: static; max-height: none; overflow-y: visible; }
          .ced-prog-grid    { grid-template-columns: 1fr; }
          .ced-piliers-grid { grid-template-columns: 1fr; }
          .ced-partenaires-grid { grid-template-columns: 1fr; }
          .ced-stats-bar    { padding: 16px; }
          .ced-stats-row    { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .ced-stat         { border-right: none; border-bottom: 1px solid rgba(165,206,70,0.20); padding: 0 8px 16px; }
          .ced-stat:last-child { border-bottom: none; }
          .ced-stat-val     { font-size: 36px; }
          .ced-obj-item     { grid-template-columns: 40px 1fr; gap: 12px; }
          .ced-obj-num      { font-size: 32px; }
          .ced-quote__text  { font-size: 16px; }
          .ced-hero { min-height: 300px; }
          .ced-hero__body { padding: 48px 1.25rem 40px; }
          .ced-hero__h1   { font-size: clamp(20px, 5.5vw, 28px); }
        }
        @media (max-width: 480px) {
          .ced-hero__meta-sep { display: none; }
          .ced-nav__btn { padding: 12px 14px; }
          .ced-stats-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  )
}
