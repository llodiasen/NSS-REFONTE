import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

/* ─── Types ───────────────────────────────────────────────── */
interface FooterRedesignProps {
  locale: string;
}

interface NavItem {
  label: string;
  href: string;
}

/* ─── Données nav ─────────────────────────────────────────── */
const NAV_MOUVEMENT: NavItem[] = [
  { label: "Qui sommes-nous",  href: "/mouvement" },
  { label: "Nos engagements",  href: "/mouvement/engagements" },
  { label: "Partenaires",      href: "/mouvement/partenaires" },
  { label: "Associations",     href: "/mouvement/associations" },
];

const NAV_PROGRAMMES: NavItem[] = [
  { label: "CIFAP",            href: "/programmes/cifap" },
  { label: "EMMAP",            href: "/programmes/emmap" },
  { label: "Actualités",       href: "/ressources/actualites" },
  { label: "Galerie",          href: "/ressources/galerie" },
  { label: "Vidéos",           href: "/mediatheque" },
];

const NAV_AGIR: NavItem[] = [
  { label: "Rejoindre",        href: "/agir/rejoindre" },
  { label: "Faire un don",     href: "/agir/donner" },
  { label: "Contact",          href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const SOCIALS = [
  { href: "https://facebook.com/wasafrica",         label: "NSS sur Facebook",  Icon: Facebook },
  { href: "https://instagram.com/wasafrica",        label: "NSS sur Instagram", Icon: Instagram },
  { href: "https://linkedin.com/company/wasafrica", label: "NSS sur LinkedIn",  Icon: Linkedin },
];

/* ─── NavCol ──────────────────────────────────────────────── */
function NavCol({ title, items, locale }: { title: string; items: NavItem[]; locale: string }) {
  return (
    <div className="ftr__col">
      <p className="ftr__col-title">{title}</p>
      <span className="ftr__col-line" aria-hidden="true" />
      <ul className="ftr__col-list" role="list">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={`/${locale}${item.href}`} className="ftr__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── FooterRedesign ──────────────────────────────────────── */
export default function FooterRedesign({ locale }: FooterRedesignProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr" aria-label="Pied de page NSS">

      {/* Liseré décoratif or → vert clair en haut */}
      <div className="ftr__topline" aria-hidden="true" />

      {/* Motif kente diagonal */}
      <div className="ftr__pattern" aria-hidden="true" />

      {/* ── Grid principal ──────────────────────────────── */}
      <div className="ftr__inner">

        {/* Brand */}
        <div className="ftr__brand">
          <Link href={`/${locale}`} className="ftr__brand-name" aria-label="Accueil NSS">
            Nous Sommes la Solution
          </Link>
          <p className="ftr__brand-sub">
            Mouvement panafricain de femmes rurales
          </p>
          <p className="ftr__tagline">
            « Par nous-mêmes. Pour nous-mêmes. En nous-mêmes. »
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
        </div>

        {/* Colonnes nav */}
        <NavCol title="Mouvement"  items={NAV_MOUVEMENT}  locale={locale} />
        <NavCol title="Programmes" items={NAV_PROGRAMMES} locale={locale} />
        <NavCol title="Agir"       items={NAV_AGIR}       locale={locale} />
      </div>

      {/* ── Barre bottom ────────────────────────────────── */}
      <div className="ftr__bottom">
        <p className="ftr__copy">
          © {year} Nous Sommes la Solution (NSS). Tous droits réservés.
        </p>
        <div className="ftr__bottom-links">
          {[
            { label: "Mentions légales",  href: `/${locale}/mentions-legales` },
            { label: "Confidentialité",   href: `/${locale}/confidentialite` },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="ftr__bottom-link">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ══ Styles ══════════════════════════════════════════ */}
      <style>{`
        /* ── Section ──────────────────────────────────────── */
        .ftr {
          position: relative;
          background: #045627;
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
            #E8A838 35%,
            #A5CE46 65%,
            transparent
          );
          z-index: 2;
        }

        /* Motif kente */
        .ftr__pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent, transparent 22px,
              rgba(245,237,214,0.025) 22px, rgba(245,237,214,0.025) 24px
            ),
            repeating-linear-gradient(
              45deg,
              transparent, transparent 22px,
              rgba(165,206,70,0.02) 22px, rgba(165,206,70,0.02) 24px
            );
        }

        /* ── Grid ─────────────────────────────────────────── */
        .ftr__inner {
          position: relative;
          z-index: 2;
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 80px var(--container-pad, 24px) 64px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* ── Brand ─────────────────────────────────────────── */
        .ftr__brand-name {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 20px;
          font-weight: 500;
          color: #F5EDD6;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 10px;
          line-height: 1.2;
          transition: color 0.2s;
        }
        .ftr__brand-name:hover { color: #A5CE46; }

        .ftr__brand-sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(232,168,56,0.65);
          margin: 0 0 14px;
        }

        .ftr__tagline {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 14px;
          font-style: italic;
          font-weight: 400;
          color: rgba(245,237,214,0.50);
          line-height: 1.65;
          margin: 0;
        }

        .ftr__brand-sep {
          width: 32px;
          height: 1.5px;
          background: linear-gradient(90deg, #E8A838, rgba(232,168,56,0.1));
          margin: 24px 0;
        }

        /* Icônes sociales */
        .ftr__socials {
          display: flex;
          gap: 10px;
        }
        .ftr__social {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(0,173,76,0.12);
          border: 1px solid rgba(0,173,76,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A5CE46;
          text-decoration: none;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .ftr__social:hover {
          background: rgba(0,173,76,0.25);
          border-color: rgba(0,173,76,0.40);
          color: #00AD4C;
        }

        /* ── Colonnes nav ───────────────────────────────────── */
        .ftr__col {
          display: flex;
          flex-direction: column;
        }

        .ftr__col-title {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E8A838;
          margin: 0 0 10px;
        }

        .ftr__col-line {
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(232,168,56,0.45);
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .ftr__col-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .ftr__link {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13px;
          font-weight: 400;
          color: rgba(245,237,214,0.55);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.18s;
        }
        .ftr__link:hover { color: #A5CE46; }

        /* ── Barre bottom ───────────────────────────────────── */
        .ftr__bottom {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(245,237,214,0.07);
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 20px var(--container-pad, 24px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ftr__copy {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          color: rgba(245,237,214,0.30);
          margin: 0;
        }

        .ftr__bottom-links {
          display: flex;
          gap: 20px;
        }

        .ftr__bottom-link {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          color: rgba(245,237,214,0.35);
          text-decoration: none;
          transition: color 0.18s;
        }
        .ftr__bottom-link:hover { color: #A5CE46; }

        /* ── Responsive ─────────────────────────────────────── */
        @media (max-width: 768px) {
          .ftr__inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            padding: 56px var(--container-pad, 20px) 44px;
          }
          .ftr__brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .ftr__inner {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 20px 36px;
          }
          .ftr__bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
