import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";
import company from "../data/company";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in your Ayurvedic products. Please share more details."
  );

  return (
    <section className="bg-[#F8FBF8] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            CONTACT US
          </span>

          <h1 className="mt-5 text-5xl font-black text-gray-900">
            Let's Discuss Your Requirements
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Looking for quality Ayurvedic formulations? Our team is ready to
            assist with product information and business enquiries.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <HiOutlinePhone className="mb-4 text-green-700" size={34} />
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="mt-2">{company.phone}</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <HiOutlineMail className="mb-4 text-green-700" size={34} />
              <h3 className="text-xl font-bold">Email</h3>
              <p className="mt-2">{company.email}</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <HiOutlineClock className="mb-4 text-green-700" size={34} />
              <h3 className="text-xl font-bold">Business Hours</h3>
              <p className="mt-2">
                Monday – Saturday
                <br />
                9:00 AM – 5:30 PM
              </p>
            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="text-3xl font-bold">
              Quick WhatsApp Enquiry
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              The fastest way to connect with us is via WhatsApp.
              Send us your enquiry and we'll respond as soon as possible.
            </p>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
            >
              <HiOutlineChatAlt2 size={24} />
              Start WhatsApp Chat
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}