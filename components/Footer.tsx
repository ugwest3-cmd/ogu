"use client";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

// Social Icons SVGs
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.768l6.768 -6.768"/></svg>
);

const quickLinks = [
  { label: "What We Do", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { 
    name: "Instagram", 
    href: "https://instagram.com/ogumedia", 
    icon: <InstagramIcon /> 
  },
  { 
    name: "TikTok", 
    href: "https://tiktok.com/@ogumedia", 
    icon: <TikTokIcon /> 
  },
  { 
    name: "X", 
    href: "https://x.com/ogumedia", 
    icon: <XIcon /> 
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#030303",
        borderTop: "1px solid #111",
        padding: "48px 24px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 32,
            marginBottom: 40,
            paddingBottom: 40,
            borderBottom: "1px solid #111",
          }}
          className="footer-grid"
        >
          {/* Logo & tagline */}
          <div>
            <div style={{ position: "relative", width: 80, height: 40, marginBottom: 16 }}>
              <Image
                src="/images/brand/logo.png"
                alt="OGU Media"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p
              style={{
                color: "#555",
                fontSize: "0.8rem",
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                lineHeight: 1.8,
              }}
            >
              PHOTOS · VIDEOS · SOCIALS · BRANDING
            </p>
            <p style={{ color: "#444", fontSize: "0.8rem", marginTop: 12, lineHeight: 1.7 }}>
              Uganda&apos;s premier creative visual production company.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.85rem",
                color: "#FF6A00",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none" }}>
              {quickLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{
                      color: "#555",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#FF6A00")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#555")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.85rem",
                color: "#FF6A00",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Phone size={14} color="#FF6A00" />
              <p style={{ color: "#555", fontSize: "0.875rem" }}>
                0751579909 / 0786704521
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Mail size={14} color="#FF6A00" />
              <p style={{ color: "#555", fontSize: "0.875rem" }}>
                ogugrup@gmail.com
              </p>
            </div>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: 38,
                    height: 38,
                    border: "1px solid #222",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#555",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#FF6A00";
                    el.style.color = "#FF6A00";
                    el.style.background = "rgba(255,106,0,0.05)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#222";
                    el.style.color = "#555";
                    el.style.background = "transparent";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "#333", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} OGU Media. All Rights Reserved.
          </p>
          <p style={{ color: "#333", fontSize: "0.75rem" }}>
            Designed by{" "}
            <a 
              href="https://linktr.ee/linksdigitalagency" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#666",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6A00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              Links Digital Agency
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
