/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cta-img" : "url(./img/mic.png)",
      }
    }
  },
  plugins: [],
}
