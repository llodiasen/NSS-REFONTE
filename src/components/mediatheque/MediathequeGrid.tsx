"use client"

import { useState } from "react"
import { X } from "lucide-react"

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface VideoCard {
  categorie: string
  titre: string
  excerpt: string
  date: string
  sortDate: string
  duree: string
  thumb: string
  bg: string
  youtubeId?: string
  cloudinaryUrl?: string
  localUrl?: string
}

interface ActiveVideo {
  type: "youtube" | "cloudinary" | "local"
  src: string
  titre: string
}

/* ── Data ───────────────────────────────────────────────────────────────────── */

/* Toutes les vidéos disponibles du projet, ordre décroissant par date */
const CARDS: VideoCard[] = [
  /* ── Mai 2026 ── */
  {
    categorie: "NSS",
    titre: "Vidéo NSS — Mouvement Nous Sommes la Solution",
    excerpt: "Le mouvement NSS en action — femmes rurales, agroécologie et souveraineté alimentaire en Afrique de l'Ouest.",
    date: "Mai 2026", sortDate: "2026-05-01", duree: "3 min",
    thumb: "https://img.youtube.com/vi/_2AqLsFeSV8/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#2a6b3c)",
    youtubeId: "_2AqLsFeSV8",
  },
  {
    categorie: "Agroécologie",
    titre: "Nos semences, notre culture, notre identité !",
    excerpt: "Mariama Sonko, Présidente du Mouvement NSS, prend la parole à la Foire locale des Semences Paysannes à Ndiémane : « Les semences, c'est notre mémoire, notre histoire, notre avenir. »",
    date: "Mai 2026", sortDate: "2026-04-30", duree: "5 min",
    thumb: "https://img.youtube.com/vi/Mj5bZNDsdco/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a5c34)",
    youtubeId: "Mj5bZNDsdco",
  },
  /* ── Octobre 2025 ── */
  {
    categorie: "Événements",
    titre: "Journée internationale de la femme rurale 2025 — Tambacounda",
    excerpt: "Célébrée à Tambacounda, la Journée internationale de la femme rurale 2025 a réuni les femmes de la Gambie, de la Guinée-Bissau et du Sénégal. Événement présidé par Mariama Sonko, Présidente du Mouvement Panafricain NSS.",
    date: "Octobre 2025", sortDate: "2025-10-15", duree: "15 min",
    thumb: "/images/actualites/tamba-femmes-rurales-changement-climatique.webp",
    bg: "linear-gradient(135deg,#1a2a0f,#3a6b1c)",
    localUrl: "/Videos/Journ%C3%A9e%20internationale%20de%20la%20femme%20rurale%202025.mp4",
  },
  /* ── 15 sept. 2025 ── */
  {
    categorie: "Événements",
    titre: "CIFAP 2025 — Mme Mariama Sonko rend hommage à M. Razack Belemgnegre",
    excerpt: "À l'ouverture de la 4e édition du CIFAP 2025, Mme Mariama Sonko rend un hommage appuyé à M. Razack Belemgnegre pour son engagement et sa contribution au mouvement.",
    date: "15 sept. 2025", sortDate: "2025-09-15", duree: "49 s",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776019281/NSS_CIFAP_2025_Mariama_Sonko_hommage_Razack_Belemgnegre_ouverture_4e_edition.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#2a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776019281/NSS_CIFAP_2025_Mariama_Sonko_hommage_Razack_Belemgnegre_ouverture_4e_edition.mp4",
  },
  {
    categorie: "Événements",
    titre: "CIFAP 2025 — Mme Tabara Ndiaye invite les femmes NSS à s'engager dans la lutte",
    excerpt: "À l'occasion du CIFAP 2025, Mme Tabara Ndiaye lance un appel vibrant aux femmes du mouvement NSS à renforcer leur engagement pour la souveraineté alimentaire.",
    date: "15 sept. 2025", sortDate: "2025-09-14", duree: "3 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775993935/Cifap_2025__Mme_Tabara_Ndiaye_invite_les_femmes_du_mouvement_NSS_%C3%A0_s_engager_plus_dans_la_lutte_vwpfgz.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a5c34)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775993935/Cifap_2025__Mme_Tabara_Ndiaye_invite_les_femmes_du_mouvement_NSS_%C3%A0_s_engager_plus_dans_la_lutte_vwpfgz.mp4",
  },
  /* ── 1 sept. 2025 ── */
  {
    categorie: "Médias",
    titre: "Journal TV 20h — Femmes paysannes et souveraineté alimentaire",
    excerpt: "Le mouvement NSS à la une du Journal Télévisé de 20h. Une couverture médiatique nationale qui met en lumière les actions des femmes rurales pour la souveraineté alimentaire.",
    date: "1 sept. 2025", sortDate: "2025-09-01", duree: "4 min",
    thumb: "https://img.youtube.com/vi/LGkcZMWNgZA/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a4a2e,#2d7a4e)",
    youtubeId: "LGkcZMWNgZA",
  },
  /* ── 30 août 2025 ── */
  {
    categorie: "Événements",
    titre: "Quatrième édition du CIFAP — Camp International de Formation sur l'Agroécologie Paysanne",
    excerpt: "Des centaines de femmes rurales venues de toute l'Afrique de l'Ouest réunies pendant plusieurs jours pour partager savoirs, pratiques et engagements autour de la souveraineté alimentaire.",
    date: "30 août 2025", sortDate: "2025-08-30", duree: "18 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1775999944/Quatri%C3%A8me_%C3%A9dition_du_Camp_International_de_Formation_sur_l_Agro%C3%A9cologie_Paysanne_CIFAP_jppmln.mp4",
  },
  {
    categorie: "Événements",
    titre: "CIFAP 4e édition — Mme Tabara partage ses impressions sur l'agroécologie",
    excerpt: "Lors de la 4e édition du CIFAP, Mme Tabara a salué l'initiative qui renforce les compétences en agroécologie. Un véritable cadre d'apprentissage, de partage d'expériences et de réseautage.",
    date: "30 août 2025", sortDate: "2025-08-29", duree: "5 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#1a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776000623/20_NOUS_SOMMES_LA_SOLUTION_-_Facebook_uf48gq.mp4",
  },
  {
    categorie: "NSS",
    titre: "Ziguinchor TV — CIFAP 3e édition : Mme Mariama Sonko, Présidente NSS",
    excerpt: "Mme Mariama Sonko, présidente du mouvement NSS, exprime sa fierté et sa vision pour la 3e édition du CIFAP à Niaguis. Un moment fort pour les femmes rurales d'Afrique de l'Ouest.",
    date: "30 août 2025", sortDate: "2025-08-28", duree: "3 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776021074/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Mouvement_NSS_Mme_Mariama_Sonko_Pr%C3%A9sidente_NSS_2_adfoi0.jpg",
    bg: "linear-gradient(135deg,#0f2b1a,#2a6b3c)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776021074/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Mouvement_NSS_Mme_Mariama_Sonko_Pr%C3%A9sidente_NSS_2_adfoi0.mp4",
  },
  {
    categorie: "NSS",
    titre: "Ziguinchor TV — CIFAP 3e édition : Iya Diakité, Coordinatrice NSS Mali",
    excerpt: "Iya Diakité, coordinatrice NSS au Mali, revient sur les enseignements de la 3e édition du CIFAP. Elle partage comment les pratiques agroécologiques transforment les communautés rurales.",
    date: "30 août 2025", sortDate: "2025-08-27", duree: "4 min",
    thumb: "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776020349/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Niaguis_Mouvement_NSS_Iya_Diakit%C3%A9_Coordonnatrice_Mvt_NSS_Mali_gkeoco.jpg",
    bg: "linear-gradient(135deg,#1a2a3a,#2a5a7a)",
    cloudinaryUrl: "https://res.cloudinary.com/dtjvjlkcc/video/upload/q_auto/f_auto/v1776020349/Ziguinchor_TV_CIFAP_3%C3%A8me_Edition_Niaguis_Mouvement_NSS_Iya_Diakit%C3%A9_Coordonnatrice_Mvt_NSS_Mali_gkeoco.mp4",
  },
  /* ── 15 nov. 2024 ── */
  {
    categorie: "NSS",
    titre: "30 Min avec Mariama Sonko : Écoféminisme et Agroécologie",
    excerpt: "Interview approfondie avec Mariama Sonko, leader du mouvement NSS, sur les liens entre écoféminisme et agroécologie. Une vision politique et spirituelle de la relation des femmes rurales à la terre.",
    date: "15 nov. 2024", sortDate: "2024-11-15", duree: "28 min",
    thumb: "https://img.youtube.com/vi/boT5gIW072Q/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a2a3a,#2a5a7a)",
    youtubeId: "boT5gIW072Q",
  },
  /* ── 20 juin 2024 ── */
  {
    categorie: "Agroécologie",
    titre: "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété",
    excerpt: "Reportage de terrain au Sénégal sur les luttes des femmes rurales pour accéder à la propriété foncière. Témoignages de paysannes qui cultivent depuis des générations des terres qu'elles ne possèdent pas.",
    date: "20 juin 2024", sortDate: "2024-06-20", duree: "12 min",
    thumb: "https://img.youtube.com/vi/FothaoeQsQ8/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#2a1a3a,#5a3a7a)",
    youtubeId: "FothaoeQsQ8",
  },
  /* ── 22 mars 2024 ── */
  {
    categorie: "Agroécologie",
    titre: "NSS à Pescara – Journée Mondiale de l'Eau (1/3)",
    excerpt: "Première partie du reportage sur la participation de NSS à la Journée Mondiale de l'Eau à Pescara. Le mouvement y a porté la voix des femmes rurales africaines sur les enjeux de l'accès à l'eau.",
    date: "22 mars 2024", sortDate: "2024-03-22", duree: "8 min",
    thumb: "https://img.youtube.com/vi/Bj5Z013_iQU/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a3a4a,#2a7a8a)",
    youtubeId: "Bj5Z013_iQU",
  },
  {
    categorie: "Agroécologie",
    titre: "NSS à Pescara – Journée Mondiale de l'Eau (2/3)",
    excerpt: "Ateliers, échanges et témoignages croisés entre membres NSS et partenaires européens autour des pratiques agroécologiques de préservation des ressources en eau.",
    date: "22 mars 2024", sortDate: "2024-03-21", duree: "7 min",
    thumb: "https://img.youtube.com/vi/_3_fEjTOi3I/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a3a4a,#2a7a8a)",
    youtubeId: "_3_fEjTOi3I",
  },
  {
    categorie: "Agroécologie",
    titre: "NSS à Pescara – Journée Mondiale de l'Eau (3/3)",
    excerpt: "Déclarations finales, engagements collectifs et message de solidarité internationale porté par les femmes rurales du mouvement NSS lors de la Journée Mondiale de l'Eau.",
    date: "22 mars 2024", sortDate: "2024-03-20", duree: "6 min",
    thumb: "https://img.youtube.com/vi/psKIMgwaV7Y/maxresdefault.jpg",
    bg: "linear-gradient(135deg,#1a3a4a,#2a7a8a)",
    youtubeId: "psKIMgwaV7Y",
  },
]

