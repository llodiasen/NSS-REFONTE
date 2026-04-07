import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Connexion — Espace membre NSS",
  description: "Connexion à l'espace membre du mouvement Nous Sommes la Solution.",
};

interface LoginPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;

  // Redirige si déjà connecté
  const session = await auth();
  if (session) {
    redirect(`/${locale}/membre/dashboard`);
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
            Connexion à l&apos;espace membre
          </h1>
          <p className="text-neutral-500 text-sm text-center mb-8">
            Accès réservé aux membres invités par l&apos;équipe NSS.
          </p>

          <LoginForm locale={locale} />

          <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
            <p className="text-sm text-neutral-500">
              Vous avez un lien d&apos;invitation ?{" "}
              <Link
                href={`/${locale}/invite`}
                className="text-primary-700 font-semibold hover:underline"
              >
                Activez votre compte
              </Link>
            </p>
          </div>
        </div>

        {/* Retour accueil */}
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
