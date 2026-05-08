"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export interface NavDropItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface Props {
  items: NavDropItem[];
  onClose: () => void;
}

export default function HeaderNavDropdown({ items, onClose }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: 0,
        zIndex: 200,
        background: "#fff",
        border: "0.5px solid #dde8de",
        borderRadius: "10px",
        minWidth: "240px",
        padding: "6px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="hnavdd-item"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            padding: "8px 12px",
            borderRadius: "7px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: 500,
              color: "#0f2b1a",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "13px",
              color: "#888",
              lineHeight: 1.4,
            }}
          >
            {item.description}
          </span>
        </Link>
      ))}

      <style>{`
        .hnavdd-item:hover { background: #f4f9f5 !important; }
      `}</style>
    </div>
  );
}
