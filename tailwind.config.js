/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'grey': '#39383A',
      'lightgrey': '#F4F4F4',
      'midgrey': '#D6D6D6',
      'yellow': '#D5DE24',
    },
    fontSize: {
    },
    fontFamily: {
      sans: ["azo-sans-web", "sans-serif"],
      heading: ["normalidad-wide", "sans-serif"],
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
}