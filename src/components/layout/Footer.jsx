import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";
import company from "../../data/company";

export default function Footer() {
  return (
    <footer className="bg-[#0E3B2E] text-white">
      {/* TOP */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}

          <div>
            <img src="/logo.png" alt="Anmol Laboratories" className="h-16" />

            <h3 className="mt-6 text-2xl font-bold">
              Your Trusted Herbal Health Partner
            </h3>

            <p className="mt-5 leading-8 text-green-100">
              Manufacturer of Ayurvedic & Herbal Formulations since 2001,
              committed to quality, innovation and customer satisfaction.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-700"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-700"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>

            <div className="space-y-4">
              <Link to="/">Home</Link>
              <br />

              <Link to="/about">About</Link>
              <br />

              <Link to="/products">Products</Link>
              <br />

              <Link to="/business-enquiry">Business Enquiry</Link>
              <br />

              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Categories */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Product Categories</h3>

            <div className="space-y-4 text-green-100">
              <p>Ayurvedic Oils</p>

              <p>Syrups</p>

              <p>Capsules</p>

              <p>Tablets</p>

              <p>Powders</p>

              <p>Ointments</p>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold">Contact</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <HiOutlinePhone size={22} />

                <span>{company.phone}</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineMail size={22} />

                <span>{company.email}</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineLocationMarker size={22} />

                <span>{company.office.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 py-6 text-sm font-semibold text-green-100">
          <span>🏭 GMP Certified</span>

          <span>🌿 Herbal Formulations</span>

          <span>🚚 PAN India Delivery</span>

          <span>⭐ Trusted Since 2001</span>
        </div>
      </div>

      {/* Bottom */}

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-green-100 md:flex-row">
        <p>
          © {new Date().getFullYear()} Anmol Laboratories. All Rights Reserved.
        </p>

        <p>Curated with ❤️ by IpsitAnmol</p>
      </div>
    </footer>
  );
}
