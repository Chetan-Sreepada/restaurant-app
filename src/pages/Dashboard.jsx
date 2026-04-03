import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      alert("Failed to fetch orders: " + error.message);
      setLoading(false);
      return;
    }

    setOrders(data);
    setLoading(false);
  };

  // ✅ Update order status
  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert("Failed to update status");
      console.log(error);
    } else {
      fetchOrders();
    }
  };

  // ✅ Realtime
  useEffect(() => {
    fetchOrders();

    const subscription = supabase
      .channel("orders-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "orders" },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // ✅ Split orders
  const activeOrders = orders.filter(
    (o) => o.status !== "served"
  );

  const completedOrders = orders.filter(
    (o) => o.status === "served"
  );

  if (loading) return <div className="page">Loading orders…</div>;

  return (
    <div className="page dashboard-page">
      <h1>Incoming Orders</h1>

      {/* 🟡 ACTIVE ORDERS */}
      <h2>🟡 Active Orders</h2>

      {activeOrders.length === 0 ? (
        <p>No active orders</p>
      ) : (
        <div className="orders-list">
          {activeOrders.map((order) => (
            <div key={order.id} className="order-card">

              <div className="order-header">
                <span>Order #{order.id}</span>
                {order.table_number && (
                  <span>Table {order.table_number}</span>
                )}
              </div>

              <div className="order-items">
                {order.items?.map((item, idx) => (
                  <p key={idx}>
                    {item.qty} × {item.name} (₹{item.price})
                  </p>
                ))}
              </div>

              <div className="order-footer">
                <span>Total: ₹{order.total}</span>
                <span>Status: {order.status}</span>
              </div>

              {/* 🔥 Status Buttons */}
              <div className="order-actions">
                <button onClick={() => updateStatus(order.id, "pending")}>
                  Pending
                </button>

                <button onClick={() => updateStatus(order.id, "preparing")}>
                  Preparing
                </button>

                <button onClick={() => updateStatus(order.id, "served")}>
                  Served
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* ✅ COMPLETED ORDERS */}
      <h2 style={{ marginTop: "30px" }}>✅ Completed Orders</h2>

      {completedOrders.length === 0 ? (
        <p>No completed orders</p>
      ) : (
        <div className="orders-list">
          {completedOrders.map((order) => (
            <div key={order.id} className="order-card completed">

              <div className="order-header">
                <span>Order #{order.id}</span>
                {order.table_number && (
                  <span>Table {order.table_number}</span>
                )}
              </div>

              <div className="order-items">
                {order.items?.map((item, idx) => (
                  <p key={idx}>
                    {item.qty} × {item.name}
                  </p>
                ))}
              </div>

              <div className="order-footer">
                <span>Total: ₹{order.total}</span>
                <span>✅ Served</span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}