import { Shield, Award, Globe, Users, Zap, FlaskConical } from "lucide-react";
import CTASection from "@/components/CTASection";

const entities = [
  { name: "HARMONIZER INDIA Pvt. Ltd.", location: "Bangalore, India", focus: "BESS & Energy Solutions", color: "#00d4aa" },
  { name: "HARMONIZER Industries Pvt. Ltd.", location: "Nashik, India", focus: "Power Quality & Industrial", color: "#0ea5e9" },
  { name: "HARMONIZER Scientific Research Pvt. Ltd.", location: "Bangalore, India", focus: "R&D & Innovation", color: "#a78bfa" },
  { name: "HARMONIZER Solution Industries", location: "UK & Canada", focus: "International Operations", color: "#f59e0b" },
];

const patents = [
  "AI/ML based Energy Management System",
  "Intelligent Electric Switchboard Panel",
  "Transformer Monitoring System with AI",
  "Motor Management Systems with AI",
  "Bus Duct / Raising Management System with IoT and AI",
  "IoT based Capacitor Thermal Management System",
  "IoT Enabled Early Detection of Train Movement for Railway Gate",
  "Detection of Dustbin Utilization through Bluetooth, WiFi or Internet",
  "Automatic Detection of Volume of LPG in Cylinder",
];

const verticals = [
  { icon: "⚡", title: "Power Solutions", desc: "BESS, UPS, power quality, and grid stabilisation systems" },
  { icon: "🔬", title: "Energy & Sustainability", desc: "Renewable integration, CO₂ monitoring, Net Zero advisory" },
  { icon: "🤖", title: "IIoT / Industry 4.0", desc: "Smart sensors, connected monitoring and automation" },
  { icon: "🧠", title: "AI / ML", desc: "Predictive analytics for energy and industrial equipment" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 24px 80px", position: "relative", overflow: "hidden" }} className="grid-bg">
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,170,0.06), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>ABOUT HARMONIZER</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, maxWidth: 700, marginBottom: 28 }}>
            Knowledge-Driven{" "}
            <span className="grad-text">Energy Solutions</span>
          </h1>
          <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.8, maxWidth: 620, marginBottom: 48 }}>
            Harmonizer Group was founded with a singular vision: to provide knowledge-driven business solutions that enable sustainability, productivity, and reliability in electrical networks across the globe.
          </p>

          {/* ISO badges */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["ISO 9001", "ISO 14001", "ISO 45001"].map(cert => (
              <div key={cert} style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.2)",
                borderRadius: 10, padding: "10px 20px",
              }}>
                <Shield size={16} color="#00d4aa" />
                <span style={{ fontSize: 14, color: "#00d4aa", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(0,212,170,0.05), rgba(14,165,233,0.05))",
            border: "1px solid rgba(0,212,170,0.15)",
            borderRadius: 20,
            padding: "56px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #00d4aa, #0ea5e9)" }} />
            <div style={{ fontSize: 48, marginBottom: 24 }}>🌟</div>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>OUR VISION</div>
            <blockquote style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontStyle: "italic", color: "#e8f0fe", lineHeight: 1.6, fontWeight: 300, maxWidth: 680, margin: "0 auto" }}>
              "To provide knowledge driven business solutions for our customers that will enable sustainability, productivity &amp; reliability of electrical network"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Group entities */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>GROUP STRUCTURE</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
              The <span className="grad-text">Harmonizer Group</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {entities.map(({ name, location, focus, color }) => (
              <div key={name} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: `1px solid ${color}25`,
                borderRadius: 16,
                padding: 28,
                borderLeft: `3px solid ${color}`,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Zap size={18} color={color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e8f0fe", marginBottom: 8, lineHeight: 1.4 }}>{name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <Globe size={12} color="#7c92b3" />
                  <span style={{ fontSize: 13, color: "#7c92b3" }}>{location}</span>
                </div>
                <span style={{ fontSize: 12, color, background: `${color}10`, border: `1px solid ${color}20`, padding: "3px 10px", borderRadius: 100 }}>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
              Business <span className="grad-text">Verticals</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {verticals.map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{
                background: "linear-gradient(135deg, #080e1e, #0d1628)",
                border: "1px solid rgba(0,212,170,0.08)",
                borderRadius: 16, padding: 32, textAlign: "center",
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e8f0fe", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: "#7c92b3", fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="patents-grid">
            <div>
              <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>INNOVATION</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: -0.5, marginBottom: 20, lineHeight: 1.1 }}>
                9 Patents by Team{" "}
                <span className="grad-text">Harmonizer</span>
              </h2>
              <p style={{ color: "#7c92b3", fontSize: 15, lineHeight: 1.7 }}>
                Our R&D team has developed patented technologies spanning AI, IoT, energy management, and smart infrastructure.
              </p>
              <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
                <div style={{ textAlign: "center", background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)", borderRadius: 12, padding: "20px 24px" }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "#00d4aa", fontFamily: "'Space Mono', monospace" }}>9+</div>
                  <div style={{ fontSize: 12, color: "#7c92b3", marginTop: 4 }}>Patents Filed</div>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {patents.map((patent, i) => (
                <div key={patent} style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "16px 20px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0,212,170,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#00d4aa", fontWeight: 700 }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 13, color: "#7c92b3", lineHeight: 1.5 }}>{patent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 768px) {
          .patents-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
