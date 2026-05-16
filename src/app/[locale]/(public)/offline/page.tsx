import Link from 'next/link'
import type { Metadata } from 'next'
import ReloadButton from './reload-button'

export const metadata: Metadata = {
  title: 'Hors ligne — NSS',
  robots: { index: false },
}

const NSS = {
  vertFonce:    '#045627',
  vertPrimaire: '#00AD4C',
  vertClair:    '#145c28',
} as const

export default function OfflinePage() {
  return (
    <main style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(2rem, 6vw, 4rem)',
      background: '#FAFAF8',
      textAlign: 'center',
      fontFamily: 'var(--font-dm-sans), sans-serif',
    }}>

      {/* Icône wifi-off */}
      <div style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: `${NSS.vertClair}22`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke={NSS.vertFonce}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1" fill={NSS.vertFonce} />
        </svg>
      </div>

      {/* Eyebrow */}
      <p style={{
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: NSS.vertClair,
        margin: '0 0 1rem',
      }}>
        Connexion requise
      </p>

      {/* Titre */}
      <h1 style={{
        fontFamily: 'var(--font-display), Georgia, serif',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: 600,
        color: '#1A1A1A',
        lineHeight: 1.2,
        margin: '0 0 1rem',
        letterSpacing: '-0.02em',
      }}>
        Vous êtes hors ligne
      </h1>

      {/* Séparateur */}
      <div style={{
        width: 48,
        height: 2,
        background: NSS.vertPrimaire,
        borderRadius: 2,
        margin: '0 auto 1.5rem',
      }} />

      {/* Message */}
      <p style={{
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.7,
        color: '#4A4A4A',
        maxWidth: 480,
        margin: '0 0 2.5rem',
      }}>
        Cette page n&apos;est pas disponible sans connexion internet.
        Vérifiez votre connexion et réessayez — le mouvement NSS vous attend.
      </p>

      {/* Bouton réessayer (client component) */}
      <ReloadButton />

      {/* Lien retour accueil */}
      <Link
        href="/fr"
        style={{
          fontSize: '0.8rem',
          fontWeight: 500,
          color: NSS.vertPrimaire,
          textDecoration: 'none',
          borderBottom: `1px solid ${NSS.vertClair}`,
          paddingBottom: 2,
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  )
}
