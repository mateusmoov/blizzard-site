

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-primary': '#FFFFFF',
        'white-secondary': '#E5E5E5',
        'gray-lowContrast': '#828792',
        'primary': '#00AEFF',
        'background': '#020203'
      },
      backgroundImage: {
        'banner1': "radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url('/assets/banner/banner-1.png')"
      }
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    }
  },
  plugins: [],
}
