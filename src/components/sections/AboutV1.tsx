"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AboutV1Props {
  locale: string;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function AboutV1({ locale }: AboutV1Props) {
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const target = 175000;
        const duration = 2000;
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = easeOutQuart(progress) * target;
          setCount(Math.floor(value));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#F7F5F0",
        backgroundImage: "radial-gradient(circle, rgba(45,106,79,0.4) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(247,245,240,0.93)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* ── Left column ── */}
        <div>
          {/* Eyebrow */}
          <span
            style={{
              display: "block",
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#2D6A4F",
              marginBottom: "28px",
              animation: "nss-fadeIn 0.5s ease both",
            }}
          >
            À Propos
          </span>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
              fontSize: "clamp(42px, 5vw, 68px)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#1A1A1A",
              marginBottom: "32px",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span style={{ display: "block", animation: "nss-slideUp 0.75s cubic-bezier(0.16,1,0.3,1) 80ms both" }}>
                Les femmes rurales
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span style={{ display: "block", animation: "nss-slideUp 0.75s cubic-bezier(0.16,1,0.3,1) 200ms both" }}>
                <span style={{ position: "relative", display: "inline-block" }}>
                  nourrissent l&apos;Afrique
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-4px",
                      height: "2px",
                      width: "100%",
                      background: "#2D6A4F",
                      animation: "nss-drawLine 0.6s ease 700ms both",
                      transformOrigin: "left",
                    }}
                  />
                </span>
              </span>
            </span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#2D6A4F",
              marginBottom: "28px",
              animation: "nss-fadeIn 0.5s ease 400ms both",
            }}
          />

          {/* Body */}
          <p
            style={{
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#444",
              maxWidth: "460px",
              marginBottom: "48px",
              animation: "nss-fadeSlideUp 0.6s ease 500ms both",
            }}
          >
            Lancé en 2011 par douze organisations de femmes rurales du Burkina Faso,
            du Ghana, de la Guinée, du Mali et du Sénégal, le mouvement{" "}
            <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
              Nous Sommes la Solution
            </strong>{" "}
            rassemble aujourd&apos;hui plus de 175&nbsp;000 membres à travers
            l&apos;Afrique de l&apos;Ouest.
          </p>

          {/* Oversized stat */}
          <div
            ref={counterRef}
            style={{
              marginBottom: "40px",
              animation: "nss-fadeSlideUp 0.6s ease 600ms both",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "'Cormorant Garamond', var(--font-display), Georgia, serif",
                fontSize: "clamp(72px, 8vw, 108px)",
                fontWeight: 600,
                lineHeight: 1,
                color: "#2D6A4F",
                letterSpacing: "-2px",
              }}
            >
              {count.toLocaleString("fr-FR")}
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#999",
                marginTop: "6px",
              }}
            >
              membres et sympathisant·es
            </span>
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}/mouvement`}
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#2D6A4F",
              textDecoration: "none",
              animation: "nss-fadeIn 0.5s ease 750ms both",
              position: "relative",
            }}
            className="about-cta"
          >
            Qui sommes-nous →
          </Link>
        </div>

        {/* ── Right column — Image ── */}
        <div
          style={{
            position: "relative",
            animation: "nss-fadeIn 0.8s ease 300ms both",
          }}
        >
          {/* Green accent bar */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "48px",
              left: "-20px",
              width: "3px",
              height: "80px",
              background: "#2D6A4F",
              opacity: 0.45,
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "relative",
              aspectRatio: "3 / 4",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.06), 0 20px 48px -8px rgba(0,0,0,0.18)",
            }}
          >
            <Image
              src="/images/galerie/leader-1.jpg"
              alt="Femme rurale du mouvement Nous Sommes la Solution"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes nss-slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nss-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes nss-fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nss-drawLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .about-cta::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #2D6A4F;
          transition: width 0.3s ease;
        }
        .about-cta:hover::after { width: 100%; }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 72px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
