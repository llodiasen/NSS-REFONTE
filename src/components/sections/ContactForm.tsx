"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Loader2, CheckCircle, User, Mail, Building2,
  Users, Handshake, Newspaper, Heart, Sprout, HelpCircle,
} from "lucide-react";

/* ── Catégories ── */
const CATEGORIES = [
  { id: "adhesion",    label: "Adhésion AFR",     Icon: Users      },
  { id: "partenariat", label: "Partenariat",       Icon: Handshake  },
  { id: "presse",      label: "Presse / Média",    Icon: Newspaper  },
  { id: "don",         label: "Faire un don",      Icon: Heart      },
  { id: "cifap",       label: "Formation CIFAP",   Icon: Sprout     },
  { id: "autre",       label: "Autre",             Icon: HelpCircle },
] as const;

type CatId = (typeof CATEGORIES)[number]["id"];

const SUJETS: Record<CatId, string[]> = {
  adhesion:    ["Adhésion d'une AFR au mouvement", "Renouvellement d'adhésion", "Renseignements sur l'adhésion"],
  partenariat: ["Partenariat institutionnel", "Partenariat technique", "Partenariat financier"],
  presse:      ["Demande d'interview", "Demande de visuels", "Accès au dossier de presse"],
  don:         ["Don ponctuel", "Don régulier", "Mécénat d'entreprise"],
  cifap:       ["Candidature CIFAP 2025", "Renseignements sur la formation", "Partenariat CIFAP"],
  autre:       ["Autre demande"],
};

/* ── Schéma ── */
const schema = z.object({
  firstName:    z.string().min(2, "Prénom requis"),
  name:         z.string().min(2, "Nom requis"),
  email:        z.string().email("Email invalide"),
  organisation: z.string().optional(),
  sujet:        z.string().min(2, "Sujet requis"),
  message:      z.string().min(20, "Message trop court (20 car. min)"),
  rgpd:         z.literal(true, { message: "Vous devez accepter la politique de confidentialité." }),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  defaultSujet?: string;
}

/* ── Styles partagés ── */
const BASE =
  "w-full bg-white border border-[#e5e7eb] rounded-xl text-sm text-neutral-800 " +
  "placeholder-[#b0b7c3] focus:outline-none focus:border-[#00AD4C] transition-colors duration-200";

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pointer-events-none text-[#b0b7c3]">
      {children}
    </div>
  );
}

export default function ContactForm({ defaultSujet: _defaultSujet }: ContactFormProps) {
  const [cat, setCat]       = useState<CatId>("adhesion");
  const [success, setSuccess] = useState(false);
  const [error, setError]   = useState<string | null>(null);

  const sujets = SUJETS[cat];

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: { sujet: sujets[0] },
    });

  const handleCat = (id: CatId) => {
    setCat(id);
    setValue("sujet", SUJETS[id][0]);
  };

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
      <div className="text-center py-12 space-y-4">
        <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto">
          <CheckCircle size={26} className="text-[#00AD4C]" />
        </div>
        <h3 className="font-semibold text-neutral-800 text-lg">Message envoyé !</h3>
        <p className="text-neutral-500 text-sm max-w-xs mx-auto leading-relaxed">
          Nous avons bien reçu votre message et revenons vers vous sous 72 heures ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* ── Catégories ── */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(({ id, label, Icon }) => {
          const active = cat === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleCat(id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 border"
              style={active
                ? { background: "#045627", color: "#fff", borderColor: "#045627" }
                : { background: "#fff", color: "#374151", borderColor: "#e5e7eb" }
              }
            >
              <Icon size={14} />
              {label}
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      {/* ── Prénom / Nom ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Prénom <span className="text-[#00AD4C]">*</span>
          </label>
          <div className="relative">
            <FieldIcon><User size={15} /></FieldIcon>
            <input
              type="text"
              {...register("firstName")}
              className={`${BASE} pl-9 pr-4 py-3`}
              placeholder="Aminata"
            />
          </div>
          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Nom <span className="text-[#00AD4C]">*</span>
          </label>
          <div className="relative">
            <FieldIcon><User size={15} /></FieldIcon>
            <input
              type="text"
              {...register("name")}
              className={`${BASE} pl-9 pr-4 py-3`}
              placeholder="Diop"
            />
          </div>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
      </div>

      {/* ── Email / Organisation ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Email <span className="text-[#00AD4C]">*</span>
          </label>
          <div className="relative">
            <FieldIcon><Mail size={15} /></FieldIcon>
            <input
              type="email"
              {...register("email")}
              className={`${BASE} pl-9 pr-4 py-3`}
              placeholder="vous@exemple.com"
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Organisation
          </label>
          <div className="relative">
            <FieldIcon><Building2 size={15} /></FieldIcon>
            <input
              type="text"
              {...register("organisation")}
              className={`${BASE} pl-9 pr-4 py-3`}
              placeholder="AFR · ONG · Presse…"
            />
          </div>
        </div>
      </div>

      {/* ── Sujet précis ── */}
      <div>
        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Sujet précis <span className="text-[#00AD4C]">*</span>
        </label>
        <select
          {...register("sujet")}
          className={`${BASE} px-4 py-3 appearance-none cursor-pointer`}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23b0b7c3' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
        >
          {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.sujet && <p className="text-xs text-red-500 mt-1">{errors.sujet.message}</p>}
      </div>

      {/* ── Message ── */}
      <div>
        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Votre message <span className="text-[#00AD4C]">*</span>
        </label>
        <textarea
          rows={5}
          {...register("message")}
          className={`${BASE} px-4 py-3 resize-none`}
          placeholder="Présentez-vous brièvement, puis expliquez votre demande ou votre projet."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* ── RGPD ── */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("rgpd")}
          className="mt-0.5 w-4 h-4 rounded border-neutral-300 accent-[#00AD4C] flex-shrink-0"
        />
        <span className="text-xs text-neutral-500 leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
          <a href="#" className="text-[#045627] hover:underline">politique de confidentialité</a> de NSS.
        </span>
      </label>
      {errors.rgpd && <p className="text-xs text-red-500">{errors.rgpd.message}</p>}

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white transition-colors duration-200"
        style={{ background: isSubmitting ? "#045627cc" : "#045627" }}
      >
        {isSubmitting
          ? <><Loader2 size={16} className="animate-spin" /> Envoi en cours…</>
          : "Envoyer votre message"
        }
      </button>
    </form>
  );
}
