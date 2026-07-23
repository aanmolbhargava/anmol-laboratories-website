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
import QuantitySelector from "../components/cart/QuantitySelector";
import PageTransition from "../components/common/PageTransition";

export default function Cart() {
  const {
    cart,
    removeItem,
    increaseQty,
    decreaseQty,
    clearCart,
    subtotal,
    shipping,
    total,
  } = useCart();

  const amountForFreeShipping = Math.max(499 - subtotal, 0);
  // const clearCart = () => {
  //   setCart([]);
  //   toast.success("Cart cleared successfully 🗑️");
  // };

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
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
      </motion.div>
    );
  }
  const handleCheckout = (customer) => {
    if (subtotal < 499) {
      const proceed = window.confirm(
        "Orders below ₹499 will incur ₹100 shipping charges.\n\nDo you want to continue?",
      );

      if (!proceed) return;
    }

    const confirmOrder = window.confirm(
      "Proceed to WhatsApp to place your order?",
    );

    if (!confirmOrder) return;

    const message = createOrderMessage(
      customer,
      cart,
      subtotal,
      shipping,
      total,
    );

    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Shopping Cart 🛒
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Review your products before placing the order.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden rounded-xl border px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 lg:block"
          >
            ← Continue Shopping
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
                  className="mb-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 via-white to-cyan-50 p-6 lg:w-44">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-40 w-40 object-contain transition duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      {/* Product Details */}

                      <div>
                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900">
                          {item.name}
                        </h2>

                        <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-400">
                          {item.packSize}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            🚚 PAN India
                          </span>

                          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                            GMP Certified
                          </span>
                        </div>

                        <div className="mt-5">
                          <PriceTag mrp={item.mrp} price={item.price} />
                        </div>
                      </div>

                      {/* Bottom Row */}

                      <div className="mt-8 border-t pt-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="mb-3 font-semibold text-gray-700">
                              Quantity
                            </p>

                            <QuantitySelector
                              qty={item.qty}
                              onIncrease={() => increaseQty(item.id)}
                              onDecrease={() => decreaseQty(item.id)}
                            />
                          </div>

                          <div className="text-right">
                            <p className="text-xs uppercase tracking-[3px] text-gray-400">
                              Item Total
                            </p>

                            <h3 className="mt-1 text-4xl font-bold text-green-700">
                              ₹{item.qty * item.price}
                            </h3>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          <HiOutlineTrash />
                          Remove Item
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
            <div className="sticky top-28">
              <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Order Summary
                </h2>

                {/* PRICE */}

                <div className="space-y-5">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-semibold">₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-lg">
                    <span className="text-gray-500">Shipping</span>

                    <span
                      className={`font-semibold ${
                        shipping === 0 ? "text-green-700" : "text-gray-900"
                      }`}
                    >
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <hr className="my-8" />

                <div className="flex items-center justify-between">
                  {subtotal > 0 && (
                    <div className="mt-6 rounded-2xl bg-yellow-50 border border-yellow-200 p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total Savings</span>

                        <span className="text-xl font-bold text-green-700">
                          ₹
                          {cart.reduce(
                            (total, item) =>
                              total + (item.mrp - item.price) * item.qty,
                            0,
                          )}
                        </span>
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold">Total</h3>
                  <h2 className="text-3xl md:text-4xl font-black text-green-700 text-right">
                    ₹{total}
                  </h2>
                </div>

                {/* SHIPPING */}

                <div className="mt-8 rounded-2xl bg-green-50 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Free Shipping</span>

                    <span className="font-bold">₹499</span>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-green-100">
                    <div
                      className="h-full rounded-full bg-green-600 transition-all duration-500"
                      style={{
                        width: `${Math.min((subtotal / 499) * 100, 100)}%`,
                      }}
                    />
                  </div>

                  {shipping === 0 ? (
                    <p className="mt-3 text-sm font-semibold text-green-700">
                      🎉 Congratulations! Your order qualifies for FREE
                      Shipping.
                    </p>
                  ) : (
                    <p className="mt-3 text-sm text-gray-600">
                      Add
                      <span className="font-bold text-green-700">
                        {" "}
                        ₹{amountForFreeShipping}{" "}
                      </span>
                      more for FREE Shipping.
                    </p>
                  )}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 p-5 text-white">
                  <h3 className="font-bold text-lg">🔒 Safe Ordering</h3>

                  <p className="mt-2 text-green-100">
                    Orders are confirmed personally through WhatsApp before
                    dispatch.
                  </p>
                </div>

                {/* TRUST */}

                <div className="mt-8 space-y-4 rounded-2xl border bg-gray-50 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚚</span>

                    <div>
                      <h4 className="font-semibold">PAN India Delivery</h4>

                      <p className="text-sm text-gray-500">
                        Safe & Secure Shipping
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏭</span>

                    <div>
                      <h4 className="font-semibold">
                        GMP Certified Manufacturer
                      </h4>

                      <p className="text-sm text-gray-500">Since 2001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xl">💬</span>

                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Order Confirmation
                      </h4>

                      <p className="text-sm text-gray-500">
                        Payment after confirmation
                      </p>
                    </div>
                  </div>
                </div>

                {/* CHECKOUT */}
                <button
                  onClick={clearCart}
                  className="mt-6 w-full rounded-xl border border-red-200 py-3 font-semibold text-red-600 transition hover:bg-red-50"
                >
                  🗑 Clear Entire Cart
                </button>

                <Link
                  to="/products"
                  className="mt-5 block text-center font-semibold text-green-700 hover:underline"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
