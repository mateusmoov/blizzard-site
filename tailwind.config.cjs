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
        'black': {
          100: '#0F1114',
          200: '#020203'
        },
        'white': '#FFFFFF',
        'platinum': {
          100: '#E5E5E5',
          200: '#8F9199',
          250: '#9D9D9D', // sorry 
          300: '#828792',
          400: '#363842',
        },
      },
      backgroundImage: {
        '1': "radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%))",
        '2': "url('/assets/footer-background.png')",
        '3': "url('/assets/ilustrations/app.png')",
        'menu': 'linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 96.35%, rgba(14, 17, 23, 0.9) 100%)',
        'login': "url('/assets/background-login.png')"
      },
      gridTemplateColumns: {
        'hero': '221px 562px 497px'
      }
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'inter': 'Inter'
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
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    },
    animation: {
      slide: 'slide 5s ease-in-out',
      fade: 'fade 4s ease-in-out'
    },
  },
  plugins: [],
}
