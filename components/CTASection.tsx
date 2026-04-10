"use client";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #080e1e 0%, #0a1525 50%, #060d1a 100%)",
          border: "1px solid rgba(0,212,170,0.2)",
          borderRadius: 24,
          padding: "72px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Top gradient bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #00d4aa, #0ea5e9, #a78bfa)" }} />

          {/* Background orbs */}
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(0,212,170,0.06), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: 350, height: 350, background: "radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 12, color: "#00d4aa", letterSpacing: 3, fontWeight: 600, marginBottom: 20 }}>READY TO GET STARTED?</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: -0.5 }}>
              Let's Build Your{" "}
              <span className="grad-text">Energy Future</span>
            </h2>
            <p style={{ color: "#7c92b3", fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
              Talk to our BESS experts. We'll assess your energy profile and design a customised storage solution for your facility.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
                color: "#03060f", padding: "16px 36px", borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,212,170,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                Request Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(0,212,170,0.3)", color: "#e8f0fe",
                padding: "16px 36px", borderRadius: 10, fontWeight: 600,
                fontSize: 15, textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00d4aa"; (e.currentTarget as HTMLElement).style.color = "#00d4aa"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; (e.currentTarget as HTMLElement).style.color = "#e8f0fe"; }}>
                View Projects
              </Link>
            </div>

            <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,212,170,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={16} color="#00d4aa" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#7c92b3" }}>Email Us</div>
                  <div style={{ fontSize: 13, color: "#e8f0fe", fontWeight: 600 }}>info@harmonizer.in</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(14,165,233,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={16} color="#0ea5e9" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#7c92b3" }}>Call Us</div>
                  <div style={{ fontSize: 13, color: "#e8f0fe", fontWeight: 600 }}>+91 80 XXXX XXXX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
