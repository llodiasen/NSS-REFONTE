import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Badge from "@/components/ui/Badge";
import ProfileForm from "@/components/membre/ProfileForm";
import type { Role } from "@prisma/client";

export const metadata: Metadata = {
  title: "Mon profil — Espace membre NSS",
};

interface ProfilPageProps {
  params: Promise<{ locale: string }>;
}

const roleVariant = (role: Role) =>
  role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

export default async function ProfilPage({ params }: ProfilPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      firstName: true,
      name: true,
      email: true,
      role: true,
      organisation: true,
      country: true,
      bio: true,
      createdAt: true,
    },
  });

  if (!user) {
    redirect(`/${locale}/login`);
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">Mon profil</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Gérez vos informations personnelles visibles dans l&apos;annuaire.
        </p>
      </div>

      {/* Infos lecture seule */}
      <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
        <h2 className="font-display font-bold text-neutral-700 text-base border-b border-neutral-100 pb-3">
          Informations du compte
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">
              Adresse email
            </p>
            <p className="text-sm text-neutral-800 font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">
              Rôle
            </p>
            <Badge variant={roleVariant(user.role as Role)}>{user.role}</Badge>
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">
              Membre depuis
            </p>
            <p className="text-sm text-neutral-800">
              {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire éditable */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="font-display font-bold text-neutral-700 text-base border-b border-neutral-100 pb-3 mb-5">
          Informations personnelles
        </h2>
        <ProfileForm
          defaultValues={{
            firstName: user.firstName,
            name: user.name,
            organisation: user.organisation ?? "",
            country: user.country ?? "",
            bio: user.bio ?? "",
          }}
        />
      </div>
    </div>
  );
}
