import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ArticleEditor from "@/components/admin/ArticleEditor";

export const metadata: Metadata = {
  title: "Modifier l'article — Administration NSS",
};

interface ArticleEditPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ArticleEditPage({ params }: ArticleEditPageProps) {
  const { locale, id } = await params;
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  const article = await prisma.article.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      excerpt: true,
      coverUrl: true,
      published: true,
    },
  });

  if (!article) notFound();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">Modifier l&apos;article</h1>
        <p className="text-neutral-500 text-sm mt-1 font-mono">{article.slug}</p>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-6">
        <ArticleEditor article={article} locale={locale} />
      </div>
    </div>
  );
}
