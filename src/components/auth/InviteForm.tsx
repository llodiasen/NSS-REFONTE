"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { activateAccountSchema, type ActivateAccountInput } from "@/lib/validations/auth";
import Alert from "@/components/ui/Alert";
import Badge from "@/components/ui/Badge";
import type { Role } from "@prisma/client";

interface InviteFormProps {
  token: string;
  email: string;
  role: Role;
  locale: string;
}

const FIELD_CLASS =
  "w-full border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none " +
  "focus:ring-2 focus:ring-primary-500 focus:border-transparent " +
  "text-neutral-800 placeholder-neutral-400 transition-all duration-200";

export default function InviteForm({ token, email, role, locale }: InviteFormProps) {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ActivateAccountInput>({
    resolver: zodResolver(activateAccountSchema),
    defaultValues: { token, confirmPassword: "" },
  });

  const onSubmit = async (data: ActivateAccountInput) => {
    setError(null);
    const res = await fetch("/api/invitations/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }

    router.push(`/${locale}/login?activated=1`);
  };

  const roleVariant = role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {error && <Alert variant="error" message={error} onClose={() => setError(null)} />}

      {/* Rôle assigné */}
      <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
        <span className="text-sm text-neutral-500 font-medium">Rôle assigné</span>
        <Badge variant={roleVariant}>{role}</Badge>
      </div>

      {/* Email (lecture seule) */}
      <div>
        <label className="block text-sm font-semibold text-neutral-800 mb-1">
          Adresse email
        </label>
        <input
          type="email"
          value={email}
          readOnly
          className={`${FIELD_CLASS} bg-neutral-50 text-neutral-500 cursor-not-allowed`}
        />
        <input type="hidden" {...register("token")} />
      </div>

      {/* Prénom */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-800 mb-1">
          Prénom
        </label>
        <input id="firstName" type="text" autoComplete="given-name"
          {...register("firstName")} className={FIELD_CLASS} placeholder="Mariama" />
        {errors.firstName && <p className="text-sm text-danger mt-1">{errors.firstName.message}</p>}
      </div>

      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-1">
          Nom de famille
        </label>
        <input id="name" type="text" autoComplete="family-name"
          {...register("name")} className={FIELD_CLASS} placeholder="Sonko" />
        {errors.name && <p className="text-sm text-danger mt-1">{errors.name.message}</p>}
      </div>

      {/* Mot de passe */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-neutral-800 mb-1">
          Mot de passe
        </label>
        <div className="relative">
          <input id="password" type={showPwd ? "text" : "password"} autoComplete="new-password"
            {...register("password")} className={`${FIELD_CLASS} pr-11`} placeholder="••••••••" />
          <button type="button" onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            aria-label={showPwd ? "Masquer" : "Afficher"}>
            {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-sm text-danger mt-1">{errors.password.message}</p>}
        <p className="text-xs text-neutral-400 mt-1">Minimum 8 caractères, 1 majuscule, 1 chiffre</p>
      </div>

      {/* Confirmer mot de passe */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-neutral-800 mb-1">
          Confirmer le mot de passe
        </label>
        <div className="relative">
          <input id="confirmPassword" type={showConfirm ? "text" : "password"} autoComplete="new-password"
            {...register("confirmPassword")} className={`${FIELD_CLASS} pr-11`} placeholder="••••••••" />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            aria-label={showConfirm ? "Masquer" : "Afficher"}>
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-sm text-danger mt-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* Submit */}
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Activation…" : "Activer mon compte"}
      </button>
    </form>
  );
}
