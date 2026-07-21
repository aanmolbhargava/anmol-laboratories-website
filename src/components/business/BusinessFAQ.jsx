import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Do you provide third-party manufacturing?",
    answer:
      "Yes. We undertake third-party Ayurvedic manufacturing for businesses across India.",
  },
  {
    question: "Can you manufacture under my own brand?",
    answer:
      "Yes. We offer complete private label manufacturing services.",
  },
  {
    question: "Do you supply products in bulk?",
    answer:
      "Yes. Bulk orders are available for distributors and institutions.",
  },
  {
    question: "Can you develop custom formulations?",
    answer:
      "Yes. Depending on requirements and regulatory feasibility.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "Simply submit the enquiry form or contact us through WhatsApp.",
  },
];

export default function BusinessFAQ() {

  const [open, setOpen] = useState(0);

  return (

    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

            FAQ

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Frequently Asked Questions

          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-3xl border bg-white shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <h3 className="text-xl font-bold">

                  {faq.question}

                </h3>

                <HiChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-gray-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}