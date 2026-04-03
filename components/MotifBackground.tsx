"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface MotifBackgroundProps {
  opacity?: number;
  className?: string;
  animated?: boolean;
}

export default function MotifBackground({
  opacity = 0.06,
  className = "",
  animated = false,
}: MotifBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <motion.div
        animate={animated ? { scale: [1, 1.05, 1], x: [0, 8, 0] } : {}}
        transition={animated ? { duration: 20, repeat: Infinity, ease: "easeInOut" } : {}}
        style={{ position: "absolute", inset: "-10%", width: "120%", height: "120%" }}
      >
        <Image
          src="/images/brand/motif.jpg"
          alt=""
          fill
          style={{
            objectFit: "cover",
            opacity,
            mixBlendMode: "luminosity",
          }}
          priority={false}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
