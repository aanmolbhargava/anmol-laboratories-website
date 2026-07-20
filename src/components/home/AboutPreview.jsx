import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            ABOUT ANMOL LABORATORIES
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            22+ Years of Trusted
            <span className="block text-green-700">
              Herbal Healthcare
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Established in 2001, Anmol Laboratories is a GMP Certified
            manufacturer of Ayurvedic formulations dedicated to quality,
            innovation and traditional herbal science.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-green-700">
                2001
              </h3>

              <p className="mt-2 text-gray-600">
                Year Established
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-green-700">
                GMP
              </h3>

              <p className="mt-2 text-gray-600">
                Certified Facility
              </p>
            </div>

          </div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            Learn More

            <HiOutlineArrowRight />
          </Link>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] bg-gradient-to-br from-green-700 to-green-500 p-10 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Your Trusted Herbal Health Partner
            </h3>

            <p className="mt-6 leading-8 text-green-100">
              Manufacturing herbal formulations with premium ingredients,
              modern quality standards and Ayurvedic principles.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between border-b border-white/20 pb-3">
                <span>GMP Certified</span>
                <span>✓</span>
              </div>

              <div className="flex justify-between border-b border-white/20 pb-3">
                <span>Established</span>
                <span>2001</span>
              </div>

              <div className="flex justify-between border-b border-white/20 pb-3">
                <span>Products</span>
                <span>7+</span>
              </div>

              <div className="flex justify-between">
                <span>Quality</span>
                <span>Premium</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}