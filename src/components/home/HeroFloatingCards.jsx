import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineChatAlt2,
  HiOutlineCube,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const cards = [
  {
    title: "60+ Products",
    subtitle: "Ayurvedic Portfolio",
    icon: HiOutlineCube,
    color: "green",
    position: "left-top",
  },
  {
    title: "25+ Years",
    subtitle: "Manufacturing Experience",
    icon: HiOutlineSparkles,
    color: "amber",
    position: "right-top",
  },
  {
    title: "GMP Certified",
    subtitle: "Quality Manufacturing",
    icon: HiOutlineShieldCheck,
    color: "emerald",
    position: "left-bottom",
  },
  {
    title: "PAN India",
    subtitle: "Supply Network",
    icon: HiOutlineChatAlt2,
    color: "cyan",
    position: "right-bottom",
  },
];

const colorClasses = {
  green: "bg-green-100 text-green-700",
  cyan: "bg-cyan-100 text-cyan-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

const positionClasses = {
  "left-top": "-left-8 top-16",
  "right-top": "-right-8 top-10",
  "left-bottom": "-left-10 bottom-20",
  "right-bottom": "-right-10 bottom-12",
};

export default function HeroFloatingCards() {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <>
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                delay: index * 0.15,
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${positionClasses[card.position]} hidden xl:flex`}
            >
              <div className="flex items-center gap-4 rounded-3xl border border-white/50 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-md">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${colorClasses[card.color]}`}
                >
                  <Icon size={26} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h4>

                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </>
    </div>
  );
}
