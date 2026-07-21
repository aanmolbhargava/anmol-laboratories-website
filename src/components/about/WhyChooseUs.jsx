import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

const features = [
  {
    title: "Herbal Expertise",
    description:
      "Traditional Ayurvedic formulations developed with years of manufacturing experience.",
    icon: HiOutlineSparkles,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product undergoes strict quality control before reaching customers.",
    icon: HiOutlineShieldCheck,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Wide Product Range",
    description:
      "Manufacturing across oils, syrups, tablets, capsules, powders and ointments.",
    icon: HiOutlineCube,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Modern Manufacturing",
    description:
      "Efficient production processes backed by modern equipment and GMP practices.",
    icon: HiOutlineBeaker,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Trusted Partnerships",
    description:
      "Supporting distributors, healthcare professionals and third-party manufacturing clients.",
    icon: HiOutlineUserGroup,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Pan India Presence",
    description:
      "Reliable supply network serving customers and business partners across India.",
    icon: HiOutlineGlobeAlt,
    color: "bg-blue-100 text-blue-700",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Why Businesses Trust
            <br />
            Anmol Laboratories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We combine Ayurvedic heritage with modern manufacturing
            standards to deliver reliable herbal healthcare solutions.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-green-300 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}