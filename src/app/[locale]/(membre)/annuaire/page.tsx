import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import { MapPin, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AnnuaireFilters from "@/components/membre/AnnuaireFilters";
import type { Role, Prisma } from "@prisma/client";

export const metadata: Metadata = {
  title: "Annuaire des membres — Espace membre NSS",
};

const PAGE_SIZE = 20;

interface AnnuairePageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; country?: string; role?: string; page?: string }>;
}

const roleVariant = (role: Role) =>
  role === "PARTENAIRE" ? "partenaire" : "membre";

export default async function AnnuairePage({ params, searchParams }: AnnuairePageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  const { q, country, role, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10));
  const skip = (currentPage - 1) * PAGE_SIZE;

  const where: Prisma.UserWhereInput = {
    isActive: true,
    role: { in: ["MEMBRE", "PARTENAIRE"] }, // exclure ADMIN
    ...(q && {
      OR: [
        { firstName: { contains: q, mode: "insensitive" } },
        { name: { contains: q, mode: "insensitive" } },
        { organisation: { contains: q, mode: "insensitive" } },
      ],
    }),
    ...(country && { country }),
    ...(role && role !== "ADMIN" && { role: role as Role }),
  };

  const [members, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: [{ firstName: "asc" }, { name: "asc" }],
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        firstName: true,
        name: true,
        organisation: true,
        country: true,
        role: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (country) params.set("country", country);
    if (role) params.set("role", role);
    params.set("page", String(p));
    return `/${locale}/membre/annuaire?${params.toString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">
          Annuaire des membres
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          {total.toLocaleString("fr-FR")} membre{total > 1 ? "s" : ""} actif{total > 1 ? "s" : ""}
        </p>
      </div>

      {/* Filtres */}
      <Suspense>
        <AnnuaireFilters />
      </Suspense>

      {/* Grille membres */}
      {members.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <p className="text-neutral-400 text-sm">Aucun membre trouvé pour ces critères.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              {/* Avatar initiales */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-700 text-sm font-bold">
                    {member.firstName.charAt(0).toUpperCase()}
                    {member.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-800 truncate">
                    {member.firstName} {member.name}
                  </p>
                  <Badge variant={roleVariant(member.role as Role)}>
                    {member.role}
                  </Badge>
                </div>
              </div>

              {/* Détails */}
              <div className="space-y-1.5 text-xs text-neutral-500">
                {member.organisation && (
                  <div className="flex items-center gap-1.5">
                    <Building2 size={12} className="flex-shrink-0 text-neutral-400" />
                    <span className="truncate">{member.organisation}</span>
                  </div>
                )}
                {member.country && (
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="flex-shrink-0 text-neutral-400" />
                    <span>{member.country}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-between pt-2" aria-label="Pagination">
          <p className="text-sm text-neutral-500">
            Page {currentPage} sur {totalPages}
          </p>
          <div className="flex gap-2">
            {currentPage > 1 ? (
              <Link
                href={buildHref(currentPage - 1)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700
                           border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <ChevronLeft size={16} /> Précédent
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium
                               text-neutral-300 border border-neutral-100 rounded-xl cursor-not-allowed">
                <ChevronLeft size={16} /> Précédent
              </span>
            )}

            {currentPage < totalPages ? (
              <Link
                href={buildHref(currentPage + 1)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700
                           border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                Suivant <ChevronRight size={16} />
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium
                               text-neutral-300 border border-neutral-100 rounded-xl cursor-not-allowed">
                Suivant <ChevronRight size={16} />
              </span>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
