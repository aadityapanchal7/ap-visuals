/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0C0F2C',
        'Button1': '#8F8FDB',
        'Button2': '#322A65',
        "Button3": '#94CFCF',
      },
      fontFamily: {
        Outfit: ['Outfit'],
        Roboto: ['Roboto']
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
