"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const email = "gokulbijoy2@gmail.com";

export default function Hero({ dark, fg, muted, cardBorder, accentLine }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bg = dark ? "#050505" : "#f8f8f6";

  return (
    <section
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 2rem",
        maxWidth: "900px", margin: "0 auto", paddingTop: "80px",
        position: "relative",
      }}
    >
      <FadeUp delay={0.1}>
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 700, lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: "0 0 0.5rem", color: fg,
          }}
        >
          GOKUL<br />
          <span style={{ color: muted, fontWeight: 300 }}>V B</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "1.5rem 0 2.5rem" }}>
          <div style={{ height: "1px", width: "40px", background: accentLine }} />
          <p style={{ margin: 0, fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.06em", color: muted, textTransform: "uppercase" }}>
            Aspiring Software Engineer
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {[
            { icon: "✉", label: email, action: copyEmail, copyable: true },
            { icon: "✆", label: "+91 6238120619" },
            { icon: "◎", label: "Kerala, India" },
          ].map(({ icon, label, action, copyable }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: muted, fontSize: "12px" }}>{icon}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: muted }}>{label}</span>
              {copyable && (
                <button
                  onClick={action}
                  style={{
                    background: "none", border: `1px solid ${cardBorder}`,
                    color: copied ? "#22c55e" : muted, cursor: "pointer",
                    fontSize: "10px", fontFamily: "inherit", padding: "2px 8px",
                    borderRadius: "3px", letterSpacing: "0.05em", transition: "all 0.2s",
                  }}
                >
                  {copied ? "COPIED" : "COPY"}
                </button>
              )}
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.4}>
        <div style={{ display: "flex", gap: "1rem" }}>
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
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "10px 20px", border: `1px solid ${cardBorder}`,
                borderRadius: "3px", color: fg, textDecoration: "none",
                fontFamily: "'DM Mono', monospace", fontSize: "11px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = dark ? "#1a1a1a" : "#f0f0f0";
                e.currentTarget.style.borderColor = fg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = cardBorder;
              }}
            >
              <span>{label === "GitHub" ? "⌥" : "⊞"}</span> {label} ↗
            </a>
          ))}
        </div>
      </FadeUp>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: "2rem", left: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "1px", height: "40px", background: muted, opacity: 0.4 }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: muted, textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
      </div>
    </section>
  );
}
