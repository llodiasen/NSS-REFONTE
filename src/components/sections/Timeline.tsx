"use client";

import { useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

function TimelineNode({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isRight = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-10 transition-all duration-700"
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Contenu gauche (desktop : pair à gauche) */}
      <div className={isRight ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}>
        <div
          className={`bg-white rounded-xl p-6 shadow-sm border border-neutral-100
                      hover:shadow-md transition-shadow duration-300`}
        >
          <span className="inline-block text-primary-700 font-display font-bold text-xl mb-2">
            {item.year}
          </span>
          <h3 className="font-body font-bold text-neutral-800 mb-2">{item.title}</h3>
          <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Nœud central — visible uniquement desktop */}
      <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10
                      w-5 h-5 rounded-full bg-primary-700 border-4 border-primary-100 shadow-md" />
    </div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />
      <div className="space-y-2">
        {items.map((item, i) => (
          <TimelineNode key={item.year} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
