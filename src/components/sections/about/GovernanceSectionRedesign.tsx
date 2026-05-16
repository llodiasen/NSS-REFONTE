const NSS = {
  vertFonce:  '#045627',
  vertClair:  '#145c28',
} as const

const PAYS = [
  { flag: '🇧🇫', code: 'BF', nom: 'Burkina Faso' },
  { flag: '🇨🇮', code: 'CI', nom: "Côte d'Ivoire" },
  { flag: '🇬🇲', code: 'GM', nom: 'Gambie' },
  { flag: '🇬🇭', code: 'GH', nom: 'Ghana' },
  { flag: '🇬🇳', code: 'GN', nom: 'Guinée' },
  { flag: '🇬🇼', code: 'GW', nom: 'Guinée-Bissau' },
  { flag: '🇲🇱', code: 'ML', nom: 'Mali' },
  { flag: '🇸🇳', code: 'SN', nom: 'Sénégal' },
] as const

export default function GovernanceSectionRedesign() {
  return (
    <section className="gpr" aria-label="Pays membres du réseau NSS">
      <div className="gpr-wrap">

        <p className="gpr-label">8 PAYS MEMBRES DU RÉSEAU NSS</p>

        <ul className="gpr-list" role="list">
          {PAYS.map(({ code, nom }) => (
            <li key={code} className="gpr-badge" role="listitem">
              <span className="gpr-code" aria-hidden="true">{code}</span>
              <span className="gpr-nom">{nom}</span>
            </li>
          ))}
        </ul>

      </div>

      <style>{`
        .gpr {
          background: #ffffff;
          overflow: hidden;
        }

        .gpr-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 28px 64px 40px;
          display: flex;
          align-items: center;
          gap: 32px;
          overflow: hidden;
        }

        .gpr-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${NSS.vertFonce};
          white-space: nowrap;
          flex-shrink: 0;
          margin: 0;
        }

        .gpr-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
          flex: 1;
          justify-content: space-between;
        }

        .gpr-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #F9F8F5;
          border: 1px solid rgba(165, 206, 70, 0.40);
          border-radius: 100px;
          padding: 5px 12px;
          white-space: nowrap;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .gpr-badge:hover {
          border-color: ${NSS.vertClair};
          box-shadow: 0 2px 8px rgba(165, 206, 70, 0.2);
        }

        .gpr-code {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 9px;
          font-weight: 800;
          color: ${NSS.vertFonce};
          letter-spacing: 0.06em;
        }

        .gpr-nom {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: ${NSS.vertFonce};
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .gpr-wrap { padding: 32px 40px; gap: 28px; }
          .gpr-nom  { display: none; }
          .gpr-list { justify-content: flex-start; gap: 6px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .gpr-wrap {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 28px 24px;
          }
          .gpr-list {
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          .gpr-nom { display: inline; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gpr-badge { transition: none; }
        }
      `}</style>
    </section>
  )
}

