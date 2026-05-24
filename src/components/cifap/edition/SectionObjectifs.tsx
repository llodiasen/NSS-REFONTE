interface Props {
  objectifs: string[]
}

export default function SectionObjectifs({ objectifs }: Props) {
  return (
    <section id="objectifs" aria-labelledby="obj-titre">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4"
         style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}>
        Objectifs
      </p>

      <div className="space-y-3">
        {objectifs.map((obj, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4"
          >
            <span
              className="w-10 h-10 rounded-full bg-nss-fonce flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p
              className="text-gray-700 text-base leading-relaxed pt-2"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
            >
              {obj}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
