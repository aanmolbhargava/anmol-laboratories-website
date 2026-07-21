import {
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineCollection,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineChip,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";

const items = [
  {
    title: "Ayurvedic Oils",
    category: "Oil",
    icon: HiOutlineSparkles,
    desc: "Massage oils, pain oils, medicated oils",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Syrups",
    category: "Syrup",
    icon: HiOutlineBeaker,
    desc: "Herbal syrups & tonics",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Tablets",
    category: "Tablet",
    icon: HiOutlineCollection,
    desc: "Classical & proprietary formulations",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Capsules",
    category: "Capsule",
    icon: HiOutlineCube,
    desc: "Herbal capsules",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Powders",
    category: "Powder",
    icon: HiOutlineChip,
    desc: "Churna & herbal powders",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Ointments",
    category: "Ointment",
    icon: HiOutlineColorSwatch,
    desc: "External herbal applications",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ManufacturingScope() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            MANUFACTURING CAPABILITIES
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            What We Manufacture
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Beyond our showcased products, we undertake third-party and contract
            manufacturing across multiple Ayurvedic dosage forms.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => {

            const Icon = item.icon;

            const count = products.filter(
              (p) => p.category === item.category
            ).length;

            return (
              <div
                key={item.title}
                onClick={() =>
                  navigate(`/products?category=${item.category}`)
                }
                className="cursor-pointer rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:bg-green-50/30 hover:shadow-2xl"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>
                

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.desc}
                </p>

                <p className="mt-6 text-sm font-semibold text-green-700">
                  {count} Product{count !== 1 ? "s" : ""} →
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}