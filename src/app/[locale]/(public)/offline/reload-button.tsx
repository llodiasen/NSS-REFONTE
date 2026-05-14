'use client'

const NSS_VERT_FONCE = '#045627'

export default function ReloadButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: NSS_VERT_FONCE,
        color: '#fff',
        border: 'none',
        borderRadius: 2,
        padding: '14px 28px',
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        cursor: 'pointer',
        fontFamily: 'var(--font-dm-sans), sans-serif',
        marginBottom: '1rem',
      }}
    >
      Réessayer
    </button>
  )
}
