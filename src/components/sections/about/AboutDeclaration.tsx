'use client'

import { motion } from 'framer-motion'

const NSS = {
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
} as const

const VIDEO_ID  = 'FothaoeQsQ8'
const VIDEO_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&loop=1&playlist=${VIDEO_ID}`
const VIDEO_TTL = "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété"

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutDeclaration() {
  return (
    <section className="adc" aria-labelledby="adc-titre">
      <div className="adc-wrap">

        {/* ══ COLONNE GAUCHE 50% ══ */}
        <motion.div
          className="adc-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, ease }}
        >
          <p className="adc-eyebrow">NOTRE MISSION</p>

          <h2 id="adc-titre" className="adc-h2">
            <span className="adc-h2-l1">Les femmes rurales nourrissent l&apos;Afrique.</span>
            <em className="adc-h2-l2">Elles sont la solution.</em>
          </h2>

          <span className="adc-underline" aria-hidden />

          <p className="adc-body">
            En Afrique de l&apos;Ouest, l&apos;agriculture familiale nourrit{' '}
            <strong>70&nbsp;%</strong> des populations. Ce sont les femmes rurales
            qui en assurent l&apos;essentiel — semailles, récoltes, transformation,
            conservation.
          </p>
          <p className="adc-body">
            Pourtant, elles ont un accès limité à la terre, aux ressources et aux
            décisions qui gouvernent leur travail.
          </p>
          <p className="adc-body">
            NSS est né pour changer cela. Non pas pour demander de l&apos;aide,
            mais pour affirmer que les femmes rurales africaines sont,
            elles-mêmes, la solution à la crise alimentaire du continent.
          </p>
        </motion.div>

        {/* ══ COLONNE DROITE 50% ══ */}
        <motion.div
          className="adc-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.78, delay: 0.12, ease }}
        >
          {/* Vidéo YouTube */}
          <div className="adc-vid-wrap">
            <iframe
              src={VIDEO_SRC}
              title={VIDEO_TTL}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="adc-iframe"
            />
          </div>

        </motion.div>

      </div>

      <style>{`
        /* ── Section ── */
        .adc {
          background: #ffffff;
          overflow: hidden;
        }

        /* ── Grid 50/50 ── */
        .adc-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 64px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: stretch;
          box-sizing: border-box;
        }

        /* Pas de débordement hors colonne */
        .adc-left,
        .adc-right {
          min-width: 0;
        }

        /* ── Eyebrow ── */
        .adc-eyebrow {
          margin: 0 0 16px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertClair};
        }

        /* ── H2 ── */
        .adc-h2 {
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
        }
        .adc-h2-l1 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.2vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          color: #2A2A2A;
          display: block;
          font-style: normal;
          white-space: nowrap;
        }
        .adc-h2-l2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.2vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          color: ${NSS.vertClair};
          font-style: italic;
          display: block;
        }

        /* ── Underline ── */
        .adc-underline {
          display: block;
          width: 80px;
          height: 2px;
          background: ${NSS.vertClair};
          border-radius: 1px;
          margin-bottom: 32px;
          flex-shrink: 0;
        }

        /* ── Corps ── */
        .adc-body {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #2C2C28;
          margin: 0 0 16px;
          text-align: justify;
          hyphens: auto;
        }
        .adc-body:last-child { margin-bottom: 0; }
        .adc-body strong { font-weight: 700; color: ${NSS.vertPrimaire}; }

        /* ── Colonne droite ── */
        .adc-right {
          display: flex;
          flex-direction: column;
        }

        /* ── Vidéo ── */
        .adc-vid-wrap {
          position: relative;
          flex: 1;
          min-height: 260px;
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          background: #041a0c;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .adc-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* ── Tablet ── */
        @media (max-width: 1200px) {
          .adc-wrap { padding: 96px 40px; gap: 48px; }
        }

        /* ── Mobile <768px ── */
        @media (max-width: 768px) {
          .adc-wrap {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 32px;
          }
        }

        /* ── Mobile <480px ── */
        @media (max-width: 480px) {
          .adc-wrap { padding: 56px 20px; }
          .adc-h2-l1 { white-space: normal; }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .adc-stat { transition: none; }
        }
      `}</style>
    </section>
  )
}
