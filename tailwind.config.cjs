/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'primary': '#00AEFF',
        'black': '#020203',
        'white': '#FFFFFF',
        'platinum': {
          100: '#E5E5E5',
          200: '#8F9199',
          300: '#828792',
        },
      },
      backgroundImage: {
        '1': "radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%))",
        '2': "url('/assets/footer-background.png')",
        '3': "url('/assets/ilustrations/app.png')"
      },
      gridTemplateColumns: {
        'hero': '221px 562px 497px'
      }
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    },
    keyframes: {
      slide: {
        from: {
          transform: 'translateX(-100%)',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
    },
    animation: {
      slide: 'slide 10s linear',
    },
  },
  plugins: [],
}
