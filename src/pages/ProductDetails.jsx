import { useParams, Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import { getProduct } from "../utils/getProduct";

export default function ProductDetails() {

  const { slug } = useParams();

  const product = getProduct(slug);

  if (!product) {
    return (
      <div className="py-32 text-center">
        Product not found
      </div>
    );
  }

  return (

    <section className="bg-white py-20">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <div>

          <img
            src={product.image}
            className="mx-auto h-[500px] object-contain"
          />

        </div>

        <div>

          <Link
            to="/products"
            className="mb-6 inline-flex items-center gap-2 text-green-700"
          >
            <HiOutlineArrowLeft />

            Back to Products

          </Link>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            {product.category}

          </span>

          <h1 className="mt-6 text-5xl font-black">

            {product.name}

          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            {product.description}

          </p>

          <div className="mt-10">

            <h3 className="text-xl font-bold">

              Key Benefits

            </h3>

            <ul className="mt-5 space-y-3">

              {product.benefits.map((item) => (

                <li key={item}>

                  ✔ {item}

                </li>

              ))}

            </ul>

          </div>

          <div className="mt-10">

            <a
              href={`https://wa.me/919696765887?text=I am interested in ${product.name}`}
              className="rounded-xl bg-green-700 px-7 py-4 font-semibold text-white"
            >

              Enquire on WhatsApp

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}