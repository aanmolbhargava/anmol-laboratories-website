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

<motion.div
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
  }}
>
  <AnimatePresence mode="wait">
    <motion.img
      key={product.image}
      src={product.image}
      alt={product.name}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
        scale: 0.95,
      }}
      transition={{
        duration: 0.45,
      }}
      className="h-[520px] object-contain drop-shadow-2xl"
    />
  </AnimatePresence>
</motion.div>

 
   

      {/* Indicators */}

      <div className="absolute -bottom-12 flex gap-3">
        {products.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className={`h-3 rounded-full transition-all ${
              activeIndex === i
                ? "w-8 bg-green-700"
                : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}