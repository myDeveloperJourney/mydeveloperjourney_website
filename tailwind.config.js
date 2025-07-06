/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0D0D0D',
        darkbgAlt: '#121212',
        purpleAccent: '#6C3EBE',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Source Code Pro', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#6C3EBE' },
        },
      },
    },
  },
  plugins: [],
}
