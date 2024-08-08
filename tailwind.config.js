/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '750px',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
}

