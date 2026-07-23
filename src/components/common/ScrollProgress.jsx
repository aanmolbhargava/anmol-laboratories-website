import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-[4px] w-full origin-left bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500"
      style={{
        scaleX,
      }}
    />
  );
}