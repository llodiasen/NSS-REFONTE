import { Crown, Users, Building, Globe, UserPlus, CheckCircle } from 'lucide-react';

const GOVERNANCE = [
  { Icon: Crown,    name: "Conseil d'Administration",  sub: '1 représentante par pays membre' },
  { Icon: Users,    name: 'Bureau exécutif',           sub: "Élu par le Conseil d'Administration" },
  { Icon: Building, name: 'Assemblée Générale',        sub: 'Instance souveraine du mouvement' },
  { Icon: Globe,    name: 'Coordinatrices nationales', sub: '1 par pays, relais terrain' },
];

const ACTIONS = [
  "Organiser des séances d'IEC sur la souveraineté alimentaire et l'agro-écologie",
  'Organiser des sessions de partage de techniques et pratiques endogènes',
  'Intervenir dans des réunions pour provoquer des changements en faveur de la souveraineté',
];

const STEPS = [
  "Remplir et signer une demande d'adhésion auprès d'une AFR membre",
  "S'acquitter de son adhésion et de sa cotisation annuelle",
  "Adhérer à la vision et s'impliquer dans les actions de NSS",
];

export default function MouvementStructure() {
  return (
    <section className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[72px] items-start">

        {/* Texte */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Notre structuration</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="struct-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A] mb-3">
            De la campagne{' '}
            <em className="italic text-[#A5CE46] font-medium">au mouvement continental.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mb-5" />

          <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left] mb-4">
            Passée d&apos;une campagne (2011–2014) à un mouvement, NSS a tenu sa première
            assemblée générale en 2017. Depuis lors, des décisions et orientations sont
            données par les instances compétentes du mouvement, constituées à 100% de
            femmes rurales.
          </p>

          <p className="text-[14px] font-light leading-[1.8] text-[#4A4A4A] text-justify [text-align-last:left] mb-5">
            Chaque pays membre est représenté par une personne dans le Conseil
            d&apos;Administration qui élit en son sein le bureau.
          </p>

          <blockquote className="border-l-2 border-[#00AD4C] pl-[18px] py-1 my-6">
            <p className="text-[17px] italic text-[#2A2A2A] leading-[1.55] font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              « Pour adhérer au Mouvement Nous Sommes la Solution il faut remplir et signer
              une demande d&apos;adhésion, payer pour son adhésion et sa cotisation. »
            </p>
          </blockquote>

          <ul className="flex flex-col gap-3 mt-5">
            {ACTIONS.map((a) => (
              <li key={a} className="flex items-start gap-3 text-[14px] text-[#4A4A4A] leading-[1.55]">
                <CheckCircle size={16} className="text-[#00AD4C] mt-[3px] shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Aside : orgchart + callout */}
        <aside className="flex flex-col gap-4">
          <div className="bg-[#f5f3ee] rounded-2xl p-9">
            <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6b7280] mb-6">
              Structure de gouvernance
            </h3>
            <div className="flex flex-col relative">
              {GOVERNANCE.map(({ Icon, name, sub }, i) => (
                <div key={name} className={`flex items-center gap-[14px] py-4 relative orgchart-item ${i < GOVERNANCE.length - 1 ? 'orgchart-connector' : ''}`}>
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#eaf3de] text-[#00AD4C] grid place-items-center z-[1]">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-[#2A2A2A]">{name}</div>
                    <div className="text-[12px] font-light text-[#6b7280]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#045627] rounded-2xl p-[28px_32px] flex flex-col gap-4">
            <div className="flex items-center gap-[14px]">
              <div className="w-10 h-10 rounded-[10px] bg-[rgba(245,237,214,0.10)] text-[#A5CE46] grid place-items-center shrink-0">
                <UserPlus size={20} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#F5EDD6] leading-[1.2]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Adhérer en 3 étapes
              </h3>
            </div>
            <p className="text-[13px] font-light text-[rgba(245,237,214,0.78)] leading-[1.7]">
              L&apos;adhésion suit un processus simple, ancré dans la conviction commune
              des leaders du mouvement.
            </p>
            <ul className="flex flex-col gap-[10px]">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-[10px] text-[12.5px] font-light text-[rgba(245,237,214,0.85)] leading-[1.5]">
                  <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-[rgba(165,206,70,0.18)] text-[#A5CE46] grid place-items-center text-[12px] font-bold mt-[1px]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <style>{`
        .struct-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .orgchart-connector::after {
          content: "";
          position: absolute;
          left: 17.5px; bottom: -1px;
          width: 1px; height: 18px;
          background: #e5e7eb;
        }
      `}</style>
    </section>
  );
}
