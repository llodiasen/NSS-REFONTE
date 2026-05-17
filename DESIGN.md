# DESIGN.md — NSS / wasafrica.org

## Color Strategy: Committed
Un vert NSS saturé porte 40-60% de chaque surface. L'or/ambre sert d'accent chaud. Le crème remplace le blanc pur sur fonds sombres.

## Palette stricte NSS v3.0

| Token          | Hex       | Usage                                              |
|----------------|-----------|----------------------------------------------------|
| vert-primaire  | `#00AD4C` | CTA primaires, accents forts, boutons, liens actifs |
| vert-clair     | `#A5CE46` | Accents secondaires, eyebrows, badges secondaires  |
| vert-foncé     | `#045627` | Backgrounds dark, sidebar, hero overlay, texte dark |
| or/ambre       | `#E8A838` | Highlights, stats clés, bouton don, à venir        |
| crème/beige    | `#F5EDD6` | Texte sur fond sombre, fonds clairs alternatifs    |
| charcoal       | `#2A2A2A` | Texte principal sur blanc                          |

**Interdit absolu : `#C4622D` (orange terracotta). Zéro orange dans les redesigns.**

## Typographie officielle NSS v3.0

- **Display** : `Cormorant Garamond` — H1, H2, titres éditoriaux, grands affichages
- **Body** : `DM Sans` — corps, navigation, labels, metadata, badges
- Variables CSS : `var(--font-display)`, `var(--font-body)`

## Élévation & Surfaces

- Fond blanc : `#ffffff` (pages principales)
- Fond alt clair : `#FAFAF8` (sections alternées)
- Fond crème : `#F5EDD6` (accents, highlights)
- Shadow légère : `0 2px 12px rgba(4,86,39,0.08)`
- Shadow card : `0 4px 24px rgba(0,0,0,0.08)`

## Composants établis

### Eyebrow
DM Sans 10px, font-weight 700, letter-spacing 0.1em, text-transform uppercase, color `#A5CE46`

### Section header
Eyebrow + H2 Cormorant 36-44px bold + sous-titre DM Sans 16px charcoal, centré

### Badge statut
Pill shape, DM Sans 9px 800 uppercase. Passé: bg `#EBEBEB` texte `#666`. À venir: bg `#E8A838` texte blanc.

### CTA primaire
bg `#00AD4C`, texte blanc, border-radius 6px, DM Sans 13px bold. Hover: bg `#045627`.

### CTA secondaire
border `#00AD4C`, texte `#045627`, bg transparent. Hover: bg `#00AD4C` texte blanc.

## Motifs
Géométriques africains subtils : `opacity: 0.04–0.06` uniquement. Jamais surchargé.

## Spacing
Section padding : 72-88px top/bottom. Inner max-width : 1280px. Gap grids : 24-32px.
