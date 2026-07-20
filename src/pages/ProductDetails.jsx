import { useParams, Link } from "react-router-dom";
import { createWhatsAppLink } from "../utils/whatsapp";
import ProductCarousel from "../components/carousel/ProductCarousel";
import {
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineClipboardList,
  HiOutlineArrowLeft,
  HiOutlineChatAlt2,
} from "react-icons/hi";

import products from "../data/products";
import company from "../data/company";
import ProductCard from "../components/cards/ProductCard";
import ProductImage from "../components/common/ProductImage";
import PriceTag from "../components/common/PriceTag";
import { useCart } from "../context/CartContext";
import QuantitySelector from "../components/cart/QuantitySelector";
import Button from "../components/common/Button";
import ProductGallery from "../components/products/ProductGallery";
import { useNavigate } from "react-router-dom";
import ProductTabs from "../components/products/ProductTabs";

import RelatedProducts from "../components/products/RelatedProducts";
import getRelatedProducts from "../utils/getRelatedProducts";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();
  const navigate = useNavigate();
  const qty = getQuantity(product.id);
  const relatedProducts = getRelatedProducts(product, products);
  if (!product) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Product Not Found</h2>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-xl bg-green-700 px-6 py-3 text-white"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  // const relatedProducts = products.filter(
  //   (p) => p.group === product.group && p.id !== product.id,
  // );
  const whatsappURL = createWhatsAppLink(company.whatsapp, product);
  <>
    <ProductImage
      src={product.image}
      alt={product.name}
      className="h-60 object-contain transition duration-500 group-hover:scale-105"
    />
  </>;

  return (
    <section className="bg-[#F8FBF8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back */}

        <Link
          to="/products"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-green-700"
        >
          <HiOutlineArrowLeft />
          Back to Products
        </Link>

        {/* Main */}

        <div className="grid items-start gap-12 lg:grid-cols-[520px_1fr]">
          {/* Image */}

          <div className="sticky top-28 self-start">
            <ProductGallery gallery={product.gallery} />
          </div>

          {/* Info */}

          <div className="sticky top-28">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {product.group}
            </span>

            <h1 className="mt-6 text-5xl font-black">{product.name}</h1>

            <div className="mt-6 rounded-2xl bg-green-50 p-5">
              <PriceTag mrp={product.mrp} price={product.price} />

              <p className="mt-2 text-sm text-green-700 font-medium">
                You save ₹{product.mrp - product.price}
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Quick Info */}

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="sticky top-28 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg self-start">
                <HiOutlineCube className="text-green-700" size={30} />

                <p className="mt-3 text-sm text-gray-500">Pack Size</p>

                <h4 className="font-bold">{product.packSize}</h4>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <HiOutlineBeaker className="text-green-700" size={30} />

                <p className="mt-3 text-sm text-gray-500">Dosage Form</p>

                <h4 className="font-bold">{product.category}</h4>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <HiOutlineClipboardList className="text-green-700" size={30} />

                <p className="mt-3 text-sm text-gray-500">Health Concern</p>

                <h4 className="font-bold">{product.group}</h4>
              </div>
            </div>

            {/* Benefits */}

            <section className="mt-10">
              <h2 className="mb-5 text-2xl font-bold">Key Benefits</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {product.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 rounded-2xl border border-green-100 bg-green-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white text-xl">
                      ✓
                    </div>

                    <p className="font-medium text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ingredients */}

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Ingredients</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {product.ingredients.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-green-50 px-4 py-2 font-medium text-green-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold">💊 Recommended Usage</h3>

                <p className="leading-8 text-gray-700">{product.dosage}</p>
              </div>

              <div className="rounded-3xl bg-yellow-50 p-6">
                <h3 className="mb-3 text-xl font-bold">📦 Storage</h3>

                <p className="leading-8 text-gray-700">{product.storage}</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {/* <Button
                className="h-14 w-full"
                onClick={() => {
                  if (qty === 0) addToCart(product);
                  navigate("/cart");
                }}
              >
                Buy Now
              </Button> */}

              <div className="mt-8 rounded-2xl border bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">Quantity</span>

                  {qty === 0 ? (
                    <Button
                      onClick={() => addToCart(product)}
                      className="h-11 px-6"
                    >
                      Add
                    </Button>
                  ) : (
                    <QuantitySelector
                      qty={qty}
                      onIncrease={() => increaseQty(product.id)}
                      onDecrease={() => decreaseQty(product.id)}
                    />
                  )}
                </div>

                {qty > 0 && (
                  <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-green-800">
                          ✔ Added to Cart
                        </h3>

                        <p className="text-sm text-green-700">
                          Ready for checkout
                        </p>
                      </div>

                      <Button
                        onClick={() => navigate("/cart")}
                        className="h-11 px-6"
                      >
                        View Cart →
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <h3 className="text-xl font-bold">Need Help Choosing?</h3>

                <p className="mt-2 text-green-100">
                  Chat directly with our team for dosage guidance, product
                  selection, and bulk enquiries.
                </p>

                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex h-12 items-center justify-center rounded-xl bg-white font-semibold text-green-700 transition hover:bg-green-50"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                🚚 PAN India Delivery
              </div>

              <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                🏭 GMP Certified
              </div>

              <div className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                🌿 Ayurvedic Formulation
              </div>
            </div>

            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">
                Why Customers Trust This Product
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
                  <div className="mb-4 text-4xl">🌿</div>

                  <h3 className="mb-2 text-lg font-bold">
                    Authentic Ayurvedic Formula
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Prepared using carefully selected herbs following Ayurvedic
                    principles.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                  <div className="mb-4 text-4xl">🏭</div>

                  <h3 className="mb-2 text-lg font-bold">
                    GMP Certified Manufacturing
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Manufactured in a GMP-compliant facility with strict quality
                    control.
                  </p>
                </div>

                <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6">
                  <div className="mb-4 text-4xl">🚚</div>

                  <h3 className="mb-2 text-lg font-bold">PAN India Delivery</h3>

                  <p className="text-gray-600 leading-7">
                    Safe packaging with dispatch across India after order
                    confirmation.
                  </p>
                </div>

                <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">
                  <div className="mb-4 text-4xl">💬</div>

                  <h3 className="mb-2 text-lg font-bold">Expert Assistance</h3>

                  <p className="text-gray-600 leading-7">
                    Connect with our team on WhatsApp for dosage guidance and
                    product selection.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
        {/* FAQ */}

        <div className="mt-24">
          <h2 className="mb-10 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {product.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-7 shadow">
                <h3 className="font-bold">{faq.q}</h3>

                <p className="mt-3 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <ProductCarousel products={relatedProducts} />
          </div>
        )}
      </div>
    </section>
  );
}
