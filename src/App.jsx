import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard"; // Owner Dashboard
import FloatingCart from "./components/FloatingCart";

import "./styles/global.css";

export default function App() {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ✅ Update quantity (+ / -)
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id ? { ...c, qty: c.qty + delta } : c
        )
        .filter((c) => c.qty > 0)
    );
  };

  // ✅ Remove item completely
  const removeItem = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  // ✅ Clear cart after order
  const clearCart = () => setCart([]);

  // ✅ Total items (for navbar + floating cart)
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />

      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🍔 Menu */}
        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              addToCart={addToCart}
            />
          }
        />

        {/* 🛒 Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQty={updateQty}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          }
        />

        {/* 📊 Owner Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* 🟢 Floating Cart Button */}
      <FloatingCart cartCount={cartCount} />
    </BrowserRouter>
  );
}