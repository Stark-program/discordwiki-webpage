/** @type {import('tailwindcss').Config} */

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
          gray: '#2C2F33',
          white: '#EAECEE',
        },
      },
    },
  },
  plugins: [],
};
