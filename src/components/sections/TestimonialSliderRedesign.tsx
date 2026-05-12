'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const NSS = {
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
} as const

const ease = [0.22, 1, 0.36, 1] as const

type Stat   = { val: string; label: string }
type Leader = {
  eyebrow:  string
  nom:      string
  orga:     string
  pays:     string
  drapeau:  string
  photo:    string
  href:     string
  apropos:  string
  activites: string
  zones:    string
  stats:    [Stat, Stat, Stat]
}

const LEADERS: Leader[] = [
  {
    eyebrow:  'Présidente',
    nom:      'Mariama Sonko',
    orga:     'AJAC LUKAAL — Association des Jeunes Agriculteurs de Casamance',
    pays:     'Sénégal',
    drapeau:  '🇸🇳',
    photo:    'https://res.cloudinary.com/dtjvjlkcc/image/upload/q_auto/f_auto/v1775741948/Mariama_sonko_presidente_nss_hjukz0.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Née en Casamance dans une famille d'agriculteurs, militante écoféministe et pionnière de la souveraineté alimentaire en Afrique de l'Ouest depuis les années 90.",
    activites: "Fermes agroécologiques intégrées, pépinières agroforestières, unités de transformation et de formation des produits paysans.",
    zones:    "Casamance, Sénégal — 14 pays d'Afrique de l'Ouest",
    stats:    [
      { val: '800+',   label: 'Associations' },
      { val: '185 000', label: 'Membres' },
      { val: '14',     label: 'Pays' },
    ],
  },
  {
    eyebrow:  'CA Ghana',
    nom:      'Esther Y. Boake',
    orga:     'ABOFA — Abrono Organic Farmers Association',
    pays:     'Ghana',
    drapeau:  '🇬🇭',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Fondée en 1992 dans la région de Bono East, ABOFA compte 6 000 agriculteurs dont 50 % de femmes avec 30 ans de terrain en agriculture agroécologique.",
    activites: "Formations en agroforesterie, compost, collecte d'eau de pluie, apiculture. Banque communautaire de semences indigènes.",
    zones:    "Région de Bono East, Techiman et Forikrom — Ghana",
    stats:    [
      { val: '6 000', label: 'Membres' },
      { val: '30',    label: 'Cultures/hectare' },
      { val: '1992',  label: 'Fondée en' },
    ],
  },
  {
    eyebrow:  'CA Guinée',
    nom:      'Sia A.M. Kamano',
    orga:     'AGUISSA — Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires',
    pays:     'Guinée',
    drapeau:  '🇬🇳',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Créée en 2011, AGUISSA améliore la sécurité alimentaire des populations à travers la professionnalisation de la filière céréalière.",
    activites: "Sensibilisation nutritionnelle, éducation alimentaire, appui aux organisations paysannes en milieu rural guinéen.",
    zones:    "Kankan, Mamou, Mandiana — Guinée Conakry",
    stats:    [
      { val: '2011', label: 'Fondée en' },
      { val: '3',    label: 'Régions' },
      { val: '700+', label: 'Groupements' },
    ],
  },
  {
    eyebrow:  'CA Mali',
    nom:      'Yah Diakité',
    orga:     'AMASSA — Association Malienne pour la Sécurité et la Souveraineté Alimentaires',
    pays:     'Mali',
    drapeau:  '🇲🇱',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Créée en juillet 2005, AMASSA soutient plus de 700 groupements actifs dans la filière céréalière au Mali.",
    activites: "Appui technique aux organisations paysannes, renforcement des capacités en transformation céréalière, promotion de la souveraineté alimentaire.",
    zones:    "Bamako, Kayes, Ségou, Koutiala, Mopti, Gao, Tombouctou — Mali",
    stats:    [
      { val: '700+', label: 'Groupements' },
      { val: '7',    label: 'Régions' },
      { val: '2005', label: 'Fondée en' },
    ],
  },
  {
    eyebrow:  'CA Guinée-Bissau',
    nom:      'Cadia Fernandes',
    orga:     'KAFO — Fédération Paysanne de Guinée-Bissau',
    pays:     'Guinée-Bissau',
    drapeau:  '🇬🇼',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "La plus grande fédération d'agriculteurs de Guinée-Bissau avec 25 000 affiliés dont 61,77 % de femmes, organisés en 970 associations villageoises.",
    activites: "Semences traditionnelles, agroécologie, agroforesterie, alphabétisation. Gestion du Centre Paysan de Djalicounda — seule école d'agroécologie du pays (2016).",
    zones:    "3 régions de Guinée-Bissau, Centre Paysan de Djalicounda",
    stats:    [
      { val: '25 000',  label: 'Membres' },
      { val: '970',     label: 'Associations' },
      { val: '61,77 %', label: 'Femmes' },
    ],
  },
  {
    eyebrow:  'CA Burkina Faso',
    nom:      'Catherine Soulama',
    orga:     'FENOP — Fédération Nationale des Organisations Paysannes',
    pays:     'Burkina Faso',
    drapeau:  '🇧🇫',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Référence nationale en agroécologie, la FENOP défend les droits des femmes et des jeunes ruraux et influence les politiques agricoles nationales.",
    activites: "Champs écoles agroécologiques, conservation des semences paysannes par le sable et la cendre, démonstrations et sensibilisation pour la souveraineté alimentaire.",
    zones:    "Région des Cascades, Ouagadougou — Burkina Faso",
    stats:    [
      { val: '1996',       label: 'Fondée en' },
      { val: 'Nationale',  label: 'Portée' },
      { val: 'Agroécologie', label: 'Référence' },
    ],
  },
  {
    eyebrow:  'CA Mali',
    nom:      'Fanta Diamoutene',
    orga:     'AOPP — Association des Organisations Professionnelles Paysannes',
    pays:     'Mali',
    drapeau:  '🇲🇱',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Fondée en 1995 à Koutiala, l'AOPP regroupe 250 organisations paysannes représentant 3 millions de paysans maliens dont 45 % de femmes et 20 % de jeunes.",
    activites: "Formations agroécologiques, plaidoyer agricole, ferme agroécologique vitrine, plateforme semences paysannes et coopératives semencières.",
    zones:    "8 régions administratives du Mali — Bamako siège",
    stats:    [
      { val: '250', label: 'Organisations' },
      { val: '3M',  label: 'Paysans' },
      { val: '45 %', label: 'Femmes' },
    ],
  },
  {
    eyebrow:  'CA Sénégal',
    nom:      'Fatou Binetou Diop',
    orga:     'UGPM — Union des Groupements Paysans de Mékhé',
    pays:     'Sénégal',
    drapeau:  '🇸🇳',
    photo:    'https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg',
    href:     '/fr/mouvement/associations',
    apropos:  "Née en 1985, l'UGPM regroupe 76 groupements dans 89 villages, plus de 5 000 membres dont 61 % de femmes, attachés aux valeurs de l'agriculture paysanne et de la solidarité.",
    activites: "Transition agroécologique, semences paysannes, compost naturel, huile d'arachide locale. Rayonnement au Sénégal, Gambie et Guinée-Bissau.",
    zones:    "Mékhé, région de Thiès — Nord-Ouest Sénégal",
    stats:    [
      { val: '5 000+', label: 'Membres' },
      { val: '76',     label: 'Groupements' },
      { val: '89',     label: 'Villages' },
    ],
  },
]

