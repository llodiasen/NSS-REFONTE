import { Users, Ban, ArrowUpRight } from 'lucide-react';

const FACTS = [
  {
    Icon: Users,
    num: '70%',
    label: "De l'alimentation familiale",
    text: "En Afrique, l'agriculture familiale constitue l'économie d'environ 70% des populations. Les femmes rurales en assurent l'essentiel.",
  },
  {
    Icon: Ban,
    num: '<10%',
    label: "D'accès aux ressources",
    text: "Les paysan-ne-s qui créent cette richesse ont un faible accès à la terre et aux ressources de production malgré leur rôle central.",
  },
  {
    Icon: ArrowUpRight,
    num: '+500',
    label: 'Associations mobilisées',
    text: "Malgré ces difficultés, les exploitations familiales rurales ont maintenu voire amélioré la production alimentaire grâce à leur résilience.",
  },
];

const PILLARS = [
  { num: '01', label: 'Porter la voix', phrase: 'Promouvoir la parole des paysannes dans la gouvernance agricole.' },
  { num: '02', label: 'Défendre', phrase: 'Des alternatives durables, rentables et ancrées dans les territoires.' },
  { num: '03', label: 'Élargir', phrase: 'Porter la souveraineté alimentaire à l\'échelle continentale.' },
];

export default function AboutApPourquoi() {
  return (
    <>
      {/* S3 — Pourquoi */}
      <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Pourquoi nous sommes la solution</span>
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            </div>
            <h2 className="ap-why-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-4">
              En Afrique, qui nourrit vraiment{' '}
              <em className="italic text-[#A5CE46] font-medium">les populations ?</em>
            </h2>
            <p className="text-[15px] font-light text-[#4A4A4A] leading-[1.75] text-justify [text-align-last:center]">
              Les femmes rurales. Elles assurent 70% de l&apos;alimentation familiale — mais restent
              exclues des décisions, des ressources et des marchés qui gouvernent leur travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACTS.map((f) => (
              <article key={f.label} className="bg-white border border-[#e5e7eb] rounded-[14px] p-8 flex flex-col gap-3 hover:border-[#00AD4C] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-[10px] bg-[#f0faf4] text-[#00AD4C] grid place-items-center">
                  <f.Icon size={20} />
                </div>
                <div
                  className="text-[2.5rem] font-bold text-[#00AD4C] leading-none tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {f.num}
                </div>
                <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#6b7280]">{f.label}</div>
                <p className="text-[13px] font-light text-[#4A4A4A] leading-[1.8] text-justify [text-align-last:left]">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S3bis — Réponse NSS */}
      <section className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="max-w-[1100px] mx-auto ap-response-grid">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Notre réponse</span>
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            </div>
            <h2 className="ap-why-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
              NSS est né{' '}
              <em className="italic text-[#A5CE46] font-medium">pour changer cela.</em>
            </h2>
            <div className="w-[60px] h-[3px] bg-[#00AD4C] mb-5" />
            <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left]">
              Le mouvement Nous Sommes la Solution est né pour promouvoir la voix des
              paysannes et paysans dans la gouvernance agricole aux niveaux local, national
              et continental — un engagement qui guide chacune de nos actions depuis 2011.
            </p>
          </div>

          <div className="ap-response-pillars">
            {PILLARS.map((p, i) => (
              <div key={p.num} className={`ap-rpillar${i === 0 ? ' ap-rpillar--first' : ''}`}>
                <div
                  className="text-[3.5rem] font-medium italic text-[#00AD4C] leading-[0.9] tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {p.num}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#2A2A2A]">{p.label}</span>
                    <span className="flex-1 h-px bg-[#e5e7eb]" aria-hidden />
                  </div>
                  <p className="text-[14px] font-light text-[#4A4A4A] leading-[1.7]">{p.phrase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ap-why-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .ap-response-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
        }
        .ap-response-pillars { display: flex; flex-direction: column; }
        .ap-rpillar {
          display: grid; grid-template-columns: 80px 1fr;
          gap: 24px; align-items: start;
          padding: 24px 0; border-top: 1px solid #e5e7eb;
          transition: padding-left 0.3s ease;
        }
        .ap-rpillar--first { border-top: 0; padding-top: 0; }
        .ap-rpillar:hover { padding-left: 8px; }
        @media (max-width: 768px) {
          .ap-response-grid { grid-template-columns: 1fr; gap: 40px; }
          .ap-rpillar { grid-template-columns: 60px 1fr; gap: 18px; padding: 18px 0; }
        }
      `}</style>
    </>
  );
}
