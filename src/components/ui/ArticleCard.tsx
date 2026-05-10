'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/types/article'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const pillLabel = article.pays ?? article.programme ?? article.type

  return (
    <motion.article
      className="acard"
      whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
    >
      {/* Image */}
      <Link
        href={`/fr/ressources/actualites/${article.slug}`}
        className="acard__img-wrap"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          loading="lazy"
        />
        {pillLabel && (
          <span className="acard__pill" aria-label={pillLabel}>
            {pillLabel}
          </span>
        )}
      </Link>

      {/* Corps */}
      <div className="acard__body">
        <h3 className="acard__titre">
          <Link href={`/fr/ressources/actualites/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="acard__excerpt">{article.excerpt}</p>

        <div className="acard__footer">
          <time className="acard__date" dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('fr-FR', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </time>
          <Link
            href={`/fr/ressources/actualites/${article.slug}`}
            className="acard__cta"
            aria-label={`Lire l'article : ${article.title}`}
          >
            Lire l&apos;article →
          </Link>
        </div>
      </div>

      <style>{`
        .acard {
          background: #ffffff;
          border: 0.5px solid #E4E2DC;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-left: 2px solid #E4E2DC;
          transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
        }
        .acard:hover {
          border-left-color: #00AD4C;
          box-shadow: 0 8px 24px rgba(0,173,76,0.10);
        }

        /* Image */
        .acard__img-wrap {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Pill */
        .acard__pill {
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
        .acard__body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        /* Titre */
        .acard__titre {
          margin: 0;
        }
        .acard__titre a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: var(--font-display), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.22;
          color: #0A0A0A;
          text-decoration: none;
          transition: color 0.22s ease;
        }
        .acard__titre a:hover { color: #045627; }

        /* Extrait */
        .acard__excerpt {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #2C2C28;
          text-align: justify;
          hyphens: auto;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Footer */
        .acard__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid #F0EEE8;
        }

        /* Date */
        .acard__date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #888780;
        }

        /* CTA */
        .acard__cta {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #00AD4C;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .acard__cta:hover { color: #045627; }
      `}</style>
    </motion.article>
  )
}
