import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiArrowRight,
} from "react-icons/hi";

export default function HeroContent({
  product,
  whatsappURL,
}) {

console.log(product);
console.log(product.slug);

  return (
<motion.div className="relative z-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      
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

      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          to={`/products/${product.slug}`}
          className="rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
        >
          View Details
        </Link>
        

        <a
          href={whatsappURL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-green-700 px-7 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          WhatsApp Enquiry
        </a>

      </div>

      <div className="mt-8 inline-flex rounded-full bg-green-50 px-5 py-3 font-semibold text-green-700">

        Pack Size : {product.packSize}

      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">

        <div className="flex gap-4">

          <div className="rounded-xl bg-green-100 p-3 text-green-700">

            <HiOutlineShieldCheck size={28} />

          </div>

          <div>

            <h3 className="font-semibold">

              Herbal Formulations

            </h3>

            <p className="text-gray-500">

              Crafted with Ayurvedic ingredients

            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">

            <HiArrowRight size={28} />

          </div>

          <div>

            <h3 className="font-semibold">

              Fast Enquiry

            </h3>

            <p className="text-gray-500">

              Connect instantly on WhatsApp

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}