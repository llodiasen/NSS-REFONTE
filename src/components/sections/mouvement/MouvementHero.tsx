import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { num: '2011', label: 'Campagne fondatrice' },
  { num: '2017', label: 'Première AG' },
  { num: '14',   label: 'Pays membres' },
  { num: '100%', label: 'Gouvernance féminine' },
];

export default function MouvementHero() {
  return (
    <header className="relative flex flex-col overflow-hidden text-white mouvement-hero">
      <Image
        src="/images/hero/hero-nss-femmes-rurales.jpg"
        alt="Femmes rurales du mouvement NSS en Afrique de l'Ouest"
        fill
        className="object-cover object-center"
        priority
      />
      <div aria-hidden className="hero-overlay absolute inset-0 z-10" />

      <div className="relative z-20 mt-auto">
        {/* Contenu principal */}
        <div className="hero-content max-w-[900px]">
          <nav className="text-[11px] tracking-[0.06em] text-white/40 mb-6" aria-label="Fil d'Ariane">
            <Link href="/fr" className="hover:text-white/75 transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <span>Le mouvement</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#A5CE46] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A5CE46]">Notre mouvement</span>
            <span className="w-7 h-px bg-[#A5CE46] shrink-0" aria-hidden />
          </div>

          <h1 className="hero-h1 font-semibold leading-[1.08] tracking-[-0.015em] text-white mb-5 max-w-[760px]">
            Un mouvement structuré,{' '}
            <em className="text-[#A5CE46] italic font-medium block">guidé par ses valeurs.</em>
          </h1>

          <p className="text-[15px] font-light leading-[1.65] text-white/75 max-w-[560px] pb-8">
            Passée d&apos;une campagne (2011–2014) à un mouvement, NSS s&apos;est dotée
            d&apos;instances de gouvernance constituées à 100% de femmes rurales, portant
            la souveraineté alimentaire de l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* Barre de stats */}
        <div className="hero-stats border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.num} className={`hero-stat hero-stat-${i}`}>
              <div className="hero-stat-num text-[#A5CE46]">{s.num}</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-white/45">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mouvement-hero { min-height: 520px; }
        .hero-overlay {
          background: linear-gradient(to bottom, rgba(4,86,39,0.25) 0%, rgba(4,86,39,0.92) 100%);
        }
        .hero-content {
          padding: 0 clamp(1.5rem,6vw,4.5rem);
          padding-top: clamp(2.5rem,5vw,3.25rem);
        }
        .hero-h1 { font-size: clamp(2rem,5vw,3.2rem); }
        .hero-stats {
          padding: 1.75rem clamp(1.5rem,6vw,4.5rem);
        }
        .hero-stat {
          padding: 0 1.25rem;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .hero-stat-0 { padding-left: 0; }
        .hero-stat-3 { border-right: 0; }
        .hero-stat-num {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 28px; font-weight: 700;
          line-height: 1; margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
          .hero-stat { padding: 0 1rem; }
          .hero-stat-0 { padding-left: 1rem; }
          .hero-stat-1 { border-right: 0; }
          .hero-stat-0, .hero-stat-1 {
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .hero-stat-2, .hero-stat-3 { padding-top: 1rem; }
        }
      `}</style>
    </header>
  );
}
