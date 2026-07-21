import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import company from "../../data/company";

export default function BusinessCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-800 via-green-700 to-emerald-700">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center shadow-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            READY TO START?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Let's Build Your Ayurvedic Brand Together

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">

            Whether you need third-party manufacturing,
            private labelling, bulk supply or product consultation,
            our experts are ready to help.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/business-enquiry"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
            >
              Business Enquiry
            </Link>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              WhatsApp Now
              <HiOutlineArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}