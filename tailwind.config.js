module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#06030F',
        'button-hover-background': '#222027',
        'light-border': '#333744',
        'soft-font': '#575B6A',
        'primary-accent': '#4E27B2',
        'primary-accent-light': '#935edf',
        'secondary-accent': '#4cebad',
      },
      fontFamily: {
        sans: ['Gilmer', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'random-movements': {
          '0%, 100%': { transform: 'rotate(-3deg) translate(100px, -20px)' },
          '30%': { transform: 'rotate(-30deg) translate(20px, 50px)' },
          '70%': { transform: 'rotate(30deg) translate(-20px, 100px)' },
        },
        'random-movements-2': {
          '0%, 100%': { transform: 'rotate(-3deg) translate(10px, -200px)' },
          '40%': { transform: 'rotate(90deg) translate(-40px, 400px)' },
          '80%': { transform: 'rotate(-30deg) translate(20px, 300px)' },
        },
        'random-movements-3': {
          '0%, 100%': { transform: 'rotate(-3deg) translate(100px, -300px)' },
          '30%': { transform: 'rotate(-30deg) translate(80px, -200px)' },
          '70%': { transform: 'rotate(30deg) translate(-40px, 50px)' },
        },
      },
      animation: {
        'random-movements': 'random-movements 5s ease-in-out infinite',
        'random-movements-2': 'random-movements-2 8s ease-in-out infinite',
        'random-movements-3': 'random-movements-3 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
