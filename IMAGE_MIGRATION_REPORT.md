# IMAGE_MIGRATION_REPORT.md — wasafrica.org (NSS)
Généré le : Mars 2026

---

## RÉSUMÉ

| Métrique | Valeur |
|----------|--------|
| Total fichiers uploads/ | 9 387 (toutes variantes incluses) |
| Images originales migrées (sans redimensionnement) | 1 119 |
| Dossier destination | `/public/images/wp/` |
| Taille dossier uploads/ complet (avant) | 728 Mo |
| Taille après migration (originaux seulement) | 184 Mo |
| Gain (redimensionnements exclus) | **-544 Mo (-75%)** |
| Format source | JPG, JPEG, PNG, WEBP |
| Formats non supportés trouvés | Aucun (BMP/TIFF absents) |

---

## ÉTAPE 1 — INVENTAIRE

### Structure uploads/ (dossiers WordPress)
- `2020/07` à `2020/12` — Images historiques (lancement NSS)
- `2023/05` à `2023/12` — Événements 2023
- `2024/04` à `2024/12` — CIFAP 2024, COP29, Pescara, EMMAP
- `2025/03` à `2025/12` — Rencontre Kindia, médias
- `2026/01` à `2026/03` — Dernières mises à jour
- Dossiers ignorés : `cache/`, `elementor/`, `redux/`, `revslider/`, `woocommerce_uploads/`, `wpcf7_uploads/`, `wpcode/`, `wpseo-redirects/`

### Doublons / redimensionnements
WordPress génère automatiquement plusieurs versions de chaque image :
`-100x100.jpg`, `-150x150.jpg`, `-300x203.jpg`, `-560x379.jpg`, `-600x406.jpg`, `-768x520.jpg`
→ **Ces variantes ont été exclues** — seuls les originaux ont été migrés.

### Formats non optimisés
- Aucun fichier .bmp ou .tiff trouvé
- Quelques .gif présents (animations) — non migrés (non nécessaires pour le site)

---

## ÉTAPE 2 — MIGRATION

**Dossier source :** `uploads/` (tous les sous-dossiers par année)
**Dossier destination :** `public/images/wp/` (structure plate)

Méthode : copie avec gestion des collisions (préfixe `[dossier]_` si doublon de nom).

---

## ÉTAPE 3 — IMAGES ASSIGNÉES AUX SECTIONS

| Chemin dans public/ | Image source | Usage |
|---------------------|--------------|-------|
| `/images/hero/hero-nss-femmes-rurales.jpg` | `agroecologie-nous-sommes-la-solution-formation-leaders-afrique-ouest.jpg` | Hero homepage |
| `/images/actualites/rencontre-2025.jpg` | `ceremonie-d-ouverture-de-la-rencontre-annuelle-de-NSS-en-Guinee-Bissau-1.jpeg` | Article actualités |
| `/images/actualites/cifap-2024.jpg` | `Camp-international-de-fromatio-sur-lAgroecologie-Paysane-Cifap-2024.jpg` | Article CIFAP |
| `/images/actualites/pescara-2024.jpg` | `Promotion-de-lagroecologie-paysanne-en-Afrique-de-lOuest-Les-acteurs-affutent-leurs-armes-a-Ouagadougou.jpeg` | Article Pescara |
| `/images/galerie/formation-1.jpg` | `Formation-Agroecologique-de-Djalicunda-en-Guinee-Bissau-1.jpeg` | Galerie Formation |
| `/images/galerie/agro-1.jpg` | `Agro-ecologie-1.jpeg` | Galerie Agroécologie |
| `/images/galerie/rencontre-1.jpg` | `Rencontre-Nous-Sommes-la-Solution-NSS-1.jpeg` | Galerie Rencontres |
| `/images/galerie/plaidoyer-1.jpg` | `LUTTE-POUR-LA-SOUVERAINETE-ALIMENTAIRE-EN-AFRIQUE-DE-LOUEST-1.jpeg` | Galerie Plaidoyer |
| `/images/galerie/leader-1.jpg` | `Mariama-Sonko-une-figure-de-la-femme-rurale-en-Afrique-de-lOuest.jpg` | Galerie Leaders |
| `/images/galerie/leader-2.jpg` | `Entretien-avec-Mariama-Sonko-faire-entendre-la-voix-des-agricultrices-en-Afrique-de-lOuest-1.jpeg` | Galerie Leaders |

---

## ÉTAPE 4 — PLACEHOLDERS RESTANTS

Les pages suivantes utilisent encore `<PlaceholderImage />` (composant NSS coloré avec titre)
en attendant l'assignation manuelle d'une photo :

- `ActualitesPreview` — articles sans imageUrl
- `src/data/articles.ts` — 6 articles avec `coverUrl: null`
- `src/app/[locale]/(public)/ressources/galerie/page.tsx` — photos Unsplash à remplacer

**Action requise :** Parcourir `public/images/wp/` et assigner manuellement
les meilleures photos NSS à chaque section.

---

## ÉTAPE 5 — COMPOSANT <Image> NEXT.JS

✅ Toutes les nouvelles images utilisent `<Image>` de next/image avec :
- `fill` + `sizes` pour les images responsive
- `loading="lazy"` pour les images hors viewport
- `priority` uniquement pour le hero
- `alt` descriptif sur chaque image

---

## IMAGES NON TROUVÉES (URLs potentiellement mortes)

- `/images/og-image.jpg` — À créer (1200×630px, branding NSS)
- Images de la galerie actuelle pointent vers Unsplash (temporaire)

---

## PROCHAINES ÉTAPES RECOMMANDÉES

1. **OG Image** — Créer `/public/og-image.jpg` (1200×630) avec le logo NSS
2. **Optimisation** — Lancer `sharp` ou `squoosh` sur les JPG > 500Ko
3. **Nommage** — Renommer les fichiers `1.jpg`, `2.jpg`, etc. de manière descriptive
4. **Galerie** — Sélectionner 12 photos NSS authentiques pour remplacer Unsplash
5. **Logo** — `Logo-NSS1.jpg` ou `cropped-Logo-NSS1.jpg` → `/public/images/logo-nss.jpg`

---

*IMAGE_MIGRATION_REPORT.md — wasafrica.org (NSS)*
*Mars 2026*
