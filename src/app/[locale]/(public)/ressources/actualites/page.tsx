import type { Metadata } from "next";
import { ARTICLES } from "@/data/articles";
import ActualitesClient from "./ActualitesClient";

export const metadata: Metadata = {
  title: "Actualités — Mouvement NSS | wasafrica.org",
  description:
    "Suivez toutes les actualités du mouvement Nous Sommes la Solution : formations, plaidoyer, souveraineté alimentaire et agroécologie en Afrique de l'Ouest.",
};

export default function ActualitesPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#ffffff",
          backgroundImage: `url('https://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: [
              "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(3,8,5,0.95) 40%, rgba(6,14,9,0.88) 65%, rgba(0,0,0,0.70) 100%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)",
              "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.08), transparent 65%)",
            ].join(", "),
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "var(--container-max, 1200px)",
            margin: "0 auto",
            padding: "72px var(--container-pad, 24px) 64px",
            width: "100%",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "28px",
                height: "1px",
                background: "rgba(143,190,107,0.6)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#8fbe6b",
                whiteSpace: "nowrap",
              }}
            >
              Actualités
            </span>
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "28px",
                height: "1px",
                background: "rgba(143,190,107,0.6)",
                flexShrink: 0,
              }}
            />
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.12,
              color: "#F6F3EE",
              marginBottom: "24px",
              maxWidth: "680px",
            }}
          >
            Le mouvement en action.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#ffffff",
              maxWidth: "520px",
            }}
          >
            Formations, plaidoyer, événements et victoires du terrain —
            suivez la vie du mouvement Nous Sommes la Solution.
          </p>
        </div>
      </section>

      {/* ── Filters + Grid (client) ── */}
      <ActualitesClient articles={sorted} />
    </>
  );
}
