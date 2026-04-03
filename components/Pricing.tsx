"use client";
import { motion } from "framer-motion";
import MotifBackground from "./MotifBackground";

const PHONE = "256751579909";

const packages = [
  {
    id: "start",
    name: "Start Package",
    price: "UGX 3M",
    highlight: false,
    badge: null,
    features: [
      "1 Photographer",
      "1 Light Assistant",
      "2 Videographers",
      "1 A3 Photobook (200 photos)",
      "1 Flash Disk",
      "2 A3 Boards",
      "20 Soft Copies",
    ],
    msg: "Hello%20I%20want%20to%20claim%20the%20Start%20Package%20(UGX%203M)",
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "UGX 8M",
    highlight: true,
    badge: "🔥 Most Complete",
    features: [
      "2 Photographers",
      "1 Light Assistant",
      "2 Videographers",
      "1 Drone Camera",
      "1 Live Camera",
      "Pre-Wedding Shoot",
      "1 A3 Photobook (200 photos)",
      "30 Soft Copies",
      "1 Hard Drive — All Footage (500GB)",
    ],
    msg: "Hello%20I%20want%20to%20claim%20the%20Premium%20Package%20(UGX%208M)",
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "UGX 5M",
    highlight: false,
    badge: "⭐ Popular",
    features: [
      "1 Photographer",
      "1 Light Assistant",
      "2 Videographers",
      "1 Drone Camera",
      "1 A3 Photobook (260 photos)",
      "1 Flash Disk (Edited Video)",
      "3 A3 Boards",
    ],
    msg: "Hello%20I%20want%20to%20claim%20the%20Standard%20Package%20(UGX%205M)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        background: "#080808",
        padding: "100px 24px",
        overflow: "hidden",
      }}
    >
      <MotifBackground opacity={0.04} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
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
            2026 Wedding Price List
          </p>
          <h2 className="section-title">OUR PACKAGES</h2>
          <div className="section-divider-center" />
          <p style={{ color: "#CCCCCC", maxWidth: 480, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Transparent pricing. No surprises. Choose the package that fits your day and book directly on WhatsApp.
          </p>
        </motion.div>

        {/* Cards: Premium in center */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              id={`pricing-${pkg.id}`}
              variants={cardVariants}
              whileHover={!pkg.highlight ? { y: -8 } : {}}
              style={{
                background: pkg.highlight ? "#FF6A00" : "#0f0f0f",
                border: pkg.highlight
                  ? "2px solid #FF6A00"
                  : "1px solid #1a1a1a",
                borderRadius: 12,
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: pkg.highlight
                  ? "0 0 50px rgba(255,106,0,0.35), 0 20px 40px rgba(0,0,0,0.5)"
                  : "0 4px 20px rgba(0,0,0,0.3)",
                transform: pkg.highlight ? "scale(1.04)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Motif texture for non-highlighted cards */}
              {!pkg.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    backgroundImage: "url('/images/brand/motif.jpg')",
                    backgroundSize: "cover",
                    opacity: 0.04,
                    borderRadius: "0 12px 0 0",
                  }}
                />
              )}

              {/* Badge */}
              {pkg.badge && (
                <div
                  style={{
                    display: "inline-block",
                    background: pkg.highlight ? "rgba(0,0,0,0.2)" : "rgba(255,106,0,0.15)",
                    border: pkg.highlight
                      ? "1px solid rgba(0,0,0,0.3)"
                      : "1px solid rgba(255,106,0,0.3)",
                    borderRadius: 4,
                    padding: "4px 12px",
                    marginBottom: 16,
                    fontSize: 11,
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: pkg.highlight ? "#000" : "#FF6A00",
                    textTransform: "uppercase",
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              {/* Package name */}
              <h3
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: pkg.highlight ? "#000" : "#FFFFFF",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div
                style={{
                  marginBottom: 28,
                  padding: "12px 16px",
                  background: pkg.highlight ? "rgba(0,0,0,0.15)" : "#1a1a1a",
                  borderRadius: 6,
                  display: "inline-block",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "2.5rem",
                    color: pkg.highlight ? "#000" : "#FF6A00",
                    letterSpacing: "0.05em",
                  }}
                >
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", marginBottom: 32 }}>
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      padding: "8px 0",
                      borderBottom: pkg.highlight
                        ? "1px solid rgba(0,0,0,0.1)"
                        : "1px solid #1a1a1a",
                      color: pkg.highlight ? "#111" : "#CCCCCC",
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        color: pkg.highlight ? "#000" : "#FF6A00",
                        fontWeight: 700,
                        fontSize: "1rem",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/${PHONE}?text=${pkg.msg}`}
                target="_blank"
                rel="noopener noreferrer"
                id={`claim-${pkg.id}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 24px",
                  background: pkg.highlight ? "#000" : "#FF6A00",
                  color: pkg.highlight ? "#FF6A00" : "#000",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "all 0.3s ease",
                  border: pkg.highlight ? "2px solid #FF6A00" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                  if (!pkg.highlight) {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 20px rgba(255,106,0,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                👉 CLAIM THIS PACKAGE
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: 48,
            color: "#666",
            fontSize: "0.85rem",
          }}
        >
          Pricing applies to wedding coverage. For other events, send us a message and we&apos;ll tailor a quote.{" "}
          <a
            href={`https://wa.me/${PHONE}?text=Hello%20I%20want%20a%20custom%20quote`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF6A00", textDecoration: "underline" }}
          >
            Get a custom quote →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
