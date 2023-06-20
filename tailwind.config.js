/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // asi es la forma de poner color con variable en tailwind
      colors: {
        "primary-color": '#ec7c6a',
        "secondary-color": '#262837',
        "menu-color": '#1f1d2b'

      },

      plugins: [],
    },
  },
}

