interface Belief {
  num: string;
  title: string;
  description: string;
}

const BELIEFS: Belief[] = [
  {
    num: "01",
    title: "La femme rurale nourrit le continent",
    description:
      "Plus de 70% des denrées alimentaires d'Afrique de l'Ouest sont produites par des femmes qui n'ont accès ni aux terres, ni aux financements, ni aux instances de décision.",
  },
  {
    num: "02",
    title: "L'agroécologie est notre boussole",
    description:
      "Nous défendons des pratiques agricoles qui préservent les savoirs locaux, la biodiversité et l'autonomie des communautés rurales face aux pressions industrielles.",
  },
  {
    num: "03",
    title: "Le changement vient de l'intérieur",
    description:
      "NSS ne parle pas à la place des femmes rurales — nous leur donnons les espaces et la force collective pour transformer elles-mêmes leurs systèmes alimentaires.",
  },
];

export default function MessagesSection() {
  return (
    <section className="bel-section">
      <div className="bel-inner">
        <p className="bel-eyebrow">Ce en quoi nous croyons</p>
        <div className="bel-list">
          {BELIEFS.map(({ num, title, description }, i) => (
            <div
              key={num}
              className={`bel-item${i === BELIEFS.length - 1 ? " bel-item--last" : ""}`}
            >
              <span className="bel-num">{num}</span>
              <h3 className="bel-title">{title}</h3>
              <p className="bel-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .bel-section {
          background: #0e2418;
          padding: 96px 40px;
        }
        .bel-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .bel-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4caf80;
          margin: 0 0 32px;
          font-family: var(--font-body);
        }
        .bel-eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: #4caf80;
          flex-shrink: 0;
        }
        .bel-list {
          display: flex;
          flex-direction: column;
        }
        .bel-item {
          display: grid;
          grid-template-columns: 32px 1fr 1.8fr;
          gap: 24px;
          padding: 22px 0;
          border-top: 0.5px solid rgba(255,255,255,0.1);
          align-items: start;
        }
        .bel-item--last {
          border-bottom: 0.5px solid rgba(255,255,255,0.1);
        }
        .bel-num {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          padding-top: 1px;
        }
        .bel-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .bel-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: #fff;
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 768px) {
          .bel-section { padding: 48px 20px; }
          .bel-item { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
