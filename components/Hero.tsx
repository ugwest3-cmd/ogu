"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MotifBackground from "./MotifBackground";

const WHATSAPP_URL =
  "https://wa.me/256751579909?text=Hello%20I%20want%20to%20book%20a%20session";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Tribal motif background - animated slow drift */}
      <MotifBackground opacity={0.07} animated={true} />

      {/* Radial gradient overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(255,106,0,0.08) 0%, rgba(5,5,5,0) 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Orange glow bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,106,0,0.06)",
          filter: "blur(80px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,106,0,0.12)",
            border: "1px solid rgba(255,106,0,0.3)",
            borderRadius: 4,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6A00", display: "inline-block" }} />
          <span
            style={{
              color: "#FF6A00",
              fontSize: 11,
              fontFamily: "Oswald, sans-serif",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Uganda&apos;s Premier Visual Studio
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            marginBottom: 8,
          }}
        >
          TELLING STORIES
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "0.03em",
            color: "#FF6A00",
            marginBottom: 32,
          }}
        >
          THAT ARE IMPACTFUL
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            color: "#CCCCCC",
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          PHOTOS &nbsp;·&nbsp; VIDEOS &nbsp;·&nbsp; SOCIALS &nbsp;·&nbsp; BRANDING
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            id="hero-book-btn"
            style={{ fontSize: "1rem", padding: "16px 44px" }}
          >
            📅 Book OGU Today
          </a>
          <a href="#portfolio" className="btn-outline" style={{ fontSize: "1rem", padding: "16px 44px" }}>
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="scroll-bounce"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            color: "#666",
            fontSize: 10,
            letterSpacing: "0.2em",
            fontFamily: "Oswald, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="#FF6A00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