const PER_PAGE = 9

/* ── Helper ─────────────────────────────────────────────────────────────────── */

function getActiveVideo(card: VideoCard): ActiveVideo | null {
  if (card.localUrl)      return { type: "local",      src: card.localUrl,      titre: card.titre }
  if (card.cloudinaryUrl) return { type: "cloudinary", src: card.cloudinaryUrl, titre: card.titre }
  if (card.youtubeId)     return { type: "youtube",    src: card.youtubeId,     titre: card.titre }
  return null
}

function cloudinaryThumb(url: string): string {
  return url.replace(/\/f_auto\//, "/f_jpg,so_0/").replace(/\.mp4$/, ".jpg")
}

/* ── Play icon ──────────────────────────────────────────────────────────────── */

function IconPlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: "2px" }}>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

/* ── Modal ──────────────────────────────────────────────────────────────────── */

function VideoModal({ video, onClose }: { video: ActiveVideo; onClose: () => void }) {
  const [ready, setReady] = useState(false)
  const poster = video.type === "cloudinary" ? cloudinaryThumb(video.src) : undefined

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "900px", position: "relative" }}>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px", gap: "16px" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif", fontSize: "16px", fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: 0 }}>
            {video.titre}
          </p>
          <button
            onClick={onClose}
            aria-label="Fermer la vidéo"
            style={{ flexShrink: 0, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <X size={18} color="#fff" />
          </button>
        </div>

        <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: "12px", overflow: "hidden", background: "#000" }}>
          {!ready && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.2)", borderTopColor: "#fff", animation: "mgSpin 0.8s linear infinite" }} />
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

        <p style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "10px", textAlign: "center" }}>
          Cliquez en dehors pour fermer
        </p>
      </div>
    </div>
  )
}

