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
        'zoom-in-up': {
          '0%': {
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)',
          },
          '80%': {
            opacity: 0.8,
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0%, 0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-out-down': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end), blink 0.5s step-end infinite',
        zoomInUp: 'zoom-in-up 1s ease-out 0.25s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
        fadeoutdown: 'fade-out-down 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
}
