import type { Metadata } from "next";
import Link from "next/link";
import MouvementVision from "@/components/sections/mouvement/MouvementVision";
import AboutStructure from "@/components/sections/about/AboutStructure";
import EngagementsSection from "@/components/sections/EngagementsSection";
import AboutOrganisations from "@/components/sections/about/AboutOrganisations";
import MouvementLeaders from "@/components/sections/mouvement/MouvementLeaders";
import AboutPartenaires from "@/components/sections/about/AboutPartenaires";

export const metadata: Metadata = {
  title: "Le Mouvement NSS — Valeurs, structure et organisations membres",
  description:
    "Découvrez comment NSS fonctionne : roadmap historique, 6 engagements fondateurs, 500+ organisations membres et partenaires à travers 14 pays d'Afrique de l'Ouest.",
};

export default function MouvementPage() {
  return (
    <>
      {/* 01 — Hero */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        backgroundImage: `url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Overlay */}
        <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          background: [
            "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(3,8,5,0.95) 40%, rgba(6,14,9,0.88) 65%, rgba(0,0,0,0.70) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)",
            "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.08), transparent 65%)",
          ].join(", "),
        }} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "48px var(--container-pad) 40px",
          }}
        >
          {/* Breadcrumb */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "#ffffff", marginBottom: "28px" }}>
            <Link href="/fr" style={{ color: "#ffffff", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span style={{ color: "#ffffff" }}>Mouvement</span>
          </p>

          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-300)", whiteSpace: "nowrap" }}>
              Notre mouvement
            </span>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
          </div>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.12,
              color: "#ffffff",
              marginBottom: "24px",
              maxWidth: "700px",
            }}
          >
            Un mouvement structuré, guidé par ses valeurs.
          </h1>

          {/* Sous-titre */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#ffffff",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            De 5 pays fondateurs en 2011 à 14 pays aujourd&apos;hui, NSS s&apos;est
            construit autour d&apos;une gouvernance 100% féminine, d&apos;engagements
            clairs et d&apos;un réseau de 500+ associations de terrain.
          </p>

          {/* Lien vers À propos */}
          <Link
            href="/fr/a-propos"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "24px",
              padding: "10px 22px",
              display: "inline-block",
              transition: "border-color 0.2s ease",
            }}
          >
            Notre histoire & identité →
          </Link>
        </div>
      </section>

      {/* 02 — Vision & Objectifs */}
      <MouvementVision />

      {/* 03 — Roadmap historique */}
      <AboutStructure />

      {/* 03 — Nos 6 engagements */}
      <EngagementsSection />

      {/* 04 — Organisations membres */}
      <AboutOrganisations />

      {/* 05 — Leaders du mouvement */}
      <MouvementLeaders />

      {/* 06 — Partenaires */}
      <AboutPartenaires />

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
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              color: "var(--green-300)",
              display: "block",
              marginBottom: "20px",
            }}
          >
            Rejoindre le mouvement
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 38px)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Rejoindre le mouvement
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#ffffff",
              maxWidth: "680px",
              margin: "0 auto 40px",
            }}
          >
            Partagez-vous notre vision ? Adhérez à NSS et rejoignez 175&nbsp;000 femmes
            rurales qui transforment les systèmes alimentaires en Afrique de l&apos;Ouest.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/fr/agir/rejoindre"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
                background: "var(--green-600)",
                padding: "14px 32px",
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
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.2s ease",
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
    </>
  );
}
