/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C192C',
        card: '#13263E',
        currency: '#00FFFE',
        text: '#97BAE9',
        customColor: '#FF0000', 
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
};
