import Image from 'next/image';
import Link from 'next/link';

export default function AboutApIdentite() {
  return (
    <section className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto ap-identite-grid">

        {/* Texte */}
        <div className="ap-identite-text">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Qui sommes-nous</span>
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            </div>
            <h2 className="ap-identite-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
              Un mouvement né{' '}
              <em className="italic text-[#A5CE46] font-medium">d&apos;une conviction commune.</em>
            </h2>
            <div className="w-[60px] h-[3px] bg-[#00AD4C] mb-5" />

            <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left] mb-4">
              Le mouvement Nous Sommes la Solution (NSS) a été lancé en 2011 par douze
              organisations de femmes rurales du Burkina Faso (2 organisations), du Ghana (2),
              de la Guinée (2), du Mali (3) et du Sénégal (3), sous la conduite de leurs
              leaders. Plus de 500 Associations de Femmes Rurales (AFR) y ont adhéré depuis
              lors et le mouvement compte 175&nbsp;000 membres et sympathisant-es à travers
              l&apos;Afrique de l&apos;Ouest.
            </p>

            <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left]">
              Créé en tant qu&apos;expression des droits des femmes au sein d&apos;une campagne globale
              pour la souveraineté alimentaire envisagée par les mouvements paysans du
              continent, NSS s&apos;est imposée sur le champ des alternatives paysannes durables,
              économiquement rentables, socialement et écologiquement viables.
            </p>
          </div>

          <div className="pt-8">
            <Link
              href="/fr/mouvement"
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase bg-[#00AD4C] text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-[#009940] hover:-translate-y-px"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="ap-identite-photo-wrap">
          <div className="relative ap-identite-photo rounded-2xl overflow-hidden">
            <Image
              src="/images/actualites/organisations-femmes-rurales-nss.jpg"
              alt="Organisations membres NSS — femmes rurales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="absolute top-[-12px] right-[-8px] bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-4 text-center z-10">
            <div
              className="text-[2.25rem] font-bold text-[#00AD4C] leading-none"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              2011
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b7280] mt-1">Fondée</div>
          </div>
        </div>
      </div>

      <style>{`
        .ap-identite-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .ap-identite-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: stretch;
        }
        .ap-identite-text {
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .ap-identite-photo-wrap { position: relative; }
        .ap-identite-photo { min-height: 480px; height: 100%; }
        @media (max-width: 768px) {
          .ap-identite-grid { grid-template-columns: 1fr; gap: 48px; }
          .ap-identite-photo { min-height: 320px; aspect-ratio: 4/3; }
        }
      `}</style>
    </section>
  );
}
