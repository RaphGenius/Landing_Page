/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#B39188",
        "primary-300": "#CCAEA4",
        "primary-500": "#392E2C",
        "secondary-100": "#FAF2EA",
        "secondary-300": "#FFAE9D",
        "tertiary-100": "#226D68",
        "tertiary-300": "#137C8B",
      },
      fontFamily: {
        martel: ["'Martel Sans', sans-serif"],
        mukta: ["Mukta Vaani", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
