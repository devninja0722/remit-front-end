const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        1.5: "6px",
        2.5: "10px",
      },
      borderRadius: {
        1: "4px",
        2.5: "10px",
      },
      backgroundImage: {
        compound: "url('/img/bg-compound.svg')",
      },
      colors: {
        primary: "#121926",
        secondary: "#484848",
        dark: "#1A1A1A",
        blue: "#0595F8",
        "dark-blue": "#1E4FFF",
        red: "#E93B04",
        warning: "#F1921B",
        success: "#00B812",
        "light-green": "#DFFFE2",
        "dark-gray": "#BEBCBC",
        "light-gray": "#CFCDCD",
        stroke: "#ECECEC",
        disabled: "#697586",
        gray: "#EBEFFF",
        ...defaultTheme.colors,
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
        base: ["14px"],
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
      maxWidth: {
        24: "96px",
        40: "160px",
      },
      minWidth: {
        56: "14rem",
        60: "240px",
        80: "360px",
        96: "384px",
      },
    },
    ...defaultTheme,
  },
  plugins: [],
};
