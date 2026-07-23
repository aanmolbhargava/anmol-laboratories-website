import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutConfirmModal({
  open,
  onClose,
  onConfirm,
  subtotal,
  shipping,
  total,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed left-1/2 top-1/2 z-[9999] w-[95%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-3xl font-bold">Confirm Order</h2>

            <p className="mt-3 text-gray-600">
              Your order will be sent to WhatsApp.
            </p>

            <div className="mt-8 space-y-3 rounded-2xl bg-green-50 p-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <strong>{shipping === 0 ? "FREE" : `₹${shipping}`}</strong>
              </div>

              <hr />

              <div className="flex justify-between text-xl">
                <strong>Total</strong>

                <strong className="text-green-700">₹{total}</strong>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 rounded-xl border py-3 font-semibold"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="flex-1 rounded-xl bg-green-700 py-3 font-semibold text-white"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
