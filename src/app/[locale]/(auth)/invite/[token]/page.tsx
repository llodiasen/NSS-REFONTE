import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import InviteForm from "@/components/auth/InviteForm";
import type { Role } from "@prisma/client";

export const metadata: Metadata = {
  title: "Activer mon compte — NSS",
  description: "Activez votre compte membre Nous Sommes la Solution.",
};

interface InvitePageProps {
  params: Promise<{ locale: string; token: string }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { locale, token } = await params;

  const invitation = await prisma.invitation.findUnique({
    where: { token },
  });

  // Token invalide
  if (!invitation) {
    notFound();
  }

  // Token déjà utilisé
  if (invitation.usedAt) {
    return <InviteError locale={locale} type="used" />;
  }

  // Token expiré
  if (invitation.expiresAt < new Date()) {
    return <InviteError locale={locale} type="expired" />;
  }

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href={`/${locale}`} aria-label="Retour à l'accueil">
            <div className="w-14 h-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg font-display">NSS</span>
            </div>
          </Link>
          <span className="font-display font-bold text-primary-900 text-lg">
            Nous Sommes la Solution
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="font-display text-2xl font-bold text-neutral-800 mb-1 text-center">
            Activez votre compte
          </h1>
          <p className="text-neutral-500 text-sm text-center mb-8">
            Vous avez été invité(e) à rejoindre l&apos;espace membre NSS.
            Choisissez votre mot de passe pour finaliser votre inscription.
          </p>

          <InviteForm
            token={token}
            email={invitation.email}
            role={invitation.role as Role}
            locale={locale}
          />
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

// Composant d'erreur inline (< 200 lignes respectées)
function InviteError({ locale, type }: { locale: string; type: "used" | "expired" }) {
  const message =
    type === "used"
      ? "Ce lien d'invitation a déjà été utilisé."
      : "Ce lien d'invitation a expiré. Les invitations sont valides 72h.";

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="w-14 h-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-lg font-display">NSS</span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <h1 className="font-display text-xl font-bold text-neutral-800 mb-2">
            Lien invalide
          </h1>
          <p className="text-neutral-500 text-sm mb-6">{message}</p>
          <Link href={`/${locale}/login`} className="btn btn-primary">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}
