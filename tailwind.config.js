/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Baskerville': ['Libre Baskerville', 'serif'],
        'WorkSans': ['Work Sans', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        DW: {
          lightGray: '#424549',
          gray: '#2C2F33',
          darkGray: '#1C1E21',
          white: '#EAECEE',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
