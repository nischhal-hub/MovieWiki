/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playFair:["Playfair Display", "sans-serif"]
    },
  },
  colors: {
    'primary':'#002e47',
    'secondary': '#66b7a2',
    'secondary-500':'#74beaa',
    'background': '#f0f0fa',
    'accent':'#ac8da6',
    'textDark': '#08080a',
    'textLight': '#f0f0fa',
    'textSecondary': 'rgb(100 116 139)',
    'transparentBg' : 'rgba(0,0,0, 0.4)',
    'deleteRed' : 'rgb(220 38 38)'
  }
},
  plugins: [],
}
