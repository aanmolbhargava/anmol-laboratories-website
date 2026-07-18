import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
} from "react-icons/hi";

const cards = [
  {
    number: "22+",
    title: "Years of Excellence",
    description:
      "Manufacturing quality herbal formulations since 2001.",
    icon: HiOutlineOfficeBuilding,
    color: "bg-green-100 text-green-700",
  },
  {
    number: "GMP",
    title: "Certified Facility",
    description:
      "Produced under strict GMP manufacturing standards.",
    icon: HiOutlineBadgeCheck,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    number: "100%",
    title: "Herbal Formulations",
    description:
      "Combining traditional Ayurveda with modern manufacturing.",
    icon: HiOutlineSparkles,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    number: "PAN",
    title: "India Presence",
    description:
      "Serving distributors and customers across India.",
    icon: HiOutlineGlobeAlt,
    color: "bg-blue-100 text-blue-700",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY ANMOL LABORATORIES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Trusted Manufacturing.
            <span className="block text-green-700">
              Proven Quality.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every formulation is developed with a commitment to
            quality, authenticity, and customer trust.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: .25,
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                <div
                  className={`mb-8 inline-flex rounded-2xl p-4 ${item.color}`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-5xl font-black text-green-700">
                  {item.number}
                </h3>

                <h4 className="mt-5 text-xl font-semibold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </motion.div>

            );
          })}
        </div>

      </div>

    </section>
  );
}