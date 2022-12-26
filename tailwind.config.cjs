

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00AEFF',
        'black': '#020203',
        'white': '#FFFFFF',
        'platinum': {
          100: '#E5E5E5',
          200: '#828792',
        },
      },
      backgroundImage: {
        '1': "radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url('/assets/banner-hero/games/diablo-bg.png')"
      },
      gridTemplateColumns: {
        'hero': '221px 562px 497px'
      }
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    }
  },
  plugins: [],
}
