import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import ProductCard from "../cards/ProductCard";

export default function ProductCarousel({ products }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const amount = 360;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!products?.length) return null;

  return (
    <section className="relative">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-4xl font-black">
          Related Products
        </h2>

        <div className="flex gap-3">

          <button
            onClick={() => scroll("left")}
            className="rounded-full border p-3 hover:bg-green-700 hover:text-white transition"
          >
            <HiChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="rounded-full border p-3 hover:bg-green-700 hover:text-white transition"
          >
            <HiChevronRight size={22} />
          </button>

        </div>

      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
      >

        {products.map((product) => (

          <div
            key={product.id}
            className="min-w-[340px] max-w-[340px] snap-start"
          >

            <ProductCard product={product} />

          </div>

        ))}

      </div>

    </section>
  );
}