import type { CifapEdition } from '@/lib/cifap-editions'

interface Props {
  edition: CifapEdition
}

export default function SectionParticipants({ edition: e }: Props) {
  return (
    <section id="participants" aria-labelledby="part-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
        Participants
      </p>

      {/* Metric cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { val: e.participants,          lbl: 'Participants' },
          { val: `${e.pays_representes}`, lbl: 'Pays' },
          { val: `${e.jours_formation}`,  lbl: 'Jours' },
          ...(e.pages_documentation
            ? [{ val: `${e.pages_documentation}`, lbl: 'Pages doc.' }]
            : [{ val: String(e.intervenants.length), lbl: 'Intervenants' }]),
        ].map((m) => (
          <div
            key={m.lbl}
            className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
          >
            <p
              className="text-4xl font-bold text-nss-fonce"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
            >
              {m.val}
            </p>
            <p
              className="text-gray-500 text-sm mt-1"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
            >
              {m.lbl}
            </p>
          </div>
        ))}
      </div>

      {/* Pays liste */}
      {e.pays_liste.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3
            className="font-semibold text-gray-900 text-base mb-4"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
          >
            Pays représentés
          </h3>
          <div className="flex flex-wrap gap-2">
            {e.pays_liste.map((pays) => (
              <span
                key={pays}
                className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              >
                {pays}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Intervenants */}
      {e.intervenants.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 mt-4">
          <h3
            className="font-semibold text-gray-900 text-base mb-4"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
          >
            Intervenants
          </h3>
          <div className="flex flex-col divide-y divide-gray-100">
            {e.intervenants.map((int) => (
              <div key={int.nom} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                <span
                  className="w-9 h-9 rounded-full bg-nss-clair flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ color: '#166534', fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                  aria-hidden="true"
                >
                  {int.initiales}
                </span>
                <div>
                  <p
                    className="text-sm font-medium text-gray-900"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {int.nom}
                  </p>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {int.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
