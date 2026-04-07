import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section style={{ background: "#ffffff", overflow: "hidden" }}>
      {/* Le padding vertical est sur le conteneur — les deux colonnes démarrent au même niveau */}
      <div
        className="about-outer"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "80px var(--container-pad)",
        }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            gap: "64px",
          }}
        >
          {/* ── Colonne gauche ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Label "À PROPOS" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "28px",
                  height: "1px",
                  background: "rgba(29,122,82,0.35)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2.5px",
                  color: "var(--green-600)",
                  whiteSpace: "nowrap",
                }}
              >
                À propos
              </span>
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "28px",
                  height: "1px",
                  background: "rgba(29,122,82,0.35)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Titre — forcé sur deux lignes */}
            <h2
              style={{
                fontSize: "clamp(24px, 2.6vw, 36px)",
                lineHeight: 1.18,
                marginBottom: "32px",
                color: "var(--text-primary)",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontFamily: "var(--font-display)",
                }}
              >
                Mouvement de femmes rurales pour la souveraineté alimentaire.
              </strong>
            </h2>

            {/* Paragraphe 1 */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "var(--text-body)",
                marginBottom: "20px",
              }}
            >
              Créé en tant qu&apos;expression des droits des femmes au sein d&apos;une
              campagne globale pour la souveraineté alimentaire menée par les
              mouvements paysans du continent, NSS s&apos;est imposé sur le champ des
              alternatives paysannes durables, économiquement rentables,
              socialement et écologiquement viables.
            </p>

            {/* Paragraphe 2 */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "var(--text-body)",
                marginBottom: "40px",
              }}
            >
              Plus de 500 Associations de Femmes Rurales (AFR) y ont adhéré
              depuis lors et le mouvement compte 175&nbsp;000 membres et
              sympathisants à travers l&apos;Afrique de l&apos;Ouest.
            </p>

            {/* Bouton */}
            <div>
              <Link href="/fr/mouvement" className="about-btn">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* ── Colonne droite — Image pleine hauteur ── */}
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              minHeight: "420px",
            }}
          >
            <Image
              src="/images/galerie/leader-2.jpg"
              alt="Femme du mouvement Nous Sommes la Solution"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-btn {
          display: inline-block;
          background: var(--green-600);
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 13px 30px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .about-btn:hover {
          background: var(--green-700);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .about-outer {
            padding: 60px 24px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-grid > div:last-child {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
