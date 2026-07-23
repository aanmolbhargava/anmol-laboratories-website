import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const models = [
  {
    title: "Third Party Manufacturing",
    desc: "Complete manufacturing solutions under your own brand.",
    icon: HiOutlineOfficeBuilding,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Private Labelling",
    desc: "Launch your own Ayurvedic brand with customized packaging.",
    icon: HiOutlineClipboardCheck,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Bulk Supply",
    desc: "Reliable bulk manufacturing for distributors and institutions.",
    icon: HiOutlineCube,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "PAN India Distribution",
    desc: "Efficient delivery network serving customers across India.",
    icon: HiOutlineTruck,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function BusinessModels() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            Partner With Anmol Laboratories
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're launching a new herbal brand or expanding your
            product portfolio, we provide end-to-end manufacturing solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {models.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
