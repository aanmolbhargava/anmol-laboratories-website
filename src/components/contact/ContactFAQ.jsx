import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Do you ship across India?",
    answer: "Yes, we supply products across India.",
  },

  {
    question: "Can I visit your office?",
    answer: "Yes, appointments can be scheduled during business hours.",
  },

  {
    question: "How quickly do you respond?",
    answer: "Generally within one business day.",
  },

  {
    question: "Do you provide product samples?",
    answer: "Yes, depending upon product availability.",
  },

  {
    question: "Do you manufacture under private labels?",
    answer: "Yes, we provide complete third-party manufacturing services.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F8FBF8] py-24">
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
            <div key={faq.question} className="rounded-3xl bg-white shadow-sm">
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-8 text-left"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>

                <HiChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-8 pb-8 leading-8 text-gray-600">
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
