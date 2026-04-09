interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const lineColor = dark ? "rgba(127,212,166,0.4)" : "rgba(29,122,82,0.35)";
  const labelColor = dark ? "var(--green-300)" : "var(--green-600)";
  const titleColor = dark ? "#ffffff" : "var(--text-primary)";
  const subtitleColor = dark ? "rgba(255,255,255,0.6)" : "var(--text-primary)";

  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "52px",
      }}
    >
      {/* Label avec tirets */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "block",
            width: "28px",
            height: "1px",
            background: lineColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2.5px",
            color: labelColor,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          style={{
            display: "block",
            width: "28px",
            height: "1px",
            background: lineColor,
            flexShrink: 0,
          }}
        />
      </div>

      {/* Titre */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(21px, 3vw, 34px)",
          fontWeight: 400,
          lineHeight: 1.18,
          color: titleColor,
          margin: 0,
          marginBottom: subtitle ? "16px" : "0",
        }}
      >
        {title}
      </h2>

      {/* Sous-titre optionnel */}
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.65,
            color: subtitleColor,
            margin: align === "center" ? "0 auto" : "0",
            maxWidth: "620px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
