import { motion } from "framer-motion";
import products from "../../data/products";

const stats = [
  {
  number: "2001",
  title: "Established",
  subtitle: "Serving Since",
},
  {
    number: `${products.length}+`,
    title: "Products",
    subtitle: "Ayurvedic Formulations",
  },
  {
    number: "6",
    title: "Dosage Forms",
    subtitle: "Manufacturing Categories",
  },
  {
    number: "100%",
    title: "Quality",
    subtitle: "Commitment",
  },
];

export default function ManufacturingStrength() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 py-28 text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            MANUFACTURING STRENGTH
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Built On Quality,
            <br />
            Trusted Through Experience

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">

            With decades of manufacturing expertise,
            Anmol Laboratories continues to deliver
            quality Ayurvedic formulations to customers
            and business partners across India.

          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur"
            >

              <h3 className="text-6xl font-black">

                {item.number}

              </h3>

              <h4 className="mt-6 text-2xl font-bold">

                {item.title}

              </h4>

              <p className="mt-3 text-green-100 leading-7">

                {item.subtitle}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}