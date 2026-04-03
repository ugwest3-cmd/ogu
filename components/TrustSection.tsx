"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "The Jovoc League", logo: "/images/clients/jovoc_legea_logo.png" },
  { name: "The Olive School", logo: "/images/clients/theoliveschool_logo.png" },
  { name: "Clean Plug", logo: "/images/clients/clean_plug_logo.png" },
  { name: "Forest Park Buloba", logo: "/images/clients/forest_park_logo.png" },
];

// Duplicate for infinite marquee
const allClients = [...clients, ...clients, ...clients, ...clients];

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
            width: 150,
            background: "linear-gradient(to right, #050505 0%, transparent 100%)",
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
            width: 150,
            background: "linear-gradient(to left, #050505 0%, transparent 100%)",
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
                gap: 16,
                padding: "30px 60px",
                borderRight: "1px solid #111",
                whiteSpace: "nowrap",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,106,0,0.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ position: "relative", width: 40, height: 40, overflow: "hidden" }}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{ 
                    objectFit: "contain", 
                    filter: "grayscale(1) brightness(0.8)",
                    opacity: 0.6,
                    transition: "all 0.4s ease" 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0) brightness(1)";
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(1) brightness(0.8)";
                    e.currentTarget.style.opacity = "0.6";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#333",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
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
