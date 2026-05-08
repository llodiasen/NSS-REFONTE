import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Badge from "@/components/ui/Badge";
import AdminInviteForm from "@/components/admin/AdminInviteForm";
import ResendInviteButton from "@/components/admin/ResendInviteButton";
import type { Role } from "@prisma/client";

export const metadata: Metadata = {
  title: "Invitations — Administration NSS",
};

interface InvitationsPageProps {
  params: Promise<{ locale: string }>;
}

const roleVariant = (role: Role) =>
  role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

export default async function AdminInvitationsPage({ params }: InvitationsPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  const now = new Date();

  const invitations = await prisma.invitation.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
      expiresAt: true,
      usedAt: true,
      invitedBy: { select: { firstName: true, name: true } },
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">Invitations</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Invitez de nouveaux membres à rejoindre l&apos;espace NSS.
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="font-display font-bold text-neutral-700 text-base mb-5">
          Envoyer une invitation
        </h2>
        <AdminInviteForm />
      </div>

      {/* Table invitations */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-100">
          <h2 className="font-display font-bold text-neutral-700 text-base">
            Invitations envoyées ({invitations.length})
          </h2>
        </div>

        {invitations.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-neutral-400 italic">Aucune invitation envoyée.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50">
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Rôle</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Envoyé le</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Expire le</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Statut</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-600">Par</th>
                  <th className="text-right px-4 py-3 font-semibold text-neutral-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {invitations.map((inv) => {
                  const isUsed = !!inv.usedAt;
                  const isExpired = !isUsed && inv.expiresAt < now;
                  const isPending = !isUsed && !isExpired;

                  return (
                    <tr key={inv.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-4 py-3 text-neutral-700 max-w-[200px] truncate">
                        {inv.email}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={roleVariant(inv.role as Role)}>{inv.role}</Badge>
                      </td>
                      <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">
                        {new Date(inv.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric", month: "short", year: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">
                        {new Date(inv.expiresAt).toLocaleDateString("fr-FR", {
                          day: "numeric", month: "short", year: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isUsed
                            ? "bg-green-100 text-green-700"
                            : isExpired
                            ? "bg-red-100 text-red-600"
                            : "bg-earth-100 text-earth-700"
                        }`}>
                          {isUsed ? "Activée" : isExpired ? "Expirée" : "En attente"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">
                        {inv.invitedBy.firstName} {inv.invitedBy.name}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isPending || isExpired ? (
                          <ResendInviteButton email={inv.email} role={inv.role as Role} />
                        ) : (
                          <span className="text-neutral-300 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

