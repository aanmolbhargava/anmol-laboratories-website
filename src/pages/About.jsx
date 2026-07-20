import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineHeart,
} from "react-icons/hi";

const values = [
  {
    title: "Quality",
    icon: <HiOutlineShieldCheck size={32} />,
    text: "Focused on consistent quality across our Ayurvedic formulations.",
  },
  {
    title: "Traditional Ayurveda",
    icon: <HiOutlineHeart size={32} />,
    text: "Inspired by classical Ayurvedic principles for everyday wellness.",
  },
  {
    title: "Innovation",
    icon: <HiOutlineSparkles size={32} />,
    text: "Continuously improving products to meet modern wellness needs.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            ABOUT ANMOL LABORATORIES
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Herbal Wellness with a Commitment to Quality
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
            Anmol Laboratories develops Ayurvedic formulations with a focus on
            quality, consistency and customer satisfaction. Our objective is to
            provide reliable herbal products inspired by traditional Ayurvedic
            knowledge for everyday wellness.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
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