/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'satoshi-light': ['Satoshi', 'sans-serif'],
        'satoshi-medium': ['Satoshi', 'sans-serif'],
        'satoshi-bold': ['Satoshi', 'sans-serif'],
        'satoshi-black': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}