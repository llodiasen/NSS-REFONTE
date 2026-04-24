"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

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

/* ─── Données contact ─────────────────────────────────────── */
const INFOS = [
  { Icon: Mail,   label: "Email",     value: "contact@wasafrica.org",                    href: "mailto:contact@wasafrica.org" },
  { Icon: Phone,  label: "Téléphone", value: "+221 33 867 59 11 / +221 77 647 02 31",    href: "tel:+221338675911" },
  { Icon: MapPin, label: "Siège",     value: "Sicap Foire, Lot n°17, Zone C, Dakar, Sénégal", href: null },
] as const;

const SUJETS = ["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"] as const;

/* ─── Composant ───────────────────────────────────────────── */
export default function ContactSectionRedesign() {
  const [success, setSuccess]         = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "Autre" },
  });

  /* Scroll reveal */
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.dataset.visible = "true"; obs.disconnect(); } },
      { threshold: 0.1 }
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

      {/* ── Fond ────────────────────────────────────────────── */}
      <div className="csr__bg"                    aria-hidden="true" />
      <div className="csr__pattern"               aria-hidden="true" />
      <div className="csr__halo csr__halo--tl"    aria-hidden="true" />
      <div className="csr__halo csr__halo--br"    aria-hidden="true" />

      <div className="csr__inner" ref={innerRef}>

        {/* ══ COLONNE GAUCHE ══════════════════════════════════ */}
        <div className="csr__left">

          {/* Eyebrow */}
          <div className="csr__eyebrow">
            <span className="csr__eyebrow-line" />
            <span className="csr__eyebrow-txt">Nous contacter</span>
          </div>

          {/* H2 */}
          <h2 id="csr-heading" className="csr__h2">
            Une question ?{" "}
            <em>Écrivez-nous.</em>
          </h2>

          {/* Sous-titre */}
          <p className="csr__subtitle">
            Notre équipe répond à toutes vos demandes — adhésion,
            partenariat, programmes ou questions générales.
          </p>

          {/* Séparateur or */}
          <div className="csr__sep" aria-hidden="true" />

          {/* Coordonnées */}
          <ul className="csr__infos" role="list" aria-label="Coordonnées NSS">
            {INFOS.map(({ Icon, label, value, href }, i) => (
              <li key={label} className="csr__info-item">
                <div className="csr__info-icon" aria-hidden="true">
                  <Icon size={15} />
                </div>
                <div className="csr__info-body">
                  <span className="csr__info-label">{label}</span>
                  {href ? (
                    <a href={href} className="csr__info-value csr__info-link">{value}</a>
                  ) : (
                    <span className="csr__info-value">{value}</span>
                  )}
                </div>
                {i < INFOS.length - 1 && <div className="csr__info-sep" aria-hidden="true" />}
              </li>
            ))}
          </ul>

          {/* Disponibilité */}
          <p className="csr__avail">
            <span className="csr__avail-dot" aria-hidden="true" />
            Équipe disponible — Réponse sous 48h
          </p>
        </div>

        {/* ══ COLONNE DROITE ══════════════════════════════════ */}
        <div className="csr__right">
          <div className="csr__card">
            {/* Liseré doré en tête de carte */}
            <div className="csr__card-line" aria-hidden="true" />

            {success ? (
              /* ── Succès ── */
              <div className="csr__success" role="status" aria-live="polite">
                <div className="csr__success-icon" aria-hidden="true">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="csr__success-title">Message envoyé !</h3>
                <p className="csr__success-body">
                  Nous avons bien reçu votre message et vous répondrons dans les 48h.
                </p>
              </div>
            ) : (
              /* ── Formulaire ── */
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="csr__form"
                aria-label="Formulaire de contact NSS"
              >
                {serverError && (
                  <p className="csr__server-err" role="alert">{serverError}</p>
                )}

                {/* Prénom / Nom */}
                <div className="csr__row-2">
                  <div className="csr__field">
                    <label className="csr__label" htmlFor="csr-firstName">Prénom</label>
                    <input
                      id="csr-firstName"
                      {...register("firstName")}
                      placeholder="Mariama"
                      className="csr__input"
                      aria-invalid={!!errors.firstName}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <span className="csr__err" role="alert">{errors.firstName.message}</span>
                    )}
                  </div>
                  <div className="csr__field">
                    <label className="csr__label" htmlFor="csr-name">Nom</label>
                    <input
                      id="csr-name"
                      {...register("name")}
                      placeholder="Sonko"
                      className="csr__input"
                      aria-invalid={!!errors.name}
                      autoComplete="family-name"
                    />
                    {errors.name && (
                      <span className="csr__err" role="alert">{errors.name.message}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="csr__field">
                  <label className="csr__label" htmlFor="csr-email">Email</label>
                  <input
                    id="csr-email"
                    {...register("email")}
                    type="email"
                    placeholder="vous@exemple.com"
                    className="csr__input"
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="csr__err" role="alert">{errors.email.message}</span>
                  )}
                </div>

                {/* Sujet */}
                <div className="csr__field">
                  <label className="csr__label" htmlFor="csr-sujet">Sujet</label>
                  <div className="csr__select-wrap">
                    <select
                      id="csr-sujet"
                      {...register("sujet")}
                      className="csr__input csr__select"
                    >
                      {SUJETS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className="csr__select-arrow" aria-hidden="true">
                      <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M1 1l4.5 4.5L10 1" stroke="#A5CE46" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="csr__field">
                  <label className="csr__label" htmlFor="csr-message">Message</label>
                  <textarea
                    id="csr-message"
                    {...register("message")}
                    rows={4}
                    placeholder="Votre message…"
                    className="csr__input csr__textarea"
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
                    className="csr__checkbox"
                    aria-invalid={!!errors.rgpd}
                  />
                  <span className="csr__rgpd-text">
                    J&apos;accepte que mes données soient utilisées pour traiter ma demande.
                  </span>
                </label>
                {errors.rgpd && (
                  <span className="csr__err" role="alert">{errors.rgpd.message}</span>
                )}

                {/* Footer */}
                <div className="csr__form-foot">
                  <span className="csr__delay">⏱ Réponse sous 48h</span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="csr__submit"
                    aria-label="Envoyer le message"
                  >
                    {isSubmitting ? (
                      <Loader2 size={15} className="csr__spin" aria-hidden="true" />
                    ) : (
                      <Send size={15} aria-hidden="true" />
                    )}
                    {isSubmitting ? "Envoi…" : "Envoyer"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ══ Styles ════════════════════════════════════════════ */}
      <style>{`
        /* Section */
        .csr {
          position: relative;
          overflow: hidden;
        }

        /* Gradient nuit profonde → vert vif */
        .csr__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #011a0a 0%,
            #045627 38%,
            #006e30 65%,
            #00AD4C 100%
          );
          z-index: 0;
        }

        /* Motif kente diagonal */
        .csr__pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              -45deg,
              transparent, transparent 22px,
              rgba(245,237,214,0.028) 22px, rgba(245,237,214,0.028) 24px
            ),
            repeating-linear-gradient(
              45deg,
              transparent, transparent 22px,
              rgba(165,206,70,0.028) 22px, rgba(165,206,70,0.028) 24px
            );
        }

        /* Halos */
        .csr__halo {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }
        .csr__halo--tl {
          top: -5%;
          left: -10%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(232,168,56,0.12) 0%, transparent 65%);
        }
        .csr__halo--br {
          bottom: -8%;
          right: -8%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(165,206,70,0.10) 0%, transparent 65%);
        }

        /* ── Grid ───────────────────────────────────────────── */
        .csr__inner {
          position: relative;
          z-index: 2;
          max-width: var(--container-max, 1200px);
          margin: 0 auto;
          padding: 100px var(--container-pad, 24px);
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 72px;
          align-items: start;
        }

        /* ── Colonne gauche (reveal gauche→droite) ──────────── */
        .csr__left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.75s ease 0.08s, transform 0.75s ease 0.08s;
        }
        .csr__inner[data-visible="true"] .csr__left {
          opacity: 1;
          transform: translateX(0);
        }

        /* Eyebrow */
        .csr__eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .csr__eyebrow-line {
          display: block;
          width: 32px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #E8A838);
          flex-shrink: 0;
        }
        .csr__eyebrow-txt {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #E8A838;
        }

        /* H2 */
        .csr__h2 {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: clamp(28px, 3.6vw, 50px);
          font-weight: 500;
          line-height: 1.1;
          color: #F5EDD6;
          margin: 0 0 18px;
          letter-spacing: -0.015em;
        }
        .csr__h2 em {
          font-style: italic;
          color: #A5CE46;
        }

        /* Sous-titre */
        .csr__subtitle {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.8;
          color: rgba(245,237,214,0.70);
          margin: 0;
        }

        /* Séparateur or */
        .csr__sep {
          width: 48px;
          height: 1.5px;
          background: linear-gradient(90deg, #E8A838, rgba(232,168,56,0.12));
          margin: 36px 0;
        }

        /* Coordonnées */
        .csr__infos {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .csr__info-item {
          display: flex;
          flex-direction: column;
        }
        .csr__info-item > .csr__info-icon,
        .csr__info-item > .csr__info-body {
          /* direct children flow — handled inside via wrapping div-less approach */
        }
        /* re-layout with flex row */
        .csr__info-item {
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 0;
          position: relative;
        }
        .csr__info-sep {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: rgba(245,237,214,0.07);
        }
        .csr__info-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(0,173,76,0.14);
          border: 1px solid rgba(0,173,76,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #A5CE46;
          margin-top: 2px;
          transition: background 0.2s, border-color 0.2s;
        }
        .csr__info-item:hover .csr__info-icon {
          background: rgba(0,173,76,0.22);
          border-color: rgba(165,206,70,0.35);
        }
        .csr__info-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }
        .csr__info-label {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,237,214,0.36);
        }
        .csr__info-value {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14.5px;
          color: #F5EDD6;
          line-height: 1.55;
        }
        .csr__info-link {
          text-decoration: none;
          transition: color 0.2s;
        }
        .csr__info-link:hover { color: #A5CE46; }

        /* Indicateur disponibilité */
        .csr__avail {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px;
          color: rgba(245,237,214,0.42);
          margin-top: 28px;
        }
        .csr__avail-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00AD4C;
          box-shadow: 0 0 0 3px rgba(0,173,76,0.22);
          flex-shrink: 0;
          animation: csrPulse 2.5s ease-in-out infinite;
        }
        @keyframes csrPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(0,173,76,0.22); }
          50%       { box-shadow: 0 0 0 7px rgba(0,173,76,0.06); }
        }

        /* ── Colonne droite (reveal droite→gauche) ──────────── */
        .csr__right {
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s;
        }
        .csr__inner[data-visible="true"] .csr__right {
          opacity: 1;
          transform: translateX(0);
        }

        /* Carte glassmorphism */
        .csr__card {
          position: relative;
          overflow: hidden;
          background: rgba(2,31,14,0.62);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(165,206,70,0.14);
          border-radius: 4px;
          padding: 38px 34px 32px;
        }
        /* Halo interne vert-clair */
        .csr__card::before {
          content: '';
          position: absolute;
          top: -64px; right: -64px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(165,206,70,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Liseré or → vert clair en haut */
        .csr__card-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #E8A838 28%,
            #A5CE46 72%,
            transparent
          );
        }

        /* ── Formulaire ─────────────────────────────────────── */
        .csr__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .csr__row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .csr__field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .csr__label {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245,237,214,0.52);
        }
        .csr__input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(245,237,214,0.05);
          border: 1px solid rgba(245,237,214,0.12);
          border-radius: 4px;
          padding: 11px 14px;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14px;
          color: #F5EDD6;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .csr__input::placeholder { color: rgba(245,237,214,0.22); }
        .csr__input:focus {
          border-color: #00AD4C;
          background: rgba(0,173,76,0.06);
          box-shadow: 0 0 0 3px rgba(0,173,76,0.12);
        }
        .csr__input[aria-invalid="true"] {
          border-color: rgba(248,113,113,0.45);
        }
        .csr__input[aria-invalid="true"]:focus {
          box-shadow: 0 0 0 3px rgba(248,113,113,0.10);
        }

        /* Select custom */
        .csr__select-wrap {
          position: relative;
        }
        .csr__select {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          padding-right: 38px;
        }
        .csr__select option {
          background: #032e12;
          color: #F5EDD6;
        }
        .csr__select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        .csr__textarea { resize: none; }

        .csr__err {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11px;
          color: #fca5a5;
        }
        .csr__server-err {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 13px;
          color: #fca5a5;
          background: rgba(252,165,165,0.08);
          border: 1px solid rgba(252,165,165,0.18);
          border-radius: 4px;
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
        .csr__checkbox {
          margin-top: 2px;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
          accent-color: #00AD4C;
          cursor: pointer;
        }
        .csr__rgpd-text {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px;
          line-height: 1.6;
          color: rgba(245,237,214,0.42);
        }

        /* Footer formulaire */
        .csr__form-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 4px;
        }
        .csr__delay {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          color: rgba(245,237,214,0.30);
        }

        /* Bouton Envoyer */
        .csr__submit {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #011a0a;
          background: #00AD4C;
          border: none;
          border-radius: 2px;
          padding: 12px 30px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .csr__submit:hover:not(:disabled) {
          background: #A5CE46;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,173,76,0.28);
        }
        .csr__submit:disabled { opacity: 0.6; cursor: not-allowed; }

        @keyframes csrSpin { to { transform: rotate(360deg); } }
        .csr__spin { animation: csrSpin 1s linear infinite; }

        /* ── Succès ─────────────────────────────────────────── */
        .csr__success {
          text-align: center;
          padding: 44px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .csr__success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(0,173,76,0.14);
          border: 1px solid rgba(0,173,76,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A5CE46;
        }
        .csr__success-title {
          font-family: var(--font-cormorant, 'Cormorant Garamond', Georgia, serif);
          font-size: 28px;
          font-weight: 500;
          color: #F5EDD6;
          margin: 0;
        }
        .csr__success-body {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 14px;
          line-height: 1.7;
          color: rgba(245,237,214,0.62);
          max-width: 320px;
          margin: 0;
        }

        /* ── Responsive ─────────────────────────────────────── */
        @media (max-width: 960px) {
          .csr__inner {
            grid-template-columns: 1fr;
            gap: 44px;
            padding: 72px var(--container-pad, 20px);
          }
          .csr__left  { transform: translateY(22px) !important; }
          .csr__right { transform: translateY(22px) !important; transition-delay: 0.14s !important; }
          .csr__inner[data-visible="true"] .csr__left,
          .csr__inner[data-visible="true"] .csr__right {
            transform: translateY(0) !important;
          }
        }
        @media (max-width: 480px) {
          .csr__row-2  { grid-template-columns: 1fr; }
          .csr__card   { padding: 28px 18px 24px; }
        }
      `}</style>
    </section>
  );
}
