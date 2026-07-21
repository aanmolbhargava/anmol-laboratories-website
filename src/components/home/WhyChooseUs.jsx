import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineCube,
  HiOutlineClipboardCheck,
  HiOutlineTruck,
  HiOutlineSparkles,
} from "react-icons/hi";

import { Link } from "react-router-dom";

const stats = [
  {
    icon: HiOutlineOfficeBuilding,
    number: "20+",
    title: "Years Experience",
  },
  {
    icon: HiOutlineCube,
    number: "60+",
    title: "Ayurvedic Products",
  },
  {
    icon: HiOutlineBadgeCheck,
    number: "GMP",
    title: "Certified Manufacturing",
  },
  {
    icon: HiOutlineClipboardCheck,
    number: "100%",
    title: "Quality Assurance",
  },
  {
    icon: HiOutlineTruck,
    number: "PAN India",
    title: "Supply Network",
  },
  {
    icon: HiOutlineSparkles,
    number: "OEM",
    title: "Third Party Manufacturing",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8FBF8] py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">
            Manufacturer of Herbal Based Formulation Drugs & Medicines
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Since 2001, Anmol Laboratories has been dedicated to manufacturing
            quality Ayurvedic formulations with a strong focus on efficacy,
            consistency and customer satisfaction.
          </p>

          <ul className="mt-10 space-y-4">

            <li>✓ ✓ 60+ Ayurvedic Formulations</li>

            <li>✓ Third Party Manufacturing</li>

            <li>✓ Private Labelling</li>

            <li>✓ Bulk Manufacturing</li>

            <li>✓ GMP Manufacturing Standards</li>

          </ul>

          <Link
            to="/about"
            className="mt-10 inline-flex rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            Learn More About Us
          </Link>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-6">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-300 border"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">

                  <Icon size={30} />

                </div>

                <div className="text-4xl font-black text-green-700">

                  {item.number}

                </div>

                <div className="mt-3 text-lg font-semibold">

                  {item.title}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}