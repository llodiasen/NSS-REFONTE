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
    <section style={{ background: "#f9f8f5" }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px clamp(1.25rem, 4vw, 2.5rem) 88px",
        textAlign: "center",
      }}>

        {/* ── Surtitle — ILS NOUS SOUTIENNENT — */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
          <span aria-hidden style={{ display: "block", width: "28px", height: "1.5px", background: "#00AD4C", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00AD4C" }}>
            ILS NOUS SOUTIENNENT
          </span>
          <span aria-hidden style={{ display: "block", width: "28px", height: "1.5px", background: "#00AD4C", flexShrink: 0 }} />
        </div>

        {/* ── Underline ── */}
        <div style={{ width: "60px", height: "3px", background: "#00AD4C", borderRadius: "2px", margin: "0.75rem auto 2.5rem" }} aria-hidden />

        {/* ── Logos ── */}
        <div style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}>
          {PARTENAIRES.map(({ src, alt }) => (
            <div
              key={alt}
              style={{
                flex: "1 1 0",
                minWidth: 0,
                maxWidth: "160px",
                height: "80px",
                borderRadius: "10px",
                background: "#f9f8f5",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "box-shadow 0.2s ease",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={120}
                height={55}
                style={{ objectFit: "contain", maxWidth: "90%", maxHeight: "90%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
