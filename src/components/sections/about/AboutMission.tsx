export default function AboutMission() {
  return (
    <section style={{ background: "var(--green-900)", width: "100%" }}>
      <div
        className="mission-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "start",
        }}
      >
        {/* ── Colonne gauche ── */}
        <div>
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", marginRight: "12px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "var(--green-300)" }}>
              Notre mission
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "34px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              maxWidth: "480px",
            }}
          >
            Redonner aux femmes rurales le pouvoir de nourrir le continent.
          </h2>
        </div>

        {/* ── Colonne droite ── */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "24px",
            }}
          >
            NSS mobilise les femmes rurales pour défendre et promouvoir la souveraineté
            alimentaire à travers des pratiques agroécologiques ancrées dans les
            savoirs endogènes. Nous agissons aux niveaux local, national et continental
            pour que les agricultrices soient reconnues et entendues.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            À travers nos programmes CIFAP et EMMAP, nos réseaux d&apos;associations
            membres et nos actions de plaidoyer, nous construisons un mouvement
            panafricain où chaque femme rurale est actrice du changement — pas
            simple bénéficiaire.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
