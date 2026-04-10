"use client";
const stats = [
  { value: "1.2 MWh", label: "Largest Installation" },
  { value: "600 kW", label: "Peak Power Output" },
  { value: "9+", label: "Patents Filed" },
  { value: "3", label: "Countries Served" },
  { value: "5ms", label: "Grid Switchover" },
  { value: "ISO", label: "9001 · 14001 · 45001" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "rgba(0,212,170,0.04)", borderTop: "1px solid rgba(0,212,170,0.1)", borderBottom: "1px solid rgba(0,212,170,0.1)", padding: "36px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          {stats.map(({ value, label }, i) => (
            <div key={i} style={{ textAlign: "center", flex: "1 1 120px" }}>
              <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, fontFamily: "'Space Mono', monospace", color: "#00d4aa", lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ fontSize: 12, color: "#7c92b3", marginTop: 6, letterSpacing: 0.5 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
