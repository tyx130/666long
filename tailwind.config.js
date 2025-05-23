/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f2',
          100: '#f2eee3',
          200: '#e5ddc9',
          300: '#d7c8a3',
          400: '#c9b27e',
          500: '#ba9c5a',
          600: '#a48547',
          700: '#86693a',
          800: '#6e5535',
          900: '#5a462e',
          950: '#32261a',
        },
        secondary: {
          50: '#f1f7fb',
          100: '#e2f0f7',
          200: '#bddcec',
          300: '#87c1db',
          400: '#4da1c7',
          500: '#3085ae',
          600: '#286a93',
          700: '#255676',
          800: '#234862',
          900: '#223d53',
          950: '#162736',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc170',
          400: '#ff9d38',
          500: '#ff7a10',
          600: '#f35a00',
          700: '#c93d02',
          800: '#9f3209',
          900: '#812c0c',
          950: '#461306',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
      },
    },
  },
  plugins: [],
};