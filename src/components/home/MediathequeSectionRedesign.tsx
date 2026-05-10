"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

// ─── NSS Palette stricte ────────────────────────────────────────────────────
const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#A5CE46',
  or:           '#E8A838',
  creme:        '#F5EDD6',
} as const

/* ─── Types ────────────────────────────────────────────────── */
type VideoSource = "local" | "cloudinary" | "youtube";

interface VideoItem {
  id: string;
  videoSource: VideoSource;
  videoUrl: string | null;
  youtubeId: string | null;
  titre: string;
  date: string;
  region: string;
  thumb: string;
  description: string;
  tags: string[];
}

/* ─── Vidéos réelles ───────────────────────────────────────── */
const LOCAL_MP4 =
  "/Videos/Agro%C3%A9cologie%20et%20changement%20de%20paradigme%20pour%20une%20souverainet%C3%A9%20alimentaire%20-%20%C3%80%20Niaguis.mp4";

const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    videoSource: "local",
    videoUrl: LOCAL_MP4,
    youtubeId: null,
    titre: "Agroécologie et changement de paradigme : l'Afrique de l'Ouest porte son plaidoyer depuis Niaguis",
    date: "2024",
    region: "Niaguis, Casamance — Sénégal",
    thumb: "/images/actualites/nss-cifap-2025.jpg",
    description:
      "Après une immersion d'une semaine au centre agroécologique de Niaguis, les organisations paysannes de femmes du Burkina Faso, de la Gambie, du Ghana, de la Guinée-Bissau et du Sénégal rentrent mieux outillées pour promouvoir l'agroécologie dans leurs communautés.",
    tags: ["Agroécologie", "Niaguis", "Plaidoyer"],
  },
  {
    id: "v2",
    videoSource: "cloudinary",
    videoUrl:
      "https://res.cloudinary.com/dtjvjlkcc/video/upload/v1776019281/NSS_CIFAP_2025_Mariama_Sonko_hommage_Razack_Belemgnegre_ouverture_4e_edition.mp4",
    youtubeId: null,
    titre: "Niaguis, terre de convergence : le CIFAP allume sa 4ᵉ flamme agroécologique",
    date: "2025",
    region: "Niaguis, Casamance — Sénégal",
    thumb:
      "https://res.cloudinary.com/dtjvjlkcc/video/upload/f_jpg,so_2/v1776019281/NSS_CIFAP_2025_Mariama_Sonko_hommage_Razack_Belemgnegre_ouverture_4e_edition.jpg",
    description:
      "Ouverture du CIFAP 2025 à Niaguis : la 4ᵉ édition du Camp International de Formation sur l'Agroécologie Paysanne réunit productrices, femmes leaders et acteurs ruraux de toute l'Afrique de l'Ouest.",
    tags: ["CIFAP 2025", "Formation", "Ouverture"],
  },
  {
    id: "v3",
    videoSource: "youtube",
    videoUrl: null,
    youtubeId: "boT5gIW072Q",
    titre: "30 min avec Mariama Sonko : Écoféminisme et Agroécologie",
    date: "2024",
    region: "International",
    thumb: "https://img.youtube.com/vi/boT5gIW072Q/hqdefault.jpg",
    description:
      "Mariama Sonko, présidente du mouvement NSS, développe les liens profonds entre écoféminisme et agroécologie paysanne — une vision politique des femmes rurales et de leur rapport à la terre.",
    tags: ["Interview", "Écoféminisme", "Leadership"],
  },
];

