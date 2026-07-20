import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const items = [
  {
    icon: <HiOutlineBadgeCheck size={28} />,
    title: "22+ Years",
    subtitle: "Trusted Since 2001",
  },
  {
    icon: <HiOutlineShieldCheck size={28} />,
    title: "GMP Certified",
    subtitle: "Quality Manufacturing",
  },
  {
    icon: <HiOutlineSparkles size={28} />,
    title: "Herbal Formulations",
    subtitle: "Ayurvedic Ingredients",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl bg-green-50 p-6"
            >
              <div className="rounded-xl bg-green-700 p-3 text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}