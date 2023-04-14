/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'golria-bold': ['gilroy-bold'],
      'golria-medium': ['gilroy-medium'],
      'golria-regular': ['gilroy-regular'],
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#1E1E1E',
      'secondary': '#E58411',
      'gray': '#EEEEEE',
      'dark': '#0D1B39',
      'white': '#FFFFFF'
    },
  },
  plugins: [],
}
