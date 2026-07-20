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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-md"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link to="/">
            <img
              src="src/assets/Logo.png"
              alt="Anmol Laboratories"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-semibold transition ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
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
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
    }))
  }
  className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-600 transition hover:border-green-600 hover:text-green-700"
>
  🔍 Search

  
</button>

<Link
  to="/cart"
  className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white transition hover:border-green-700 hover:text-green-700"
>
  <HiOutlineShoppingCart className="text-2xl" />

  {cart.length > 0 && (
    <span
      className="
        absolute
        -right-2
        -top-2
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        bg-red-600
        text-xs
        font-bold
        text-white
      "
    >
      {cart.length}
    </span>
  )}
</Link>
            <Link
              to="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Enquire Now
            </Link>

          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
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