import { useEffect, useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";

import products from "../data/products";
import ProductCard from "../components/cards/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import { useSearchParams } from "react-router-dom";

export default function Products() {

const [search, setSearch] = useState("");

const [searchParams, setSearchParams] = useSearchParams();

const categoryFromURL =
  searchParams.get("category") || "All";

const [selectedGroup, setSelectedGroup] = useState("All");

const [selectedForm, setSelectedForm] = useState(categoryFromURL);

useEffect(() => {
  setSelectedForm(categoryFromURL);
}, [categoryFromURL]);

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      const matchesGroup =
        selectedGroup === "All" ||
        product.group === selectedGroup;

      const matchesForm =
        selectedForm === "All" ||
        product.category === selectedForm;

      return matchesSearch && matchesGroup && matchesForm;

    });

  }, [search, selectedGroup, selectedForm]);

  return (
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
            Browse our Ayurvedic formulations according to your wellness needs.
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

        <div className="mt-10">

          <p className="font-semibold text-gray-600">

            {filteredProducts.length} Product
            {filteredProducts.length !== 1 && "s"} Found

          </p>

        </div>

        {/* Grid */}

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}