"use client";

export default function Footer({ fg, muted, cardBorder }) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${cardBorder}`,
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted }}>
        © 2026 GOKUL V B
      </span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: "https://github.com/gokulbijoy-here" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/gokul-v-b-84b2b5286/" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted,
              textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = fg)}
            onMouseLeave={(e) => (e.target.style.color = muted)}
          >
            {label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
