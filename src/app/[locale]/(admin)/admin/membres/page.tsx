import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import MemberTable from "@/components/admin/MemberTable";
import type { Prisma } from "@prisma/client";

export const metadata: Metadata = {
  title: "Gestion des membres — Administration NSS",
};

const PAGE_SIZE = 20;

interface MembresPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function AdminMembresPage({ params, searchParams }: MembresPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  const { q, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10));
  const skip = (currentPage - 1) * PAGE_SIZE;

  const where: Prisma.UserWhereInput = q
    ? {
        OR: [
          { firstName: { contains: q, mode: "insensitive" } },
          { name: { contains: q, mode: "insensitive" } },
          { email: { contains: q, mode: "insensitive" } },
        ],
      }
    : {};

  const [members, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        firstName: true,
        name: true,
        email: true,
        role: true,
        country: true,
        isActive: true,
        createdAt: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    params.set("page", String(p));
    return `/${locale}/admin/membres?${params.toString()}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-neutral-800">
            Gestion des membres
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            {total.toLocaleString("fr-FR")} membre{total > 1 ? "s" : ""} au total
          </p>
        </div>
      </div>

      {/* Recherche */}
      <form method="GET" className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          name="q"
          defaultValue={q ?? ""}
          placeholder="Rechercher par nom ou email…"
          className="w-full border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm
                     text-neutral-700 placeholder-neutral-400 bg-white
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </form>

      {members.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <p className="text-neutral-400 text-sm">Aucun membre trouvé.</p>
        </div>
      ) : (
        <MemberTable members={members} currentUserId={session.user.id} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-between" aria-label="Pagination">
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
