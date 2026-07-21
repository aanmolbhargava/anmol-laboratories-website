import { AnimatePresence, motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function HeroSlider({
  products,
  activeIndex,
  setActiveIndex,
}) {
  if (!products?.length) return null;

  const previous = () => {
    setActiveIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActiveIndex((prev) =>
      (prev + 1) % products.length
    );
  };

  const product = products[activeIndex];

  return (
    <div className="relative flex items-center justify-center">

      {/* Product Image */}

<div className="relative z-20 flex items-center justify-center">

  {/* Rotating Halo */}

  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[460px] w-[460px] rounded-full border border-green-200/60"
    style={{
      background:
        "conic-gradient(from 0deg, rgba(34,197,94,.15), rgba(6,182,212,.15), rgba(34,197,94,.15))",
    }}
  />

  {/* Glass Circle */}

  <div className="absolute h-[430px] w-[430px] z-20 rounded-full bg-white/40 backdrop-blur-md shadow-[0_0_60px_rgba(34,197,94,.12)]" />

  {/* Product */}

  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 1.5, 0, -1.5, 0],
      scale: [1, 1.02, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-20"
  >
    <AnimatePresence mode="wait">

      <motion.img
        key={product.image}
        src={product.image}
        alt={product.name}
        initial={{
          opacity: 0,
          scale: .9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: .9,
          y: -40,
        }}
        transition={{
          duration: .45,
        }}
        className="h-[520px] object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,.18)]"
      />

    </AnimatePresence>
  </motion.div>

  {/* Reflection */}

  <div className="absolute bottom-10 h-10 w-52 rounded-full bg-black/10 blur-2xl" />

</div>
 
   

      {/* Indicators */}

<div className="absolute -bottom-16 flex gap-4 rounded-full border border-white/50 bg-white/80 px-5 py-3 shadow-xl backdrop-blur-xl">
        {products.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
    className={`transition-all duration-300 rounded-full ${
            activeIndex === i
  ? "h-3 w-10 bg-green-700 shadow-lg"
  : "h-3 w-3 bg-gray-300 hover:bg-green-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}