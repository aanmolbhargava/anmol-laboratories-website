import ProductCard from "../products/ProductCard";

export default function RelatedProducts({ products }) {
  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Customers Also Bought
          </h2>

          <p className="text-gray-500 mt-2">
            Frequently purchased together
          </p>

        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}