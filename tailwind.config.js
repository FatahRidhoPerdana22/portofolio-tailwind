/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/**/*.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#1e293b',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end), blink 0.5s step-end infinite',
        rotateY: 'rotateY 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
