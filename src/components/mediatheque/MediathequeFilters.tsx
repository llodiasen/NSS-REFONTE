"use client";

import { Search } from "lucide-react";

const PILLS = ["Tous", "Sénégal", "Mali", "Burkina Faso", "Niger", "Guinée", "Côte d'Ivoire"];

interface Props {
  activeTab:      string;
  activePill:     string;
  search:         string;
  onTabChange:    (t: string) => void;
  onPillChange:   (p: string) => void;
  onSearchChange: (s: string) => void;
}

export default function MediathequeFilters({
  activePill, search, onPillChange, onSearchChange,
}: Props) {
  return (
    <>
      {/* Pills pays + Recherche */}
      <div
        className="mth-filters"
        style={{ padding: "20px 80px 0", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", borderBottom: "0.5px solid #dde8de", paddingBottom: "16px" }}
      >
        <span style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>Pays :</span>
        {PILLS.map((pill) => {
          const active = activePill === pill;
          return (
            <button
              key={pill}
              onClick={() => onPillChange(pill)}
              style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "20px", cursor: "pointer", border: `1px solid ${active ? "#0f2b1a" : "#dde8de"}`, background: active ? "#0f2b1a" : "#fff", color: active ? "#e8f5eb" : "#555", transition: "all 0.15s" }}
            >
              {pill}
            </button>
          );
        })}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", background: "#fff", border: "1px solid #dde8de", borderRadius: "8px", padding: "6px 12px", gap: "6px" }}>
          <Search size={14} color="#aaa" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher une vidéo…"
            style={{ fontSize: "13px", width: "180px", border: "none", outline: "none", background: "transparent" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mth-filters { padding: 16px 20px !important; }
        }
      `}</style>
    </>
  );
}
