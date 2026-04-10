"use client";
const clients = [
  "HP", "Amazon", "HUL", "Godrej", "Jotun Paints", "Western Metals",
  "L&T", "WSP Global", "SAP", "Billforge", "Nekkanti Sea Foods", "Nucleus Office Parks",
];

const approvals = ["ABETT Consultants", "L&T", "WSP Global", "ANA Design Studio"];

export default function ClientLogos() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>TRUSTED BY INDUSTRY LEADERS</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: -0.5 }}>
            Projects Across{" "}
            <span className="grad-text">India, UAE & Beyond</span>
          </h2>
        </div>

        {/* Client grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48 }}>
          {clients.map(client => (
            <div key={client} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "20px 16px",
              textAlign: "center",
              transition: "all 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.25)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}>
              <span style={{ color: "#7c92b3", fontSize: 13, fontWeight: 500 }}>{client}</span>
            </div>
          ))}
        </div>

        {/* Approvals */}
        <div style={{
          background: "linear-gradient(135deg, rgba(0,212,170,0.05), rgba(14,165,233,0.05))",
          border: "1px solid rgba(0,212,170,0.1)",
          borderRadius: 16,
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "0 0 auto" }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 2, marginBottom: 4 }}>CONSULTANT APPROVED</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#e8f0fe" }}>Trusted Partners</div>
          </div>
          <div style={{ flex: 1, minWidth: 200, height: 1, background: "rgba(0,212,170,0.1)" }} />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {approvals.map(a => (
              <span key={a} style={{
                fontSize: 13,
                color: "#0ea5e9",
                background: "rgba(14,165,233,0.08)",
                border: "1px solid rgba(14,165,233,0.2)",
                padding: "6px 16px",
                borderRadius: 100,
              }}>{a}</span>
            ))}
          </div>
        </div>

        {/* UAE note */}
        <div style={{ display: "flex", gap: 12, marginTop: 24, padding: "16px 20px", background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.1)", borderRadius: 10 }}>
          <span style={{ fontSize: 16 }}>🌍</span>
          <span style={{ color: "#7c92b3", fontSize: 13 }}>
            <strong style={{ color: "#f59e0b" }}>International Reach:</strong> Harmonizer has successfully delivered projects across UAE alongside a strong presence throughout India.
          </span>
        </div>
      </div>
    </section>
  );
}
