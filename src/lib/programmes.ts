export type ProgrammeType = "camp" | "foire" | "conference"
export type StatutType = "ouvert" | "bientot" | "complet" | "passe"

export interface Programme {
  slug: string
  nom: string
  soustitre: string
  description: string
  type: ProgrammeType
  frequence: "annuel" | "bisannuel" | "ponctuel"
  public_cible: string
  prochaine_date: string
  prochaine_date_raw?: string
  lieu: string
  statut: StatutType
  couleur_accent: string
}

export const PROGRAMMES: Programme[] = [
  {
    slug: "cifap",
    nom: "CIFAP",
    soustitre: "Camp International de Formation en Agroécologie Paysanne",
    description:
      "Une semaine intensive pour former les leaders agricoles d'Afrique de l'Ouest aux pratiques agroécologiques paysannes.",
    type: "camp",
    frequence: "annuel",
    public_cible: "Sur sélection",
    prochaine_date: "Septembre 2026 — 8 jours",
    prochaine_date_raw: "2026-09-01",
    lieu: "Niaguis, Sénégal",
    statut: "ouvert",
    couleur_accent: "#0C3D2A",
  },
  {
    slug: "rencontre",
    nom: "Rencontre annuelle NSS",
    soustitre: "Le grand rassemblement du mouvement",
    description:
      "Bilans, orientations stratégiques et célébration des membres du mouvement NSS à travers l'Afrique de l'Ouest.",
    type: "conference",
    frequence: "annuel",
    public_cible: "Membres NSS",
    prochaine_date: "Date à confirmer — 2026",
    prochaine_date_raw: "2026-10-01",
    lieu: "Dakar, Sénégal",
    statut: "bientot",
    couleur_accent: "#185FA5",
  },
  {
    slug: "foire",
    nom: "Foire agroécologique",
    soustitre: "Espace d'exposition et d'échanges paysans",
    description:
      "Exposition, vente et échanges autour des semences paysannes et produits agroécologiques. Ouvert au grand public.",
    type: "foire",
    frequence: "annuel",
    public_cible: "Grand public",
    prochaine_date: "Novembre 2026 — 3 jours",
    prochaine_date_raw: "2026-11-01",
    lieu: "Région de Ziguinchor, Sénégal",
    statut: "bientot",
    couleur_accent: "#854F0B",
  },
]
