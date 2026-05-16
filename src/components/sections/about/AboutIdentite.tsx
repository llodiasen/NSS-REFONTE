export default function AboutIdentite() {
  return (
    <section style={{ background: "var(--green-50)" }}>
      <div
        className="identite-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* ── Colonne gauche ── */}
        <div>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
            <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
              Notre identité
            </span>
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
              fontSize: "34px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--text-primary)",
              marginBottom: "40px",
            }}
          >
            Un mouvement de femmes, pour les femmes.
          </h2>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { number: "70%", label: "Des productrices alimentaires d'Afrique de l'Ouest sont des femmes" },
              { number: "14",  label: "Pays membres du réseau NSS en Afrique" },
            ].map(({ number, label }, i) => (
              <div
                key={number}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "22px 0",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "var(--green-600)",
                    lineHeight: 1,
                    minWidth: "80px",
                    flexShrink: 0,
                  }}
                >
                  {number}
                </span>
                <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "13px", fontWeight: 400, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Colonne droite ── */}
        <div>
          <p
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--text-body)",
              marginBottom: "24px",
              textAlign: "justify",
            }}
          >
            NSS est avant tout un mouvement d&apos;agricultrices. Ses membres sont
            des femmes rurales qui produisent, transforment et commercialisent
            des denrées alimentaires dans des conditions difficiles — sans accès
            à la terre, sans financement, sans représentation dans les instances
            de décision agricole.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--text-body)",
              textAlign: "justify",
            }}
          >
            En rassemblant ces voix sous une bannière commune, NSS leur donne
            la force collective pour transformer les systèmes alimentaires —
            par elles-mêmes, pour elles-mêmes, en elles-mêmes. C&apos;est le sens
            profond de notre tagline et de chacune de nos actions.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .identite-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
