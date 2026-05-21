import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Play } from 'lucide-react';

const POINTS = [
  '12 organisations fondatrices, 5 pays d’origine',
  '500+ Associations de Femmes Rurales membres',
  '175 000 membres et sympathisants à travers l’Afrique de l’Ouest',
];

export default function MouvementCompose() {
  return (
    <section className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center">

        {/* Texte */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Qui compose NSS</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>

          <h2 className="compose-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
            12 organisations fondatrices,{' '}
            <em className="italic text-[#A5CE46] font-medium">500+ associations membres.</em>
          </h2>

          <div className="w-[60px] h-[3px] bg-[#00AD4C] mb-5" />

          <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left] mb-5">
            Le mouvement NSS a été lancé en 2011 par douze organisations de femmes rurales
            du Burkina Faso (2 organisations), du Ghana (2), de la Guinée (2), du Mali (3)
            et du Sénégal (3), sous la conduite de leurs leaders.
          </p>

          <ul className="flex flex-col gap-3 mb-6">
            {POINTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#4A4A4A] leading-[1.55]">
                <CheckCircle size={16} className="text-[#00AD4C] mt-[3px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="#organisations"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#00AD4C] border-[1.5px] border-[#00AD4C] px-6 py-[11px] rounded-lg transition-all duration-200 hover:bg-[#00AD4C] hover:text-white"
          >
            Voir les organisations →
          </Link>
        </div>

        {/* Carte vidéo */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/images/actualites/rencontre-2025.jpg"
            alt="Les femmes nourrissent l'Afrique — NSS"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[30%] to-[#045627]/70" />

          <span className="absolute top-[18px] left-[18px] z-10 text-[10px] font-semibold tracking-[0.12em] uppercase text-white bg-white/15 backdrop-blur-md px-[10px] py-[5px] rounded-full">
            Vidéo · 2 min
          </span>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-white/95 grid place-items-center text-[#045627] shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition-transform duration-[250ms] group-hover:scale-110">
            <Play size={26} fill="#045627" className="ml-1" />
          </div>

          <div className="absolute left-0 right-0 bottom-0 p-6 z-10">
            <h3 className="text-[20px] font-semibold leading-[1.25] mb-[6px] text-white">
              Les femmes nourrissent l&apos;Afrique
            </h3>
            <div className="text-[12px] text-white/75 tracking-[0.04em]">NSS · présentation du mouvement</div>
          </div>
        </div>
      </div>

      <style>{`
        .compose-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
      `}</style>
    </section>
  );
}
