/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Raleway", "ui-sans-serif"],
      },
      colors: {
        primary: "#1c3e6e", //Navy
        "primary-dark": "#092c4c", //Dark Navy
        secondary: "#fa9d26", //Orange
        tertiary: "#30aa53", //Green
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
