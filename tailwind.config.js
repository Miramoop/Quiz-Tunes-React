/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors : {
        primary : {
            100: 'palegoldenrod',
        }
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("daisyui"),
  ],
};

