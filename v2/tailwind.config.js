module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: {
          50: "#efddf2",
          100: "#e5c6ea",
          500: "#b516d1",
          "500_01": "#a82eba",
          "500_02": "#a320b9",
          "500_f7": "#a82db9f7",
          "500_03": "#963aa5",
          "500_04": "#b716d3",
        },
        gray: {
          100: "#f7eff9",
          200: "#e5e8ea",
          900: "#1c0a1e",
          "100_01": "#f7f0fa",
        },
        pink: { 800: "#a53a7a" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { notoserif: "Noto Serif" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
