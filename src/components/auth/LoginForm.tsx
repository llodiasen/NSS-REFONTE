"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import Alert from "@/components/ui/Alert";

interface LoginFormProps {
  locale: string;
}

export default function LoginForm({ locale }: LoginFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setError(null);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    router.push(`/${locale}/membre/dashboard`);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {error && (
        <Alert variant="error" message={error} onClose={() => setError(null)} />
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-1">
          Adresse email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="w-full border border-neutral-200 rounded-xl px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     text-neutral-800 placeholder-neutral-400 transition-all duration-200
                     aria-invalid:border-danger aria-invalid:focus:ring-danger"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="vous@exemple.com"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-danger mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Mot de passe */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-neutral-800 mb-1">
          Mot de passe
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            className="w-full border border-neutral-200 rounded-xl px-4 py-3 pr-11
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       text-neutral-800 placeholder-neutral-400 transition-all duration-200
                       aria-invalid:border-danger"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400
                       hover:text-neutral-600 transition-colors"
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="text-sm text-danger mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
