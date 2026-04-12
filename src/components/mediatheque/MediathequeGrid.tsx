"use client";

import { useState } from "react";
import { Play, LayoutGrid, List } from "lucide-react";

const CARDS = [
  {
    pays: "Sénégal", titre: "Journal du 1er septembre 2025 — Femmes paysannes et souveraineté alimentaire",
    excerpt: "Reportage au cœur des champs de Casamance : les agricultrices du réseau NSS racontent comment l'agroécologie a transformé leur quotidien et renforcé leur indépendance alimentaire.",
    date: "14 mars 2025", tag: "Agroécologie", vues: "12 400", duree: "8 min",
    thumb: "https://img.youtube.com/vi/LGkcZMWNgZA/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a4a2e,#2d7a4e)",
  },
  {
    pays: "Mali", titre: "Voix des femmes rurales — santé, alimentation et droits",
    excerpt: "Des femmes de Ségou et Mopti prennent la parole : accès aux soins, sécurité alimentaire et droits fonciers, trois combats qui se rejoignent dans leur lutte quotidienne.",
    date: "27 août 2025", tag: "Droits", vues: "8 200", duree: "12 min",
    thumb: "http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg",
    bg: "linear-gradient(135deg,#1e3a5f,#2d6a8e)",
  },
  {
    pays: "Niger", titre: "Semences paysannes et biodiversité agricole à Niamey",
    excerpt: "Au marché semencier de Niamey, les femmes défendent des variétés locales menacées par les semences hybrides. Un court-métrage sur la mémoire agricole et la résistance.",
    date: "5 sept. 2025", tag: "Semences", vues: "6 400", duree: "3 min",
    thumb: "http://wasafrica.org/wp-content/uploads/2024/10/Semences-Niamey.jpg",
    bg: "linear-gradient(135deg,#3a2d0f,#7a5a1e)",
  },
  {
    pays: "Guinée", titre: "Se NaAgri — combat des agricultrices pour l'accès à la propriété",
    excerpt: "En Guinée, le mouvement Se NaAgri mobilise des centaines de femmes pour obtenir des titres fonciers. Ce documentaire suit trois d'entre elles dans leurs démarches.",
    date: "12 juil. 2025", tag: "Foncier", vues: "4 800", duree: "6 min",
    thumb: "https://img.youtube.com/vi/FothaoeQsQ8/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#2a1a3a,#5a3a7a)",
  },
  {
    pays: "Mali", titre: "Témoignage de Mariama Sanko — l'agroécologie en pratique",
    excerpt: "Mariama Sanko, coordinatrice de 40 groupements au Mali, explique comment elle a introduit le compostage et la rotation des cultures dans sa région, doublant les rendements en trois ans.",
    date: "18 déc. 2025", tag: "Témoignage", vues: "3 200", duree: "9 min",
    thumb: "https://img.youtube.com/vi/boT5gIW072Q/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a2a3a,#2a5a7a)",
  },
  {
    pays: "Niger", titre: "Forum régional de Niamey — clôture et résolutions",
    excerpt: "Retour sur la journée de clôture du Forum régional : adoption des résolutions communes sur la souveraineté semencière et lancement officiel du programme de bourses pour les jeunes agricultrices.",
    date: "22 oct. 2025", tag: "Forum", vues: "2 900", duree: "14 min",
    thumb: "http://wasafrica.org/wp-content/uploads/2024/11/Forum-Niamey-cloture.jpg",
    bg: "linear-gradient(135deg,#3a1a0f,#8a4a1e)",
  },
  {
    pays: "Burkina Faso", titre: "Quatrième édition du CIFAP — Formation sur l'Agroécologie Paysanne",
    excerpt: "Des centaines de femmes rurales venues de toute l'Afrique de l'Ouest réunies pour partager savoirs, pratiques et engagements autour de la souveraineté alimentaire.",
    date: "30 août 2025", tag: "Formation", vues: "5 100", duree: "18 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.mp4",
  },
  {
    pays: "Sénégal", titre: "CIFAP 4e édition — Mme Tabara partage ses impressions sur l'agroécologie",
    excerpt: "Lors de la quatrième édition du CIFAP, Mme Tabara a salué l'initiative qui permet de renforcer les compétences en agroécologie. Pour elle, le CIFAP est un véritable cadre d'apprentissage, de partage d'expériences et de réseautage entre jeunes, femmes et acteurs du monde rural.",
    date: "30 août 2025", tag: "Formation", vues: "3 800", duree: "5 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.mp4",
  },
  {
    pays: "Sénégal", titre: "Awa Diallo raconte : de paysanne à coordinatrice nationale",
    excerpt: "Portrait d'Awa Diallo, qui a rejoint NSS en 2014 avec un petit lopin de terre et dirige aujourd'hui un réseau de 3 200 femmes au Sénégal. Un parcours de résilience et d'engagement.",
    date: "2 nov. 2025", tag: "Parcours", vues: "7 600", duree: "11 min",
    thumb: "http://wasafrica.org/wp-content/uploads/2024/11/Awa-Diallo-NSS.jpg",
    bg: "linear-gradient(135deg,#1a3a2a,#3a7a5a)",
  },
];

