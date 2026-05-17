const STATS = [
  '3 Programmes',
  '8 pays',
  'Annuel',
  'Depuis 2017',
]

export default function ProgrammesHero() {
  return (
    <div className="relative rounded-lg overflow-hidden px-10 py-10" style={{ background: '#0C3D2A' }}>

      {/* Cercle décoratif */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          border: '1px solid white',
          opacity: 0.12,
          top: -80,
          right: -60,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          border: '1px solid white',
          opacity: 0.07,
          bottom: -40,
          left: -40,
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-2xl">

        {/* Eyebrow */}
        <p
          className="text-[11px] font-medium tracking-[0.16em] uppercase mb-3"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Nous Sommes la Solution — NSS
        </p>

        {/* H1 */}
        <h1
          className="text-[28px] font-semibold text-white leading-tight mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Nos programmes de formation et d&apos;échange
        </h1>

        {/* Description */}
        <p
          className="text-[14px] font-light leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Trois événements annuels pour former, relier et célébrer les leaders
          paysans d&apos;Afrique de l&apos;Ouest.
        </p>

        {/* Stats row */}
        <div className="flex items-center flex-wrap gap-y-2">
          {STATS.map((stat, i) => (
            <div key={stat} className="flex items-center">
              {i > 0 && (
                <div
                  className="h-4 mx-4 w-px flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                  aria-hidden="true"
                />
              )}
              <span
                className="text-[13px] font-medium text-white whitespace-nowrap"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
