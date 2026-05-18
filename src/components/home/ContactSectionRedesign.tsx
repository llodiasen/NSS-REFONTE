"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

/* ─── Schema ──────────────────────────────────────────────── */
const schema = z.object({
  firstName:    z.string().min(2, "Prénom requis"),
  name:         z.string().min(2, "Nom requis"),
  email:        z.string().email("Email invalide"),
  organisation: z.string().optional(),
  sujet:        z.enum(["adhesion", "partenariat", "presse", "don", "formation", "autre"]),
  message:      z.string().min(20, "20 caractères minimum").max(1000),
  rgpd:         z.literal(true, { message: "Requis" }),
});

type FormData = z.infer<typeof schema>;

const CHIPS: { value: FormData["sujet"]; label: string; icon: React.ReactNode }[] = [
  {
    value: "adhesion",
    label: "Adhésion AFR",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M3 21v-1a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v1"/>
      </svg>
    ),
  },
  {
    value: "partenariat",
    label: "Partenariat",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/>
      </svg>
    ),
  },
  {
    value: "presse",
    label: "Presse / Média",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="14" rx="2"/><path d="M7 10h10"/><path d="M7 14h6"/>
      </svg>
    ),
  },
  {
    value: "don",
    label: "Faire un don",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>
      </svg>
    ),
  },
  {
    value: "formation",
    label: "Formation CIFAP",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-9"/><path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7"/><path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5"/>
      </svg>
    ),
  },
  {
    value: "autre",
    label: "Autre",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .5-1.5 1.4-1.5 2.4"/>
        <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
];

const SUBJECTS_FR: Record<FormData["sujet"], string> = {
  adhesion:    "Adhésion d'une AFR au mouvement",
  partenariat: "Partenariat institutionnel",
  presse:      "Demande presse / média",
  don:         "Faire un don / soutenir",
  formation:   "Information sur les formations (CIFAP)",
  autre:       "Autre question",
};

