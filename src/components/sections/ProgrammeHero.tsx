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
        <motion.div
          className="phero__label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="phero__label-line" aria-hidden />
          <span className="phero__eyebrow">{eyebrow}</span>
        </motion.div>

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
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          background: linear-gradient(to right, rgba(5,12,5,0.88) 50%, rgba(5,12,5,0.40) 100%);
          z-index: 1;
        }

        .phero__wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .phero__label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
        }
        .phero__label-line {
          display: block; width: 28px; height: 1.5px;
          background: #97C459; flex-shrink: 0;
        }
        .phero__eyebrow {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #97C459;
        }

        .phero__h1 {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          line-height: 1.1;
          color: rgb(246,243,238);
          margin: 0 0 16px;
          max-width: 700px;
        }

        .phero__sub {
          font-family: 'Source Serif 4', var(--font-source-serif), serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          color: rgb(246,243,238);
          margin: 0;
          max-width: 560px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .phero { height: 60vh; }
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
