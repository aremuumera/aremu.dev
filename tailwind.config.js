/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack : '#111',
        mainBlack1: '#131313',
        mainBlack2: '#232323',
        mainBlack3: '#333333',
        textColor: '#bbbbbb',
        HeaderTextColor: '#ededed',
        BgColor: '#62398A',
      },
      boxShadow: {
        shadow1: '0 2px 3px #0000003d',
      }
    },
  },
  plugins: [],
}

