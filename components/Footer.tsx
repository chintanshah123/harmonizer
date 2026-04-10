"use client";
import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#04080f", borderTop: "1px solid rgba(0,212,170,0.1)", paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00d4aa, #0ea5e9)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={20} color="#03060f" fill="#03060f" />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 16, color: "#e8f0fe" }}>HARMONIZER</div>
                <div style={{ fontSize: 9, color: "#00d4aa", letterSpacing: 3 }}>BESS · ENERGY</div>
              </div>
            </div>
            <p style={{ color: "#7c92b3", fontSize: 13, lineHeight: 1.7, marginBottom: 16, maxWidth: 240 }}>
              Knowledge-driven energy solutions enabling sustainability, productivity & reliability of electrical networks.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["ISO 9001", "ISO 14001", "ISO 45001"].map(cert => (
                <span key={cert} style={{ fontSize: 10, color: "#00d4aa", border: "1px solid rgba(0,212,170,0.3)", padding: "3px 8px", borderRadius: 4, letterSpacing: 0.5 }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#e8f0fe", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: 1 }}>QUICK LINKS</h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/bess", label: "How BESS Works" },
              { href: "/products", label: "Products" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#7c92b3", fontSize: 13, marginBottom: 10, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00d4aa")}
                onMouseLeave={e => (e.currentTarget.style.color = "#7c92b3")}>
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: "#e8f0fe", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: 1 }}>SOLUTIONS</h4>
            {["Commercial BESS", "Industrial BESS", "Air Cooled Systems", "Liquid Cooled Systems", "High Voltage Battery Systems", "EMS & PCS", "Vertical Wind Turbine"].map(s => (
              <div key={s} style={{ color: "#7c92b3", fontSize: 13, marginBottom: 10 }}>→ {s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#e8f0fe", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: 1 }}>CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <MapPin size={14} color="#00d4aa" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#7c92b3", fontSize: 13, lineHeight: 1.6 }}>HARMONIZER INDIA Pvt. Ltd., Bangalore, India</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <MapPin size={14} color="#00d4aa" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#7c92b3", fontSize: 13, lineHeight: 1.6 }}>HARMONIZER Industries Pvt. Ltd., Nashik, India</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Globe size={14} color="#00d4aa" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#7c92b3", fontSize: 13 }}>UK & Canada Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)", marginBottom: 24 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#7c92b3", fontSize: 12 }}>
            © 2025 Harmonizer Group. All rights reserved.
          </p>
          <p style={{ color: "#7c92b3", fontSize: 12 }}>
            Empowering a <span style={{ color: "#00d4aa" }}>Net Zero</span> Future
          </p>
        </div>
      </div>
    </footer>
  );
}
