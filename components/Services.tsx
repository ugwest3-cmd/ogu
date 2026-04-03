"use client";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Cake, 
  Mountain, 
  Briefcase, 
  Trophy, 
  Baby, 
  Clapperboard 
} from "lucide-react";

const PHONE = "256751579909";

const services = [
  {
    id: "weddings",
    icon: <Heart size={40} strokeWidth={1.5} />,
    title: "Weddings",
    desc: "Timeless coverage of your special day",
    msg: "Hello%20I%20want%20to%20book%20Wedding%20photography%2Fvideography",
  },
  {
    id: "kukyala",
    icon: <Users size={40} strokeWidth={1.5} />,
    title: "Introductions & Kukyala",
    desc: "Cultural ceremonies captured beautifully",
    msg: "Hello%20I%20want%20to%20book%20Kukyala%2FIntroduction%20coverage",
  },
  {
    id: "birthdays",
    icon: <Cake size={40} strokeWidth={1.5} />,
    title: "Birthdays",
    desc: "Milestone moments, cinematic memories",
    msg: "Hello%20I%20want%20to%20book%20Birthday%20photography",
  },
  {
    id: "outdoor",
    icon: <Mountain size={40} strokeWidth={1.5} />,
    title: "Outdoor Photoshoots",
    desc: "Stunning locations, breathtaking results",
    msg: "Hello%20I%20want%20to%20book%20an%20Outdoor%20Photoshoot",
  },
  {
    id: "corporate",
    icon: <Briefcase size={40} strokeWidth={1.5} />,
    title: "Corporate Events",
    desc: "Professional coverage for your brand",
    msg: "Hello%20I%20want%20to%20book%20Corporate%20Event%20coverage",
  },
  {
    id: "sports",
    icon: <Trophy size={40} strokeWidth={1.5} />,
    title: "Sports Events",
    desc: "High-energy action captured in motion",
    msg: "Hello%20I%20want%20to%20book%20Sports%20Event%20photography",
  },
  {
    id: "babybumps",
    icon: <Baby size={40} strokeWidth={1.5} />,
    title: "Baby Bumps",
    desc: "Celebrate new life with elegance",
    msg: "Hello%20I%20want%20to%20book%20a%20Baby%20Bump%20photoshoot",
  },
  {
    id: "branding",
    icon: <Clapperboard size={40} strokeWidth={1.5} />,
    title: "Documentaries & Branding",
    desc: "Tell your story, grow your brand",
    msg: "Hello%20I%20want%20to%20book%20Documentary%2FBranding%20services",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#050505",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint motif border strip at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #FF6A00, transparent)",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                Our Services
              </p>
              <h2 className="section-title">WHAT WE DO</h2>
              <div className="section-divider" />
            </motion.div>

        {/* Grid */}
        <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {services.map((service) => (
                <motion.a
                  key={service.id}
                  id={`service-${service.id}`}
                  href={`https://wa.me/${PHONE}?text=${service.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, borderColor: "#FF6A00" }}
                  style={{
                    display: "block",
                    background: "#0f0f0f",
                    border: "1px solid #1a1a1a",
                    borderRadius: 8,
                    padding: "32px 24px",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Hover glow effect */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at top left, rgba(255,106,0,0.06) 0%, transparent 60%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ color: "#FF6A00", marginBottom: 16 }}>{service.icon}</div>
                  <h3
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: 8,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "#CCCCCC",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {service.desc}
                  </p>
                  <span
                    style={{
                      color: "#FF6A00",
                      fontSize: 12,
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Book via WhatsApp
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="#FF6A00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.a>
              ))}
            </motion.div>
      </div>
    </section>
  );
}
