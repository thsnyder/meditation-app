/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./meditation-app.js",
    "./styles.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C11F32',
          light: '#EE2B38',
        },
        secondary: '#B8A8A8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

