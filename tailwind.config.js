/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      primary: "#6f6af8",
      white: "#fff",
      red: "rgb(255, 63, 63);",
      bg_color: "hwb(240 95% 0%)",
    },},
  },  
  plugins: [],
};