const MINI = [
  { bg: "linear-gradient(135deg,#0f2b1a,#1a5c32)", duree: "VIDÉO · 12 MIN", pays: "Mali",        titre: "Voix des femmes rurales — santé, alimentation et droits",         meta: "27 août 2025 · 8 200 vues", thumb: "http://wasafrica.org/wp-content/uploads/2024/11/CENTRE-KARONGHEN-WATI-NANING-9-1.jpg" },
  { bg: "linear-gradient(135deg,#0f2b2b,#1a4a4a)", duree: "VIDÉO · 18 MIN", pays: "Burkina Faso",titre: "Quatrième édition du CIFAP — Formation sur l'Agroécologie Paysanne",  meta: "30 août 2025 · 5 100 vues", thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.jpg" },
];

type ViewMode = "grid" | "list";
interface Props { activeTab: string; activePill: string; search: string; }

export default function MediathequeGrid({ activePill, search }: Props) {
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);

  const display = CARDS.filter((c) => {
    if (activePill !== "Tous" && c.pays !== activePill) return false;
    if (search && !c.titre.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const cards = display.length > 0 ? display : CARDS;

  return (
    <>
      {/* S4 — Featured */}
      <section className="mth-pad" style={{ paddingTop: "24px" }}>
        <div className="mth-feat" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
          {/* Carte principale */}
          <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", cursor: "pointer", height: "400px", background: "linear-gradient(135deg,#1a3a22,#2d6b45)", backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%), url(https://img.youtube.com/vi/LGkcZMWNgZA/maxresdefault.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 50%)" }} />
            <span style={{ position: "absolute", top: "12px", left: "12px", background: "#1a6b3c", color: "#fff", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", padding: "3px 8px", borderRadius: "4px" }}>Vidéo · 8 min</span>
            <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.4)", color: "#e8f5eb", fontSize: "10px", fontWeight: 600, padding: "3px 8px", borderRadius: "4px" }}>Sénégal</span>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-60%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Play size={20} color="#fff" fill="#fff" style={{ marginLeft: "3px" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px", zIndex: 2 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>Journal du 1er septembre 2025 — Femmes paysannes et souveraineté alimentaire</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>Agroécologie · 14 mars 2025 · 12 400 vues</div>
            </div>
          </div>

          {/* Mini cartes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {MINI.map((c, i) => (
              <div key={i} style={{ background: c.bg, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%), url(${c.thumb})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "10px", position: "relative", cursor: "pointer", flex: 1, minHeight: "190px", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 50%)" }} />
                <span style={{ position: "absolute", top: "8px", left: "8px", background: "rgba(15,43,26,0.85)", color: "#a8d5b5", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", padding: "2px 7px", borderRadius: "4px" }}>{c.duree}</span>
                <span style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.4)", color: "#e8f5eb", fontSize: "10px", fontWeight: 600, padding: "2px 7px", borderRadius: "4px" }}>{c.pays}</span>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Play size={12} color="#fff" fill="#fff" style={{ marginLeft: "2px" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 10px", zIndex: 2 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{c.titre}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{c.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — Grille vidéos */}
      <section className="mth-pad" style={{ paddingTop: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: "#1a1a1a" }}>
            Toutes les vidéos
            <span style={{ fontSize: "13px", color: "#888", fontWeight: 400, marginLeft: "6px" }}>(340 vidéos)</span>
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            {(["grid", "list"] as ViewMode[]).map((m) => (
              <button key={m} onClick={() => setView(m)} style={{ width: "30px", height: "30px", borderRadius: "6px", border: "1px solid #dde8de", background: view === m ? "#0f2b1a" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                {m === "grid" ? <LayoutGrid size={14} color={view === m ? "#fff" : "#888"} /> : <List size={14} color={view === m ? "#fff" : "#888"} />}
              </button>
            ))}
          </div>
        </div>

        <div className="mth-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "14px" }}>
          {cards.map((card, i) => (
            <div key={i} className="mth-card" style={{ background: "#fff", border: "0.5px solid #e8ede9", borderRadius: "10px", overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "200px", position: "relative", background: card.bg, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%), url(${card.thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <span style={{ position: "absolute", top: "8px", left: "8px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", padding: "2px 7px", borderRadius: "4px", background: "rgba(0,0,0,0.5)", color: "#e8f5eb" }}>
                  Vidéo · {card.duree}
                </span>
                <span style={{ position: "absolute", top: "8px", right: "8px", fontSize: "10px", fontWeight: 600, padding: "2px 7px", borderRadius: "4px", background: "rgba(0,0,0,0.35)", color: "#e8f5eb" }}>{card.pays}</span>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }}>
                  <Play size={14} color="#fff" fill="#fff" style={{ marginLeft: "2px" }} />
                </div>
              </div>
              <div style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.35 }}>{card.titre}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#666", lineHeight: 1.55, marginTop: "6px", flex: 1, textAlign: "justify" }}>{card.excerpt}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#999" }}>{card.date} · {card.vues} vues</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", background: "#eaf3ee", color: "#1a6b3c", padding: "2px 7px", borderRadius: "4px", whiteSpace: "nowrap" }}>{card.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S6 — Pagination */}
      <div className="mth-pad" style={{ paddingTop: "8px", paddingBottom: "40px", display: "flex", justifyContent: "center", gap: "6px" }}>
        {["‹", "1", "2", "3", "4", "…", "43", "›"].map((p, i) => {
          const n = Number(p);
          const isActive = page === n;
          return (
            <button key={i} onClick={() => { if (!isNaN(n) && n > 0) setPage(n); }}
              style={{ fontFamily: "var(--font-body)", width: "32px", height: "32px", borderRadius: "7px", border: "1px solid #dde8de", background: isActive ? "#0f2b1a" : "#fff", color: isActive ? "#fff" : "#555", fontWeight: isActive ? 600 : 400, fontSize: "13px", cursor: "pointer", transition: "all 0.15s" }}>
              {p}
            </button>
          );
        })}
      </div>

      {/* S7 — CTA */}
      <div className="mth-pad" style={{ paddingBottom: "60px" }}>
        <div style={{ background: "#1a6b3c", borderRadius: "12px", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "#fff" }}>Vous avez filmé une action sur le terrain ?</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#a8d5b5", marginTop: "4px" }}>Partagez vos vidéos avec les 175 000 membres du réseau NSS.</div>
          </div>
          <button style={{ fontFamily: "var(--font-body)", background: "#fff", color: "#1a6b3c", fontSize: "14px", fontWeight: 600, padding: "10px 20px", borderRadius: "8px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            Soumettre une vidéo
          </button>
        </div>
      </div>

      <style>{`
        .mth-pad  { padding-left: 80px; padding-right: 80px; }
        .mth-card { transition: border-color 0.2s; }
        .mth-card:hover { border-color: #b8d4bc !important; }
        @media (max-width: 768px) {
          .mth-pad  { padding-left: 20px !important; padding-right: 20px !important; }
          .mth-feat { grid-template-columns: 1fr !important; }
          .mth-grid { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
        }
        @media (max-width: 480px) {
          .mth-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
