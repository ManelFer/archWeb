/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'soft-rose': '#E5ADA8',
        'warm-beige': '#D0A77B',
        'cream': '#EFE8D8',
        'accent-pink': '#E530D8',
        'warm-brown': '#725C3F',
        'sage-green': '#D8D7B2',
      },
    },
  },
  plugins: [],
};