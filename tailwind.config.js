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
          50: "#FCFBF8",
          100: "#F6F4EE",
          200: "#EFECE3",
          300: "#E6E2D6",
          400: "#D8D3C4",
        },
        pine: {
          50: "#EFF5F1",
          100: "#DEEBE4",
          200: "#C0D8CA",
          300: "#95BCA6",
          400: "#64987D",
          500: "#437B5F",
          600: "#2E654C",
          700: "#23523E",
          800: "#1A4031",
          900: "#123026",
          950: "#0A211A",
        },
        gold: {
          50: "#FBF6EA",
          100: "#F4E8C9",
          200: "#E9D49B",
          300: "#DDBA6B",
          400: "#CDA248",
          500: "#B9882E",
          600: "#996D24",
          700: "#7A551F",
        },
        ink: {
          950: "#121815",
          900: "#18201B",
          800: "#253029",
          700: "#35423A",
          600: "#4A584F",
          500: "#616E65",
          400: "#7E8A81",
          300: "#9DA89F",
          200: "#BFC8C0",
        },
        line: {
          DEFAULT: "#E2DFD4",
          strong: "#D2CDBC",
        },
        success: {
          DEFAULT: "#1F7A4D",
          soft: "#E6F2EB",
          deep: "#175C3B",
        },
        warning: {
          DEFAULT: "#B45309",
          soft: "#FBF1DF",
          deep: "#92400E",
        },
        danger: {
          DEFAULT: "#B3372B",
          soft: "#FBECE8",
          deep: "#8E2A20",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(24,32,27,0.05), 0 6px 20px -8px rgba(24,32,27,0.08)",
        "card-hover": "0 2px 4px rgba(24,32,27,0.06), 0 12px 32px -8px rgba(24,32,27,0.14)",
        pop: "0 24px 70px -18px rgba(11,33,28,0.35), 0 2px 8px rgba(11,33,28,0.08)",
      },
      borderRadius: {
        card: "14px",
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
        "fade-in": "fade-in 0.25s ease-out both",
        "slide-down": "slide-down 0.28s cubic-bezier(.16,1,.3,1) both",
        "slide-up": "slide-up 0.3s cubic-bezier(.16,1,.3,1) both",
        "scale-in": "scale-in 0.22s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
}
