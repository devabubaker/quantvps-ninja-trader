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
        Shadow3: "0px 7.86px 30.48px -2.62px #10182833",
        Shadow4: "0px 4px 6px -1px #0000001A",
      },
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "501px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
    },
  },
  plugins: [],
};
