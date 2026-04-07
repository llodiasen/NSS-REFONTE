"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { profileSchema, type ProfileInput } from "@/lib/validations/auth";
import Alert from "@/components/ui/Alert";

const COUNTRIES = [
  "Bénin", "Burkina Faso", "Cameroun", "Côte d'Ivoire", "Gambie",
  "Ghana", "Guinée", "Guinée-Bissau", "Mali", "Mauritanie",
  "Niger", "Nigéria", "Sénégal", "Sierra Leone", "Togo",
  "France", "Belgique", "Canada", "Autre",
];

const FIELD_CLASS =
  "w-full border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none " +
  "focus:ring-2 focus:ring-primary-500 focus:border-transparent " +
  "text-neutral-800 placeholder-neutral-400 transition-all duration-200";

interface ProfileFormProps {
  defaultValues: ProfileInput;
}

export default function ProfileForm({ defaultValues }: ProfileFormProps) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  const onSubmit = async (data: ProfileInput) => {
    setError(null);
    setSuccess(false);

    const res = await fetch("/api/membres/profil", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }

    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {success && (
        <Alert
          variant="success"
          message="Profil mis à jour avec succès."
          onClose={() => setSuccess(false)}
        />
      )}
      {error && (
        <Alert variant="error" message={error} onClose={() => setError(null)} />
      )}

      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-800 mb-1">
            Prénom
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            {...register("firstName")}
            className={FIELD_CLASS}
            placeholder="Mariama"
          />
          {errors.firstName && (
            <p className="text-sm text-danger mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-1">
            Nom de famille
          </label>
          <input
            id="name"
            type="text"
            autoComplete="family-name"
            {...register("name")}
            className={FIELD_CLASS}
            placeholder="Sonko"
          />
          {errors.name && (
            <p className="text-sm text-danger mt-1">{errors.name.message}</p>
          )}
        </div>
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organisation" className="block text-sm font-semibold text-neutral-800 mb-1">
          Organisation / Association
          <span className="text-neutral-400 font-normal ml-1">(optionnel)</span>
        </label>
        <input
          id="organisation"
          type="text"
          {...register("organisation")}
          className={FIELD_CLASS}
          placeholder="AFR de Thiès"
        />
        {errors.organisation && (
          <p className="text-sm text-danger mt-1">{errors.organisation.message}</p>
        )}
      </div>

      {/* Pays */}
      <div>
        <label htmlFor="country" className="block text-sm font-semibold text-neutral-800 mb-1">
          Pays
          <span className="text-neutral-400 font-normal ml-1">(optionnel)</span>
        </label>
        <select
          id="country"
          {...register("country")}
          className={FIELD_CLASS}
        >
          <option value="">— Sélectionner un pays —</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.country && (
          <p className="text-sm text-danger mt-1">{errors.country.message}</p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label htmlFor="bio" className="block text-sm font-semibold text-neutral-800 mb-1">
          Bio
          <span className="text-neutral-400 font-normal ml-1">(optionnel, 500 car. max)</span>
        </label>
        <textarea
          id="bio"
          rows={4}
          {...register("bio")}
          className={`${FIELD_CLASS} resize-none`}
          placeholder="Présentez-vous en quelques mots…"
        />
        {errors.bio && (
          <p className="text-sm text-danger mt-1">{errors.bio.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isDirty}
        className="btn btn-primary w-full"
      >
        {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Enregistrement…" : "Enregistrer les modifications"}
      </button>
    </form>
  );
}
