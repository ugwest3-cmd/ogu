"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "What We Do", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/256751579909?text=Hello%20I%20want%20to%20book%20a%20session";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 32px" : "20px 32px",
          background: scrolled
            ? "rgba(5,5,5,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,106,0,0.15)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <div style={{ position: "relative", width: 80, height: 40 }}>
            <Image
              src="/images/brand/logo.png"
              alt="OGU Media Logo"
              fill
              sizes="80px"
              style={{ objectFit: "contain", objectPosition: "left" }}
              priority
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="nav-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#CCCCCC",
                textDecoration: "none",
                fontSize: 13,
                fontFamily: "Oswald, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s ease, text-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#FF6A00";
                (e.target as HTMLElement).style.textShadow = "0 0 10px rgba(255,106,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#CCCCCC";
                (e.target as HTMLElement).style.textShadow = "none";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{ padding: "10px 24px", fontSize: 13 }}
          >
            Book OGU
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 24,
                height: 2,
                background: menuOpen && i === 1 ? "transparent" : "#FF6A00",
                display: "block",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none"
                    : "none",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(5,5,5,0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "2.5rem",
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF6A00")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="btn-orange"
              style={{ fontSize: "1.1rem", padding: "14px 48px" }}
            >
              Book OGU
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          #nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
