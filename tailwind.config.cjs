/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blk: "#191919",
        gry: "#999999",
        wht: "#f5f5f7",
        purp: "#6d3ec4",
        orng: "#ff9345",
      },

      fontFamily: {
        dm: "DM sans"
      }
    },
  },
  plugins: [],
}


