'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
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
]

const NAV_PROGRAMMES: NavItem[] = [
  { label: 'CIFAP',           href: '/programmes/cifap'         },
  { label: 'EMMAP',           href: '/programmes/emmap'         },
  { label: 'Actualités',      href: '/ressources/actualites'    },
  { label: 'Galerie',         href: '/ressources/galerie'       },
  { label: 'Vidéos',          href: '/mediatheque'              },
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
          <Link
            href={`/${locale}`}
            className="ftr__brand-name"
            aria-label="Accueil NSS — Nous Sommes la Solution"
          >
            Nous Sommes<br />la Solution
          </Link>
          <p className="ftr__brand-sub">
            Mouvement panafricain de femmes rurales
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
        <NavCol title="Programmes" items={NAV_PROGRAMMES} locale={locale} delay={0.22} />
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 88px 80px 72px;
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
        .ftr__brand-name {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 26px;
          font-weight: 500;
          line-height: 1.1;
          color: ${NSS.creme};
          text-decoration: none;
          display: inline-block;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
          transition: color 0.22s ease;
        }
        .ftr__brand-name:hover { color: ${NSS.vertClair}; }

        .ftr__brand-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: rgba(232,168,56,0.60);
          margin: 0 0 18px;
        }

        .ftr__tagline {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          color: rgba(245,237,214,0.40);
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
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
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
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(245,237,214,0.48);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.20s ease;
        }
        .ftr-link:hover { color: ${NSS.vertClair}; }

        /* ── Barre bottom ── */
        .ftr__bottom {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(245,237,214,0.06);
          max-width: 1400px;
          margin: 0 auto;
          padding: 22px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ftr__copy {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(245,237,214,0.25);
          margin: 0;
          letter-spacing: 0.02em;
        }

        .ftr__bottom-links {
          display: flex;
          gap: 24px;
        }

        .ftr__bottom-link {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: rgba(245,237,214,0.28);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.20s ease;
        }
        .ftr__bottom-link:hover { color: ${NSS.vertClair}; }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .ftr__inner  { padding: 72px 48px 56px; gap: 40px; }
          .ftr__bottom { padding: 20px 48px; }
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
