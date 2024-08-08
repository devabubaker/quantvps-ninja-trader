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
      backgroundImage: {},
      boxShadow: {
        Shadow1: "0px 2px 10px 0px #0000001A",
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
