import { Camera, ImageIcon } from 'lucide-react'

interface Props {
  count: number
}

export default function SectionGalerie({ count }: Props) {
  return (
    <section id="galerie" aria-labelledby="gal-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Galerie
      </p>

      {/* Grille masonry */}
      <div className="grid grid-cols-3 gap-3" style={{ gridTemplateRows: 'auto auto' }}>
        {/* Grande photo gauche — 2 lignes */}
        <div
          className="col-span-1 rounded-2xl bg-teal-50 flex items-center justify-center"
          style={{ gridRow: 'span 2', minHeight: '300px' }}
          aria-hidden="true"
        >
          <Camera size={32} style={{ color: '#5eead4' }} />
        </div>

        {/* 4 petites à droite */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-green-50 h-36 flex items-center justify-center"
            aria-hidden="true"
          >
            <Camera size={22} style={{ color: '#86efac' }} />
          </div>
        ))}
      </div>

      {/* Bouton voir toutes */}
      <button
        className="w-full mt-4 border border-gray-200 rounded-xl py-3 text-sm text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        type="button"
      >
        <ImageIcon size={16} aria-hidden="true" />
        Voir toutes les photos ({count})
      </button>
    </section>
  )
}
