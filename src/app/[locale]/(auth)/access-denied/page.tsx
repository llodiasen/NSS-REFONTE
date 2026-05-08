import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accès restreint — NSS",
  description: "Vous n'avez pas les droits nécessaires pour accéder à cette page.",
};

interface AccessDeniedPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ reason?: string }>;
}

const MESSAGES: Record<string, { title: string; description: string }> = {
  role: {
    title: "Accès restreint",
    description:
      "Votre rôle ne vous permet pas d'accéder à cette section. Contactez l'équipe NSS si vous pensez qu'il s'agit d'une erreur.",
  },
  "invitation-expired": {
    title: "Lien expiré",
    description:
      "Votre lien d'invitation a expiré. Les invitations sont valides 72 heures. Contactez l'équipe NSS pour recevoir un nouveau lien.",
  },
  "invitation-used": {
    title: "Lien déjà utilisé",
    description:
      "Ce lien d'invitation a déjà été utilisé pour créer un compte. Si vous avez déjà un compte, connectez-vous directement.",
  },
};

const DEFAULT_MESSAGE = MESSAGES.role;

export default async function AccessDeniedPage({
  params,
  searchParams,
}: AccessDeniedPageProps) {
  const { locale } = await params;
  const { reason } = await searchParams;

  const content =
    (reason ? MESSAGES[reason] : undefined) ?? DEFAULT_MESSAGE;

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <Link href={`/${locale}`} aria-label="Retour à l'accueil">
          <div className="w-14 h-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-lg font-display">NSS</span>
          </div>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Illustration cadenas */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-20 h-20 text-primary-200"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="16" y="36" width="48" height="34" rx="6" fill="currentColor" opacity="0.3" />
              <rect x="16" y="36" width="48" height="34" rx="6" stroke="#2d6a4f" strokeWidth="3" />
              <path
                d="M27 36V26C27 19.373 32.373 14 39 14h2C47.627 14 53 19.373 53 26v10"
                stroke="#2d6a4f"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="40" cy="52" r="5" fill="#2d6a4f" />
              <rect x="38" y="54" width="4" height="7" rx="2" fill="#2d6a4f" />
            </svg>
          </div>

          <h1 className="font-display text-2xl font-bold text-neutral-800 mb-3">
            {content.title}
          </h1>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            {content.description}
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Link href={`/${locale}`} className="btn btn-primary w-full">
              Retour à l&apos;accueil
            </Link>

            <Link href={`/${locale}/contact`} className="btn btn-secondary text-primary-700 w-full">
              Contacter l&apos;équipe NSS
            </Link>

            {reason !== "invitation-expired" && reason !== "invitation-used" && (
              <Link
                href={`/${locale}/login`}
                className="text-sm text-neutral-500 hover:text-primary-700 transition-colors mt-1"
              >
                Se connecter avec un autre compte
              </Link>
            )}
          </div>
        </div>

        {/* Retour */}
        <div className="text-center mt-6">
          <Link
            href={`/${locale}`}
            className="text-sm text-neutral-500 hover:text-primary-700 transition-colors"
          >
            ← Retour au site
          </Link>
        </div>
      </div>
    </div>
  );
}
