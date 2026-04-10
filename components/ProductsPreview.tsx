"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    category: "Commercial",
    title: "Commercial BESS",
    subtitle: "Residences & Small Offices",
    specs: ["Compact form factor", "Plug-and-play installation", "Smart energy management", "Mobile app monitoring"],
    tag: "Entry Level",
    tagColor: "#f59e0b",
  },
  {
    category: "Industrial",
    title: "Industrial BESS",
    subtitle: "Factories & Large Plants",
    specs: ["1.2 MWh+ capacity", "600kW power output", "Air & Liquid cooling options", "Integration with DG sets"],
    tag: "Enterprise",
    tagColor: "#00d4aa",
    featured: true,
  },
  {
    category: "High Voltage",
    title: "60kW HV Battery System",
    subtitle: "High Voltage Applications",
    specs: ["High voltage architecture", "Modular & scalable", "Advanced BMS", "Grid-forming capable"],
    tag: "Advanced",
    tagColor: "#0ea5e9",
  },
];

export default function ProductsPreview() {
  return (
    <section style={{ padding: "100px 24px", background: "rgba(0,0,0,0.3)", position: "relative" }}>
      {/* Background gradient */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.04), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>PRODUCT RANGE</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.1 }}>
              BESS for Every{" "}
              <span className="grad-text">Scale</span>
            </h2>
          </div>
          <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 6, color: "#7c92b3", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00d4aa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#7c92b3")}>
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
          {products.map(({ category, title, subtitle, specs, tag, tagColor, featured }) => (
            <div key={title} className="card-hover" style={{
              background: featured
                ? "linear-gradient(135deg, #080e1e, #0a1520)"
                : "linear-gradient(135deg, #060b18, #0a1020)",
              border: featured
                ? "1px solid rgba(0,212,170,0.3)"
                : "1px solid rgba(0,212,170,0.08)",
              borderRadius: 20,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}>
              {featured && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #00d4aa, #0ea5e9)",
                }} />
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <span style={{ fontSize: 11, color: "#7c92b3", letterSpacing: 2, fontWeight: 600 }}>
                  {category.toUpperCase()}
                </span>
                <span style={{
                  fontSize: 11,
                  color: tagColor,
                  background: `${tagColor}18`,
                  border: `1px solid ${tagColor}30`,
                  padding: "3px 10px",
                  borderRadius: 100,
                  fontWeight: 600,
                }}>
                  {tag}
                </span>
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e8f0fe", marginBottom: 6 }}>{title}</h3>
              <p style={{ color: "#7c92b3", fontSize: 13, marginBottom: 24 }}>{subtitle}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {specs.map(spec => (
                  <div key={spec} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: tagColor, flexShrink: 0 }} />
                    <span style={{ color: "#a0b4c8", fontSize: 13 }}>{spec}</span>
                  </div>
                ))}
              </div>

              <Link href="/products" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                color: tagColor, fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}>
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional components */}
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {["Air Cooled System", "Liquid Cooled System", "Combiner Cabinet", "Power Conversion System (PCS)", "Energy Management System (EMS)"].map(comp => (
            <div key={comp} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ea5e9", flexShrink: 0 }} />
              <span style={{ color: "#7c92b3", fontSize: 13 }}>{comp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
