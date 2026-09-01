"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const orbs = [
  {
    className: "left-[-8%] top-[-6%] h-[620px] w-[620px] bg-[#3b82f6]",
    opacity: 0.2,
    duration: 26,
    delay: 0,
    x: [0, 50, -24, 0],
    y: [0, -36, 22, 0],
  },
  {
    className: "right-[-10%] top-[12%] h-[540px] w-[540px] bg-[#818cf8]",
    opacity: 0.14,
    duration: 32,
    delay: 1.5,
    x: [0, -46, 28, 0],
    y: [0, 38, -22, 0],
  },
  {
    className: "bottom-[-8%] left-[28%] h-[600px] w-[600px] bg-[#22d3ee]",
    opacity: 0.07,
    duration: 36,
    delay: 3,
    x: [0, 30, -30, 0],
    y: [0, -40, 20, 0],
  },
];

export function PremiumBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050508]" />

      <Image
        src="/images/hero-ambient.png"
        alt=""
        fill
        className="object-cover opacity-[0.28]"
        priority
        sizes="100vw"
      />

      <div className="aurora absolute inset-0" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${orb.className}`}
          style={{ opacity: orb.opacity }}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-grid-premium" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.62)_100%)]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise" />
    </div>
  );
}
