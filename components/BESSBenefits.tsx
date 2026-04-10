"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: "☀️",
    title: "Renewable Energy Buffer",
    desc: "Stores surplus solar or wind energy — nearly doubles usable capacity. Ensures continuous power supply and accelerates Net Zero targets.",
    color: "#f59e0b",
  },
  {
    icon: "⚡",
    title: "Power Reliability",
    desc: "Uninterrupted power supply with 5ms changeover during grid failure. Protects critical equipment and eliminates production losses.",
    color: "#00d4aa",
  },
  {
    icon: "💰",
    title: "Cost Optimization",
    desc: "Store energy during low-tariff periods. Discharge or sell during peak tariff windows. Maximise ROI on your energy investments.",
    color: "#0ea5e9",
  },
  {
    icon: "🔋",
    title: "Grid Stabilization",
    desc: "Balance supply and demand while reducing strain on the grid during peak usage. Participate in demand response programs.",
    color: "#a78bfa",
  },
  {
    icon: "🌍",
    title: "Energy Independence",
    desc: "Create self-sufficient microgrids. Reduce or eliminate dependency on utility providers and contribute to CO₂ reduction.",
    color: "#34d399",
  },
  {
    icon: "🌱",
    title: "Sustainability Goals",
    desc: "Reduce carbon footprint and meet environmental targets through optimised renewable energy storage and monitoring.",
    color: "#6ee7b7",
  },
];

export default function BESSBenefits() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>
            WHY BESS?
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }}>
            Six Reasons to Go{" "}
            <span className="grad-text">Battery-First</span>
          </h2>
          <p style={{ color: "#7c92b3", fontSize: 17, maxWidth: 560, margin: "16px auto 0" }}>
            BESS technology is crucial for reducing CO₂ emissions and building resilient, future-ready power infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 56 }}>
          {benefits.map(({ icon, title, desc, color }) => (
            <div key={title} className="card-hover" style={{
              background: "linear-gradient(135deg, #080e1e, #0d1628)",
              border: "1px solid rgba(0,212,170,0.1)",
              borderRadius: 16,
              padding: 32,
            }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 20,
              }}>
                {icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#e8f0fe", marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "#7c92b3", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${color}, transparent)`, marginTop: 20, borderRadius: 1 }} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/bess" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "#00d4aa", fontSize: 15, fontWeight: 600, textDecoration: "none",
            border: "1px solid rgba(0,212,170,0.3)", padding: "12px 28px", borderRadius: 8,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            See how BESS works <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
