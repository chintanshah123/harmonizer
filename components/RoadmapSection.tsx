"use client";
const phases = [
  {
    phase: "Phase 0",
    title: "Company Formation",
    status: "completed",
    color: "#00d4aa",
    tasks: ["Company name registration", "Share holding pattern", "Company registration"],
  },
  {
    phase: "Phase 1",
    title: "BESS Product Launch",
    status: "completed",
    color: "#00d4aa",
    date: "Jan 2026",
    tasks: ["Product range definition", "Catalogue & data sheets", "Specifications & drawings", "User manuals & test certificates"],
  },
  {
    phase: "Phase 2",
    title: "Vertical Wind Turbine",
    status: "active",
    color: "#0ea5e9",
    date: "Mar 2026",
    tasks: ["Design & prototype", "Testing & software", "Cyber security", "Launch partner identification"],
  },
  {
    phase: "Phase 3",
    title: "Net Zero Solutions",
    status: "upcoming",
    color: "#a78bfa",
    date: "Mar 2027",
    tasks: ["Solution standardization", "BRICKS identification", "Integration of system bricks", "Private, MNC & Govt customers"],
  },
  {
    phase: "Phase 4",
    title: "CO₂ Monitoring & Revenue",
    status: "upcoming",
    color: "#f59e0b",
    date: "2028",
    tasks: ["Micro satellite launch", "CO₂ reduction monitoring", "Link CO₂ data to blockchain", "Green CO₂ expansion"],
  },
];

export default function RoadmapSection() {
  return (
    <section style={{ padding: "100px 24px", background: "rgba(0,0,0,0.2)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 800, background: "radial-gradient(circle, rgba(14,165,233,0.04), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 16 }}>VISION AHEAD</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: -0.5 }}>
            Product <span className="grad-text">Roadmap</span>
          </h2>
          <p style={{ color: "#7c92b3", fontSize: 16, maxWidth: 500, margin: "16px auto 0" }}>
            From BESS to Net Zero — our journey toward a fully sustainable energy future.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #00d4aa, #0ea5e9, #a78bfa, #f59e0b, transparent)", transform: "translateX(-50%)", opacity: 0.3 }} className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {phases.map(({ phase, title, status, color, date, tasks }, i) => (
              <div key={phase} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "start" }} className="timeline-row">
                {/* Left content (even) */}
                {i % 2 === 0 ? (
                  <div className="card-hover" style={{
                    background: "linear-gradient(135deg, #080e1e, #0d1628)",
                    border: `1px solid ${status === "completed" ? "rgba(0,212,170,0.25)" : status === "active" ? "rgba(14,165,233,0.25)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 16,
                    padding: 28,
                    justifySelf: "end",
                    maxWidth: 420,
                    width: "100%",
                  }}>
                    <PhaseCard phase={phase} title={title} status={status} color={color} date={date} tasks={tasks} />
                  </div>
                ) : <div />}

                {/* Center dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, position: "relative" }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: color,
                    border: `3px solid #03060f`,
                    boxShadow: `0 0 16px ${color}80`,
                    flexShrink: 0,
                    zIndex: 1,
                  }} />
                </div>

                {/* Right content (odd) */}
                {i % 2 !== 0 ? (
                  <div className="card-hover" style={{
                    background: "linear-gradient(135deg, #080e1e, #0d1628)",
                    border: `1px solid ${status === "completed" ? "rgba(0,212,170,0.25)" : status === "active" ? "rgba(14,165,233,0.25)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 16,
                    padding: 28,
                    maxWidth: 420,
                    width: "100%",
                  }}>
                    <PhaseCard phase={phase} title={title} status={status} color={color} date={date} tasks={tasks} />
                  </div>
                ) : <div />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 16px !important; }
          .timeline-row { grid-template-columns: auto 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PhaseCard({ phase, title, status, color, date, tasks }: {
  phase: string; title: string; status: string; color: string; date?: string; tasks: string[];
}) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 11, color, fontFamily: "'Space Mono', monospace", fontWeight: 700, letterSpacing: 1 }}>{phase}</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {date && <span style={{ fontSize: 11, color: "#7c92b3" }}>{date}</span>}
          <span style={{
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: 100,
            fontWeight: 700,
            letterSpacing: 0.5,
            background: status === "completed" ? "rgba(0,212,170,0.1)" : status === "active" ? "rgba(14,165,233,0.1)" : "rgba(255,255,255,0.05)",
            color: status === "completed" ? "#00d4aa" : status === "active" ? "#0ea5e9" : "#7c92b3",
            border: `1px solid ${status === "completed" ? "rgba(0,212,170,0.2)" : status === "active" ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.08)"}`,
          }}>
            {status === "completed" ? "✓ DONE" : status === "active" ? "⚡ ACTIVE" : "UPCOMING"}
          </span>
        </div>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8f0fe", marginBottom: 16 }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tasks.map(t => (
          <div key={t} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "#7c92b3" }}>{t}</span>
          </div>
        ))}
      </div>
    </>
  );
}
