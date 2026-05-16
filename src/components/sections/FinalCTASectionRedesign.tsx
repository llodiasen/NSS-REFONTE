import Link from 'next/link'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

export default function FinalCTASectionRedesign() {
  return (
    <section className="fcta" aria-labelledby="fcta-heading">

      <div className="fcta-bg" aria-hidden />
      <div className="fcta-overlay" aria-hidden />

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
          en Afrique de l&apos;Ouest. Rejoignez le mouvement,
          construisez l&apos;avenir avec nous.
        </p>

        {/* CTAs */}
        <div className="fcta-btns">
          <Link href="/fr/agir/rejoindre" className="fcta-btn fcta-btn--fill">
            Adhérer au mouvement
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
          padding: 110px clamp(1rem, 2.5vw, 24px) 100px;
          text-align: center;
        }
        .fcta-bg {
          position: absolute; inset: 0;
          background: url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')
            center / cover no-repeat;
          z-index: 0;
        }
        .fcta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            158deg,
            rgba(4,86,39,0.88) 0%,
            rgba(2,18,8,0.90) 50%,
            rgba(0,0,0,0.92) 100%
          );
          z-index: 1;
        }
        .fcta-inner {
          position: relative; z-index: 2;
          max-width: 680px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center;
        }
        /* Eyebrow */
        .fcta-eyebrow {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 24px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
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
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(24px, 3.2vw, 42px);
          font-weight: 600; color: #ffffff;
          line-height: 1.1; margin: 0 0 22px; letter-spacing: -0.015em;
        }
        .fcta-h2 em { font-style: italic; color: #ffffff; }
        /* Subtitle */
        .fcta-sub {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; color: #ffffff;
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
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px; font-weight: 700;
          text-decoration: none; text-transform: uppercase; letter-spacing: 0.13em;
          padding: 9px 20px; border-radius: 4px;
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
          background: transparent; color: #ffffff;
          border: 1.5px solid rgba(255,255,255,.42);
        }
        .fcta-btn--ghost:hover {
          border-color: rgba(255,255,255,.80);
          background: rgba(255,255,255,.08);
          transform: translateY(-3px); gap: 16px;
        }
        /* Separator */
        .fcta-sep {
          width: 100%; max-width: 480px; height: 1px; margin: 52px 0 28px;
          background: linear-gradient(90deg, transparent, rgba(165,206,70,.20) 30%, rgba(165,206,70,.20) 70%, transparent);
        }
        /* Partners label */
        .fcta-partners-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
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

