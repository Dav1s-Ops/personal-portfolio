/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_gray: '#D8D8D8',
        med_gray: '#4B4B4B',
        dark_gray: '#303030',
        serious_orange: '#D40C0C',
        alien_green: '#A4F236',
        serious_purple: '#382A40'
      },
      fontFamily: {
        'compacta': ['AC Compacta', 'sans-serif'],
        // 'mussels': ['TT Mussels', 'sans-serif'],
        // 'mussels-bold': ['TT Mussels Xtra Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}