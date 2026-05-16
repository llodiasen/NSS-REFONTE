interface Props {
  author?: string;
  date?: string;
  readTime?: string;
  sourceName?: string;
  sourceUrl?: string;
  location?: string;
  dark?: boolean;
}

function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClock({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUser({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPin({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

function IconLink({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArticleMeta({ author, date, readTime, sourceName, sourceUrl, location, dark = false }: Props) {
  const textColor   = dark ? "rgba(255,255,255,0.55)" : "#6b7280";
  const accentColor = dark ? "rgba(255,255,255,0.85)" : "#1a1a1a";
  const dotColor    = dark ? "rgba(255,255,255,0.20)" : "#d1d5db";
  const linkColor   = dark ? "#4ade80" : "#1D9E75";
  const iconColor   = dark ? "rgba(255,255,255,0.45)" : "#9ca3af";

  const items: React.ReactNode[] = [];

  if (author) items.push(
    <span key="author" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <IconUser color={iconColor} />
      <span style={{ color: accentColor, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "240px", display: "inline-block" }}>{author}</span>
    </span>
  );

  if (date) items.push(
    <span key="date" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <IconCalendar color={iconColor} />
      <span>{date}</span>
    </span>
  );

  if (location) items.push(
    <span key="location" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <IconPin color={iconColor} />
      <span>{location}</span>
    </span>
  );

  if (sourceName && sourceUrl) items.push(
    <span key="source" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <IconLink color={iconColor} />
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer"
        style={{ color: linkColor, textDecoration: "none", fontWeight: 500 }}>
        {sourceName} ↗
      </a>
    </span>
  );

  if (readTime) items.push(
    <span key="read" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <IconClock color={iconColor} />
      <span>{readTime}</span>
    </span>
  );

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif",
      fontSize: "13px",
      color: textColor,
      marginTop: "16px",
    }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && <span style={{ margin: "0 12px", color: dotColor }}>·</span>}
          {item}
        </span>
      ))}
    </div>
  );
}
