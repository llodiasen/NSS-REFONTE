import Image from "next/image";

const PARTENAIRES = [
  { src: "/images/partenaires/logofahamu1.png",            alt: "Fahamu Africa" },
  { src: "/images/partenaires/Agroecology-Fund.jpg",       alt: "Agroecology Fund" },
  { src: "/images/partenaires/Fond-egalite.png",           alt: "Fonds pour l'Égalité" },
  { src: "/images/partenaires/Grassroots-international.jpg", alt: "Grassroots International" },
  { src: "/images/partenaires/thoussands-current-1.jpg",   alt: "Thousand Currents" },
];

export default function AboutPartenaires() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--section-py) var(--container-pad)",
        }}
      >
        {/* Tag centré */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginRight: "12px", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--green-600)" }}>
            Nos soutiens
          </span>
          <span aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--green-600)", marginLeft: "12px", flexShrink: 0 }} />
        </div>

        {/* H2 centré */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#071A10",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Ils croient en notre mouvement.
        </h2>

        {/* Logos flex wrap */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {PARTENAIRES.map(({ src, alt }) => (
            <div
              key={alt}
              style={{
                width: "160px",
                height: "80px",
                borderRadius: "12px",
                background: "var(--green-50)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={130}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
