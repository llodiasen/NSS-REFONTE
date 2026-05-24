'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

// ─── Types ────────────────────────────────────────────────────────────────────
interface FooterRedesignProps {
  locale: string
}

interface NavItem {
  label: string
  href: string
}

// ─── Données nav ─────────────────────────────────────────────────────────────
const NAV_MOUVEMENT: NavItem[] = [
  { label: 'Qui sommes-nous', href: '/mouvement'                },
  { label: 'Nos engagements', href: '/mouvement/engagements'    },
  { label: 'Partenaires',     href: '/mouvement/partenaires'    },
  { label: 'Associations',    href: '/mouvement/associations'   },
  { label: 'Actualités',      href: '/ressources/actualites'    },
  { label: 'Galerie',         href: '/ressources/galerie'       },
  { label: 'Vidéos',          href: '/videos'                   },
]

const NAV_PROGRAMMES: NavItem[] = [
  { label: 'CIFAP',           href: '/programmes/cifap'         },
  { label: 'RENCONTRE',       href: '/programmes/rencontre'     },
  { label: 'FORMATION',       href: '/programmes/formation'     },
  { label: 'FOIRE',           href: '/programmes/foire'         },
  { label: 'EMMAP',           href: '/programmes/emmap'         },
]

const NAV_AGIR: NavItem[] = [
  { label: 'Rejoindre',       href: '/agir/rejoindre'           },
  { label: 'Faire un don',    href: '/agir/donner'              },
  { label: 'Contact',         href: '/contact'                  },
  { label: 'Mentions légales',href: '/mentions-legales'         },
]

const SOCIALS = [
  { href: 'https://facebook.com/wasafrica',         label: 'NSS sur Facebook',  Icon: Facebook  },
  { href: 'https://instagram.com/wasafrica',        label: 'NSS sur Instagram', Icon: Instagram },
  { href: 'https://linkedin.com/company/wasafrica', label: 'NSS sur LinkedIn',  Icon: Linkedin  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

// ─── NavCol ───────────────────────────────────────────────────────────────────
function NavCol({
  title, items, locale, delay,
}: { title: string; items: NavItem[]; locale: string; delay: number }) {
  return (
    <motion.div
      className="ftr-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.60, delay, ease }}
    >
      <p className="ftr-col__title">{title}</p>
      <span className="ftr-col__line" aria-hidden="true" />
      <ul className="ftr-col__list" role="list">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={`/${locale}${item.href}`} className="ftr-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// ─── FooterRedesign ───────────────────────────────────────────────────────────
export default function FooterRedesign({ locale }: FooterRedesignProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="ftr" aria-label="Pied de page NSS">

      {/* Liseré décoratif or → vert clair */}
      <div className="ftr__topline" aria-hidden="true" />

      {/* Motif kente diagonal */}
      <div className="ftr__pattern" aria-hidden="true" />

      {/* ════════ Grille principale ════════ */}
      <div className="ftr__inner">

        {/* Brand */}
        <motion.div
          className="ftr__brand"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.72, delay: 0.06, ease }}
        >
          <p className="ftr__brand-desc">
            Nous Sommes la Solution (NSS) est un mouvement panafricain
            de femmes rurales actif dans 7 pays d&apos;Afrique de l&apos;Ouest.
            Depuis 2011, nous défendons la souveraineté alimentaire,
            l&apos;agroécologie paysanne et les droits des femmes rurales.
          </p>
          <p className="ftr__tagline">
            « Par nous-mêmes.<br />Pour nous-mêmes.<br />En nous-mêmes. »
          </p>
          <div className="ftr__brand-sep" aria-hidden="true" />
          <div className="ftr__socials" role="list" aria-label="Réseaux sociaux">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="ftr__social"
                role="listitem"
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Colonnes nav */}
        <NavCol title="Mouvement"  items={NAV_MOUVEMENT}  locale={locale} delay={0.14} />
        <NavCol title="Nos Programmes" items={NAV_PROGRAMMES} locale={locale} delay={0.22} />
        <NavCol title="Agir"       items={NAV_AGIR}       locale={locale} delay={0.30} />

      </div>

      {/* ════════ Barre bottom ════════ */}
      <div className="ftr__bottom">
        <p className="ftr__copy">
          &copy;&nbsp;{year}&nbsp;Nous Sommes la Solution (NSS). Tous droits réservés.
        </p>
        <div className="ftr__bottom-links">
          {[
            { label: 'Mentions légales', href: `/${locale}/mentions-legales` },
            { label: 'Confidentialité',  href: `/${locale}/confidentialite`  },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="ftr__bottom-link">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ════════ Styles ════════ */}
      <style>{`
        /* ── Footer ── */
        .ftr {
          position: relative;
          background: #021f0e;
          overflow: hidden;
        }

        /* Liseré or → vert clair */
        .ftr__topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(
            90deg,
            transparent,
            ${NSS.or} 30%,
            ${NSS.vertClair} 70%,
            transparent
          );
          z-index: 2;
        }

        /* Motif kente diagonal */
        .ftr__pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent, transparent 22px,
              rgba(245,237,214,0.018) 22px, rgba(245,237,214,0.018) 24px
            ),
            repeating-linear-gradient(
              45deg,
              transparent, transparent 22px,
              rgba(165,206,70,0.016) 22px, rgba(165,206,70,0.016) 24px
            );
        }

        /* ── Grille principale ── */
        .ftr__inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 24px 56px;
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        /* ── Brand ── */
        .ftr__brand {
          display: flex;
          flex-direction: column;
        }
        .ftr__brand-desc {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: #ffffff;
          text-align: justify;
          margin: 0 0 18px;
          max-width: 280px;
        }

        .ftr__tagline {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.75;
          margin: 0;
        }

        .ftr__brand-sep {
          width: 32px;
          height: 1.5px;
          background: linear-gradient(90deg, ${NSS.or}, rgba(232,168,56,0.08));
          margin: 24px 0;
          flex-shrink: 0;
        }

        /* Icônes sociales */
        .ftr__socials {
          display: flex;
          gap: 10px;
        }
        .ftr__social {
          width: 34px;
          height: 34px;
          border-radius: 2px;
          background: rgba(0,173,76,0.10);
          border: 1px solid rgba(0,173,76,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${NSS.vertClair};
          text-decoration: none;
          flex-shrink: 0;
          transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease;
        }
        .ftr__social:hover {
          background: rgba(0,173,76,0.22);
          border-color: rgba(0,173,76,0.40);
          color: ${NSS.vertPrimaire};
        }

        /* ── Colonnes nav ── */
        .ftr-col {
          display: flex;
          flex-direction: column;
        }

        .ftr-col__title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${NSS.or};
          margin: 0 0 10px;
        }

        .ftr-col__line {
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(232,168,56,0.40);
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .ftr-col__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ftr-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.20s ease;
        }
        .ftr-link:hover { color: #E8A838; }

        /* ── Barre bottom ── */
        .ftr__bottom {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(245,237,214,0.06);
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ftr__copy {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .ftr__bottom-links {
          display: flex;
          gap: 24px;
        }

        .ftr__bottom-link {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.20s ease;
        }
        .ftr__bottom-link:hover { color: #E8A838; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .ftr__inner  { padding: 60px 24px 48px; gap: 40px; }
          .ftr__bottom { padding: 20px 24px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .ftr__inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            padding: 60px 24px 48px;
          }
          .ftr__brand { grid-column: 1 / -1; }
          .ftr__bottom { padding: 18px 24px; }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .ftr__inner {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 52px 20px 40px;
          }
          .ftr__bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 18px 20px;
          }
        }
      `}</style>
    </footer>
  )
}

