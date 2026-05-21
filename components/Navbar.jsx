"use client";

const NAV_LINKS = ["About", "Certifications", "Contact"];

export default function Navbar({ dark, setDark, fg, muted, cardBorder }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2rem", height: "56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `1px solid ${cardBorder}`,
        background: dark ? "rgba(5,5,5,0.85)" : "rgba(248,248,246,0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span />
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1.5rem" }} className="nav-links">
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n.toLowerCase())}
              style={{
                background: "none", border: "none", color: muted, cursor: "pointer",
                fontSize: "12px", fontFamily: "inherit", letterSpacing: "0.08em",
                textTransform: "uppercase", padding: 0, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = fg)}
              onMouseLeave={(e) => (e.target.style.color = muted)}
            >
              {n}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: "none", border: `1px solid ${cardBorder}`, color: fg,
            cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", transition: "border-color 0.2s",
          }}
        >
          {dark ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}
