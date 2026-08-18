/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barber-black': '#0D0D0D',
        'barber-dark': '#1A1A1A',
        'barber-silver': '#D1D5DB',
        'barber-silver-light': '#F3F4F6',
        'barber-red': '#8B1C1C',
      }
    },
  },
  plugins: [],
}