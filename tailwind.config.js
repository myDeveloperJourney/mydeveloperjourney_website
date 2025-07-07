/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        mono: ['monospace', 'Source Code Pro', 'JetBrains Mono'],
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
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.75)',
        glow: '0 0 5px #6C3EBE, 0 0 10px #6C3EBE, 0 0 20px #6C3EBE',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    },
  ],
}
