/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_gray: '#565656',
        med_gray: '#3c3c3c',
        dark_gray: '#303030',
        serious_orange: '#D40C0C',
        alien_green: '#A4F236',
        alien_green_dark: '#72a925',
        alien_green_light: '#bff572',
        serious_purple: '#382A40'
      },
      fontFamily: {
        'compacta': ['AC Compacta', 'sans-serif'],
        'mussels': ['TT Mussels', 'sans-serif'],
        'mussels-bold': ['TT Mussels Xtra Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}