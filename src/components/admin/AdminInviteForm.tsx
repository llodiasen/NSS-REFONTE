"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { invitationSchema, type InvitationInput } from "@/lib/validations/auth";
import Alert from "@/components/ui/Alert";

const FIELD_CLASS =
  "w-full border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none " +
  "focus:ring-2 focus:ring-primary-500 focus:border-transparent " +
  "text-neutral-800 placeholder-neutral-400 transition-all duration-200 bg-white";

export default function AdminInviteForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvitationInput>({
    resolver: zodResolver(invitationSchema),
    defaultValues: { role: "MEMBRE" },
  });

  const onSubmit = async (data: InvitationInput) => {
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/invitations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }

    if (json.warning) {
      setSuccess(`Invitation créée pour ${data.email}. Attention : ${json.warning}`);
    } else {
      setSuccess(`Invitation envoyée avec succès à ${data.email}.`);
    }

    reset();
    startTransition(() => router.refresh());
  };

  const isLoading = isSubmitting || isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {success && (
        <Alert variant="success" message={success} onClose={() => setSuccess(null)} />
      )}
      {error && (
        <Alert variant="error" message={error} onClose={() => setError(null)} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="invite-email" className="block text-sm font-semibold text-neutral-700 mb-1">
            Adresse email
          </label>
          <input
            id="invite-email"
            type="email"
            autoComplete="off"
            {...register("email")}
            className={FIELD_CLASS}
            placeholder="membre@exemple.com"
          />
          {errors.email && (
            <p className="text-sm text-danger mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Rôle */}
        <div>
          <label htmlFor="invite-role" className="block text-sm font-semibold text-neutral-700 mb-1">
            Rôle
          </label>
          <select id="invite-role" {...register("role")} className={FIELD_CLASS}>
            <option value="MEMBRE">Membre</option>
            <option value="PARTENAIRE">Partenaire</option>
          </select>
          {errors.role && (
            <p className="text-sm text-danger mt-1">{errors.role.message}</p>
          )}
        </div>
      </div>

      <button type="submit" disabled={isLoading} className="btn btn-primary">
        {isLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {isLoading ? "Envoi…" : "Envoyer l'invitation"}
      </button>
    </form>
  );
}
