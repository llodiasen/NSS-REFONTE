"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import Alert from "@/components/ui/Alert";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  country: z.string().min(1, "Pays requis"),
  organisation: z.string().optional(),
  type: z.enum(["individuel", "organisation"]),
  motivations: z.string().min(20, "Merci de détailler vos motivations (20 car. min)"),
});

type FormData = z.infer<typeof schema>;

const COUNTRIES = [
  "Bénin", "Burkina Faso", "Cameroun", "Côte d'Ivoire", "Gambie",
  "Ghana", "Guinée", "Guinée-Bissau", "Mali", "Mauritanie",
  "Niger", "Nigéria", "Sénégal", "Sierra Leone", "Togo",
  "France", "Belgique", "Canada", "Suisse", "Autre",
];

const F = "w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 " +
  "placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 " +
  "focus:border-transparent transition-all duration-200";

export default function RejoindreForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: "individuel" },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch("/api/contact/rejoindre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <Send size={24} className="text-green-600" />
        </div>
        <h3 className="font-display font-bold text-neutral-800 text-lg">Demande envoyée !</h3>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mx-auto">
          L&apos;équipe NSS a bien reçu votre demande d&apos;adhésion. Nous vous contacterons
          dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {error && <Alert variant="error" message={error} onClose={() => setError(null)} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-1">Prénom</label>
          <input id="firstName" type="text" {...register("firstName")} className={F} placeholder="Mariama" />
          {errors.firstName && <p className="text-sm text-danger mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">Nom</label>
          <input id="name" type="text" {...register("name")} className={F} placeholder="Sonko" />
          {errors.name && <p className="text-sm text-danger mt-1">{errors.name.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
          <input id="email" type="email" {...register("email")} className={F} placeholder="vous@exemple.com" />
          {errors.email && <p className="text-sm text-danger mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1">
            Téléphone <span className="text-neutral-400 font-normal">(optionnel)</span>
          </label>
          <input id="phone" type="tel" {...register("phone")} className={F} placeholder="+221 7X XXX XX XX" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-1">Pays</label>
          <select id="country" {...register("country")} className={F}>
            <option value="">— Sélectionner —</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="text-sm text-danger mt-1">{errors.country.message}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-semibold text-neutral-700 mb-1">
            Organisation <span className="text-neutral-400 font-normal">(optionnel)</span>
          </label>
          <input id="organisation" type="text" {...register("organisation")} className={F} placeholder="Association, ONG…" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-neutral-700 mb-2">Type d&apos;adhésion</label>
        <div className="flex gap-4">
          {[
            { value: "individuel", label: "Individuel·le" },
            { value: "organisation", label: "Organisation" },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value={value} {...register("type")}
                className="text-primary-600 focus:ring-primary-500" />
              <span className="text-sm text-neutral-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="motivations" className="block text-sm font-semibold text-neutral-700 mb-1">
          Vos motivations
        </label>
        <textarea id="motivations" rows={4} {...register("motivations")}
          className={`${F} resize-none`}
          placeholder="Pourquoi souhaitez-vous rejoindre le mouvement NSS ?" />
        {errors.motivations && <p className="text-sm text-danger mt-1">{errors.motivations.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande d'adhésion"}
      </button>
    </form>
  );
}
