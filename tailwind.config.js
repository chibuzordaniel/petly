/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    


    screens:{

      sl: "320",

      sm: "280px",


      md: "768px",


      lg: "1024px",


      xl: "1280px",


      '2xl': '1536px'
    },
    extend: {
     animation:{
       pulse: ' pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
     },
      keyframes:{
        pulse:{
          '0%, 100%':{
           opacity: 1
          },

          '50%': {
            opacity: 0
          }
        }
      },

   

      fontFamily: {
        inter: 'Inter'
      },

      backgroundColor: {
        'filterlight' : 'rgba(255, 255, 255, 0.87);'
       },

      
    },
  },
  plugins: [],
}

