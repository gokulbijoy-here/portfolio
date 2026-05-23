"use client";

import FadeUp from "./FadeUp";

const CERTS = [
  {
    title: "Full Stack with Python",
    issuer: "GP3 Cloud Innovations",
    year: "2025",
    icon: "🐍",
    link: "https://drive.google.com/file/d/1RveU9x9eGIao_A5YgBzLcdiZTQEk_B8Y/view?usp=sharing",
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Forage",
    year: "2026",
    icon: "🤖",
    link: "https://drive.google.com/file/d/1UozFQcmpyBWtwaauykPYeyHl_Y2dsuo-/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    year: "2026",
    icon: "📊",
    link: "https://drive.google.com/file/d/1JTvVXVy0ugvC7yhO5gA-Ww1AEb9ub08b/view?usp=sharing",
  },
  {
    title: "Hands-On Python Machine Learning",
    issuer: "Udemy",
    year: "2026",
    icon: "🧠",
    link: "https://drive.google.com/file/d/1jUJlzG42YOsGUMY6Sm35QAQ74d_Lz-hx/view?usp=sharing",
  },
];

export default function Certifications({ dark, fg, muted, cardBg, cardBorder }) {
  return (
    <section id="certifications" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
      <FadeUp>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            03 / Certifications
          </span>
          <div style={{ flex: 1, height: "1px", background: cardBorder }} />
        </div>
      </FadeUp>

      <div
        style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "1px", border: `1px solid ${cardBorder}`, borderRadius: "4px", overflow: "hidden",
        }}
      >
        {CERTS.map(({ title, issuer, year, icon, link }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  background: cardBg,
                  padding: "1.75rem",
                  borderRight: i % 2 === 0 ? `1px solid ${cardBorder}` : "none",
                  borderBottom: i < 2 ? `1px solid ${cardBorder}` : "none",
                  transition: "background 0.2s",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = dark ? "#181818" : "#f5f5f3";
                  e.currentTarget.querySelector(".view-badge").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = cardBg;
                  e.currentTarget.querySelector(".view-badge").style.opacity = "0";
                }}
              >
                {/* Hover badge */}
                <div
                  className="view-badge"
                  style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    fontFamily: "'DM Mono', monospace", fontSize: "10px",
                    color: muted, letterSpacing: "0.08em", textTransform: "uppercase",
                    opacity: 0, transition: "opacity 0.2s",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}
                >
                  View ↗
                </div>

                <div style={{ fontSize: "24px", marginBottom: "1rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 500, margin: "0 0 6px", color: fg, lineHeight: 1.4 }}>
                  {title}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted }}>{issuer}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, padding: "2px 8px", border: `1px solid ${cardBorder}`, borderRadius: "2px" }}>
                    {year}
                  </span>
                </div>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
