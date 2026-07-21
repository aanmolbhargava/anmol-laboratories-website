import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 py-28 text-white">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"/>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"/>

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
          BUSINESS ENQUIRY
        </span>

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="mt-8 text-6xl font-black"
        >
          Grow Your Business
          <br />
          With Anmol Laboratories
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">

          Looking for a trusted Ayurvedic manufacturing partner?
          We provide reliable third-party manufacturing,
          contract manufacturing and bulk product supply.

        </p>

        <Link
          to="#enquiry"
          className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-green-700 hover:scale-105 transition"
        >
          Start Business Enquiry
        </Link>

      </div>

    </section>
  );
}