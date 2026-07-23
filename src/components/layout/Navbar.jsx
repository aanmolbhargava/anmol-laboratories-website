import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Business Enquiry", path: "/business-enquiry" },

];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const { cart } = useCart();
const cartCount = cart.reduce(
  (sum, item) => sum + item.qty,
  0
);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
 <header
  className={`sticky top-0 z-50 border-b transition-all duration-500 ${
    scrolled
      ? "border-green-100 bg-white/80 backdrop-blur-xl shadow-lg"
      : "border-transparent bg-white"
  }`}
>
 <div
  className={`mx-auto flex max-w-[1450px] items-center justify-between px-8 transition-all duration-300 ${
    scrolled ? "h-16" : "h-20"
  }`}
>


          <motion.img
  src="/Logo.png"
  alt="Anmol Laboratories"
  animate={{
    scale: scrolled ? 0.9 : 1,
  }}
  transition={{ duration: 0.3 }}
  className={`w-auto transition-all duration-300 ${
    scrolled ? "h-10" : "h-12"
  }`}
/>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative font-semibold transition-all duration-300 hover:-translate-y-0.5"
                
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-green-700" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
<button
  onClick={() =>
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        ctrlKey: true,
      })
    )
  }
  className="group flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-green-500 hover:bg-white hover:text-green-700 hover:shadow-md"
>
  <span className="text-base">🔍</span>

  <span>Search Products</span>
</button>

<Link
  to="/cart"
className="group relative flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 transition-all duration-300 hover:border-green-600 hover:shadow-md"

>
 <HiOutlineShoppingCart className="text-2xl text-green-700" />

<div className="hidden 2xl:block text-left">
  <p className="text-xs text-gray-500">Cart</p>
  <p className="text-sm font-bold">{cartCount} item{cartCount !== 1 ? "s" : ""}</p>
</div>

{cartCount > 0 && (
  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
    {cartCount}
  </span>
)}
</Link>
            <Link
              to="/contact"
            className="rounded-full bg-gradient-to-r from-green-700 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Enquire Now
            </Link>

          </nav>

          <button
            onClick={() => setMobileOpen(true)}
          className="rounded-xl p-2 transition hover:bg-green-50 lg:hidden"
          >
            <HiMenuAlt3 size={30} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-[60] transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">

            <img
              src="/logo/logo-icon.png"
              className="h-12"
              alt=""
            />

            <button
              onClick={() => setMobileOpen(false)}
            >
              <HiX size={28} />
            </button>

          </div>

          <div className="space-y-5">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 font-semibold hover:bg-green-50"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 block rounded-xl bg-green-700 py-3 text-center font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}