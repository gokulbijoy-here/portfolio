"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FadeUp from "./FadeUp";

// ── Replace these three values with your EmailJS credentials ──────────────────
const EMAILJS_SERVICE_ID  = "service_sopqpcq";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_9kd2iui";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "ChF-Uvu_Xi231X955";   // e.g. "aBcDeFgHiJkLmNoP"
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact({ fg, muted, cardBorder, bg }) {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus("sent");
      formRef.current.reset();
      setTimeout(() => setFormStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  const FIELDS = [
    { name: "from_name",  label: "Name",  type: "text",  placeholder: "Your full name" },
    { name: "from_email", label: "Email", type: "email", placeholder: "your@email.com" },
    { name: "phone",      label: "Phone", type: "tel",   placeholder: "+91 00000 00000" },
  ];

  const btnLabel = {
    idle:    "→ Send Message",
    sending: "⟳ Sending…",
    sent:    "✓ Message Sent!",
    error:   "✕ Failed — Try Again",
  }[formStatus];

  const btnBg = {
    idle:    fg,
    sending: fg,
    sent:    "#22c55e",
    error:   "#ef4444",
  }[formStatus];

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
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FIELDS.map(({ name, label, type, placeholder }) => (
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
                background: btnBg,
                color: formStatus === "idle" ? bg : "#fff",
                border: "none",
                cursor: formStatus === "idle" ? "pointer" : "default",
                fontFamily: "'DM Mono', monospace", fontSize: "12px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                borderRadius: "3px", transition: "all 0.3s",
                opacity: formStatus === "sending" ? 0.7 : 1,
              }}
            >
              {btnLabel}
            </button>
          </div>
        </form>
      </FadeUp>
    </section>
  );
}
