/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0C0F2C',
      },
      fontFamily: {
        Outfit: ['Outfit']
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
