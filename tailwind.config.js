/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        paper: {
          50: "#FCFBF9",
          100: "#F7F5EF",
          200: "#F0EEE6",
          300: "#E8E5DB",
          400: "#DCD8CB",
        },
        pine: {
          50: "#F0F6F2",
          100: "#E1EDE6",
          200: "#C8DED2",
          300: "#A3C4B1",
          400: "#77A28C",
          500: "#558770",
          600: "#3F6E57",
          700: "#33604C",
          800: "#275141",
          900: "#1F4234",
          950: "#143027",
        },
        gold: {
          50: "#FBF7EE",
          100: "#F5EBD3",
          200: "#EBDCA9",
          300: "#E0C27E",
          400: "#D4AF5E",
          500: "#C39845",
          600: "#A87D35",
          700: "#8A6528",
        },
        ink: {
          950: "#1D2420",
          900: "#252D28",
          800: "#2F3A33",
          700: "#414E46",
          600: "#55625A",
          500: "#6B786F",
          400: "#8A968C",
          300: "#A6B0A7",
          200: "#C7CFC7",
        },
        line: {
          DEFAULT: "#E7E4DA",
          strong: "#D9D4C7",
        },
        success: {
          DEFAULT: "#31855C",
          soft: "#EAF4EE",
          deep: "#276B4B",
        },
        warning: {
          DEFAULT: "#BC6C2E",
          soft: "#FBF4E6",
          deep: "#A25A26",
        },
        danger: {
          DEFAULT: "#B84A3E",
          soft: "#FCEFEA",
          deep: "#A23F32",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(24,32,27,0.03), 0 8px 24px -10px rgba(24,32,27,0.06)",
        "card-hover": "0 2px 4px rgba(24,32,27,0.04), 0 14px 36px -10px rgba(24,32,27,0.10)",
        pop: "0 24px 70px -18px rgba(11,33,28,0.22), 0 2px 8px rgba(11,33,28,0.05)",
      },
      borderRadius: {
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        card: "16px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out both",
        "slide-down": "slide-down 0.34s cubic-bezier(.22,.9,.35,1) both",
        "slide-up": "slide-up 0.38s cubic-bezier(.22,.9,.35,1) both",
        "scale-in": "scale-in 0.26s cubic-bezier(.22,.9,.35,1) both",
      },
    },
  },
  plugins: [],
}