/* ── Main ───────────────────────────────────────────────────────────────────── */

interface Props { activeTab: string; activePill: string; search: string }

export default function MediathequeGrid({ activePill, search }: Props) {
  const [page, setPage] = useState(1)
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null)

  const filtered = CARDS
    .filter((c) => {
      if (activePill !== "Tous" && c.categorie !== activePill) return false
      if (search && !c.titre.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}

      <section className="mg-wrap" aria-label="Grille de vidéos">

        {/* Header grille */}
        <div className="mg-bar">
          <span className="mg-count">
            {filtered.length} vidéo{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grille */}
        {paged.length > 0 ? (
          <div className="mg-grid" role="list">
            {paged.map((card, i) => {
              const av = getActiveVideo(card)
              return (
                <article
                  key={i}
                  className="mg-card"
                  role="listitem"
                  onClick={() => av && setActiveVideo(av)}
                  style={{ cursor: av ? "pointer" : "default" }}
                  aria-label={card.titre}
                >
                  {/* Thumbnail */}
                  <div
                    className="mg-thumb"
                    style={card.thumb
                      ? { backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%), url(${card.thumb})` }
                      : { background: card.bg }
                    }
                  >

                    <span className="mg-duree">{card.duree}</span>

                    {av && (
                      <div className="mg-play" aria-hidden="true">
                        <IconPlay />
                      </div>
                    )}
                  </div>

                  {/* Corps */}
                  <div className="mg-corps">
                    <div className="mg-top">
                      <span className="mg-badge">{card.categorie}</span>
                      <span className="mg-date">{card.date}</span>
                    </div>

                    <h3 className="mg-h3">{card.titre}</h3>
                    <p className="mg-excerpt">{card.excerpt}</p>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="mg-empty">
            <p>Aucune vidéo ne correspond à votre recherche.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mg-pag" role="navigation" aria-label="Pagination">
            <button
              className="mg-pag-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Page précédente"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                className={`mg-pag-btn${page === n ? " mg-pag-btn--active" : ""}`}
                onClick={() => setPage(n)}
                aria-label={`Page ${n}`}
                aria-current={page === n ? "page" : undefined}
              >
                {n}
              </button>
            ))}
            <button
              className="mg-pag-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Page suivante"
            >
              ›
            </button>
          </div>
        )}

        {/* CTA bas de page */}
        <div className="mg-cta-wrap">
          <div className="mg-cta-box">
            <div>
              <p className="mg-cta-title">Vous avez filmé une action sur le terrain ?</p>
              <p className="mg-cta-sub">Partagez vos vidéos avec les 175&nbsp;000 membres du réseau NSS.</p>
            </div>
            <button className="mg-cta-btn">Soumettre une vidéo</button>
          </div>
        </div>

      </section>

      <style>{`
        /* ── WRAP ── */
        .mg-wrap {
          padding: 28px 80px 60px;
        }

        /* ── HEADER BAR ── */
        .mg-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .mg-count {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
        }

        /* ── GRILLE ── */
        .mg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        /* ── CARD ── */
        .mg-card {
          border: 0.5px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, box-shadow 0.2s;
          height: 100%;
        }
        .mg-card:hover {
          border-color: #b8d4bc;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
        }

        /* ── THUMB ── */
        .mg-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #0f2b1a;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .mg-duree {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0,0,0,0.62);
          color: #ffffff;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 4px;
          z-index: 2;
        }
        .mg-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          border: 2px solid rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          z-index: 2;
          backdrop-filter: blur(2px);
          transition: background 0.2s, transform 0.2s;
        }
        .mg-card:hover .mg-play {
          background: rgba(255,255,255,0.28);
          transform: translate(-50%, -50%) scale(1.08);
        }

        /* ── CORPS ── */
        .mg-corps {
          padding: 18px 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .mg-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .mg-badge {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #045627;
          background: #eaf5ee;
          border: 1px solid #c3e6cc;
          border-radius: 99px;
          padding: 3px 10px;
          white-space: nowrap;
        }
        .mg-date {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #9ca3af;
          white-space: nowrap;
        }
        .mg-h3 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 17px;
          font-weight: 400;
          color: #2A2A2A;
          line-height: 1.25;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: calc(17px * 1.25 * 2);
        }
        .mg-excerpt {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
          flex: 1;
          text-align: justify;
          text-align-last: left;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── EMPTY ── */
        .mg-empty {
          text-align: center;
          padding: 60px 0;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 15px;
          color: #9ca3af;
        }

        /* ── PAGINATION ── */
        .mg-pag {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 32px 0 8px;
        }
        .mg-pag-btn {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          color: #555555;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mg-pag-btn:hover:not(:disabled):not(.mg-pag-btn--active) {
          border-color: #00AD4C;
          color: #00AD4C;
        }
        .mg-pag-btn--active {
          background: #045627;
          border-color: #045627;
          color: #ffffff;
          font-weight: 600;
        }
        .mg-pag-btn:disabled {
          opacity: 0.35;
          cursor: default;
        }

        /* ── CTA BAS ── */
        .mg-cta-wrap {
          margin-top: 40px;
        }
        .mg-cta-box {
          background: #045627;
          border-radius: 14px;
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .mg-cta-title {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 4px;
        }
        .mg-cta-sub {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          margin: 0;
        }
        .mg-cta-btn {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          background: #A5CE46;
          color: #045627;
          font-size: 13px;
          font-weight: 500;
          padding: 11px 22px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.02em;
          transition: background 0.2s;
        }
        .mg-cta-btn:hover { background: #96be38; }

        /* ── SPINNER ── */
        @keyframes mgSpin { to { transform: rotate(360deg); } }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .mg-wrap { padding: 24px 40px 48px; }
          .mg-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .mg-wrap { padding: 20px 20px 40px; }
          .mg-grid { grid-template-columns: 1fr; }
          .mg-cta-box { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  )
}
