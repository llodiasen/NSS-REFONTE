/**
 * ProgrammePage — template réutilisable pour CIFAP, EMMAP, RENCONTRE, etc.
 * Palette NSS stricte · DM Sans body · Cormorant titres · Premium minimal
 */
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ── Types ────────────────────────────────────────────────────── */

export interface ProgrammeHero {
  bgImage: string
  tags: string[]
  location: string
  title: string
  theme?: string
  themeLabel?: string
  meta: { icon: LucideIcon; label: string }[]
}

export interface ProgrammeObjectif {
  icon: string
  title: string
  desc: string
}

export interface ProgrammePays {
  flag: string
  name: string
}

export interface ProgrammeStat {
  val: string
  eye: string
  lbl: string
}

export interface ProgrammeTheme {
  icon: string
  name: string
  desc: string
}

export interface ProgrammeEdition {
  year: string
  theme: string
  status: 'past' | 'active' | 'recent'
}

export interface ProgrammeAsideDetail {
  icon: LucideIcon
  label: string
  value: string
}

export interface ProgrammeContact {
  icon: LucideIcon
  href: string
  label: string
}

export interface ProgrammeProps {
  hero: ProgrammeHero
  presentation: { intro: string; bullets: { bold: string; text: string }[] }
  objectifs: ProgrammeObjectif[]
  participants: {
    intro: string
    pays: ProgrammePays[]
    stats: ProgrammeStat[]
  }
  citation?: { text: string; author: string; role: string }
  thematiques: ProgrammeTheme[]
  lieu: { name: string; address: string; description: string }
  ctas: { primary: { label: string; href: string }; outline: { label: string; href: string } }
  aside: {
    editionTitle: string
    editionDetails: ProgrammeAsideDetail[]
    editions: ProgrammeEdition[]
    editionsHref: string
    orgName: string
    contact: ProgrammeContact[]
    partners: string[]
  }
  locale?: string
}

/* ── Component ────────────────────────────────────────────────── */

