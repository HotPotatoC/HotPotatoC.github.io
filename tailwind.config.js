const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#F9FAFB",
        black: "#0a0a0a",
        primary: "#814df1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
