// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2fe',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          50: '#f0e7ff',
          600: '#9333ea',
        },
        secondary: {
          50: '#fef2f2',
        },
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
