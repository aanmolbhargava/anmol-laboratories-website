import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineGlobe,
  HiOutlineTruck,
} from "react-icons/hi";
import { motion } from "framer-motion";

const items = [
  {
    icon: HiOutlineBadgeCheck,
    title: "GMP Certified",
    text: "Manufacturing facility following quality standards.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "25+ Years Experience",
    text: "Serving healthcare with trusted Ayurvedic formulations.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineTruck,
    title: "PAN India Supply",
    text: "Reliable delivery network across India.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HiOutlineGlobe,
    title: "Contract Manufacturing",
    text: "Third Party & Private Label Manufacturing available.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ClientTrust() {
  return (
    <section className="bg-[#F8FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY CLIENTS TRUST US
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            Trusted Manufacturing Partner
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Delivering consistent quality, ethical manufacturing,
            and reliable business partnerships since 2001.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-600">

                  {item.text}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}