import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserOrders } from "../services/orderService";
import PageTransition from "../components/common/PageTransition";
import OrderCard from "../components/orders/OrderCard";

export default function Orders() {
  const { currentUser } = useAuth();

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      if (!currentUser) return;

      const data = await getUserOrders(currentUser.uid);

      setOrders(data);

      setLoading(false);
    }

    loadOrders();
  }, [currentUser]);

  if (loading)
    return <div className="py-20 text-center">Loading Orders...</div>;

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="mb-10 text-4xl font-bold">My Orders</h1>

        {orders.length === 0 && (
          <div className="rounded-3xl border bg-white p-12 text-center">
            <h2 className="text-2xl font-bold">No Orders Yet</h2>

            <p className="mt-3 text-gray-500">
              Your placed orders will appear here.
            </p>
          </div>
        )}

        <div className="space-y-8">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
