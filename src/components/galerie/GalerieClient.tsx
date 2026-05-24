'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { ALBUMS } from '@/data/galerie'
import type { Album, Categorie, Photo } from '@/data/galerie'
import PageHero from '@/components/ui/PageHero'

/* ── Badge couleurs par catégorie ───────────────────────────── */
const BADGE: Record<Categorie, { bg: string; color: string; label: string }> = {
  cifap:    { bg: '#eaf3de', color: '#3b6d11', label: 'CIFAP' },
  rencontre:{ bg: '#e6f1fb', color: '#185fa5', label: 'Rencontre' },
  foire:    { bg: '#faeeda', color: '#854f0b', label: 'Foire' },
}

/* ── Lightbox ───────────────────────────────────────────────── */
function Lightbox({
  photos, index, onClose, onPrev, onNext,
}: {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const photo = photos[index]

  return (
    <div className="lb-ov" onClick={onClose} role="dialog" aria-modal="true" aria-label="Visionneuse photo">
      {/* Fermer */}
      <button className="lb-close" onClick={onClose} aria-label="Fermer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>

      {/* Prev */}
      <button
        className="lb-nav lb-nav--prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        disabled={index === 0}
        aria-label="Photo précédente"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      {/* Image */}
      <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="lb-img-box">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <p className="lb-caption">{photo.alt}</p>
        <p className="lb-counter">{index + 1} / {photos.length}</p>
      </div>

      {/* Next */}
      <button
        className="lb-nav lb-nav--next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        disabled={index === photos.length - 1}
        aria-label="Photo suivante"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <style>{`
        .lb-ov {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.93);
          display: flex; align-items: center; justify-content: center;
          padding: 60px 80px;
          animation: lb-fade 0.18s ease;
          cursor: pointer;
        }
        @keyframes lb-fade { from { opacity: 0 } to { opacity: 1 } }
        .lb-close {
          position: fixed; top: 20px; right: 24px;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
          color: #fff; border-radius: 50%; width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s; z-index: 10001;
        }
        .lb-close:hover { background: rgba(255,255,255,0.20); }
        .lb-nav {
          position: fixed; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
          color: #fff; border-radius: 50%; width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s; z-index: 10001;
        }
        .lb-nav:disabled { opacity: 0.25; cursor: default; }
        .lb-nav:not(:disabled):hover { background: rgba(255,255,255,0.20); }
        .lb-nav--prev { left: 20px; }
        .lb-nav--next { right: 20px; }
        .lb-img-wrap {
          width: 100%; max-width: 1100px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          cursor: default;
        }
        .lb-img-box {
          position: relative; width: 100%;
          height: min(80vh, 700px);
          border-radius: 8px; overflow: hidden;
        }
        .lb-caption {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; font-size: 13px; font-weight: 300;
          color: rgba(255,255,255,0.60); text-align: center; margin: 0;
        }
        .lb-counter {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.30); letter-spacing: 0.08em; text-align: center; margin: 0;
        }
        @media (max-width: 640px) {
          .lb-ov { padding: 56px 12px 16px; }
          .lb-nav--prev { left: 8px; }
          .lb-nav--next { right: 8px; }
          .lb-img-box { height: 60vw; }
        }
      `}</style>
    </div>
  )
}

/* ── Mosaïque 2×2 de couverture ─────────────────────────────── */
function AlbumMosaic({ photos }: { photos: Photo[] }) {
  const tiles = Array.from({ length: 4 }, (_, i) => photos[i % photos.length])
  return (
    <div className="gal-mosaic">
      {tiles.map((p, i) => (
        <div key={i} className="gal-mosaic-cell">
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      <style>{`
        .gal-mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .gal-mosaic-cell {
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

/* ── Card album ─────────────────────────────────────────────── */
function AlbumCard({ album, onClick }: { album: Album; onClick: () => void }) {
  const badge = BADGE[album.categorie]
  return (
    <article className="gal-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Ouvrir l'album ${album.edition} — ${album.jour}`}
    >
      <AlbumMosaic photos={album.photos} />
      <div className="gal-card-body">
        <span
          className="gal-badge"
          style={{ background: badge.bg, color: badge.color }}
        >
          {badge.label}
        </span>
        <p className="gal-card-jour">{album.jour}</p>
        <p className="gal-card-theme">{album.theme}</p>
        <div className="gal-card-meta">
          <span className="gal-card-count">{album.photos.length} photo{album.photos.length > 1 ? 's' : ''}</span>
          <span className="gal-card-date">{album.date}</span>
        </div>
      </div>
    </article>
  )
}

/* ── Composant principal ────────────────────────────────────── */
export default function GalerieClient() {
  const [view, setView]               = useState<'albums' | 'photos'>('albums')
  const [openAlbum, setOpenAlbum]     = useState<Album | null>(null)
  const [activeFilter, setFilter]     = useState<Categorie | 'tous'>('tous')
  const [search, setSearch]           = useState('')
  const [lbIndex, setLbIndex]         = useState<number | null>(null)
  const [mounted, setMounted]         = useState(false)

  useEffect(() => { setMounted(true) }, [])

  /* Filtrage albums */
  const filtered = ALBUMS.filter((a) => {
    if (activeFilter !== 'tous' && a.categorie !== activeFilter) return false
    if (search) {
      const q = search.toLowerCase()
      return (
        a.edition.toLowerCase().includes(q) ||
        a.jour.toLowerCase().includes(q) ||
        a.theme.toLowerCase().includes(q)
      )
    }
    return true
  })

  const totalPhotosFiltered = filtered.reduce((acc, a) => acc + a.photos.length, 0)

  /* Navigation lightbox */
  const lbPrev = useCallback(() => {
    setLbIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])
  const lbNext = useCallback(() => {
    if (!openAlbum) return
    setLbIndex((i) => (i !== null && i < openAlbum.photos.length - 1 ? i + 1 : i))
  }, [openAlbum])
  const lbClose = useCallback(() => setLbIndex(null), [])

  const openPhoto = (album: Album) => {
    setOpenAlbum(album)
    setView('photos')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => {
    setView('albums')
    setOpenAlbum(null)
    setLbIndex(null)
  }

  /* Breadcrumb */
  const _breadcrumb = view === 'albums'
    ? [{ label: 'Accueil', href: '/fr' }, { label: 'Galerie', href: null }]
    : [
        { label: 'Accueil', href: '/fr' },
        { label: 'Galerie', href: null, onClick: goBack },
        { label: `${openAlbum?.edition} — ${openAlbum?.jour}`, href: null },
      ]

  /* Hero titre dynamique */
  const h1 =
    view === 'photos' && openAlbum
      ? <>{openAlbum.edition} — <em>{openAlbum.jour}</em></>
      : <>Le terrain, <em>en images.</em></>

  const heroDesc =
    view === 'photos' && openAlbum
      ? openAlbum.theme
      : 'Parcourez les photos du CIFAP, des Rencontres et des Foires — organisées par édition et par journée.'

  return (
    <>
      {/* ── Lightbox portal ── */}
      {mounted && lbIndex !== null && openAlbum && createPortal(
        <Lightbox
          photos={openAlbum.photos}
          index={lbIndex}
          onClose={lbClose}
          onPrev={lbPrev}
          onNext={lbNext}
        />,
        document.body,
      )}

      <div className="gal-page">

        {/* ── HERO ── */}
        <PageHero
          label="Galerie Photo"
          title={h1}
          subtitle={heroDesc}
          imageSrc="/images/hero/hero-nss-femmes-rurales.jpg"
        />

        {/* ── BARRE FILTRES (albums seulement) ── */}
        {view === 'albums' && (
          <div className="gal-filters">
            <div className="gal-filters-left">
              <span className="gal-filters-label">Catégorie :</span>
              {(['tous', 'cifap', 'rencontre', 'foire'] as const).map((f) => (
                <button
                  key={f}
                  className={`gal-pill${activeFilter === f ? ' gal-pill--active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'tous' ? 'Tous' : BADGE[f].label}
                </button>
              ))}
            </div>
            <div className="gal-search-wrap">
              <Search size={14} className="gal-search-icon" aria-hidden="true" />
              <input
                className="gal-search"
                type="text"
                placeholder="Rechercher un album..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Rechercher un album"
              />
            </div>
          </div>
        )}

        {/* ── VUE ALBUMS ── */}
        {view === 'albums' && (
          <div className="gal-section">
            <p className="gal-count-header">
              {filtered.length} album{filtered.length !== 1 ? 's' : ''} · {totalPhotosFiltered} photo{totalPhotosFiltered !== 1 ? 's' : ''}
            </p>
            {filtered.length > 0 ? (
              <div className="gal-grid-albums" role="list">
                {filtered.map((album) => (
                  <div key={album.id} role="listitem">
                    <AlbumCard album={album} onClick={() => openPhoto(album)} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="gal-empty">Aucun album ne correspond à votre recherche.</p>
            )}
          </div>
        )}

        {/* ── VUE PHOTOS ── */}
        {view === 'photos' && openAlbum && (
          <div className="gal-section">
            <button className="gal-back" onClick={goBack}>
              ← Retour aux albums
            </button>

            <div className="gal-photos-header">
              <span
                className="gal-badge"
                style={{
                  background: BADGE[openAlbum.categorie].bg,
                  color: BADGE[openAlbum.categorie].color,
                }}
              >
                {BADGE[openAlbum.categorie].label}
              </span>
              <h2 className="gal-photos-title">
                {openAlbum.jour} — {openAlbum.theme}
              </h2>
            </div>
            <p className="gal-count-header">
              {openAlbum.photos.length} photo{openAlbum.photos.length !== 1 ? 's' : ''} · {openAlbum.date}
            </p>

            <div className="gal-grid-photos" role="list">
              {openAlbum.photos.map((photo, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="gal-photo-cell"
                  onClick={() => setLbIndex(i)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLbIndex(i)}
                  aria-label={`Ouvrir : ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="gal-photo-ov" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <style>{`
        /* ── PAGE ── */
        .gal-page {
          background: #f9f8f5;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        /* ── HERO ── */
        .gal-hero {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-bottom: 32px;
        }
        .gal-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to right,
            rgba(5,12,5,0.88) 50%,
            rgba(5,12,5,0.40) 100%
          );
        }
        .gal-hero-body {
          position: relative; z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 80px clamp(1.5rem, 4vw, 44px) 44px;
          box-sizing: border-box;
        }

        /* Breadcrumb */
        .gal-bc {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 32px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px;
        }
        .gal-bc-item { display: flex; align-items: center; gap: 6px; }
        .gal-bc-link {
          background: none; border: none; padding: 0; cursor: pointer;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; font-size: 12px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .gal-bc-link:hover { color: #ffffff; }
        .gal-bc-sep { color: rgba(255,255,255,0.4); }
        .gal-bc-curr { color: #ffffff; }

        /* Label */
        .gal-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 16px;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #97C459;
        }
        .gal-label-line { display: block; width: 28px; height: 1.5px; background: #97C459; flex-shrink: 0; }

        /* H1 */
        .gal-h1 {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: clamp(2.09rem, 4.75vw, 3.04rem);
          font-weight: 700; line-height: 1.1;
          color: #ffffff; max-width: 600px;
          margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .gal-h1 em { font-style: italic; color: #ffffff; }

        /* Lead */
        .gal-hero-lead {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 1rem; font-weight: 400; line-height: 1.7;
          color: #ffffff; max-width: 520px; margin: 0;
        }

        /* Stats */
        .gal-hero-stats {
          display: flex; align-items: baseline; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 20px; margin-top: 28px; row-gap: 12px;
        }
        .gal-stat { display: flex; align-items: baseline; gap: 6px; }
        .gal-stat--sep { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.15); }
        .gal-stat-v {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 1.25rem; font-weight: 700; line-height: 1; letter-spacing: -0.01em;
          color: #97C459;
        }
        .gal-stat-l {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff;
        }

        /* ── FILTRES ── */
        .gal-filters {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin: 0 72px 28px;
          border: 0.5px solid #e5e7eb;
          flex-wrap: wrap;
        }
        .gal-filters-left {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }
        .gal-filters-label {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; font-weight: 500;
          color: #6b7280; text-transform: uppercase;
          letter-spacing: 0.05em; flex-shrink: 0;
        }
        .gal-pill {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 12px; font-weight: 400;
          color: #6b7280; cursor: pointer;
          padding: 5px 14px; border-radius: 99px;
          border: 0.5px solid #e5e7eb;
          background: transparent;
          transition: all 0.2s;
        }
        .gal-pill:hover { border-color: #00AD4C; color: #00AD4C; }
        .gal-pill--active {
          background: #045627; color: #A5CE46;
          border-color: #045627; font-weight: 500;
        }

        /* Search */
        .gal-search-wrap {
          display: flex; align-items: center; gap: 8px;
          border: 0.5px solid #e5e7eb; border-radius: 8px;
          padding: 8px 14px; background: #f9f8f5;
          min-width: 220px;
        }
        .gal-search-icon { color: #9ca3af; flex-shrink: 0; }
        .gal-search {
          border: none; background: transparent; outline: none;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif; font-size: 13px;
          color: #2A2A2A; width: 100%;
        }
        .gal-search::placeholder { color: #9ca3af; }

        /* ── SECTION ── */
        .gal-section {
          padding: 0 72px;
        }
        .gal-count-header {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; font-weight: 500;
          color: #2A2A2A; margin: 0 0 16px;
        }
        .gal-empty {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 15px; color: #9ca3af;
          text-align: center; padding: 60px 0;
        }

        /* ── GRILLE ALBUMS ── */
        .gal-grid-albums {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* ── CARD ALBUM ── */
        .gal-card {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
          height: 100%;
          display: flex; flex-direction: column;
        }
        .gal-card:hover {
          border-color: #00AD4C;
          transform: translateY(-2px);
        }
        .gal-card-body {
          padding: 10px 12px 12px;
          display: flex; flex-direction: column; gap: 0;
        }
        .gal-badge {
          display: inline-block;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px; font-weight: 500;
          padding: 2px 8px; border-radius: 4px;
          text-transform: uppercase; letter-spacing: 0.05em;
          align-self: flex-start;
        }
        .gal-card-jour {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; font-weight: 500;
          color: #2A2A2A; margin: 6px 0 0;
        }
        .gal-card-theme {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; font-weight: 300;
          color: #6b7280; margin: 2px 0 0;
          line-height: 1.4;
        }
        .gal-card-meta {
          display: flex; justify-content: space-between;
          align-items: center; margin-top: 8px;
        }
        .gal-card-count {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px; font-weight: 500;
          background: #eaf3de; color: #3b6d11;
          padding: 2px 7px; border-radius: 99px;
        }
        .gal-card-date {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 10px; color: #9ca3af;
        }

        /* ── RETOUR ── */
        .gal-back {
          background: none; border: none; padding: 0;
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 13px; color: #6b7280;
          cursor: pointer; margin-bottom: 14px;
          transition: color 0.2s;
        }
        .gal-back:hover { color: #045627; }

        /* ── PHOTOS HEADER ── */
        .gal-photos-header {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 8px; flex-wrap: wrap;
        }
        .gal-photos-title {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 20px; font-weight: 600;
          color: #2A2A2A; margin: 0;
          line-height: 1.2;
        }

        /* ── GRILLE PHOTOS ── */
        .gal-grid-photos {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .gal-photo-cell {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 10px;
          border: 0.5px solid #e5e7eb;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.15s;
        }
        .gal-photo-cell:hover {
          border-color: #00AD4C;
          transform: scale(1.02);
        }
        .gal-photo-ov {
          position: absolute; inset: 0; z-index: 2;
          background: rgba(4,86,39,0);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .gal-photo-cell:hover .gal-photo-ov {
          background: rgba(4,86,39,0.42);
        }
        .gal-photo-ov svg { opacity: 0; transition: opacity 0.2s; }
        .gal-photo-cell:hover .gal-photo-ov svg { opacity: 1; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .gal-filters { margin: 0 40px 28px; }
          .gal-section { padding: 0 40px; }
          .gal-grid-albums { grid-template-columns: repeat(2, 1fr); }
          .gal-grid-photos { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .gal-hero { min-height: 520px; }
          .gal-hero-body { padding: 60px 24px 40px; }
          .gal-stat--sep { padding-right: 20px; margin-right: 20px; }
          .gal-filters {
            margin: 0 20px 20px;
            flex-direction: column; align-items: flex-start;
          }
          .gal-filters-left { overflow-x: auto; flex-wrap: nowrap; width: 100%; padding-bottom: 4px; }
          .gal-search-wrap { width: 100%; }
          .gal-section { padding: 0 20px; }
          .gal-grid-albums { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .gal-grid-photos { grid-template-columns: repeat(2, 1fr); gap: 8px; }
        }

        @media (max-width: 480px) {
          .gal-hero { min-height: 540px; }
          .gal-hero-body { padding: 56px 20px 36px; }
          .gal-h1 { max-width: 100%; }
          .gal-stat--sep { padding-right: 14px; margin-right: 14px; }
          .gal-grid-albums { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  )
}
