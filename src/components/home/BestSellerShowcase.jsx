import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCheckCircle,
} from "react-icons/hi";

import products from "../../data/products";
import company from "../../data/company";
import { createWhatsAppLink } from "../../utils/whatsapp";
import PriceTag from "../common/PriceTag";

const bestSellers = products.filter((item) => item.featured);

export default function BestSellerShowcase() {

  const [index, setIndex] = useState(0);

 const [isPaused, setIsPaused] = useState(false);

useEffect(() => {

  if (isPaused) return;

  const timer = setInterval(() => {

    setIndex((prev) => (prev + 1) % bestSellers.length);

  }, 6000);

  return () => clearInterval(timer);

}, [isPaused]);

  const product = bestSellers[index];

  const whatsappURL = createWhatsAppLink(
    company.whatsapp,
    product
  );

  return (

  <section
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  className="relative overflow-hidden bg-gradient-to-br from-[#F7FFF8] via-white to-[#EEF9FF]"
>

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

            BEST SELLERS

          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">

            Our Best Selling Products

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">

            Discover some of our most trusted Ayurvedic formulations,
            carefully developed to support everyday wellness.

          </p>

        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

  {/* LEFT IMAGE */}

 <AnimatePresence mode="wait">
  <motion.div
    key={product.id}
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 60 }}
    transition={{ duration: 0.45 }}
    className="relative flex justify-center"
  >
    {/* Background Glow */}
    <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-green-200 to-cyan-100 blur-sm" />

    {/* ⭐ Most Popular Badge */}
    <div className="absolute left-6 top-6 z-30 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-xl">
      ⭐ Most Popular
    </div>

    {/* Product Image */}
    <motion.img
      src={product.image}
      alt={product.name}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
      className="relative z-10 h-[500px] object-contain drop-shadow-2xl"
    />

    {/* Pack Badge */}
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="absolute bottom-8 left-6 z-30 rounded-2xl bg-white px-5 py-4 shadow-2xl"
    >
      <p className="text-xs uppercase tracking-wide text-gray-500">
        Available Pack
      </p>

      <p className="text-xl font-bold text-green-700">
        {product.packSize}
      </p>
    </motion.div>
  </motion.div>
</AnimatePresence>











  

  {/* RIGHT CONTENT */}

  <AnimatePresence mode="wait">

    <motion.div
      key={product.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.45 }}
    >

      <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

        {product.category}

      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">

        {product.name}

      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">

        {product.description}

      </p>

      <div className="mt-10 grid gap-5">

        {product.benefits.slice(0, 4).map((benefit) => (

          <div
            key={benefit}
            className="flex items-center gap-3"
          >

            <HiCheckCircle
              size={24}
              className="text-green-700"
            />

            <span className="text-lg text-gray-700">

              {benefit}

            </span>

          </div>

        ))}

      </div>
<div className="mt-8">
  <PriceTag
    mrp={product.mrp}
    price={product.price}
  />
</div>
 <div className="mt-10 flex flex-wrap gap-5">

  <Link
    to={`/products/${product.slug}`}
    className="rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
  >
    View Product
  </Link>

  <a
    href={whatsappURL}
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
  >
    WhatsApp Enquiry
  </a>

</div>

      <div className="mt-10 flex flex-wrap gap-3">

        <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

          {product.packSize}

        </span>

        <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

          Ayurvedic

        </span>

        <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">

          Herbal

        </span>

      </div>

    </motion.div>

  </AnimatePresence>

</div>
<div className="mt-16 flex flex-col items-center gap-8">

  {/* Navigation */}

  <div className="flex items-center gap-5">

    <button
      onClick={() =>
        setIndex(
          index === 0
            ? bestSellers.length - 1
            : index - 1
        )
      }
      className="rounded-full bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:text-white"
    >
      <HiChevronLeft size={24} />
    </button>

    <div className="rounded-full bg-white px-6 py-3 shadow font-semibold text-gray-700">

      {index + 1} / {bestSellers.length}

    </div>

    <button
      onClick={() =>
        setIndex(
          (index + 1) % bestSellers.length
        )
      }
      className="rounded-full bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:text-white"
    >
      <HiChevronRight size={24} />
    </button>

  </div>

  {/* Indicators */}

  <div className="flex gap-3">

    {bestSellers.map((item, i) => (

      <button
        key={item.id}
        onClick={() => setIndex(i)}
        className={`transition-all duration-300 rounded-full ${
          index === i
            ? "w-10 h-3 bg-green-700"
            : "w-3 h-3 bg-gray-300 hover:bg-green-300"
        }`}
      />

    ))}

  </div>

</div>
      </div>

    </section>

  );

}