interface Props {
  author: string;
  date?: string;
  readTime?: string;
  sourceName?: string;
  sourceUrl?: string;
  dark?: boolean;
}

function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 3);
}

export default function ArticleMeta({ author, date, readTime, sourceName, sourceUrl, dark = false }: Props) {
  const avatarText = dark ? "#ffffff"                : "#0f6e56";
  const labelColor = dark ? "rgba(255,255,255,0.5)"  : "#9ca3af";
  const nameColor  = dark ? "#ffffff"                : "#1a1a1a";
  const dotColor   = dark ? "rgba(255,255,255,0.3)"  : "rgba(0,0,0,0.2)";
  const borderCol  = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";
  const pillBg     = dark ? "rgba(255,255,255,0.15)" : "#e1f5ee";
  const pillInner  = dark ? "rgba(255,255,255,0.2)"  : "#c6e8d8";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "14px",
      flexWrap: "wrap",
      borderTop: `0.5px solid ${borderCol}`,
      borderBottom: `0.5px solid ${borderCol}`,
      padding: "12px 0",
      marginTop: "20px",
    }}>

      {/* ── Auteur ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: labelColor }}>
          Auteur
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", background: pillBg, borderRadius: "100px", padding: "4px 10px 4px 4px" }}>
          <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: pillInner, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 800, color: avatarText, letterSpacing: "0.03em" }}>
              {initials(author)}
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, color: nameColor, whiteSpace: "nowrap" }}>
            {author}
          </span>
        </div>
      </div>

      {/* ── Date ── */}
      {date && (
        <>
          <span style={{ color: dotColor, fontSize: "14px" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: labelColor }}>
              Date
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, color: nameColor }}>
              {date}
            </span>
          </div>
        </>
      )}

      {/* ── Source ── */}
      {sourceName && sourceUrl && (
        <>
          <span style={{ color: dotColor, fontSize: "14px" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: labelColor }}>
              Source
            </span>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: dark ? "#4ade80" : "#1D9E75", textDecoration: "none" }}>
              {sourceName} ↗
            </a>
          </div>
        </>
      )}

      {/* ── Temps de lecture ── */}
      {readTime && (
        <>
          <span style={{ color: dotColor, fontSize: "14px" }}>·</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: dark ? "#ffffff" : "#9ca3af" }}>
            {readTime}
          </span>
        </>
      )}

    </div>
  );
}
