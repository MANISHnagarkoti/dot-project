
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./pages/**/*.{html,js}',
    './components/**/*.{html,js}',],

  theme: {
    extend: {
      colors: {

        theme: {

          colorOne: "#FFC758",
          colorTwo: "#114A8D",
          // colorThree: "rgb(0,61,43)"
        },
      },

    }, container: {
      center: true,
    },


    plugins: [],
  }


}