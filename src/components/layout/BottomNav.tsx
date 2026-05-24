'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Home, Newspaper, CalendarDays, GalleryHorizontal, Mail, type LucideIcon } from 'lucide-react'

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
} as const

interface NavItem {
  key:   string
  label: string
  icon:  LucideIcon
  path:  string
}

const NAV_ITEMS: NavItem[] = [
  { key: 'home',       label: 'Accueil',    icon: Home,        path: ''                       },
  { key: 'actualites', label: 'Actualités', icon: Newspaper,   path: '/ressources/actualites' },
  { key: 'programmes', label: 'Programmes', icon: CalendarDays,path: '/programmes'            },
  { key: 'galerie',    label: 'Galerie',    icon: GalleryHorizontal, path: '/ressources/galerie' },
  { key: 'contact',    label: 'Contact',    icon: Mail,        path: '/contact'               },
]

// Routes privées — la barre ne s'affiche pas
const PRIVATE_PREFIXES = ['/login', '/invite', '/membre', '/admin']

export default function BottomNav() {
  const locale   = useLocale()
  const pathname = usePathname()

  const localePath = pathname.replace(`/${locale}`, '') || '/'
  const isPrivate  = PRIVATE_PREFIXES.some((p) => localePath.startsWith(p))

  if (isPrivate) return null

  return (
    <nav className="bnav" aria-label="Navigation principale mobile">
      {NAV_ITEMS.map(({ key, label, icon: Icon, path }) => {
        const href     = `/${locale}${path}`
        const isActive = path === ''
          ? localePath === '/' || localePath === ''
          : localePath.startsWith(path)

        return (
          <Link
            key={key}
            href={href}
            className={`bnav-item${isActive ? ' active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="bnav-indicator" aria-hidden="true" />
            <Icon size={22} strokeWidth={isActive ? 2 : 1.6} />
            <span className="bnav-label">{label}</span>
          </Link>
        )
      })}

      <style>{`
        /* ── Barre ── */
        .bnav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: calc(60px + env(safe-area-inset-bottom, 0px));
          padding-bottom: env(safe-area-inset-bottom, 0px);
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.09);
          box-shadow: 0 -6px 24px rgba(0,0,0,0.06);
          align-items: stretch;
          justify-content: space-around;
          z-index: 900;
        }

        @media (max-width: 768px) {
          .bnav { display: flex; }
        }

        /* ── Item ── */
        .bnav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          flex: 1;
          padding: 0 4px 2px;
          text-decoration: none;
          color: #ADADAD;
          transition: color 0.18s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .bnav-item.active {
          color: ${NSS.vertPrimaire};
        }

        /* ── Indicateur actif (petite pilule en haut) ── */
        .bnav-indicator {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 28px;
          height: 3px;
          background: ${NSS.vertPrimaire};
          border-radius: 0 0 4px 4px;
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .bnav-item.active .bnav-indicator {
          transform: translateX(-50%) scaleX(1);
        }

        /* ── Label ── */
        .bnav-label {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.01em;
          white-space: nowrap;
          line-height: 1;
        }

        .bnav-item.active .bnav-label {
          font-weight: 600;
        }

        /* ── Feedback au tap ── */
        @media (hover: none) {
          .bnav-item:active {
            color: ${NSS.vertFonce};
            transform: scale(0.94);
            transition: transform 0.10s ease, color 0.10s ease;
          }
        }

        /* ── Réduction de mouvement ── */
        @media (prefers-reduced-motion: reduce) {
          .bnav-indicator { transition: none; }
        }
      `}</style>
    </nav>
  )
}

