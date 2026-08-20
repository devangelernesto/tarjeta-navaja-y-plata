/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barber-bg': '#0f1115',      
        'barber-panel': '#1a1d24',   
        'barber-silver': '#e2e8f0',  
        'barber-silver-dark': '#94a3b8', 
        'barber-red': '#8B1C1C', // <-- Regresamos el rojo sangre/vino del logo
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],   
      }
    },
  },
  plugins: [],
}