import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, Home, Users, Calendar, MapPin, Clock,
  RefreshCw, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos programmes — Mouvement NSS",
  description:
    "Découvrez les 3 programmes du mouvement NSS : CIFAP, FIARA et Rencontre Annuelle — pour former, rassembler et transformer les communautés rurales d'Afrique de l'Ouest.",
};

/* ── Types ─────────────────────────────────────────────────────────────── */

interface BadgeProps {
  icon: React.ReactNode;
  label: string;
  variant: "date" | "lieu" | "freq" | "part";
}

interface ContentBadgeProps {
  icon: React.ReactNode;
  label: string;
  variant: "cb-date" | "cb-lieu" | "cb-duree" | "cb-part" | "cb-freq";
}

/* ── Badge visuel ───────────────────────────────────────────────────────── */

function VisualBadge({ icon, label, variant }: BadgeProps) {
  const styles: Record<BadgeProps["variant"], React.CSSProperties> = {
    date: { background: "rgba(26,107,60,0.6)",    border: "1px solid rgba(76,175,80,0.4)" },
    lieu: { background: "rgba(15,43,26,0.6)",     border: "1px solid rgba(90,158,114,0.4)" },
    freq: { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" },
    part: { background: "rgba(76,175,80,0.25)",   border: "1px solid rgba(76,175,80,0.4)" },
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.2)", ...styles[variant] }}>
      {icon}{label}
    </span>
  );
}

/* ── Badge contenu ──────────────────────────────────────────────────────── */

function ContentBadge({ icon, label, variant }: ContentBadgeProps) {
  const styles: Record<ContentBadgeProps["variant"], React.CSSProperties> = {
    "cb-date":  { background: "#eaf3ee", color: "#1a6b3c" },
    "cb-lieu":  { background: "#e8f0f8", color: "#1a4a8a" },
    "cb-duree": { background: "#fdf3e3", color: "#8a5a00" },
    "cb-part":  { background: "#f3eaf8", color: "#5a1a8a" },
    "cb-freq":  { background: "#f5f5f5", color: "#444" },
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, ...styles[variant] }}>
      {icon}{label}
    </span>
  );
}

/* ── Données programmes ─────────────────────────────────────────────────── */

