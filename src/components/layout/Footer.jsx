import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import company from "../../data/company";

export default function Footer() {

  return (

    <footer className="bg-slate-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Company */}

        <div>

          <img
            src="/logo.png"
            alt="logo"
            className="mb-6 h-14"
          />

          <p className="leading-8 text-gray-300">

            Quality Ayurvedic formulations for healthcare,
            wellness, third-party manufacturing and bulk supply.

          </p>

        </div>

        {/* Products */}

        <div>

          <h3 className="mb-6 text-xl font-bold">

            Products

          </h3>

          <div className="space-y-3">

            <Link to="/products">All Products</Link><br/>

            <Link to="/products">Syrups</Link><br/>

            <Link to="/products">Capsules</Link><br/>

            <Link to="/products">Tablets</Link><br/>

            <Link to="/products">Oils</Link>

          </div>

        </div>

        {/* Business */}

        <div>

          <h3 className="mb-6 text-xl font-bold">

            Business

          </h3>

          <div className="space-y-3">

            <Link to="/business-enquiry">

              Third Party Manufacturing

            </Link><br/>

            <Link to="/business-enquiry">

              Bulk Orders

            </Link><br/>

            <Link to="/contact">

              Contact

            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-6 text-xl font-bold">

            Contact

          </h3>

          <div className="space-y-4">

            <div className="flex gap-3">

              <FaWhatsapp />

              {company.phone}

            </div>

            <div className="flex gap-3">

              <FaEnvelope />

              {company.email}

            </div>

            <div className="flex gap-3">

              <FaMapMarkerAlt />

              {company.address}

            </div>

          </div>

        </div>

      </div>

     <div className="border-t border-slate-700">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-400 md:flex-row">

    <p>
      © {new Date().getFullYear()} Anmol Laboratories.
      All Rights Reserved.
    </p>

    <p className="flex items-center gap-1">

      Crafted with

      <span className="text-red-500 text-base">❤️</span>

      by

      <span className="font-semibold text-white">

       IpsitAnmol

      </span>

    </p>

  </div>

</div>

    </footer>

  );

}