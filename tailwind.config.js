const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: "1.5rem",
        sm: "2rem",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      green: {
        light: "#afc2b3",
        default: "#afc2b3",
      },
    },
    scale: {
      "-1": "-1",
    },
    rotate: {
      "-30": "-30deg",
    },
    fontFamily: {
      sans: ["Courgette", "sans-serif"],
    },
    fontSize: {
      xxs: ["0.75rem", "1.2"],
      xs: ["0.875rem", "1.3"],
      sm: ["1rem", "1.4"],
      base: ["1.25rem", "1.4"],
      lg: ["1.5rem", "1.3"],
      xl: ["2rem", "1"],
      "2xl": ["2.5rem", "1"],
      "3xl": ["2.5rem", "1.2"],
      "4xl": ["3.75rem", "1"],
      "5xl": ["5rem", "1"],
      "6xl": ["7.5rem", "0.84"],
      "7xl": ["8.75rem", "0.84"],
      "8xl": ["10rem", "0.84"],
    },
    screens: {
      xxs: "400px",
      xs: "500px",
      ...screens,
      xxl: "1460px",
    },
    extend: {
      lineHeight: {
        11: "2.75rem",
        vtight: "0.9",
      },
      borderWidth: {
        12: "12px",
        20: "20px",
      },
      spacing: {
        e: "0.1em",
        "1e": "1em",
        "1/2": "50%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        7: "1.75rem",
        9: "2.25rem",
        18: "4.5rem",
        35: "8.75rem",
        60: "15rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      width: {
        50: "12.5rem",
        80: "20rem",
        110: "27.5rem",
      },
      height: {
        15: "3.75rem",
        80: "20rem",
        110: "27.5rem",
        120: "32.5rem",
      },
      zIndex: {
        60: 60,
      },
    },
    backgroundImage: (theme) => ({
      border: "url('/border.png')",
      flowers: "url('/flowers.png')",
      "flowers-tile": "url('/flowers-tile.jpg')",
      "flowers-corner": "url('/flowers-corner.jpg')",
    }),
  },
  variants: {
    ringWidth: ["focus"],
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      "nuxt.config.ts",
    ],
  },
};
