import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const cards = [
  {
    title: "Our Mission",
    icon: HiOutlineLightBulb,
    color: "bg-green-100 text-green-700",
    description:
      "To deliver safe, effective and authentic Ayurvedic healthcare products through quality manufacturing and continuous innovation.",
  },
  {
    title: "Our Vision",
    icon: HiOutlineEye,
    color: "bg-cyan-100 text-cyan-700",
    description:
      "To become one of India's most trusted herbal healthcare manufacturers by combining Ayurvedic wisdom with modern technology.",
  },
  {
    title: "Our Values",
    icon: HiOutlineShieldCheck,
    color: "bg-amber-100 text-amber-700",
    description:
      "Quality, Integrity, Customer Trust, Transparency and Continuous Improvement guide every product we manufacture.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#F8FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR FOUNDATION
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Driven By Purpose
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every formulation we manufacture is backed by our commitment
            towards quality, customer trust and responsible healthcare.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}>

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-3xl font-bold">

                  {card.title}

                </h3>

                <p className="mt-6 leading-8 text-gray-600">

                  {card.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}