/* ─── Modal lecteur ────────────────────────────────────────── */
function VideoModal({ item, onClose }: { item: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="mm-ov"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.titre}
    >
      <button className="mm-close" onClick={onClose} aria-label="Fermer">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="mm-box" onClick={(e) => e.stopPropagation()}>
        {item.videoSource === "youtube" ? (
          <iframe
            className="mm-iframe"
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.titre}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        ) : (
          <video className="mm-video" src={item.videoUrl!} controls autoPlay playsInline />
        )}
        <p className="mm-caption">
          {item.titre}
          <span className="mm-cap-meta"> — {item.region} · {item.date}</span>
        </p>
      </div>
      <style>{`
        .mm-ov {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(2,22,10,0.92);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; backdrop-filter: blur(8px);
          animation: mm-in 0.18s ease;
        }
        @keyframes mm-in { from { opacity: 0 } to { opacity: 1 } }
        .mm-close {
          position: fixed; top: 20px; right: 24px;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
          color: #fff; border-radius: 50%; width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s; z-index: 10001;
        }
        .mm-close:hover { background: rgba(255,255,255,0.20); }
        .mm-box { width: 100%; max-width: 900px; display: flex; flex-direction: column; gap: 14px; }
        .mm-iframe { width: 100%; aspect-ratio: 16/9; border: none; border-radius: 6px; background: #000; }
        .mm-video { width: 100%; max-height: 72vh; border-radius: 6px; background: #000; display: block; }
        .mm-caption {
          font-family: var(--font-dm-sans, 'DM Sans', sans-serif);
          font-size: 13px; color: rgba(255,255,255,0.72);
          margin: 0; text-align: center; line-height: 1.5;
        }
        .mm-cap-meta { color: rgba(255,255,255,0.40); }
      `}</style>
    </div>
  );
}

