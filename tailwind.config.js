/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#6772E5',
        },
        purple: {
          dark: '#42389D',
        },
        grey: {
          DEFAULT: '#A0A6B3',
          100: '#8C96A9',
        },
        black: {
          DEFAULT: '#1A202C',
        },
        tint: {
          DEFAULT: '#E7E9FA',
        },
      },
    },
  },
  plugins: [],
};
