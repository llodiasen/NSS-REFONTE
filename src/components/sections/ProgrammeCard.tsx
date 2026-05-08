'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProgrammeCardProps {
  eyebrow:    string
  title:      string
  description: string
  href:       string
  imageSrc:   string
  pillLabel:  string
}

export default function ProgrammeCard({
  eyebrow, title, description, href, imageSrc, pillLabel,
}: ProgrammeCardProps) {
  return (
    <motion.article
      className="pcard"
      whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
    >
      {/* Image */}
      <Link href={href} className="pcard__img-wrap" tabIndex={-1} aria-hidden="true">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          loading="lazy"
        />
        <span className="pcard__pill">{pillLabel}</span>
      </Link>

      {/* Corps */}
      <div className="pcard__body">
        <span className="pcard__eyebrow">{eyebrow}</span>

        <h3 className="pcard__titre">
          <Link href={href}>{title}</Link>
        </h3>

        <p className="pcard__desc">{description}</p>

        <Link href={href} className="pcard__cta" aria-label={`Découvrir : ${title}`}>
          Découvrir →
        </Link>
      </div>

      <style>{`
        .pcard {
          background: #ffffff;
          border: 0.5px solid #E4E2DC;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-left: 3px solid #E4E2DC;
          transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pcard:hover {
          border-left-color: #00AD4C;
          box-shadow: 0 12px 32px rgba(0,173,76,0.12);
        }

        /* Image */
        .pcard__img-wrap {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Pill */
        .pcard__pill {
          position: absolute;
          bottom: 10px;
          left: 12px;
          background: #A5CE46;
          color: #045627;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
          pointer-events: none;
        }

        /* Corps */
        .pcard__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .pcard__eyebrow {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A5CE46;
        }

        .pcard__titre {
          margin: 0;
        }
        .pcard__titre a {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.2;
          color: #2A2A2A;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pcard__titre a:hover { color: #00AD4C; }

        .pcard__desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.72;
          color: #2C2C28;
          text-align: justify;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .pcard__cta {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #00AD4C;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .pcard__cta:hover { color: #045627; }
      `}</style>
    </motion.article>
  )
}
