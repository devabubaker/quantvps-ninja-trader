/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"],
      Geist: ["Geist"],
    },
    colors: {},

    extend: {
      backgroundImage: {
        linearGradient1: "linear-gradient(180deg, #C7D2FE 0%, #8678F9 100%)",
        linearGradient2:
          "linear-gradient(103.87deg, #000103 0%, #0F141A 45%, #1E2631 50%, #0F141A 55%, #000103 100%)",
      },
      boxShadow: {
        Shadow1: "0px 2px 10px 0px #0000001A",
        Shadow2: "0px 1px 2px 0px #0000000D",
      },
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
