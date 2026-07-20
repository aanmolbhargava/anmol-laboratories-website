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


export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
const {
    addToCart,
    increaseQty,
    decreaseQty,
    getQuantity,
} = useCart();

const qty = getQuantity(product.id);
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

  const relatedProducts = products.filter(
    (p) =>
      p.group === product.group &&
      p.id !== product.id
  );
const whatsappURL = createWhatsAppLink(company.whatsapp, product);
<>
<ProductImage
  src={product.image}
  alt={product.name}
  className="h-60 object-contain transition duration-500 group-hover:scale-105"
/>


</>


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

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="rounded-[32px] bg-white p-10 shadow-lg">

            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-[520px] object-contain"
            />

          </div>

          {/* Info */}

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {product.group}
            </span>

            <h1 className="mt-6 text-5xl font-black">
              {product.name}
            </h1>

            <PriceTag
  mrp={product.mrp}
  price={product.price}
  size="large"
/>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Quick Info */}

            <div className="mt-10 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl bg-white p-6 shadow">
                <HiOutlineCube
                  className="text-green-700"
                  size={30}
                />

                <p className="mt-3 text-sm text-gray-500">
                  Pack Size
                </p>

                <h4 className="font-bold">
                  {product.packSize}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <HiOutlineBeaker
                  className="text-green-700"
                  size={30}
                />

                <p className="mt-3 text-sm text-gray-500">
                  Dosage Form
                </p>

                <h4 className="font-bold">
                  {product.category}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <HiOutlineClipboardList
                  className="text-green-700"
                  size={30}
                />

                <p className="mt-3 text-sm text-gray-500">
                  Health Concern
                </p>

                <h4 className="font-bold">
                  {product.group}
                </h4>
              </div>

            </div>

            {/* Benefits */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold">
                Key Benefits
              </h2>

              <div className="mt-6 space-y-4">

                {product.benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >

                    <HiOutlineCheckCircle
                      className="text-green-700"
                      size={22}
                    />

                    <span>{benefit}</span>

                  </div>

                ))}

              </div>

            </div>

            {/* Ingredients */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold">
                Ingredients
              </h2>

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

            {/* Dosage */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold">
                Recommended Usage
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {product.dosage}
              </p>

            </div>

            {/* Storage */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold">
                Storage
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {product.storage}
              </p>

            </div>

  {qty === 0 ? (
  
  <Button
      onClick={() => addToCart(product)}
  >
      Add to Cart
  </Button>
  
  ) : (
  
  <QuantitySelector
      qty={qty}
      onIncrease={() => increaseQty(product.id)}
      onDecrease={() => decreaseQty(product.id)}
  />
  
  )}

            {/* WhatsApp */}

            <a
              href={whatsappURL}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
            >
              <HiOutlineChatAlt2 size={22} />

              Enquire on WhatsApp
            </a>

          </div>

        </div>

        {/* FAQ */}

        <div className="mt-24">

          <h2 className="mb-10 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            {product.faqs.map((faq) => (

              <div
                key={faq.q}
                className="rounded-2xl bg-white p-7 shadow"
              >

                <h3 className="font-bold">
                  {faq.q}
                </h3>

                <p className="mt-3 text-gray-600">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Related */}

 {relatedProducts.length > 0 && (

  <div className="mt-24">

    <ProductCarousel
      products={relatedProducts}
    />

  </div>

)}
      </div>

    </section>
  );
}