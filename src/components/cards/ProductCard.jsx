import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-green-50 to-cyan-50 p-6">

        <img
          src={product.image}
          alt={product.name}
          className="h-60 object-contain transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-6">

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {product.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {product.shortDescription}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="font-semibold text-green-700">
            {product.pack}
          </span>

          <Link
            to={`/products/${product.slug}`}
            className="rounded-xl bg-green-700 px-5 py-2 font-medium text-white transition hover:bg-green-800"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}