"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function Contact({ fg, muted, cardBorder, bg }) {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      e.target.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
      <FadeUp>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            04 / Contact
          </span>
          <div style={{ flex: 1, height: "1px", background: cardBorder }} />
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 3rem", color: fg }}>
          Get in<br />
          <span style={{ color: muted, fontWeight: 300 }}>Touch.</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000" },
          ].map(({ name, label, type, placeholder }) => (
            <div
              key={name}
              style={{ borderBottom: `1px solid ${cardBorder}`, display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center" }}
            >
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", padding: "1.2rem 0" }}>
                {label}
              </label>
              <input
                required
                type={type}
                name={name}
                placeholder={placeholder}
                style={{ background: "transparent", border: "none", outline: "none", color: fg, fontFamily: "'DM Mono', monospace", fontSize: "13px", padding: "1.2rem 0", caretColor: fg }}
              />
            </div>
          ))}

          <div style={{ borderBottom: `1px solid ${cardBorder}`, display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "start", paddingBottom: "0.5rem" }}>
            <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "1.2rem" }}>
              Message
            </label>
            <textarea
              required
              name="message"
              placeholder="Your message here…"
              rows={5}
              style={{ background: "transparent", border: "none", outline: "none", color: fg, fontFamily: "'DM Mono', monospace", fontSize: "13px", padding: "1.2rem 0", resize: "none", caretColor: fg }}
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <button
              type="submit"
              disabled={formStatus === "sending" || formStatus === "sent"}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 32px",
                background: formStatus === "sent" ? "#22c55e" : fg,
                color: formStatus === "sent" ? "#fff" : bg,
                border: "none", cursor: formStatus !== "idle" ? "default" : "pointer",
                fontFamily: "'DM Mono', monospace", fontSize: "12px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                borderRadius: "3px", transition: "all 0.3s",
                opacity: formStatus === "sending" ? 0.7 : 1,
              }}
            >
              {formStatus === "sending" ? "⟳ Sending…" : formStatus === "sent" ? "✓ Message Sent!" : "→ Send Message"}
            </button>
          </div>
        </form>
      </FadeUp>
    </section>
  );
}
