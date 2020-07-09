const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1881fe",
        light_gray: "#fafafa",
      },
      borderRadius: {
        xl: "1rem",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
