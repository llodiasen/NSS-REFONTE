import Link from "next/link";

interface MissionProps {
  locale: string;
}

export default function Mission({ locale }: MissionProps) {
  return (
    <section style={{ background: "#fff" }} className="mission-section">

      {/* ── Zone haute — 2 colonnes ── */}
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "96px 32px 80px" }}
        className="mission-top"
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
          className="mission-grid"
        >
          {/* Col gauche — H2 */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#1A1A18",
                margin: 0,
              }}
            >
              Mouvement de femmes rurales africaines pour la{" "}
              <span style={{ color: "#1D9E75" }}>souveraineté alimentaire.</span>
            </h2>
          </div>

          {/* Col droite — texte + lien */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#1A1A18",
                textAlign: "justify",
                hyphens: "auto",
                margin: "0 0 24px",
              }}
              lang="fr"
            >
              Créée en 2017, NSS fédère les organisations de femmes rurales dans 14 pays africains.
              Ensemble, elles défendent une agriculture familiale durable et souveraine — et agissent
              chaque jour pour transformer les systèmes alimentaires du continent.
              <br /><br />
              Nous Sommes la Solution œuvre pour une Afrique où, dans la solidarité, les femmes rurales,
              impliquées dans la prise de décision, cultivent, transforment, vendent et consomment les
              produits de l&apos;agriculture familiale tout en préservant l&apos;environnement pour un
              développement harmonieux et durable.
            </p>
            <Link
              href={`/${locale}/mouvement`}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#1D9E75",
                textDecoration: "none",
                borderBottom: "1.5px solid #1D9E75",
                paddingBottom: "2px",
                transition: "opacity 0.2s ease",
              }}
              className="mission-link"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .mission-link:hover { opacity: 0.75; }
        @media (max-width: 900px) {
          .mission-top  { padding: 64px 24px 40px !important; }
          .mission-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
