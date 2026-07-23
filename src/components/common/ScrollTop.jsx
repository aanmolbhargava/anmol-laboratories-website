import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-28 right-6 z-[999] rounded-full bg-green-700 p-4 text-white shadow-xl hover:bg-green-800"
    >
      <HiArrowUp size={22} />
    </motion.button>
  );
}
