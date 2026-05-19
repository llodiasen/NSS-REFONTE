'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import './HomepageV2.css'
import ContactSectionRedesign from './ContactSectionRedesign'
import MapLeaflet from './MapLeaflet'

/* ─── Scroll reveal ─────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const rv = document.querySelectorAll('.hpv2-rv')
    const sg = document.querySelectorAll('.hpv2-sg')
    if (!('IntersectionObserver' in window)) {
      rv.forEach(e => e.classList.add('is-in'))
      sg.forEach(e => e.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    rv.forEach(e => io.observe(e))
    sg.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
}

/* ─── Counter animation ─────────────────────────────────────── */
function useCounters() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]')
    if (!els.length || !('IntersectionObserver' in window)) return
    const animate = (el: Element) => {
      const target = parseFloat((el as HTMLElement).dataset.count || '0')
      const suffix = (el as HTMLElement).dataset.suffix || ''
      const dur = 1800
      const start = performance.now()
      const fmt = (v: number) =>
        target >= 1000 ? Math.round(v).toLocaleString('fr-FR') : Math.round(v).toString()
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        ;(el as HTMLElement).textContent = fmt(eased * target) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target) } }),
      { threshold: 0.5 }
    )
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
}

/* ═══════════════════════════════════════════════════════════════
   S1 — HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ locale }: { locale: string }) {
  return (
    <section className="hpv2-hero">
      <div className="hpv2-hero-bg" aria-hidden="true" />

      <div className="hpv2-scroll-hint" aria-hidden="true">
        <span>Défiler</span>
        <i />
      </div>

      <div className="hpv2-hero-content">
        <div className="hpv2-overtitle">Mouvement de femmes rurales africaines</div>
        <h1 className="hpv2-hero-h1">
          Par nous-mêmes,
          <em>{`nous nourrissons l'Afrique.`}</em>
        </h1>
        <p className="hpv2-hero-lede">
          Depuis 2011, 175&nbsp;000 femmes rurales organisées en 500 associations dans
          14 pays défendent leur souveraineté alimentaire — du village aux instances continentales.
        </p>
        <div className="hpv2-hero-cta">
          <Link href={`/${locale}/agir/rejoindre`} className="hpv2-btn hpv2-btn-prim">
            Rejoindre le mouvement
          </Link>
          <button className="hpv2-btn-video" type="button" aria-label="Regarder le film NSS">
            <span className="hpv2-play-circle">
              <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
            </span>
            Regarder le film
          </button>
        </div>
      </div>

      <div className="hpv2-hero-stats" aria-label="Chiffres clés NSS">
        <div className="hpv2-hero-stats-inner">
          {[
            { n: 175000, suffix: '',    label: 'Membres actives' },
            { n: 500,    suffix: '+',   label: 'Associations' },
            { n: 14,     suffix: '',    label: 'Pays membres' },
            { n: 14,     suffix: ' ans', label: "D'engagement" },
          ].map((s, i) => (
            <div key={i} className="hpv2-hero-stat">
              <span className="hn" data-count={s.n} data-suffix={s.suffix}>
                {s.n.toLocaleString('fr-FR')}{s.suffix}
              </span>
              <span className="hl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S2 — MANIFESTO (3 cards)
   ═══════════════════════════════════════════════════════════════ */
const MANIFESTO_CARDS = [
  {
    num: '01',
    quote: 'Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.',
    body: `Avec une meilleure implication des femmes rurales dans l'agriculture et un accès renforcé aux ressources — information, formation, équipement — elles sont aptes à nourrir le monde.`,
    tag: 'FEMMES & AGRICULTURE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
      </svg>
    ),
  },
  {
    num: '02',
    quote: 'Produisons ce que nous consommons et consommons ce que nous produisons.',
    body: `Les pays ouest-africains exportent de bonnes récoltes et importent des aliments plus chers, souvent de moindre qualité. Le coût pour les familles est énorme — culinaire, économique, sanitaire.`,
    tag: 'SOUVERAINETÉ ALIMENTAIRE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l18 18" />
        <path d="M9 3a6 6 0 0 1 6 6" />
        <path d="M6 9a6 6 0 0 0 6 6" />
        <path d="M12 9a6 6 0 0 1 6 6" />
        <path d="M9 18a6 6 0 0 0 6 -6" />
        <path d="M6 21l.5 -.5" />
      </svg>
    ),
  },
  {
    num: '03',
    quote: 'Préservons la semence paysanne et développons la biodiversité.',
    body: `Les semences sont le premier élément du système alimentaire. Leur diversité paysanne et leur adaptation naturelle au climat doivent être protégées — il est inconcevable qu'elles soient privatisées.`,
    tag: 'SEMENCES PAYSANNES',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
        <path d="M12 14a6 6 0 0 1 6 -6h3v2a6 6 0 0 1 -6 6h-3" />
        <path d="M12 20l0 -10" />
      </svg>
    ),
  },
]

