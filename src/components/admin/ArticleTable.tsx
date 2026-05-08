"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Eye, EyeOff, Trash2, Loader2 } from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  publishedAt: Date | null;
  updatedAt: Date;
}

interface ArticleTableProps {
  articles: Article[];
  locale: string;
}

export default function ArticleTable({ articles, locale }: ArticleTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  const togglePublish = async (article: Article) => {
    setLoadingId(article.id);
    setError(null);
    const res = await fetch(`/api/admin/articles/${article.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !article.published }),
    });
    setLoadingId(null);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur.");
      return;
    }
    startTransition(() => router.refresh());
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setLoadingId(deleteTarget.id);
    setError(null);
    const res = await fetch(`/api/admin/articles/${deleteTarget.id}`, { method: "DELETE" });
    setLoadingId(null);
    setDeleteTarget(null);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur.");
      return;
    }
    startTransition(() => router.refresh());
  };

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-4">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Titre</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Statut</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Modifié le</th>
                <th className="text-right px-4 py-3 font-semibold text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {articles.map((article) => {
                const isLoading = (loadingId === article.id) || isPending;
                return (
                  <tr key={article.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-neutral-800 line-clamp-1">{article.title}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{article.slug}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                        article.published
                          ? "bg-green-100 text-green-700"
                          : "bg-neutral-100 text-neutral-500"
                      }`}>
                        {article.published ? "Publié" : "Brouillon"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-400 text-xs whitespace-nowrap">
                      {new Date(article.updatedAt).toLocaleDateString("fr-FR", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {isLoading && loadingId === article.id ? (
                          <Loader2 size={16} className="animate-spin text-neutral-400" />
                        ) : (
                          <>
                            <Link
                              href={`/${locale}/admin/actualites/${article.id}`}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                              title="Modifier"
                            >
                              <Pencil size={15} />
                            </Link>
                            <button
                              onClick={() => togglePublish(article)}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-earth-700 hover:bg-earth-50 transition-colors"
                              title={article.published ? "Dépublier" : "Publier"}
                            >
                              {article.published ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                            <button
                              onClick={() => setDeleteTarget(article)}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-danger hover:bg-red-50 transition-colors"
                              title="Supprimer"
                            >
                              <Trash2 size={15} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <h3 className="font-display font-bold text-neutral-800 text-lg mb-2">
              Supprimer l&apos;article ?
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              <strong>&quot;{deleteTarget.title}&quot;</strong> sera supprimé définitivement.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="btn btn-secondary text-neutral-700 flex-1">
                Annuler
              </button>
              <button
                onClick={handleDelete}
                disabled={loadingId === deleteTarget.id}
                className="btn flex-1 bg-danger text-white"
              >
                {loadingId === deleteTarget.id && <Loader2 size={14} className="animate-spin" />}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
