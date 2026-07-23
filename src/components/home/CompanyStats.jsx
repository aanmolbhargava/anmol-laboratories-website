import { motion } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
} from "react-icons/hi";

const stats = [
  {
    number: "25+",
    title: "Years of Excellence",
    icon: HiOutlineSparkles,
    color: "bg-green-100 text-green-700",
  },
  {
    number: "60+",
    title: "Products",
    icon: HiOutlineCube,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    number: "10K+",
    title: "Happy Customers",
    icon: HiOutlineUsers,
    color: "bg-blue-100 text-blue-700",
  },
  {
    number: "100%",
    title: "Quality Commitment",
    icon: HiOutlineBadgeCheck,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-800 to-emerald-800 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl"
              >

                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h2 className="text-5xl font-black text-white">

                  {item.number}

                </h2>

                <p className="mt-4 text-lg font-medium text-green-100">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}