"use client";

import FadeUp from "./FadeUp";

export default function GitHubStats({ dark, muted, cardBorder }) {
  const bg = dark ? "050505" : "f8f8f6";
  const textColor = dark ? "9ca3af" : "374151";
  const titleColor = dark ? "ffffff" : "0a0a0a";
  const iconColor = dark ? "6b7280" : "6b7280";
  const strokeColor = dark ? "222222" : "e5e5e5";
  const ringColor = dark ? "ffffff" : "0a0a0a";

  return (
    <section id="github" style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 2rem" }}>
      <FadeUp>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            02 / GitHub Activity
          </span>
          <div style={{ flex: 1, height: "1px", background: cardBorder }} />
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=gokulbijoy-here&show_icons=true&hide_border=true&bg_color=${bg}&text_color=${textColor}&title_color=${titleColor}&icon_color=${iconColor}&card_width=860`}
            alt="GitHub stats"
            style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=gokulbijoy-here&hide_border=true&background=${bg}&stroke=${strokeColor}&ring=${ringColor}&fire=${ringColor}&currStreakNum=${ringColor}&sideNums=${textColor}&currStreakLabel=${iconColor}&sideLabels=${iconColor}&dates=${iconColor}`}
            alt="GitHub streak"
            style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=gokulbijoy-here&bg_color=${bg}&color=${iconColor}&line=${ringColor}&point=${ringColor}&hide_border=true`}
            alt="GitHub contribution graph"
            style={{ width: "100%", borderRadius: "4px", border: `1px solid ${cardBorder}` }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </FadeUp>
    </section>
  );
}
