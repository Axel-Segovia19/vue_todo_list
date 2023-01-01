/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue:{
        '300': '#b8d3e0',
        '500': '#7fb0c7',
        '800': '#0995DC'
      },
      green:{
        '500' : '#50C878',
      },
      red:{
        '600' : '#DA2116'
      },
      orange: {
        '600' : '#DCA90C'
      }
    },
    extend: {},
  },
  plugins: [],
}
