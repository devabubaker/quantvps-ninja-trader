/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    colors: {},

    extend: {
      backgroundImage: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "501px",
      md: "800px",
      lg: "1080px",
      xl: "1280px",
    },
  },
  plugins: [],
};
