/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b6b', // coral-red accent
          dark: '#e64949',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};