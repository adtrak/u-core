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
      'midgrey': '#A6B3B5',
      'darkgrey': '#39383A',
      'yellow': '#D5DE24',
    },
    fontSize: {
    },
    fontFamily: {
      sans: ["azo-sans-web", "sans-serif"],
      heading: ["normalidad-wide", "sans-serif"],
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.4rem',
      '2xl': '1.7rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.1rem',
    },
  },
  plugins: [],
}