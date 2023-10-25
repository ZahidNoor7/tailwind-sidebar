/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "420px",
      md: "768px",
      lg: "976px",
      xl: "1366px",
    },

    fontSize: {
      h1: "24px",
      h2: "22px",
      h3: "18px",
      h4: "16px",
      h5: "14px",
      h6: "11px",
    },

    margin: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },

    padding: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },

    gap: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "20px",
      xl: "25px",
    },

    height: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "20px",
      xl: "25px",
    },

    width: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "20px",
      xl: "25px",
      full: "100%",
    },

    spacing: {
      xs: "350px",
      sm: "420px",
      md: "768px",
      lg: "976px",
      xl: "1366px",
    },

    colors: {
      white: "white",
      textColor: "white",
      btnTextColor: "#cc135d",
      background: "#cc135d",
      hover: "#d84b84",
      list: "#d0266a",
      primaryBtn: "#ffd5e8",
      borderColor: "#e176a1",
      darkBlue: "#16163a",
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      0.5: "0.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
    },
  },
  plugins: [],
};
