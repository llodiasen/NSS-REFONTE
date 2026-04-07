"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 14,     suffix: "",   label: "Organisations de femmes rurales" },
  { value: 8,      suffix: "",   label: "Pays participants" },
  { value: 500,    suffix: "+",  label: "Associations de femmes rurales" },
  { value: 175000, suffix: "",   label: "Membres et sympathisant·es" },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

export default function ImpactStrip() {
  return (
    <section style={{ background: "#1a3a2a" }}>
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "56px 32px" }}
        className="impact-wrap"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="impact-grid">
          {STATS.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: "0 32px",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
              className="impact-item"
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  marginBottom: "10px",
                }}
              >
                <AnimatedNumber value={value} suffix={suffix} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .impact-wrap { padding: 48px 24px !important; }
          .impact-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 0; }
          .impact-item { border-left: none !important; }
          .impact-item:nth-child(even) { border-left: 1px solid rgba(255,255,255,0.1) !important; }
        }
        @media (max-width: 420px) {
          .impact-grid { grid-template-columns: 1fr !important; }
          .impact-item:nth-child(even) { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
