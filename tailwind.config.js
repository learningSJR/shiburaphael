const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "slide-x": "slide-x 4s ease-in-out infinite", // 👈 custom animation
        "gradient-move": "gradient-move 6s linear infinite",
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "slide-x": {
          "0%, 100%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(50%)" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        // 🔧 GitHub-style dark theme
        background: {
          dark: "#0d1117",
          light: "#ffffff",
        },
        surface: {
          dark: "#161b22",
          light: "#f6f8fa",
        },
        text: {
          dark: "#c9d1d9",
          light: "#24292f",
        },
        border: {
          dark: "#30363d",
          light: "#d0d7de",
        },
        primary: {
          DEFAULT: "#2f81f7",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
