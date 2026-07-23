import {
  HiOutlineBadgeCheck,
  HiOutlineShoppingCart,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ProductInfo({ product, addToCart, whatsappURL }) {
  if (!product) return null;

  return (
    <div className="sticky top-28">
      {/* Category */}

      <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        {product.category}
      </span>

      {/* Name */}

      <h1 className="mt-5 text-5xl font-black text-gray-900 leading-tight">
        {product.name}
      </h1>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {product.shortDescription}
      </p>

      {/* Price */}

      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-green-700">
            ₹{product.price}
          </span>

          <span className="text-xl text-gray-400 line-through">
            ₹{product.mrp}
          </span>
        </div>

        <div className="mt-3 flex gap-3">
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
            OFF
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Save ₹{product.mrp - product.price}
          </span>
        </div>
      </div>

      {/* Pack */}

      <div className="mt-8 inline-flex rounded-full bg-green-50 px-5 py-3 font-semibold text-green-700">
        📦 Pack Size : {product.packSize}
      </div>

      {/* Buttons */}

      <div className="mt-10 grid gap-4">
        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center gap-3 rounded-2xl bg-green-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-800"
        >
          <HiOutlineShoppingCart size={22} />
          Add To Cart
        </button>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-2xl border-2 border-green-700 px-8 py-4 text-lg font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          <HiOutlineChatAlt2 size={22} />
          WhatsApp Enquiry
        </a>
      </div>

      {/* Trust */}

      <div className="mt-12 space-y-5">
        <div className="flex items-center gap-3">
          <HiOutlineBadgeCheck className="text-green-700" />
          GMP Certified Manufacturing
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineBadgeCheck className="text-green-700" />
          Herbal Formulation
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineBadgeCheck className="text-green-700" />
          Trusted Since 2001
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineBadgeCheck className="text-green-700" />
          PAN India Delivery
        </div>
      </div>
    </div>
  );
}
