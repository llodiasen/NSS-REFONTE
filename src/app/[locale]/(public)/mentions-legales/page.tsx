import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Mouvement NSS | wasafrica.org",
  description: "Mentions légales du site wasafrica.org — Mouvement Nous Sommes la Solution.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-lg font-bold text-neutral-800 border-b border-neutral-100 pb-2">
        {title}
      </h2>
      <div className="text-sm text-neutral-600 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-primary-900 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Mentions légales
          </h1>
          <p className="text-primary-200 text-sm mt-2">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-8 sm:p-10 space-y-8">

          <Section title="Éditeur du site">
            <p>
              Le site <strong>wasafrica.org</strong> est édité par le mouvement{" "}
              <strong>Nous Sommes la Solution (NSS)</strong>, avec l&apos;appui technique de{" "}
              <strong>Fahamu Africa</strong>.
            </p>
            <p>
              <strong>Adresse :</strong> Sicap Foire, Lot numéro 17, Zone C — Dakar, Sénégal<br />
              <strong>Téléphone :</strong> +221 33 867 59 11<br />
              <strong>Email :</strong> contact@wasafrica.org
            </p>
            <p>
              <strong>Directrice de la publication :</strong> Présidente du mouvement NSS
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong><br />
              340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis<br />
              Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                className="text-primary-700 hover:underline">vercel.com</a>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos,
              graphismes) est la propriété exclusive du mouvement NSS ou de ses partenaires,
              sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation totale ou partielle
              des contenus, sans autorisation préalable et écrite du mouvement NSS, est strictement
              interdite et constituerait une contrefaçon sanctionnée par les lois en vigueur.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              Le mouvement NSS s&apos;efforce de maintenir les informations publiées sur ce site
              à jour et exactes. Cependant, NSS ne saurait être tenu responsable des erreurs ou
              omissions, ni des dommages directs ou indirects résultant de l&apos;utilisation
              du site ou des informations qu&apos;il contient.
            </p>
            <p>
              Les liens hypertextes vers d&apos;autres sites sont fournis à titre informatif.
              NSS n&apos;a aucun contrôle sur le contenu de ces sites tiers et décline toute
              responsabilité quant à leur contenu.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit sénégalais.
              Tout litige relatif à l&apos;utilisation du site sera soumis à la compétence
              exclusive des tribunaux de Dakar, Sénégal.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Pour toute question relative aux mentions légales, contactez-nous à{" "}
              <a href="mailto:contact@wasafrica.org"
                className="text-primary-700 hover:underline font-semibold">
                contact@wasafrica.org
              </a>.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