/* ─── Composant ───────────────────────────────────────────── */
export default function ContactSectionRedesign() {
  const [success, setSuccess]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [charCount, setCharCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "adhesion" },
  });

  const activeSujet = watch("sujet");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    const res = await fetch("/api/contact/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setServerError((json as { error?: string }).error ?? "Une erreur est survenue.");
      return;
    }
    setSuccess(true);
  };

  return (
    <section className="ncf" ref={sectionRef} aria-labelledby="ncf-heading">

      {/* ── Section header ── */}
      <div className="ncf__head" data-part="head">
        <div className="ncf__surtitle">Nous écrire</div>
        <h2 id="ncf-heading" className="ncf__h2">
          Une question, un projet — <em>parlons-en.</em>
        </h2>
        <hr className="ncf__rule" aria-hidden="true" />
        <p className="ncf__lede">
          Adhésion, partenariat, presse ou simple curiosité — nous lisons chaque
          message et revenons vers vous sous 72 heures ouvrées.
        </p>
      </div>

      {/* ── Card ── */}
      <div className={`ncf__card${success ? " ncf__card--sent" : ""}`} data-part="card">

        {/* ── Form body ── */}
        {!success ? (
          <div className="ncf__body">
            {/* Subject chips */}
            <div className="ncf__chips" role="group" aria-label="Sujet du message">
              {CHIPS.map(({ value, label, icon }) => (
                <button
                  key={value}
                  type="button"
                  className={`ncf__chip${activeSujet === value ? " ncf__chip--active" : ""}`}
                  onClick={() => setValue("sujet", value)}
                  aria-pressed={activeSujet === value}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {serverError && (
              <p className="ncf__srv-err" role="alert">{serverError}</p>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="ncf__form"
              aria-label="Formulaire de contact NSS"
            >
              {/* Prénom + Nom */}
              <div className="ncf__field">
                <label htmlFor="ncf-fn">
                  Prénom <span className="ncf__req" aria-hidden="true">*</span>
                </label>
                <span className="ncf__field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
                  </svg>
                </span>
                <input
                  id="ncf-fn"
                  {...register("firstName")}
                  placeholder="Aminata"
                  className={errors.firstName ? "is-err" : ""}
                  aria-invalid={!!errors.firstName}
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <span className="ncf__err" role="alert">{errors.firstName.message}</span>
                )}
              </div>

              <div className="ncf__field">
                <label htmlFor="ncf-ln">
                  Nom <span className="ncf__req" aria-hidden="true">*</span>
                </label>
                <span className="ncf__field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
                  </svg>
                </span>
                <input
                  id="ncf-ln"
                  {...register("name")}
                  placeholder="Diop"
                  className={errors.name ? "is-err" : ""}
                  aria-invalid={!!errors.name}
                  autoComplete="family-name"
                />
                {errors.name && (
                  <span className="ncf__err" role="alert">{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="ncf__field">
                <label htmlFor="ncf-email">
                  Email <span className="ncf__req" aria-hidden="true">*</span>
                </label>
                <span className="ncf__field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/>
                  </svg>
                </span>
                <input
                  id="ncf-email"
                  {...register("email")}
                  type="email"
                  placeholder="vous@exemple.com"
                  className={errors.email ? "is-err" : ""}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="ncf__err" role="alert">{errors.email.message}</span>
                )}
              </div>

              {/* Organisation */}
              <div className="ncf__field">
                <label htmlFor="ncf-org">Organisation</label>
                <span className="ncf__field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="1"/><path d="M9 21V8m6 13V8"/><path d="M9 4h6v4H9z"/>
                  </svg>
                </span>
                <input
                  id="ncf-org"
                  {...register("organisation")}
                  placeholder="AFR · ONG · Presse…"
                  autoComplete="organization"
                />
              </div>

              {/* Sujet (full width) */}
              <div className="ncf__field ncf__field--full ncf__field--no-icon">
                <label htmlFor="ncf-sujet">
                  Sujet précis <span className="ncf__req" aria-hidden="true">*</span>
                </label>
                <select id="ncf-sujet" {...register("sujet")}>
                  {Object.entries(SUBJECTS_FR).map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Message (full width) */}
              <div className="ncf__field ncf__field--full ncf__field--no-icon ncf__field--rel">
                <label htmlFor="ncf-msg">
                  Votre message <span className="ncf__req" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="ncf-msg"
                  {...register("message", {
                    onChange: (e) => setCharCount(e.target.value.length),
                  })}
                  placeholder="Présentez-vous brièvement, puis expliquez votre demande ou votre projet."
                  maxLength={1000}
                  rows={5}
                  className={errors.message ? "is-err" : ""}
                  aria-invalid={!!errors.message}
                />
                <span className={`ncf__char${charCount > 900 ? " ncf__char--warn" : ""}`} aria-live="polite">
                  {charCount} / 1000
                </span>
                {errors.message && (
                  <span className="ncf__err" role="alert">{errors.message.message}</span>
                )}
              </div>

              {/* Consent (full width) */}
              <div className="ncf__consent">
                <input
                  type="checkbox"
                  id="ncf-rgpd"
                  {...register("rgpd")}
                  aria-invalid={!!errors.rgpd}
                />
                <label htmlFor="ncf-rgpd">
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande,
                  conformément à la <a href="/politique-confidentialite">politique de confidentialité</a> NSS.
                  Aucune donnée n&apos;est partagée avec des tiers.
                </label>
              </div>
              {errors.rgpd && (
                <span className="ncf__err ncf__err--full" role="alert">{errors.rgpd.message}</span>
              )}

              {/* Submit row (full width) */}
              <div className="ncf__submit-row">
                <div className="ncf__submit-note">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Vos données restent confidentielles · jamais transmises à des tiers
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ncf__btn-submit"
                  aria-label={isSubmitting ? "Envoi en cours" : "Envoyer le message"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="ncf__spin" aria-hidden="true" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* ── Success ── */
          <div className="ncf__success" role="status" aria-live="polite">
            <div className="ncf__success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h4 className="ncf__success-title">
              Message envoyé, <em>merci !</em>
            </h4>
            <p className="ncf__success-body">
              Nous avons bien reçu votre message. Notre équipe vous répondra
              dans les 72 heures ouvrées.
            </p>
          </div>
        )}

        {/* ── Card footer ── */}
        {!success && (
          <div className="ncf__foot">
            <div className="ncf__foot-tag">
              «&nbsp;Par nous-mêmes. <strong>Pour nous-mêmes.</strong> En nous-mêmes.&nbsp;»
            </div>
            <div className="ncf__foot-socials">
              <span className="ncf__foot-lbl">Suivez-nous</span>
              <a className="ncf__social-btn" href="https://www.facebook.com/wasafrica/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a className="ncf__social-btn" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a className="ncf__social-btn" href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 5 12 5 12 5s-4 0-7.1.1c-.4 0-1.3 0-2.1.9C2.2 6.6 2 8 2 8S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.9.8 2.4.9C7 19 12 19 12 19s4 0 7.1-.1c.4 0 1.3 0 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 22 8 22 8z"/>
                  <polygon points="10 9 16 12 10 15 10 9"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ncf styles live in HomepageV2.css */}
    </section>
  );
}
