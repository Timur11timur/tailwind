module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
