import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "../styles/cart.css";

const getTableNumber = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("table") || "N/A";
};

export default function Cart({ cart, updateQty, removeItem, clearCart }) {
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const tableNum = getTableNumber();

  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  const formattedItems = cart.map((item) => ({
    name: item.name,
    qty: item.qty,
    price: item.price,
  }));

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    setLoading(true);

    const { error } = await supabase.from("orders").insert([
      {
        table_number: tableNum,
        items: formattedItems,
        total: total,
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("❌ Failed to place order");
      return;
    }

    alert("✅ Order placed successfully!");
    clearCart();
    setOrdered(true);
  };

  if (!ordered && cart.length === 0) {
    return (
      <div className="cart-page cart-empty">
        <div>🛒</div>
        <h2>Your cart is empty</h2>
        <p>Browse our menu and find something delicious!</p>
        <button className="btn-primary" onClick={() => navigate("/menu")}>
          Browse Menu
        </button>
      </div>
    );
  }

  if (ordered) {
    return (
      <div className="cart-page order-success">
        <div>✅</div>
        <h2>Order Placed!</h2>
        <p>Your order is on its way to <strong>Table {tableNum}</strong></p>
        <p>Estimated time: <strong>20–30 minutes</strong>.</p>
        <button className="btn-primary" onClick={() => navigate("/menu")}>
          Order More
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <span>🪑 Table {tableNum}</span>
      </div>

      <div className="cart-layout">
        <div className="cart-items-col">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.qty}</p>
              <div className="item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, +1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Bill</h2>
          <p>Subtotal: ₹{subtotal}</p>
          <p>GST: ₹{tax}</p>
          <h3>Total: ₹{total}</h3>
          <button onClick={handlePlaceOrder} disabled={loading}>
            {loading ? "Placing..." : `Place Order ₹${total}`}
          </button>
        </div>
      </div>
    </div>
  );
}