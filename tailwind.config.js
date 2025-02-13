import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        accent: "#D4B055",
        roti: {
          50: "#faf8ec",
          100: "#f3edce",
          200: "#e8d9a0",
          300: "#dbc069",
          400: "#d4b055",
          500: "#bf9133",
          600: "#a57329",
          700: "#845524",
          800: "#6f4624",
          900: "#5f3b24",
          950: "#371f11",
        },
      },
      fontFamily: {
        "league-spartan-variable": ["League Spartan Variable"],
        "inter-variable": ["Inter Variable"],
        "alegreya-sans": ["Alegreya Sans"],
        "marck-script": ["Marck Script"],
        against: ["Against"],
        "cs-carline": ["CS Carline"],
        "rollgates-luxury": ["Rollgates Luxury"],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
