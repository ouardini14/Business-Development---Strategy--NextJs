/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'MainImage' : "url('/img/MainImage.png')",

      },
      fontFamily: {  
        'AvenirLT': ['AvenirLT', 'sans-serif;'] , 
        'AvenirHeavy': ['AvenirHeavy', 'sans-serif;'] ,
        'lulo': ['lulo', 'sans-serif;'] 

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}
