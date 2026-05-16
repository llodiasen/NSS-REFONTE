import Image from "next/image";
import Link from "next/link";

/* ── palette ─────────────────────────────────────────────────────────────── */
const GOLD      = "#E8A838";
const GREEN_LT  = "#A5CE46";
const BORDER    = "#045627";
const CHARCOAL  = "#2A2A2A";

/* ── data ────────────────────────────────────────────────────────────────── */
type Leader = { nom: string; role: string; location: string; orga: string; description: string; photo: string; href: string };

const LEADERS: Leader[] = [
  {
    nom:         "Cadia Fernandes",
    role:        "CA Guinée-Bissau",
    orga:        "KAFO",
    location:    "Guinée-Bissau",
    description: "Représentante de KAFO au Conseil d'Administration, elle défend la vision NSS en Guinée-Bissau pour la souveraineté alimentaire des femmes rurales.",
    photo:       "https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg",
    href:        "/fr/mouvement/leaders",
  },
  {
    nom:         "Catherine Soulama",
    role:        "CA Burkina Faso",
    orga:        "FENOP",
    location:    "Burkina Faso",
    description: "Déléguée de la FENOP, elle coordonne les actions du mouvement au Burkina Faso et incarne l'engagement collectif des femmes rurales burkinabè.",
    photo:       "https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg",
    href:        "/fr/mouvement/leaders",
  },
  {
    nom:         "Fanta Diamoutène",
    role:        "CA Mali",
    orga:        "AOPP",
    location:    "Mali",
    description: "Membre active de l'AOPP, elle mobilise les organisations paysannes maliennes autour des valeurs fondatrices de NSS et de la souveraineté alimentaire.",
    photo:       "https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg",
    href:        "/fr/mouvement/leaders",
  },
  {
    nom:         "Fatou B. Diop",
    role:        "CA Sénégal",
    orga:        "UGPM",
    location:    "Sénégal",
    description: "Porte-voix de l'UGPM, elle contribue à l'expansion du réseau NSS et à la promotion des droits des productrices rurales du Sénégal.",
    photo:       "https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg",
    href:        "/fr/mouvement/leaders",
  },
];

/* ── card ────────────────────────────────────────────────────────────────── */
function LeaderCard({ l }: { l: Leader }) {
  return (
    <article className="lg-card">
      {/* Image + overlay */}
      <div className="lg-img">
        <Image
          src={l.photo}
          alt={l.nom}
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="lg-grad" aria-hidden="true" />
        <div className="lg-overlay">
          <p className="lg-name">{l.nom}</p>
          <p className="lg-role">{l.role}&nbsp;·&nbsp;{l.orga}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="lg-foot">
        <p className="lg-desc">{l.description}</p>
        <Link href={l.href} className="lg-cta">En savoir plus →</Link>
      </div>
    </article>
  );
}

/* ── main ────────────────────────────────────────────────────────────────── */
export default function LeadershipGridRedesign() {
  return (
    <section className="lg-section" aria-labelledby="lg-heading">
      <div className="lg-wrap">

        {/* Header */}
        <header className="lg-header">
          <p className="lg-eyebrow">
            <span className="lg-eline" aria-hidden="true" />
            Témoignages &amp; Leadership
            <span className="lg-eline" aria-hidden="true" />
          </p>
          <h2 id="lg-heading" className="lg-h2">Les voix qui portent le mouvement.</h2>
          <p className="lg-sub">175&nbsp;000 membres · 12 pays · 500+ associations de femmes rurales</p>
        </header>

        {/* Grid */}
        <div className="lg-grid">
          {LEADERS.map(l => <LeaderCard key={l.nom} l={l} />)}
        </div>

      </div>

      <style suppressHydrationWarning>{`
        /* ── Section ──────────────────────────────────────────── */
        .lg-section { background: #ffffff; }
        .lg-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 96px 48px;
        }

        /* ── Header ───────────────────────────────────────────── */
        .lg-header { text-align: center; margin-bottom: 52px; }
        .lg-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 14px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif; font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 3px;
          color: ${GREEN_LT}; margin: 0 0 16px;
        }
        .lg-eline { display: block; width: 28px; height: 1px; background: ${GREEN_LT}; flex-shrink: 0; }
        .lg-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 500; color: #2A2A2A; margin: 0 0 14px; line-height: 1.2;
          letter-spacing: -0.015em;
        }
        .lg-sub {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif; font-size: 13px;
          color: #7a7a7a; margin: 0; letter-spacing: .4px;
        }

        /* ── Grid ─────────────────────────────────────────────── */
        .lg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Card ─────────────────────────────────────────────── */
        .lg-card {
          width: 100%;
          min-width: 0;
          border: 2px solid ${BORDER};
          border-radius: 4px;
          overflow: hidden;
          background: #F9F8F5;
          box-shadow: 0 4px 16px rgba(4,86,39,.12);
          transition: transform .25s ease, box-shadow .25s ease;
          display: flex;
          flex-direction: column;
        }
        .lg-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(4,86,39,.20);
        }

        /* Image area */
        .lg-img {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          flex-shrink: 0;
        }
        .lg-card:hover .lg-img > img { transform: scale(1.04); }
        .lg-img > img { transition: transform .6s ease !important; }

        /* Gradient */
        .lg-grad {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,12,8,.86) 0%,
            rgba(4,12,8,.42) 38%,
            transparent 66%
          );
          pointer-events: none;
        }

        /* Name + role overlay */
        .lg-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 18px 16px 14px;
        }
        .lg-name {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 22px; font-weight: 400;
          color: #ffffff; margin: 0 0 8px; line-height: 1.1;
          word-break: break-word;
          hyphens: auto;
        }
        .lg-role {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.10em;
          color: ${GOLD}; margin: 0;
          white-space: nowrap;
        }

        /* Footer */
        .lg-foot {
          padding: 32px;
          display: flex; flex-direction: column; gap: 12px;
          flex: 1;
        }
        .lg-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px; line-height: 1.78;
          color: #000000; margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: justify;
          hyphens: auto;
          min-height: 60px;
        }
        .lg-cta {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.8px;
          color: ${GREEN_LT}; text-decoration: none;
          transition: color .2s; width: fit-content;
          margin-top: auto;
        }
        .lg-cta:hover { color: ${BORDER}; }

        /* ── Responsive ───────────────────────────────────────── */
        @media (max-width: 1440px) {
          .lg-wrap { max-width: 1200px; }
          .lg-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; }
        }
        @media (max-width: 1024px) {
          .lg-wrap { max-width: 900px; padding: 96px 40px; }
          .lg-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 768px) {
          .lg-wrap { max-width: 100%; padding: 96px 32px; }
          .lg-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}
