"use client";

import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const NAV_LINKS = ["About", "Certifications", "Contact"];

const CERTS = [
  { title: "Full Stack with Python", issuer: "GP3 Cloud Innovations", year: "2025", icon: "🐍" },
  { title: "GenAI Powered Data Analytics", issuer: "Forage", year: "2026", icon: "🤖" },
  { title: "Deloitte Data Analytics", issuer: "Forage", year: "2026", icon: "📊" },
  { title: "Hands-On Python Machine Learning", issuer: "Udemy", year: "2026", icon: "🧠" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const email = "gokulbijoy2@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bg = dark ? "#050505" : "#f8f8f6";
  const fg = dark ? "#ffffff" : "#0a0a0a";
  const muted = dark ? "#6b7280" : "#6b7280";
  const cardBg = dark ? "#111111" : "#ffffff";
  const cardBorder = dark ? "#222222" : "#e5e5e5";
  const accentLine = dark ? "#ffffff" : "#0a0a0a";

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: bg, color: fg, fontFamily: "'DM Mono', 'Fira Mono', monospace", minHeight: "100vh", transition: "background 0.4s, color 0.4s", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${cardBorder}`, background: dark ? "rgba(5,5,5,0.85)" : "rgba(248,248,246,0.85)", backdropFilter: "blur(12px)" }}>
        <span />
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "1.5rem" }} className="nav-links">
            {NAV_LINKS.map(n => (
              <button key={n} onClick={() => scrollTo(n.toLowerCase())} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: "12px", fontFamily: "inherit", letterSpacing: "0.08em", textTransform: "uppercase", padding: 0, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = fg} onMouseLeave={e => e.target.style.color = muted}>
                {n}
              </button>
            ))}
          </div>
          <button onClick={() => setDark(!dark)} style={{ background: "none", border: `1px solid ${cardBorder}`, color: fg, cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", transition: "border-color 0.2s" }}>
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem", maxWidth: "900px", margin: "0 auto", paddingTop: "80px" }}>
        <FadeUp delay={0.1}>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", margin: "0 0 0.5rem", color: fg }}>
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
                  <button onClick={action} style={{ background: "none", border: `1px solid ${cardBorder}`, color: copied ? "#22c55e" : muted, cursor: "pointer", fontSize: "10px", fontFamily: "inherit", padding: "2px 8px", borderRadius: "3px", letterSpacing: "0.05em", transition: "all 0.2s" }}>
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
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", border: `1px solid ${cardBorder}`, borderRadius: "3px", color: fg, textDecoration: "none", fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = dark ? "#1a1a1a" : "#f0f0f0"; e.currentTarget.style.borderColor = fg; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = cardBorder; }}>
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

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>01 / About</span>
            <div style={{ flex: 1, height: "1px", background: cardBorder }} />
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <FadeUp delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: 1.8, color: fg, fontWeight: 300, margin: 0 }}>
              B.Tech IT student with hands-on experience in Python full-stack development, OCR-based automation projects, and machine learning applications. Interested in backend development, AI systems, and scalable web applications.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[["Focus", "Backend · AI Systems · Web"], ["Stack", "Python · ML · Full-Stack"], ["Status", "Open to Opportunities"], ["Location", "Kerala, India"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${cardBorder}` }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: fg }}>{v}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* GITHUB STATS */}
      <section id="github" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>02 / GitHub Activity</span>
            <div style={{ flex: 1, height: "1px", background: cardBorder }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=gokulbijoy-here&show_icons=true&hide_border=true&bg_color=${dark ? "050505" : "f8f8f6"}&text_color=${dark ? "9ca3af" : "374151"}&title_color=${dark ? "ffffff" : "0a0a0a"}&icon_color=${dark ? "6b7280" : "6b7280"}&card_width=860`}
              alt="GitHub stats"
              style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
              onError={e => { e.target.style.display = "none"; }}
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=gokulbijoy-here&hide_border=true&background=${dark ? "050505" : "f8f8f6"}&stroke=${dark ? "222222" : "e5e5e5"}&ring=${dark ? "ffffff" : "0a0a0a"}&fire=${dark ? "ffffff" : "0a0a0a"}&currStreakNum=${dark ? "ffffff" : "0a0a0a"}&sideNums=${dark ? "9ca3af" : "374151"}&currStreakLabel=${dark ? "6b7280" : "6b7280"}&sideLabels=${dark ? "6b7280" : "6b7280"}&dates=${dark ? "6b7280" : "6b7280"}`}
              alt="GitHub streak"
              style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
              onError={e => { e.target.style.display = "none"; }}
            />
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=gokulbijoy-here&bg_color=${dark ? "050505" : "f8f8f6"}&color=${dark ? "6b7280" : "374151"}&line=${dark ? "ffffff" : "0a0a0a"}&point=${dark ? "ffffff" : "0a0a0a"}&hide_border=true`}
              alt="GitHub contribution graph"
              style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
              onError={e => { e.target.style.display = "none"; }}
            />
          </div>
        </FadeUp>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>03 / Certifications</span>
            <div style={{ flex: 1, height: "1px", background: cardBorder }} />
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1px", border: `1px solid ${cardBorder}`, borderRadius: "4px", overflow: "hidden" }}>
          {CERTS.map(({ title, issuer, year, icon }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div style={{ background: cardBg, padding: "1.75rem", borderRight: i % 2 === 0 ? `1px solid ${cardBorder}` : "none", borderBottom: i < 2 ? `1px solid ${cardBorder}` : "none", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? "#181818" : "#f5f5f3"}
                onMouseLeave={e => e.currentTarget.style.background = cardBg}>
                <div style={{ fontSize: "24px", marginBottom: "1rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 500, margin: "0 0 6px", color: fg, lineHeight: 1.4 }}>{title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted }}>{issuer}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, padding: "2px 8px", border: `1px solid ${cardBorder}`, borderRadius: "2px" }}>{year}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>04 / Contact</span>
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
          <form onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());
            setFormStatus("sending");
            setTimeout(() => {
              setFormStatus("sent");
              e.target.reset();
              setTimeout(() => setFormStatus("idle"), 3000);
            }, 1000);
          }} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} style={{ borderBottom: `1px solid ${cardBorder}`, display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center" }}>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", padding: "1.2rem 0" }}>{label}</label>
                <input required type={type} name={name} placeholder={placeholder} style={{ background: "transparent", border: "none", outline: "none", color: fg, fontFamily: "'DM Mono', monospace", fontSize: "13px", padding: "1.2rem 0", caretColor: fg }} />
              </div>
            ))}
            <div style={{ borderBottom: `1px solid ${cardBorder}`, display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "start", paddingBottom: "0.5rem" }}>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "1.2rem" }}>Message</label>
              <textarea required name="message" placeholder="Your message here…" rows={5} style={{ background: "transparent", border: "none", outline: "none", color: fg, fontFamily: "'DM Mono', monospace", fontSize: "13px", padding: "1.2rem 0", resize: "none", caretColor: fg }} />
            </div>
            <div style={{ marginTop: "2rem" }}>
              <button type="submit" disabled={formStatus === "sending" || formStatus === "sent"} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", background: formStatus === "sent" ? "#22c55e" : fg, color: formStatus === "sent" ? "#fff" : bg, border: "none", cursor: formStatus !== "idle" ? "default" : "pointer", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "3px", transition: "all 0.3s", opacity: formStatus === "sending" ? 0.7 : 1 }}>
                {formStatus === "sending" ? "⟳ Sending…" : formStatus === "sent" ? "✓ Message Sent!" : "→ Send Message"}
              </button>
            </div>
          </form>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${cardBorder}`, padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted }}>© 2026 GOKUL V B</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[{ label: "GitHub", href: "https://github.com/gokulbijoy-here" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/gokul-v-b-84b2b5286/" }].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = fg} onMouseLeave={e => e.target.style.color = muted}>
              {label} ↗
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
        @media (max-width: 680px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            display: block !important;
          }
        }
        input::placeholder, textarea::placeholder { color: ${muted}; opacity: 0.5; }
        input:focus, textarea:focus { background: transparent !important; }
      `}</style>
    </div>
  );
}
