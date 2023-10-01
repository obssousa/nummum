/** @type {import('tailwindcss').Config} */

const ionic = require('@aparajita/tailwind-ionic')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Roboto, sans-serif",
      ]
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
    extend: {},
  },
  plugins: [ionic('src/theme/variables.css')]
}