import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            CLIENT FEEDBACK
          </span>

          <h2 className="mt-5 text-5xl font-black text-gray-900">
            What Our Partners Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Trusted by distributors, retailers and healthcare partners across India.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-gray-100 bg-[#F8FBF8] p-10 shadow-sm"
            >

              <div className="mb-5 flex">

                {Array.from({ length: item.rating }).map((_, i) => (

                  <HiStar
                    key={i}
                    size={22}
                    className="text-yellow-500"
                  />

                ))}

              </div>

              <p className="leading-8 text-gray-600 italic">

                "{item.review}"

              </p>

              <div className="mt-8">

                <h4 className="font-bold text-gray-900">

                  {item.name}

                </h4>

                <p className="text-green-700">

                  {item.city}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}