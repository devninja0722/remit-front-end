const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        compound: "url('/img/bg-compound.svg')",
      },
      colors: {
        primary: "#121926",
      },
      fontFamily: {
        montserrat: ["Montserrat", "DM Sans", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ["10px"],
        sm: ["12px"],
        base: ["14px"],
        md: ["16px"],
        hero: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
