import { useState } from "react";

export default function ProductTabs({ product }) {

  const tabs = [
    "Description",
    "Benefits",
    "Ingredients",
    "Usage",
    "FAQ",
  ];

  const [active, setActive] = useState("Description");

  return (
    <section className="mt-16">

      <div className="flex flex-wrap gap-3 border-b">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-t-xl px-6 py-4 font-semibold transition

            ${
              active === tab
                ? "bg-green-700 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      <div className="rounded-b-3xl rounded-tr-3xl border bg-white p-8 shadow-sm">

        {active === "Description" && (
          <p className="leading-8 text-gray-700">
            {product.description}
          </p>
        )}

        {active === "Benefits" && (

          <div className="grid gap-4 md:grid-cols-2">

            {product.benefits.map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-green-50 p-5"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        )}

        {active === "Ingredients" && (

          <div className="grid gap-4 md:grid-cols-3">

            {product.ingredients.map((item) => (

              <div
                key={item.name || item}
                className="rounded-2xl border p-5 text-center"
              >
                <div className="text-3xl">
                  🌿
                </div>

                <h3 className="mt-3 font-bold">
                  {item.name || item}
                </h3>

                {item.benefit && (
                  <p className="mt-2 text-sm text-gray-500">
                    {item.benefit}
                  </p>
                )}
              </div>

            ))}

          </div>

        )}

        {active === "Usage" && (

          <div className="space-y-8">

            <div>

              <h3 className="text-xl font-bold">
                Dosage
              </h3>

              <p className="mt-3 leading-8 text-gray-700">
                {product.dosage}
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold">
                Storage
              </h3>

              <p className="mt-3 leading-8 text-gray-700">
                {product.storage}
              </p>

            </div>

          </div>

        )}

        {active === "FAQ" && (

          <div className="space-y-5">

            {product.faqs.map((faq) => (

              <div
                key={faq.question}
                className="rounded-2xl border p-5"
              >

                <h3 className="font-bold">
                  {faq.question}
                </h3>

                <p className="mt-3 text-gray-600">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}