import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

import Button from "../common/Button";
//import ProductImage from "../common/ProductImage";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import company from "../../data/company";
import { createWhatsAppLink } from "../../utils/whatsapp";
import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroFloatingCards from "./HeroFloatingCards";
import HeroBackground from "./HeroBackground";
import PriceTag from "../common/PriceTag";

export default function Hero() {
  const featuredProducts = products.filter((p) => p.featured);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const activeProduct = featuredProducts[activeIndex];
  console.log(activeIndex, activeProduct.name);

  const whatsappURL = createWhatsAppLink(company.whatsapp, activeProduct);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-cyan-50 from-white via-[#F7FBF8] to-green-50">
        {/* Background Blur */}

        <HeroBackground />
        <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">
          {/* LEFT */}

          <HeroContent product={activeProduct} whatsappURL={whatsappURL} />

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Big Circle */}

            <div className="absolute h-[560px] w-[560px] rounded-full border border-white/50 bg-white/20 backdrop-blur-xl shadow-[0_0_120px_rgba(16,185,129,0.25)]" />
            {/* Bottle */}

            <div className="relative flex justify-center">
              <HeroSlider
                products={featuredProducts}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>

            {/* Floating Cards */}

            <HeroFloatingCards />
          </motion.div>
        </div>
      </section>
    </>
  );
}
