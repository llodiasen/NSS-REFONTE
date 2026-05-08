import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Mouvement NSS | wasafrica.org",
  description:
    "Politique de confidentialité de wasafrica.org — comment NSS collecte, utilise et protège vos données personnelles.",
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

export default function ConfidentialitePage() {
  return (
    <>
      <section className="bg-primary-900 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Politique de confidentialité
          </h1>
          <p className="text-primary-200 text-sm mt-2">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-8 sm:p-10 space-y-8">

          <Section title="Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est
              le mouvement <strong>Nous Sommes la Solution (NSS)</strong>.
            </p>
            <p>
              <strong>Contact :</strong>{" "}
              <a href="mailto:contact@wasafrica.org"
                className="text-primary-700 hover:underline">
                contact@wasafrica.org
              </a>
            </p>
          </Section>

          <Section title="Données collectées">
            <p>NSS collecte uniquement les données strictement nécessaires à ses activités :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Formulaire de contact et d&apos;adhésion :</strong> prénom, nom, email,
                pays, organisation, message. Ces données sont utilisées uniquement pour traiter
                votre demande.
              </li>
              <li>
                <strong>Espace membre :</strong> email, prénom, nom, rôle, pays, organisation,
                bio. Ces données sont nécessaires à la gestion de votre compte.
              </li>
              <li>
                <strong>Analytics :</strong> données de navigation anonymisées via Plausible
                Analytics (sans cookies tiers, conformes RGPD).
              </li>
            </ul>
          </Section>

          <Section title="Finalités du traitement">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Traitement des demandes de contact et d&apos;adhésion</li>
              <li>Gestion de l&apos;espace membre NSS</li>
              <li>Envoi d&apos;invitations et de communications liées au compte</li>
              <li>Amélioration du site via des statistiques anonymisées</li>
            </ul>
          </Section>

          <Section title="Cookies et traceurs">
            <p>
              Ce site <strong>n&apos;utilise pas de cookies tiers</strong> à des fins publicitaires
              ou de suivi comportemental.
            </p>
            <p>
              L&apos;outil d&apos;analyse <strong>Plausible Analytics</strong> est utilisé pour
              mesurer l&apos;audience du site. Il ne dépose aucun cookie et ne collecte aucune
              donnée personnelle identifiable. Les données sont agrégées et anonymes.
            </p>
            <p>
              Des cookies de session strictement nécessaires sont utilisés pour maintenir votre
              connexion à l&apos;espace membre.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Données de contact :</strong> conservées 3 ans après le dernier contact.
              </li>
              <li>
                <strong>Compte membre :</strong> conservé jusqu&apos;à la suppression du compte
                ou 2 ans d&apos;inactivité.
              </li>
              <li>
                <strong>Invitations :</strong> supprimées 30 jours après utilisation ou expiration.
              </li>
              <li>
                <strong>Analytics :</strong> données agrégées, pas de durée de rétention
                individuelle.
              </li>
            </ul>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément à la réglementation applicable, vous disposez des droits suivants sur
              vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@wasafrica.org"
                className="text-primary-700 hover:underline font-semibold">
                contact@wasafrica.org
              </a>.
              Nous nous engageons à répondre dans un délai de 30 jours.
            </p>
          </Section>

          <Section title="Sécurité des données">
            <p>
              NSS met en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte ou divulgation :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Chiffrement des mots de passe (bcrypt, 12 rounds)</li>
              <li>Connexions sécurisées (HTTPS)</li>
              <li>Accès aux données restreint par rôle (MEMBRE / PARTENAIRE / ADMIN)</li>
              <li>Hébergement sur infrastructure Vercel (SOC 2 Type II)</li>
            </ul>
          </Section>

          <Section title="Transferts hors UE">
            <p>
              Vos données peuvent être traitées par nos prestataires techniques établis hors de
              l&apos;Union Européenne (Vercel — États-Unis, Resend — États-Unis, Neon — États-Unis).
              Ces transferts sont encadrés par des clauses contractuelles types conformes au RGPD.
            </p>
          </Section>

          <Section title="Modifications">
            <p>
              NSS se réserve le droit de modifier cette politique de confidentialité à tout moment.
              La date de dernière mise à jour est indiquée en haut de cette page. Nous vous
              encourageons à la consulter régulièrement.
            </p>
          </Section>

        </div>
      </section>
    </>
  );
}
