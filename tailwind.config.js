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
        "dm-serif-display": ["DM Serif Display"],
        "unbounded-variable": ["Unbounded Variable"],
        inter: ["Inter Variable"],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
