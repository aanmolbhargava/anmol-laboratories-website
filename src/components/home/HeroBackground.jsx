import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-44 top-20 h-[520px] w-[520px] rounded-full bg-green-200/60 blur-[140px]"
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-cyan-200/60 blur-[150px]"
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/60 blur-[120px]"
      />

      {/* Decorative Circle */}

      <div className="absolute left-20 top-24 h-8 w-8 rounded-full border-4 border-green-300 opacity-60" />

      <div className="absolute right-28 top-32 h-6 w-6 rounded-full bg-cyan-300 opacity-60" />

      <div className="absolute left-1/3 bottom-28 h-10 w-10 rounded-full border-4 border-emerald-300 opacity-50" />

      <div className="absolute right-20 bottom-16 h-5 w-5 rounded-full bg-green-300 opacity-70" />

      {/* Grid Overlay */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg,#000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}