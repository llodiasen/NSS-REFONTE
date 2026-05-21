'use client';

import { useState } from 'react';
import { Users, Wheat, Sprout } from 'lucide-react';

const CARDS = [
  {
    Icon: Users,
    num: '01',
    quote: 'Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.',
    text: "Avec une meilleure implication des femmes rurales dans l'agriculture et un meilleur accès aux ressources, notamment à l'information, à la formation, à l'investissement et à l'équipement, les femmes rurales, avec leur travail, sont aptes à nourrir le monde.",
    link: 'Femmes & agriculture',
  },
  {
    Icon: Wheat,
    num: '02',
    quote: 'Produisons ce que nous consommons et consommons ce que nous produisons.',
    text: "Les pays ouest-africains produisent de bonnes récoltes pour les exporter et achètent des aliments importés plus chers et souvent de moindre qualité. Les coûts de cet échange sont énormes pour les familles en terme de richesse culinaire, d'argent et de santé.",
    link: 'Souveraineté alimentaire',
  },
  {
    Icon: Sprout,
    num: '03',
    quote: 'Préservons la semence paysanne et développons la biodiversité.',
    text: "Les semences constituent le premier élément du système alimentaire. La nécessaire diversité des semences paysannes et leur adaptation naturelle aux changements climatiques doivent encourager leur préservation. Il est inconcevable que les semences soient privatisées.",
    link: 'Semences paysannes',
  },
];

export default function AboutApManifeste() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Notre manifeste</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="ap-manifeste-h2 font-bold leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
            Trois convictions,{' '}
            <em className="italic text-[#A5CE46] font-medium">un mouvement.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => {
            const isActive = active === i;
            return (
              <button
                key={card.num}
                type="button"
                onClick={() => setActive(i)}
                className={`ap-mcard text-left${isActive ? ' ap-mcard--active' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-10 h-10 rounded-[10px] grid place-items-center transition-all duration-[350ms] ${isActive ? 'bg-white/15 text-white' : 'bg-[#f0faf4] text-[#00AD4C]'}`}>
                    <card.Icon size={20} />
                  </div>
                  <div
                    className={`text-[3.5rem] font-bold leading-none transition-colors duration-[350ms] ${isActive ? 'text-white/20' : 'text-[#f0faf4]'}`}
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {card.num}
                  </div>
                </div>

                <p
                  className={`text-[22px] italic font-bold leading-[1.45] mb-6 transition-colors duration-[350ms] ${isActive ? 'text-white' : 'text-[#2A2A2A]'}`}
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  <span className={isActive ? 'text-[#A5CE46]' : 'text-[#00AD4C]'}>&laquo;&nbsp;</span>
                  {card.quote}
                  <span className={isActive ? 'text-[#A5CE46]' : 'text-[#00AD4C]'}>&nbsp;&raquo;</span>
                </p>

                <div className={`h-px mb-5 transition-colors duration-[350ms] ${isActive ? 'bg-white/10' : 'bg-[#e5e7eb]'}`} />

                <p className={`text-[14px] font-light leading-[1.75] text-justify [text-align-last:left] mb-6 transition-colors duration-[350ms] ${isActive ? 'text-white' : 'text-[#2A2A2A]'}`}>
                  {card.text}
                </p>

                <div className={`text-[11px] font-bold tracking-[0.14em] uppercase mt-auto transition-colors duration-[350ms] ${isActive ? 'text-white' : 'text-[#00AD4C]'}`}>
                  → {card.link}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .ap-manifeste-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .ap-mcard {
          position: relative; background: white;
          border: 0.5px solid #e5e7eb; border-radius: 14px;
          padding: 36px 32px; display: flex; flex-direction: column;
          cursor: pointer; transition: all 0.35s ease;
          isolation: isolate; overflow: hidden;
        }
        .ap-mcard::before {
          content: ""; position: absolute; inset: 0;
          background: #045627; opacity: 0;
          transition: opacity 0.35s ease; z-index: -1;
        }
        .ap-mcard--active::before { opacity: 1; }
        .ap-mcard--active { border-color: #045627; }
        .ap-mcard:not(.ap-mcard--active):hover {
          transform: translateY(-3px);
          border-color: #00AD4C;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }
        @media (max-width: 768px) {
          .ap-mcard { padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
