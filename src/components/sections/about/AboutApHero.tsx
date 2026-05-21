import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { num: '2011', label: 'Fondée en' },
  { num: '12', label: 'Organisations fondatrices' },
  { num: '175 000', label: 'Membres et sympathisants' },
  { num: '7', label: "Pays d'origine" },
];

export default function AboutApHero() {
  return (
    <header className="relative min-h-[520px] flex flex-col justify-end overflow-hidden">
      <Image
        src="/images/hero/hero-nss-femmes-rurales.jpg"
        alt="Femmes rurales NSS — Afrique de l'Ouest"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#045627]/90 to-[#045627]/99" aria-hidden />

      <div className="relative z-10">
        <div className="px-[clamp(1.25rem,4vw,4.5rem)] pt-10 pb-0">
          <nav className="text-[11px] font-medium text-white/40 tracking-[0.08em] mb-4" aria-label="Fil d'Ariane">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <span className="text-white/60">À propos</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#A5CE46] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A5CE46]">Notre identité</span>
            <span className="w-7 h-px bg-[#A5CE46] shrink-0" aria-hidden />
          </div>

          <h1 className="hero-ap-h1 font-semibold leading-[1.1] text-white tracking-[-0.01em] mb-4">
            Nous Sommes la Solution,{' '}
            <em className="italic text-[#A5CE46] font-medium">mouvement de femmes rurales africaines.</em>
          </h1>

          <p className="text-[15px] font-light text-white/75 max-w-[560px] mb-0">
            Par nous-mêmes, pour nous-mêmes, en nous-mêmes — les femmes nourrissent l&apos;Afrique.
          </p>
        </div>

        <div className="hero-ap-stats mt-8 grid grid-cols-4 border-t border-white/10 bg-black/15 backdrop-blur-sm">
          {STATS.map((s, i) => (
            <div key={i} className="hero-ap-stat px-6 py-6 border-r border-white/10 last:border-r-0">
              <div
                className="text-[1.75rem] font-bold text-white leading-none mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {s.num}
              </div>
              <div className="text-[11px] text-white/60 tracking-[0.08em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-ap-h1 { font-size: clamp(2rem,5vw,3.2rem); }
        @media (max-width: 768px) {
          .hero-ap-stats { grid-template-columns: 1fr 1fr; }
          .hero-ap-stat:nth-child(2) { border-right: 0; }
          .hero-ap-stat:nth-child(1), .hero-ap-stat:nth-child(2) {
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .hero-ap-stat:nth-child(3), .hero-ap-stat:nth-child(4) { padding-top: 1rem; }
        }
      `}</style>
    </header>
  );
}
