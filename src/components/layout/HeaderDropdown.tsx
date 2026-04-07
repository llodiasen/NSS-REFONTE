import Link from "next/link";

interface DropdownItem {
  label: string;
  description?: string;
  href: string;
}

interface Props {
  items: DropdownItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function HeaderDropdown({ items, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: 0,
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.09)",
        borderRadius: "10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        zIndex: 200,
        minWidth: "180px",
        width: "max-content",
        overflow: "hidden",
        animation: "ddFadeIn 0.14s ease both",
      }}
    >
      {items.map((item, i) => (
        <div key={item.href}>
          {i > 0 && (
            <div style={{ height: "1px", background: "rgba(0,0,0,0.06)" }} />
          )}
          <Link
            href={item.href}
            role="menuitem"
            className="dd-link"
            style={{
              display: "block",
              padding: "10px 16px",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#1a1a1a",
              transition: "background 0.12s ease, color 0.12s ease",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </Link>
        </div>
      ))}

      <style>{`
        .dd-link:hover { background: rgba(26,107,60,0.06) !important; color: #1a6b3c !important; }
        @keyframes ddFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
