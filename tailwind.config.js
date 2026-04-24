/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./booking.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary":          "#dfaa66",
        "background-dark":  "#3b2717",
        "card-bg":          "rgba(163, 87, 0, 0.15)",
        "surface-dark":     "#4a321f",
      },
      fontFamily: {
        "display": ["Cormorant Garamond", "serif"],
        "sans":    ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg":      "1rem",
        "xl":      "1.5rem",
        "full":    "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
