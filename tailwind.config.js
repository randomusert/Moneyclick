/** @type {import('tailwindcss').Config} */

const mclick_theme = require("mclick-theme")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
  presets: [mclick_theme]
}

