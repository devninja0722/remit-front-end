const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        1: "4px",
        2.5: "10px",
      },
      backgroundImage: {
        compound: "url('/img/bg-compound.svg')",
      },
      colors: {
        primary: "#121926",
        blue: "#0595F8",
        red: "#E93B04",
        "dark-gray": "#BEBCBC",
        "light-gray": "#CFCDCD",
        stroke: "#ECECEC",
      },
      fontFamily: {
        montserrat: [
          "MontserratVariable",
          "DM Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ["10px"],
        sm: ["12px"],
        base: [
          "14px",
          {
            fontWeight: "500",
          },
        ],
        md: ["16px"],
        lg: ["18px"],
        xl: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "2xl": [
          "26px",
          {
            lineHeight: "31.04px",
            fontWeight: "700",
            letterSpacing: "3.5%",
          },
        ],
      },
      minWidth: {
        96: "384px",
      },
    },
  },
  plugins: [],
};
