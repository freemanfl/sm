/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        prim: '#0A192F',
        sec: '#38C89A',
        text: '#4A5670',
        hone: '#CCD6F6',
        htwo: '#7D87A4',
        bgTrans: 'rgba(9, 24, 45, 0.8)',
        greenTint: 'rgba(100,255,218,0.1)',
        bgCard: '#112240',
        grey2: ['#D8D6D6']
      },
      aspectRatio: {
        'video': '16 / 9 ',
      },
      fontFamily: {
        'mon': ['Montserrat', 'system-ui'],
        'serif': ['ui-serif', 'Georgia' ],
        'bd': ['Blacker Display'],
        
      }
    },
  },
  plugins: [],
}
