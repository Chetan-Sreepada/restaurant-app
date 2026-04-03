/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8622A",
        "primary-dark": "#C94D18",
        "primary-light": "#FFF0EA",
        surface: "#FFFFFF",
        "surface-alt": "#FAF8F5",
        text: "#1A1A2E",
        "text-muted": "#7C7C8A",
        border: "#EDE8E0",
      },
      boxShadow: {
        glow: "0 8px 32px rgba(232,98,42,0.28)",
      },
    },
  },
  plugins: [],
};