/* ─── Animation helpers ────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.72, delay, ease },
})

const inViewScale = (delay = 0) => ({
  initial:     { opacity: 0, y: 30, scale: 0.97 as number },
  whileInView: { opacity: 1, y: 0,  scale: 1    as number },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.80, delay, ease },
})

/* ─── Carte vidéo ──────────────────────────────────────────── */
function VideoCard({ item, onOpen, index }: { item: VideoItem; onOpen: () => void; index: number }) {
  return (
    <motion.article
      className="vc"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: 0.08 + index * 0.14, ease }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Thumbnail cliquable */}
      <button
        className="vc__thumb"
        onClick={onOpen}
        aria-label={`Lire : ${item.titre}`}
      >
        <Image
          src={item.thumb}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        {/* Overlay vert au hover */}
        <span className="vc__hover-ov" aria-hidden="true" />

        {/* Badge région */}
        <span className="vc__badge" aria-hidden="true">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v14l11-7z" />
          </svg>
          VIDÉO
        </span>

        {/* Bouton play or */}
        <span className="vc__play" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#E8A838" opacity="0.92" />
            <circle cx="32" cy="32" r="31" fill="none" stroke="rgba(232,168,56,0.4)" strokeWidth="1.5" />
            <path d="M26 20l20 12-20 12V20z" fill="#045627" />
          </svg>
        </span>

        {/* Pulse ring */}
        <span className="vc__pulse" aria-hidden="true" />
      </button>

      {/* Corps */}
      <div className="vc__body">
        <p className="vc__meta">
          <MapPin size={11} strokeWidth={1.8} className="vc__meta-icon" aria-hidden="true" />
          <span>{item.region}</span>
          <Calendar size={11} strokeWidth={1.8} className="vc__meta-icon" aria-hidden="true" />
          <span>{item.date}</span>
        </p>
        <h3 className="vc__titre">
          <button className="vc__titre-btn" onClick={onOpen}>
            {item.titre}
          </button>
        </h3>
        <p className="vc__desc">{item.description}</p>
        <div className="vc__tags" role="list">
          {item.tags.map((t) => (
            <span key={t} className="vc__tag" role="listitem">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ──────────────────────────────────────────────── */
export default function MediathequeSectionRedesign() {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <>
      {active && <VideoModal item={active} onClose={() => setActive(null)} />}

      <section className="vds" aria-labelledby="vds-heading">

        {/* Grille de fond subtile */}
        <div className="vds__pattern" aria-hidden="true" />

        <div className="vds__wrap">

          {/* ── En-tête ── */}
          <header className="vds__hd">

            <motion.div className="vds__eyebrow" {...inView(0.06)}>
              <span className="vds__ey-line" />
              <span className="vds__ey-txt">VIDÉOS</span>
              <span className="vds__ey-line vds__ey-line--r" />
            </motion.div>

            <motion.h2 id="vds-heading" className="vds__h2" {...inViewScale(0.16)}>
              Le mouvement NSS <em>en vidéo.</em>
            </motion.h2>
            <motion.span
              className="vds__underline"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center' }}
            />

            <motion.p className="vds__sub" {...inView(0.26)}>
              Témoignages de terrain, formations et plaidoyers — des femmes rurales
              qui prennent la parole à travers 14&nbsp;pays d&apos;Afrique de l&apos;Ouest.
            </motion.p>
          </header>

          {/* ── Grille 3 cartes ── */}
          <ul className="vds__grid" role="list" aria-label="Vidéos NSS">
            {VIDEOS.map((item, idx) => (
              <li key={item.id} role="listitem">
                <VideoCard item={item} onOpen={() => setActive(item)} index={idx} />
              </li>
            ))}
          </ul>

          {/* ── CTA ── */}
          <motion.div className="vds__foot" {...inView(0.20)}>
            <motion.div
              className="vds__sep"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.90, ease }}
              style={{ transformOrigin: 'center' }}
            />
            <Link href="/fr/mediatheque" className="vds__cta">
              Voir toutes les vidéos
              <svg width="14" height="8" viewBox="0 0 16 9" fill="none" aria-hidden="true">
                <path d="M1 4.5h13M10 1l4 3.5-4 3.5" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <style>{`
          /* ══ Section ════════════════════════════════════════ */
          .vds {
            position: relative;
            background: #ffffff;
            border-top: 1px solid rgba(0,0,0,0.06);
            overflow: hidden;
          }

          /* Grille fond subtile */
          .vds__pattern {
            position: absolute; inset: 0;
            background-image:
              repeating-linear-gradient(0deg, transparent, transparent 56px, rgba(0,173,76,0.025) 56px, rgba(0,173,76,0.025) 57px),
              repeating-linear-gradient(90deg, transparent, transparent 56px, rgba(0,173,76,0.025) 56px, rgba(0,173,76,0.025) 57px);
            pointer-events: none; z-index: 0;
          }

          .vds__wrap {
            position: relative; z-index: 1;
            max-width: 1200px; margin: 0 auto;
            padding: 82px 24px;
          }

          /* ══ En-tête ════════════════════════════════════════ */
          .vds__hd { text-align: center; margin-bottom: 54px; }

          .vds__eyebrow {
            display: flex; align-items: center; justify-content: center;
            gap: 16px; margin-bottom: 32px;
          }
          .vds__ey-line {
            display: block; flex: 1; max-width: 56px; height: 1px;
            background: rgba(165,206,70,0.35);
          }
          .vds__ey-txt {
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 9.5px; font-weight: 700;
            letter-spacing: 0.26em; text-transform: uppercase;
            color: ${NSS.vertClair}; white-space: nowrap;
          }

          .vds__h2 {
            font-family: var(--font-display), Georgia, serif;
            font-size: clamp(24px, 2.6vw, 34px);
            font-weight: 700; line-height: 1.2;
            color: #2A2A2A; margin: 0 0 14px;
            letter-spacing: -0.015em;
          }
          .vds__h2 em { font-style: italic; color: ${NSS.vertClair}; }
          .vds__underline {
            display: block;
            height: 2px;
            width: 72px;
            background: ${NSS.vertClair};
            border-radius: 2px;
            margin: 12px auto 24px;
          }

          .vds__sub {
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 16px; font-weight: 400;
            line-height: 1.78; color: #2C2C28;
            max-width: 520px; margin: 0 auto;
          }

          /* ══ Grille ═════════════════════════════════════════ */
          .vds__grid {
            list-style: none; margin: 0; padding: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          /* ══ Carte ══════════════════════════════════════════ */
          .vc {
            background: #FAFAF9;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 2px;
            overflow: hidden;
            display: flex; flex-direction: column;
            height: 100%;
            transition: box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease;
            cursor: pointer;
          }
          .vc:hover {
            box-shadow: 0 16px 48px rgba(0,173,76,0.12);
            border-color: rgba(0,173,76,0.30);
            background: rgba(165,206,70,0.04);
          }

          /* Thumbnail */
          .vc__thumb {
            position: relative; display: block;
            aspect-ratio: 16/10; flex-shrink: 0;
            overflow: hidden; background: #0A1A0E;
            border: none; cursor: pointer; padding: 0; width: 100%;
          }
          .vc__hover-ov {
            position: absolute; inset: 0; z-index: 1;
            background: rgba(4,86,39,0);
            transition: background 0.30s ease;
          }
          .vc__thumb:hover .vc__hover-ov { background: rgba(4,86,39,0.22); }

          /* Badge VIDÉO */
          .vc__badge {
            position: absolute; bottom: 14px; left: 14px; z-index: 3;
            display: flex; align-items: center; gap: 5px;
            background: ${NSS.vertFonce}; color: ${NSS.creme};
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 9px; font-weight: 700;
            letter-spacing: 0.18em; text-transform: uppercase;
            padding: 4px 10px; border-radius: 1px;
          }

          /* Bouton play or */
          .vc__play {
            position: absolute; inset: 0; z-index: 2;
            display: flex; align-items: center; justify-content: center;
            transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
          }
          .vc__thumb:hover .vc__play { transform: scale(1.10); }

          /* Pulse ring autour du play */
          .vc__pulse {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 64px; height: 64px;
            border-radius: 50%;
            border: 1.5px solid rgba(232,168,56,0.38);
            z-index: 2;
            animation: vc-pulse 2.4s ease-out infinite;
            pointer-events: none;
          }
          @keyframes vc-pulse {
            0%   { transform: translate(-50%,-50%) scale(1);    opacity: 0.8; }
            100% { transform: translate(-50%,-50%) scale(1.80); opacity: 0; }
          }

          /* Corps */
          .vc__body {
            padding: 22px 22px 20px;
            display: flex; flex-direction: column;
            flex: 1; gap: 10px;
          }
          .vc__meta {
            display: flex; align-items: center; gap: 6px;
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 11px; color: #888; margin: 0;
          }
          .vc__meta-icon { color: ${NSS.vertPrimaire}; flex-shrink: 0; }

          .vc__titre { margin: 0; }
          .vc__titre-btn {
            background: none; border: none; padding: 0;
            width: 100%; text-align: left; cursor: pointer;
            font-family: var(--font-display), Georgia, serif;
            font-size: clamp(17px, 1.6vw, 20px);
            font-weight: 700; line-height: 1.22;
            color: #0A0A0A;
            transition: color 0.2s;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .vc__titre-btn:hover { color: ${NSS.vertFonce}; }

          .vc__desc {
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 14px; font-weight: 400; line-height: 1.72;
            color: #4A4A4A; text-align: justify; hyphens: auto;
            margin: 0; flex: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .vc__tags {
            display: flex; flex-wrap: wrap; gap: 5px; margin-top: 2px;
          }
          .vc__tag {
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 10px; font-weight: 500;
            color: ${NSS.vertFonce};
            background: rgba(0,173,76,0.07);
            border: 1px solid rgba(0,173,76,0.18);
            padding: 2px 9px; border-radius: 2px;
          }

          /* ══ Footer ══════════════════════════════════════════ */
          .vds__foot {
            margin-top: 60px;
            display: flex; flex-direction: column;
            align-items: center; gap: 24px;
          }
          .vds__sep {
            width: 100%; max-width: 640px; height: 1px;
            background: linear-gradient(90deg, transparent, #D0D0D0 30%, #D0D0D0 70%, transparent);
          }
          .vds__cta {
            display: inline-flex; align-items: center; gap: 10px;
            font-family: var(--font-dm-sans), sans-serif;
            font-size: 11px; font-weight: 700;
            letter-spacing: 0.13em; text-transform: uppercase;
            color: ${NSS.vertFonce}; text-decoration: none;
            border-bottom: 1.5px solid ${NSS.vertClair};
            padding-bottom: 3px;
            transition: color 0.22s ease, gap 0.20s ease;
          }
          .vds__cta:hover { color: ${NSS.vertPrimaire}; gap: 16px; }

          /* ══ Responsive ══════════════════════════════════════ */
          @media (max-width: 1100px) {
            .vds__wrap { padding: 70px 24px; }
          }
          @media (max-width: 1024px) {
            .vds__wrap { padding: 64px 20px; }
            .vds__grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .vds__wrap { padding: 56px 20px; }
            .vds__h2 { line-height: 1.2; }
            .vds__hd { margin-bottom: 40px; }
          }
          @media (max-width: 640px) {
            .vds__grid { grid-template-columns: 1fr; gap: 18px; }
            .vds__wrap { padding: 48px 16px; }
            .vds__h2 { line-height: 1.2; }
          }

          /* ── Réduction de mouvement ── */
          @media (prefers-reduced-motion: reduce) {
            .vc__pulse { animation: none; }
            .vc { transition: box-shadow 0.2s ease; }
          }
        `}</style>
      </section>
    </>
  );
}
