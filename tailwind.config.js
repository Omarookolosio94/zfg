/** @type {import('tailwindcss').Config} */
import { addIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: () => ({
        primary: "#0fa0cd", // Dark Blue
        secondary: "#1d1d1d",
        dark: "#116683",
        accent: "#F97316", // Bright Orange (Action buttons, highlights)
        "accent-hover": "#EA670F", // Darker Orange (Hover state for buttons)
        white: "#FFFFFF", // White (Text on buttons, dark backgrounds)
        shade: "#A5A5A5",
        "hover-border": "#EA670F", // Hover border for buttons
        shadow: "rgba(0, 0, 0, 0.1)", // Optional box shadow for button hover
      }),
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    addIconSelectors([
      "mdi",
      "logos",
      "solar",
      "pepicons",
      "ion",
      "foundation",
      "oi",
      "mi",
    ]),
    require("@tailwindcss/line-clamp"),
  ],
};
