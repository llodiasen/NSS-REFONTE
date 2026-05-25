import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nous contacter — Mouvement NSS | wasafrica.org",
  description:
    "Contactez le mouvement NSS pour adhérer, soutenir nos actions ou établir un partenariat. Bureau à Dakar, Sénégal.",
};

interface ContactPageProps {
  searchParams: Promise<{ sujet?: string }>;
}


export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sujet } = await searchParams;

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Contact"
        title="Parlons ensemble."
        subtitle="Une question sur le mouvement, un projet de partenariat, une demande d'adhésion — nous sommes là."
        imageSrc="/images/galerie/rencontre-1.jpg"
      />

      {/* Formulaire */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card p-8 sm:p-12">
            <ContactForm defaultSujet={sujet} />
          </div>
        </div>
      </section>
    </>
  );
}
