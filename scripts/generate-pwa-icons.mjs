/**
 * Génère les icônes PWA NSS à partir du logo officiel.
 * Usage: node scripts/generate-pwa-icons.mjs
 */

import sharp from 'sharp'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.resolve(__dirname, '..')
const LOGO      = path.join(ROOT, 'public/images/logo/LOGO NSS.png')
const OUT       = path.join(ROOT, 'public/images/pwa')

const NSS_GREEN = { r: 4, g: 86, b: 39 }   // #045627

// ─── Icône standard (fond transparent) ─────────────────────────────────────
async function makeIcon(size, outName) {
  await sharp(LOGO)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, outName))

  console.log(`✓ ${outName} (${size}×${size})`)
}

// ─── Icône maskable (fond vert, logo centré à 80%) ──────────────────────────
// Zone safe = 80% du carré → padding = 10% de chaque côté
async function makeMaskable(size, outName) {
  const logoSize   = Math.round(size * 0.80)
  const pad        = Math.round((size - logoSize) / 2)

  // 1. Redimensionner le logo (fond blanc temporaire pour éviter le halo)
  const logoBuffer = await sharp(LOGO)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  // 2. Créer un carré vert et y coller le logo centré
  await sharp({
    create: {
      width:      size,
      height:     size,
      channels:   4,
      background: { ...NSS_GREEN, alpha: 255 },
    },
  })
    .composite([{ input: logoBuffer, top: pad, left: pad }])
    .png()
    .toFile(path.join(OUT, outName))

  console.log(`✓ ${outName} (${size}×${size}, maskable)`)
}

// ─── Apple Touch Icon (fond blanc, logo centré à 76%) ───────────────────────
async function makeAppleTouchIcon() {
  const size     = 180
  const logoSize = Math.round(size * 0.76)
  const pad      = Math.round((size - logoSize) / 2)

  const logoBuffer = await sharp(LOGO)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer()

  await sharp({
    create: {
      width:      size,
      height:     size,
      channels:   4,
      background: { r: 255, g: 255, b: 255, alpha: 255 },
    },
  })
    .composite([{ input: logoBuffer, top: pad, left: pad }])
    .png()
    .toFile(path.join(OUT, 'apple-touch-icon.png'))

  console.log(`✓ apple-touch-icon.png (${size}×${size})`)
}

// ─── Favicon 32×32 ──────────────────────────────────────────────────────────
async function makeFavicon() {
  await sharp(LOGO)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, '../../../favicon-32.png'))

  console.log('✓ favicon-32.png')
}

// ─── Main ────────────────────────────────────────────────────────────────────
console.log('\n🎨 Génération des icônes PWA NSS...\n')

try {
  await makeIcon(192, 'icon-192x192.png')
  await makeIcon(512, 'icon-512x512.png')
  await makeMaskable(192, 'icon-192x192-maskable.png')
  await makeMaskable(512, 'icon-512x512-maskable.png')
  await makeAppleTouchIcon()

  console.log('\n✅ Toutes les icônes générées dans public/images/pwa/\n')
} catch (err) {
  console.error('❌ Erreur :', err.message)
  process.exit(1)
}
