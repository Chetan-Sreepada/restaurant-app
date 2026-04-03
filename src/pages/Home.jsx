import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const tableNum = new URLSearchParams(window.location.search).get("table");

const HIGHLIGHTS = [
  { icon: "🍛", label: "Indian",  sub: "Classics"   },
  { icon: "🥗", label: "Fresh",   sub: "Starters"   },
  { icon: "🥤", label: "Craft",   sub: "Beverages"  },
  { icon: "🍮", label: "House",   sub: "Desserts"   },
];

const SPECIALS = [
  { name: "Butter Chicken",  tag: "Chef's Pick",  desc: "Tender chicken in a velvety tomato-cream sauce.",  emoji: "🍛", price: "₹380", color: "#FFF3EC" },
  { name: "Paneer Tikka",    tag: "Bestseller",   desc: "Smoky marinated cottage cheese with mint chutney.", emoji: "🧀", price: "₹280", color: "#ECFFF6" },
  { name: "Mango Lassi",     tag: "Seasonal",     desc: "Chilled alphonso mango blended with thick curd.",   emoji: "🥭", price: "₹120", color: "#FFFBEC" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__dots" />
        </div>

        <div className="hero__content">
          {tableNum && (
            <div className="anim-fade-up">
              <span className="table-badge hero__table-badge">🪑 Welcome, Table {tableNum}!</span>
            </div>
          )}
          <p className="section-label anim-fade-up delay-1">Est. 2010 · Hyderabad</p>
          <h1 className="hero__title anim-fade-up delay-2">
            Where Every Bite<br />
            <span className="hero__title-accent">Tells a Story</span>
          </h1>
          <p className="hero__tagline anim-fade-up delay-3">
            Delicious food delivered to your table — crafted with love, served with pride.
          </p>
          <div className="hero__actions anim-fade-up delay-4">
            <button className="btn-primary" onClick={() => navigate("/menu")}>
              📋 View Menu
            </button>
          </div>
          <div className="hero__highlights anim-fade-up delay-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="highlight-chip" onClick={() => navigate("/menu")}>
                <span className="highlight-chip__icon">{h.icon}</span>
                <div>
                  <div className="highlight-chip__label">{h.label}</div>
                  <div className="highlight-chip__sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual anim-scale-in delay-2">
          <div className="hero__plate">
            <span className="hero__plate-emoji">🍽️</span>
            <div className="hero__plate-ring hero__plate-ring--1" />
            <div className="hero__plate-ring hero__plate-ring--2" />
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="specials">
        <div className="specials__header">
          <div>
            <p className="section-label">Limited Availability</p>
            <h2 className="specials__title">Today's Specials</h2>
          </div>
          <button className="btn-outline" onClick={() => navigate("/menu")}>See All</button>
        </div>
        <div className="specials__grid">
          {SPECIALS.map((s, i) => (
            <div key={s.name} className="special-card anim-fade-up" style={{ animationDelay: `${i * 0.1}s`, background: s.color }}>
              <div className="special-card__emoji">{s.emoji}</div>
              <span className="special-card__tag">{s.tag}</span>
              <h3 className="special-card__name">{s.name}</h3>
              <p className="special-card__desc">{s.desc}</p>
              <div className="special-card__footer">
                <span className="special-card__price">{s.price}</span>
                <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }} onClick={() => navigate("/menu")}>Order</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience strip */}
      <section className="exp-strip">
        {[
          { icon: "⚡", label: "Fast Service",      sub: "Avg. 12 min delivery"  },
          { icon: "🌿", label: "Fresh Ingredients", sub: "Sourced locally daily"  },
          { icon: "🏆", label: "Award Winning",     sub: "Best Restaurant 2024"   },
          { icon: "💳", label: "Easy Payment",      sub: "Pay at table or online" },
        ].map((e) => (
          <div key={e.label} className="exp-item">
            <span className="exp-item__icon">{e.icon}</span>
            <div>
              <div className="exp-item__label">{e.label}</div>
              <div className="exp-item__sub">{e.sub}</div>
            </div>
          </div>
        ))}
      </section>

      <footer className="home-footer">
        <p>© 2024 Rest · Made with ❤️ in Hyderabad</p>
      </footer>
    </div>
  );
}