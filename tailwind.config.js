/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#06070a',
          900: '#0b0d13',
          850: '#10131c',
          800: '#171b26',
          750: '#1e2332',
          700: '#272d3f',
          600: '#343b52',
        },
        platinum: {
          50: '#fbfbfc',
          100: '#f4f4f7',
          200: '#e8e8ee',
          300: '#d5d6e0',
          400: '#a3a5b8',
          500: '#71748a',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      boxShadow: {
        'cinema': '0 30px 80px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'luxury': '0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-soft': '0 0 50px -10px rgba(59, 130, 246, 0.25)',
        'glow-gold': '0 0 45px -10px rgba(245, 158, 11, 0.2)',
        'glow-emerald': '0 0 45px -10px rgba(16, 185, 129, 0.25)',
        'inner-line': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        }
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
