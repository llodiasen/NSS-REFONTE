'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProgrammeHeroProps {
  eyebrow:   string
  title:     string
  subtitle?: string
  imageSrc:  string
}

export default function ProgrammeHero({ eyebrow, title, subtitle, imageSrc }: ProgrammeHeroProps) {
  return (
    <section className="phero" aria-label={title}>

      {/* Image de fond */}
      <div className="phero__img" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Overlay vert foncé */}
      <div className="phero__overlay" aria-hidden="true" />

      {/* Contenu */}
      <div className="phero__wrap">
        <motion.span
          className="phero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          className="phero__h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="phero__sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <style>{`
        .phero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .phero__img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .phero__overlay {
          position: absolute;
          inset: 0;
          background: rgba(4,86,39,0.70);
          z-index: 1;
        }

        .phero__wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 80px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .phero__eyebrow {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #A5CE46;
        }

        .phero__h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.0;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
          max-width: 700px;
        }

        .phero__sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          color: #F5EDD6;
          margin: 0;
          max-width: 560px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .phero { height: 60vh; }
          .phero__h1 { font-size: 30px; }
          .phero__sub { font-size: 15px; }
          .phero__wrap { padding: 0 20px 48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .phero__eyebrow,
          .phero__h1,
          .phero__sub { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
