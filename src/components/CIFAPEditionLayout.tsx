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
                  <motion.div key={i} className="ced-prog-item" variants={itemFadeUp}>
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
            <ul className="ced-icon-list" role="list">
              {edition.objectifs.map((obj, i) => (
                <li key={i} className="ced-icon-item" role="listitem">
                  <span className="ced-icon-em" aria-hidden="true">{obj.icon}</span>
                  <span className="ced-icon-text">
                    <strong className="ced-icon-strong">{obj.title}</strong>
                    {' — '}{obj.desc}
                  </span>
                </li>
              ))}
            </ul>
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
              <ul className="ced-icon-list" role="list">
                {edition.piliers.map((p, i) => (
                  <li key={i} className="ced-icon-item" role="listitem">
                    <span className="ced-icon-em" aria-hidden="true">{p.icon}</span>
                    <span className="ced-icon-text">
                      <strong className="ced-icon-strong">{p.title}</strong>
                      {' — '}{p.subtitle}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {/* ⑤ Participants — stats count-up + pays stagger */}
          <AnimatedSection labelledby="ced-part" eyebrow="PARTICIPANTS">
            <h2 id="ced-part" className="ced-h2">Participants</h2>
            <StaggerContainer className="ced-stats-row" stagger={0.1}>
              {edition.stats.map((s) => (
                <motion.div key={s.label} className="ced-stat" role="listitem" variants={itemFadeUp}>
                  <span className="ced-stat-val"><CountUp value={s.val} /></span>
                  <span className="ced-stat-lbl">{s.label}</span>
                </motion.div>
              ))}
            </StaggerContainer>
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
            <ul className="ced-bullet-list" role="list">
              {edition.partenaires.map((p) => (
                <li key={p} className="ced-bullet-item" role="listitem">{p}</li>
              ))}
            </ul>
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
          min-height: 380px;
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
            linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(2,6,3,0.92) 40%, rgba(4,12,6,0.78) 65%, rgba(0,0,0,0.50) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, transparent 25%, rgba(0,0,0,0.25) 100%);
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
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
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
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
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
          font-family: var(--font-body), sans-serif;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 4px;
        }
        .ced-badge--edition { background: #A5CE46; color: #2A2A2A; }
        .ced-badge--closed {
          background: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .ced-hero__h1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 52px);
          font-weight: 700;
          line-height: 1.18;
          color: #ffffff;
          margin: 0 0 1.5rem;
          max-width: 720px;
          letter-spacing: -0.01em;
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
          font-family: var(--font-body), sans-serif;
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
          gap: 2rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 5rem;
        }
        .ced-main {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* ── SECTIONS ── */
        .ced-section {
          padding: 2.5rem 0;
          border-bottom: 1px solid #f0efeb;
          background: #ffffff;
        }
        .ced-section:last-of-type { border-bottom: none; }

        .ced-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0 0 1.25rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .ced-eyebrow {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #A5CE46;
          margin: 0 0 10px;
        }
        .ced-text {
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.85;
          color: #2C2C28;
          margin: 0;
          text-align: justify;
        }

        /* ── Programme 2 colonnes SVG ── */
        .ced-prog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 40px;
        }
        .ced-prog-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ced-prog-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ced-prog-title {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #2A2A2A;
          margin: 0;
          line-height: 1.3;
        }
        .ced-prog-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #2C2C28;
          line-height: 1.78;
          margin: 0;
          text-align: justify;
          padding-left: 30px;
        }

        /* ── Objectifs ── */
        .ced-icon-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ced-icon-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-body), sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          text-align: justify;
        }
        .ced-icon-em   { font-size: 18px; flex-shrink: 0; line-height: 1.5; min-width: 22px; text-align: center; }
        .ced-icon-text { flex: 1; min-width: 0; }
        .ced-icon-strong { font-weight: 700; color: #2A2A2A; }

        /* ── Stats — blanc + border vert ── */
        .ced-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 1.5rem;
        }
        .ced-stat {
          border: none;
          background: transparent;
          padding: 12px 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .ced-stat-val {
          font-family: var(--font-display), Georgia, serif;
          font-size: 40px;
          font-weight: 700;
          color: #00AD4C;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ced-stat-lbl {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: #888;
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
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #F5EDD6;
          white-space: nowrap;
        }

        /* ── Listes bullet vert ── */
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
          font-family: var(--font-body), sans-serif;
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

        /* ── Citations — beige conservé ── */
        .ced-citations {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ced-quote {
          background: #F9F7F3;
          border: 1px solid rgba(232,168,56,0.22);
          border-radius: 8px;
          padding: 20px 24px;
          margin: 0;
        }
        .ced-quote__text {
          font-family: var(--font-display), Georgia, serif;
          font-size: 15px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.78;
          color: #2A2A2A;
          margin: 0 0 10px;
          text-align: justify;
        }
        .ced-quote__foot {
          font-family: var(--font-body), sans-serif;
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
          padding: 14px 20px;
          background: #ffffff;
          border: 1px solid #e4e1d9;
          border-radius: 6px;
          text-decoration: none;
          transition: border-color 0.18s, background 0.18s;
          max-width: 48%;
        }
        .ced-nav__btn:hover {
          border-color: #A5CE46;
          background: rgba(165,206,70,0.05);
        }
        .ced-nav__arrow {
          font-size: 20px;
          color: #A5CE46;
          flex-shrink: 0;
          line-height: 1;
        }
        .ced-nav__info   { display: flex; flex-direction: column; gap: 3px; }
        .ced-nav__label  {
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #aaa;
        }
        .ced-nav__title  {
          font-family: var(--font-body), sans-serif;
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
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(4,86,39,0.08);
        }
        .ced-acard {
          padding: 18px 20px;
          border-bottom: 1px solid #eef5e8;
          background: #ffffff;
        }
        .ced-acard:last-of-type { border-bottom: none; }

        .ced-atitle {
          font-family: var(--font-body), sans-serif;
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
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
          min-width: 38px;
          flex-shrink: 0;
        }
        .ced-aval {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          color: #555;
          margin-left: auto;
          text-align: right;
        }
        .ced-alink {
          font-family: var(--font-body), sans-serif;
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
          font-family: var(--font-body), sans-serif;
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
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2A2A2A;
          line-height: 1.2;
        }
        .ced-ed-item--active .ced-ed-label { color: #045627; font-weight: 800; }
        .ced-ed-badge {
          font-family: var(--font-body), sans-serif;
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
          font-family: var(--font-body), sans-serif;
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
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ffffff;
          background: #00AD4C;
          padding: 13px 16px;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .ced-cta-btn:hover { background: #045627; transform: scale(1.02); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ced-page { grid-template-columns: 1fr 265px; }
        }
        @media (max-width: 768px) {
          .ced-page { grid-template-columns: 1fr; padding: 1.5rem 1rem 3rem; }
          .ced-main  { order: 1; }
          .ced-aside { order: 2; position: static; }
          .ced-prog-grid  { grid-template-columns: 1fr; gap: 20px; }
          .ced-prog-desc  { padding-left: 0; }
          .ced-stats-row  { grid-template-columns: 1fr 1fr; }
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
