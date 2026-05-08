"use client";

import { useState } from "react";
import { Play, LayoutGrid, List, X } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface VideoCard {
  pays: string;
  titre: string;
  excerpt: string;
  date: string;
  sortDate: string; // ISO — utilisé pour le tri
  tag: string;
  vues: string;
  duree: string;
  thumb: string;
  bg: string;
  youtubeId?: string;
  cloudinaryUrl?: string;
  facebookUrl?: string;
}

interface MiniCard {
  bg: string;
  duree: string;
  pays: string;
  titre: string;
  meta: string;
  thumb: string;
  youtubeId?: string;
  cloudinaryUrl?: string;
  facebookUrl?: string;
}

interface ActiveVideo {
  type: "youtube" | "cloudinary" | "facebook";
  src: string;
  titre: string;
}

/* ── Data ───────────────────────────────────────────────────────────────────── */

const CARDS: VideoCard[] = [
  {
    pays: "Sénégal", titre: "Journal du 1er septembre 2025 — Femmes paysannes et souveraineté alimentaire",
    excerpt: "Reportage au cœur des champs de Casamance : les agricultrices du réseau NSS racontent comment l'agroécologie a transformé leur quotidien et renforcé leur indépendance alimentaire.",
    date: "1 sept. 2025", sortDate: "2025-09-01", tag: "Agroécologie", vues: "12 400", duree: "8 min",
    thumb: "https://img.youtube.com/vi/LGkcZMWNgZA/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a4a2e,#2d7a4e)",
    youtubeId: "LGkcZMWNgZA",
  },
  {
    pays: "Guinée", titre: "Se NaAgri — combat des agricultrices pour l'accès à la propriété",
    excerpt: "En Guinée, le mouvement Se NaAgri mobilise des centaines de femmes pour obtenir des titres fonciers. Ce documentaire suit trois d'entre elles dans leurs démarches.",
    date: "12 juil. 2025", sortDate: "2025-07-12", tag: "Foncier", vues: "4 800", duree: "6 min",
    thumb: "https://img.youtube.com/vi/FothaoeQsQ8/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#2a1a3a,#5a3a7a)",
    youtubeId: "FothaoeQsQ8",
  },
  {
    pays: "Mali", titre: "Témoignage de Mariama Sanko — l'agroécologie en pratique",
    excerpt: "Mariama Sanko, coordinatrice de 40 groupements au Mali, explique comment elle a introduit le compostage et la rotation des cultures dans sa région, doublant les rendements en trois ans.",
    date: "18 déc. 2025", sortDate: "2025-12-18", tag: "Témoignage", vues: "3 200", duree: "9 min",
    thumb: "https://img.youtube.com/vi/boT5gIW072Q/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a2a3a,#2a5a7a)",
    youtubeId: "boT5gIW072Q",
  },
  {
    pays: "Burkina Faso", titre: "Quatrième édition du CIFAP — Formation sur l'Agroécologie Paysanne",
    excerpt: "Des centaines de femmes rurales venues de toute l'Afrique de l'Ouest réunies pour partager savoirs, pratiques et engagements autour de la souveraineté alimentaire.",
    date: "30 août 2025", sortDate: "2025-08-30", tag: "Formation", vues: "5 100", duree: "18 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.mp4",
  },
  {
    pays: "Sénégal", titre: "CIFAP 4e édition — Mme Tabara partage ses impressions sur l'agroécologie",
    excerpt: "Lors de la quatrième édition du CIFAP, Mme Tabara a salué l'initiative qui permet de renforcer les compétences en agroécologie. Pour elle, le CIFAP est un véritable cadre d'apprentissage, de partage d'expériences et de réseautage entre jeunes, femmes et acteurs du monde rural.",
    date: "30 août 2025", sortDate: "2025-08-30", tag: "Formation", vues: "3 800", duree: "5 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.mp4",
  },
  {
    pays: "Mali", titre: "Ziguinchor TV — CIFAP 3e édition : Iya Diakité, Coordinatrice NSS Mali",
    excerpt: "Iya Diakité, coordinatrice du mouvement NSS au Mali, revient sur les enseignements de la 3ème édition du CIFAP à Niaguis. Elle partage comment les pratiques agroécologiques transmises lors de ces camps de formation transforment les communautés rurales.",
    date: "30 août 2025", sortDate: "2025-08-30", tag: "Témoignage", vues: "2 100", duree: "4 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776020349/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Niaguis_Mouvement_NSS_Iya_Diakit%C3%A9_Coordonnatrice_Mvt_NSS_Mali_gkeoco.jpg",
    bg: "linear-gradient(135deg,#1a2a3a,#2a5a7a)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776020349/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Niaguis_Mouvement_NSS_Iya_Diakit%C3%A9_Coordonnatrice_Mvt_NSS_Mali_gkeoco.mp4",
  },
  {
    pays: "Sénégal", titre: "Ziguinchor TV — CIFAP 3e édition : Mme Mariama Sonko, Présidente NSS",
    excerpt: "Mme Mariama Sonko, présidente du mouvement NSS, exprime sa fierté et sa vision pour la 3ème édition du CIFAP à Niaguis. Un moment fort pour le mouvement des femmes rurales d'Afrique de l'Ouest.",
    date: "30 août 2025", sortDate: "2025-08-30", tag: "Formation", vues: "1 900", duree: "3 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776021074/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Mouvement_NSS_Mme_Mariama_Sonko_Pr%C3%A9sidente_NSS_2_adfoi0.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#2a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776021074/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Mouvement_NSS_Mme_Mariama_Sonko_Pr%C3%A9sidente_NSS_2_adfoi0.mp4",
  },
];

