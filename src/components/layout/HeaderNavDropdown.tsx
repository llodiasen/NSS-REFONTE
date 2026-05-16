"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export interface NavDropItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  indent?: boolean;
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
      {items.map((item, i) => (
        <Link
          key={`${item.href}-${i}`}
          href={item.href}
          onClick={onClose}
          className="hnavdd-item"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            padding: item.indent ? "5px 12px 5px 22px" : "8px 12px",
            borderRadius: "7px",
            textDecoration: "none",
            borderLeft: item.indent ? "2px solid #e8f4ec" : "none",
            marginLeft: item.indent ? "12px" : "0",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: item.indent ? "12px" : "13px",
              fontWeight: 400,
              color: item.indent ? "#2a7a4a" : "#0f2b1a",
              lineHeight: 1.3,
            }}
          >
            {item.indent && <span style={{ color: "#A5CE46", marginRight: 5, fontSize: 11 }}>›</span>}
            {item.title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "11px",
              color: "#aaa",
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
