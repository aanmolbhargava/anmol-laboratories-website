import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import logo from "../../assets/Logo.png";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Manufacturing", path: "/manufacturing" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <NavLink to="/">
          <img
            src={logo}
            alt="Anmol Laboratories"
            className="h-12 w-auto"
          />
        </NavLink>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

        </nav>

        {/* CTA */}

        <a
          href="https://wa.me/919696765887"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 lg:block"
        >
          Enquire Now
        </a>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiOutlineX size={28} />
          ) : (
            <HiOutlineMenuAlt3 size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t bg-white lg:hidden">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block border-b px-6 py-4 hover:bg-green-50"
            >
              {item.title}
            </NavLink>
          ))}

          <div className="p-5">

            <a
              href="https://wa.me/919696765887"
              className="block rounded-xl bg-green-700 py-3 text-center font-semibold text-white"
            >
              Enquire Now
            </a>

          </div>

        </div>
      )}

    </header>
  );
}