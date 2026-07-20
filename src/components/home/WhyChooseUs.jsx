import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUsers,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineBadgeCheck size={34} />,
    title: "22+ Years Experience",
    text: "Serving customers with trusted Ayurvedic formulations since 2001.",
  },
  {
    icon: <HiOutlineShieldCheck size={34} />,
    title: "GMP Certified",
    text: "Manufactured with quality-focused processes and standards.",
  },
  {
    icon: <HiOutlineSparkles size={34} />,
    title: "Herbal Ingredients",
    text: "Traditional Ayurvedic formulations crafted with carefully selected herbs.",
  },
  {
    icon: <HiOutlineUsers size={34} />,
    title: "Customer First",
    text: "Dedicated support for product enquiries and guidance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY ANMOL LABORATORIES
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            Why Customers Choose Us
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Built on quality, trust and Ayurvedic expertise for over two decades.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="inline-flex rounded-2xl bg-green-100 p-4 text-green-700">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}