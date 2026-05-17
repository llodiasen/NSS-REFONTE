"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tent, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { CIFAP_EDITIONS } from '@/data/cifap/index'

interface Props {
  locale: string
}

const EDITIONS_DISPLAY = [...CIFAP_EDITIONS].reverse()
const PAGES_EXISTANTES = new Set(['2023', '2024', '2025'])
const VISIBLE = 3

export default function CifapEditionsSection({ locale }: Props) {
  const total    = EDITIONS_DISPLAY.length
  const maxStart = total - VISIBLE
  const [start, setStart] = useState(0)

  const prev = () => setStart((i) => Math.max(0, i - 1))
  const next = () => setStart((i) => Math.min(maxStart, i + 1))

  const window3 = EDITIONS_DISPLAY.slice(start, start + VISIBLE)

  return (
    <section aria-labelledby="cifap-ed-titre">

      {/* ── En-tête ── */}
      <div className="flex items-center justify-between mb-4">
        <h2
          id="cifap-ed-titre"
          className="text-[18px] font-semibold text-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Parcourez les éditions du CIFAP
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={start === 0}
              aria-label="Éditions précédentes"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            <span
              className="text-[12px] font-medium tabular-nums"
              style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif", minWidth: '2.5rem', textAlign: 'center' }}
            >
              {String(start + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(total).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              disabled={start >= maxStart}
              aria-label="Éditions suivantes"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <Link
            href={`/${locale}/programmes/cifap`}
            className="text-xs text-nss-principal hover:underline"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Voir le programme ↗
          </Link>
        </div>
      </div>

      {/* ── Grille 3 cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {window3.map((ed) => {
          const isUpcoming = ed.status === 'upcoming'
          const hasPage    = PAGES_EXISTANTES.has(ed.year)

          return (
            <article
              key={ed.year}
              className="rounded-lg overflow-hidden flex flex-col bg-white transition-colors duration-150 hover:border-[#0C3D2A]/25"
              style={{ border: '0.5px solid #e5e7eb' }}
            >
              {/* Image */}
              <div className="relative h-[160px] overflow-hidden flex-shrink-0">
                {ed.photo ? (
                  <Image
                    src={ed.photo}
                    alt={`CIFAP ${ed.year} — ${ed.themeShort}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1A3A1A 0%, #2D5A1A 100%)' }}
                    aria-hidden="true"
                  >
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                )}
                <span
                  className="absolute top-2.5 left-2.5 text-[11px] font-semibold px-2.5 py-0.5 rounded"
                  style={{
                    background: isUpcoming ? '#E8A838' : 'rgba(0,0,0,0.52)',
                    color: '#ffffff',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.05em',
                  }}
                >
                  {isUpcoming ? 'À VENIR' : 'PASSÉ'}
                </span>
              </div>

              {/* Barre accent */}
              <div className="h-[4px] flex-shrink-0" style={{ background: ed.accent }} />

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span
                  className="self-start inline-flex items-center gap-1.5 text-[12px] font-medium px-2 py-1 rounded"
                  style={{ background: '#EAF3DE', color: '#3B6D11', fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Tent size={11} aria-hidden="true" />
                  Camp de formation
                </span>

                <div>
                  <p
                    className="text-[11px] font-medium uppercase tracking-wider mb-1"
                    style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {ed.num} édition · {ed.year}
                  </p>
                  <h3
                    className="text-[16px] font-semibold text-foreground leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {ed.themeShort}
                  </h3>
                </div>

                <p
                  className="text-[13px] leading-relaxed line-clamp-2"
                  style={{ color: '#6B7280', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {ed.themeSubtitle}
                </p>

                <div className="pt-3 space-y-2" style={{ borderTop: '0.5px solid #e5e7eb' }}>
                  <div className="flex items-start gap-2">
                    <Calendar size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
                    <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "'DM Sans', sans-serif" }}>
                      {ed.dates}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
                    <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "'DM Sans', sans-serif" }}>
                      Niaguis, Sénégal
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} aria-hidden="true" />
                    <span className="text-[12px]" style={{ color: '#4B5563', fontFamily: "'DM Sans', sans-serif" }}>
                      {ed.participants ?? '— · 8 pays'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between gap-3"
                style={{ borderTop: '0.5px solid #e5e7eb' }}
              >
                <span
                  className="text-[12px] font-medium px-2 py-0.5 rounded"
                  style={{
                    background: isUpcoming ? '#FAEEDA' : '#F3F4F6',
                    color: isUpcoming ? '#633806' : '#6B7280',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {isUpcoming ? 'À venir' : 'Édition passée'}
                </span>
                {hasPage && ed.href ? (
                  <Link
                    href={`/${locale}${ed.href}`}
                    className="text-[13px] font-medium hover:underline whitespace-nowrap"
                    style={{ color: '#1D9E75', fontFamily: "'DM Sans', sans-serif" }}
                    aria-label={`Voir l'édition CIFAP ${ed.year}`}
                  >
                    Voir l&apos;édition →
                  </Link>
                ) : (
                  <span
                    className="text-[13px] whitespace-nowrap"
                    style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Bientôt disponible
                  </span>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {/* ── Dots ── */}
      <div className="flex items-center justify-center gap-1.5 mt-4" role="tablist" aria-label="Navigation éditions">
        {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === start}
            onClick={() => setStart(i)}
            className={`rounded-full transition-all duration-200 ${
              i === start
                ? 'w-4 h-1.5 bg-nss-principal'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

    </section>
  )
}
