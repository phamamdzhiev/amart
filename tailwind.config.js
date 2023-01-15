const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        main: "#ff8048",
        secondary: "#F434A1",
        tertiary: "#4f3adf"
      },
      boxShadow: {
        'custom': '0px 0px 14px rgb(0 0 0 / 14%)'
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("autoprefixer")],
};
