import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 py-28 text-white">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <motion.span
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur"
        >
          ABOUT ANMOL LABORATORIES
        </motion.span>

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
          className="mt-8 text-6xl font-black"
        >
          Bringing Ayurveda
          <br />
          Into Modern Healthcare
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.4}}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100"
        >
          Since 2001, Anmol Laboratories has been manufacturing quality
          Ayurvedic formulations with a commitment to purity, efficacy and
          customer trust.
        </motion.p>

      </div>
    </section>
  );
}