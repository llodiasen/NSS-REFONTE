"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name:      z.string().min(2, "Nom requis"),
  email:     z.string().email("Email invalide"),
  sujet:     z.enum(["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"]),
  message:   z.string().min(20, "20 caractères minimum"),
  rgpd:      z.literal(true, { message: "Requis" }),
});

type FormData = z.infer<typeof schema>;

const INFOS = [
  { Icon: Mail,   label: "Email",      value: "contact@wasafrica.org" },
  { Icon: Phone,  label: "Téléphone",  value: "+221 33 867 59 11 / +221 77 647 02 31" },
  { Icon: MapPin, label: "Siège",      value: "Sicap Foire, Lot n°17, Zone C, Dakar, Sénégal" },
];

const INPUT = {
  width: "100%",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "8px",
  padding: "12px 16px",
  fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
  fontSize: "14px",
  color: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s",
} as const;

export default function ContactHomeSection() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "Autre" },
  });

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
    <section style={{ background: "#193524", padding: "88px var(--container-pad)" }}>
      <div
        className="contact-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "72px", alignItems: "start" }}
      >
        {/* ── COLONNE GAUCHE ── */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.5)" }} />
            <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "9px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "var(--green-300)" }}>
              Nous contacter
            </span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "clamp(21px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.12, color: "#ffffff", marginBottom: "20px" }}>
            Une question ?{" "}
            <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>Écrivez-nous.</em>
          </h2>

          <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: "44px" }}>
            Notre équipe répond à toutes vos demandes — adhésion, partenariat, programmes ou questions générales.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {INFOS.map(({ Icon, label, value }, i) => (
              <div key={label}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 0" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(127,212,166,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="var(--green-300)" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", margin: "0 0 2px" }}>{label}</p>
                    <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "15px", color: "#ffffff", margin: 0 }}>{value}</p>
                  </div>
                </div>
                {i < INFOS.length - 1 && <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />}
              </div>
            ))}
          </div>
        </div>

        {/* ── COLONNE DROITE — Formulaire ── */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "32px 24px" }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(127,212,166,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Send size={22} color="var(--green-300)" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#ffffff", marginBottom: "10px" }}>Message envoyé !</h3>
              <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                Nous avons bien reçu votre message et vous répondrons dans les 48h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {serverError && (
                <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "13px", color: "#f87171", background: "rgba(248,113,113,0.1)", padding: "10px 14px", borderRadius: "8px" }}>
                  {serverError}
                </p>
              )}

              {/* Prénom / Nom */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>Prénom</label>
                  <input {...register("firstName")} placeholder="Mariama" style={INPUT} />
                  {errors.firstName && <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#f87171", marginTop: "4px" }}>{errors.firstName.message}</p>}
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>Nom</label>
                  <input {...register("name")} placeholder="Sonko" style={INPUT} />
                  {errors.name && <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#f87171", marginTop: "4px" }}>{errors.name.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>Email</label>
                <input {...register("email")} type="email" placeholder="vous@exemple.com" style={INPUT} />
                {errors.email && <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#f87171", marginTop: "4px" }}>{errors.email.message}</p>}
              </div>

              {/* Sujet */}
              <div>
                <label style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>Sujet</label>
                <select {...register("sujet")} style={{ ...INPUT, cursor: "pointer" }}>
                  {["Adhésion", "Partenariat", "Don", "CIFAP", "EMMAP", "Autre"].map((s) => (
                    <option key={s} value={s} style={{ background: "#193524" }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "6px" }}>Message</label>
                <textarea {...register("message")} rows={4} placeholder="Votre message…" style={{ ...INPUT, resize: "none" }} />
                {errors.message && <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#f87171", marginTop: "4px" }}>{errors.message.message}</p>}
              </div>

              {/* RGPD */}
              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                <input type="checkbox" {...register("rgpd")} style={{ marginTop: "3px", flexShrink: 0, accentColor: "var(--green-400)" }} />
                <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande.
                </span>
              </label>
              {errors.rgpd && <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "#f87171" }}>{errors.rgpd.message}</p>}

              {/* Note + bouton */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginTop: "4px" }}>
                <span style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                  ⏱ Réponse sous 48h
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                  style={{
                    fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "14px", fontWeight: 600,
                    color: "#ffffff", background: "#e07a2f",
                    border: "none", borderRadius: "40px",
                    padding: "12px 28px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "8px",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                >
                  {isSubmitting ? <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> : <Send size={16} />}
                  {isSubmitting ? "Envoi…" : "Envoyer"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-submit-btn:hover:not(:disabled) { background: #c96820 !important; transform: translateY(-1px); }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
        input:focus, textarea:focus, select:focus { border-color: rgba(127,212,166,0.5) !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
