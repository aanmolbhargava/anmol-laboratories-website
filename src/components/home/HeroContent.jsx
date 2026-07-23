import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 max-w-3xl"
    >
      <span className="inline-flex rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-green-700 shadow">
        GMP Certified • Since 2001 • PAN India
      </span>

      <h1 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
        Manufacturer of
        <br />
        Herbal Based
        <br />
        Formulation Drugs &
        <br />
        Medicines
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-green-50">
        Manufacturing premium Ayurvedic medicines, syrups, tablets, capsules,
        oils and herbal healthcare products for distributors, retailers,
        hospitals and third-party manufacturing partners across India.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          to="/products"
          className="rounded-2xl bg-white px-9 py-4 font-semibold text-green-700 shadow-xl transition hover:scale-105"
        >
          Explore Products →
        </Link>

        <Link
          to="/business-enquiry"
          className="rounded-2xl border border-white bg-white/10 px-9 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-green-700"
        >
          Business Enquiry
        </Link>
      </div>
    </motion.div>
  );
}
