import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrderTimeline from "./OrderTimeline";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Packed: "bg-purple-100 text-purple-700",
  Shipped: "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderCard({ order }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-3xl border bg-white shadow-sm overflow-hidden"
    >
      <div className="p-8">
        <div className="flex flex-wrap justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">
              Order #{order.id.slice(0, 8)}
            </h2>

            <p className="mt-2 text-gray-500">
              {order.createdAt?.toDate
                ? order.createdAt.toDate().toLocaleDateString()
                : "Just Now"}
            </p>
          </div>

          <div className="text-right">
            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                statusColors[order.status] || "bg-gray-100 text-gray-700"
              }`}
            >
              {order.status}
            </span>

            <h3 className="mt-4 text-4xl font-bold text-green-700">
              ₹{order.total}
            </h3>
            <OrderTimeline status={order.status} />
            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800">
                Reorder
              </button>

              <button className="rounded-xl border px-6 py-3 font-semibold hover:bg-gray-50">
                Download Invoice
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <p className="text-gray-500">{order.products.length} Products</p>

          <button
            onClick={() => setOpen(!open)}
            className="font-semibold text-green-700"
          >
            {open ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="border-t"
          >
            <div className="space-y-5 p-8">
              {order.products.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      className="h-20 w-20 rounded-xl object-contain bg-green-50 p-2"
                    />

                    <div>
                      <h3 className="font-bold">{item.name}</h3>

                      <p className="text-gray-500">{item.packSize}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    Qty : {item.qty}
                    <br />₹{item.qty * item.price}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
