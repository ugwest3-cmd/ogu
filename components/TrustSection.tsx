"use client";
import { motion } from "framer-motion";

const clients = [
  { name: "The Jovoc League", icon: "⚽" },
  { name: "The Olive School", icon: "🏫" },
  { name: "Clean Plug", icon: "🧹" },
  { name: "Forest Park Buloba", icon: "🌳" },
];

// Duplicate for infinite marquee
const allClients = [...clients, ...clients, ...clients];

export default function TrustSection() {
  return (
    <section
      id="clients"
      style={{
        background: "#050505",
        padding: "80px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", padding: "0 24px", marginBottom: 48 }}
      >
        <p
          style={{
            color: "#444",
            fontFamily: "Oswald, sans-serif",
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Our Clients
        </p>
        <h2
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}
        >
          TRUSTED BY
        </h2>
        {/* Thin orange line */}
        <div
          style={{
            width: 40,
            height: 2,
            background: "#FF6A00",
            margin: "12px auto 0",
          }}
        />
      </motion.div>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Gradient fades on edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #050505, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #050505, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: 0,
            width: "max-content",
          }}
        >
          {allClients.map((client, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "20px 48px",
                borderRight: "1px solid #1a1a1a",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{client.icon}</span>
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#444",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
