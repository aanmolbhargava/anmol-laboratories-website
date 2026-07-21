import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiArrowRight,
} from "react-icons/hi";
import HeroTrustCards from "./HeroTrustCards";

export default function HeroContent({ product, whatsappURL }) {
 

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700">
        <HiOutlineBadgeCheck />
        Trusted Ayurvedic Brand
      </div>

      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="inline-block rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white">
          {product.category}
        </span>

        <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 lg:text-7xl">
          {product.name}
        </h1>
      </motion.div>

      <motion.p
        key={product.slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 max-w-xl text-lg leading-9 text-gray-600"
      >
        {product.shortDescription}
      </motion.p>

      <div className="mt-8 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-green-50 p-6 shadow-sm">
        <div className="flex items-end gap-3">
          <span className="text-4xl font-black text-green-700">
            ₹{product.price}
          </span>

          <span className="mb-1 text-lg text-gray-400 line-through">
            ₹{product.mrp}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
            OFF
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Save ₹{product.mrp - product.price}
          </span>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ Trusted Product
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          to={`/products/${product.slug}`}
          className="rounded-2xl bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
        >
          Explore Product
        </Link>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border-2 border-green-700 bg-white px-8 py-4 font-semibold text-green-700 transition duration-300 hover:bg-green-700 hover:text-white"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="mt-8 inline-flex items-center rounded-full border border-green-200 bg-white px-6 py-3 font-semibold text-green-700 shadow-sm">
        📦 Pack Size : &nbsp;
        <span className="font-bold">{product.packSize}</span>
      </div>

      <HeroTrustCards />
    </motion.div>
  );
}
