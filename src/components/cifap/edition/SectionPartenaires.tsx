import type { CifapPartenaire } from '@/lib/cifap-editions'

interface Props {
  partenaires: CifapPartenaire[]
}

export default function SectionPartenaires({ partenaires }: Props) {
  return (
    <section id="partenaires" aria-labelledby="partn-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
        Partenaires
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {partenaires.map((p) => (
          <div
            key={p.nom}
            className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4"
          >
            <div
              className="w-10 h-10 rounded-xl bg-nss-clair flex items-center justify-center flex-shrink-0 text-xs font-semibold"
              style={{ color: '#166534', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              aria-hidden="true"
            >
              {p.nom.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p
                className="font-semibold text-gray-900 text-sm"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {p.nom}
              </p>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
