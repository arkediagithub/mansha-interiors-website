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
      },
      fontFamily: {
        "league-spartan-variable": ["League Spartan Variable"],
        "inter-variable": ["Inter Variable"],
        "alegreya-sans": ["Alegreya Sans"],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
