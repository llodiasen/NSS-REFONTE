"use client"

import { useEffect, useState } from 'react'

const TABS = [
  { id: 'presentation', label: 'Présentation' },
  { id: 'programme',    label: 'Programme' },
  { id: 'objectifs',    label: 'Objectifs' },
  { id: 'participants', label: 'Participants' },
  { id: 'galerie',      label: 'Galerie' },
  { id: 'temoignages',  label: 'Témoignages' },
  { id: 'partenaires',  label: 'Partenaires' },
]

interface Props {
  visibleIds: string[]
}

export default function EditionTabs({ visibleIds }: Props) {
  const tabs = TABS.filter((t) => visibleIds.includes(t.id))
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { threshold: 0.3, rootMargin: '-68px 0px 0px 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [visibleIds]) // eslint-disable-line react-hooks/exhaustive-deps

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 68 + 48
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[68px] z-40">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-4 py-3.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeId === tab.id
                  ? 'border-nss-fonce text-nss-fonce font-medium'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
