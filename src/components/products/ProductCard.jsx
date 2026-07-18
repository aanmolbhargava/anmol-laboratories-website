import { Link } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineChatAlt2,
} from "react-icons/hi";

import company from "../../data/company";

export default function ProductCard({ product }) {
  const whatsappURL = `https://wa.me/${company.whatsapp}?text=Hello, I'm interested in ${product.name}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-cyan-50">

        <div className="flex h-72 items-center justify-center p-8">

          <img
            src={product.image}
            alt={product.name}
            className="h-60 object-contain transition duration-500 group-hover:scale-105"
          />

        </div>

        {/* Category */}

        <div className="absolute left-5 top-5">

          <span className="rounded-full bg-green-700 px-4 py-1 text-xs font-semibold tracking-wide text-white">

            {product.category}

          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-900">

          {product.name}

        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">

          {product.overview}

        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">

            {product.packSize}

          </span>

          <div className="flex gap-2">

            <a
              href={whatsappURL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-700 p-3 text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              <HiOutlineChatAlt2 size={18} />
            </a>

            <Link
              to={`/products/${product.slug}`}
              className="flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Details

              <HiOutlineArrowRight />

            </Link>

          </div>

        </div>

      </div>

    </article>
  );
}