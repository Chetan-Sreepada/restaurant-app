import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const tableNum = new URLSearchParams(window.location.search).get("table");

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="navbar__logo">
        <div className="navbar__logo-icon">🍽</div>
        <span>Rest</span>
      </NavLink>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? "active" : ""}`}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => `navbar__link ${isActive ? "active" : ""}`}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Menu</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => `navbar__link ${isActive ? "active" : ""}`} style={{ position: "relative" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="navbar__cart-badge" key={cartCount}>{cartCount}</span>
            )}
          </NavLink>
        </li>
      </ul>

      {tableNum && (
        <div className="navbar__table">
          <span className="table-badge">🪑 Table {tableNum}</span>
        </div>
      )}
    </nav>
  );
}