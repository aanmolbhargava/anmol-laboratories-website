import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineTrash,
  HiMinus,
  HiPlus,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import { useCart } from "../context/CartContext";
import PriceTag from "../components/common/PriceTag";
import CheckoutForm from "../components/cart/CheckoutForm";
import company from "../data/company";
import { createOrderMessage } from "../utils/createOrderMessage";

export default function Cart() {
const {
  cart,
  subtotal,
  shipping,
  total,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} = useCart();

  const amountForFreeShipping = Math.max(499 - subtotal, 0);

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border bg-white p-16 text-center shadow-sm"
        >
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
            <HiOutlineShoppingCart className="text-5xl text-green-700" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mx-auto mt-4 max-w-md text-lg text-gray-600">
            Add products to your cart and place your order through WhatsApp.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }
const handleCheckout = (customer) => {

  if (subtotal < 499) {

    const proceed = window.confirm(
      "Orders below ₹499 will incur ₹100 shipping charges.\n\nDo you want to continue?"
    );

    if (!proceed) return;
  }

  const confirmOrder = window.confirm(
    "Proceed to WhatsApp to place your order?"
  );

  if (!confirmOrder) return;

  const message = createOrderMessage(
    customer,
    cart,
    subtotal,
    shipping,
    total
  );

  window.open(
    `https://wa.me/${company.whatsapp}?text=${message}`,
    "_blank"
  );



};
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <Link
          to="/products"
          className="hidden rounded-xl border px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 lg:block"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="mb-6 rounded-3xl border bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex h-36 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 p-4 lg:w-36">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="mt-2 text-gray-500">
                          {item.packSize}
                        </p>

                        <div className="mt-4">
                          <PriceTag
                            mrp={item.mrp}
                            price={item.price}
                          />
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          Item Total
                        </p>

                        <p className="text-3xl font-bold text-gray-900">
                          ₹{item.qty * item.price}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-700">
                          Quantity
                        </span>

                        <div className="flex items-center rounded-xl border bg-white">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="rounded-l-xl p-3 transition hover:bg-gray-50"
                          >
                            <HiMinus />
                          </button>

                          <motion.span
                            key={item.qty}
                            initial={{ scale: 0.7 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 text-center text-lg font-bold"
                          >
                            {item.qty}
                          </motion.span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="rounded-r-xl p-3 transition hover:bg-gray-50"
                          >
                            <HiPlus />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        <HiOutlineTrash />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <CheckoutForm onSubmit={handleCheckout} />
        </div>

        <div>
          <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 rounded-2xl bg-blue-50 p-5">

  <h3 className="font-bold text-blue-800">

    🚚 Dispatch Information

  </h3>

  <p className="mt-2 text-sm leading-6 text-blue-700">

    Orders are generally dispatched within 24–48 working hours after confirmation.
    Our team will contact you on WhatsApp for payment confirmation and shipping details.

  </p>

</div>

            <div className="space-y-5">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span className="text-gray-600">
                  Shipping
                </span>

                <span className={`font-semibold ${shipping === 0 ? "text-green-700" : "text-gray-900"}`}>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
            </div>

            <hr className="my-8" />

            <div className="mb-8 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                Total
              </span>

              <span className="text-3xl font-bold text-green-700">
                ₹{total}
              </span>
            </div>

            {shipping === 0 ? (
              <div className="mb-8 rounded-2xl bg-green-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    🚚
                  </div>

                  <div>
                    <p className="font-bold text-green-800">
                      Free Shipping PAN INDIA
                    </p>

                    <p className="text-sm text-green-700">
                      Your order qualifies for free delivery
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-8 rounded-2xl bg-yellow-50 p-5">
                <p className="font-bold text-yellow-800">
                  Add ₹{amountForFreeShipping} more for FREE Shipping
                </p>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-yellow-200">
                  <div
                    className="h-full rounded-full bg-yellow-500 transition-all duration-500"
                    style={{
                      width: `${Math.min((subtotal / 499) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}

  <button
  type="button"
  onClick={() => {
    document
      .querySelector("form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="w-full rounded-xl bg-green-700 py-4 font-semibold text-white hover:bg-green-800"
>
Proceed to Checkout
</button>

            <Link
              to="/products"
              className="mt-4 block text-center font-semibold text-green-700 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}