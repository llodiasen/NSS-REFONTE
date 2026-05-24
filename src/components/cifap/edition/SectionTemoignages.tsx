import type { CifapTemoignage } from '@/lib/cifap-editions'

interface Props {
  temoignages: CifapTemoignage[]
}

export default function SectionTemoignages({ temoignages }: Props) {
  return (
    <section id="temoignages" aria-labelledby="tem-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
        Voix du terrain
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {temoignages.map((t, i) => (
          <blockquote
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <p
              className="italic text-gray-700 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
            >
              &laquo;&nbsp;{t.texte}&nbsp;&raquo;
            </p>
            <footer className="mt-4">
              <p
                className="text-gray-900 font-medium text-sm"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {t.auteur}
              </p>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {t.role}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
