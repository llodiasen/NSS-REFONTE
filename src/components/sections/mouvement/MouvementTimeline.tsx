import Image from 'next/image';

interface TimelineEvent {
  badge: string;
  now?: boolean;
  title: string;
  text: string;
  img: string;
}

const EVENTS: TimelineEvent[] = [
  {
    badge: '2011 · Fondation',
    title: 'Campagne fondatrice',
    text: "Lancement par 12 organisations de femmes rurales dans 5 pays d'Afrique de l'Ouest. NSS s'affirme comme mouvement pour la souveraineté alimentaire.",
    img: '/images/actualites/organisations-femmes-rurales-nss.jpg',
  },
  {
    badge: '2014 · Structuration',
    title: 'De campagne à mouvement',
    text: "NSS s'affirme comme mouvement panafricain. Premières associations de femmes rurales adhèrent massivement au réseau.",
    img: '/images/actualites/femmes-africaines-gardiennes-semences.jpg',
  },
  {
    badge: '2017 · Gouvernance',
    title: 'Première Assemblée Générale',
    text: "NSS tient sa première Assemblée Générale. Les instances de gouvernance sont constituées à 100% de femmes rurales. Chaque pays membre est représenté.",
    img: '/images/actualites/journee-femme-rurale-alimentation-2024.jpg',
  },
  {
    badge: '2022 · CIFAP',
    title: 'Lancement du CIFAP',
    text: 'Premier Camp International de Formation en Agroécologie Paysanne à Niaguis, Sénégal. Un modèle de formation continental unique.',
    img: '/images/actualites/camp-formation-agroecologie-niaguis-2024.jpg',
  },
  {
    badge: "2026 · Aujourd'hui",
    now: true,
    title: '14 pays, 175 000 membres',
    text: "NSS s'étend progressivement à travers l'Afrique de l'Ouest, en relation avec des initiatives similaires, pour se donner un cachet continental.",
    img: '/images/actualites/nss-cifap-2025.jpg',
  },
];

export default function MouvementTimeline() {
  return (
    <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Notre histoire</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="tl-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A]">
            De la campagne{' '}
            <em className="italic text-[#A5CE46] font-medium">au réseau panafricain.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto mt-3 mb-4" />
          <p className="text-[14px] text-[#6b7280] text-center">
            14 ans de construction collective pour la souveraineté alimentaire des femmes rurales.
          </p>
        </div>

        <div className="relative max-w-[880px] mx-auto tl-wrapper">
          {EVENTS.map((ev, i) => {
            const isOdd = i % 2 === 0;
            return (
              <article key={ev.badge} className="tl-item">
                <div className={`tl-content ${isOdd ? 'tl-content--left' : 'tl-content--right'}`}>
                  <span className={`inline-block text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-[14px] ${ev.now ? 'bg-[#00AD4C] text-white' : 'bg-[#045627] text-[#A5CE46]'}`}>
                    {ev.badge}
                  </span>
                  <h3 className={`text-[22px] font-semibold leading-[1.25] text-[#2A2A2A] mb-[10px] tracking-[-0.005em] ${isOdd ? 'tl-text-right' : ''}`}>
                    {ev.title}
                  </h3>
                  <p className={`text-[13px] font-light text-[#6b7280] leading-[1.75] ${isOdd ? 'tl-text-right' : ''}`}>
                    {ev.text}
                  </p>
                </div>

                <span className="tl-dot" aria-hidden />

                <div className={`tl-visual ${isOdd ? 'tl-visual--right' : 'tl-visual--left'}`}>
                  <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden relative">
                    <Image
                      src={ev.img}
                      alt={ev.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .tl-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .tl-wrapper::before {
          content: ""; position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 1px; background: #e5e7eb;
          transform: translateX(-50%);
        }
        .tl-item {
          display: grid; grid-template-columns: 1fr 32px 1fr;
          padding: 24px 0; align-items: center; position: relative;
        }
        .tl-dot {
          grid-column: 2; justify-self: center;
          width: 12px; height: 12px; border-radius: 50%;
          background: #00AD4C; display: block;
          box-shadow: 0 0 0 4px #f9f8f5, 0 0 0 5px #e5e7eb; z-index: 2;
        }
        .tl-content--left  { grid-column: 1; text-align: right; padding-right: 32px; }
        .tl-content--right { grid-column: 3; text-align: left;  padding-left: 32px; }
        .tl-visual--right  { grid-column: 3; padding-left: 32px; }
        .tl-visual--left   { grid-column: 1; padding-right: 32px; grid-row: 1; }
        .tl-text-right { text-align: right; }
        @media (max-width: 768px) {
          .tl-wrapper::before { left: 16px; transform: none; }
          .tl-item { grid-template-columns: 32px 1fr; }
          .tl-dot { grid-column: 1; grid-row: 1; justify-self: center; align-self: start; margin-top: 8px; }
          .tl-content--left, .tl-content--right {
            grid-column: 2; grid-row: 1; text-align: left; padding: 0 0 12px 12px;
          }
          .tl-visual--right, .tl-visual--left {
            grid-column: 2; grid-row: 2; padding: 0 0 0 12px;
          }
          .tl-text-right { text-align: left; }
        }
      `}</style>
    </section>
  );
}
