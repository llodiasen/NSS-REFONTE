import type { CSSProperties, ReactNode } from 'react'

const C_GREEN = '#97C459'

interface PageHeroProps {
  label: string
  title: ReactNode
  subtitle: string
  imageSrc: string
  imagePosition?: string
}

const OVERLAY: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to right, rgba(5,12,5,0.88) 50%, rgba(5,12,5,0.40) 100%)',
}

export default function PageHero({
  label,
  title,
  subtitle,
  imageSrc,
  imagePosition = 'center',
}: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        color: '#ffffff',
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: imagePosition,
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div aria-hidden="true" style={OVERLAY} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px clamp(1.5rem, 4vw, 44px) 44px',
          width: '100%',
          boxSizing: 'border-box' as const,
        }}
      >
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span
            aria-hidden="true"
            style={{ display: 'block', width: '28px', height: '1.5px', background: C_GREEN, flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: C_GREEN,
              whiteSpace: 'nowrap' as const,
            }}
          >
            {label}
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'rgb(246,243,238)',
            marginBottom: '16px',
            maxWidth: '900px',
            margin: '0 0 16px',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Source Serif 4', var(--font-source-serif), serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#ffffff',
            maxWidth: '800px',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
