'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Leader {
  id: string;
  nom: string;
  abbr: string;
  orgFull: string;
  pays: string;
  photo: string | null;
}

const LEADERS: Leader[] = [
  { id: 'fatou-diop',       nom: 'Fatou B. Diop',         abbr: 'UGPM',        orgFull: 'Union des Groupements Paysans de Mékhé',                               pays: 'Sénégal',       photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Fatou-B.-Diop-UGPM.jpg' },
  { id: 'dao-bacouo',       nom: 'Dao Bacouo Haoua',      abbr: 'FENOP',       orgFull: 'Fédération Nationale des Organisations Paysannes',                     pays: 'Burkina Faso',  photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Catherie-Soulama-FENOP-1-rotated-1.jpg' },
  { id: 'mariama-sonko',    nom: 'Mariama Sonko',          abbr: 'AJAC',        orgFull: 'Association des Jeunes Agriculteurs de Casamance',                     pays: 'Sénégal',       photo: '/images/actualites/portrait-mariama-sonko-femme-rurale.jpg' },
  { id: 'yah-diakite',      nom: 'Yah Diakité',           abbr: 'AMASSA',      orgFull: "Association Malienne pour la Sécurité et la Souveraineté Alimentaires", pays: 'Mali',          photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Yah-Diakite-AMASSA-rotated-1.jpg' },
  { id: 'sia-kamano',       nom: 'Sia A.M. Kamano',       abbr: 'AGUISSA',     orgFull: "Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires", pays: 'Guinée',       photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Sia-A.-M.-Kamano-AGUISSA-1.jpg' },
  { id: 'fanta-mane',       nom: 'Fanta Mané',            abbr: 'KAFO',        orgFull: 'Fédération Paysanne de KAFO de Guinée Bissau',                          pays: 'Guinée Bissau', photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Cadia-Fernandes-KAFO-1-1-rotated-1.jpg' },
  { id: 'mariam-traore',    nom: 'Mariam Kalifa Traoré',  abbr: 'CAFO',        orgFull: 'Coordination des Associations et ONG Féminines du Mali',                 pays: 'Mali',          photo: null },
  { id: 'sutha-anita',      nom: 'Sutha Anita',           abbr: 'RUWFAG',      orgFull: 'Rural Women Farmers Association of Ghana',                              pays: 'Ghana',         photo: null },
  { id: 'esther-boakyi',    nom: 'Esther Y. Boakyi',      abbr: 'ABOFAP',      orgFull: 'Assono Organic Farming Project',                                         pays: 'Ghana',         photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Esther-Y.-Boake-ABOFAB-1.jpg' },
  { id: 'fanta-conde',      nom: 'Fanta Condé',           abbr: 'AGACFEM',     orgFull: "Association des Groupements et Associations Coopératives Féminines",    pays: 'Guinée',        photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Conde-AGACFEM-1.jpg' },
  { id: 'fanta-diamoutene', nom: 'Fanta Diamouténé',      abbr: 'AOPP',        orgFull: 'Associations des Organisations Professionnelles Paysannes',              pays: 'Mali',          photo: 'https://wasafrica.org/wp-content/uploads/2024/08/Fanta-Diamoutene-AOPP-1-rotated-1.jpg' },
  { id: 'rosalie-ouoba',    nom: 'Rosalie Ouoba',         abbr: 'RESACIFROAT', orgFull: "Réseau d'Appui à la Citoyenneté des Femmes Rurales Ouest-Africaines",   pays: 'Burkina Faso',  photo: null },
  { id: 'mariama-jadama',   nom: 'Mariama Jadama',        abbr: 'CGF',         orgFull: 'Catalunya Gambia Foundation',                                            pays: 'Gambie',        photo: null },
];

export default function MouvementLeaders() {
  const [count, setCount] = useState(4);
  const visible = LEADERS.slice(0, count);
  const hasMore = count < LEADERS.length;

  return (
    <section className="bg-[#f9f8f5] py-[clamp(4rem,8vw,6rem)] px-[clamp(1.25rem,4vw,2.5rem)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#00AD4C]">Nos leaders</span>
            <span className="w-7 h-px bg-[#00AD4C] shrink-0" aria-hidden />
          </div>
          <h2 className="leaders-h2 leading-[1.1] tracking-[-0.01em] text-[#2A2A2A]">
            Les voix qui <em className="italic text-[#A5CE46] font-medium">portent le mouvement.</em>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#00AD4C] mx-auto mt-3 mb-4" />
          <p className="text-[14px] text-[#6b7280] text-center">
            Des femmes de terrain qui incarnent NSS par leur engagement, leur vision et leur détermination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {visible.map((leader) => (
            <article
              key={leader.id}
              className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[#00AD4C] hover:-translate-y-0.5 leader-card"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                {leader.photo ? (
                  <Image
                    src={leader.photo}
                    alt={leader.nom}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full leader-placeholder" aria-hidden />
                )}
              </div>

              <div className="p-[20px_18px] flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#00AD4C]">
                  {leader.abbr}
                  <span className="text-[#d1d5db]" aria-hidden>·</span>
                  <span className="text-[#6b7280] font-medium tracking-[0.04em]">{leader.pays}</span>
                </div>
                <h3 className="text-[20px] font-semibold text-[#2A2A2A] leading-[1.2]">{leader.nom}</h3>
                <p className="text-[12px] font-light text-[#6b7280] leading-[1.5] flex-1">{leader.orgFull}</p>
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#00AD4C] mt-[6px]">
                  En savoir plus →
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setCount(c => c + 4)}
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#00AD4C] border-[1.5px] border-[#00AD4C] px-6 py-[11px] rounded-lg transition-all duration-200 hover:bg-[#00AD4C] hover:text-white"
            >
              Voir plus →
            </button>
          </div>
        )}
      </div>

      <style>{`
        .leaders-h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); }
        .leader-placeholder {
          background: linear-gradient(160deg, #c4b896 0%, #8f9d6c 60%, #4a6e3f 100%);
        }
        @keyframes leader-fadein { from { opacity:0; transform:translateY(10px);} to { opacity:1; transform:translateY(0);} }
        .leader-card { animation: leader-fadein 0.4s ease both; }
      `}</style>
    </section>
  );
}
