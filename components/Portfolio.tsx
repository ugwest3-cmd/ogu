"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const portfolioImages = [
  {
    id: "p1",
    src: "/images/portfolio/IMGL7139.jpg",
    category: "Event Coverage",
    alt: "OGU Media - Event Photography",
    span: "tall", // masonry: spans 2 rows
  },
  {
    id: "p2",
    src: "/images/portfolio/IMGL7165.jpg",
    category: "Sports Event",
    alt: "OGU Media - Sports Event Photography",
    span: "normal",
  },
  {
    id: "p3",
    src: "/images/portfolio/IMGL7168.jpg",
    category: "Ceremony",
    alt: "OGU Media - Ceremony Photography",
    span: "wide", // spans 2 cols
  },
  {
    id: "p4",
    src: "/images/portfolio/IMGL7185.jpg",
    category: "Portrait",
    alt: "OGU Media - Portrait Photography",
    span: "normal",
  },
  {
    id: "p5",
    src: "/images/portfolio/IMGL7218.jpg",
    category: "Event Coverage",
    alt: "OGU Media - Event Coverage",
    span: "tall",
  },
  {
    id: "p6",
    src: "/images/portfolio/IMGL7235.jpg",
    category: "Sports Event",
    alt: "OGU Media - Sports Photography",
    span: "normal",
  },
];

export default function Portfolio() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section
      id="portfolio"
      style={{
        background: "#050505",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      {/* Accent line */}
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
            Our Work
          </p>
          <h2 className="section-title">FEATURED WORK</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Masonry Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
            gap: 16,
          }}
          className="portfolio-grid"
        >
          {portfolioImages.map((img, index) => (
            <motion.div
              key={img.id}
              id={`portfolio-${img.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(img.src, img.alt)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                cursor: "pointer",
                gridRow: img.span === "tall" ? "span 2" : "span 1",
                gridColumn: img.span === "wide" ? "span 2" : "span 1",
                border: "1px solid #1a1a1a",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="portfolio-img"
              />

              {/* Hover overlay */}
              <div
                className="portfolio-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,106,0,0.0)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 20,
                  transition: "background 0.3s ease",
                }}
              >
                <div
                  className="portfolio-label"
                  style={{
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      background: "#FF6A00",
                      color: "#000",
                      fontFamily: "Oswald, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 4,
                    }}
                  >
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <a
            href="https://wa.me/256751579909?text=Hello%20I%20want%20to%20see%20more%20of%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="portfolio-view-more"
          >
            Request Full Portfolio
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              backdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "100%",
                aspectRatio: "16/10",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid rgba(255,106,0,0.3)",
              }}
            >
              <Image
                src={lightboxSrc}
                alt={lightboxAlt}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
              />
            </motion.div>
            <button
              onClick={closeLightbox}
              id="lightbox-close"
              style={{
                position: "fixed",
                top: 24,
                right: 24,
                background: "rgba(255,106,0,0.15)",
                border: "1px solid rgba(255,106,0,0.4)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                fontSize: 20,
                transition: "all 0.2s",
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .portfolio-grid .portfolio-img:hover {
          transform: scale(1.06);
        }
        .portfolio-grid > div:hover .portfolio-overlay {
          background: rgba(255, 106, 0, 0.25) !important;
        }
        .portfolio-grid > div:hover .portfolio-label {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 200px !important;
          }
        }
        @media (max-width: 480px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}