const PROGRAMMES = [
  {
    id: "cifap",
    visualBg: "#1a4a2a",
    number: "01",
    visualIcon: <BookOpen size={20} color="#fff" strokeWidth={1.8} />,
    visualTitle: "CIFAP",
    visualSubtitle: "Camp International de Formation\nen Agroécologie Paysanne",
    visualBadges: [
      { icon: <Calendar size={12} color="#fff" strokeWidth={2} />, label: "Sept. 2025",         variant: "date" as const },
      { icon: <MapPin    size={12} color="#fff" strokeWidth={2} />, label: "Niaguis, Sénégal",  variant: "lieu" as const },
      { icon: <RefreshCw size={12} color="#fff" strokeWidth={2} />, label: "Annuel",            variant: "freq" as const },
      { icon: <Users     size={12} color="#fff" strokeWidth={2} />, label: "400+ participantes",variant: "part" as const },
    ],
    tag: "Programme de formation",
    contentTitle: "Une semaine pour former les leaders paysannes de demain",
    contentBadges: [
      { icon: <Calendar  size={11} color="#1a6b3c" strokeWidth={2} />, label: "14 – 21 sept. 2025",  variant: "cb-date"  as const },
      { icon: <MapPin    size={11} color="#1a4a8a" strokeWidth={2} />, label: "Niaguis, Sénégal",    variant: "cb-lieu"  as const },
      { icon: <Clock     size={11} color="#8a5a00" strokeWidth={2} />, label: "7 jours",             variant: "cb-duree" as const },
      { icon: <Users     size={11} color="#5a1a8a" strokeWidth={2} />, label: "400+ participantes",  variant: "cb-part"  as const },
      { icon: <RefreshCw size={11} color="#444"    strokeWidth={2} />, label: "Annuel",              variant: "cb-freq"  as const },
    ],
    description: "Le CIFAP réunit chaque année des femmes rurales de toute l'Afrique de l'Ouest pour une formation intensive en agroécologie paysanne. Techniques durables, semences locales et leadership sont au cœur de ce camp de référence.",
    points: [
      "Formation pratique en champ école paysan",
      "Échanges de savoirs entre femmes de 14 pays",
      "Conservation et multiplication des semences locales",
    ],
    href: "/programmes/cifap",
    visualLeft: true,
  },
  {
    id: "fiara",
    visualBg: "#1a2a4a",
    number: "02",
    visualIcon: <Home size={20} color="#fff" strokeWidth={1.8} />,
    visualTitle: "FIARA",
    visualSubtitle: "Foire Internationale de l'Agriculture\net des Ressources Animales",
    visualBadges: [
      { icon: <Calendar size={12} color="#fff" strokeWidth={2} />, label: "Fév. – Mars",        variant: "date" as const },
      { icon: <MapPin    size={12} color="#fff" strokeWidth={2} />, label: "Dakar, Sénégal",    variant: "lieu" as const },
      { icon: <RefreshCw size={12} color="#fff" strokeWidth={2} />, label: "Bisannuel",         variant: "freq" as const },
      { icon: <Users     size={12} color="#fff" strokeWidth={2} />, label: "500+ exposantes",   variant: "part" as const },
    ],
    tag: "Visibilité & marchés",
    contentTitle: "Donner aux femmes paysannes une scène continentale",
    contentBadges: [
      { icon: <Calendar  size={11} color="#1a6b3c" strokeWidth={2} />, label: "Fév. – Mars 2026",     variant: "cb-date"  as const },
      { icon: <MapPin    size={11} color="#1a4a8a" strokeWidth={2} />, label: "CICES, Dakar",          variant: "cb-lieu"  as const },
      { icon: <Clock     size={11} color="#8a5a00" strokeWidth={2} />, label: "10 jours",              variant: "cb-duree" as const },
      { icon: <Users     size={11} color="#5a1a8a" strokeWidth={2} />, label: "500+ exposantes NSS",   variant: "cb-part"  as const },
      { icon: <RefreshCw size={11} color="#444"    strokeWidth={2} />, label: "Bisannuel",             variant: "cb-freq"  as const },
    ],
    description: "La FIARA est l'occasion pour les femmes du réseau NSS de valoriser leurs productions locales, leurs savoir-faire agroécologiques et leurs innovations devant un public de professionnels, d'institutions et de partenaires internationaux.",
    points: [
      "Exposition et vente de productions locales",
      "Valorisation des pratiques agroécologiques",
      "Rencontres avec partenaires et acheteurs",
    ],
    href: "/programmes/fiara",
    visualLeft: false,
  },
  {
    id: "rencontre",
    visualBg: "#3a1a0a",
    number: "03",
    visualIcon: <Users size={20} color="#fff" strokeWidth={1.8} />,
    visualTitle: "Rencontre\nAnnuelle",
    visualSubtitle: "Le grand rassemblement\ndu mouvement NSS",
    visualBadges: [
      { icon: <Calendar size={12} color="#fff" strokeWidth={2} />, label: "Oct. – Nov.",        variant: "date" as const },
      { icon: <MapPin    size={12} color="#fff" strokeWidth={2} />, label: "Lieu tournant",     variant: "lieu" as const },
      { icon: <RefreshCw size={12} color="#fff" strokeWidth={2} />, label: "Annuel",            variant: "freq" as const },
      { icon: <Users     size={12} color="#fff" strokeWidth={2} />, label: "14 pays",           variant: "part" as const },
    ],
    tag: "Cohésion du mouvement",
    contentTitle: "Se retrouver, décider et avancer ensemble",
    contentBadges: [
      { icon: <Calendar  size={11} color="#1a6b3c" strokeWidth={2} />, label: "Oct. – Nov. 2025",   variant: "cb-date"  as const },
      { icon: <MapPin    size={11} color="#1a4a8a" strokeWidth={2} />, label: "Lieu tournant AOC",   variant: "cb-lieu"  as const },
      { icon: <Clock     size={11} color="#8a5a00" strokeWidth={2} />, label: "3 jours",             variant: "cb-duree" as const },
      { icon: <Users     size={11} color="#5a1a8a" strokeWidth={2} />, label: "14 délégations",      variant: "cb-part"  as const },
      { icon: <RefreshCw size={11} color="#444"    strokeWidth={2} />, label: "Annuel",              variant: "cb-freq"  as const },
    ],
    description: "La Rencontre Annuelle est le moment de convergence de tout le réseau — coordinatrices nationales et leaders associatives se réunissent pour faire le bilan, partager les avancées et définir ensemble les orientations stratégiques.",
    points: [
      "Bilan annuel des 14 coordinations nationales",
      "Définition des priorités stratégiques communes",
      "Renforcement de la solidarité inter-pays",
    ],
    href: "/programmes/rencontre-annuelle",
    visualLeft: true,
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ProgrammesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* ══ SECTION 1 — HERO ══════════════════════════════════════════════ */}
      <section style={{ background: "#0f2b1a", padding: "56px 80px 48px", position: "relative", overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif" }}>

        {/* Cercles décoratifs */}
        <div aria-hidden="true" style={{ position: "absolute", right: "80px", top: "40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(26,107,60,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "130px", height: "130px", borderRadius: "50%", background: "rgba(26,107,60,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "rgba(76,175,80,0.22)" }} />
          </div>
        </div>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#2d6b3e", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#5a9e72", letterSpacing: "0.1em" }}>Nos programmes</span>
          <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#2d6b3e", flexShrink: 0 }} />
        </div>

        {/* Titre */}
        <h1 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#e8f5eb", lineHeight: 1.15, marginBottom: "14px", maxWidth: "600px" }}>
          Former, rassembler,{" "}
          <span style={{ color: "#4caf50" }}>transformer.</span>
        </h1>

        {/* Sous-titre */}
        <p style={{ fontSize: "15px", color: "#7aab8a", lineHeight: 1.65, maxWidth: "480px", marginBottom: "32px" }}>
          3 programmes complémentaires pour renforcer les capacités des femmes paysannes, créer des espaces d'échange et bâtir un mouvement durable en Afrique de l'Ouest.
        </p>

        {/* Stats */}
        <div className="prog-stats" style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
          {[
            { value: "3",       label: "Programmes actifs" },
            { value: "14",      label: "Pays couverts" },
            { value: "175 000", label: "Femmes membres" },
            { value: "14 ans",  label: "D'expérience terrain" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontSize: "24px", fontWeight: 800, color: "#e8f5eb", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: "11px", color: "#5a9e72", marginTop: "3px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 2 — GRILLE DES PROGRAMMES ════════════════════════════ */}
      <section style={{ background: "#f7f8f6", padding: "48px 80px", display: "flex", flexDirection: "column", gap: "24px", fontFamily: "Inter, system-ui, sans-serif" }} className="prog-grid-section">
        {PROGRAMMES.map((prog) => (
          <div key={prog.id} className="prog-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: "14px", overflow: "hidden", border: "0.5px solid #dde8de" }}>

            {/* Zone visuelle */}
            <div
              className={prog.visualLeft ? "prog-visual" : "prog-visual prog-visual-right"}
              style={{ background: prog.visualBg, minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px", position: "relative", overflow: "hidden", order: prog.visualLeft ? 0 : 1 }}
            >
              {/* Numéro décoratif */}
              <span aria-hidden="true" style={{ position: "absolute", top: "20px", left: "24px", fontSize: "64px", fontWeight: 900, color: "rgba(255,255,255,0.08)", lineHeight: 1, userSelect: "none" }}>
                {prog.number}
              </span>

              {/* Icône */}
              <div style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.12)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                {prog.visualIcon}
              </div>

              {/* Titre visuel */}
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#fff", lineHeight: 1.15, whiteSpace: "pre-line" }}>{prog.visualTitle}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "4px", lineHeight: 1.4, whiteSpace: "pre-line", marginBottom: "14px" }}>{prog.visualSubtitle}</div>

              {/* Badges visuels */}
              <div className="prog-badges-wrap" style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {prog.visualBadges.map((b) => (
                  <VisualBadge key={b.label} icon={b.icon} label={b.label} variant={b.variant} />
                ))}
              </div>
            </div>

            {/* Zone contenu */}
            <div
              style={{ background: "#fff", padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", order: prog.visualLeft ? 1 : 0 }}
              className="prog-content"
            >
              {/* Tag */}
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#1a6b3c", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>
                {prog.tag}
              </div>

              {/* Titre */}
              <h2 style={{ fontSize: "19px", fontWeight: 800, color: "#0f2b1a", lineHeight: 1.3, marginBottom: "10px" }}>
                {prog.contentTitle}
              </h2>

              {/* Badges contenu */}
              <div className="prog-badges-wrap" style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "18px" }}>
                {prog.contentBadges.map((b) => (
                  <ContentBadge key={b.label} icon={b.icon} label={b.label} variant={b.variant} />
                ))}
              </div>

              {/* Description */}
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.72, marginBottom: "18px" }}>
                {prog.description}
              </p>

              {/* Points clés */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {prog.points.map((pt) => (
                  <div key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#333" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1a6b3c", flexShrink: 0, marginTop: "5px" }} />
                    {pt}
                  </div>
                ))}
              </div>

              {/* Lien */}
              <Link
                href={`/${locale}${prog.href}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#1a6b3c", textDecoration: "none", marginTop: "4px" }}
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ══ SECTION 3 — CTA FINAL ═════════════════════════════════════════ */}
      <section style={{ background: "#0f2b1a", padding: "56px 80px", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#e8f5eb", maxWidth: "480px", margin: "0 auto", lineHeight: 1.2 }}>
          Participez au prochain programme NSS.
        </h2>
        <p style={{ fontSize: "14px", color: "#7aab8a", marginTop: "12px", maxWidth: "420px", margin: "12px auto 0", lineHeight: 1.6 }}>
          Rejoignez le réseau, candidatez au CIFAP ou retrouvez-nous à la prochaine Rencontre Annuelle.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
          <Link
            href={`/${locale}/agir/rejoindre`}
            style={{ background: "#1a6b3c", color: "#fff", fontSize: "14px", fontWeight: 700, padding: "11px 24px", borderRadius: "8px", textDecoration: "none", display: "inline-block" }}
          >
            Nous rejoindre
          </Link>
          <Link
            href={`/${locale}/contact`}
            style={{ background: "transparent", color: "#e8f5eb", fontSize: "14px", fontWeight: 600, padding: "11px 24px", borderRadius: "8px", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.25)", display: "inline-block" }}
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* ══ RESPONSIVE ════════════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 768px) {
          .prog-grid-section { padding: 24px 20px !important; }
          .prog-card { grid-template-columns: 1fr !important; }
          .prog-visual, .prog-visual-right { order: 0 !important; min-height: 240px !important; }
          .prog-content { order: 1 !important; padding: 24px 20px !important; }
          section:first-of-type { padding: 40px 20px 32px !important; }
          section:last-of-type  { padding: 40px 20px !important; }
        }
        @media (max-width: 480px) {
          .prog-badges-wrap { flex-wrap: nowrap !important; overflow-x: auto !important; padding-bottom: 4px; }
          h1 { font-size: 28px !important; }
          .prog-stats { gap: 20px !important; }
        }
      `}</style>
    </>
  );
}
