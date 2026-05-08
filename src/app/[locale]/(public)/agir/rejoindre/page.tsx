import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import RejoindreForm from "@/components/sections/RejoindreForm";

export const metadata: Metadata = {
  title: "Adhérer à NSS — Rejoindre le mouvement | wasafrica.org",
  description:
    "Adhérez à Nous Sommes la Solution et rejoignez 175 000 femmes rurales engagées pour la souveraineté alimentaire en Afrique de l'Ouest.",
};

const STATS = [
  { value: "175 000", label: "Membres" },
  { value: "14",      label: "Pays" },
  { value: "500+",    label: "Associations" },
];

const BENEFICES = [
  {
    icon: "🌍",
    titre: "Impact collectif",
    texte: "Rejoignez 175 000 femmes rurales qui transforment les systèmes alimentaires à travers le continent africain.",
  },
  {
    icon: "🤝",
    titre: "Réseau panafricain",
    texte: "Accédez à un réseau de 500+ associations membres réparties dans 14 pays d'Afrique de l'Ouest.",
  },
  {
    icon: "🌱",
    titre: "Formation & ressources",
    texte: "Bénéficiez de formations agroécologiques, de partage de pratiques et de ressources exclusives du mouvement.",
  },
];

const ENGAGEMENTS = [
  {
    titre: "Souscrire à la vision et aux objectifs NSS",
    texte: "Partager la conviction que les femmes rurales africaines sont les premières actrices de la souveraineté alimentaire du continent.",
  },
  {
    titre: "S'impliquer dans les actions",
    texte: "Participer aux formations, événements et campagnes de sensibilisation organisés par les associations membres dans votre pays.",
  },
  {
    titre: "Partager et plaider",
    texte: "Diffuser l'information sur la souveraineté alimentaire et l'agroécologie dans votre réseau. Intervenir dans les espaces de décision.",
  },
  {
    titre: "Payer sa cotisation",
    texte: "Remplir et signer une demande d'adhésion et s'acquitter de la cotisation annuelle pour maintenir le mouvement dans la durée.",
  },
];

const FAQ = [
  {
    q: "Qui peut adhérer à NSS ?",
    r: "Toute personne ou organisation partageant la vision de NSS peut adhérer : agricultrices, associations paysannes, sympathisants, organisations de la société civile.",
  },
  {
    q: "Quel est le délai de traitement ?",
    r: "L'équipe NSS étudie chaque demande et vous contacte dans les meilleurs délais. L'adhésion ne crée pas automatiquement un compte membre.",
  },
  {
    q: "L'adhésion est-elle payante ?",
    r: "Une cotisation annuelle est demandée pour soutenir le fonctionnement du mouvement. Le montant varie selon le type d'adhésion (individuel ou organisation).",
  },
];

const STEPS = ["Informations", "Profil & motivation", "Envoi"];

