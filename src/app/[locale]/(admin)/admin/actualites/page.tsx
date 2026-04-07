import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Plus } from "lucide-react";
import ArticleTable from "@/components/admin/ArticleTable";

export const metadata: Metadata = {
  title: "Actualités — Administration NSS",
};

interface ActualitesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminActualitesPage({ params }: ActualitesPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  const articles = await prisma.article.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      published: true,
      publishedAt: true,
      updatedAt: true,
    },
  });

  const published = articles.filter((a) => a.published).length;
  const drafts = articles.filter((a) => !a.published).length;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-neutral-800">Actualités</h1>
          <p className="text-neutral-500 text-sm mt-1">
            {published} publié{published > 1 ? "s" : ""} · {drafts} brouillon{drafts > 1 ? "s" : ""}
          </p>
        </div>
        <NewArticleButton locale={locale} />
      </div>

      {articles.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <p className="text-neutral-400 text-sm mb-4">Aucun article pour le moment.</p>
          <NewArticleButton locale={locale} />
        </div>
      ) : (
        <ArticleTable articles={articles} locale={locale} />
      )}
    </div>
  );
}

function NewArticleButton({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}/admin/actualites/nouveau`} className="btn btn-primary">
      <Plus size={15} /> Nouvel article
    </Link>
  );
}
