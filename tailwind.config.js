/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barber-bg': '#0f1115',      // Fondo casi negro, tipo carbón
        'barber-panel': '#1a1d24',   // Fondo ligeramente más claro para botones
        'barber-silver': '#e2e8f0',  // Plata brillante y limpio
        'barber-silver-dark': '#94a3b8', // Plata oscuro para textos secundarios
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Títulos imponentes
        inter: ['Inter', 'sans-serif'],   // Textos legibles y modernos
      }
    },
  },
  plugins: [],
}