import Image from "next/image";
import Link from "next/link";

const ORGS = [
  { src: "/images/Associations/UGPM.webp",                                   alt: "UGPM",         pays: "Sénégal",        fondatrice: true  },
  { src: "/images/Associations/FENOP.webp",                                  alt: "FENOP",        pays: "Burkina Faso",   fondatrice: true  },
  { src: "/images/Associations/AGUISSA.webp",                                alt: "AGUISSA",      pays: "Niger",          fondatrice: true  },
  { src: "/images/Associations/KAFO.webp",                                   alt: "KAFO",         pays: "Gambie",         fondatrice: true  },
  { src: "/images/Associations/AJAC-1536x1044-1-768x522.webp",               alt: "AJAC",         pays: "Guinée-Bissau",  fondatrice: true  },
  { src: "/images/Associations/AMASSA-e1723163900160.webp",                   alt: "AMASSA",       pays: "Mali",           fondatrice: false },
  { src: "/images/Associations/CAFO.webp",                                   alt: "CAFO",         pays: "Mali",           fondatrice: false },
  { src: "/images/Associations/ABOFAM-768x723.webp",                         alt: "ABOFAM",       pays: "Bénin",          fondatrice: false },
  { src: "/images/Associations/AGAFAM.webp",                                 alt: "AGAFAM",       pays: "Guinée",         fondatrice: false },
  { src: "/images/Associations/AOOP.webp",                                   alt: "AOOP",         pays: "Bénin",          fondatrice: false },
  { src: "/images/Associations/RUWFAG-768x768.webp",                         alt: "RUWFAG",       pays: "Ghana",          fondatrice: false },
  { src: "/images/Associations/RESACIFROAT.webp",                            alt: "RESACIFROAT",  pays: "Réseau régional",fondatrice: false },
  { src: "/images/Associations/CATALUNYA-1.webp",                            alt: "CATALUNYA",    pays: "Catalogne",      fondatrice: false },
  { src: "/images/Associations/547437753_4181170195485869_2155655902466265095_n.jpg", alt: "NSS", pays: "Afrique de l'Ouest", fondatrice: false },
];

const COUNTERS = [
  { value: "12", suffix: "+", label: "Organisations" },
  { value: "5",  suffix: "",  label: "Pays fondateurs" },
  { value: "175", suffix: "k", label: "Membres" },
];

export default function AboutOrganisations() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "72px 48px",
      }}>

        {/* ── En-tête centré ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "#2D6A4F" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "#2D6A4F" }}>
              Le Réseau
            </span>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "#2D6A4F" }} />
          </div>

          {/* Titre */}
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(21px, 3vw, 36px)",
            fontWeight: 400, lineHeight: 1.18,
            color: "#071A10", marginBottom: "12px",
          }}>
            Nos organisations{" "}
            <em style={{ fontStyle: "italic", color: "#52B788" }}>membres.</em>
          </h2>

          {/* Sous-titre */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "14px",
            color: "#5A7A65", marginBottom: "32px",
          }}>
            14 pays · 5 organisations fondatrices · 500+ associations affiliées
          </p>

          {/* Compteurs */}
          <div style={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            {COUNTERS.map(({ value, suffix, label }, i) => (
              <div key={label} style={{
                padding: "20px 40px",
                textAlign: "center",
                borderRight: i < COUNTERS.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px", fontWeight: 400,
                  color: "#071A10", lineHeight: 1, marginBottom: "4px",
                }}>
                  {value}<span style={{ color: "#52B788" }}>{suffix}</span>
                </div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: "10px",
                  textTransform: "uppercase", letterSpacing: "1.5px",
                  color: "#5A7A65",
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grille logos ── */}
        <div className="org-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "16px",
          marginBottom: "48px",
        }}>
          {ORGS.map(({ src, alt, pays, fondatrice }) => (
            <div key={alt} className="org-card" style={{
              position: "relative",
              background: "#ffffff",
              border: "1.5px solid rgba(0,0,0,0.08)",
              borderRadius: "12px",
              aspectRatio: "4/3",
              overflow: "hidden",
              transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.35s",
              cursor: "default",
            }}>

              {/* Badge fondatrice/membre */}
              <span className="org-badge" style={{
                position: "absolute", top: "8px", right: "8px", zIndex: 2,
                background: "rgba(82,183,136,0.1)",
                color: "#2D6A4F",
                fontFamily: "var(--font-body)",
                fontSize: "8px", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.08em",
                padding: "3px 7px", borderRadius: "20px",
                opacity: 0,
                transition: "opacity 0.35s cubic-bezier(0.23,1,0.32,1)",
              }}>
                {fondatrice ? "Fondatrice" : "Membre"}
              </span>

              {/* Logo */}
              <div className="org-logo" style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "16px",
                transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}>
                <Image
                  src={src}
                  alt={alt}
                  width={120}
                  height={72}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>

              {/* Overlay infos au hover */}
              <div className="org-overlay" style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(7,26,16,0.85) 0%, transparent 100%)",
                padding: "24px 10px 10px",
                opacity: 0,
                transition: "opacity 0.35s cubic-bezier(0.23,1,0.32,1)",
              }}>
                <p className="org-name" style={{
                  fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700,
                  color: "#ffffff", margin: "0 0 2px",
                  transform: "translateY(4px)",
                  transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
                }}>
                  {alt}
                </p>
                <p className="org-pays" style={{
                  fontFamily: "var(--font-body)", fontSize: "10px",
                  color: "rgba(255,255,255,0.65)", margin: 0,
                  transform: "translateY(4px)",
                  transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1) 50ms",
                  opacity: 0,
                  transitionProperty: "transform, opacity",
                }}>
                  {pays}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bouton ── */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/fr/mouvement/associations"
            className="org-btn"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500,
              color: "#071A10", textDecoration: "none",
              border: "1.5px solid #071A10",
              borderRadius: "40px",
              padding: "14px 32px",
              transition: "background 0.25s ease, color 0.25s ease, transform 0.25s ease",
            }}
          >
            Voir toutes les organisations <span className="org-btn-arrow">→</span>
          </Link>
        </div>
      </div>

      <style>{`
        .org-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(82,183,136,0.45) !important;
          box-shadow: 0 12px 32px rgba(13,43,26,0.1) !important;
        }
        .org-card:hover .org-badge   { opacity: 1 !important; }
        .org-card:hover .org-logo    { transform: scale(1.08) !important; }
        .org-card:hover .org-overlay { opacity: 1 !important; }
        .org-card:hover .org-name    { transform: translateY(0) !important; }
        .org-card:hover .org-pays    { transform: translateY(0) !important; opacity: 1 !important; }

        .org-btn:hover {
          background: #071A10 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
        }
        .org-btn:hover .org-btn-arrow { display: inline-block; transform: translateX(4px); transition: transform 0.2s ease; }

        @media (max-width: 1024px) { .org-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 768px)  { .org-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px)  { .org-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
