import CTASection from "@/components/CTASection";

const products = [
  {
    id: "commercial",
    category: "Commercial BESS",
    subtitle: "Residences & Small Offices",
    icon: "🏠",
    color: "#f59e0b",
    desc: "Compact, intelligent BESS solution designed for residential complexes, small commercial offices, and light industrial use. Plug-and-play design with mobile monitoring.",
    specs: [
      { label: "Use Case", value: "Residence / Small Office" },
      { label: "Cooling", value: "Air Cooled" },
      { label: "Installation", value: "Plug & Play" },
      { label: "Monitoring", value: "App-based EMS" },
    ],
    features: ["Compact form factor", "Easy installation", "Real-time monitoring", "Automatic solar integration", "Grid backup mode"],
  },
  {
    id: "industrial",
    category: "Industrial BESS",
    subtitle: "Manufacturing Plants & Large Facilities",
    icon: "🏭",
    color: "#00d4aa",
    featured: true,
    desc: "Full-scale industrial BESS for factories, data centres, and large commercial facilities. Proven at 1.2 MWh / 600kW with WMI — India's aluminium slug manufacturing plant.",
    specs: [
      { label: "Capacity", value: "1.2 MWh+" },
      { label: "Power", value: "600 kW" },
      { label: "Switchover", value: "5 ms" },
      { label: "DG Integration", value: "Yes" },
    ],
    features: ["Scalable modular design", "Air & liquid cooling options", "DG set integration", "Peak demand management", "Industrial-grade BMS", "Remote diagnostics"],
  },
  {
    id: "hv",
    category: "60kW HV Battery System",
    subtitle: "High Voltage Applications",
    icon: "⚡",
    color: "#0ea5e9",
    desc: "High-voltage BESS for advanced grid applications and high-demand industrial environments requiring elevated operating voltages and robust power conversion.",
    specs: [
      { label: "Power", value: "60 kW" },
      { label: "Architecture", value: "High Voltage" },
      { label: "BMS", value: "Advanced" },
      { label: "Scalability", value: "Modular" },
    ],
    features: ["HV architecture", "Grid-forming capable", "Advanced cell balancing", "Redundant protection", "Remote monitoring"],
  },
];

const components = [
  {
    title: "Air Cooled System",
    icon: "💨",
    desc: "Efficient thermal management for moderate climate installations. Lower capex, easier maintenance.",
    color: "#0ea5e9",
  },
  {
    title: "Liquid Cooled System",
    icon: "💧",
    desc: "Superior thermal performance for high-density deployments and harsh environments. Extended cell life.",
    color: "#00d4aa",
  },
  {
    title: "Combiner Cabinet",
    icon: "🔌",
    desc: "Centralises battery string connections. Includes protection, monitoring, and disconnect capabilities.",
    color: "#a78bfa",
  },
  {
    title: "Power Conversion System (PCS)",
    icon: "🔄",
    desc: "Bidirectional inverter enabling AC-DC and DC-AC conversion with high efficiency and grid compliance.",
    color: "#f59e0b",
  },
  {
    title: "Energy Management System (EMS)",
    icon: "🧠",
    desc: "AI/ML-powered software that orchestrates charging, discharging, and grid interaction for optimal ROI.",
    color: "#34d399",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 24px 80px" }} className="grid-bg">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>PRODUCT RANGE</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, maxWidth: 660, marginBottom: 28 }}>
            BESS for Every{" "}
            <span className="grad-text">Scale & Application</span>
          </h1>
          <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.8, maxWidth: 580 }}>
            From residential systems to multi-megawatt industrial installations — Harmonizer delivers complete, certified, and proven energy storage solutions.
          </p>
        </div>
      </section>

      {/* Main products */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {products.map(({ id, category, subtitle, icon, color, desc, specs, features, featured }) => (
              <div key={id} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: `1px solid ${featured ? "rgba(0,212,170,0.3)" : `${color}15`}`,
                borderRadius: 24,
                padding: "48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 48,
                alignItems: "start",
                position: "relative",
                overflow: "hidden",
              }}>
                {featured && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #00d4aa, #0ea5e9)" }} />
                )}
                {featured && (
                  <div style={{ position: "absolute", top: 20, right: 24, fontSize: 11, color: "#00d4aa", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", padding: "4px 12px", borderRadius: 100, fontWeight: 700 }}>
                    ★ FEATURED
                  </div>
                )}

                {/* Info */}
                <div>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                  <div style={{ fontSize: 11, color, letterSpacing: 2, fontWeight: 600, marginBottom: 8 }}>{subtitle.toUpperCase()}</div>
                  <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e8f0fe", marginBottom: 16 }}>{category}</h2>
                  <p style={{ color: "#7c92b3", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                </div>

                {/* Specs */}
                <div>
                  <div style={{ fontSize: 11, color: "#7c92b3", letterSpacing: 2, marginBottom: 16 }}>SPECIFICATIONS</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {specs.map(({ label, value }) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <span style={{ fontSize: 13, color: "#7c92b3" }}>{label}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color, fontFamily: "'Space Mono', monospace" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div style={{ fontSize: 11, color: "#7c92b3", letterSpacing: 2, marginBottom: 16 }}>FEATURES</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "#a0b4c8" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>SYSTEM COMPONENTS</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
              Complete <span className="grad-text">BESS Ecosystem</span>
            </h2>
            <p style={{ color: "#7c92b3", fontSize: 16, maxWidth: 500, margin: "16px auto 0" }}>
              Every component engineered and integrated for seamless, certified operation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {components.map(({ title, icon, desc, color }) => (
              <div key={title} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: `1px solid ${color}15`,
                borderRadius: 16,
                padding: 28,
                borderTop: `3px solid ${color}`,
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e8f0fe", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#7c92b3", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 900px) {
          .card-hover[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
