import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineBadgeCheck,
  HiOutlineCube,
  HiOutlineUsers,
} from "react-icons/hi";

const stats = [
  {
    icon: <HiOutlineOfficeBuilding size={34} />,
    number: "22+",
    title: "Years of Excellence",
  },
  {
    icon: <HiOutlineCube size={34} />,
    number: "7",
    title: "Herbal Products",
  },
  {
    icon: <HiOutlineBadgeCheck size={34} />,
    number: "GMP",
    title: "Certified Facility",
  },
  {
    icon: <HiOutlineUsers size={34} />,
    number: "1000+",
    title: "Satisfied Customers",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-800 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white backdrop-blur-lg"
            >
              <div className="mb-6 flex justify-center text-green-200">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black">
                {item.number}
              </h2>

              <p className="mt-3 tracking-wide text-green-100">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}