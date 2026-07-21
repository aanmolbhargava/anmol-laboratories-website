import {
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineOfficeBuilding,
  HiOutlineClipboardCheck,
  HiOutlineCube,
  HiOutlineTruck,
} from "react-icons/hi";

const steps = [
  {
    icon: HiOutlineSparkles,
    title: "Raw Herbs",
    desc: "Premium quality herbal ingredients sourced from trusted suppliers.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineBeaker,
    title: "Ingredient Testing",
    desc: "Every ingredient is tested for purity and quality before production.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "Manufacturing",
    desc: "Prepared using authentic Ayurvedic formulations under GMP standards.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Quality Check",
    desc: "Each batch undergoes multiple quality inspections.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HiOutlineCube,
    title: "Packaging",
    desc: "Leak-proof and hygienic pharmaceutical packaging.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: HiOutlineTruck,
    title: "Distribution",
    desc: "Delivered safely across India through our trusted network.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="bg-[#F8FBF8] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR PROCESS
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            How We Manufacture
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every product follows a carefully monitored manufacturing process,
            ensuring quality, safety and consistency from raw herbs to the
            finished formulation.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Center Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-green-100 lg:block"></div>

          <div className="grid gap-10 lg:grid-cols-2">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.title}
                  className={`relative ${
                    index % 2 === 0 ? "lg:pr-14" : "lg:pl-14"
                  }`}
                >

                  <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {step.desc}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}