const MINI: MiniCard[] = [
  {
    bg: "linear-gradient(135deg,#0f2b2b,#1a4a4a)", duree: "VIDÉO · 18 MIN", pays: "Burkina Faso",
    titre: "Quatrième édition du CIFAP — Formation sur l'Agroécologie Paysanne",
    meta: "30 août 2025 · 5 100 vues",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.jpg",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.mp4",
  },
];

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function getActiveVideo(card: VideoCard | MiniCard): ActiveVideo | null {
  if (card.cloudinaryUrl) return { type: "cloudinary", src: card.cloudinaryUrl, titre: card.titre };
  if (card.youtubeId)     return { type: "youtube",    src: card.youtubeId,     titre: card.titre };
  if (card.facebookUrl)   return { type: "facebook",   src: card.facebookUrl,   titre: card.titre };
  return null;
}

/* ── Modal ──────────────────────────────────────────────────────────────────── */

function cloudinaryThumb(url: string): string {
  return url.replace(/\/f_auto\//, "/f_jpg,so_0/").replace(/\.mp4$/, ".jpg");
}

function VideoModal({ video, onClose }: { video: ActiveVideo; onClose: () => void }) {
  const [ready, setReady] = useState(false);
  const poster = video.type === "cloudinary" ? cloudinaryThumb(video.src) : undefined;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.88)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "900px", position: "relative" }}
      >
        {/* Titre */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px", gap: "16px" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: 0 }}>
            {video.titre}
          </p>
          <button
            onClick={onClose}
            style={{ flexShrink: 0, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <X size={18} color="#fff" />
          </button>
        </div>

        {/* Lecteur */}
        <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: "12px", overflow: "hidden", background: "#000" }}>
          {/* Spinner pendant le chargement */}
          {!ready && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.2)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite" }} />
            </div>
          )}

          {video.type === "youtube" ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.src}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              onLoad={() => setReady(true)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          ) : video.type === "facebook" ? (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.src)}&show_text=false&autoplay=true&mute=false`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setReady(true)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <video
              src={video.src}
              poster={poster}
              preload="metadata"
              controls
              autoPlay
              playsInline
              onCanPlay={() => setReady(true)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "#000" }}
            />
          )}
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "10px", textAlign: "center" }}>
          Cliquez en dehors pour fermer
        </p>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────────────── */

type ViewMode = "grid" | "list";
interface Props { activeTab: string; activePill: string; search: string; }

export default function MediathequeGrid({ activePill, search }: Props) {
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const display = CARDS
    .filter((c) => {
      if (activePill !== "Tous" && c.pays !== activePill) return false;
      if (search && !c.titre.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  const cards = display.length > 0 ? display : [...CARDS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  const featuredVideo: ActiveVideo = { type: "youtube", src: "LGkcZMWNgZA", titre: "Journal du 1er septembre 2025 — Femmes paysannes et souveraineté alimentaire" };

  return (
    <>
      {/* Modal */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}

      {/* S4 — Featured */}
      <section className="mth-pad" style={{ paddingTop: "24px" }}>
        <div className="mth-feat" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>

          {/* Carte principale */}
          <div
            onClick={() => setActiveVideo(featuredVideo)}
            style={{ borderRadius: "12px", overflow: "hidden", position: "relative", cursor: "pointer", height: "400px", backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%), url(https://img.youtube.com/vi/LGkcZMWNgZA/maxresdefault.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
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
            {MINI.map((c, i) => {
              const av = getActiveVideo(c);
              return (
                <div
                  key={i}
                  onClick={() => av && setActiveVideo(av)}
                  style={{ background: c.bg, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%), url(${c.thumb})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "10px", position: "relative", cursor: av ? "pointer" : "default", flex: 1, minHeight: "190px", overflow: "hidden" }}
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* S5 — Grille vidéos */}
      <section className="mth-pad" style={{ paddingTop: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: "#1a1a1a" }}>
            Toutes les vidéos
            <span style={{ fontSize: "13px", color: "#888", fontWeight: 400, marginLeft: "6px" }}>({cards.length} vidéos)</span>
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
          {cards.map((card, i) => {
            const av = getActiveVideo(card);
            return (
              <div
                key={i}
                className="mth-card"
                onClick={() => av && setActiveVideo(av)}
                style={{ background: "#fff", border: "0.5px solid #e8ede9", borderRadius: "10px", overflow: "hidden", cursor: av ? "pointer" : "default", display: "flex", flexDirection: "column" }}
              >
                <div style={{ height: "200px", position: "relative", background: card.bg, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%), url(${card.thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <span style={{ position: "absolute", top: "8px", left: "8px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", padding: "2px 7px", borderRadius: "4px", background: "rgba(0,0,0,0.5)", color: "#e8f5eb" }}>
                    Vidéo · {card.duree}
                  </span>
                  <span style={{ position: "absolute", top: "8px", right: "8px", fontSize: "10px", fontWeight: 600, padding: "2px 7px", borderRadius: "4px", background: "rgba(0,0,0,0.35)", color: "#e8f5eb" }}>{card.pays}</span>
                  {av && (
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }}>
                      <Play size={14} color="#fff" fill="#fff" style={{ marginLeft: "2px" }} />
                    </div>
                  )}
                </div>
                <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, marginBottom: "8px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.titre}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#555", lineHeight: 1.6, flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.excerpt}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", borderTop: "1px solid #f0f0f0", paddingTop: "10px" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#aaa" }}>{card.date} · {card.vues} vues</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, background: "#eaf3ee", color: "#1a6b3c", padding: "2px 8px", borderRadius: "20px", whiteSpace: "nowrap" }}>{card.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
