import { motion } from "framer-motion";

const steps = [
  "Business Discussion",
  "Requirement Analysis",
  "Quotation & Approval",
  "Manufacturing",
  "Quality Check",
  "Packaging & Delivery",
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From your first enquiry to product delivery,
            we maintain complete transparency and quality.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-6">

          {steps.map((step, index) => (

            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative text-center"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-700 text-3xl font-black text-white shadow-lg">

                {index + 1}

              </div>

              <h3 className="mt-6 font-bold text-gray-900">

                {step}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}