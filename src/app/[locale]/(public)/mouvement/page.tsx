import type { Metadata } from "next";
import Link from "next/link";
import MouvementHero from "@/components/sections/mouvement/MouvementHero";
import MouvementVision from "@/components/sections/mouvement/MouvementVision";
import EngagementsSection from "@/components/sections/EngagementsSection";
import AboutOrganisations from "@/components/sections/about/AboutOrganisations";
import MouvementLeaders from "@/components/sections/mouvement/MouvementLeaders";
import ContactSectionNSS from "@/components/sections/ContactSectionNSS";

export const metadata: Metadata = {
  title: "Le Mouvement NSS — Valeurs, structure et organisations membres",
  description:
    "Découvrez comment NSS fonctionne : roadmap historique, 6 engagements fondateurs, 500+ organisations membres et partenaires à travers 14 pays d'Afrique de l'Ouest.",
};

export default function MouvementPage() {
  return (
    <>
      {/* 01 — Hero */}
      <MouvementHero />

      {/* 02 — Vision & Objectifs */}
      <MouvementVision />

      {/* 03 — Nos 6 engagements */}
      <EngagementsSection />

      {/* 04 — Leaders du mouvement */}
      <MouvementLeaders />

      {/* 05 — Organisations membres */}
      <AboutOrganisations />

      {/* 06 — CTA Faire un don */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "rgba(7,26,16,0.88)",
          zIndex: 0,
        }} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "80px var(--container-pad)",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ display: "block", width: "28px", height: "1.5px", background: "#F5EDD6", flexShrink: 0 }} aria-hidden />
            <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "#F5EDD6" }}>
              ENSEMBLE, NOUS SOMMES LA SOLUTION
            </span>
            <span style={{ display: "block", width: "28px", height: "1.5px", background: "#F5EDD6", flexShrink: 0 }} aria-hidden />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#F5EDD6",
              marginBottom: "16px",
              letterSpacing: "-0.015em",
            }}
          >
            Rejoignez 175&nbsp;000 femmes qui{" "}
            <em style={{ fontStyle: "italic", color: "#E8A838" }}>nourrissent l&apos;Afrique.</em>
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#ffffff", borderRadius: "2px", margin: "0 auto 1.5rem" }} aria-hidden />
          <p
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(245, 237, 214, 0.85)",
              maxWidth: "600px",
              margin: "0 auto 40px",
              textAlign: "center",
            }}
          >
            Partagez nos valeurs&nbsp;? Adhérez à NSS et rejoignez 175&nbsp;000 femmes
            rurales qui transforment les systèmes alimentaires en Afrique de l&apos;Ouest.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/fr/agir/rejoindre"
              style={{
                fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "#00AD4C",
                padding: "10px 22px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              className="cta-btn-primary"
            >
              Adhérer au mouvement
            </Link>
            <Link
              href="/fr/contact"
              style={{
                fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.42)",
                padding: "10px 22px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cta-btn-primary:hover { background: var(--green-700) !important; transform: translateY(-2px); }
      `}</style>

      {/* 07 -- Formulaire de contact */}
      <ContactSectionNSS />
    </>
  );
}
