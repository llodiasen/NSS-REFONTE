"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const MESSAGES = [
  "175 000 membres à travers l'Afrique de l'Ouest",
  "500+ Associations de Femmes Rurales nous ont rejoints",
  "14 pays · 14 ans d'engagement pour la souveraineté alimentaire",
];

export default function HeaderTicker() {
  const [index, setIndex]   = useState(0);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 220);
  }, []);

  const next = useCallback(() => {
    go((index + 1) % MESSAGES.length);
  }, [index, go]);

  useEffect(() => {
    timer.current = setInterval(next, 4500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [next]);

  return (
    <div style={{
      background: "#0f2b1a",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
    }}>
      {/* Message */}
      <span style={{
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "11.5px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: "rgba(255,255,255,0.82)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(4px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "clamp(260px, 50vw, 600px)",
        textAlign: "center",
      }}>
        {MESSAGES[index]}
      </span>
    </div>
  );
}
