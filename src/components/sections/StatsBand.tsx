const STATS = [
  { value: "14",       accent: true,  label: "pays mobilisés" },
  { value: "175 000",  accent: true,  label: "membres et sympathisant·es" },
  { value: "500+",     accent: false, label: "formations organisées" },
  { value: "14 ans",   accent: true,  label: "d'engagement continu" },
];

export default function StatsBand() {
  return (
    <section className="sb-section">
      <div className="sb-grid">
        {STATS.map(({ value, accent, label }, i) => (
          <div key={label} className={`sb-item${i < STATS.length - 1 ? " sb-item--sep" : ""}`}>
            <span className={`sb-value${accent ? " sb-value--accent" : ""}`}>{value}</span>
            <span className="sb-label">{label}</span>
          </div>
        ))}
      </div>

      <style suppressHydrationWarning>{`
        .sb-section {
          background: #fff;
          border-top: 0.5px solid #d4ead9;
          border-bottom: 0.5px solid #d4ead9;
        }
        .sb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1200px;
          margin: 0 auto;
        }
        .sb-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 36px 24px;
          text-align: center;
        }
        .sb-item--sep {
          border-right: 0.5px solid #e8f0ec;
        }
        .sb-value {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 38px;
          font-weight: 500;
          color: #0e2418;
          line-height: 1;
          margin-bottom: 6px;
        }
        .sb-value--accent {
          color: #1a7a45;
        }
        .sb-label {
          font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          color: #5a7a64;
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .sb-grid { grid-template-columns: repeat(2, 1fr); }
          .sb-item:nth-child(2) { border-right: none; }
          .sb-item:nth-child(1),
          .sb-item:nth-child(2) { border-bottom: 0.5px solid #e8f0ec; }
          .sb-item--sep { border-right: 0.5px solid #e8f0ec; }
          .sb-item:nth-child(2) { border-right: none !important; }
          .sb-item:nth-child(4) { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
