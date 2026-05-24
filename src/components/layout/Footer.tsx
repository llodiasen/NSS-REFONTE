import Link from "next/link";
import { Facebook, Youtube, Linkedin } from "lucide-react";

interface FooterProps {
  locale: string;
}

const NAV_MOUVEMENT = [
  { label: "Qui sommes-nous",   href: "/mouvement" },
  { label: "Nos engagements",   href: "/mouvement/engagements" },
  { label: "Partenaires",       href: "/mouvement/partenaires" },
  { label: "Associations",      href: "/mouvement/associations" },
];

const NAV_PROGRAMMES = [
  { label: "CIFAP",             href: "/programmes/cifap" },
  { label: "EMMAP",             href: "/programmes/emmap" },
  { label: "Actualit\u00e9s",   href: "/ressources/actualites" },
  { label: "Galerie",           href: "/ressources/galerie" },
  { label: "Vid\u00e9os", href: "/videos" },
];

const NAV_AGIR = [
  { label: "Rejoindre",         href: "/agir/rejoindre" },
  { label: "Faire un don",      href: "/agir/donner" },
  { label: "Contact",           href: "/contact" },
  { label: "Mentions l\u00e9gales", href: "/mentions-legales" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  fontSize: "13px",
  fontWeight: 400,
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  lineHeight: 1.5,
  display: "block",
  transition: "color 0.15s ease",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  fontSize: "11px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  color: "rgba(255,255,255,0.25)",
  marginBottom: "20px",
};

function NavCol({ title, items, locale }: { title: string; items: { label: string; href: string }[]; locale: string }) {
  return (
    <div>
      <p style={headingStyle}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {items.map((item) => (
          <Link key={item.href} href={`/${locale}${item.href}`} className="footer-link" style={linkStyle}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#071a10" }}>
      {/* Main grid */}
      <div
        className="footer-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "80px var(--container-pad) 64px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* ── Brand ── */}
        <div>
          <Link href={`/${locale}`} style={{ textDecoration: "none", display: "inline-block", marginBottom: "14px" }}>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Nous Sommes la Solution
            </span>
          </Link>
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.3)",
              marginBottom: "16px",
              letterSpacing: "0.3px",
            }}
          >
            Mouvement panafricain de femmes rurales
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.6,
              marginBottom: "28px",
            }}
          >
            « Par nous-mêmes. Pour nous-mêmes. En nous-mêmes. »
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { href: "https://facebook.com/wasafrica", label: "NSS sur Facebook", Icon: Facebook },
              { href: "https://youtube.com/wasafrica",  label: "NSS sur YouTube",  Icon: Youtube },
              { href: "https://linkedin.com/company/wasafrica", label: "NSS sur LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.55)",
                  transition: "background 0.2s ease, color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Colonnes nav ── */}
        <NavCol title="Mouvement"   items={NAV_MOUVEMENT}  locale={locale} />
        <NavCol title="Programmes"  items={NAV_PROGRAMMES} locale={locale} />
        <NavCol title="Agir"        items={NAV_AGIR}       locale={locale} />
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "20px var(--container-pad)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.25)" }}>
          © {year} Nous Sommes la Solution (NSS). Tous droits réservés.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "Mentions l\u00e9gales", href: `/${locale}/mentions-legales` },
            { label: "Confidentialit\u00e9",  href: `/${locale}/confidentialite` },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="footer-link" style={{ ...linkStyle, fontSize: "11px" }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: rgba(255,255,255,0.8) !important; }
        .footer-social:hover { background: rgba(255,255,255,0.14) !important; color: #fff !important; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; padding: 48px 24px 40px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
