import type { Metadata } from "next";
import Link from "next/link";
import MouvementHero from "@/components/sections/mouvement/MouvementHero";
import MouvementCompose from "@/components/sections/mouvement/MouvementCompose";
import MouvementObjectifs from "@/components/sections/mouvement/MouvementObjectifs";
import MouvementStructure from "@/components/sections/mouvement/MouvementStructure";
import MouvementTimeline from "@/components/sections/mouvement/MouvementTimeline";
import MouvementOrgs from "@/components/sections/mouvement/MouvementOrgs";
import MouvementLeaders from "@/components/sections/mouvement/MouvementLeaders";

export const metadata: Metadata = {
  title: "Le Mouvement NSS — Valeurs, structure et organisations membres",
  description:
    "Découvrez comment NSS fonctionne : gouvernance 100% féminine, 14 pays, 500+ organisations membres à travers l'Afrique de l'Ouest depuis 2011.",
};

export default function MouvementPage() {
  return (
    <>
      {/* S1 — Hero */}
      <MouvementHero />

      {/* S2 — Qui compose */}
      <MouvementCompose />

      {/* S3 — Objectifs */}
      <MouvementObjectifs />

      {/* S4 — Structuration */}
      <MouvementStructure />

      {/* S5 — Timeline */}
      <MouvementTimeline />

      {/* S6 — Organisations */}
      <MouvementOrgs />

      {/* S7 — Leaders */}
      <MouvementLeaders />

      {/* S8 — CTA */}
      <section className="bg-[#045627] text-center">
        <div className="max-w-[640px] mx-auto cta-inner">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[rgba(245,237,214,0.25)] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F5EDD6]">Passez à l&apos;action</span>
            <span className="w-7 h-px bg-[rgba(245,237,214,0.25)] shrink-0" aria-hidden />
          </div>

          <h2 className="cta-h2 font-semibold text-[#F5EDD6] leading-[1.15] tracking-[-0.01em] mb-3">
            Rejoignez le mouvement,{' '}
            <em className="italic text-[#A5CE46] font-medium">agir ensemble.</em>
          </h2>

          <div className="w-[60px] h-[3px] bg-[#A5CE46] mx-auto mb-9" />

          <p className="text-[15px] font-light text-[rgba(245,237,214,0.8)] leading-[1.7] max-w-[520px] mx-auto mb-9">
            Partagez nos valeurs ? Adhérez à NSS et rejoignez 175&nbsp;000 femmes rurales
            qui transforment les systèmes alimentaires en Afrique de l&apos;Ouest.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/fr/agir/rejoindre"
              className="inline-flex items-center justify-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase bg-[#00AD4C] text-white px-8 py-[14px] rounded-lg border border-transparent transition-all duration-[250ms] hover:bg-[#A5CE46] hover:text-[#045627] hover:-translate-y-px"
            >
              Adhérer au mouvement
            </Link>
            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#F5EDD6] border-[1.5px] border-[rgba(245,237,214,0.35)] px-8 py-[14px] rounded-lg transition-all duration-[250ms] hover:border-[#F5EDD6] hover:bg-[rgba(245,237,214,0.06)]"
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cta-inner { padding: clamp(2rem,5vw,80px) clamp(1rem,4vw,72px); }
        .cta-h2 { font-size: clamp(1.8rem,4vw,2.6rem); }
        @media (max-width: 640px) {
          .cta-inner a { width: 100%; }
        }
      `}</style>
    </>
  );
}
