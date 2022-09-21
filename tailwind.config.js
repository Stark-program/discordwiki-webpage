/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Artifika: ['Artifika', 'sans-serif'],
        PT_Sans: ['PT Sans', 'sans-serif'],
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
