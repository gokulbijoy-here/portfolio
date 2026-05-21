"use client";

import FadeUp from "./FadeUp";

export default function About({ fg, muted, cardBorder }) {
  return (
    <section id="about" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
      <FadeUp>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            01 / About
          </span>
          <div style={{ flex: 1, height: "1px", background: cardBorder }} />
        </div>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <FadeUp delay={0.1}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: 1.8, color: fg, fontWeight: 300, margin: 0 }}>
            B.Tech IT student with hands-on experience in Python full-stack development,
            OCR-based automation projects, and machine learning applications. Interested in
            backend development, AI systems, and scalable web applications.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["Focus", "Backend · AI Systems · Web"],
              ["Stack", "Python · ML · Full-Stack"],
              ["Status", "Open to Opportunities"],
              ["Location", "Kerala, India"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderBottom: `1px solid ${cardBorder}`,
                }}
              >
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: fg }}>{v}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
