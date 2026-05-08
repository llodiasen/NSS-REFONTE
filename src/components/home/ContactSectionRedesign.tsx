"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

/* ─── Validation ──────────────────────────────────────────── */
const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name:      z.string().min(2, "Nom requis"),
  email:     z.string().email("Email invalide"),
  sujet:     z.enum(["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"]),
  message:   z.string().min(20, "20 caractères minimum"),
  rgpd:      z.literal(true, { message: "Requis" }),
});

type FormData = z.infer<typeof schema>;

/* ─── Données ─────────────────────────────────────────────── */
const INFOS: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
}[] = [
  { Icon: Mail,   label: "Email",        value: "contact@wasafrica.org",                          href: "mailto:contact@wasafrica.org" },
  { Icon: Phone,  label: "Téléphone",    value: "+221 33 867 59 11 / +221 77 647 02 31",          href: "tel:+221338675911" },
  { Icon: MapPin, label: "Siège social", value: "Sicap Foire, Lot n°17, Zone C, Dakar, Sénégal", href: null },
];

const SUJETS = ["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"] as const;

/* ─── Composant ───────────────────────────────────────────── */
export default function ContactSectionRedesign() {
  const [success, setSuccess]         = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "Autre" },
  });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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
      const json = await res.json();
      setServerError(json.error ?? "Une erreur est survenue.");
      return;
    }
    setSuccess(true);
  };

  return (
    <section className="csr" aria-labelledby="csr-heading">

      <div className="csr__wrap" ref={wrapRef}>

        {/* ════ COLONNE GAUCHE ════════════════════════════════ */}
        <div className="csr__left">

          {/* Eyebrow */}
          <div className="csr__eyebrow" aria-hidden="true">
            <span className="csr__ey-bar" />
            <span className="csr__ey-txt">Nous contacter</span>
          </div>

          <h2 id="csr-heading" className="csr__h2">
            Une question ?{" "}<em>Écrivez-nous.</em>
          </h2>

          <p className="csr__sub">
            Notre équipe répond à toutes vos demandes —&nbsp;adhésion,
            partenariat, programmes ou questions générales.
          </p>

          <div className="csr__rule" aria-hidden="true" />

          {/* Infos de contact */}
          <ul className="csr__infos" role="list" aria-label="Coordonnées de contact NSS">
            {INFOS.map(({ Icon, label, value, href }, i) => (
              <li key={label} className="csr__info">
                <span className="csr__info-icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={1.6} />
                </span>
                <div className="csr__info-body">
                  <span className="csr__info-lbl">{label}</span>
                  {href ? (
                    <a href={href} className="csr__info-val csr__info-a">{value}</a>
                  ) : (
                    <span className="csr__info-val">{value}</span>
                  )}
                </div>
                {i < INFOS.length - 1 && (
                  <span className="csr__info-sep" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>

          <p className="csr__online">
            <span className="csr__dot" aria-hidden="true" />
            Équipe disponible — Réponse sous&nbsp;48h
          </p>
        </div>

        {/* ════ COLONNE DROITE ════════════════════════════════ */}
        <div className="csr__right">
          <div className="csr__card">

            {success ? (
              <div className="csr__ok" role="status" aria-live="polite">
                <div className="csr__ok-ring" aria-hidden="true">
                  <CheckCircle2 size={26} strokeWidth={1.5} />
                </div>
                <h3 className="csr__ok-title">Message envoyé !</h3>
                <p className="csr__ok-body">
                  Nous avons bien reçu votre message et vous répondrons dans les 48h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="csr__form"
                aria-label="Formulaire de contact NSS"
              >
                {serverError && (
                  <p className="csr__srv-err" role="alert">{serverError}</p>
                )}

                {/* Prénom + Nom */}
                <div className="csr__duo">
                  <div className="csr__f">
                    <label className="csr__lbl" htmlFor="csr-fn">Prénom</label>
                    <input
                      id="csr-fn"
                      {...register("firstName")}
                      placeholder="Mariama"
                      className={`csr__inp${errors.firstName ? " csr__inp--err" : ""}`}
                      aria-invalid={!!errors.firstName}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <span className="csr__err" role="alert">{errors.firstName.message}</span>
                    )}
                  </div>
                  <div className="csr__f">
                    <label className="csr__lbl" htmlFor="csr-ln">Nom</label>
                    <input
                      id="csr-ln"
                      {...register("name")}
                      placeholder="Sonko"
                      className={`csr__inp${errors.name ? " csr__inp--err" : ""}`}
                      aria-invalid={!!errors.name}
                      autoComplete="family-name"
                    />
                    {errors.name && (
                      <span className="csr__err" role="alert">{errors.name.message}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="csr__f">
                  <label className="csr__lbl" htmlFor="csr-email">Email</label>
                  <input
                    id="csr-email"
                    {...register("email")}
                    type="email"
                    placeholder="vous@exemple.com"
                    className={`csr__inp${errors.email ? " csr__inp--err" : ""}`}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="csr__err" role="alert">{errors.email.message}</span>
                  )}
                </div>

                {/* Sujet */}
                <div className="csr__f">
                  <label className="csr__lbl" htmlFor="csr-sujet">Sujet</label>
                  <div className="csr__sel-wrap">
                    <select
                      id="csr-sujet"
                      {...register("sujet")}
                      className="csr__inp csr__sel"
                    >
                      {SUJETS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className="csr__chevron" aria-hidden="true">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="#00AD4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="csr__f">
                  <label className="csr__lbl" htmlFor="csr-msg">Message</label>
                  <textarea
                    id="csr-msg"
                    {...register("message")}
                    rows={4}
                    placeholder="Votre message…"
                    className={`csr__inp csr__ta${errors.message ? " csr__inp--err" : ""}`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className="csr__err" role="alert">{errors.message.message}</span>
                  )}
                </div>

                {/* RGPD */}
                <label className="csr__rgpd">
                  <input
                    type="checkbox"
                    {...register("rgpd")}
                    className="csr__chk"
                    aria-invalid={!!errors.rgpd}
                  />
                  <span className="csr__rgpd-txt">
                    J&apos;accepte que mes données soient utilisées pour traiter ma demande.
                  </span>
                </label>
                {errors.rgpd && (
                  <span className="csr__err" role="alert">{errors.rgpd.message}</span>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="csr__btn"
                  aria-label={isSubmitting ? "Envoi en cours" : "Envoyer le message"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="csr__spin" aria-hidden="true" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer
                      <ArrowRight size={15} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="csr__delay">Réponse garantie sous 48h</p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* ════ SECTION ════════════════════════════════════════ */
        .csr {
          background: #ffffff;
          border-top: 1px solid rgba(4,86,39,0.08);
        }

        /* ════ LAYOUT ═════════════════════════════════════════ */
        .csr__wrap {
          max-width: 100%;
          padding: 112px var(--container-pad, 24px);
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 72px;
          align-items: start;
        }

        /* ════ COLONNE GAUCHE ═════════════════════════════════ */
        .csr__left {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .csr__wrap[data-visible="true"] .csr__left {
          opacity: 1;
          transform: translateY(0);
        }

        /* Eyebrow */
        .csr__eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .csr__ey-bar {
          display: block;
          width: 32px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .csr__ey-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #00AD4C;
        }

        /* H2 */
        .csr__h2 {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(22px, 2.8vw, 38px);
          font-weight: 600;
          line-height: 1.1;
          color: #1a1a1a;
          margin: 0 0 20px;
          letter-spacing: -0.015em;
        }
        .csr__h2 em {
          font-style: italic;
          font-weight: 600;
          color: #A5CE46;
        }

        /* Sous-titre */
        .csr__sub {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.80;
          color: #3a5040;
          margin: 0;
        }

        /* Règle */
        .csr__rule {
          width: 48px;
          height: 1px;
          background: rgba(232,168,56,0.55);
          margin: 36px 0;
        }

        /* ── Infos ── */
        .csr__infos {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        .csr__info {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          position: relative;
        }
        .csr__info-sep {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(4,86,39,0.07);
        }
        .csr__info-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: rgba(0,173,76,0.07);
          border: 1px solid rgba(0,173,76,0.14);
          color: #00AD4C;
          margin-top: 1px;
          transition: background 0.2s, border-color 0.2s;
        }
        .csr__info:hover .csr__info-icon {
          background: rgba(0,173,76,0.13);
          border-color: rgba(0,173,76,0.28);
        }
        .csr__info-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .csr__info-lbl {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9aaa9a;
        }
        .csr__info-val {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14px;
          line-height: 1.55;
          color: #1a2e1a;
        }
        .csr__info-a {
          text-decoration: none;
          transition: color 0.2s;
        }
        .csr__info-a:hover { color: #00AD4C; }

        /* Disponibilité */
        .csr__online {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px;
          color: #9aaa9a;
          margin-top: 28px;
          margin-bottom: 0;
        }
        .csr__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00AD4C;
          box-shadow: 0 0 0 3px rgba(0,173,76,0.16);
          flex-shrink: 0;
          animation: csrPulse 2.6s ease-in-out infinite;
        }
        @keyframes csrPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(0,173,76,0.16); }
          50%       { box-shadow: 0 0 0 7px rgba(0,173,76,0.04); }
        }

        /* ════ COLONNE DROITE ═════════════════════════════════ */
        .csr__right {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s;
        }
        .csr__wrap[data-visible="true"] .csr__right {
          opacity: 1;
          transform: translateY(0);
        }

        /* Carte formulaire */
        .csr__card {
          background: #FAFAF7;
          border: 1px solid rgba(4,86,39,0.10);
          border-radius: 4px;
          padding: 40px 36px 36px;
        }

        /* ════ FORMULAIRE ═════════════════════════════════════ */
        .csr__form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .csr__duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .csr__f {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Label */
        .csr__lbl {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6a7a6a;
        }

        /* Input */
        .csr__inp {
          width: 100%;
          box-sizing: border-box;
          background: #ffffff;
          border: 1px solid rgba(4,86,39,0.15);
          border-radius: 3px;
          padding: 10px 12px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14px;
          color: #1a2e1a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .csr__inp::placeholder { color: #b8c8b8; }
        .csr__inp:focus {
          border-color: #00AD4C;
          box-shadow: 0 0 0 3px rgba(0,173,76,0.09);
        }
        .csr__inp--err {
          border-color: #e05c5c;
        }

        /* Select */
        .csr__sel-wrap { position: relative; }
        .csr__sel {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          padding-right: 32px;
        }
        .csr__sel option { background: #ffffff; color: #1a2e1a; }
        .csr__chevron {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        .csr__ta { resize: none; }

        /* Erreurs */
        .csr__err {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          color: #c0392b;
          line-height: 1.4;
        }
        .csr__srv-err {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13px;
          color: #c0392b;
          background: rgba(192,57,43,0.06);
          border: 1px solid rgba(192,57,43,0.18);
          border-radius: 3px;
          padding: 10px 14px;
          margin: 0;
        }

        /* RGPD */
        .csr__rgpd {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }
        .csr__chk {
          margin-top: 2px;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
          accent-color: #00AD4C;
          cursor: pointer;
        }
        .csr__rgpd-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px;
          line-height: 1.65;
          color: #6a7a6a;
        }

        /* Bouton — or */
        .csr__btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2a1800;
          background: #E8A838;
          border: none;
          border-radius: 2px;
          padding: 16px 24px;
          margin-top: 4px;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
        }
        .csr__btn:hover:not(:disabled) {
          background: #d4922a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,168,56,0.28);
        }
        .csr__btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* Note délai */
        .csr__delay {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          color: #b8c8b8;
          text-align: center;
          margin: 0;
        }

        @keyframes csrSpin { to { transform: rotate(360deg); } }
        .csr__spin { animation: csrSpin 1s linear infinite; }

        /* ════ SUCCÈS ════════════════════════════════════════ */
        .csr__ok {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          padding: 52px 20px;
        }
        .csr__ok-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(0,173,76,0.08);
          border: 1px solid rgba(0,173,76,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AD4C;
        }
        .csr__ok-title {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 28px;
          font-weight: 600;
          color: #045627;
          margin: 0;
        }
        .csr__ok-body {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14px;
          line-height: 1.72;
          color: #3a5040;
          max-width: 300px;
          margin: 0;
        }

        /* ════ RESPONSIVE ════════════════════════════════════ */
        @media (max-width: 900px) {
          .csr__wrap {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 88px var(--container-pad, 20px);
          }
        }
        @media (max-width: 500px) {
          .csr__duo  { grid-template-columns: 1fr; }
          .csr__card { padding: 28px 20px 24px; }
        }
      `}</style>
    </section>
  );
}