export default function ProgrammePage({
  hero,
  presentation,
  objectifs,
  participants,
  citation,
  thematiques,
  lieu,
  ctas,
  aside,
  locale: _locale = 'fr',
}: ProgrammeProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pp-hero" aria-labelledby="pp-h1">
        <div className="pp-hero__overlay" aria-hidden="true" />
        <div className="pp-hero__body">
          <div className="pp-hero__eyebrow" aria-label="Catégories">
            <span className="pp-hero__eyebrow-line" aria-hidden="true" />
            {hero.tags.map((t, i) => (
              <span key={t}>
                {i > 0 && <span className="pp-hero__eyebrow-dot" aria-hidden="true">·</span>}
                <span className="pp-hero__eyebrow-tag">{t}</span>
              </span>
            ))}
            <span className="pp-hero__eyebrow-line" aria-hidden="true" />
          </div>
          <p className="pp-hero__loc">
            <MapPin size={12} aria-hidden="true" />
            {hero.location}
          </p>
          <h1 id="pp-h1" className="pp-hero__h1">{hero.title}</h1>
          {hero.theme && (
            <div className="pp-hero__theme">
              <strong>{hero.themeLabel ?? 'Thème'} :</strong> {hero.theme}
            </div>
          )}
          <div className="pp-hero__meta" role="list">
            {hero.meta.map((m, i) => (
              <span key={i} role="listitem" className="pp-hero__meta-wrap">
                {i > 0 && <span className="pp-hero__meta-sep" aria-hidden="true" />}
                <span className="pp-hero__meta-item">
                  <m.icon size={13} aria-hidden="true" />
                  {m.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID : main + aside ── */}
      <div className="pp-page">
        <main className="pp-main">

          {/* Présentation */}
          <section className="pp-card" aria-labelledby="pp-pres-h">
            <h2 id="pp-pres-h" className="pp-section-h">Présentation</h2>
            <p className="pp-text" style={{ marginBottom: '1.25rem' }}>{presentation.intro}</p>
            <ul className="pp-bullet-list">
              {presentation.bullets.map((b) => (
                <li key={b.bold}>
                  <strong>{b.bold}</strong> {b.text}
                </li>
              ))}
            </ul>
          </section>

          {/* Objectifs */}
          <section className="pp-card" aria-labelledby="pp-obj-h">
            <h2 id="pp-obj-h" className="pp-section-h">Objectifs</h2>
            <div className="pp-obj-grid">
              {objectifs.map((o) => (
                <div key={o.title} className="pp-obj-card">
                  <span className="pp-obj-icon" aria-hidden="true">{o.icon}</span>
                  <h3 className="pp-obj-name">{o.title}</h3>
                  <p className="pp-obj-desc">{o.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Participants */}
          <section className="pp-card" aria-labelledby="pp-part-h">
            <h2 id="pp-part-h" className="pp-section-h">Participants</h2>
            <p className="pp-text" style={{ marginBottom: '1.5rem' }}>{participants.intro}</p>
            <div className="pp-pays-badges" role="list">
              {participants.pays.map((p) => (
                <span key={p.name} className="pp-pays-badge" role="listitem">
                  <span aria-hidden="true">{p.flag}</span>
                  {p.name}
                </span>
              ))}
            </div>
            <div className="pp-stats-grid" role="list">
              {participants.stats.map((s) => (
                <div key={s.lbl} className="pp-stat-card" role="listitem">
                  <span className="pp-stat-eyebrow">{s.eye}</span>
                  <span className="pp-stat-val">{s.val}</span>
                  <span className="pp-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Citation */}
          {citation && (
            <blockquote className="pp-quote">
              <p className="pp-quote__text">« {citation.text} »</p>
              <footer className="pp-quote__foot">
                — <strong>{citation.author}</strong>,{' '}
                <span className="pp-quote__role">{citation.role}</span>
              </footer>
            </blockquote>
          )}

          {/* Thématiques */}
          <section className="pp-card" aria-labelledby="pp-them-h">
            <h2 id="pp-them-h" className="pp-section-h">Thématiques abordées</h2>
            <div className="pp-them-grid">
              {thematiques.map((t) => (
                <div key={t.name} className="pp-them-card">
                  <span className="pp-them-icon" aria-hidden="true">{t.icon}</span>
                  <h3 className="pp-them-name">{t.name}</h3>
                  <p className="pp-them-desc">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lieu */}
          <section className="pp-card" aria-labelledby="pp-lieu-h">
            <h2 id="pp-lieu-h" className="pp-section-h">Lieu</h2>
            <div className="pp-lieu">
              <div className="pp-lieu__pin" aria-hidden="true">
                <MapPin size={20} color="#00AD4C" />
              </div>
              <div>
                <p className="pp-lieu__name">{lieu.name}</p>
                <p className="pp-lieu__addr">{lieu.address}</p>
                <p className="pp-lieu__voc">{lieu.description}</p>
              </div>
            </div>
          </section>

          {/* CTAs */}
          <div className="pp-cta-row">
            <Link href={ctas.primary.href} className="pp-cta pp-cta--primary">
              {ctas.primary.label}
            </Link>
            <Link href={ctas.outline.href} className="pp-cta pp-cta--outline">
              {ctas.outline.label}
            </Link>
          </div>

        </main>

        {/* ── ASIDE ── */}
        <aside className="pp-aside" aria-label="Informations pratiques">

          {/* Détails édition */}
          <div className="pp-acard">
            <h2 className="pp-atitle">{aside.editionTitle}</h2>
            <ul className="pp-alist">
              {aside.editionDetails.map((d) => (
                <li key={d.label} className="pp-aitem">
                  <d.icon size={13} color="#00AD4C" aria-hidden="true" />
                  <span className="pp-akey">{d.label}</span>
                  <span className="pp-aval">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Éditions */}
          <div className="pp-acard">
            <h2 className="pp-atitle">Toutes les éditions</h2>
            <nav aria-label="Naviguer entre les éditions">
              <ul className="pp-ed-list">
                {aside.editions.map((ed) => (
                  <li key={ed.year} className={`pp-ed-item pp-ed--${ed.status}`}>
                    <Link href={aside.editionsHref} className="pp-ed-link">
                      <div className="pp-ed-head">
                        <span className="pp-ed-year">{ed.year}</span>
                        {ed.status === 'active' && (
                          <span className="pp-ed-pill pp-ed-pill--active">Page active</span>
                        )}
                        {ed.status === 'recent' && (
                          <span className="pp-ed-pill pp-ed-pill--gold">Dernière</span>
                        )}
                      </div>
                      <p className="pp-ed-theme">{ed.theme}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Organisateur */}
          <div className="pp-acard">
            <h2 className="pp-atitle">Organisateur</h2>
            <p className="pp-aorg">{aside.orgName}</p>
            <ul className="pp-alist">
              {aside.contact.map((c) => (
                <li key={c.href} className="pp-aitem">
                  <c.icon size={13} color="#00AD4C" aria-hidden="true" />
                  <a href={c.href} className="pp-alink">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partenaires */}
          <div className="pp-acard">
            <h2 className="pp-atitle">Partenaires</h2>
            <ul className="pp-plist">
              {aside.partners.map((p) => (
                <li key={p} className="pp-pitem">
                  <span className="pp-pdot" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* ── Hero ── */
        .pp-hero {
          position: relative; overflow: hidden; min-height: 420px;
          display: flex; align-items: center;
          background-image: url('${hero.bgImage}');
          background-size: cover; background-position: center 40%; color: #fff;
        }
        .pp-hero__overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(3,8,5,0.93) 45%, rgba(6,14,9,0.80) 70%, rgba(0,0,0,0.55) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, rgba(0,0,0,0.30) 100%);
        }
        .pp-hero__body {
          position: relative; z-index: 1; width: 100%; max-width: 1200px;
          margin: 0 auto; padding: 72px clamp(1.5rem,5vw,4rem) 64px;
        }
        .pp-hero__eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:20px; }
        .pp-hero__eyebrow-line { display:block; width:28px; height:1px; background:rgba(165,206,70,0.6); flex-shrink:0; }
        .pp-hero__eyebrow-tag { font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#A5CE46; white-space:nowrap; }
        .pp-hero__eyebrow-dot { color:rgba(165,206,70,0.5); font-size:12px; margin:0 2px; }
        .pp-hero__loc { display:flex; align-items:center; gap:6px; font-size:12px; color:#fff; margin:0 0 1rem; }
        .pp-hero__h1 { font-family:var(--font-display),Georgia,serif; font-size:clamp(28px,3.8vw,52px); font-weight:400; line-height:1.12; color:#F6F3EE; margin:0 0 1.5rem; }
        .pp-hero__theme { background:rgba(255,255,255,0.06); border-left:3px solid #E8A838; padding:12px 18px; font-size:13.5px; color:#fff; line-height:1.6; margin-bottom:1.75rem; width:fit-content; max-width:780px; }
        .pp-hero__theme strong { color:#E8A838; }
        .pp-hero__meta { display:flex; align-items:center; flex-wrap:wrap; gap:8px; }
        .pp-hero__meta-wrap { display:inline-flex; align-items:center; gap:8px; }
        .pp-hero__meta-item { display:inline-flex; align-items:center; gap:5px; font-size:12px; color:#fff; }
        .pp-hero__meta-sep { width:1px; height:12px; background:rgba(255,255,255,0.25); flex-shrink:0; }

        /* ── Layout grid ── */
        .pp-page { display:grid; grid-template-columns:1fr 300px; gap:2.5rem; align-items:start; max-width:1200px; margin:0 auto; padding:0 1.5rem 5rem; }
        .pp-main { display:flex; flex-direction:column; min-width:0; }

        /* ── Sections ── */
        .pp-card { background:#fff; padding:3rem 0; border-bottom:1px solid #f0efeb; }
        .pp-card:last-of-type { border-bottom:none; }
        .pp-section-h { font-family:var(--font-display),Georgia,serif; font-size:32px; font-weight:400; color:#2A2A2A; margin:0 0 1.5rem; line-height:1.15; }
        .pp-text { font-family:var(--font-body),sans-serif; font-size:15px; line-height:1.8; color:#2C2C28; margin:0; text-align:justify; }
        .pp-text strong { font-weight:700; color:#2A2A2A; }
        .pp-bullet-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:12px; }
        .pp-bullet-list li { display:flex; align-items:flex-start; gap:10px; font-size:15px; line-height:1.8; color:#2C2C28; text-align:justify; }
        .pp-bullet-list li::before { content:''; display:block; width:7px; height:7px; border-radius:50%; background:#A5CE46; flex-shrink:0; margin-top:0.6em; }
        .pp-bullet-list li strong { font-weight:700; color:#2A2A2A; }
        .pp-obj-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .pp-obj-card { background:#fff; border-left:3px solid #A5CE46; padding:24px; transition:box-shadow 0.2s; }
        .pp-obj-card:hover { box-shadow:0 4px 24px rgba(0,0,0,0.06); }
        .pp-obj-icon { display:block; font-size:28px; margin-bottom:12px; }
        .pp-obj-name { font-family:var(--font-display),Georgia,serif; font-size:20px; font-weight:400; color:#2A2A2A; margin:0 0 10px; }
        .pp-obj-desc { font-size:14px; color:#2C2C28; line-height:1.75; margin:0; text-align:justify; }
        .pp-pays-badges { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:2rem; }
        .pp-pays-badge { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500; color:#2A2A2A; background:#F5F3EE; border-radius:100px; padding:6px 14px; }
        .pp-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .pp-stat-card { background:#F5F3EE; padding:20px 16px; display:flex; flex-direction:column; align-items:center; text-align:center; gap:6px; }
        .pp-stat-eyebrow { font-size:9px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#A5CE46; }
        .pp-stat-val { font-family:var(--font-display),Georgia,serif; font-size:36px; font-weight:400; color:#2A2A2A; line-height:1; }
        .pp-stat-lbl { font-size:12px; color:#2C2C28; line-height:1.4; }
        .pp-quote { background:#F5F3EE; border-left:3px solid #E8A838; padding:2rem 2rem 2rem 2.5rem; margin:0; }
        .pp-quote__text { font-family:var(--font-display),Georgia,serif; font-size:22px; font-weight:400; font-style:italic; line-height:1.6; color:#2A2A2A; margin:0 0 1rem; text-align:justify; }
        .pp-quote__foot { font-size:13px; color:#2C2C28; margin:0; }
        .pp-quote__foot strong { font-weight:700; color:#2A2A2A; }
        .pp-quote__role { color:#A5CE46; }
        .pp-them-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .pp-them-card { background:#fff; box-shadow:0 2px 16px rgba(0,0,0,0.06); padding:28px 24px; transition:box-shadow 0.2s; }
        .pp-them-card:hover { box-shadow:0 6px 28px rgba(0,0,0,0.10); }
        .pp-them-icon { display:block; font-size:32px; margin-bottom:14px; }
        .pp-them-name { font-family:var(--font-display),Georgia,serif; font-size:22px; font-weight:400; color:#2A2A2A; margin:0 0 10px; }
        .pp-them-desc { font-size:14px; color:#2C2C28; line-height:1.7; margin:0; text-align:justify; }
        .pp-lieu { display:flex; align-items:flex-start; gap:20px; }
        .pp-lieu__pin { width:44px; height:44px; background:rgba(165,206,70,0.12); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .pp-lieu__name { font-family:var(--font-display),Georgia,serif; font-size:22px; font-weight:400; color:#2A2A2A; margin:0 0 6px; }
        .pp-lieu__addr { font-size:15px; color:#2C2C28; margin:0 0 6px; }
        .pp-lieu__voc { font-size:13px; color:#888; font-style:italic; margin:0; }
        .pp-cta-row { display:flex; gap:14px; flex-wrap:wrap; padding:3rem 0; }
        .pp-cta { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; text-decoration:none; padding:14px 32px; transition:all 0.2s; display:inline-block; white-space:nowrap; }
        .pp-cta--primary { background:#00AD4C; color:#fff; border:1.5px solid #00AD4C; }
        .pp-cta--primary:hover { background:#A5CE46; border-color:#A5CE46; color:#2A2A2A; }
        .pp-cta--outline { background:transparent; color:#045627; border:1.5px solid #045627; }
        .pp-cta--outline:hover { background:rgba(165,206,70,0.10); border-color:#A5CE46; color:#2A2A2A; }

        /* ── Aside ── */
        .pp-aside { position:sticky; top:calc(68px + 1.5rem); width:100%; display:flex; flex-direction:column; gap:0; border:1px solid #A5CE46; }
        .pp-acard { background:#fff; padding:1.25rem 1.125rem; border-bottom:1px solid #f0efeb; }
        .pp-acard:last-of-type { border-bottom:none; }
        .pp-atitle { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#A5CE46; margin:0 0 1rem; }
        .pp-alist { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:10px; }
        .pp-aitem { display:flex; align-items:center; gap:8px; font-size:13px; color:#2C2C28; min-width:0; }
        .pp-akey { font-weight:500; color:#999; min-width:40px; flex-shrink:0; }
        .pp-aval { font-weight:700; color:#2A2A2A; margin-left:auto; }
        .pp-alink { color:#00AD4C; text-decoration:none; font-size:13px; transition:color 0.15s; word-break:break-all; }
        .pp-alink:hover { color:#045627; text-decoration:underline; }
        .pp-aorg { font-size:13px; font-weight:700; color:#2A2A2A; margin:0 0 0.875rem; line-height:1.4; }
        .pp-ed-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:2px; }
        .pp-ed-item { transition:background 0.15s; }
        .pp-ed--past { opacity:0.5; }
        .pp-ed--active { background:rgba(165,206,70,0.08); }
        .pp-ed--recent { background:rgba(232,168,56,0.07); }
        .pp-ed-link { display:block; padding:10px 8px; text-decoration:none; }
        .pp-ed-head { display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:3px; }
        .pp-ed-year { font-family:var(--font-display),Georgia,serif; font-size:18px; font-weight:400; color:#2A2A2A; line-height:1; }
        .pp-ed--active .pp-ed-year { color:#A5CE46; font-weight:700; }
        .pp-ed-pill { font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; border-radius:2px; padding:2px 7px; white-space:nowrap; flex-shrink:0; }
        .pp-ed-pill--active { background:rgba(165,206,70,0.20); color:#4a6e10; }
        .pp-ed-pill--gold { background:rgba(232,168,56,0.20); color:#8a5e0a; }
        .pp-ed-theme { font-size:11.5px; color:#888; line-height:1.45; margin:0; }
        .pp-plist { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:10px; }
        .pp-pitem { display:flex; align-items:center; gap:10px; font-size:13px; color:#2C2C28; transition:color 0.15s; }
        .pp-pitem:hover { color:#00AD4C; }
        .pp-pdot { width:6px; height:6px; border-radius:50%; background:#A5CE46; flex-shrink:0; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pp-page { grid-template-columns: 1fr 260px; }
        }
        @media (max-width: 768px) {
          .pp-page { grid-template-columns: 1fr; padding: 0 1rem 3rem; }
          .pp-main { order: 1; }
          .pp-aside { order: 2; position: static; }
          .pp-hero { min-height: 320px; }
          .pp-hero__body { padding: 56px 1.25rem 48px; }
          .pp-hero__h1 { font-size: clamp(24px, 6vw, 32px); }
          .pp-obj-grid { grid-template-columns: 1fr; }
          .pp-them-grid { grid-template-columns: 1fr 1fr; }
          .pp-stats-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .pp-them-grid { grid-template-columns: 1fr; }
          .pp-hero__meta-sep { display: none; }
          .pp-cta-row { flex-direction: column; }
          .pp-cta { text-align: center; }
          .pp-hero { min-height: 280px; }
          .pp-hero__body { padding: 48px 1rem 40px; }
        }
      `}</style>
    </>
  )
}
