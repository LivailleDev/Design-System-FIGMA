/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
],
  theme: {
    fontSize:{
      xs: 14, 
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
      tranparent:'transparent',

      black: '#000',
      white: '#fff',
      
      gray: {
      900: '#1F1E1E',
      800: '#1C1B1B',
      400: '#7C7C8A',
      200: '#C4C4C6',
      100: '#E1E1E6',
      },

      cyan:{
      500: '#8ABAF6',
      400: '#81D8F0',
    }
    },
     extend: {
      fontFamily:{
        sans:'Inter,sans-serif',
      },
    },
  },
  plugins: [],
}
