import Image from 'next/image';
import { Sprout, RefreshCw, Scale } from 'lucide-react';

const PILLARS = [
  { Icon: Sprout, label: 'Cultiver', phrase: 'Des pratiques agroécologiques qui respectent la terre.' },
  { Icon: RefreshCw, label: 'Transformer', phrase: 'Valoriser chaque étape de la chaîne alimentaire.' },
  { Icon: Scale, label: 'Décider', phrase: 'Les femmes rurales au cœur des politiques agricoles.' },
];

export default function AboutApVision() {
  return (
    <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)]">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] mb-[clamp(4rem,6vw,5rem)]">
        <div className="ap-vision-grid">

          {/* Texte + pilliers */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Notre vision</span>
              <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            </div>
            <h2 className="ap-vision-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
              Une Afrique souveraine,{' '}
              <em className="italic text-[#A5CE46] font-medium">cultivée par ses femmes.</em>
            </h2>
            <div className="w-[60px] h-[3px] bg-[#00AD4C] mb-5" />
            <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left] mb-6">
              NSS œuvre pour une Afrique où, dans la solidarité, les femmes rurales,
              impliquées dans la prise de décision, cultivent, transforment, vendent et
              consomment les produits de l&apos;agriculture familiale tout en préservant
              l&apos;environnement pour un développement harmonieux et durable.
            </p>

            <div className="border-t border-[#e5e7eb] pt-[24px] flex flex-col gap-[18px]">
              {PILLARS.map(({ Icon, label, phrase }) => (
                <div key={label} className="flex items-start gap-[14px] group">
                  <div className="w-10 h-10 rounded-full border-[1.5px] border-[#00AD4C] bg-white text-[#00AD4C] grid place-items-center shrink-0 transition-all duration-[250ms] group-hover:bg-[#00AD4C] group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00AD4C] mb-1">{label}</div>
                    <p
                      className="text-[17px] italic text-[#2A2A2A] leading-[1.4]"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {phrase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative ap-vision-photo rounded-2xl overflow-hidden">
            <Image
              src="/images/actualites/femmes-africaines-gardiennes-semences.jpg"
              alt="NSS — femmes gardiennes des semences"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* Bandeau */}
      <div className="bg-white border-t border-b border-[#e5e7eb] px-[clamp(1.5rem,6vw,4.5rem)] py-8 flex items-center justify-between gap-10 ap-bandeau">
        <div className="flex items-start gap-[14px] flex-1">
          <span
            className="text-[4rem] text-[#A5CE46] leading-[0.5] mt-[18px] shrink-0"
            style={{ fontFamily: 'var(--font-cormorant)' }}
            aria-hidden
          >
            &ldquo;
          </span>
          <p
            className="text-[20px] italic text-[#2A2A2A] leading-[1.5] max-w-[600px]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Nous Sommes la Solution œuvre pour une Afrique où les femmes rurales
            cultivent, transforment et consomment en toute souveraineté.
          </p>
        </div>
        <div className="text-right shrink-0">
          <div
            className="text-[4rem] font-bold text-[#00AD4C] leading-none tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            14
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7280] mt-2">Pays membres</div>
        </div>
      </div>

      <style>{`
        .ap-vision-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .ap-vision-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
        }
        .ap-vision-photo { min-height: 480px; height: 100%; }
        @media (max-width: 768px) {
          .ap-vision-grid { grid-template-columns: 1fr; gap: 40px; }
          .ap-vision-photo { min-height: 320px; order: -1; }
          .ap-bandeau { flex-direction: column; text-align: center; gap: 24px; padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
