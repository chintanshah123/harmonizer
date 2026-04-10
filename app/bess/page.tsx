import CTASection from "@/components/CTASection";

const scenarios = [
  {
    id: "solar",
    icon: "☀️",
    title: "During Solar Hours",
    color: "#f59e0b",
    desc: "Solar panels generate electricity. Surplus power beyond immediate load demand is stored in the BESS. The battery charges intelligently, maximising renewable energy capture.",
    flow: ["Solar Panels", "→", "Load (Direct)", "+", "BESS Charges"],
    highlights: ["Zero grid import", "Battery charges to ~95% SOC", "Continuous power to load"],
  },
  {
    id: "non-solar",
    icon: "🌙",
    title: "Non-Solar Hours (Grid Available)",
    color: "#0ea5e9",
    desc: "When solar is unavailable, the BESS discharges to supply the load. Grid acts as backup. Stored off-peak energy is used first to reduce tariff costs.",
    flow: ["BESS Discharges", "→", "Load", "+", "Grid Backup"],
    highlights: ["Peak shaving from battery", "Grid as secondary source", "Optimised tariff usage"],
  },
  {
    id: "grid-failure",
    icon: "🚨",
    title: "Non-Solar + Grid Failure",
    color: "#f43f5e",
    desc: "During grid failure, BESS instantly takes over within 5 milliseconds — faster than most equipment can detect a disruption. Zero production loss.",
    flow: ["Grid ✗", "→", "BESS Supplies Load", "⚡ 5ms Switchover"],
    highlights: ["5ms seamless changeover", "Critical equipment protected", "No production outage"],
  },
  {
    id: "critical",
    icon: "🔴",
    title: "Battery SOC < 10% + Grid Failed",
    color: "#a78bfa",
    desc: "In extreme scenarios, the DG set integrates as backup. BESS acts as a buffer, reducing DG fuel consumption and providing clean power transition.",
    flow: ["DG Set", "→", "BESS Buffer", "→", "Critical Load"],
    highlights: ["DG integration enabled", "Prioritise critical loads", "Fuel efficiency improved"],
  },
];

const benefits = [
  { icon: "📉", label: "Peak Shaving" },
  { icon: "♻️", label: "Extended Renewable Usage" },
  { icon: "🌱", label: "Net Zero & Sustainability" },
  { icon: "🏭", label: "Eliminated Production Outage" },
  { icon: "💨", label: "CO₂ Emission Reduction" },
  { icon: "⚙️", label: "DG Integration for Extreme Backup" },
];

export default function BESSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 24px 80px" }} className="grid-bg">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>TECHNOLOGY</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, maxWidth: 740, marginBottom: 28 }}>
            How <span className="grad-text">BESS</span> Works
          </h1>
          <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.8, maxWidth: 640 }}>
            Battery Energy Storage System stores electrical energy in Lithium batteries and discharges it to load or the grid whenever required — enabling resilience, sustainability, and cost efficiency.
          </p>
        </div>
      </section>

      {/* BESS Basics */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>BESS BASICS</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
              The <span className="grad-text">Technology</span> Behind It
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="basics-grid">
            <div>
              <p style={{ color: "#7c92b3", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                BESS is crucial for reducing CO₂ emissions. The system connects in parallel to the electrical network so that seamless power is transferred to the batteries and vice versa.
              </p>
              <p style={{ color: "#7c92b3", fontSize: 16, lineHeight: 1.8 }}>
                Modern Lithium-ion BESS units operate at efficiency levels above 98%, with intelligent Battery Management Systems (BMS) ensuring longevity, safety, and optimal performance.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Technology", value: "Lithium-Ion" },
                { label: "Switchover", value: "5 ms" },
                { label: "Efficiency", value: ">98.5%" },
                { label: "Connection", value: "Parallel" },
                { label: "Monitoring", value: "24 / 7 EMS" },
                { label: "Scalability", value: "Modular" },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.1)", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>{value}</div>
                  <div style={{ fontSize: 12, color: "#7c92b3", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operating Scenarios */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>OPERATING MODES</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
              4 Scenarios, One{" "}
              <span className="grad-text">Intelligent System</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {scenarios.map(({ id, icon, title, color, desc, flow, highlights }, i) => (
              <div key={id} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: `1px solid ${color}20`,
                borderRadius: 20,
                padding: "36px 40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 32,
                alignItems: "center",
                borderLeft: `4px solid ${color}`,
              }}>
                {/* Left: scenario info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ fontSize: 32 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color, letterSpacing: 2, fontWeight: 700 }}>SCENARIO {i + 1}</div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e8f0fe", lineHeight: 1.3 }}>{title}</h3>
                    </div>
                  </div>
                  <p style={{ color: "#7c92b3", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                </div>

                {/* Center: flow diagram */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#7c92b3", letterSpacing: 2, marginBottom: 16 }}>POWER FLOW</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", alignItems: "center" }}>
                    {flow.map((step, j) => (
                      <span key={j} style={{
                        fontSize: ["→", "+"].includes(step) ? 16 : 12,
                        color: ["→", "+"].includes(step) ? color : "#e8f0fe",
                        fontWeight: ["→", "+"].includes(step) ? 400 : 700,
                        background: ["→", "+"].includes(step) ? "transparent" : `${color}10`,
                        border: ["→", "+"].includes(step) ? "none" : `1px solid ${color}20`,
                        padding: ["→", "+"].includes(step) ? "0 2px" : "4px 10px",
                        borderRadius: 6,
                        fontFamily: ["→", "+"].includes(step) ? "inherit" : "'Space Mono', monospace",
                      }}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: highlights */}
                <div>
                  <div style={{ fontSize: 11, color: "#7c92b3", letterSpacing: 2, marginBottom: 12 }}>KEY OUTCOMES</div>
                  {highlights.map(h => (
                    <div key={h} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "#a0b4c8" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>BOTTOM LINE</div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5, marginBottom: 48 }}>
            Benefits of <span className="grad-text">BESS Deployment</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {benefits.map(({ icon, label }) => (
              <div key={label} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: "1px solid rgba(0,212,170,0.08)",
                borderRadius: 14, padding: "24px 20px", textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#e8f0fe", lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 900px) {
          .basics-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .card-hover[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
