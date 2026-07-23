import { useEffect, useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";

import products from "../data/products";
import ProductCard from "../components/cards/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import ScrollTop from "../components/common/ScrollTop";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function Products() {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "All";

  const [selectedGroup, setSelectedGroup] = useState("All");

  const [selectedForm, setSelectedForm] = useState(categoryFromURL);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setSelectedForm(categoryFromURL);
  }, [categoryFromURL]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGroup =
        selectedGroup === "All" || product.group === selectedGroup;

      const matchesForm =
        selectedForm === "All" || product.category === selectedForm;

      return matchesSearch && matchesGroup && matchesForm;
    });
  }, [search, selectedGroup, selectedForm]);
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "a-z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return sorted;
  }, [filteredProducts, sortBy]);

  return (
    <>
      <PageTransition>
        <SEO
          title="Products | Anmol Laboratories"
          description="Browse Ayurvedic Oils, Syrups, Capsules, Tablets, Powders and Herbal Medicines."
          keywords="Ayurvedic products, herbal syrup, herbal oil"
        />

        <section className="bg-[#F8FBF8] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                OUR PRODUCTS
              </span>

              <h1 className="mt-5 text-5xl font-black text-gray-900">
                Herbal Product Catalogue
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                Browse our Ayurvedic formulations according to your wellness
                needs.
              </p>
            </div>

            {/* Search */}

            <div className="relative mx-auto mt-12 max-w-xl">
              <HiSearch
                className="absolute left-5 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border bg-white py-4 pl-14 pr-5 outline-none focus:border-green-700"
              />
            </div>

            {/* Filters */}

            <div className="mt-10">
              <ProductFilters
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
                selectedForm={selectedForm}
                setSelectedForm={(form) => {
                  setSelectedForm(form);

                  if (form === "All") {
                    setSearchParams({});
                  } else {
                    setSearchParams({
                      category: form,
                    });
                  }
                }}
              />
            </div>

            {/* Count */}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
                {filteredProducts.length} Product
                {filteredProducts.length !== 1 && "s"}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border bg-white px-5 py-3 shadow-sm outline-none"
              >
                <option value="featured">Featured</option>

                <option value="price-low">Price : Low → High</option>

                <option value="price-high">Price : High → Low</option>

                <option value="a-z">Alphabetical</option>
              </select>
            </div>

            {/* Grid */}

            {sortedProducts.length === 0 ? (
              <div className="py-24 text-center">
                <div className="text-7xl">🌿</div>

                <h2 className="mt-6 text-4xl font-black">No Products Found</h2>

                <p className="mt-4 text-gray-500">
                  Try changing your search or filters.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedGroup("All");
                    setSelectedForm("All");
                    setSearchParams({});
                  }}
                  className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
        <ScrollTop />
        <FloatingWhatsapp />
      </PageTransition>
    </>
  );
}
