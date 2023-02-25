/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'backGround' : '#f5f0e1' ,
      'orange' : '#ff6e40',
      'blue' : '#1e3d59',
      'yellow' : '#ffc13b'
    },
  },
  plugins: [],
}
