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
      'black': '#0D021A',
      'blue': '#3b5cc4',
      'green': '#32CD32',
      'red': '#DC143C',
      'dark-blue': '#12284c',
      'grey': '#F5F5F5',
    },
    fontSize: {
    },
    fontFamily: {
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