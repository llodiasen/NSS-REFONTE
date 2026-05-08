"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Save } from "lucide-react";
import Alert from "@/components/ui/Alert";

const schema = z.object({
  title: z.string().min(3, "Titre requis"),
  slug: z.string().min(3, "Slug requis").regex(/^[a-z0-9-]+$/, "Minuscules, chiffres et tirets uniquement"),
  excerpt: z.string().max(300).optional(),
  content: z.string().min(1, "Contenu requis"),
  coverUrl: z.string().url("URL invalide").optional().or(z.literal("")),
  published: z.boolean(),
});

type FormData = z.infer<typeof schema>;

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

export default function NouvelArticlePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { published: false },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch("/api/admin/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur lors de la création.");
      return;
    }
    const json = await res.json();
    router.push(`./actualites/${json.article.id}`);
  };

  const FIELD = "w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm " +
    "text-neutral-800 placeholder-neutral-400 focus:outline-none " +
    "focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200";

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">Nouvel article</h1>
        <p className="text-neutral-500 text-sm mt-1">Créez un nouvel article pour les actualités NSS.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {error && <Alert variant="error" message={error} onClose={() => setError(null)} />}

          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-neutral-700 mb-1">Titre</label>
            <input id="title" type="text" {...register("title", {
              onChange: (e) => setValue("slug", slugify(e.target.value), { shouldDirty: true }),
            })} className={FIELD} placeholder="Titre de l'article" />
            {errors.title && <p className="text-sm text-danger mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-semibold text-neutral-700 mb-1">Slug</label>
            <input id="slug" type="text" {...register("slug")} className={FIELD} placeholder="mon-article" />
            {errors.slug && <p className="text-sm text-danger mt-1">{errors.slug.message}</p>}
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-semibold text-neutral-700 mb-1">
              Extrait <span className="text-neutral-400 font-normal">(optionnel)</span>
            </label>
            <textarea id="excerpt" rows={2} {...register("excerpt")} className={`${FIELD} resize-none`}
              placeholder="Courte description…" />
            {errors.excerpt && <p className="text-sm text-danger mt-1">{errors.excerpt.message}</p>}
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-neutral-700 mb-1">Contenu</label>
            <textarea id="content" rows={10} {...register("content")} className={`${FIELD} resize-y`}
              placeholder="Contenu de l'article…" />
            {errors.content && <p className="text-sm text-danger mt-1">{errors.content.message}</p>}
          </div>

          <div>
            <label htmlFor="coverUrl" className="block text-sm font-semibold text-neutral-700 mb-1">
              URL image de couverture <span className="text-neutral-400 font-normal">(optionnel)</span>
            </label>
            <input id="coverUrl" type="url" {...register("coverUrl")} className={FIELD} placeholder="https://…" />
            {errors.coverUrl && <p className="text-sm text-danger mt-1">{errors.coverUrl.message}</p>}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-neutral-100 flex-wrap gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" {...register("published")}
                className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
              <span className="text-sm font-semibold text-neutral-700">Publier immédiatement</span>
            </label>
            <div className="flex gap-3">
              <button type="button" onClick={() => router.back()} className="btn btn-secondary text-neutral-700">
                Annuler
              </button>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                {isSubmitting ? "Création…" : "Créer l'article"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
