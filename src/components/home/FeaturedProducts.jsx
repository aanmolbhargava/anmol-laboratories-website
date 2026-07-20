import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import ProductCard from "../cards/ProductCard";
import products from "../../data/products";

const groups = [
  "All",
  "Pain Relief",
  "Women's Wellness",
  "Respiratory Care",
  "Beauty & Wellness",
  "Kidney Care",
];

export default function FeaturedProducts() {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const featuredProducts = useMemo(() => {
    const featured = products.filter((item) => item.featured);

    if (selectedGroup === "All") return featured;

    return featured.filter(
      (item) => item.group === selectedGroup
    );
  }, [selectedGroup]);

  return (
    <section className="bg-[#F7FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR HERBAL RANGE
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            Find Products By Health Concern
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore Ayurvedic formulations developed to support different wellness needs.
          </p>

        </div>

        {/* Filter */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                selectedGroup === group
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50"
              }`}
            >
              {group}
            </button>
          ))}

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            to="/products"
            className="inline-flex items-center gap-3 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
          >
            View Complete Product Range

            <HiArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
}