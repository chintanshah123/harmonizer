import CTASection from "@/components/CTASection";

const featuredProject = {
  title: "1.2 MWh BESS Installation",
  client: "Western Metals Industries (WMI)",
  location: "Hadapsar & Bhandgaon, Pune, India",
  industry: "Aluminium Slug Manufacturing",
  capacity: "1.2 MWh",
  power: "600 kW",
  year: "2024",
  highlights: [
    "Largest single BESS installation in the aluminium manufacturing sector",
    "5ms seamless grid changeover with zero production loss",
    "Integrated with existing solar PV and DG infrastructure",
    "Peak shaving reduces demand charges significantly",
    "Full EMS with remote monitoring dashboard",
    "Net Zero contribution aligned with WMI's sustainability roadmap",
  ],
};

const indiaClients = [
  "HP", "Amazon", "Hindustan Unilever (HUL)", "Godrej & Boyce", "Jotun Paints",
  "Western Metals Industries", "Billforge Pvt Ltd", "Nekkanti Sea Foods",
  "Nucleus Office Parks", "SAP India", "L&T", "HNI India",
];

const uaeClients = [
  "Multiple industrial clients", "Commercial complexes", "Government facilities",
  "Manufacturing plants", "Logistics hubs",
];

const verticals = [
  { label: "Manufacturing", icon: "🏭", count: "15+" },
  { label: "Commercial", icon: "🏢", count: "12+" },
  { label: "Food & Beverage", icon: "🍃", count: "6+" },
  { label: "IT / Data Centres", icon: "💻", count: "8+" },
  { label: "Government", icon: "🏛️", count: "4+" },
  { label: "Real Estate", icon: "🏗️", count: "5+" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 24px 80px" }} className="grid-bg">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>TRACK RECORD</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, maxWidth: 680, marginBottom: 28 }}>
            Projects We've{" "}
            <span className="grad-text">Powered</span>
          </h1>
          <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.8, maxWidth: 600 }}>
            From aluminium plants to data centres — Harmonizer has delivered proven BESS and power quality solutions across India, UAE, and beyond.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#f59e0b", letterSpacing: 3, fontWeight: 600, marginBottom: 32 }}>★ FEATURED BESS PROJECT</div>
          <div style={{
            background: "linear-gradient(135deg, #080e1e, #0b1525)",
            border: "1px solid rgba(0,212,170,0.25)",
            borderRadius: 24,
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Top bar */}
            <div style={{ height: 4, background: "linear-gradient(90deg, #00d4aa, #0ea5e9, #a78bfa)" }} />

            <div style={{ padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} className="featured-grid">
              {/* Left */}
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#e8f0fe", lineHeight: 1.2, marginBottom: 12 }}>
                  {featuredProject.title}
                </h2>
                <div style={{ fontSize: 16, color: "#00d4aa", fontWeight: 600, marginBottom: 24 }}>
                  {featuredProject.client}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                  {[
                    { label: "Location", value: featuredProject.location },
                    { label: "Industry", value: featuredProject.industry },
                    { label: "Capacity", value: featuredProject.capacity },
                    { label: "Power", value: featuredProject.power },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.1)", borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ fontSize: 11, color: "#7c92b3", marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e8f0fe" }}>{value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ textAlign: "center", flex: 1, background: "rgba(0,212,170,0.05)", border: "1px solid rgba(0,212,170,0.15)", borderRadius: 12, padding: "20px 16px" }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>1.2</div>
                    <div style={{ fontSize: 12, color: "#7c92b3" }}>MWh Capacity</div>
                  </div>
                  <div style={{ textAlign: "center", flex: 1, background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 12, padding: "20px 16px" }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: "#0ea5e9", fontFamily: "'Space Mono', monospace" }}>600</div>
                    <div style={{ fontSize: 12, color: "#7c92b3" }}>kW Output</div>
                  </div>
                  <div style={{ textAlign: "center", flex: 1, background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 12, padding: "20px 16px" }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: "#f59e0b", fontFamily: "'Space Mono', monospace" }}>5</div>
                    <div style={{ fontSize: 12, color: "#7c92b3" }}>ms Switchover</div>
                  </div>
                </div>
              </div>

              {/* Right: highlights */}
              <div>
                <div style={{ fontSize: 12, color: "#7c92b3", letterSpacing: 2, marginBottom: 20 }}>PROJECT HIGHLIGHTS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {featuredProject.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 10 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0,212,170,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#00d4aa" }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 14, color: "#a0b4c8", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: -0.5 }}>
              Sectors <span className="grad-text">We Serve</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
            {verticals.map(({ label, icon, count }) => (
              <div key={label} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: "1px solid rgba(0,212,170,0.08)",
                borderRadius: 14, padding: "24px 16px", textAlign: "center",
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>{count}</div>
                <div style={{ fontSize: 13, color: "#7c92b3", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client lists */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="client-grid">
            {/* India */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 24 }}>🇮🇳</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e8f0fe" }}>India Projects</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {indiaClients.map(client => (
                  <div key={client} style={{ background: "rgba(0,212,170,0.03)", border: "1px solid rgba(0,212,170,0.08)", borderRadius: 8, padding: "12px 16px" }}>
                    <span style={{ fontSize: 13, color: "#7c92b3" }}>{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 24 }}>🇦🇪</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e8f0fe" }}>UAE Projects</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {uaeClients.map(client => (
                  <div key={client} style={{ background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)", borderRadius: 8, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ea5e9" }} />
                    <span style={{ fontSize: 13, color: "#7c92b3" }}>{client}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.12)", borderRadius: 10, padding: "20px" }}>
                  <p style={{ fontSize: 14, color: "#7c92b3", lineHeight: 1.6 }}>
                    Harmonizer has a strong presence in the UAE market with multiple completed installations across commercial and industrial sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .client-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
