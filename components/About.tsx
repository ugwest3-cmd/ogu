"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#080808",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative left orange bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          width: 4,
          height: "60%",
          background: "linear-gradient(to bottom, transparent, #FF6A00, transparent)",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: stats / visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative" }}
        >
          {/* Background motif square */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              backgroundImage: "url('/images/brand/motif.jpg')",
              backgroundSize: "cover",
              opacity: 0.05,
              borderRadius: 12,
            }}
          />

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            {[
              { num: "500+", label: "Events Covered" },
              { num: "4+", label: "Years of Excellence" },
              { num: "8", label: "Service Categories" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1a1a1a",
                  padding: "36px 24px",
                  textAlign: "center",
                  borderRadius: i === 0 ? "12px 0 0 0" : i === 1 ? "0 12px 0 0" : i === 2 ? "0 0 0 12px" : "0 0 12px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "3rem",
                    color: "#FF6A00",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    color: "#CCCCCC",
                    fontSize: "0.8rem",
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              color: "#FF6A00",
              fontFamily: "Oswald, sans-serif",
              fontSize: 13,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            About Us
          </p>
          <h2 className="section-title" style={{ marginBottom: 4 }}>
            WHO WE
          </h2>
          <h2 className="section-title" style={{ color: "#FF6A00", marginBottom: 24 }}>
            ARE
          </h2>

          <p
            style={{
              color: "#CCCCCC",
              lineHeight: 1.85,
              marginBottom: 20,
              fontSize: "0.95rem",
            }}
          >
            <strong style={{ color: "#FF6A00" }}>OGU MEDIA</strong> is a creative visual production
            company specializing in photography, videography, and documentary storytelling.
          </p>
          <p
            style={{
              color: "#CCCCCC",
              lineHeight: 1.85,
              marginBottom: 20,
              fontSize: "0.95rem",
            }}
          >
            We capture authentic moments and transform them into powerful visual experiences that
            connect brands and individuals with their audiences.
          </p>
          <p
            style={{
              color: "#CCCCCC",
              lineHeight: 1.85,
              marginBottom: 36,
              fontSize: "0.95rem",
            }}
          >
            With a focus on creativity, precision, and professionalism, we deliver content that is
            both <strong style={{ color: "#fff" }}>meaningful</strong> and{" "}
            <strong style={{ color: "#fff" }}>memorable</strong>.
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {[
              { name: "Instagram", handle: "@ogumedia", href: "https://instagram.com/ogumedia", icon: "📷" },
              { name: "TikTok", handle: "@ogumedia", href: "https://tiktok.com/@ogumedia", icon: "🎵" },
              { name: "X", handle: "@ogumedia", href: "https://x.com/ogumedia", icon: "✕" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#CCCCCC",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontFamily: "Oswald, sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF6A00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#CCCCCC")}
              >
                <span>{social.icon}</span>
                {social.handle}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
