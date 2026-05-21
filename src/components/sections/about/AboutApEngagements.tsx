import { Wheat, Home, Sprout, Leaf, TreePine, Scale, Users } from 'lucide-react';

const ENGAGEMENTS = [
  {
    Icon: Wheat,
    title: 'La souveraineté alimentaire',
    text: "Le pouvoir de toute communauté de décider en toute liberté et de façon autonome de son système de production et d'alimentation.",
  },
  {
    Icon: Home,
    title: "L'agriculture familiale",
    text: "La famille comme première force de travail pour produire prioritairement ce dont les membres ont besoin. En harmonie avec la nature, cadre d'éducation et d'emplois.",
  },
  {
    Icon: Sprout,
    title: 'Les semences paysannes',
    text: "Sélectionnées dans la récolte selon des procédés endogènes. Résilientes et productives dans les systèmes agroécologiques, elles élargissent la biodiversité.",
  },
  {
    Icon: Leaf,
    title: 'La promotion de la biodiversité',
    text: "Conserver et renforcer la variété et la diversité du monde vivant. La biodiversité reconnaît la complémentarité entre les éléments de la nature, gage d'un développement durable.",
  },
  {
    Icon: TreePine,
    title: "La pratique de l'agro-écologie",
    text: "Système holistique qui soutient la santé des écosystèmes et s'appuie sur les cycles fonctionnels adaptés aux conditions locales, plutôt que l'usage d'intrants chimiques.",
  },
  {
    Icon: Scale,
    title: "L'accès équitable aux ressources",
    text: "Possibilité pour chaque personne d'avoir un égal accès aux ressources agricoles selon ses besoins, en intégrant les paramètres de genre.",
  },
  {
    Icon: Users,
    title: 'La gouvernance participative',
    text: "Participation effective et consciente des organisations paysannes à la définition, la mise en œuvre, le suivi et l'évaluation des politiques agricoles.",
  },
];

export default function AboutApEngagements() {
  return (
    <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Nos engagements</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="ap-eng-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
            Ce à quoi nous croyons,{' '}
            <em className="italic text-[#A5CE46] font-medium">ce que nous défendons.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto mt-3 mb-4" />
          <p className="text-[14px] text-[#6b7280] text-center">
            Sept engagements fondamentaux issus du manifeste NSS qui guident chaque action du réseau.
          </p>
        </div>

        <div className="ap-eng-grid">
          {ENGAGEMENTS.map((e) => (
            <article
              key={e.title}
              className="bg-white border border-[#e5e7eb] rounded-[14px] p-8 flex flex-col gap-[14px] hover:border-[#00AD4C] hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-[250ms]"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#f0faf4] text-[#00AD4C] grid place-items-center">
                <e.Icon size={22} />
              </div>
              <h3 className="text-[20px] font-semibold text-[#2A2A2A] leading-[1.2]">{e.title}</h3>
              <div className="w-8 h-[2px] bg-[#00AD4C]" />
              <p className="text-[13px] font-light text-[#4A4A4A] leading-[1.8] text-justify [text-align-last:left] flex-1">{e.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ap-eng-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .ap-eng-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ap-eng-grid > article:last-child:nth-child(3n+1) {
          grid-column: 2;
        }
        @media (max-width: 900px) {
          .ap-eng-grid { grid-template-columns: 1fr 1fr; }
          .ap-eng-grid > article:last-child:nth-child(3n+1) { grid-column: auto; }
        }
        @media (max-width: 600px) {
          .ap-eng-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
