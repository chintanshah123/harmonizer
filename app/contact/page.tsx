"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, Globe, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    name: "HARMONIZER INDIA Pvt. Ltd.",
    city: "Bangalore, India",
    focus: "Headquarters & BESS Division",
    icon: "🇮🇳",
    color: "#00d4aa",
  },
  {
    name: "HARMONIZER Industries Pvt. Ltd.",
    city: "Nashik, India",
    focus: "Manufacturing & Industrial",
    icon: "🏭",
    color: "#0ea5e9",
  },
  {
    name: "HARMONIZER Scientific Research Pvt. Ltd.",
    city: "Bangalore, India",
    focus: "R&D & Patents",
    icon: "🔬",
    color: "#a78bfa",
  },
  {
    name: "International Operations",
    city: "UK & Canada",
    focus: "Global Partnerships",
    icon: "🌍",
    color: "#f59e0b",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", capacity: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "14px 16px",
    color: "#e8f0fe",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'DM Sans', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    color: "#7c92b3",
    letterSpacing: 1,
    fontWeight: 600,
    marginBottom: 8,
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 24px 80px" }} className="grid-bg">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>GET IN TOUCH</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, maxWidth: 640, marginBottom: 28 }}>
            Let's Talk{" "}
            <span className="grad-text">Energy Storage</span>
          </h1>
          <p style={{ color: "#7c92b3", fontSize: 18, lineHeight: 1.8, maxWidth: 560 }}>
            Tell us about your energy challenge. Our BESS specialists will design a custom solution and walk you through the ROI within 48 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56 }} className="contact-grid">
            {/* Left: info */}
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e8f0fe", marginBottom: 8 }}>Our Offices</h2>
              <p style={{ color: "#7c92b3", fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
                With presence across India and international markets, we're close to your operations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {offices.map(({ name, city, focus, icon, color }) => (
                  <div key={name} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${color}15`,
                    borderRadius: 14,
                    padding: "20px 22px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    borderLeft: `3px solid ${color}`,
                  }}>
                    <div style={{ fontSize: 24, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e8f0fe", marginBottom: 4 }}>{name}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                        <MapPin size={12} color="#7c92b3" />
                        <span style={{ fontSize: 12, color: "#7c92b3" }}>{city}</span>
                      </div>
                      <span style={{ fontSize: 11, color, background: `${color}10`, padding: "2px 8px", borderRadius: 100 }}>{focus}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div style={{ background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.1)", borderRadius: 14, padding: "24px" }}>
                <div style={{ fontSize: 12, color: "#7c92b3", letterSpacing: 2, marginBottom: 16 }}>CERTIFICATIONS</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["ISO 9001", "ISO 14001", "ISO 45001"].map(cert => (
                    <div key={cert} style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", borderRadius: 8, padding: "8px 16px" }}>
                      <span style={{ fontSize: 13, color: "#00d4aa", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div style={{
                  background: "linear-gradient(135deg, #080e1e, #0d1628)",
                  border: "1px solid rgba(0,212,170,0.3)",
                  borderRadius: 24,
                  padding: "80px 48px",
                  textAlign: "center",
                }}>
                  <CheckCircle size={64} color="#00d4aa" style={{ marginBottom: 24 }} />
                  <h3 style={{ fontSize: 28, fontWeight: 700, color: "#e8f0fe", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "#7c92b3", fontSize: 16, lineHeight: 1.7 }}>
                    Thank you for reaching out. A Harmonizer BESS specialist will contact you within 48 hours.
                  </p>
                </div>
              ) : (
                <div style={{
                  background: "linear-gradient(135deg, #080e1e, #0d1628)",
                  border: "1px solid rgba(0,212,170,0.15)",
                  borderRadius: 24,
                  padding: "48px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #00d4aa, #0ea5e9)" }} />
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e8f0fe", marginBottom: 6 }}>Request a Consultation</h3>
                  <p style={{ color: "#7c92b3", fontSize: 14, marginBottom: 36 }}>We'll respond within 48 hours with a custom energy storage proposal.</p>

                  <form onSubmit={submit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>YOUR NAME *</label>
                        <input name="name" value={form.name} onChange={handle} required placeholder="Ravi Sharma" style={inputStyle}
                          onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                          onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                      </div>
                      <div>
                        <label style={labelStyle}>COMPANY *</label>
                        <input name="company" value={form.company} onChange={handle} required placeholder="Acme Industries" style={inputStyle}
                          onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                          onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                      </div>
                      <div>
                        <label style={labelStyle}>EMAIL *</label>
                        <input name="email" type="email" value={form.email} onChange={handle} required placeholder="ravi@acme.com" style={inputStyle}
                          onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                          onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                      </div>
                      <div>
                        <label style={labelStyle}>PHONE</label>
                        <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98XXX XXXXX" style={inputStyle}
                          onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                          onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>REQUIRED CAPACITY</label>
                      <select name="capacity" value={form.capacity} onChange={handle} style={{ ...inputStyle, appearance: "none" }}
                        onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
                        <option value="">Select capacity range</option>
                        <option value="small">10–100 kWh (Commercial)</option>
                        <option value="medium">100 kWh – 500 kWh (Mid-scale)</option>
                        <option value="large">500 kWh – 2 MWh (Industrial)</option>
                        <option value="xlarge">2 MWh+ (Utility / Large Industrial)</option>
                        <option value="unsure">Not sure – need assessment</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: 32 }}>
                      <label style={labelStyle}>YOUR ENERGY CHALLENGE</label>
                      <textarea name="message" value={form.message} onChange={handle} rows={5}
                        placeholder="Describe your current power issues, solar setup, DG dependency, or sustainability goals..."
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                        onFocus={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                    </div>

                    <button type="submit" style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
                      color: "#03060f",
                      border: "none",
                      borderRadius: 10,
                      padding: "16px",
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,212,170,0.4)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
