import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
} from "react-icons/hi";

const items = [
  {
    icon: <HiOutlineSparkles size={24} />,
    title: "Ayurvedic",
    subtitle: "Natural Formulations",
    color: "text-green-700 bg-green-100",
  },
  {
    icon: <HiOutlineShieldCheck size={24} />,
    title: "GMP Certified",
    subtitle: "Quality Manufacturing",
    color: "text-cyan-700 bg-cyan-100",
  },
  {
    icon: <HiOutlineGlobeAlt size={24} />,
    title: "PAN India",
    subtitle: "Delivery Available",
    color: "text-orange-700 bg-orange-100",
  },
  {
    icon: <HiOutlineBadgeCheck size={24} />,
    title: "Since 2001",
    subtitle: "Trusted Brand",
    color: "text-purple-700 bg-purple-100",
  },
];

export default function HeroTrustCards() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
          >
            {item.icon}
          </div>

          <h3 className="font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}