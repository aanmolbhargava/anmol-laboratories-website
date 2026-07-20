import { Link } from "react-router-dom";
import {
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlineCollection,
} from "react-icons/hi";

import products from "../../data/products";

const categories = [
  {
    name: "Tablet",
    icon: HiOutlineCollection,
    color: "green",
  },
  {
    name: "Capsule",
    icon: HiOutlineCube,
    color: "cyan",
  },
  {
    name: "Syrup",
    icon: HiOutlineBeaker,
    color: "amber",
  },
  {
    name: "Oil",
    icon: HiOutlineSparkles,
    color: "emerald",
  },
];

const colors = {
  green: "bg-green-100 text-green-700",
  cyan: "bg-cyan-100 text-cyan-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export default function HealthCategories() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            PRODUCT RANGE
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Browse by Category
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore our Ayurvedic product range based on dosage form to quickly
            find the products you're looking for.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category) => {

            const Icon = category.icon;

            const count = products.filter(
              (p) => p.category === category.name
            ).length;

            return (

              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${colors[category.color]}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {category.name}s
                </h3>

                <p className="mt-2 text-gray-500">
                  {count} Products
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-green-600 transition-all group-hover:w-24" />

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}