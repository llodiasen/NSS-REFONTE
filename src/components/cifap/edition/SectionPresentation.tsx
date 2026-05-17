import type { CifapEdition } from '@/lib/cifap-editions'

interface Props {
  edition: CifapEdition
}

export default function SectionPresentation({ edition: e }: Props) {
  return (
    <section id="presentation" aria-labelledby="pres-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Présentation
      </p>

      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2
          id="pres-titre"
          className="text-lg font-semibold text-gray-900 mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {e.theme}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed"
           style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {e.presentation}
        </p>

        {/* Chiffres clés */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6"
          style={{ borderTop: '1px solid #f3f4f6' }}
        >
          {[
            { val: e.participants,           lbl: 'Participants' },
            { val: `${e.pays_representes}`,  lbl: 'Pays représentés' },
            { val: `${e.jours_formation}`,   lbl: 'Jours de formation' },
            ...(e.pages_documentation
              ? [{ val: `${e.pages_documentation}`, lbl: 'Pages de documentation' }]
              : []),
          ].map((s) => (
            <div key={s.lbl} className="text-center">
              <p
                className="text-3xl font-bold text-nss-fonce"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.val}
              </p>
              <p
                className="text-gray-500 text-sm mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.lbl}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
