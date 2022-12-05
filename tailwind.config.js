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
      backgroundImage: {
        "dashed-img":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='9' stroke-linecap='square'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
