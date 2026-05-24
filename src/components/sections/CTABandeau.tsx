import Link from "next/link";

interface CTABandeauProps {
  locale: string;
}

export default function CTABandeau({ locale }: CTABandeauProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #D3D1C7",
        maxWidth: "1400px",
        margin: "0 auto 0",
      }}
      className="bandeau-wrap"
    >
      {/* ── Colonne gauche — Nous rejoindre ── */}
      <div
        style={{
          background: "#fff",
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
        className="bandeau-left"
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1A1A18",
            whiteSpace: "nowrap",
          }}
        >
          Nous rejoindre
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1.5px solid #D3D1C7",
              color: "#4A4A42",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
              flexShrink: 0,
            }}
            className="bandeau-social"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1.5px solid #D3D1C7",
              color: "#4A4A42",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
              flexShrink: 0,
            }}
            className="bandeau-social"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1.5px solid #D3D1C7",
              color: "#4A4A42",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
              flexShrink: 0,
            }}
            className="bandeau-social"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" />
            </svg>
          </a>

          {/* Newsletter */}
          <Link
            href={`/${locale}/contact`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              border: "1.5px solid #D3D1C7",
              borderRadius: "8px",
              padding: "9px 16px",
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#1A1A18",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
              whiteSpace: "nowrap",
            }}
            className="bandeau-newsletter"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            S&apos;abonner à la newsletter
          </Link>
        </div>
      </div>

      {/* ── Colonne droite — Agir ensemble ── */}
      <div
        style={{
          background: "#0F3D28",
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
        className="bandeau-right"
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#5DCAA5",
            whiteSpace: "nowrap",
          }}
        >
          Agir ensemble
        </span>

        <div style={{ display: "flex", gap: "10px", flex: 1, flexWrap: "wrap" }}>
          <Link
            href={`/${locale}/agir/rejoindre`}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              borderRadius: "8px",
              padding: "11px 20px",
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
            className="bandeau-btn-outline"
          >
            Rejoindre NSS
          </Link>
          <Link
            href={`/${locale}/agir/donner`}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1D9E75",
              border: "none",
              borderRadius: "8px",
              padding: "11px 20px",
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
            className="bandeau-btn-primary"
          >
            Faire un don
          </Link>
        </div>
      </div>

      <style>{`
        .bandeau-social:hover  { border-color: #1D9E75 !important; color: #1D9E75 !important; }
        .bandeau-newsletter:hover { border-color: #1A1A18 !important; background: #F5F3EE !important; }
        .bandeau-btn-outline:hover { background: rgba(255,255,255,0.18) !important; }
        .bandeau-btn-primary:hover { background: #17845f !important; }
        @media (max-width: 768px) {
          .bandeau-wrap { grid-template-columns: 1fr !important; border-radius: 12px !important; }
          .bandeau-left, .bandeau-right { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
