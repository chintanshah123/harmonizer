"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/bess", label: "How BESS Works" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(3, 6, 15, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 170, 0.1)"
          : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Zap size={20} color="#03060f" fill="#03060f" />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 17, color: "#e8f0fe", lineHeight: 1.1 }}>
                HARMONIZER
              </div>
              <div style={{ fontSize: 10, color: "#00d4aa", letterSpacing: 3, fontWeight: 500 }}>
                BESS · ENERGY
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" style={{
              background: "linear-gradient(135deg, #00d4aa, #0ea5e9)",
              color: "#03060f",
              padding: "9px 22px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: 0.5,
            }}>
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#e8f0fe", cursor: "pointer", display: "none" }}
            className="show-mobile"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(8, 14, 30, 0.98)",
            borderTop: "1px solid rgba(0, 212, 170, 0.1)",
            padding: "20px 0",
          }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "block", padding: "12px 0", color: "#7c92b3", fontSize: 15, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
