"use client";
import Image from "next/image";

const quickLinks = [
  { label: "What We Do", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { name: "Instagram", href: "https://instagram.com/ogumedia", label: "IG" },
  { name: "TikTok", href: "https://tiktok.com/@ogumedia", label: "TK" },
  { name: "X", href: "https://x.com/ogumedia", label: "X" },
];

export default function Footer() {
  return (
    <footer
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
            <p style={{ color: "#555", fontSize: "0.875rem", marginBottom: 8 }}>
              📞 0751579909 / 0786704521
            </p>
            <p style={{ color: "#555", fontSize: "0.875rem", marginBottom: 16 }}>
              ✉️ ogugrup@gmail.com
            </p>
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
                    width: 36,
                    height: 36,
                    border: "1px solid #222",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#555",
                    fontSize: "0.7rem",
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#FF6A00";
                    el.style.color = "#FF6A00";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#222";
                    el.style.color = "#555";
                  }}
                >
                  {s.label}
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
            Built with ❤️ for storytelling
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
