module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', "serif"] 
      },
      colors: {
        blueGreen: '#0E6F70',
        blue: '#75ABB0',
        lightBlue: '#8FBAAC',
        green: '#B9C422',
        lightGreen: '#D4D991'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
