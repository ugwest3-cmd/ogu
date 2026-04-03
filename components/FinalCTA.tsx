"use client";
import { motion } from "framer-motion";
import MotifBackground from "./MotifBackground";

const PHONE = "256751579909";

const contacts = [
  {
    icon: "📞",
    label: "Call Us",
    value: "0751579909 / 0786704521",
    href: "tel:+256751579909",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "ogugrup@gmail.com",
    href: "mailto:ogugrup@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Kampala, Uganda",
    href: null,
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/ogumedia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@ogumedia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/ogumedia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "#050505",
        padding: "100px 24px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Full tribal motif background */}
      <MotifBackground opacity={0.14} animated />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(255,106,0,0.08) 0%, rgba(5,5,5,0.6) 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #FF6A00, transparent)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: "#FF6A00",
            fontFamily: "Oswald, sans-serif",
            fontSize: 13,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Ready to Create Something Cinematic?
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: 4,
          }}
        >
          BOOK YOUR
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "#FF6A00",
            marginBottom: 48,
          }}
        >
          SESSION TODAY
        </motion.h2>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {contacts.map((contact) => (
            <div
              key={contact.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,106,0,0.2)",
                borderRadius: 8,
                padding: "24px 20px",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{contact.icon}</div>
              <p
                style={{
                  color: "#666",
                  fontSize: 11,
                  fontFamily: "Oswald, sans-serif",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#FF6A00")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                  }
                >
                  {contact.value}
                </a>
              ) : (
                <span style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>{contact.value}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,106,0,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#CCCCCC",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FF6A00";
                el.style.color = "#000";
                el.style.borderColor = "#FF6A00";
                el.style.transform = "scale(1.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.color = "#CCCCCC";
                el.style.borderColor = "rgba(255,106,0,0.25)";
                el.style.transform = "scale(1)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          href={`https://wa.me/${PHONE}?text=Hello%20I%20want%20to%20book%20a%20session`}
          target="_blank"
          rel="noopener noreferrer"
          id="final-cta-whatsapp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "#25D366",
            color: "#fff",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "18px 52px",
            borderRadius: 4,
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,211,102,0.4)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.054 23.27a.5.5 0 00.623.641l5.558-1.791A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.083-1.415l-.363-.217-3.771 1.215 1.11-3.679-.236-.376A9.818 9.818 0 1112 21.818z" />
          </svg>
          WhatsApp Now
        </motion.a>
      </div>
    </section>
  );
}
