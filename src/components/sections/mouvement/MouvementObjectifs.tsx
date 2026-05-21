'use client';

import { useEffect, useRef } from 'react';
import { Leaf, Home, Megaphone } from 'lucide-react';

const OBJECTIFS = [
  {
    Icon: Leaf,
    num: '01',
    title: 'Promouvoir les savoirs agricoles',
    text: 'Promouvoir les bonnes pratiques et les savoirs agricoles connus et transmis pendant des générations en Afrique et qui ont longtemps préservé la souveraineté alimentaire sur le continent.',
    active: false,
  },
  {
    Icon: Home,
    num: '02',
    title: "Promouvoir l’agriculture familiale",
    text: "Promouvoir l’agriculture familiale à travers l’agro-écologie — un modèle viable, durable et souverain ancré dans les réalités des communautés rurales d’Afrique de l’Ouest.",
    active: true,
  },
  {
    Icon: Megaphone,
    num: '03',
    title: 'Influencer la gouvernance agricole',
    text: "Influencer les décideurs et promouvoir une meilleure gouvernance agricole aux niveaux local, national et continental. NSS vise à s’élargir vers d’autres régions du continent afin de se donner un cachet continental.",
    active: false,
  },
];

export default function MouvementObjectifs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.obj-card');
    if (!cards || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(12px)';
      c.style.transition = `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, background-color 0.4s ease, color 0.4s ease`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Nos objectifs</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="obj-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A]">
            Cultiver, transmettre,{' '}
            <em className="italic text-[#A5CE46] font-medium">décider ensemble.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto mt-3 mb-4" />
          <p className="text-[14px] text-[#6b7280] text-center">
            Trois objectifs fondamentaux qui orientent chaque action du réseau NSS depuis 2011.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 border border-[#e5e7eb] rounded-2xl overflow-hidden bg-white"
        >
          {OBJECTIFS.map(({ Icon, num, title, text, active }) => (
            <div
              key={num}
              className={`obj-card group p-[44px_32px_36px] flex flex-col cursor-default border-r border-[#e5e7eb] last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 hover:bg-[#045627] ${active ? 'bg-[#045627]' : 'bg-white'}`}
            >
              <div className="flex justify-between items-center mb-6">
                <div className={`w-11 h-11 rounded-[10px] grid place-items-center transition-all duration-400 group-hover:bg-[rgba(245,237,214,0.12)] group-hover:text-[#A5CE46] ${active ? 'bg-[rgba(245,237,214,0.12)] text-[#A5CE46]' : 'bg-[#f0faf4] text-[#00AD4C]'}`}>
                  <Icon size={22} />
                </div>
                <div
                  className={`text-[48px] font-bold leading-none transition-colors duration-400 group-hover:text-[rgba(245,237,214,0.18)] ${active ? 'text-[rgba(245,237,214,0.18)]' : 'text-[#eaf3de]'}`}
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {num}
                </div>
              </div>
              <h3 className={`text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] mb-4 transition-colors duration-400 group-hover:text-[#F5EDD6] ${active ? 'text-[#F5EDD6]' : 'text-[#2A2A2A]'}`}>
                {title}
              </h3>
              <p className={`text-[13px] font-light leading-[1.75] text-justify [text-align-last:left] transition-colors duration-400 group-hover:text-[rgba(245,237,214,0.78)] ${active ? 'text-[rgba(245,237,214,0.78)]' : 'text-[#6b7280]'}`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.obj-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }`}</style>
    </section>
  );
}
