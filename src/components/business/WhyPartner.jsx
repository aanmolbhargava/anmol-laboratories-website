import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineSupport,
} from "react-icons/hi";

const items = [
  {
    icon: HiOutlineOfficeBuilding,
    title: "Since 2001",
    description:
      "Over two decades of trusted Ayurvedic manufacturing experience.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "GMP Quality",
    description:
      "Strict quality control with reliable manufacturing practices.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineCube,
    title: "Multiple Dosage Forms",
    description:
      "Oils, Syrups, Tablets, Capsules, Powders & Ointments.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HiOutlineSupport,
    title: "Dedicated Support",
    description:
      "End-to-end assistance from enquiry to delivery.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY PARTNER WITH US
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Your Reliable Manufacturing Partner
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:index*0.12}}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl"
              >

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>
                  <Icon size={30}/>
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
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