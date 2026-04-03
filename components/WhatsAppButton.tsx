"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/256751579909?text=Hello%20I%20want%20to%20book%20a%20session";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 900,
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp"
            aria-label="Chat on WhatsApp"
            className="whatsapp-pulse"
            style={{
              position: "relative",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.054 23.27a.5.5 0 00.623.641l5.558-1.791A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.083-1.415l-.363-.217-3.771 1.215 1.11-3.679-.236-.376A9.818 9.818 0 1112 21.818z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
