/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        prim: '#0A192F',
        sec: '#5FF1D0',
        text: '#4A5670',
        hone: '#CCD6F6',
        htwo: '#7D87A4',
        bgTrans: 'rgba(9, 24, 45, 0.8)',
        greenTint: 'rgba(100,255,218,0.1)',
        bgCard: '#112240',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
