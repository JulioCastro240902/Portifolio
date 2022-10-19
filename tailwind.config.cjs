/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    screens: {
      "3xl": "1920px",
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
    extend: {
      fontFamily: {
        sans: ["Gemunu Libre", "sans-serif"],
      },
      backgroundImage: {
        Aisin: "url('./assets/Aisin.jpg')",
        Pepsico: "url('./assets/Pepsico.jpg')",
        Texxia: "url('./assets/Texxia.jpg')",
      },
    },
  },
  plugins: [],
};
