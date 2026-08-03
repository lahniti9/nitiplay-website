"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const orbs = [
  {
    className: "left-[5%] top-[8%] h-[520px] w-[520px] bg-[#3b82f6]",
    opacity: 0.12,
    duration: 28,
    delay: 0,
    x: [0, 40, -20, 0],
    y: [0, -30, 20, 0],
  },
  {
    className: "right-[0%] top-[20%] h-[480px] w-[480px] bg-[#6366f1]",
    opacity: 0.08,
    duration: 32,
    delay: 2,
    x: [0, -50, 30, 0],
    y: [0, 40, -25, 0],
  },
  {
    className: "bottom-[5%] left-[30%] h-[560px] w-[560px] bg-[#1d4ed8]",
    opacity: 0.06,
    duration: 36,
    delay: 4,
    x: [0, 35, -35, 0],
    y: [0, -45, 25, 0],
  },
];

export function PremiumBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Premium ambient artwork */}
      <Image
        src="/images/hero-ambient.png"
        alt=""
        fill
        className="object-cover opacity-[0.35]"
        priority
        sizes="100vw"
      />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.className}`}
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

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(59,130,246,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-premium" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-noise" />
    </div>
  );
}
