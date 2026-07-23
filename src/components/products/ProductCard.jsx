import { Link } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineChatAlt2 } from "react-icons/hi";
import { createWhatsAppLink } from "../../utils/whatsapp";
import company from "../../data/company";
import {
  getDiscount,
  getSavings,
  formatPrice,
} from "../../utils/calculateDiscount";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const whatsappURL = `https://wa.me/${company.whatsapp}?text=Hello, I'm interested in ${product.name}`;
  const discount = getDiscount(product.mrp, product.price);
  const savings = getSavings(product.mrp, product.price);
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/products/${product.slug}`)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-cyan-50">
        <div className="flex h-72 items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
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
        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {product.overview}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">{product.packSize}</div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-xl font-bold text-green-700">
                {formatPrice(product.price)}
              </span>

              {discount > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.mrp)}
                </span>
              )}
            </div>

            {discount > 0 && (
              <div className="mt-2 flex gap-2">
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                  {discount}% OFF
                </span>

                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  Save {formatPrice(savings)}
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <a
              href={whatsappURL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-700 p-3 text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              <HiOutlineChatAlt2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
