import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";

const standards = [
  {
    icon: HiOutlineBadgeCheck,
    title: "GMP Manufacturing",
    description:
      "Products manufactured following Good Manufacturing Practices to ensure consistent quality.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Quality Assurance",
    description:
      "Every manufacturing batch is carefully monitored through quality control procedures.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineSparkles,
    title: "Ayurvedic Expertise",
    description:
      "Traditional Ayurvedic knowledge combined with modern manufacturing standards.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Trusted Business Partner",
    description:
      "Serving retailers, distributors and third-party manufacturing clients across India.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function QualityStandards() {
  return (
    <section className="bg-[#F8FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            QUALITY STANDARDS
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Commitment To Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every product reflects our commitment to quality,
            consistency and customer satisfaction.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {standards.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}