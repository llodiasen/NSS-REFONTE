import Link from "next/link";
import Image from "next/image";

/* ─── Types ─────────────────────────────────────────────── */
interface Evenement {
  id: string;
  titre: string;
  description: string;
  type: "Formation" | "Rencontre" | "Atelier";
  statut: "avenir" | "passe";
  date: string;
  lieu: string;
  tags: string[];
  href: string;
  image: string;
}

/* ─── Données — 1 à venir + 2 passés ────────────────────── */
const EVENEMENTS: Evenement[] = [
  {
    id: "e1",
    titre: "Camp international de formation sur l'Agroécologie Paysanne",
    description: "Formation dans les fermes agricoles de base pour protéger les systèmes de production agroécologiques.",
    type: "Formation",
    statut: "avenir",
    date: "14–21 juin 2025",
    lieu: "Dakar, Sénégal",
    tags: ["5 pays", "Souveraineté familiale", "1 semaine"],
    href: "/fr/programmes/cifap",
    image: "/images/actualites/cifap-2024.jpg",
  },
  {
    id: "e4",
    titre: "Voix des femmes rurales — santé, alimentation et droits",
    description: "Donner des outils de communication et de plaidoyer aux femmes rurales sur l'alimentation et la santé.",
    type: "Atelier",
    statut: "passe",
    date: "18 oct. 2024",
    lieu: "Abidjan, Côte d'Ivoire",
    tags: ["Droits", "Santé", "1 journée"],
    href: "/fr/evenements",
    image: "/images/galerie/leader-1.jpg",
  },
  {
    id: "e5",
    titre: "Semences paysannes et biodiversité agricole en Afrique de l'Ouest",
    description: "Préserver et valoriser les semences paysannes comme patrimoine collectif et levier de souveraineté alimentaire.",
    type: "Formation",
    statut: "passe",
    date: "5 mars 2024",
    lieu: "Conakry, Guinée",
    tags: ["Semences", "Biodiversité", "2 jours"],
    href: "/fr/evenements",
    image: "/images/galerie/formation-1.jpg",
  },
];

/* ─── Badge type ─────────────────────────────────────────── */
const TYPE_STYLE: Record<string, { bg: string; color: string }> = {
  Formation: { bg: "#EAF3DE", color: "#27500A" },
  Rencontre: { bg: "#D6EEF2", color: "#0E4C58" },
  Atelier:   { bg: "#F3EAF8", color: "#5A2D7A" },
};

/* ─── Icônes SVG ─────────────────────────────────────────── */
function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconPin({ color }: { color: string }) {
  return (
    <svg width="10" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

/* ─── Carte ──────────────────────────────────────────────── */
function CarteEvenement({ ev }: { ev: Evenement }) {
  const avenir    = ev.statut === "avenir";
  const imgBg     = avenir ? "#C0DD97" : "#D3D1C7";
  const dateColor = avenir ? "#1D9E75" : "#888780";
  const tagBg     = avenir ? "#EAF3DE" : "#EEEDE9";
  const tagColor  = avenir ? "#27500A" : "#3a3a36";
  const typeSt    = TYPE_STYLE[ev.type] ?? { bg: "#f0f0f0", color: "#444" };

  return (
    <div
      className="evt-card"
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        border: "0.5px solid rgba(0,0,0,0.10)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        opacity: avenir ? 1 : 0.78,
      }}
    >
      {/* Image */}
      <div style={{ height: "180px", background: imgBg, position: "relative", flexShrink: 0, overflow: "hidden" }}>
        <Image
          src={ev.image}
          alt={ev.titre}
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: avenir ? 1 : 0.85 }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Badge type */}
        <span style={{ position: "absolute", top: "12px", left: "12px", background: typeSt.bg, color: typeSt.color, fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px" }}>
          {ev.type}
        </span>
        {/* Badge statut */}
        <span style={{ position: "absolute", top: "12px", right: "12px", background: avenir ? "#D6F5EB" : "#EEEDE9", color: avenir ? "#0E6E4A" : "#888780", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px" }}>
          {avenir ? "À venir" : "Passé"}
        </span>
      </div>

      {/* Corps */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1, gap: "10px" }}>

        {/* Date + lieu */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: dateColor }}>
            <IconCalendar color={dateColor} />{ev.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-body)", fontSize: "12px", color: "#4a4a45" }}>
            <IconPin color="#4a4a45" />{ev.lieu}
          </span>
        </div>

        {/* Titre */}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 400, lineHeight: 1.3, color: "var(--text-primary)", margin: 0 }}>
          {ev.titre}
        </h3>

        {/* Description */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-primary)", margin: 0, textAlign: "justify" }}>
          {ev.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {ev.tags.map((tag) => (
            <span key={tag} style={{ background: tagBg, color: tagColor, fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "20px" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton */}
        <div style={{ marginTop: "auto", paddingTop: "12px" }}>
          <Link
            href={ev.href}
            className="evt-btn"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              padding: "8px 18px",
              borderRadius: "6px",
              textDecoration: "none",
              background: "transparent",
              color: avenir ? "#3b6d11" : "#888780",
              border: avenir ? "none" : "0.5px solid #D3D1C7",
            }}
          >
            {avenir ? "S'inscrire" : "Voir le compte-rendu"}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Section principale ─────────────────────────────────── */
export default function ActionsSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 20px",
        }}
      >
        {/* ── Titre ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "18px" }}>
            <div style={{ width: "40px", height: "1px", background: "#1D9E75" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1D9E75" }}>
              Nos événements
            </span>
            <div style={{ width: "40px", height: "1px", background: "#1D9E75" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(21px, 3vw, 34px)", fontWeight: 400, fontStyle: "normal", color: "var(--text-primary)", lineHeight: 1.18, margin: "0 0 16px" }}>
            Se rencontrer, se former, agir ensemble.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.65, color: "var(--text-primary)", maxWidth: "580px", margin: "0 auto" }}>
            Formations, ateliers et rencontres portés par le réseau NSS pour renforcer les femmes rurales à travers l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* ── Grille 3 cartes ── */}
        <div className="evt-grid">
          {EVENEMENTS.map((ev) => <CarteEvenement key={ev.id} ev={ev} />)}
        </div>

        {/* ── Bouton bas ── */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/fr/evenements"
            className="evt-voir-btn"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              color: "#ffffff",
              background: "#0f2b1a",
              border: "none",
              borderRadius: "6px",
              padding: "10px 24px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Voir tous les événements →
          </Link>
        </div>
      </div>

      <style>{`
        .evt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .evt-voir-btn:hover { background: #163820 !important; }
        .evt-btn:hover { opacity: 0.85; }
        @media (max-width: 1024px) { .evt-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .evt-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
