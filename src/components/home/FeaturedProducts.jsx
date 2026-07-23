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
    let featured = products.filter((item) => item.featured);

    if (selectedGroup !== "All") {
      featured = featured.filter((item) => item.group === selectedGroup);
    }

    return featured.slice(0, 6);
  }, [selectedGroup]);

  return (
    <section className="bg-[#F7FBF8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            POPULAR FORMULATIONS
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            Popular Ayurvedic Formulations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore our carefully selected Ayurvedic formulations trusted by
            healthcare professionals, distributors and customers across India.
          </p>
        </div>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                selectedGroup === group
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Products */}

        {featuredProducts.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center text-gray-500">
            No products available in this category.
          </div>
        )}

        {/* CTA */}

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 rounded-2xl bg-green-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
          >
            View Complete Catalogue
            <HiArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
