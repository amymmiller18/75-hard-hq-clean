/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eucalyptus: {
          light: "#e6f4f3",
          DEFAULT: "#9cc5b0",
          dark: "#4f7265",
        },
        sand: "#f5f0e6",
        gold: "#c6a26d",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
