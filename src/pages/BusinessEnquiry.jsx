import BusinessForm from "../components/forms/BusinessForm";

export default function BusinessEnquiry() {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-cyan-50 py-24">

      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            BUSINESS ENQUIRY
          </span>

          <h1 className="mt-6 text-5xl font-black text-gray-900 leading-tight">

            Third Party Manufacturing & Bulk Orders

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">

            Looking for a reliable Ayurvedic manufacturing partner?

            We undertake contract manufacturing, third-party manufacturing,
            private labeling and bulk supply for Ayurvedic formulations.

          </p>

          <div className="mt-10 space-y-5">

            <div className="rounded-2xl bg-white p-5 shadow">

              ✓ Third Party Manufacturing

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              ✓ Contract Manufacturing

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              ✓ Private Label Manufacturing

            </div>

            <div className="rounded-2xl bg-white p-5 shadow">

              ✓ Bulk Orders

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <BusinessForm />

      </div>

    </section>
  );
}