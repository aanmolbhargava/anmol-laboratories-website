import { Link } from "react-router-dom";
import {
  HiOutlineOfficeBuilding,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const points = [
  {
    icon: HiOutlineOfficeBuilding,
    text: "Third Party Manufacturing",
  },
  {
    icon: HiOutlineCube,
    text: "Bulk Product Supply",
  },
  {
    icon: HiOutlineTruck,
    text: "PAN India Distribution",
  },
  {
    icon: HiOutlineShieldCheck,
    text: "Quality Assured Manufacturing",
  },
];

export default function BusinessCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 py-24 text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
              BUSINESS OPPORTUNITIES
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              Partner With
              <br />
              Anmol Laboratories
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Looking for a reliable Ayurvedic manufacturing partner?
              We help businesses build quality herbal healthcare
              products through trusted manufacturing solutions.
            </p>

            <Link
              to="/business-enquiry"
              className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105 hover:shadow-2xl"
            >
              Start Business Enquiry →
            </Link>

          </div>

          {/* RIGHT */}

          <div className="grid gap-5">

            {points.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.text}
                  className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
                >

                  <div className="rounded-xl bg-white p-3 text-green-700">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-xl font-semibold">

                    {item.text}

                  </h3>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}