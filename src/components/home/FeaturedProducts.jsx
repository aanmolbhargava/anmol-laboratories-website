import products from "../../data/products";
import ProductCard from "../cards/ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter((item) => item.featured);

  return (
    <section className="bg-[#F8FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR PRODUCTS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore our range of herbal formulations developed with a focus on
            quality, safety, and traditional Ayurvedic principles.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {featured.map((product) => (
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