export default function RejoindrePagee() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        backgroundImage: `url('http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Overlay */}
        <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          background: [
            "linear-gradient(to right, rgba(10,38,24,0.90) 0%, rgba(10,38,24,0.82) 40%, rgba(10,38,24,0.55) 70%, transparent 100%)",
            "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(45,154,106,0.18), transparent 65%)",
          ].join(", "),
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "48px var(--container-pad) 40px",
        }}>
          {/* Breadcrumb */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "#ffffff", marginBottom: "28px" }}>
            <Link href="/fr" style={{ color: "#ffffff", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span style={{ color: "#ffffff" }}>Adhésion</span>
          </p>

          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-300)", whiteSpace: "nowrap" }}>
              Rejoindre NSS
            </span>
            <span aria-hidden="true" style={{ display: "block", width: "28px", height: "1px", background: "rgba(127,212,166,0.4)", flexShrink: 0 }} />
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.12,
            color: "#ffffff",
            marginBottom: "24px",
            maxWidth: "700px",
          }}>
            Votre place est dans{" "}
            <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>ce mouvement.</em>
          </h1>

          {/* Sous-titre */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#ffffff",
            maxWidth: "560px",
            marginBottom: "40px",
          }}>
            NSS n&apos;est pas une ONG — c&apos;est un mouvement populaire. Chaque adhésion renforce
            la capacité des femmes rurales africaines à décider de leur alimentation et de leur avenir.
          </p>

          {/* Lien CTA */}
          <Link
            href="#formulaire"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "24px",
              padding: "10px 22px",
              display: "inline-block",
              transition: "border-color 0.2s ease",
            }}
          >
            Adhérer maintenant →
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#2d6a4f" }}>
        {STATS.map(({ value, label }, i) => (
          <div key={label} style={{ padding: "28px 32px", textAlign: "center", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 400, color: "#ffffff", lineHeight: 1, marginBottom: "6px" }}>{value}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.5)" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── POURQUOI ADHÉRER ── */}
      <section style={{ background: "#f7f4ef", padding: "80px var(--container-pad)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ width: "28px", height: "1px", background: "rgba(29,106,63,0.35)", display: "block" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)" }}>Pourquoi adhérer</span>
              <span style={{ width: "28px", height: "1px", background: "rgba(29,106,63,0.35)", display: "block" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, color: "#071A10", margin: 0 }}>
              Rejoindre NSS, c&apos;est{" "}
              <em style={{ fontStyle: "italic", color: "var(--green-600)" }}>choisir un camp.</em>
            </h2>
          </div>
          <div className="adhesion-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {BENEFICES.map(({ icon, titre, texte }) => (
              <div key={titre} style={{ background: "#ffffff", borderRadius: "12px", padding: "32px 28px", border: "1.5px solid rgba(0,0,0,0.07)" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(29,122,82,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "18px" }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 400, color: "#071A10", marginBottom: "10px" }}>{titre}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "#4b5563", margin: 0 }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="formulaire" style={{ background: "#ffffff", padding: "80px var(--container-pad)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div className="adhesion-form-grid" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "64px", alignItems: "start" }}>

            {/* Colonne gauche — engagements */}
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)", display: "block", marginBottom: "16px" }}>
                S&apos;engager concrètement
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 400, color: "#071A10", marginBottom: "28px", lineHeight: 1.2 }}>
                Adhérer,{" "}
                <em style={{ fontStyle: "italic", color: "var(--green-600)" }}>c&apos;est agir.</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {ENGAGEMENTS.map(({ titre, texte }) => (
                  <div key={titre} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--green-600)", flexShrink: 0, marginTop: "3px" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 700, color: "#071A10", marginBottom: "4px" }}>{titre}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.65, color: "#6b7280", margin: 0 }}>{texte}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div>
              {/* Étapes */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "32px", gap: "0" }}>
                {STEPS.map((step, i) => (
                  <div key={step} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: i === 0 ? "var(--green-600)" : "rgba(0,0,0,0.08)",
                        color: i === 0 ? "#fff" : "#9ca3af",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: i === 0 ? "var(--green-600)" : "#9ca3af", whiteSpace: "nowrap" }}>{step}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)", margin: "0 8px", marginBottom: "20px" }} />
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: "#ffffff", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: "12px", padding: "36px" }}>
                <RejoindreForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#eaf3de", padding: "72px var(--container-pad)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ width: "28px", height: "1px", background: "rgba(29,106,63,0.35)", display: "block" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-600)" }}>FAQ</span>
              <span style={{ width: "28px", height: "1px", background: "rgba(29,106,63,0.35)", display: "block" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,34px)", fontWeight: 400, color: "#071A10", margin: 0 }}>
              Questions fréquentes
            </h2>
          </div>
          <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {FAQ.map(({ q, r }) => (
              <div key={q} style={{ background: "#ffffff", borderRadius: "12px", padding: "28px 24px", border: "1.5px solid rgba(0,0,0,0.07)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 400, color: "#071A10", marginBottom: "12px", lineHeight: 1.3 }}>{q}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7, color: "#4b5563", margin: 0 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section style={{ background: "#1a3d2b", padding: "72px var(--container-pad)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--green-300)", display: "block", marginBottom: "16px" }}>
            Ensemble
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, color: "#ffffff", marginBottom: "16px", lineHeight: 1.18 }}>
            Par nous-mêmes. Pour nous-mêmes.{" "}
            <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>En nous-mêmes.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: "36px" }}>
            Vous avez une question avant d&apos;adhérer ? Notre équipe est disponible pour vous accompagner dans votre démarche.
          </p>
          <Link href="/fr/contact" className="cta-orange-btn" style={{
            fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
            color: "#ffffff", background: "#e07a2f",
            padding: "14px 36px", borderRadius: "40px",
            textDecoration: "none", display: "inline-block",
            transition: "background 0.2s, transform 0.2s",
          }}>
            Nous contacter →
          </Link>
        </div>
      </section>

      <style>{`
        .cta-orange-btn:hover { background: #c96820 !important; transform: translateY(-2px); }
        @media (max-width: 900px) {
          .adhesion-form-grid { grid-template-columns: 1fr !important; }
          .adhesion-cards     { grid-template-columns: 1fr !important; }
          .faq-grid           { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
