/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#000000', 
        'bg-primary': '#000000', 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('daisyui'),
  ],
};



