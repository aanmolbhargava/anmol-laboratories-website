import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">

        <h2 className="text-3xl font-bold">

          No Products Found

        </h2>

        <p className="mt-3 text-gray-500">

          Try changing your search.

        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}