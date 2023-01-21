/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary' : '#252733',
        'secondary' : '#A4A6B3',
        'btn' : '#0074DB',
        'btn-home' : '#0A889A',
        'btn-orange' : '#F2994A',
        'from' : '#224957',
        'green' : '#20DF7F',
      },
      fontFamily: {
        'LexendDeca' : ['Lexend Deca'],
        'Muli' : ['muli'],
        'Mulish' : ['Mulish'],
      },
      boxShadow: {
        '3xl' : '0px 4px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
