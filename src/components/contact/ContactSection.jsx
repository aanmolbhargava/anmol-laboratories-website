import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-[#F8FBF8] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* Left */}

        <div className="rounded-[32px] bg-white p-10 shadow-xl">
          <div className="mb-8">
            <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              SEND ENQUIRY
            </span>

            <h2 className="mt-6 text-4xl font-black">
              We'd Love to Hear From You
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Fill in the form and our team will contact you shortly.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Right */}

        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <iframe
            title="Anmol Laboratories"
            src="https://www.google.com/maps?q=Kanpur,+Uttar+Pradesh&output=embed"
            className="h-full min-h-[620px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
