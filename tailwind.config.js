/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-orange': '#FBC02D',
        'my-gray': '#969696',
        'bg-color' : '#F7F7F7',
        'myGray' : '#D4DFE4',
        'an-gray' : '#F9F9F9',
        'my-black' : '#292D32',
        'my-black2' : '#171717',

      },
      fontFamily: {
        'myFont': ['Poppins', 'sans-serif'],
        'myFont2' : [ 'Libre Baskerville', 'serif'],
      }
    },
  },
  plugins: [],
}