const VISIBLES = 4

/* ── Popup ───────────────────────────────────────────────────────────────── */
function Popup({ leader, onClose }: { leader: Leader; onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add('popup-open')
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('popup-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="pop-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Fiche de ${leader.nom}`}
        className="pop-modal"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.30, ease }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fermeture */}
        <button className="pop-close" onClick={onClose} aria-label="Fermer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="pop-head">
          <div className="pop-avatar">
            <Image
              src={leader.photo}
              alt={leader.nom}
              fill
              sizes="80px"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
          <div className="pop-head-info">
            <p className="pop-pays">
              <span aria-hidden="true">{leader.drapeau}</span>
              {leader.pays}
            </p>
            <h3 className="pop-nom">{leader.nom}</h3>
            <p className="pop-role">{leader.eyebrow} · {leader.orga}</p>
            <span className="pop-underline" aria-hidden="true" />
          </div>
        </div>

        {/* Corps */}
        <div className="pop-body">

          <section className="pop-section">
            <p className="pop-section-title">À PROPOS DE L&apos;ASSOCIATION</p>
            <p className="pop-section-text">{leader.apropos}</p>
          </section>

          <section className="pop-section">
            <p className="pop-section-title">ACTIVITÉS</p>
            <p className="pop-section-text">{leader.activites}</p>
          </section>

          <section className="pop-section">
            <p className="pop-section-title">ZONES D&apos;INTERVENTION</p>
            <p className="pop-section-text">{leader.zones}</p>
          </section>

          {/* Stats */}
          <div className="pop-stats">
            {leader.stats.map(s => (
              <div key={s.label} className="pop-stat">
                <span className="pop-stat-val">{s.val}</span>
                <span className="pop-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Card ────────────────────────────────────────────────────────────────── */
function LeaderCard({ l, delay = 0, onOpen }: { l: Leader; delay?: number; onOpen: () => void }) {
  return (
    <motion.li
      role="listitem"
      className="ldr-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease }}
    >
      <div className="ldr-photo">
        <Image
          src={l.photo}
          alt={l.nom}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>

      <div className="ldr-body">
        <p className="ldr-role">{l.eyebrow}</p>
        <p className="ldr-nom">{l.nom}</p>
        <p className="ldr-orga">{l.orga}</p>
        <div className="ldr-divider" aria-hidden="true" />
        <p className="ldr-pays">
          <span className="ldr-dot" aria-hidden="true" />
          {l.pays}
        </p>
        <button
          type="button"
          className="ldr-cta"
          onClick={onOpen}
          aria-label={`En savoir plus sur ${l.nom}`}
        >
          EN SAVOIR PLUS →
        </button>
      </div>
    </motion.li>
  )
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function TestimonialSliderRedesign() {
  const [ouvert,    setOuvert]    = useState(false)
  const [selected,  setSelected]  = useState<Leader | null>(null)

  const openPopup  = useCallback((l: Leader) => setSelected(l), [])
  const closePopup = useCallback(() => setSelected(null), [])

  return (
    <>
      <section className="ldr" aria-labelledby="ldr-heading">
        <div className="ldr-wrap">

          {/* ══ En-tête ══ */}
          <header className="ldr-header">
            <motion.p
              className="ldr-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.60, ease }}
            >
              NOS LEADERS
            </motion.p>

            <motion.h2
              id="ldr-heading"
              className="ldr-h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, delay: 0.10, ease }}
            >
              Les voix qui portent <em>le mouvement.</em>
            </motion.h2>

            <motion.p
              className="ldr-sub"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.18, ease }}
            >
              Des femmes de terrain qui incarnent NSS par leur engagement,
              leur vision et leur détermination.
            </motion.p>
          </header>

          {/* ══ 4 cartes visibles ══ */}
          <ul className="ldr-grid" role="list">
            {LEADERS.slice(0, VISIBLES).map((l, i) => (
              <LeaderCard key={l.nom} l={l} delay={0.08 + i * 0.09} onOpen={() => openPopup(l)} />
            ))}
          </ul>

          {/* ══ Cartes supplémentaires ══ */}
          <AnimatePresence>
            {ouvert && (
              <motion.ul
                className="ldr-grid ldr-grid--extra"
                role="list"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {LEADERS.slice(VISIBLES).map((l, i) => (
                  <LeaderCard key={l.nom} l={l} delay={0.06 + i * 0.08} onOpen={() => openPopup(l)} />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* ══ Bouton toggle ══ */}
          <div className="ldr-toggle-wrap">
            <button
              type="button"
              className="ldr-toggle"
              onClick={() => setOuvert(v => !v)}
              aria-expanded={ouvert}
            >
              {ouvert ? 'VOIR MOINS ↑' : 'VOIR PLUS ↓'}
            </button>
          </div>

        </div>

        <style>{`
          .ldr { background: #F9F8F5; overflow: hidden; }
          .ldr-wrap { max-width: 1400px; margin: 0 auto; padding: 96px 64px; box-sizing: border-box; }

          /* Header */
          .ldr-header { margin-bottom: 48px; text-align: center; }
          .ldr-eyebrow { margin: 0 0 16px; font-family: var(--font-dm-sans), sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: ${NSS.vertClair}; }
          .ldr-h2 { margin: 0 0 20px; font-family: var(--font-display), Georgia, serif; font-size: 36px; font-weight: 700; line-height: 1.2; color: #2A2A2A; letter-spacing: -0.01em; }
          .ldr-h2 em { font-style: italic; color: ${NSS.vertClair}; }
          .ldr-sub { margin: 0 auto; font-family: var(--font-dm-sans), sans-serif; font-size: 16px; line-height: 1.8; color: #2C2C28; max-width: 600px; text-align: center; }

          /* Grille */
          .ldr-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .ldr-grid--extra { margin-top: 20px; }

          /* Carte */
          .ldr-card { border: 1px solid #e0ddd6; border-radius: 0; overflow: hidden; cursor: pointer; transition: transform 0.30s ease, box-shadow 0.30s ease, border-color 0.30s ease; }
          .ldr-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); border-color: ${NSS.vertPrimaire}; }
          .ldr-photo { position: relative; width: 100%; height: 280px; overflow: hidden; background: #2c2c28; }
          .ldr-body { background: #ffffff; border-top: 3px solid ${NSS.vertPrimaire}; padding: 24px 24px 28px; display: flex; flex-direction: column; }
          .ldr-role { margin: 0 0 8px; font-family: var(--font-dm-sans), sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: ${NSS.vertClair}; }
          .ldr-nom { margin: 0 0 4px; font-family: var(--font-display), Georgia, serif; font-size: 20px; font-weight: 700; line-height: 1.2; color: #2A2A2A; }
          .ldr-orga { margin: 0 0 14px; font-family: var(--font-dm-sans), sans-serif; font-size: 13px; color: #666; line-height: 1.4; }
          .ldr-divider { height: 1px; background: #e8e6e0; margin-bottom: 14px; flex-shrink: 0; }
          .ldr-pays { display: flex; align-items: center; gap: 6px; margin: 0 0 18px; font-family: var(--font-dm-sans), sans-serif; font-size: 12px; font-weight: 500; color: #2C2C28; }
          .ldr-dot { width: 8px; height: 8px; border-radius: 50%; background: ${NSS.vertPrimaire}; flex-shrink: 0; }
          .ldr-cta { font-family: var(--font-dm-sans), sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: ${NSS.vertClair}; background: none; border: none; padding: 0; cursor: pointer; transition: color 0.20s ease; width: fit-content; }
          .ldr-card:hover .ldr-cta { color: ${NSS.vertPrimaire}; }

          /* Toggle */
          .ldr-toggle-wrap { display: flex; justify-content: center; margin-top: 48px; }
          .ldr-toggle { background: transparent; border: 1.5px solid ${NSS.vertPrimaire}; color: ${NSS.vertPrimaire}; padding: 11px 32px; font-family: var(--font-dm-sans), sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.8px; border-radius: 0; cursor: pointer; transition: background 0.20s ease, color 0.20s ease; }
          .ldr-toggle:hover { background: ${NSS.vertPrimaire}; color: #fff; }

          /* Popup overlay */
          .pop-overlay { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(0,0,0,0.70); backdrop-filter: blur(4px); z-index: 1000; box-sizing: border-box; }
          body.popup-open { overflow: hidden; position: fixed; width: 100%; }

          /* Popup modal */
          .pop-modal { position: relative; background: #fff; width: 90%; max-width: 680px; max-height: 85vh; overflow-y: auto; border-top: 4px solid ${NSS.vertPrimaire}; border-radius: 0; box-shadow: 0 24px 64px rgba(0,0,0,0.20); padding: 48px; box-sizing: border-box; }

          /* Close */
          .pop-close { position: absolute; top: 20px; right: 20px; background: none; border: none; cursor: pointer; color: #2C2C28; padding: 6px; display: flex; align-items: center; transition: color 0.2s; }
          .pop-close:hover { color: ${NSS.vertPrimaire}; }

          /* Header popup */
          .pop-head { display: flex; align-items: flex-start; gap: 24px; margin-bottom: 32px; }
          .pop-avatar { position: relative; width: 80px; height: 80px; border-radius: 50%; overflow: hidden; flex-shrink: 0; border: 2px solid ${NSS.vertClair}; }
          .pop-head-info { flex: 1; min-width: 0; }
          .pop-pays { font-family: var(--font-dm-sans), sans-serif; font-size: 13px; color: #666; margin: 0 0 6px; display: flex; align-items: center; gap: 6px; }
          .pop-nom { font-family: var(--font-display), Georgia, serif; font-size: 28px; font-weight: 700; color: #2A2A2A; margin: 0 0 6px; line-height: 1.15; }
          .pop-role { font-family: var(--font-dm-sans), sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: ${NSS.vertClair}; margin: 0 0 12px; }
          .pop-underline { display: block; width: 60px; height: 2px; background: ${NSS.vertClair}; }

          /* Sections */
          .pop-section { margin-bottom: 24px; }
          .pop-section-title { font-family: var(--font-dm-sans), sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: ${NSS.vertClair}; margin: 0 0 8px; }
          .pop-section-text { font-family: var(--font-dm-sans), sans-serif; font-size: 15px; line-height: 1.8; color: #2C2C28; margin: 0; text-align: justify; hyphens: auto; }

          /* Stats */
          .pop-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 8px; }
          .pop-stat { background: #F9F8F5; padding: 16px; border-left: 3px solid ${NSS.vertPrimaire}; }
          .pop-stat-val { display: block; font-family: var(--font-display), Georgia, serif; font-size: 28px; font-weight: 700; color: ${NSS.vertPrimaire}; line-height: 1; margin-bottom: 4px; }
          .pop-stat-label { display: block; font-family: var(--font-dm-sans), sans-serif; font-size: 12px; color: #2C2C28; line-height: 1.3; }

          /* Responsive */
          @media (max-width: 1024px) { .ldr-wrap { padding: 80px 40px; } .ldr-grid { grid-template-columns: 1fr 1fr; gap: 18px; } .ldr-h2 { font-size: 30px; } }
          @media (max-width: 640px) { .ldr-wrap { padding: 64px 32px; } .ldr-grid { grid-template-columns: 1fr; gap: 16px; } .ldr-photo { height: 240px; } .ldr-h2 { font-size: 26px; } .pop-modal { padding: 32px 24px; width: 95%; } .pop-head { flex-direction: column; gap: 16px; } .pop-nom { font-size: 22px; } .pop-stats { grid-template-columns: 1fr 1fr; } }
          @media (prefers-reduced-motion: reduce) { .ldr-card, .ldr-toggle { transition: none; } }
        `}</style>
      </section>

      {/* ══ Popup ══ */}
      <AnimatePresence>
        {selected && <Popup key="popup" leader={selected} onClose={closePopup} />}
      </AnimatePresence>
    </>
  )
}
