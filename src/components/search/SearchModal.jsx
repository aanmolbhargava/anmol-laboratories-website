import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiX } from "react-icons/hi";

import products from "../../data/products";

export default function SearchModal() {

  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {

    const handler = (e) => {

      if ((e.ctrlKey || e.metaKey) && e.key === "k") {

        e.preventDefault();

        setOpen(true);

      }

      if (e.key === "Escape") {

        setOpen(false);

      }

    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);

  }, []);

  const filtered = useMemo(() => {

    if (!query) return products;

    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

  }, [query]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm">

      <div className="mx-auto mt-24 max-w-2xl rounded-3xl bg-white shadow-2xl">

        <div className="flex items-center border-b px-6">

          <HiSearch size={20} className="text-gray-400"/>

          <input

            autoFocus

            value={query}

            onChange={(e)=>setQuery(e.target.value)}

            placeholder="Search products..."

            className="w-full p-5 outline-none"

          />

          <button onClick={()=>setOpen(false)}>

            <HiX size={22}/>

          </button>

        </div>

        <div className="max-h-[450px] overflow-y-auto">

          {filtered.map(product=>(

            <Link

              key={product.id}

              to={`/products/${product.slug}`}

              onClick={()=>{

                setOpen(false);

                setQuery("");

              }}

              className="flex items-center gap-5 border-b p-5 transition hover:bg-green-50"

            >

              <img

                src={product.image}

                className="h-14 w-14 object-contain"

              />

              <div>

                <h4 className="font-semibold">

                  {product.name}

                </h4>

                <p className="text-sm text-gray-500">

                  {product.category}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>

  );

}