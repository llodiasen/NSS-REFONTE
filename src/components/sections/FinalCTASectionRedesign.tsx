import Link from 'next/link'
import Image from 'next/image'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

const PARTENAIRES = [
  { nom: 'Grassroots International', logo: '/images/partenaires/Grassroots-international.jpg' },
  { nom: 'AgroEcology Fund',         logo: '/images/partenaires/Agroecology-Fund.jpg' },
  { nom: 'Thousand Currents',        logo: '/images/partenaires/thoussands-current-1.jpg' },
  { nom: 'MATCH International',      logo: '/images/partenaires/Fond-egalite.png' },
  { nom: 'Fahamu Africa',            logo: '/images/partenaires/logofahamu1.png' },
]

export default function FinalCTASectionRedesign() {
  return (
    <section className="fcta" aria-labelledby="fcta-heading">

      <div className="fcta-glow" aria-hidden />

      <div className="fcta-inner">

        {/* Eyebrow */}
        <div className="fcta-eyebrow">
          <span className="fcta-ey-line" aria-hidden />
          <span>REJOINDRE LE MOUVEMENT</span>
          <span className="fcta-ey-line" aria-hidden />
        </div>

        {/* H2 */}
        <h2 id="fcta-heading" className="fcta-h2">
          Ensemble, nous sommes <em>la solution.</em>
        </h2>

        {/* Subtitle */}
        <p className="fcta-sub">
          175&nbsp;000 femmes rurales transforment déjà les systèmes alimentaires
          en Afrique de l&apos;Ouest. Rejoignez le mouvement, portez la voix de
          votre communauté, et construisez l&apos;avenir avec nous.
        </p>

        {/* CTAs */}
        <div className="fcta-btns">
          <Link href="/fr/agir/rejoindre" className="fcta-btn fcta-btn--fill">
            Adhérer à NSS
          </Link>
          <Link href="/fr/contact" className="fcta-btn fcta-btn--ghost">
            Nous contacter
            <svg width="13" height="8" viewBox="0 0 16 9" fill="none" aria-hidden>
              <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>


      </div>

      <style suppressHydrationWarning>{`
        .fcta {
          position: relative; overflow: hidden;
          background: linear-gradient(158deg, ${NSS.vertFonce} 0%, #021f0e 52%, #000000 100%);
          padding: 80px clamp(1rem, 2.5vw, 24px) 72px;
          text-align: center;
        }
        .fcta-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          width: 640px; height: 380px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,173,76,.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .fcta-inner {
          position: relative;
          max-width: 680px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center;
        }
        /* Eyebrow */
        .fcta-eyebrow {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 24px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: ${NSS.or};
        }
        .fcta-ey-line {
          display: block; width: 36px; height: 1px;
          background: rgba(232,168,56,0.40); flex-shrink: 0;
        }
        /* H2 */
        .fcta-h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 3.2vw, 42px);
          font-weight: 600; color: ${NSS.creme};
          line-height: 1.1; margin: 0 0 22px; letter-spacing: -0.015em;
        }
        .fcta-h2 em { font-style: italic; color: ${NSS.or}; }
        /* Subtitle */
        .fcta-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px; color: rgba(245,237,214,.68);
          line-height: 1.78; margin: 0 0 36px;
          max-width: 520px; text-align: center;
        }
        /* Buttons */
        .fcta-btns {
          display: flex; gap: 14px;
          justify-content: center; flex-wrap: wrap;
          margin-bottom: 0;
        }
        .fcta-btn {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 700;
          text-decoration: none; text-transform: uppercase; letter-spacing: 0.13em;
          padding: 14px 32px; border-radius: 2px;
          transition: background .22s, color .22s, border-color .22s, transform .15s, gap .2s;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .fcta-btn--fill {
          background: ${NSS.vertPrimaire}; color: #ffffff;
          border: 1.5px solid ${NSS.vertPrimaire};
        }
        .fcta-btn--fill:hover {
          background: #008f3e; border-color: #008f3e; transform: translateY(-3px);
        }
        .fcta-btn--ghost {
          background: transparent; color: ${NSS.creme};
          border: 1.5px solid rgba(245,237,214,.42);
        }
        .fcta-btn--ghost:hover {
          border-color: rgba(245,237,214,.80);
          background: rgba(245,237,214,.06);
          transform: translateY(-3px); gap: 16px;
        }
        /* Separator */
        .fcta-sep {
          width: 100%; max-width: 480px; height: 1px; margin: 52px 0 28px;
          background: linear-gradient(90deg, transparent, rgba(165,206,70,.20) 30%, rgba(165,206,70,.20) 70%, transparent);
        }
        /* Partners label */
        .fcta-partners-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,.30); margin: 0 0 20px;
        }
        /* Logos */
        .fcta-logos {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 12px 20px;
          width: 100%;
        }
        .fcta-logo-wrap {
          position: relative; width: 96px; height: 44px;
          filter: brightness(0) invert(1);
          opacity: 0.38;
          transition: opacity .25s ease, filter .25s ease;
        }
        .fcta-logo-wrap:hover {
          opacity: 0.70;
          filter: brightness(0) invert(1);
        }
        /* Responsive */
        @media (max-width: 640px) {
          .fcta { padding: 64px 20px 56px; }
          .fcta-btns { flex-direction: column; align-items: center; }
          .fcta-btn { width: 100%; max-width: 280px; justify-content: center; }
          .fcta-logo-wrap { width: 80px; height: 38px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fcta-btn { transition: background .2s, color .2s; }
        }
      `}</style>
    </section>
  )
}