function ManifestoSection() {
  const [activeCard, setActiveCard] = useState(0)
  return (
    <section className="hpv2-manifesto">
      <div className="hpv2-manifesto-head">
        <div className="hpv2-manifesto-surtitle">
          <span className="hpv2-manifesto-line" aria-hidden="true" />
          NOTRE MANIFESTE
          <span className="hpv2-manifesto-line" aria-hidden="true" />
        </div>
        <h2 className="hpv2-manifesto-h2">
          Trois convictions, <em>un mouvement.</em>
        </h2>
        <div className="hpv2-manifesto-underline" aria-hidden="true" />
        <p className="hpv2-manifesto-lede">{`Trois principes ancrés dans les pratiques et les savoirs des femmes rurales d’Afrique de l’Ouest.`}</p>
      </div>

      <div className="hpv2-manifesto-grid">
        {MANIFESTO_CARDS.map((c, i) => (
          <div
            key={i}
            className={`hpv2-mcard${activeCard === i ? ' is-active' : ''}`}
            onClick={() => setActiveCard(i)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setActiveCard(i)}
            aria-pressed={activeCard === i}
          >
            <div className="hpv2-mcard-top">
              <span className="hpv2-mcard-icon">{c.icon}</span>
              <span className="hpv2-mcard-num" aria-hidden="true">{c.num}</span>
            </div>
            <blockquote className="hpv2-mcard-quote">
              <span className="hpv2-mcard-guillemet">{'«'}</span>
              {' '}{c.quote}{' '}
              <span className="hpv2-mcard-guillemet">{'»'}</span>
            </blockquote>
            <hr className="hpv2-mcard-sep" />
            <p className="hpv2-mcard-body">{c.body}</p>
            <span className="hpv2-mcard-tag">
              <svg className="hpv2-mcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
              </svg>
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S3 — MOUVEMENT + CARTE
   ═══════════════════════════════════════════════════════════════ */
function MouvementSection() {
  return (
    <section className="hpv2-mouvement">
      <div className="hpv2-wrap-n">
        <div className="hpv2-mouvement-grid">
          <div className="hpv2-rv">
            <div className="hpv2-surtitle left">Le mouvement</div>
            <h2 className="hpv2-h2">Un réseau panafricain, <em>ancré dans 14 pays.</em></h2>
            <hr className="hpv2-rule" />
            <p style={{ marginTop: 12, fontFamily: 'var(--fb)', fontSize: 16, fontWeight: 300, color: 'black', lineHeight: 1.8, textAlign: 'justify' }}>
              {`En Afrique de l'Ouest, l'agriculture familiale nourrit 70% des populations. NSS fédère celles qui en sont le pilier — les femmes rurales — pour qu'elles décident, cultivent et transmettent en toute souveraineté.`}
            </p>

            <div className="hpv2-mouvement-stats">
              {[
                { n: 175, suffix: '', label: 'Membres (×1000)', desc: "Femmes engagées à travers l'Afrique de l'Ouest" },
                { n: 500, suffix: '+', label: 'Associations', desc: 'Associations rurales membres du réseau NSS' },
                { n: 14,  suffix: '',  label: 'Pays membres', desc: 'Du Sénégal au Ghana, un réseau en expansion' },
                { n: 70,  suffix: '%', label: "De l'alimentation", desc: 'Part de la production agricole familiale en Afrique' },
              ].map((s, i) => (
                <div key={i} className="hpv2-mstat">
                  <span className="mn" data-count={s.n} data-suffix={s.suffix}>{s.n}{s.suffix}</span>
                  <span className="ml">{s.label}</span>
                  <span className="md">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hpv2-map-card hpv2-rv">
            <div className="hpv2-map-head">
              <span className="hpv2-map-title">Carte du mouvement</span>
              <span className="hpv2-map-info">{`Afrique de l'Ouest`}</span>
            </div>
            <MapLeaflet />
            <div className="hpv2-map-foot">
              <span><strong>★</strong> Siège : Dakar, Sénégal</span>
              <span>Source NSS · 2025</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S4 — MISSION SPLIT
   ═══════════════════════════════════════════════════════════════ */
const MISSION_TABS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-9"/><path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7"/><path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5"/></svg>,
    label: "Promouvoir l'agroécologie",
    body: "Nous valorisons les savoirs agricoles transmis de génération en génération — semences paysannes, biodiversité, pratiques endogènes. L'agriculture familiale nourrit l'Afrique depuis des siècles. Nous la défendons.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    label: "Amplifier la voix des paysannes",
    body: "Les femmes rurales produisent l'essentiel de l'alimentation du continent, mais restent exclues des décisions qui les concernent. NSS porte leur voix dans les instances locales, nationales et continentales.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg>,
    label: "Bâtir un mouvement continental",
    body: "Née dans 5 pays, NSS s'étend à travers l'Afrique de l'Ouest. Un réseau de solidarité où chaque association renforce les autres pour un impact durable et souverain.",
  },
]

function MissionSection({ locale }: { locale: string }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <section className="hpv2-mission">
      <div className="hpv2-wrap-n">
        <div className="hpv2-mission-grid">
          <div className="hpv2-rv hpv2-mission-body">
            <div className="hpv2-surtitle left">Notre raison d&apos;être</div>
            <h2 className="hpv2-h2">Une solution née du terrain, <em>portée par les femmes.</em></h2>
            <hr className="hpv2-rule" />

            {/* Tabs */}
            <div className="hpv2-mission-tabs" role="tablist">
              {MISSION_TABS.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={activeTab === i}
                  className={`hpv2-mission-tab${activeTab === i ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <span className="hpv2-mission-tab-icon" aria-hidden="true">{t.icon}</span>
                  <span className="hpv2-mission-tab-label">{t.label}</span>
                </button>
              ))}
            </div>
            <div className="hpv2-mission-tab-panel" role="tabpanel">
              <p>{MISSION_TABS[activeTab].body}</p>
            </div>

            <Link href={`/${locale}/a-propos`} className="hpv2-btn hpv2-btn-outline">
              Découvrir notre histoire →
            </Link>
          </div>

          <aside className="hpv2-mission-side hpv2-rv">
            <div className="hpv2-mission-video-wrap">
              <div className="hpv2-mission-badge">
                <span className="mn" data-count="70" data-suffix="%">70%</span>
                <span className="ml">{`DE L'ALIMENTATION ASSURÉE PAR ELLES`}</span>
              </div>
              <div className="hpv2-mission-video" role="button" tabIndex={0} aria-label="Regarder la vidéo de Mariama Sonko">
                <Image
                  src="/images/actualites/lutte-mariama-sonko-agroecologie.jpg"
                  alt="Mariama Sonko — Présidente NSS, agroécologie"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hpv2-mission-video-img"
                />
                <div className="hpv2-mission-play">
                  <span className="hpv2-play-circle">
                    <svg viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                  </span>
                  <span>Regarder la vidéo</span>
                </div>
                <div className="hpv2-video-foot">
                  <div className="hpv2-video-kicker">Mariama Sonko — Présidente NSS</div>
                  <h3 className="hpv2-video-h3">Au Sénégal : Le Combat des Agricultrices</h3>
                  <div className="hpv2-video-meta">{`Afrique de l'Ouest · 2024`}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S5 — VOIX DU TERRAIN
   ═══════════════════════════════════════════════════════════════ */
function VoixSection() {
  return (
    <section className="hpv2-voix">
      <div className="hpv2-voix-bg" aria-hidden="true" />
      <div className="hpv2-voix-inner">
        <div className="hpv2-rv">
          <div className="hpv2-voix-label">Voix du terrain</div>
          <p className="hpv2-voix-quote">
            Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.
          </p>
          <div className="hpv2-voix-author">
            <span className="hpv2-voix-avatar">MS</span>
            <div>
              <div className="hpv2-voix-who">Mariama Sonko</div>
              <div className="hpv2-voix-role">Présidente — Nous Sommes la Solution</div>
            </div>
          </div>
        </div>

        <div className="hpv2-voix-cards hpv2-sg">
          <article className="hpv2-voix-card">
            <div className="hpv2-card-kicker">Témoignage · Sénégal</div>
            <p className="hpv2-card-text">
              {`« Grâce au CIFAP, j'ai appris des techniques que j'applique directement dans mon groupement. Nos récoltes ont augmenté et nous n'avons plus besoin de produits chimiques. »`}
            </p>
            <div className="hpv2-card-sig">
              <strong>Tabara Diatta</strong> · Participante CIFAP 2024
            </div>
          </article>
          <article className="hpv2-voix-card">
            <div className="hpv2-card-kicker">Témoignage · Burkina Faso</div>
            <p className="hpv2-card-text">
              « La semence paysanne est notre identité. NSS nous donne les moyens de la défendre
              et de la transmettre — au village comme aux ministères. »
            </p>
            <div className="hpv2-card-sig">
              <strong>Rosalie Ouoba</strong> · RESACIFROAT
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S7 — PROGRAMMES
   ═══════════════════════════════════════════════════════════════ */
const PROG_BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  'À venir':          { bg: '#045627', text: '#A5CE46' },
  'Dernière édition': { bg: '#1e3a5f', text: '#93c5fd' },
  'Passé':            { bg: '#4b5563', text: '#d1d5db' },
}
const PROGRAMMES = [
  {
    type: 'CIFAP · Formation agroécologique',
    badge: 'À venir',
    title: 'Camp International de Formation en Agroécologie Paysanne',
    sub: '5ème édition · Septembre 2026',
    date: 'Sept. 2026',
    lieu: 'Niaguis, Sénégal',
    meta3: { icon: 'users', label: 'PARTICIPANTS', value: '40–50 / 8 pays' },
    body: `À Niaguis (Sénégal), des femmes agricultrices de toute l'Afrique de l'Ouest se retrouvent pour apprendre, échanger et repartir avec des savoirs agroécologiques concrets à partager dans leurs communautés.`,
    href: '/programmes/cifap',
    cta: 'Voir les éditions',
    img: '/images/actualites/nss-cifap-2025.jpg',
    imgAlt: 'CIFAP 2025 — Camp de formation agroécologique à Niaguis',
    variant: 'green',
  },
  {
    type: 'Rencontre NSS · Assemblée continentale',
    badge: 'Dernière édition',
    title: 'Rencontre Annuelle NSS — Kindia 2025',
    sub: 'Guinée · Octobre 2025',
    date: 'Oct. 2025',
    lieu: 'Kindia, Guinée',
    meta3: { icon: 'world', label: 'PAYS', value: '7 pays' },
    body: `Les déléguées des associations membres de 7 pays se sont réunies à Kindia pour orienter le mouvement, partager les avancées terrain et renforcer la solidarité panafricaine.`,
    href: '/mouvement',
    cta: 'En savoir plus',
    img: '/images/actualites/rencontre-2025.jpg',
    imgAlt: 'Rencontre annuelle NSS 2025 — Kindia, Guinée',
    variant: 'blue',
  },
  {
    type: 'Foire NSS · Souveraineté alimentaire',
    badge: 'Passé',
    title: 'Foire de Djimini — Semences Paysannes 2024',
    sub: 'Casamance · Décembre 2024',
    date: 'Déc. 2024',
    lieu: 'Casamance, Sénégal',
    meta3: { icon: 'seeding', label: 'THÈME', value: 'Semences' },
    body: `Un festival d'agroécologie qui célèbre les semences paysannes, les savoir-faire de transformation et l'autonomie alimentaire des femmes rurales de la région.`,
    href: '/programmes',
    cta: 'En savoir plus',
    img: '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
    imgAlt: 'Foire de Djimini 2024 — Semences paysannes, Casamance',
    variant: 'green',
  },
]

function ProgMetaIcon({ name }: { name: string }) {
  if (name === 'calendar') return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/>
      <path d="M16 3v4M8 3v4M4 11h16"/>
    </svg>
  )
  if (name === 'map-pin') return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
    </svg>
  )
  if (name === 'users') return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
    </svg>
  )
  if (name === 'world') return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/>
      <path d="M3.6 9h16.8M3.6 15h16.8"/>
      <path d="M11.5 3a17 17 0 0 0 0 18"/>
      <path d="M12.5 3a17 17 0 0 1 0 18"/>
    </svg>
  )
  if (name === 'seeding') return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3"/>
      <path d="M12 14a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3"/>
      <path d="M12 20v-10"/>
    </svg>
  )
  return null
}

function ProgrammesSection({ locale }: { locale: string }) {
  return (
    <section className="hpv2-programmes">
      <div className="hpv2-wrap">
        <div className="hpv2-sec-head hpv2-rv">
          <div className="hpv2-surtitle">Programmes &amp; événements</div>
          <h2 className="hpv2-h2">Nos rendez-vous pour la <em>souveraineté alimentaire.</em></h2>
          <hr className="hpv2-rule center" />
          <p className="hpv2-lede">
            {`Formation, rencontre, foire — trois rendez-vous qui rassemblent les femmes rurales d'Afrique de l'Ouest.`}
          </p>
        </div>
        <div className="hpv2-prog-grid hpv2-sg">
          {PROGRAMMES.map((p, i) => {
            const badgeColors = PROG_BADGE_COLORS[p.badge] ?? PROG_BADGE_COLORS['Passé']
            const typeColor = p.variant === 'blue' ? '#3b82f6' : '#00AD4C'
            const ctaBlue = p.variant === 'blue'
            return (
              <article key={i} className="hpv2-prog">
                <div className="hpv2-prog-img">
                  <Image src={p.img} alt={p.imgAlt} fill style={{ objectFit: 'cover' }} />
                  <div className="hpv2-prog-img-overlay">
                    <span className="hpv2-prog-badge" style={{ background: badgeColors.bg, color: badgeColors.text }}>
                      {p.badge}
                    </span>
                    <div className="hpv2-prog-img-bottom">
                      <span className="hpv2-prog-img-sub">{p.sub} · {p.date}</span>
                      <span className="hpv2-prog-img-lieu">{p.lieu}</span>
                    </div>
                  </div>
                </div>
                <div className="hpv2-prog-body">
                  <h3 className="hpv2-prog-h3">{p.title}</h3>
                  <hr className="hpv2-prog-sep" />
                  <div className="hpv2-prog-metablock">
                    <div className="hpv2-prog-meta-item">
                      <span className="hpv2-prog-meta-label">
                        <ProgMetaIcon name="calendar" />
                        DATE
                      </span>
                      <span className="hpv2-prog-meta-value">{p.date}</span>
                    </div>
                    <div className="hpv2-prog-meta-item">
                      <span className="hpv2-prog-meta-label">
                        <ProgMetaIcon name="map-pin" />
                        LIEU
                      </span>
                      <span className="hpv2-prog-meta-value">{p.lieu}</span>
                    </div>
                    <div className="hpv2-prog-meta-item hpv2-prog-meta-last">
                      <span className="hpv2-prog-meta-label">
                        <ProgMetaIcon name={p.meta3.icon} />
                        {p.meta3.label}
                      </span>
                      <span className="hpv2-prog-meta-value">{p.meta3.value}</span>
                    </div>
                  </div>
                  <p className="hpv2-prog-text">{p.body}</p>
                  <div className="hpv2-prog-footer">
                    <Link
                      href={`/${locale}${p.href}`}
                      className={ctaBlue ? 'hpv2-prog-cta hpv2-prog-cta--blue' : 'hpv2-prog-cta'}
                    >
                      {p.cta}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S8 — ACTUALITÉS
   ═══════════════════════════════════════════════════════════════ */
const BADGE_COLORS: Record<string, { bg: string; text: string; meta: string }> = {
  'Plaidoyer':   { bg: '#045627', text: '#A5CE46', meta: '#00AD4C' },
  'Partenariat': { bg: '#1e3a5f', text: '#93c5fd', meta: '#3b82f6' },
  'Événement':   { bg: '#5b1d6b', text: '#d8b4fe', meta: '#a855f7' },
  'Témoignage':  { bg: '#7c2d12', text: '#fdba74', meta: '#f97316' },
  'Formation':   { bg: '#1e4d3a', text: '#6ee7b7', meta: '#10b981' },
  'Actualité':   { bg: '#045627', text: '#A5CE46', meta: '#00AD4C' },
}
const ACTUS = [
  {
    tag: 'Plaidoyer',
    title: `L’AFSA conquise par le modèle intégré de « Karonghen Wati Naning » en Casamance`,
    date: 'Octobre 2025',
    excerpt: `Une délégation de l’AFSA a visité le centre Karonghen Wati Naning à Niaguis : une approche agroécologique paysanne intégrée qui essaime à travers l’Afrique de l’Ouest.`,
    img: '/images/actualites/afsa-karonghen-wati-naaning-casamance.jpg',
    imgAlt: "L’AFSA visite le centre Karonghen Wati Naning en Casamance",
    href: '/ressources/actualites',
    readMin: 4,
    views: 218,
    pays: 'Sénégal',
  },
  {
    tag: 'Partenariat',
    title: 'Thousand Currents au Centre Karonghen Wati Naning',
    date: 'Septembre 2025',
    excerpt: `Thousand Currents a accompagné une immersion de deux jours au centre de Niaguis, témoignant de l’impact du modèle agroécologique développé par NSS en Casamance.`,
    img: '/images/actualites/thousand-currents-karonghen-wati-naning-niaguiss.jpg',
    imgAlt: 'Thousand Currents visite le centre Karonghen Wati Naning à Niaguis',
    href: '/ressources/actualites',
    readMin: 3,
    views: 145,
    pays: 'Sénégal',
  },
  {
    tag: 'Événement',
    title: 'Foire de Djimini — Semences paysannes et souveraineté alimentaire 2024',
    date: 'Décembre 2024',
    excerpt: `Un festival d’agroécologie en Casamance qui célèbre les semences paysannes, les savoir-faire de transformation et l’autonomie alimentaire des femmes rurales.`,
    img: '/images/actualites/foire-djimini-semences-paysannes-2024.jpg',
    imgAlt: 'Foire de Djimini 2024 — semences paysannes et souveraineté alimentaire',
    href: '/ressources/actualites',
    readMin: 5,
    views: 312,
    pays: 'Casamance',
  },
]

function ActualitesSection({ locale }: { locale: string }) {
  return (
    <section className="hpv2-actu">
      <div className="hpv2-wrap">
        <div className="hpv2-sec-head">
          <div className="hpv2-surtitle">Actualités</div>
          <h2 className="hpv2-h2">Le terrain parle, <em>les femmes rurales agissent.</em></h2>
          <hr className="hpv2-rule center" />
          <p className="hpv2-lede">{'Reportages, témoignages et avancées du réseau NSS — le terrain en direct.'}</p>
        </div>
        <div className="hpv2-actu-grid hpv2-sg">
          {ACTUS.map((a, i) => {
            const colors = BADGE_COLORS[a.tag] ?? BADGE_COLORS['Actualité']
            return (
              <article key={i} className="hpv2-actu-card">
                <div className="hpv2-actu-card-img">
                  <Image src={a.img} alt={a.imgAlt} fill style={{ objectFit: 'cover' }} />
                  <span className="hpv2-actu-badge" style={{ background: colors.bg, color: colors.text }}>{a.tag}</span>
                </div>
                <div className="hpv2-actu-card-body">
                  <div className="hpv2-actu-stats">
                    <span className="hpv2-actu-stat">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 7v5l3 3"/>
                      </svg>
                      {a.readMin} min
                    </span>
                    <span className="hpv2-actu-stat">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>
                      </svg>
                      {a.views}
                    </span>
                    <span className="hpv2-actu-stat">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                      </svg>
                      {a.pays}
                    </span>
                    <span className="hpv2-actu-stat">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/>
                        <path d="M16 3v4M8 3v4M4 11h16"/>
                      </svg>
                      {a.date}
                    </span>
                  </div>
                  <h3 className="hpv2-actu-h3">{a.title}</h3>
                  <hr className="hpv2-actu-sep" />
                  <p className="hpv2-actu-excerpt">{a.excerpt}</p>
                  <div className="hpv2-actu-footer">
                    <Link href={`/${locale}${a.href}`} className="hpv2-actu-read">
                      Lire
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="hpv2-actu-head">
          <Link href={`/${locale}/ressources/actualites`} className="hpv2-actu-link">
            Voir toutes les actualités →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S9 — PARTENAIRES
   ═══════════════════════════════════════════════════════════════ */
const PARTENAIRES = [
  { src: '/images/partenaires/Grassroots-international.jpg', alt: 'Grassroots International' },
  { src: '/images/partenaires/Agroecology-Fund.jpg',         alt: 'AgroEcology Fund' },
  { src: '/images/partenaires/thoussands-current-1.jpg',     alt: 'Thousand Currents' },
  { src: '/images/partenaires/logofahamu1.png',              alt: 'Fahamu Africa' },
  { src: '/images/partenaires/Fond-egalite.png',             alt: "Fonds pour l'Égalité" },
]

function PartenairesSection() {
  return (
    <section className="hpv2-partners">
      <div className="hpv2-wrap">
        <div className="hpv2-sec-head hpv2-rv" style={{ marginBottom: 36 }}>
          <div className="hpv2-surtitle">Ils nous soutiennent</div>
        </div>
        <div className="hpv2-partners-row hpv2-rv">
          {PARTENAIRES.map((p, i) => (
            <div key={i} className="hpv2-partner-logo">
              <Image src={p.src} alt={p.alt} width={160} height={60} style={{ objectFit: 'contain', maxHeight: 38 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   S10 — REJOINDRE + NEWSLETTER
   ═══════════════════════════════════════════════════════════════ */
function RejoindreSection({ locale }: { locale: string }) {
  const [done, setDone] = useState(false)

  return (
    <section className="hpv2-rejoindre">
      <div className="hpv2-rejoindre-inner">
        <div className="hpv2-rejoindre-left hpv2-rv">
          <div className="hpv2-surtitle on-dark" style={{ justifyContent: 'flex-start' }}>
            Ensemble, nous sommes la solution
          </div>
          <h2 className="hpv2-h2 on-dark">
            {`Rejoignez 175 000 femmes qui `}<em>{`nourrissent l'Afrique.`}</em>
          </h2>
          <p>
            {`Partagez nos valeurs ? Adhérez à NSS et rejoignez 175 000 femmes rurales qui transforment les systèmes alimentaires en Afrique de l'Ouest.`}
          </p>
          <div className="hpv2-rejoindre-btns">
            <Link href={`/${locale}/agir/rejoindre`} className="hpv2-btn hpv2-btn-prim">
              Adhérer au mouvement <span>→</span>
            </Link>
            <Link href={`/${locale}/contact`} className="hpv2-btn hpv2-btn-ghost">
              Nous contacter <span>→</span>
            </Link>
          </div>
          <div className="hpv2-rejoindre-bullet">
            {[
              'Adhésion ouverte aux Associations de Femmes Rurales',
              'Soutien personnalisé pour le démarrage',
              'Accès aux ressources et formations du réseau',
            ].map((t, i) => (
              <div key={i}>
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="hpv2-rejoindre-right hpv2-rv">
          <div className="hpv2-nl-pill">
            <span className="dot" />
            <span>Envoi mensuel · Gratuit</span>
          </div>
          <h3>Suivez le mouvement, <em>recevez nos actualités.</em></h3>
          <p className="lede">Actualités terrain · Agroécologie · Souveraineté alimentaire · Événements NSS</p>
          <form className="hpv2-nl-form" onSubmit={e => { e.preventDefault(); setDone(true) }}>
            <input
              className="hpv2-nl-input"
              type="email"
              placeholder="votre@email.com"
              required
              aria-label="Votre adresse email"
            />
            <button className="hpv2-nl-submit" type="submit">
              {done ? 'Merci ✓' : (
                <>
                  {`S'abonner`}
                  <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </>
              )}
            </button>
            <div className="hpv2-nl-mention">Désinscription à tout moment · Aucun spam</div>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ROOT EXPORT
   ═══════════════════════════════════════════════════════════════ */
export default function HomepageV2() {
  const locale = useLocale()
  useReveal()
  useCounters()

  return (
    <div className="hpv2">
      <HeroSection locale={locale} />
      <MouvementSection />
      <ManifestoSection />
      <MissionSection locale={locale} />
      <VoixSection />
      <ProgrammesSection locale={locale} />
      <PartenairesSection />
      <ActualitesSection locale={locale} />
      <RejoindreSection locale={locale} />
      <ContactSectionRedesign />
    </div>
  )
}
