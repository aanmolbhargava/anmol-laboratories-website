import {
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineCollection,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineChip,
} from "react-icons/hi";

const items = [
  {
    title: "Ayurvedic Oils",
    icon: HiOutlineSparkles,
    desc: "Massage oils, pain oils, medicated oils",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Syrups",
    icon: HiOutlineBeaker,
    desc: "Herbal syrups & tonics",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Tablets",
    icon: HiOutlineCollection,
    desc: "Classical & proprietary formulations",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Capsules",
    icon: HiOutlineCube,
    desc: "Herbal capsules",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Powders",
    icon: HiOutlineChip,
    desc: "Churna & herbal powders",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Ointments",
    icon: HiOutlineColorSwatch,
    desc: "External herbal applications",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ManufacturingScope() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            MANUFACTURING CAPABILITIES
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            What We Manufacture
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 leading-8">
            Beyond our showcased products, we undertake third-party and contract
            manufacturing across multiple Ayurvedic dosage forms.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-3 leading-7 text-gray-600">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}