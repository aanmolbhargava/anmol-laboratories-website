import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import company from "../../data/company";
import { createWhatsAppLink } from "../../utils/whatsapp";

export default function Footer() {
  // const whatsappURL = createWhatsAppLink(company.whatsapp);
  const whatsappURL = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=Hello%20Anmol%20Laboratories,%20I%20would%20like%20to%20know%20more%20about%20your%20products.`;

  return (
    <footer className="bg-gradient-to-b from-[#103A2D] to-[#0A2A20] text-white">
      {/* ===================== TOP ===================== */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Company */}

          <div>
            <img src="/logo.png" alt="Anmol Laboratories" className="h-16" />

            <h3 className="mt-6 text-2xl font-bold leading-tight">
              Your Trusted
              <br />
              Herbal Health Partner
            </h3>

            <p className="mt-5 leading-8 text-green-100">
              Manufacturer of Herbal Based Formulation Drugs & Medicines,
              committed to quality, innovation and customer satisfaction since
              2001.
            </p>

            <div className="mt-8 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-green-700"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Quick Links</h3>

            <div className="space-y-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Business Enquiry", "/business-enquiry"],
                ["Contact", "/contact"],
              ].map(([title, url]) => (
                <Link
                  key={title}
                  to={url}
                  className="flex items-center gap-2 text-green-100 transition hover:translate-x-1 hover:text-white"
                >
                  <HiOutlineArrowRight className="text-green-400" />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Product Categories</h3>

            <div className="space-y-4 text-green-100">
              {[
                "Ayurvedic Oils",
                "Syrups",
                "Capsules",
                "Tablets",
                "Powders",
                "Ointments",
              ].map((item) => (
                <p
                  key={item}
                  className="transition hover:translate-x-1 hover:text-white"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Need Assistance?</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <HiOutlinePhone size={22} className="mt-1 text-green-400" />
                <span>{company.phone}</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineMail size={22} className="mt-1 text-green-400" />
                <span>{company.email}</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineLocationMarker
                  size={22}
                  className="mt-1 text-green-400"
                />
                <span>{company.office.address}</span>
              </div>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-green-500"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== TRUST STRIP ===================== */}

      <div className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 py-5 text-sm font-semibold text-green-100">
          <span>🏭 GMP Certified</span>

          <span>🌿 Herbal Formulations</span>

          <span>📦 Bulk Manufacturing</span>

          <span>🚚 PAN India Supply</span>

          <span>⭐ Trusted Since 2001</span>
        </div>
      </div>

      {/* ===================== BOTTOM ===================== */}

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-green-100 md:flex-row">
        <p>
          © {new Date().getFullYear()} <strong>Anmol Laboratories</strong>. All
          Rights Reserved.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>

          <span className="text-green-300">Curated with ❤️ by IpsitAnmol</span>
        </div>
      </div>
    </footer>
  );
}
