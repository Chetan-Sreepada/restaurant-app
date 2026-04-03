export const MENU_ITEMS = [
  // Starters
  { id: 1, name: "Paneer Tikka", price: 280, category: "Starters", desc: "Smoky grilled paneer cubes marinated with ginger-garlic and mint chutney notes.", emoji: "🧀", rating: 4.8, time: "15 min", veg: true, badge: "Bestseller" },
  { id: 2, name: "Chicken 65", price: 320, category: "Starters", desc: "Crispy chicken tossed in spicy Chettinad-style masala for a bold, tangy bite.", emoji: "🍗", rating: 4.7, time: "18 min", veg: false },
  { id: 3, name: "Veg Spring Rolls", price: 180, category: "Starters", desc: "Golden, crunchy rolls stuffed with seasoned vegetables and a sweet-spicy dip.", emoji: "🥢", rating: 4.3, time: "12 min", veg: true },
  { id: 4, name: "Mutton Seekh Kebab", price: 380, category: "Starters", desc: "Aromatic minced mutton skewers, char-grilled in a tandoor for a smoky finish.", emoji: "🍢", rating: 4.9, time: "20 min", veg: false },
  { id: 5, name: "Hara Bhara Kabab", price: 220, category: "Starters", desc: "Spinach and pea patties with a tangy tamarind dip and aromatic herbs.", emoji: "🥗", rating: 4.5, time: "14 min", veg: true },
  { id: 6, name: "Crispy Gobi Manchurian", price: 240, category: "Starters", desc: "Cauliflower florets tossed in a bold Indo-Chinese manchurian glaze with crunchy texture.", emoji: "🥦", rating: 4.6, time: "16 min", veg: true },
  { id: 7, name: "Classic Samosa Chaat", price: 200, category: "Starters", desc: "Crisp samosa bites topped with chaat spices, yogurt, and tamarind sweetness.", emoji: "🥟", rating: 4.4, time: "10 min", veg: true },
  { id: 8, name: "Prawn Tempura", price: 430, category: "Starters", desc: "Light, crisp tempura prawns served with a tangy citrus dip.", emoji: "🦐", rating: 4.7, time: "22 min", veg: false },
  { id: 9, name: "Paneer Satay Skewers", price: 310, category: "Starters", desc: "Char-grilled paneer skewers with a fragrant satay-style peanut sauce drizzle.", emoji: "🥢", rating: 4.5, time: "19 min", veg: true },
  { id: 10, name: "Chicken Tikka Bites", price: 360, category: "Starters", desc: "Tandoor-seared chicken tikka pieces with smoky char and lemon-herb aroma.", emoji: "🍢", rating: 4.6, time: "18 min", veg: false },

  // Main Course
  { id: 11, name: "Butter Chicken", price: 420, category: "Main Course", desc: "Tender chicken in a rich tomato-butter gravy finished with a gentle spice warmth.", emoji: "🍛", rating: 4.9, time: "25 min", veg: false, badge: "Chef's Pick" },
  { id: 12, name: "Dal Makhani", price: 320, category: "Main Course", desc: "Slow-cooked black lentils with butter, cream, and a smooth, comforting texture.", emoji: "🫘", rating: 4.7, time: "22 min", veg: true },
  { id: 13, name: "Lamb Rogan Josh", price: 520, category: "Main Course", desc: "Kashmiri-style lamb in aromatic whole-spice gravy with deep, warm flavors.", emoji: "🥩", rating: 4.8, time: "30 min", veg: false },
  { id: 14, name: "Kadai Paneer", price: 360, category: "Main Course", desc: "Paneer cooked in a spiced tomato-pepper kadai masala with a hearty, tangy bite.", emoji: "🍲", rating: 4.6, time: "24 min", veg: true, badge: "Bestseller" },
  { id: 15, name: "Hyderabadi Biryani", price: 480, category: "Main Course", desc: "Fragrant basmati layered with slow-cooked mutton, saffron, and caramelized onions.", emoji: "🍚", rating: 5.0, time: "32 min", veg: false },
  { id: 16, name: "Palak Paneer", price: 350, category: "Main Course", desc: "Creamy spinach gravy with soft paneer cubes and a balanced, earthy spice profile.", emoji: "🥬", rating: 4.5, time: "20 min", veg: true },
  { id: 17, name: "Chicken Chettinad", price: 500, category: "Main Course", desc: "Chettinad chicken in a bold, toasted spice gravy with slow-cooked tenderness.", emoji: "🍗", rating: 4.7, time: "28 min", veg: false },
  { id: 18, name: "Stuffed Capsicum Curry", price: 310, category: "Main Course", desc: "Capsicum stuffed with spiced masala, simmered in a fragrant onion-tomato gravy.", emoji: "🫑", rating: 4.4, time: "23 min", veg: true },
  { id: 19, name: "Veg Dum Biryani", price: 380, category: "Main Course", desc: "Vegetable dum biryani with aromatic herbs, saffron notes, and rich caramelized flavors.", emoji: "🍲", rating: 4.6, time: "28 min", veg: true },
  { id: 20, name: "Egg Curry (Nadan Style)", price: 290, category: "Main Course", desc: "Soft eggs simmered in a spicy, coconut-forward curry with Kerala-style warmth.", emoji: "🥚", rating: 4.5, time: "18 min", veg: false },

  // Roti/Naan
  { id: 21, name: "Tandoori Roti (×3)", price: 90, category: "Main Course", desc: "Fresh tandoor-roasted roti served hot.", emoji: "🫓", rating: 4.4, time: "10 min", veg: true },
  { id: 22, name: "Garlic Butter Naan", price: 110, category: "Main Course", desc: "Fluffy naan brushed with garlic butter.", emoji: "🫓", rating: 4.6, time: "12 min", veg: true },
  { id: 23, name: "Mushroom Masala", price: 330, category: "Main Course", desc: "Sautéed mushrooms in a spiced onion-tomato masala.", emoji: "🍄", rating: 4.5, time: "22 min", veg: true },
  { id: 24, name: "Malai Kofta", price: 410, category: "Main Course", desc: "Crisp koftas in a creamy, aromatic gravy.", emoji: "🧆", rating: 4.8, time: "26 min", veg: true },

  // Beverages
  { id: 25, name: "Mango Lassi", price: 140, category: "Beverages", desc: "Chilled alphonso mango blended with thick, creamy yogurt.", emoji: "🥭", rating: 4.8, time: "5 min", veg: true, badge: "Seasonal" },
  { id: 26, name: "Masala Chai", price: 70, category: "Beverages", desc: "Spiced tea with ginger and cardamom.", emoji: "☕", rating: 4.6, time: "5 min", veg: true },
  { id: 27, name: "Fresh Lime Soda", price: 90, category: "Beverages", desc: "Zesty lime soda, sweet or salted.", emoji: "🍋", rating: 4.4, time: "3 min", veg: true },
  { id: 28, name: "Rose Sharbat", price: 110, category: "Beverages", desc: "Chilled rose syrup with basil seeds.", emoji: "🌹", rating: 4.3, time: "4 min", veg: true },
  { id: 29, name: "Jaljeera", price: 95, category: "Beverages", desc: "Tangy spiced jaljeera drink.", emoji: "🥤", rating: 4.5, time: "4 min", veg: true },
  { id: 30, name: "Mint Lemonade", price: 120, category: "Beverages", desc: "Fresh mint and lemon shaken with a crisp finish.", emoji: "🍋", rating: 4.4, time: "5 min", veg: true },
  { id: 31, name: "Cold Coffee", price: 160, category: "Beverages", desc: "Creamy cold coffee with a smooth, chocolatey finish.", emoji: "🧊", rating: 4.7, time: "6 min", veg: true },
  { id: 32, name: "Thandai", price: 170, category: "Beverages", desc: "Traditional spiced milk drink with nuts.", emoji: "🥛", rating: 4.6, time: "7 min", veg: true },

  // Desserts
  { id: 33, name: "Gulab Jamun", price: 160, category: "Desserts", desc: "Soft milk-solid dumplings soaked in rose syrup.", emoji: "🍮", rating: 4.9, time: "6 min", veg: true, badge: "Bestseller" },
  { id: 34, name: "Mango Kulfi", price: 190, category: "Desserts", desc: "Dense kulfi with real mango sweetness.", emoji: "🍦", rating: 4.7, time: "6 min", veg: true },
  { id: 35, name: "Double Ka Meetha", price: 210, category: "Desserts", desc: "Hyderabadi bread pudding soaked in saffron cream.", emoji: "🍞", rating: 4.8, time: "8 min", veg: true },
  { id: 36, name: "Phirni", price: 160, category: "Desserts", desc: "Creamy rice pudding infused with rose and saffron.", emoji: "🥣", rating: 4.5, time: "6 min", veg: true },
  { id: 37, name: "Rasmalai", price: 220, category: "Desserts", desc: "Soft rasmalai discs simmered in sweet milk.", emoji: "🧁", rating: 4.7, time: "10 min", veg: true },
  { id: 38, name: "Gajar Halwa", price: 240, category: "Desserts", desc: "Slow-cooked carrot halwa with ghee and spices.", emoji: "🥕", rating: 4.6, time: "12 min", veg: true },
  { id: 39, name: "Pista Kulfi", price: 230, category: "Desserts", desc: "Pistachio-rich kulfi with nutty finish.", emoji: "🥜", rating: 4.6, time: "7 min", veg: true },
  { id: 40, name: "Chocolate Brownie", price: 190, category: "Desserts", desc: "Fudgy chocolate brownie with a soft center.", emoji: "🍫", rating: 4.6, time: "8 min", veg: true, badge: "Bestseller" },
];

export const CATEGORIES = ["All", "Starters", "Main Course", "Beverages", "Desserts"];