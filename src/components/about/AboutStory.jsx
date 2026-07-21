import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHO WE ARE
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Manufacturing Herbal Wellness Since 2001
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Anmol Laboratories is a trusted manufacturer of Herbal &
            Ayurvedic formulations dedicated to delivering quality,
            safety and authenticity through traditional Ayurvedic
            wisdom and modern manufacturing practices.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our portfolio includes Ayurvedic Oils, Syrups,
            Tablets, Capsules, Powders and Ointments serving
            customers, distributors and business partners
            across India.
          </p>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >

          <div className="rounded-3xl bg-green-50 p-8">

            <h3 className="text-5xl font-black text-green-700">
              2001
            </h3>

            <p className="mt-3 text-gray-700">
              Year Established
            </p>

          </div>

          <div className="rounded-3xl bg-cyan-50 p-8">

            <h3 className="text-5xl font-black text-cyan-700">
              60+
            </h3>

            <p className="mt-3 text-gray-700">
              Herbal Products
            </p>

          </div>

          <div className="rounded-3xl bg-amber-50 p-8">

            <h3 className="text-5xl font-black text-amber-700">
              GMP
            </h3>

            <p className="mt-3 text-gray-700">
              Quality Manufacturing
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}