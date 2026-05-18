'use client'

import { useEffect } from 'react'
import '../../home/HomepageV2.css'

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

const PILIERS = [
  {
    num: '01',
    title: 'La terre comme héritage vivant',
    body: `Nos mères nous ont transmis des savoirs que ni les marchés ni les semenciers ne peuvent remplacer. NSS protège et diffuse ces pratiques agroécologiques endogènes qui nourrissent l'Afrique depuis des générations.`,
    icon: <svg viewBox="0 0 24 24"><path d="M5 21c0-9 5-14 14-14 0 9-5 14-14 14z"/><path d="M5 21c0-3 1-6 3-8"/></svg>,
    active: false,
  },
  {
    num: '02',
    title: 'La famille comme premier champ',
    body: `NSS promeut l'agriculture familiale comme modèle viable, durable et souverain. Nos paysannes portent cette conviction du village aux instances continentales — parce que décider de ce qu'on cultive, c'est décider de ce qu'on est.`,
    icon: <svg viewBox="0 0 24 24"><path d="M18 8a3 3 0 0 1 0 6"/><path d="M10 8v8a2 2 0 0 0 4 0v-1"/><path d="M14 8H6a3 3 0 0 0 0 6h8l4 4V4l-4 4z"/></svg>,
    active: true,
  },
  {
    num: '03',
    title: 'La gouvernance comme terrain de lutte',
    body: `175&nbsp;000 femmes, 14 pays, un seul mouvement. NSS s'étend vers d'autres régions du continent — la souveraineté alimentaire ne connaît pas de frontières.`,
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg>,
    active: false,
  },
]

export default function PiliersSection() {
  useReveal()
  return (
    <section className="hpv2-piliers">
      <div className="hpv2-wrap">
        <div className="hpv2-sec-head hpv2-rv">
          <div className="hpv2-surtitle">Nos piliers</div>
          <h2 className="hpv2-h2">Cultiver, transmettre, <em>décider ensemble.</em></h2>
          <hr className="hpv2-rule center" />
          <p className="hpv2-lede">
            {`Depuis 2011, NSS œuvre sur trois fronts pour bâtir la souveraineté alimentaire des femmes rurales d'Afrique de l'Ouest.`}
          </p>
        </div>
        <div className="hpv2-piliers-grid hpv2-sg">
          {PILIERS.map((p, i) => (
            <article key={i} className={`hpv2-pilier${p.active ? ' is-active' : ''}`}>
              <div className="hpv2-pilier-top">
                <span className="hpv2-pilier-icon">{p.icon}</span>
                <span className="hpv2-pilier-num">{p.num}</span>
              </div>
              <h3 className="hpv2-pilier-h3">{p.title}</h3>
              <div className="hpv2-pilier-accent" />
              <p className="hpv2-pilier-body" dangerouslySetInnerHTML={{ __html: p.body }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
