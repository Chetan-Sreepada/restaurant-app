import React, { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "../data/menuData";
import "../styles/menu.css";

export default function Menu({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quantities, setQuantities] = useState({}); // {id: qty}

  const handleAdd = (item) => {
    setQuantities((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    addToCart(item, 1);
  };

  const handleIncrement = (item) => {
    setQuantities((prev) => ({
      ...prev,
      [item.id]: prev[item.id] + 1,
    }));
    addToCart(item, 1);
  };

  const handleDecrement = (item) => {
    setQuantities((prev) => {
      const newQty = prev[item.id] - 1;
      if (newQty <= 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item.id]: newQty };
    });
    addToCart(item, -1);
  };

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <h1 className="menu-heading">Our Menu</h1>

      <div className="category-buttons">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="emoji">{item.emoji}</div>
            <div className="item-details">
              <h3 className="item-name">
                {item.name}{" "}
                {item.badge && <span className="badge">{item.badge}</span>}
              </h3>
              <p className="item-desc">{item.desc}</p>
              <p className="item-price">₹{item.price}</p>
            </div>
            <div className="item-action">
              {quantities[item.id] ? (
                <div className="quantity-control">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{quantities[item.id]}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => handleAdd(item)}>
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}