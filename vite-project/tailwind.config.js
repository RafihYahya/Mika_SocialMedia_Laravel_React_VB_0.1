/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'palete':{
          100:'#46065c',
          200:'#810CA8',
          300:'#C147E9',
          400:'#E5B8F4',
          
        },
    },
    },
  },
  plugins: [],
}

