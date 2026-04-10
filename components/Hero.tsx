"use client";
import Link from "next/link";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid-bg" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 80,
    }}>
      {/* Ambient glow orbs */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "10%",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Energy bar at top */}
      <div className="energy-bar" style={{ position: "absolute", top: 72, left: 0, right: 0, height: 2 }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", width: "100%", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4aa" }} className="pulse-ring" />
              <span style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 1.5, fontWeight: 600 }}>ISO 9001 · ISO 14001 · ISO 45001 CERTIFIED</span>
            </div>

            <h1 style={{ fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.05, marginBottom: 24, letterSpacing: -1 }}>
              Power the Future with{" "}
              <span className="grad-text text-glow">Smart Energy</span>{" "}
              Storage
            </h1>

            <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 520 }}>
              Harmonizer delivers advanced Battery Energy Storage Systems for industries, commercial spaces, and renewable energy plants — enabling peak shaving, backup power, and Net Zero goals.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
              <Link href="/bess" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
                color: "#03060f", padding: "14px 28px", borderRadius: 8,
                fontWeight: 700, fontSize: 15, textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,212,170,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                Explore BESS <ArrowRight size={16} />
              </Link>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(0,212,170,0.3)", color: "#e8f0fe",
                padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLElement).style.color = "#00d4aa"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; (e.currentTarget as HTMLElement).style.color = "#e8f0fe"; }}>
                Get a Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { icon: Shield, label: "ISO Certified" },
                { icon: Award, label: "9 Patents" },
                { icon: Globe, label: "Global Presence" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={16} color="#00d4aa" />
                  <span style={{ color: "#7c92b3", fontSize: 13, fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: BESS visual */}
          <div style={{ position: "relative" }}>
            <BESSVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function BESSVisual() {
  return (
    <div style={{ position: "relative", padding: "20px" }}>
      {/* Main card */}
      <div style={{
        background: "linear-gradient(135deg, #080e1e, #0d1628)",
        border: "1px solid rgba(0,212,170,0.2)",
        borderRadius: 20,
        padding: 40,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative corner */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "radial-gradient(circle at top right, rgba(0,212,170,0.1), transparent)" }} />

        <div style={{ fontSize: 13, color: "#00d4aa", letterSpacing: 2, fontFamily: "'Space Mono', monospace", marginBottom: 24 }}>BESS · LIVE MONITOR</div>

        {/* Battery cells grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 32 }}>
          {[95, 88, 92, 85, 90, 87, 93, 89].map((val, i) => (
            <div key={i} style={{
              background: "rgba(0,212,170,0.05)",
              border: "1px solid rgba(0,212,170,0.1)",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>{val}<span style={{ fontSize: 11 }}>%</span></div>
              <div style={{ fontSize: 9, color: "#7c92b3", marginTop: 4 }}>Cell {i + 1}</div>
              <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2, marginTop: 8, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${val}%`, background: "linear-gradient(90deg, #00d4aa, #0ea5e9)", borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { label: "Capacity", value: "1.2 MWh" },
            { label: "Output", value: "600 kW" },
            { label: "Efficiency", value: "98.5%" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#0ea5e9", fontFamily: "'Space Mono', monospace" }}>{value}</div>
              <div style={{ fontSize: 11, color: "#7c92b3", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Energy flow bar */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#7c92b3" }}>Energy Flow</span>
            <span style={{ fontSize: 12, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>CHARGING</span>
          </div>
          <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
            <div className="energy-bar" style={{ height: "100%", width: "100%", borderRadius: 3 }} />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div style={{
        position: "absolute",
        top: -10,
        right: -10,
        background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
        color: "#03060f",
        borderRadius: 100,
        padding: "6px 14px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.5,
      }}>
        ✓ Net Zero Ready
      </div>
      <div style={{
        position: "absolute",
        bottom: -10,
        left: 0,
        background: "rgba(8,14,30,0.95)",
        border: "1px solid rgba(0,212,170,0.3)",
        color: "#00d4aa",
        borderRadius: 8,
        padding: "8px 16px",
        fontSize: 12,
        fontWeight: 600,
      }}>
        ⚡ 5ms Switchover Time
      </div>
    </div>
  );
}
