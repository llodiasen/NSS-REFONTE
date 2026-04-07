import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Nous contacter — Mouvement NSS | wasafrica.org",
  description:
    "Contactez le mouvement NSS pour adhérer, soutenir nos actions ou établir un partenariat. Bureau à Dakar, Sénégal.",
};

interface ContactPageProps {
  searchParams: Promise<{ sujet?: string }>;
}

const INFOS = [
  {
    icon: <MapPin size={18} className="text-primary-600" />,
    label: "Adresse",
    value: "Sicap Foire, Lot 17, Zone C\nDakar, Sénégal",
  },
  {
    icon: <Phone size={18} className="text-primary-600" />,
    label: "Téléphone",
    value: "+221 33 867 59 11",
  },
  {
    icon: <Mail size={18} className="text-primary-600" />,
    label: "Email",
    value: "contact@wasafrica.org",
  },
  {
    icon: <Clock size={18} className="text-primary-600" />,
    label: "Horaires",
    value: "Lundi – Vendredi\n8h00 – 18h00",
  },
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sujet } = await searchParams;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Parlons ensemble
          </h1>
          <p className="text-primary-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Une question sur le mouvement, un projet de partenariat,
            une demande d&apos;adhésion — nous sommes là.
          </p>
        </div>
      </section>

      {/* Layout 2 colonnes */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Formulaire — 60% */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xl font-bold text-neutral-800 mb-6">
              Envoyez-nous un message
            </h2>
            <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
              <ContactForm defaultSujet={sujet} />
            </div>
          </div>

          {/* Infos — 40% */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-primary-600 text-xs font-semibold tracking-widest uppercase mb-1">
                Où nous trouver
              </p>
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-5">
                Notre bureau
              </h2>
            </div>

            <div className="space-y-4">
              {INFOS.map((info) => (
                <div key={info.label} className="bg-white rounded-2xl shadow-card p-4 flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-800 whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-2xl shadow-card p-5">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">
                Suivez-nous
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/mouvement.nss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-primary-700
                             hover:text-primary-500 transition-colors"
                  aria-label="Facebook NSS"
                >
                  Facebook
                </a>
                <span className="text-neutral-200">·</span>
                <a
                  href="https://www.youtube.com/@nss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-primary-700
                             hover:text-primary-500 transition-colors"
                  aria-label="YouTube NSS"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Note adhésion */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-4">
              <p className="text-sm font-semibold text-primary-800 mb-1">
                Pour rejoindre le mouvement
              </p>
              <p className="text-xs text-primary-700 leading-relaxed">
                Sélectionnez l&apos;objet <strong>« Adhésion »</strong> dans le formulaire,
                ou visitez directement la page{" "}
                <a href="/fr/agir/rejoindre" className="underline font-semibold">
                  Rejoindre NSS
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
