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
      },
      fontFamily: {
        sans: ['Gilmer', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
