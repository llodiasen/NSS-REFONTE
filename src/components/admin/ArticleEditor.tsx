"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Eye, Save } from "lucide-react";
import Alert from "@/components/ui/Alert";

const articleSchema = z.object({
  title: z.string().min(3, "Titre requis"),
  slug: z.string().min(3, "Slug requis").regex(/^[a-z0-9-]+$/, "Minuscules, chiffres et tirets uniquement"),
  excerpt: z.string().max(300, "300 caractères maximum").optional(),
  content: z.string().min(1, "Contenu requis"),
  coverUrl: z.string().url("URL invalide").optional().or(z.literal("")),
  published: z.boolean(),
});

type ArticleFormData = z.infer<typeof articleSchema>;

interface ArticleEditorProps {
  article: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    coverUrl: string | null;
    published: boolean;
  };
  locale: string;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ArticleEditor({ article, locale }: ArticleEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt ?? "",
      content: article.content,
      coverUrl: article.coverUrl ?? "",
      published: article.published,
    },
  });

  const contentValue = watch("content");

  const onSubmit = async (data: ArticleFormData) => {
    setError(null);
    setSuccess(null);
    const res = await fetch(`/api/admin/articles/${article.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur lors de la sauvegarde.");
      return;
    }
    setSuccess("Article sauvegardé avec succès.");
    startTransition(() => router.refresh());
  };

  const FIELD = "w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm " +
    "text-neutral-800 placeholder-neutral-400 focus:outline-none " +
    "focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {success && <Alert variant="success" message={success} onClose={() => setSuccess(null)} />}
      {error && <Alert variant="error" message={error} onClose={() => setError(null)} />}

      {/* Titre */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-neutral-700 mb-1">Titre</label>
        <input
          id="title"
          type="text"
          {...register("title", {
            onChange: (e) => setValue("slug", slugify(e.target.value), { shouldDirty: true }),
          })}
          className={FIELD}
          placeholder="Titre de l'article"
        />
        {errors.title && <p className="text-sm text-danger mt-1">{errors.title.message}</p>}
      </div>

      {/* Slug */}
      <div>
        <label htmlFor="slug" className="block text-sm font-semibold text-neutral-700 mb-1">
          Slug <span className="text-neutral-400 font-normal">(URL)</span>
        </label>
        <input id="slug" type="text" {...register("slug")} className={FIELD} placeholder="mon-article" />
        {errors.slug && <p className="text-sm text-danger mt-1">{errors.slug.message}</p>}
      </div>

      {/* Extrait */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-semibold text-neutral-700 mb-1">
          Extrait <span className="text-neutral-400 font-normal">(optionnel, 300 car. max)</span>
        </label>
        <textarea id="excerpt" rows={2} {...register("excerpt")} className={`${FIELD} resize-none`}
          placeholder="Courte description pour les listes et les moteurs de recherche" />
        {errors.excerpt && <p className="text-sm text-danger mt-1">{errors.excerpt.message}</p>}
      </div>

      {/* Contenu */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="content" className="block text-sm font-semibold text-neutral-700">Contenu</label>
          <button type="button" onClick={() => setPreview(!preview)}
            className="flex items-center gap-1 text-xs text-primary-700 hover:text-primary-500 transition-colors">
            <Eye size={13} /> {preview ? "Éditer" : "Aperçu"}
          </button>
        </div>
        {preview ? (
          <div className="border border-neutral-200 rounded-xl px-4 py-4 min-h-[200px] prose prose-sm max-w-none bg-neutral-50">
            <pre className="whitespace-pre-wrap text-sm text-neutral-700 font-sans">{contentValue}</pre>
          </div>
        ) : (
          <textarea id="content" rows={12} {...register("content")} className={`${FIELD} resize-y`}
            placeholder="Contenu de l'article (Markdown ou texte brut)" />
        )}
        {errors.content && <p className="text-sm text-danger mt-1">{errors.content.message}</p>}
      </div>

      {/* Image couverture */}
      <div>
        <label htmlFor="coverUrl" className="block text-sm font-semibold text-neutral-700 mb-1">
          URL image de couverture <span className="text-neutral-400 font-normal">(optionnel)</span>
        </label>
        <input id="coverUrl" type="url" {...register("coverUrl")} className={FIELD}
          placeholder="https://..." />
        {errors.coverUrl && <p className="text-sm text-danger mt-1">{errors.coverUrl.message}</p>}
      </div>

      {/* Statut + bouton */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100 gap-4 flex-wrap">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("published")}
            className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
          <span className="text-sm font-semibold text-neutral-700">Publier l&apos;article</span>
        </label>

        <div className="flex gap-3">
          <button type="button" onClick={() => router.push(`/${locale}/admin/actualites`)} className="btn btn-secondary text-neutral-700">
            Retour
          </button>
          <button type="submit" disabled={isSubmitting || !isDirty || isPending} className="btn btn-primary">
            {(isSubmitting || isPending) ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {isSubmitting ? "Sauvegarde…" : "Sauvegarder"}
          </button>
        </div>
      </div>
    </form>
  );
}
