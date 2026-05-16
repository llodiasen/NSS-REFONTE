"use client";

import { useState } from "react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section style={{ background: "var(--green-50)" }}>
      <div
        className="newsletter-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "56px var(--container-pad)",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* ── Gauche ── */}
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Restez informé du mouvement.
          </h2>
          <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "14px", fontWeight: 400, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Recevez les actualités NSS directement dans votre boîte mail — sans
            publicité, sans cession de données. Un email par mois, l&apos;essentiel.
          </p>
        </div>

        {/* ── Droite — Formulaire ── */}
        <div>
          {submitted ? (
            <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "15px", fontWeight: 500, color: "var(--green-700)" }}>
              ✓ Merci ! Vous êtes bien inscrit(e).
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  minWidth: "180px",
                  fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                  fontSize: "14px",
                  padding: "16px 20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  background: "#ffffff",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "16px 28px",
                  background: "var(--green-600)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.2s ease",
                }}
              >
                S&apos;inscrire
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  );
}
