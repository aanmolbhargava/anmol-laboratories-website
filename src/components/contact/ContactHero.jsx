import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 py-28 text-white">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
          CONTACT US
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-6xl font-black"
        >
          Let's Build Something
          <br />
          Great Together
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">
          Whether you're looking for products, third-party manufacturing,
          distributorship or business partnerships, we'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
