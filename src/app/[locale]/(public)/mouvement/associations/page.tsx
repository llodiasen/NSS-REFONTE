import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Nos Associations membres — Mouvement NSS",
  description:
    "Découvrez les 13 associations de femmes rurales fondatrices du mouvement NSS, leurs leaders et leurs actions dans 7 pays d'Afrique de l'Ouest.",
};

interface Association {
  sigle: string;
  nom: string;
  pays: string;
  drapeau: string;
  leader: string;
  description: string;
}

const ASSOCIATIONS: Association[] = [
  { sigle: "FENOP", nom: "Fédération Nationale des Organisations Paysannes", pays: "Burkina Faso", drapeau: "🇧🇫", leader: "Mme Dao Bacouo Haoua", description: "Représente les organisations paysannes du Burkina Faso et porte la voix des agricultrices dans les politiques agricoles nationales." },
  { sigle: "RESACIFROAT", nom: "Réseau d'Appui à la Citoyenneté des Femmes Rurales Ouest-Africaines et du Tchad", pays: "Burkina Faso", drapeau: "🇧🇫", leader: "Rosalie Ouoba", description: "Réseau régional engagé pour la citoyenneté active et la participation des femmes rurales dans la gouvernance agricole." },
  { sigle: "CGF", nom: "Catalunya Gambia Foundation", pays: "Gambie", drapeau: "🇬🇲", leader: "Mariama Jadama", description: "Renforce les capacités des femmes rurales gambiennes dans l'agriculture durable et la sécurité alimentaire." },
  { sigle: "RUWFAG", nom: "Rural Women Farmers Association of Ghana", pays: "Ghana", drapeau: "🇬🇭", leader: "Sutha Anita", description: "Dédiée à l'autonomisation des femmes agricultrices du Ghana à travers la promotion de l'agriculture familiale et des pratiques agroécologiques." },
  { sigle: "ABOFAP", nom: "Assono Organic Farming Project", pays: "Ghana", drapeau: "🇬🇭", leader: "Esther Boakyi", description: "Pionnière dans la promotion de l'agriculture biologique et des semences paysannes au Ghana. Un modèle de transition agroécologique porté par les femmes." },
  { sigle: "AGUISSA", nom: "Association Guinéenne pour la Sécurité et la Souveraineté Alimentaires", pays: "Guinée", drapeau: "🇬🇳", leader: "Sia Anne Marie Kamano", description: "Forme les femmes rurales aux techniques d'agriculture durable et défend leur accès aux ressources naturelles." },
  { sigle: "AGAFEM", nom: "Association Guinéenne pour l'Allègement des Charges Féminines", pays: "Guinée", drapeau: "🇬🇳", leader: "Fanta Condé", description: "Réduit la charge de travail des femmes rurales guinéennes par des technologies adaptées et le renforcement de leurs droits économiques." },
  { sigle: "KAFO", nom: "Fédération Paysanne de Kafo", pays: "Guinée Bissau", drapeau: "🇬🇼", leader: "Fanta Mané", description: "Promeut l'agroécologie et l'organisation collective des femmes rurales pour une souveraineté alimentaire locale en Guinée Bissau." },
  { sigle: "AMASSA", nom: "Association Malienne pour la Sécurité et la Souveraineté Alimentaire", pays: "Mali", drapeau: "🇲🇱", leader: "Yah Diakité", description: "L'une des plus actives au Mali sur la souveraineté alimentaire. Forme, sensibilise et plaide pour les droits des paysannes." },
  { sigle: "AOPP", nom: "Associations des Organisations Professionnelles Paysannes", pays: "Mali", drapeau: "🇲🇱", leader: "Fanta Diamouténé", description: "Porte la parole des agriculteurs et agricultrices dans le dialogue politique avec les institutions nationales maliennes." },
  { sigle: "CAFO", nom: "Coordination des Associations et ONG Féminines du Mali", pays: "Mali", drapeau: "🇲🇱", leader: "Mariam Kalifa Traoré", description: "Coordonne l'action des associations féminines du Mali et renforce la participation des femmes rurales dans les espaces de décision." },
  { sigle: "AJAC", nom: "Association des Jeunes Agriculteurs de Casamance", pays: "Sénégal", drapeau: "🇸🇳", leader: "Mariama Sonko", description: "Accompagne les femmes et jeunes agricultrices de Casamance dans la transition agroécologique et la défense de la biodiversité locale." },
  { sigle: "UGPM", nom: "Union des Groupements Paysans de Mékhé", pays: "Sénégal", drapeau: "🇸🇳", leader: "Fatou Binetou Diop", description: "Référence du mouvement paysan sénégalais. Fédère les groupements paysans autour de la souveraineté alimentaire et des semences locales." },
];

const PAYS_GROUPES = Array.from(new Set(ASSOCIATIONS.map((a) => a.pays)));

export default function AssociationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider block mb-4">
              Nos organisations membres
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Les femmes qui portent le mouvement
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed">
              13 associations fondatrices. 7 pays. Des centaines de milliers de femmes
              rurales unies autour d&apos;une même conviction : elles sont la solution.
            </p>
          </div>
        </Container>
      </section>

      {/* ASSOCIATIONS PAR PAYS */}
      <Section variant="neutral">
        <Container>
          <SectionHeader
            label="Nos organisations membres"
            title="Les piliers du mouvement NSS"
          />

          <div className="space-y-14">
            {PAYS_GROUPES.map((pays) => {
              const assocs = ASSOCIATIONS.filter((a) => a.pays === pays);
              const drapeau = assocs[0].drapeau;
              return (
                <div key={pays}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{drapeau}</span>
                    <h2 className="font-body text-xl font-bold text-neutral-800">{pays}</h2>
                    <Badge variant="pays">{assocs.length} association{assocs.length > 1 ? "s" : ""}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {assocs.map((a) => (
                      <article
                        key={a.sigle}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100
                                   hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                            <span className="font-display font-bold text-primary-700 text-xs text-center leading-tight px-1">
                              {a.sigle}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-body font-bold text-neutral-800 text-sm leading-snug mb-1">
                              {a.nom}
                            </h3>
                            <p className="text-xs text-primary-700 font-semibold">{a.leader}</p>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed">{a.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
