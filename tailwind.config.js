/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  safelist: [
    'absolute',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'green': '#71a300',
        'green-dark': '#84bd00',
        'yellow': '#ffcd00',
        'yellow-light': '#f7e28e',
        'teal': '#008e92',
        'teal-dark': '#15666a',
        'blue': '#00269a',
        'blue-light': '#118ad7',
        'navy': '#118ad7',
        'orange': '#BC5E2C',
        'purple-dark': '#653c5f',
        'purple': '#854F7D',
        'grey': '#324150',
        'grey-light': '#f1f1f1',
        'grey-md': '#ccc',
        'grey-dark': '#999',
        'grey-darker': '#666',
        'white': '#fff',
        'black': '#000',
        'transparent': 'transparent',
      },
    },
  },
  plugins: [],
}
