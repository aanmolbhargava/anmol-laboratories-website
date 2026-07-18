import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FBF8] to-green-50">

      {/* Background Blur */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-100 blur-3xl opacity-60" />

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700">

            <HiOutlineBadgeCheck />

            GMP Certified Manufacturer

          </div>

          <h1 className="text-5xl font-black leading-tight text-gray-900 lg:text-7xl">

            Herbal Wellness

            <span className="block text-green-700">

              Backed by Science.

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">

            Since 2001, Anmol Laboratories has been manufacturing
            premium Ayurvedic formulations with a commitment to
            quality, purity, innovation and customer trust.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button>
              Explore Products
            </Button>

            <Button outline>
              Contact Us
            </Button>

          </div>

          {/* FEATURES */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2">

            <div className="flex gap-4">

              <div className="rounded-xl bg-green-100 p-3 text-green-700">

                <HiOutlineShieldCheck size={28} />

              </div>

              <div>

                <h3 className="font-semibold">

                  Trusted Manufacturing

                </h3>

                <p className="mt-1 text-gray-500">

                  Established in 2001

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">

                <HiArrowRight size={28} />

              </div>

              <div>

                <h3 className="font-semibold">

                  Herbal Excellence

                </h3>

                <p className="mt-1 text-gray-500">

                  GMP Certified Facility

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Big Circle */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-green-200 to-cyan-100 blur-sm" />

          {/* Bottle */}

          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            src="/products/cough-ex.png"
            className="relative z-10 h-[520px] object-contain drop-shadow-2xl"
          />

          {/* Floating Cards */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute left-0 top-20 rounded-2xl bg-white p-5 shadow-2xl"
          >

            <h4 className="font-bold text-green-700">

              22+

            </h4>

            <p className="text-sm text-gray-500">

              Years Experience

            </p>

          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute bottom-16 right-0 rounded-2xl bg-white p-5 shadow-2xl"
          >

            <h4 className="font-bold text-green-700">

              GMP

            </h4>

            <p className="text-sm text-gray-500">

              Certified

            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}