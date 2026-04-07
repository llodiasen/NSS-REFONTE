"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle } from "lucide-react";
import Alert from "@/components/ui/Alert";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name: z.string().min(2, "Nom requis"),
  organisation: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email("Email invalide"),
  sujet: z.enum(["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"]),
  message: z.string().min(20, "Message trop court (20 car. min)"),
  rgpd: z.literal(true, { message: "Vous devez accepter la politique de confidentialité." }),
});

type FormData = z.infer<typeof schema>;

const SUJETS = ["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"] as const;

const COUNTRIES = [
  "Bénin", "Burkina Faso", "Côte d'Ivoire", "Gambie", "Ghana",
  "Guinée", "Guinée-Bissau", "Mali", "Niger", "Sénégal", "Togo",
  "France", "Belgique", "Canada", "Suisse", "Autre",
];

const F = "w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 " +
  "placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 " +
  "focus:border-transparent transition-all duration-200 bg-white";

interface ContactFormProps {
  defaultSujet?: string;
}

export default function ContactForm({ defaultSujet }: ContactFormProps) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validSujet = SUJETS.includes(defaultSujet as (typeof SUJETS)[number])
    ? (defaultSujet as (typeof SUJETS)[number])
    : "Autre";

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: validSujet },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch("/api/contact/message", {
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
      <div className="text-center py-10 space-y-3">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <CheckCircle size={28} className="text-green-600" />
        </div>
        <h3 className="font-display font-bold text-neutral-800 text-lg">Message envoyé !</h3>
        <p className="text-neutral-500 text-sm max-w-xs mx-auto leading-relaxed">
          Nous avons bien reçu votre message. L&apos;équipe NSS vous répondra dans les meilleurs délais.
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
          <label htmlFor="organisation" className="block text-sm font-semibold text-neutral-700 mb-1">
            Organisation <span className="text-neutral-400 font-normal">(optionnel)</span>
          </label>
          <input id="organisation" type="text" {...register("organisation")} className={F} placeholder="ONG, association…" />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-1">
            Pays <span className="text-neutral-400 font-normal">(optionnel)</span>
          </label>
          <select id="country" {...register("country")} className={F}>
            <option value="">— Sélectionner —</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
          <input id="email" type="email" {...register("email")} className={F} placeholder="vous@exemple.com" />
          {errors.email && <p className="text-sm text-danger mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="sujet" className="block text-sm font-semibold text-neutral-700 mb-1">Objet</label>
          <select id="sujet" {...register("sujet")} className={F}>
            {SUJETS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.sujet && <p className="text-sm text-danger mt-1">{errors.sujet.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1">Message</label>
        <textarea id="message" rows={5} {...register("message")} className={`${F} resize-none`}
          placeholder="Votre message…" />
        {errors.message && <p className="text-sm text-danger mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register("rgpd")}
            className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 flex-shrink-0" />
          <span className="text-xs text-neutral-500 leading-relaxed">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément
            à la{" "}
            <a href="#" className="text-primary-700 hover:underline">politique de confidentialité</a>
            {" "}de NSS.
          </span>
        </label>
        {errors.rgpd && <p className="text-sm text-danger mt-1">{errors.rgpd.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {isSubmitting ? "Envoi en cours…" : "Envoyer votre message"}
      </button>
    </form>
  );
}
