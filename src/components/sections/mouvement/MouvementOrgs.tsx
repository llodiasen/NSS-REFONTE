'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Org {
  abbr: string;
  name: string;
  pays: string;
  logo: string;
}

const ORGS: Org[] = [
  { abbr: 'UGPM',        name: 'Union des Groupements Paysans de Mékhé',                              pays: 'Sénégal',       logo: '/images/Associations/UGPM.webp' },
  { abbr: 'FENOP',       name: 'Fédération Nationale des Organisations Paysannes',                    pays: 'Burkina Faso',  logo: '/images/Associations/FENOP.webp' },
  { abbr: 'AGUISSA',     name: "Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires", pays: 'Guinée',      logo: '/images/Associations/AGUISSA.webp' },
  { abbr: 'KAFO',        name: 'Fédération Paysanne de KAFO',                                         pays: 'Guinée Bissau', logo: '/images/Associations/KAFO.webp' },
  { abbr: 'AMASSA',      name: "Association Malienne pour la Sécurité et la Souveraineté Alimentaire", pays: 'Mali',         logo: '/images/Associations/AMASSA-e1723163900160.webp' },
  { abbr: 'CAFO',        name: 'Coordination des Associations et ONG Féminines du Mali',              pays: 'Mali',          logo: '/images/Associations/CAFO.webp' },
  { abbr: 'ABOFAP',      name: 'Assono Organic Farming Project',                                      pays: 'Ghana',         logo: '/images/Associations/ABOFAM-768x723.webp' },
  { abbr: 'AGACFEM',     name: "Association Guinéenne pour l'Allègement des Charges Féminines",       pays: 'Guinée',        logo: '/images/Associations/AGAFAM.webp' },
  { abbr: 'AOPP',        name: 'Associations des Organisations Professionnelles Paysannes',           pays: 'Mali',          logo: '/images/Associations/AOOP.webp' },
  { abbr: 'RUWFAG',      name: 'Rural Women Farmers Association of Ghana',                            pays: 'Ghana',         logo: '/images/Associations/RUWFAG-768x768.webp' },
  { abbr: 'RESACIFROAT', name: "Réseau d'Appui à la Citoyenneté des Femmes Rurales Ouest-Africaines", pays: 'Burkina Faso',  logo: '/images/Associations/RESACIFROAT.webp' },
  { abbr: 'CGF',         name: 'Catalunya Gambia Foundation',                                         pays: 'Gambie',        logo: '/images/Associations/CATALUNYA-1.webp' },
  { abbr: 'AJAC',        name: 'Association des Jeunes Agriculteurs de Casamance',                    pays: 'Sénégal',       logo: '/images/Associations/AJAC-1536x1044-1-768x522.webp' },
];

export default function MouvementOrgs() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ORGS : ORGS.slice(0, 5);

  return (
    <section id="organisations" className="bg-white py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Le réseau</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="orgs-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A]">
            Nos organisations, <em className="italic text-[#A5CE46] font-medium">nos racines.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto mt-3 mb-4" />
          <p className="text-[14px] text-[#6b7280] text-center">
            Plus de 500 associations de femmes rurales réparties dans 14 pays d&apos;Afrique
            de l&apos;Ouest — un réseau vivant, ancré dans les territoires.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {visible.map((org) => (
            <article
              key={org.abbr}
              className="border border-[#e5e7eb] rounded-[10px] p-[20px_12px_14px] flex flex-col items-center gap-[10px] transition-all duration-200 hover:border-[#00AD4C] hover:-translate-y-0.5 org-card-item"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f0faf4] to-[#eaf3de] flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={org.logo}
                  alt={org.abbr}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div className="text-[12px] font-semibold text-[#2A2A2A] mt-[2px]">{org.abbr}</div>
              <div className="text-[10px] text-[#6b7280] text-center leading-[1.4] flex-1">{org.name}</div>
              <div className="text-[10px] font-medium text-[#00AD4C] uppercase tracking-[0.08em] mt-auto">{org.pays}</div>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#00AD4C] border-[1.5px] border-[#00AD4C] px-6 py-[11px] rounded-lg transition-all duration-200 hover:bg-[#00AD4C] hover:text-white"
            >
              Voir toutes les organisations →
            </button>
          </div>
        )}
      </div>
      <style>{`
        .orgs-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        @keyframes org-fadein { from { opacity:0; transform:translateY(10px);} to { opacity:1; transform:translateY(0);} }
        .org-card-item { animation: org-fadein 0.4s ease both; }
      `}</style>
    </section>
  );
}
