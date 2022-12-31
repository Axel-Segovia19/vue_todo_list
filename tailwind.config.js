/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'cyan-300': '#b8d3e0',
      'cyan-500': '#7fb0c7',
      green:{
        'emerald-green' : '#50C878'
      },
      red:{
        'red-600' : '#DA2116'
      }
    },
    extend: {},
  },
  plugins: [],
}
