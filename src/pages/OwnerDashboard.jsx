import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function OwnerDashboard() {
  const [orders, setOrders] = useState([]);

  // Fetch existing orders
  const fetchOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    setOrders(data || []);
  };

  useEffect(() => {
    fetchOrders();

    // Realtime listener
    const channel = supabase
      .channel("orders-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          setOrders((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-4 mb-3">
            <p>Table: {order.table_number}</p>
            <p>Status: {order.status}</p>

            <ul>
              {order.items?.map((item, i) => (
                <li key={i}>
                  {item.name} x {item.qty}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}