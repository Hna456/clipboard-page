/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: '#26baa4',
        lightBlue: '#6173ff',
        grayBlue: '#4c545d',
        gray: '#9fabb2'
      },
      fontFamily: {
        'Bai': ['Bai Jamjuree', 'sans-serif']
      },
      backgroundImage: {
        'desktop': "url('images/bg-header-desktop.png')",
        'mobile': "url('images/bg-header-mobile.png')",
      }
    },
  },
  plugins: [],
}

