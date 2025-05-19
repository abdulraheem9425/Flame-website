/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 3.5s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      colors: {
        brand: {
          yellow: '#FACC15',
          dark: '#1F2937',
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
