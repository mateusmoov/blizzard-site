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
      }
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    }
  },
  plugins: [],
}
