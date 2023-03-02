/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heart: {
          '0%' : {transform: 'scale(0)'  },
	        '50%' : { transform: 'scale(2)' },
          '100%' : { transform: 'scale(0)' },
        },
      },
      animation: {
        'heart-anim': 'heart 1s linear infinite',
      },
    },
    colors: {
      'backGround' : '#f5f0e1' ,
      'orange' : '#ff6e40',
      'blue' : '#1e3d59',
      'yellow' : '#ffc13b',
      'purple' : '#BF40BF'
    },
  },
  plugins: [],
}
